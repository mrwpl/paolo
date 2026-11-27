(() => {
  'use strict';
  const data = window.FANO_GRAPH;
  const el = id => document.getElementById(id);
  if (!data || !Array.isArray(data.nodes)) {
    el('panel-description').textContent = 'The result data could not be loaded. Keep graph-data.js in the same directory as this page.';
    el('graph-empty').hidden = false;
    return;
  }
  const NS = 'http://www.w3.org/2000/svg';
  const meta = data.meta || {};
  const nodes = data.nodes;
  const byId = new Map(nodes.map(n => [n.id, n]));
  const panels = data.panels || [];
  const byPanel = new Map(panels.map(p => [p.id, p]));
  const children = new Map(nodes.map(n => [n.id, []]));
  const statuses = {
    verified: {label:'Verified', color:'#177c5d', light:'#edf7f1'},
    partial: {label:'Partly assembled', color:'#9a6116', light:'#fcf5e8'},
    in_progress: {label:'In progress', color:'#a36911', light:'#fff6e7'},
    compiled: {label:'Compiled · audit pending', color:'#6754a7', light:'#f3f0fa'},
    planned: {label:'Open target', color:'#637780', light:'#f4f7f8'}
  };
  const origins = {project:'This project', mathlib:'Mathlib', axiom_stacks:'Axiom / Stacks', axiom_mmp:'Axiom / MMP', mixed:'Combined sources', unassigned:'Not yet assigned'};
  const shortPanels = {A:'Classification overview', B:'Index-two models', C:'Degree-four recognition', D:'Two-quadric construction', E:'Index-one models', F:'Family classification', G:'Shared foundations', H:'Cubic proof details'};
  const deps = n => [...new Set([...(n.dependencies || []), ...(n.alternativeDependencies || [])])].filter(id => byId.has(id));
  nodes.forEach(n => deps(n).forEach(id => children.get(id).push(n.id)));
  const state = {panel:byPanel.has('A')?'A':panels[0]?.id || 'all', query:'', status:'all', origin:'all', context:false, mode:window.innerWidth < 650?'list':'graph', selected:null, highlight:'prerequisites'};
  const graph = el('graph');
  const world = el('graph-world');
  let visible = [], contextIds = new Set(), positions = new Map(), edges = [];
  let worldSize = {width:1,height:1};
  let camera = {x:0,y:0,k:1};
  let pointer = null, dragged = false, lastDrag = 0, toastTimer;
  let renderToken = 0;
  const statusOf = n => statuses[n.status] || statuses.planned;
  const text = value => value == null ? '' : typeof value === 'string' ? value : JSON.stringify(value);
  function element(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content != null) node.textContent = text(content);
    return node;
  }
  function svg(tag, attrs={}, content) {
    const node = document.createElementNS(NS,tag);
    Object.entries(attrs).forEach(([key,value]) => node.setAttribute(key,String(value)));
    if (content != null) node.textContent = text(content);
    return node;
  }
  function safeUrl(url) {
    if (typeof url !== 'string' || !url.trim()) return null;
    try { const u = new URL(url,location.href); return ['https:','http:'].includes(u.protocol)?u.href:null; } catch { return null; }
  }
  function notify(message) {
    clearTimeout(toastTimer); el('toast').textContent = message; el('toast').hidden=false;
    toastTimer = setTimeout(() => {el('toast').hidden=true;},4000);
  }
  function badge(n) {
    const s=statusOf(n), b=element('span','status-badge',s.label);
    b.style.setProperty('--badge-color',s.color); b.style.setProperty('--badge-bg',s.light); b.style.setProperty('--badge-line',`${s.color}38`);
    return b;
  }
  function readHash() {
    const params=new URLSearchParams(location.hash.slice(1));
    if (params.has('panel')) state.panel=byPanel.has(params.get('panel'))?params.get('panel'):'all';
    if (params.has('view')) state.mode=params.get('view')==='list'?'list':'graph';
    state.selected=byId.has(params.get('node'))?params.get('node'):null;
    state.query=params.get('q') || '';
    state.status=statuses[params.get('status')]?params.get('status'):'all';
    state.origin=origins[params.get('source')]?params.get('source'):'all';
    state.context=params.get('context')==='1';
  }
  function saveHash() {
    const params=new URLSearchParams({panel:state.panel});
    if (state.selected) params.set('node',state.selected);
    if (state.mode!=='graph') params.set('view',state.mode);
    if (state.query) params.set('q',state.query);
    if (state.status!=='all') params.set('status',state.status);
    if (state.origin!=='all') params.set('source',state.origin);
    if (state.context) params.set('context','1');
    history.replaceState(null,'',`#${params}`);
  }
  function matches(n) {
    if (state.status!=='all' && n.status!==state.status) return false;
    if (state.origin!=='all' && n.origin!==state.origin) return false;
    const q=state.query.trim().toLocaleLowerCase();
    if (!q) return true;
    return [n.title,n.statement,n.details,n.conclusion,n.id,...(n.leanDeclarations||[])].map(text).join(' ').toLocaleLowerCase().includes(q);
  }
  function selectVisible() {
    const primary=nodes.filter(n => (state.panel==='all' || (n.panels||[]).includes(state.panel)) && matches(n));
    const found=new Map(primary.map(n=>[n.id,n])); contextIds=new Set();
    if (state.context && state.panel!=='all') primary.forEach(n => deps(n).forEach(id => {
      const d=byId.get(id);
      // Context inputs remain visible even when searching, so the selected result's
      // mathematical inputs do not disappear behind a text filter.
      if (!found.has(id)) {found.set(id,d); contextIds.add(id);}
    }));
    visible=[...found.values()];
    return primary.length;
  }
  function buildNavigation() {
    const nav=el('panel-nav'); nav.replaceChildren();
    [...panels,{id:'all',title:'Full atlas'}].forEach(p => {
      const b=element('button','panel-button'); b.type='button'; b.dataset.panel=p.id;
      b.append(element('span','panel-letter',p.id==='all'?'∑':p.id),element('span','',shortPanels[p.id]||p.title));
      b.title=p.title;
      b.addEventListener('click',()=>{state.panel=p.id;state.selected=null;state.query='';render(true);document.querySelector('.sidebar').classList.remove('nav-open');el('mobile-nav-toggle').setAttribute('aria-expanded','false');});
      nav.append(b);
    });
  }
  const measuringCanvas=document.createElement('canvas');
  const measure=measuringCanvas.getContext('2d');
  function wrapLabel(label,maxWidth,maxLines=4) {
    measure.font='600 15px system-ui';
    const words=text(label).split(/\s+/), lines=[]; let line='';
    for (const word of words) {
      const candidate=line?`${line} ${word}`:word;
      if (measure.measureText(candidate).width>maxWidth && line) {lines.push(line);line=word;} else line=candidate;
    }
    if (line) lines.push(line);
    if (lines.length>maxLines) {
      lines.length=maxLines;
      let last=lines[maxLines-1];
      while (last && measure.measureText(`${last}…`).width>maxWidth) last=last.slice(0,-1);
      lines[maxLines-1]=`${last}…`;
    }
    return lines;
  }
  function layout() {
    const ids=new Set(visible.map(n=>n.id)), ranks=new Map(), visiting=new Set();
    function rank(id) {
      if (ranks.has(id)) return ranks.get(id);
      if (visiting.has(id)) return 0;
      visiting.add(id);
      const n=byId.get(id);
      const inputs=deps(n).filter(d=>ids.has(d) && !visiting.has(d));
      const value=inputs.length?1+Math.max(...inputs.map(rank)):0;
      visiting.delete(id); ranks.set(id,value); return value;
    }
    visible.forEach(n=>rank(n.id));
    const maxRank=Math.max(0,...ranks.values()), levels=new Map();
    visible.forEach(n=>{const r=ranks.get(n.id);if(!levels.has(r))levels.set(r,[]);levels.get(r).push(n);});
    const overview=state.panel==='A'&&!state.context;
    const W=280,H=138,GAP=48,STEP=overview?204:232,PAD=50;
    const maxRow=Math.min(overview?3:Infinity,Math.max(1,...[...levels.values()].map(row=>row.length)));
    const width=maxRow*(W+GAP)-GAP+PAD*2;
    const provisional=new Map();
    // Stable barycentre ordering reduces crossings while keeping every edge directed upwards.
    for(let pass=0;pass<3;pass++) {
      const order=[...levels.keys()].sort((a,b)=>pass%2?a-b:b-a);
      order.forEach(level=>{
        const row=levels.get(level);
        const centre=n=>{
          const near=pass%2?deps(n):(children.get(n.id)||[]);
          const xs=near.filter(id=>provisional.has(id)).map(id=>provisional.get(id));
          return xs.length?xs.reduce((a,b)=>a+b,0)/xs.length:width/2;
        };
        row.sort((a,b)=>centre(a)-centre(b)||a.title.localeCompare(b.title));
        const left=(width-(row.length*(W+GAP)-GAP))/2;
        row.forEach((n,i)=>provisional.set(n.id,left+i*(W+GAP)+W/2));
      });
    }
    positions=new Map();
    let nextRow=0;
    [...levels.keys()].sort((a,b)=>b-a).forEach(r=>{
      const row=levels.get(r), capacity=overview?3:row.length;
      row.forEach((n,i)=>{
        const subrow=Math.floor(i/capacity), count=Math.min(capacity,row.length-subrow*capacity);
        const left=(width-(count*(W+GAP)-GAP))/2;
        positions.set(n.id,{x:left+(i%capacity)*(W+GAP),y:PAD+(nextRow+subrow)*STEP,w:W,h:H});
      });
      nextRow+=Math.ceil(row.length/capacity);
    });
    worldSize={width,height:PAD*2+(nextRow-1)*STEP+H};
    edges=[];
    visible.forEach(n=>deps(n).filter(d=>ids.has(d)).forEach(id=>edges.push({from:id,to:n.id,alternative:(n.alternativeDependencies||[]).includes(id)})));
  }
  function drawGraph() {
    world.replaceChildren();
    if (!visible.length) {positions=new Map();return;}
    layout();
    const lines=svg('g',{'aria-hidden':'true'}), boxes=svg('g');
    edges.forEach(edge=>{
      const from=positions.get(edge.from), to=positions.get(edge.to);
      const x1=from.x+from.w/2,y1=from.y-2,x2=to.x+to.w/2,y2=to.y+to.h+2;
      const mid=(y1+y2)/2;
      let route=`M ${x1} ${y1} C ${x1} ${mid}, ${x2} ${mid}, ${x2} ${y2}`;
      if(state.panel==='A'&&!state.context&&y1-y2>160){
        // The overview wraps its six branches into two rows. Route long arrows
        // around the outside so they do not run through the intervening cards.
        const lane=x1<worldSize.width/2?22:worldSize.width-22;
        route=`M ${x1} ${y1} L ${x1} ${y1-24} L ${lane} ${y1-24} L ${lane} ${y2+25} L ${x2} ${y2+25} L ${x2} ${y2}`;
      }
      const path=svg('path',{d:route,class:`graph-edge${edge.alternative?' alternative':''}`,'marker-end':'url(#dependency-arrow)'});
      path.dataset.from=edge.from;path.dataset.to=edge.to;
      path.append(svg('title',{},`${byId.get(edge.from).title} supports ${byId.get(edge.to).title}${edge.alternative?' (alternative route)':''}`));
      lines.append(path);
    });
    visible.forEach(n=>{
      const p=positions.get(n.id), s=statusOf(n), isContext=contextIds.has(n.id);
      const g=svg('g',{class:'graph-node',transform:`translate(${p.x},${p.y})`,tabindex:'0',role:'button','aria-label':`${n.title}. ${s.label}. ${origins[n.origin]||n.origin}. Press Enter for details.`});
      g.dataset.node=n.id;
      g.append(svg('title',{},n.title));
      g.append(svg('rect',{class:'node-card',width:p.w,height:p.h,rx:10,fill:'#ffffff',stroke:isContext?'#b6c7cf':'#cddae0','stroke-width':1.25,...(isContext?{'stroke-dasharray':'4 3'}:{})}));
      g.append(svg('rect',{x:0,y:14,width:4,height:p.h-28,rx:2,fill:s.color}));
      g.append(svg('circle',{cx:19,cy:21,r:3.5,fill:s.color}));
      g.append(svg('text',{x:29,y:25,fill:s.color,'font-size':11,'font-weight':650},s.label));
      if (isContext) g.append(svg('text',{x:p.w-14,y:25,'text-anchor':'end',fill:'#70838e','font-size':10},'INPUT'));
      const title=svg('text',{x:16,y:49,fill:'#152e3a','font-size':15,'font-weight':600});
      wrapLabel(n.title,p.w-34,4).forEach((line,i)=>title.append(svg('tspan',{x:16,dy:i?18:0},line)));
      g.append(title);
      g.append(svg('text',{x:16,y:p.h-12,fill:'#647b86','font-size':11},origins[n.origin]||'Source to be assigned'));
      g.addEventListener('click',()=>{if(Date.now()-lastDrag<180)return;selectNode(n.id);});
      g.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();selectNode(n.id);}});
      boxes.append(g);
    });
    world.append(lines,boxes); applyHighlight();
  }
  function drawList() {
    const list=el('results-list'); list.replaceChildren();
    if(!visible.length){list.append(element('p','list-empty','No results match this view. Clear the filters or choose another panel.'));return;}
    const ordered=[...visible].sort((a,b)=>Number(contextIds.has(a.id))-Number(contextIds.has(b.id))||a.title.localeCompare(b.title));
    ordered.forEach(n=>{
      const b=element('button','result-card');b.type='button';b.style.setProperty('--node-color',statusOf(n).color);
      if(n.id===state.selected)b.classList.add('active');
      b.append(element('h2','',n.title),element('p','',n.statement||n.conclusion||n.details));
      const row=element('div','card-meta');row.append(badge(n),element('span','origin-tag',origins[n.origin]||n.origin));
      if(contextIds.has(n.id))row.append(element('span','origin-tag','Context input'));
      b.append(row);b.addEventListener('click',()=>selectNode(n.id));list.append(b);
    });
  }
  function section(title) {
    const s=element('section','detail-section');s.append(element('h3','',title));return s;
  }
  function simpleSection(title,content) {
    if(!content || (Array.isArray(content)&&!content.length))return null;
    const s=section(title);
    if(Array.isArray(content)){const list=element('ul');content.forEach(item=>list.append(element('li','',item)));s.append(list);}
    else s.append(element('p','',content));
    return s;
  }
  function addSection(parent,title,content) {const s=simpleSection(title,content);if(s)parent.append(s);}
  function detailLink(id,alternative=false) {
    const n=byId.get(id), b=element('button','detail-navlink');b.type='button';
    const dot=element('i','legend-swatch');dot.style.background=statusOf(n).color;
    b.append(dot,element('span','',`${n.title}${alternative?' · alternative route':''}`));
    b.addEventListener('click',()=>navigateNode(id));return b;
  }
  function renderDetail() {
    const n=byId.get(state.selected), panel=el('detail-panel'), content=el('detail-content');
    panel.hidden=!n;el('app-shell').classList.toggle('details-open',!!n);content.replaceChildren();
    if(!n)return;
    content.append(element('div','detail-id',n.id));
    const heading=element('h2','',n.title);heading.id='detail-title';heading.tabIndex=-1;content.append(heading);
    const badges=element('div','card-meta');badges.append(badge(n),element('span','origin-tag',origins[n.origin]||n.origin));content.append(badges);
    const pRefs=element('div','panel-refs');
    (n.panels||[]).forEach(id=>{const p=byPanel.get(id);if(!p)return;const b=element('button','panel-ref',`Panel ${id}${p.bookPage?` · p. ${p.bookPage}`:''}`);b.type='button';b.addEventListener('click',()=>{state.panel=id;state.query='';state.status='all';state.origin='all';render(true);});pRefs.append(b);});content.append(pRefs);
    if(n.status==='planned')content.append(element('p','detail-note','Open target in this project. This does not assert that no formalisation exists elsewhere.'));
    if(n.status==='compiled')content.append(element('p','detail-note','Compilation is recorded; the full verification or integration audit remains pending.'));
    addSection(content,'Mathematical statement',n.statement);
    addSection(content,'Hypotheses',n.hypotheses);
    addSection(content,'Conclusion',n.conclusion);
    addSection(content,'Role in the proof',n.details);
    addSection(content,'Scope and limitations',n.caveats);
    if(n.leanDeclarations?.length){const s=section('Lean declarations');n.leanDeclarations.forEach(d=>{const p=element('p');p.append(element('code','',d));s.append(p);});content.append(s);}
    else {const s=section('Lean declarations');s.append(element('p','','No exact declaration is recorded for this box. Check its status and supporting evidence.'));content.append(s);}
    if(n.evidence?.length){const s=section('Evidence and provenance');n.evidence.forEach(e=>{
      const item=element('div','evidence-item');const url=safeUrl(e.url);let label;
      if(url){label=element('a','',e.label||e.kind||'Source');label.href=url;label.target='_blank';label.rel='noopener noreferrer';}else label=element('strong','',e.label||e.kind||'Evidence');item.append(label);
      if(e.commit)item.append(element('small','',`Revision ${e.commit}`));
      if(e.path)item.append(element('small','',`Recorded file: ${e.path}`));
      if(e.kind)item.append(element('small','',`Evidence type: ${e.kind}`));s.append(item);
    });content.append(s);}
    const inputs=deps(n); if(inputs.length){const s=section('Supporting results');inputs.forEach(id=>s.append(detailLink(id,(n.alternativeDependencies||[]).includes(id))));content.append(s);}
    const outputs=children.get(n.id)||[];if(outputs.length){const s=section('Results this supports');outputs.forEach(id=>s.append(detailLink(id)));content.append(s);}
    const actions=element('div','detail-actions');
    [['prerequisites','Highlight prerequisites'],['consequences','Highlight consequences'],['none','Clear highlight']].forEach(([mode,label])=>{
      const b=element('button',state.highlight===mode?'active':'',label);b.type='button';b.setAttribute('aria-pressed',String(state.highlight===mode));b.addEventListener('click',()=>{state.highlight=mode;renderDetail();applyHighlight();});actions.append(b);
    });
    const share=element('button','','Copy result link');share.type='button';share.addEventListener('click',()=>{saveHash();if(navigator.clipboard?.writeText)navigator.clipboard.writeText(location.href).then(()=>notify('Link copied.')).catch(()=>notify('The result link is in your address bar.'));else notify('The result link is in your address bar.');});actions.append(share);content.append(actions);
  }
  function selectNode(id) {
    state.selected=id;state.highlight='prerequisites';renderDetail();applyHighlight();drawList();saveHash();
  }
  function navigateNode(id) {
    if(!byId.has(id))return;
    const n=byId.get(id);
    state.query='';state.status='all';state.origin='all';
    if(!positions.has(id) && state.panel!=='all')state.panel=(n.panels||[]).find(p=>byPanel.has(p))||'all';
    state.selected=id;state.highlight='prerequisites';render(true);el('detail-panel').scrollTop=0;
  }
  function closure(id,direction) {
    const visited=new Set();
    function walk(current){if(visited.has(current))return;visited.add(current);const next=direction==='prerequisites'?deps(byId.get(current)):children.get(current)||[];next.forEach(walk);}
    walk(id);return visited;
  }
  function applyHighlight() {
    const chain=state.selected&&state.highlight!=='none'?closure(state.selected,state.highlight):null;
    world.querySelectorAll('.graph-node').forEach(g=>{
      g.classList.toggle('is-selected',g.dataset.node===state.selected);
      g.classList.toggle('is-dim',!!chain&&!chain.has(g.dataset.node));
    });
    world.querySelectorAll('.graph-edge').forEach(path=>{
      const relevant=chain&&chain.has(path.dataset.from)&&chain.has(path.dataset.to);
      path.classList.toggle('is-dim',!!chain&&!relevant);path.classList.toggle('is-highlight',!!relevant);
      path.setAttribute('marker-end',`url(#${relevant?'highlight':'dependency'}-arrow)`);
    });
  }
  function applyCamera() {
    world.setAttribute('transform',`translate(${camera.x} ${camera.y}) scale(${camera.k})`);
    el('zoom-label').textContent=`${Math.round(camera.k*100)}%`;
  }
  function fitGraph(readable=false) {
    const rect=graph.getBoundingClientRect();if(!rect.width||!rect.height||!visible.length)return;
    const fitted=Math.max(.08,Math.min(1,(rect.width-38)/worldSize.width,(rect.height-80)/worldSize.height));
    const scale=readable?Math.max(.75,fitted):fitted;
    camera={k:scale,x:(rect.width-worldSize.width*scale)/2,y:Math.max(16,(rect.height-45-worldSize.height*scale)/2)};applyCamera();
  }
  function zoom(factor,cx,cy) {
    const rect=graph.getBoundingClientRect();cx=cx??rect.width/2;cy=cy??rect.height/2;
    const k=Math.max(.06,Math.min(3,camera.k*factor)), ratio=k/camera.k;
    camera={k,x:cx-(cx-camera.x)*ratio,y:cy-(cy-camera.y)*ratio};applyCamera();
  }
  function render(fit=false) {
    const token=++renderToken, p=byPanel.get(state.panel), count=selectVisible();
    el('panel-label').textContent=state.panel==='all'?'Complete atlas':`Panel ${state.panel}`;
    el('panel-title').textContent=p?.title||'The complete mathematical roadmap';
    el('panel-description').textContent=p?.description||'All recorded results and planned milestones. Use a book panel or the result list to inspect a smaller part of the proof.';
    el('book-page').textContent=p?.bookPage?`Book · page ${p.bookPage}`:'';
    el('search').value=state.query;el('status-filter').value=state.status;el('origin-filter').value=state.origin;el('context-toggle').checked=state.context;
    document.querySelectorAll('[data-panel]').forEach(b=>{const active=b.dataset.panel===state.panel;b.classList.toggle('active',active);if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
    el('result-count').textContent=`${count} ${count===1?'result':'results'}${contextIds.size?` + ${contextIds.size} context ${contextIds.size===1?'input':'inputs'}`:''}`;
    el('graph-container').hidden=state.mode!=='graph';el('results-list').hidden=state.mode!=='list';
    ['graph','list'].forEach(mode=>{el(`${mode}-mode`).classList.toggle('active',state.mode===mode);el(`${mode}-mode`).setAttribute('aria-pressed',String(state.mode===mode));});
    el('graph-empty').hidden=visible.length>0;
    renderDetail();drawGraph();drawList();saveHash();
    if(fit)requestAnimationFrame(()=>{if(token===renderToken)fitGraph(true);});else applyCamera();
  }
  function resetFilters() {state.query='';state.status='all';state.origin='all';render(true);}
  function populateMetadata() {
    const snapshot=meta.snapshot||meta.updatedAt||'';
    el('snapshot').append(element('span','control-label','Evidence snapshot'),element('p','',snapshot||'See individual result evidence'));
    if(meta.checkpoint)el('snapshot').append(element('small','',`Checkpoint ${meta.checkpoint}`));
    el('snapshot-date').textContent=snapshot?`Snapshot ${snapshot}`:'Dated evidence · not live';
    const limitations=el('about-limitations');
    addSection(limitations,'Ground field and scope',meta.fieldScope||meta.scope);
    addSection(limitations,'Limits of this map',meta.limitations);
    const pins=Object.entries(meta.versionPins||{});if(pins.length)addSection(limitations,'Pinned dependencies',pins.map(([k,v])=>`${k}: ${text(v)}`));
    const list=el('reference-list');(data.references||[]).forEach(ref=>{const p=element('p'),url=safeUrl(ref.url);if(url){const a=element('a','',ref.title||ref.id);a.href=url;a.target='_blank';a.rel='noopener noreferrer';p.append(a);}else p.textContent=ref.title||ref.id;list.append(p);});
  }
  function download(name,content,type) {
    const url=URL.createObjectURL(new Blob([content],{type})),a=element('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  function exportSvg() {
    if(!visible.length){notify('There are no visible results to export.');return;}
    const out=svg('svg',{xmlns:NS,width:worldSize.width,height:worldSize.height,viewBox:`0 0 ${worldSize.width} ${worldSize.height}`});
    out.append(svg('title',{},`Fano formalisation atlas · ${el('panel-title').textContent}`));
    out.append(svg('desc',{},'Arrows point from supporting results to conclusions. This is a curated mathematical roadmap, not an exhaustive kernel dependency graph.'));
    out.append(svg('rect',{width:'100%',height:'100%',fill:'#ffffff'}));
    out.append(graph.querySelector('defs').cloneNode(true));
    out.append(svg('style',{},'text{font-family:system-ui,sans-serif}.graph-edge{fill:none;stroke:#8ca4af;stroke-width:1.35}.graph-edge.alternative{stroke-dasharray:6 5}.graph-edge.is-highlight{stroke:#147b78;stroke-width:2.5}.is-dim{opacity:.2}.is-selected .node-card{stroke:#147b78;stroke-width:2.5}'));
    const copy=world.cloneNode(true);copy.removeAttribute('transform');copy.removeAttribute('id');copy.querySelectorAll('[tabindex]').forEach(n=>n.removeAttribute('tabindex'));out.append(copy);
    download(`fano-proof-map-panel-${state.panel}.svg`,new XMLSerializer().serializeToString(out),'image/svg+xml;charset=utf-8');
  }
  el('search').addEventListener('input',event=>{state.query=event.target.value;render(true);});
  el('status-filter').addEventListener('change',event=>{state.status=event.target.value;render(true);});
  el('origin-filter').addEventListener('change',event=>{state.origin=event.target.value;render(true);});
  el('context-toggle').addEventListener('change',event=>{state.context=event.target.checked;render(true);});
  el('reset-filters').addEventListener('click',resetFilters);el('empty-reset').addEventListener('click',resetFilters);
  el('graph-mode').addEventListener('click',()=>{state.mode='graph';render(true);});el('list-mode').addEventListener('click',()=>{state.mode='list';render();});
  el('close-detail').addEventListener('click',()=>{state.selected=null;render(true);});
  el('zoom-in').addEventListener('click',()=>zoom(1.25));el('zoom-out').addEventListener('click',()=>zoom(.8));el('fit-graph').addEventListener('click',()=>fitGraph());
  el('export-json').addEventListener('click',()=>download('fano-proof-map.json',JSON.stringify(data,null,2),'application/json;charset=utf-8'));
  el('export-svg').addEventListener('click',exportSvg);
  function showAbout(){el('about-dialog').showModal();}
  el('about-button').addEventListener('click',showAbout);el('references-button').addEventListener('click',showAbout);el('close-about').addEventListener('click',()=>el('about-dialog').close());
  el('about-dialog').addEventListener('click',event=>{if(event.target===el('about-dialog'))el('about-dialog').close();});
  el('mobile-nav-toggle').addEventListener('click',()=>{const open=document.querySelector('.sidebar').classList.toggle('nav-open');el('mobile-nav-toggle').setAttribute('aria-expanded',String(open));});
  graph.addEventListener('wheel',event=>{event.preventDefault();const rect=graph.getBoundingClientRect();zoom(Math.exp(-event.deltaY*.0015),event.clientX-rect.left,event.clientY-rect.top);},{passive:false});
  graph.addEventListener('pointerdown',event=>{
    if(event.button!==0)return;pointer={id:event.pointerId,x:event.clientX,y:event.clientY,cx:camera.x,cy:camera.y};dragged=false;
  });
  graph.addEventListener('pointermove',event=>{
    if(!pointer||pointer.id!==event.pointerId)return;const dx=event.clientX-pointer.x,dy=event.clientY-pointer.y;
    if(Math.hypot(dx,dy)>4&&!dragged){dragged=true;graph.setPointerCapture(event.pointerId);}
    if(dragged){graph.classList.add('dragging');camera.x=pointer.cx+dx;camera.y=pointer.cy+dy;applyCamera();}
  });
  function releasePointer(event){if(pointer?.id===event.pointerId){if(dragged)lastDrag=Date.now();pointer=null;graph.classList.remove('dragging');if(graph.hasPointerCapture(event.pointerId))graph.releasePointerCapture(event.pointerId);}}
  graph.addEventListener('pointerup',releasePointer);graph.addEventListener('pointercancel',releasePointer);
  graph.addEventListener('keydown',event=>{if(['+','=','-','0'].includes(event.key)){event.preventDefault();event.key==='0'?fitGraph():zoom(event.key==='-'?.8:1.25);}});
  document.addEventListener('keydown',event=>{if(event.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){event.preventDefault();el('search').focus();}if(event.key==='Escape'&&state.selected&&!el('about-dialog').open){state.selected=null;render(true);}});
  window.addEventListener('hashchange',()=>{readHash();render(true);});
  let resizeTimer;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{if(state.mode==='graph')fitGraph();},120);});
  readHash();buildNavigation();populateMetadata();render(true);
})();
