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

## Degree-two snapshot, 28 November 2026

At proof checkpoint `55a6c7f`, the complete-system map is finite flat of rank two, with the original polarization and section-space comparison. The native quartic cover algebra (including multiplication), branch comparisons, and the narrower smooth inhabited Fermat branch/inhabited-cover endpoint are verified. Full intrinsic recognition, supplied-cover invariants and deformation-family claims remain open.

The public normal audit and separate direct Lean replay agree on 13 standard-three axiom reports. The graph has 126 boxes: 49 verified, 9 partial/in progress, 68 open and 0 compiled/audit-pending. These are counts of mathematical boxes, not effort percentages.
