# Fano threefolds: formalisation atlas

An interactive mathematical roadmap towards the classification of smooth complex Fano threefolds with numerical Picard number one into 17 deformation families.

The website is a dated, curated dependency graph, not an exhaustive extraction of Lean's kernel dependencies and not a live agent monitor. A node is a mathematical milestone; counting nodes does not measure the percentage of work completed.

## Files and use

- `index.html`, `styles.css`, `app.js`: the buildless, offline-capable interface.
- `graph-data.js`: statements, hypotheses, dependencies, status and evidence records.
- Open `index.html` directly, or serve this directory with `python3 -m http.server 8080`.
- Published page: https://mrwpl.github.io/paolo/fano-proof-map/

No installation, paid service, external JavaScript library or analytics service is required. Source repositories and build artifacts are not uploaded with this webpage.

## Reading the graph

Arrows point from an ingredient to the conclusion it supports. Dashed arrows denote alternative strategies. Book panels A–F organise the classification, index-two branch, two-quadric recognition, two-quadric construction, index-one branch and deformation-family obligations. Additional views expand shared foundations and the verified cubic case.

Each result's detail panel separates its mathematical statement, assumptions, status, provenance and evidence. A proved implication does not establish that its assumptions have been constructed. In particular, supplied models, intrinsic recognition and deformation-family classification are different obligations.

The algebraic theorems retain their recorded field and universe hypotheses. The ultimate deformation-classification goal is over the complex numbers. “Open” means not verified in this project snapshot; it is not a claim that nobody has formalised the result elsewhere. Names of upstream libraries alone are not verification certificates.

## Updating the snapshot

1. Read the current mathematical state and exact theorem declarations in the proof project, plus its saved build, expanded-type and axiom-audit receipts. Use those receipts rather than commit titles alone.
2. Review the corresponding book panels. Preserve the distinction between a proved conditional lemma, a compiled draft, an unchecked source candidate and an open theorem.
3. Update `graph-data.js`, its snapshot date and checkpoint. Use stable node IDs, unique IDs and valid acyclic dependencies. Do not add a planned hypothesis-construction result as a purported established dependency of an already verified conditional lemma.
4. Record the exact scope and the provenance of each result. Include all-member and special-member obligations when updating a model-classification branch.
5. Publish only public-safe summaries. Evidence paths are repository-relative references to locally retained receipts, not public downloads of the private proof repository. Do not copy account details, credentials, local absolute paths or private working logs.
6. When an asset changes, refresh its `?v=` content-hash suffix in `index.html` (`styles.css`, `graph-data.js`, and `app.js`). This prevents a newly fetched page from using a cached older script or stylesheet.
7. Check search, panel navigation, result details, prerequisite/consequence highlighting, filters and exports in a browser before publishing the updated static files.

Verification recorded here comprises saved Lean checks and axiom audits. A separate replay using Lean is not an independently implemented proof checker. The project’s Linux-only SHEAF comparator was not run for this snapshot.

## Hosting

These files live in the `fano-proof-map/` subdirectory of the existing `mrwpl/paolo` website repository. Its existing GitHub Pages workflow publishes the static repository; no change to repository visibility or to the personal website's other pages is required.

## Degree-one and degree-five progress, 28 November 2026

Cubic, degree-four and quartic double-solid model recognition and supplied-model invariants remain verified. Degree two also has an explicit smooth Fermat cover with the full Picard, numerical and exact-index package. Three supporting theorems appear as separate green boxes: the primitive degree-five complete embedding into projective six-space, integrality of every nonzero degree-one member's full zero scheme, and the integral genus-one regular pair. The snapshot includes the main-library checkpoint `a24050a` at 10:00 UTC and the later isolated regular-pair verification at 11:31:03 UTC. Integration of the latter into the main library remains pending.

The degree-two campaign is accepted at `8d05105`. The closing public normal build took 689.94 s and its separate direct Lean replay 301.71 s. Named and independently expanded types and all 26 transitive axiom reports agree, using only `propext`, `Classical.choice` and `Quot.sound`. The full supplied-cover theorem includes integral Picard generation, numerical Picard number one and exact index two; the explicit Fermat cover has the same invariant package.

The degree-five embedding was publicly verified at `07fb074`. The original-field, arbitrary-universe theorem retains the supplied primitive Picard generator, constructs a closed immersion into polynomial projective six-space, identifies its hyperplane pullback with H and proves that its seven sections give the complete linear system. The normal public audit and separate direct replay passed with nine matching standard-only axiom reports. Five independent quadrics containing the image have also passed their selected normal build at `62cf0b1`; equality with the entire image ideal is still open.

The degree-one integral-member theorem was publicly verified at `be523c2`. Every nonzero section of the actual ample H, with anticanonical sheaf isomorphic to H⊗H and H³=1, has an integral full zero scheme. No Picard-generator or global-generation premise was added. Named and independently expanded checks and separate direct replay passed with seven matching standard-only axiom reports. API-backed Codex completed and repaired an existing draft; the existing coordinator compiled, integrated, audited and checkpointed the proof.

The degree-one regular-pair theorem is verified in the isolated checkout. Over the original algebraically closed characteristic-zero field, at arbitrary Lean universe, the actual ample invertible H with anticanonical sheaf isomorphic to H⊗H and H³=1 admits two successive nonzero regular sections. Both full zero schemes are integral; the second section is lifted from a global section of H on the original threefold. The resulting integral curve has dimension one, h⁰(O_C)=h¹(O_C)=1, genus one and H-degree one. No Picard-generator or global-generation premise is added, and smoothness of the curve is not asserted.

The canonical evidence is [the completed isolated controller receipt](../../research/fano-panel-b/api-standalone-regular-pair-2026-11-28/control/run-20261128-105922-20460/controller-result.json). Fresh Target, Proof and Audit builds and a separate direct Lean replay all exited successfully. Five matching transitive axiom reports use only `propext`, `Classical.choice` and `Quot.sound`; the receipt preserves 152 frozen files and eleven dependency pins. The helper source has SHA-256 `c2f03e4424b64ba4d9d0006346037b896d2b86e07eef5620376eac986018cc14`; the proof has SHA-256 `d414cb16b4dcde9c222106b8e6a51461c6634d8e97a60737e686ccda1a628689`. These are repository-relative provenance records, not public source downloads. No new main-library Git checkpoint or production audit is asserted.

There are now 129 boxes: 57 verified, 8 partial/in progress, 0 compiled/audit-pending and 64 open. Panel B has 27 boxes: 18 verified, 5 partial/in progress, 0 compiled and 4 open. The extra box exposes a supporting result while preserving the previous classification targets. Counts describe the graph's decomposition, not a completion percentage or mathematical effort.

Still open are the degree-five Pfaffian image-ideal equality and polarized Grassmannian identification, the full supplied V₅ invariant and existence package, the degree-one weighted-sextic recognition, supplied-model invariant and existence package, the primitive degree bound and exhaustion, and the cubic parameter-family certificate. The degree-one recognition node remains partial and now depends on both integral members and the regular pair. Cubic family work is assigned but its endpoint is unverified. Later deformation-family obligations remain separate. Supporting Plücker-frame and finite-algebra modules have passed normal builds; this does not certify the full Grassmannian branch.


## Final coordinator checkpoint

At `dc34039`, 32 supporting declarations passed matching narrow normal and separate direct axiom audits. Two presentations of the five-point coordinate algebra split as five copies of the original field, and graded-module results lift surjectivity, kernels and injectivity through a regular linear parameter. Applying these calculations to the actual global Grassmannian slice and its full resolution is still required.

At `a24050a`, eight remaining weighted-sextic, degree-bound/reduction/exhaustion and cubic-family propositions and all eight independent expanded-type equalities compile. These are checked theorem interfaces, not proofs of the propositions. No node is promoted on that basis. That checkpoint's 128 boxes are followed by one new verified supporting box from the later isolated regular-pair result, giving the current 129 boxes. The main-library checkpoint remains `a24050a`.

Book links follow the rebuilt 87-page PDF: panels A–F start on printed pages 71, 72, 74, 75, 76 and 78 respectively. The degree-one and degree-five supporting propositions are on printed pages 65–66. The additional cubic view points to the intrinsic recognition theorem on printed page 59.
