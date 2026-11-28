# Del Pezzo surfaces: formalisation atlas

Interactive map of the verified smooth del Pezzo classification and twenty-seven-line theorem, with the same interface and status colours as the Fano threefold atlas.

Published page: https://mrwpl.github.io/paolo/del-pezzo-proof-map/

## Scope

The classification is over the original algebraically closed characteristic-zero field, at arbitrary Lean universe. It identifies smooth del Pezzo surfaces with the split quadric or plane blowups at zero to eight distinct ordinary points in literal del Pezzo general position. It includes both directions, the degree formulas and occurrence of every degree from one to nine.

The later results recognize exceptional curves by their full Picard classes and count exactly twenty-seven distinct embedded projective lines on a supplied smooth cubic surface. Optional anticanonical-model, positive-characteristic and arithmetic extensions are separate from the completed classification.

The map follows the local proof, including its direct recognition of minimal del Pezzo surfaces. It does not substitute the general Hirzebruch/minimal-rational-surface classification or the separate Negativity Lemma for the proof actually recorded.

## Interface

- Choose a panel, or the full atlas.
- Arrows point from a supporting result to its conclusion. Dashed arrows are alternative routes.
- Click a box for its mathematical statement, hypotheses, Lean names, provenance, evidence and dependencies.
- Filter by proof status or source, search titles/statements/Lean declarations, or include immediate inputs from other panels.
- Legend counts count unique visible boxes. They are not a percentage of mathematical effort.
- Download the visible diagram as SVG or the complete data as JSON.
- Use the link to switch to the Fano threefold map.

The files are buildless HTML/CSS/JavaScript. Open index.html directly or serve the directory with an ordinary static HTTP server. No dependency installation, external JavaScript library, tracking or paid service is required.

## Evidence and updating

This is a dated, curated mathematical map, not an exhaustive extraction of Lean kernel constants. Status applies to each box's precise assumptions and conclusion. An imported result is attributed to its repository at a fixed revision; individual authorship is not guessed.

Evidence paths identify records retained in the private proof project. They are not broken public download links. The website publishes summaries, not the private proof source, account details or local logs.

Before updating graph-data.js, compare the actual declarations with the saved normal-build, independently expanded type and transitive axiom receipts. A direct replay with the same Lean implementation is distinct from an independently implemented checker; the separate Linux SHEAF comparator has not been run for this snapshot.

Keep stable result IDs, valid acyclic dependencies, explicit field hypotheses and narrowly scoped statuses. Update the content-hash suffixes on all three assets in index.html after a change, to avoid mixed browser cache versions. Validate filters, counts, source identifiers and the dependency graph before publication.

The map is a subdirectory of the existing mrwpl/paolo GitHub Pages site. Its other pages and the proof repositories have separate ownership.
