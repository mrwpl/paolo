/* Curated mathematical roadmap. Dependency direction: support -> result. */
window.FANO_GRAPH = {
  "meta": {
    "title": "The rank-one Fano proof map",
    "scope": "A curated mathematical roadmap toward the 17 deformation families of smooth complex Fano threefolds with numerical Picard number one.",
    "snapshot": "28 November 2026 · 07:14 UTC · static snapshot",
    "checkpoint": "2044e6c",
    "updatedAt": "2026-11-28T07:14:41.569963Z",
    "fieldScope": "Final classification over ℂ. Many verified local algebraic theorems hold over algebraically closed fields of characteristic zero at arbitrary Lean universe u; the regular-pair cancellation and chart theorem hold over any field.",
    "versionPins": {
      "Lean": "v4.35.0",
      "Mathlib": "56a005855ea17e0b0958f73ec801ae140b0a1679",
      "AxiomMath/Stacks": "c496df0d9beea9deaeabcea8492605f9a0a2313b",
      "MMP": "1f9ade367087ec711a2ce1382bad279a5a0284c3"
    },
    "limitations": [
      "This is a curated mathematical dependency and planning graph, not an exhaustive kernel-extracted graph of every Lean constant.",
      "A solid arrow means selected mathematical support → result. It is not a claim that the current Lean file imports exactly that declaration. Dashed arrows describe alternative proof routes.",
      "Verified status applies only to the stated hypotheses and recorded local evidence. It does not mean every imported definition has received a separate semantic audit.",
      "A planned or partial node means the matching endpoint is not yet verified in this project; it does not mean nobody elsewhere has formalised it.",
      "The imported code is attributed to its pinned library or repository; individual authorship is not guessed.",
      "Public build and separate direct replay use the same Lean implementation. The separate Linux SHEAF comparator remains unrun.",
      "The all-dimensional Negativity Lemma and completed del Pezzo classification are valuable earlier projects but are not asserted as essential dependencies of every rank-one model theorem.",
      "The graph does not measure completion by counting boxes. Nodes have very different proof costs.",
      "This is a snapshot, not live monitoring. “In progress” labels an open assigned workstream; no claim is made that a compiler or agent is currently running.",
      "Evidence paths are repository-relative record identifiers; private proof source files are not published by this website.",
      "Exactly seventeen counts deformation families, not individual varieties up to isomorphism. The higher-Picard-number branches of the 105-family classification are outside this graph.",
      "The degree-four example theorem proves a nonempty smooth regular intersection over each allowed field; it does not establish a connected parameter family or one deformation class.",
      "The intrinsic degree-two quartic presentation is verified at 81cf101, including its actual pushforward multiplication, smooth branch and isomorphism over the original base. The full Picard/converse and invariant-bearing Fermat example compiled at 2044e6c; their closing public audit and separate direct replay are pending.",
      "Degree-five progress is source-backed preparation and explicitly uncompiled research drafts. It supplies no newly accepted Grassmannian, canonical/Picard or recognition theorem."
    ]
  },
  "panels": [
    {
      "id": "A",
      "title": "Whole rank-one classification",
      "bookPage": 65,
      "description": "Overview: every arrow runs from a supporting result toward the result it helps prove. The final goal is exactly 17 deformation families."
    },
    {
      "id": "B",
      "title": "The five index-two models",
      "bookPage": 66,
      "description": "Cubic and degree-four models and intrinsic quartic double-solid recognition are verified. Degree-two Picard, full converse and invariant-bearing Fermat example have passed production builds; final public/direct acceptance is pending. Degree-five construction preparation is in progress with uncompiled drafts. Degrees one/five, the general degree bound and deformation-family certificates remain open."
    },
    {
      "id": "C",
      "title": "Degree four: intrinsic recognition",
      "bookPage": 67,
      "description": "Completed intrinsic degree-four route: remove fixed divisors, use actual regular curves and length-two tests, embed by the complete system, and identify the full two-quadric image ideal."
    },
    {
      "id": "D",
      "title": "Degree four: supplied construction",
      "bookPage": 68,
      "description": "Completed supplied-model route: actual Cartier cuts, geometry, adjunction, numerical and Picard invariants; an explicit smooth nonempty model exists. The first quadric may be singular. Deformation-family claims remain open."
    },
    {
      "id": "E",
      "title": "The ten index-one genera",
      "bookPage": 69,
      "description": "All ten model branches, including special genus-three and genus-six members. Dashed high-genus routes are alternatives, not jointly mandatory."
    },
    {
      "id": "F",
      "title": "Existence, exhaustion and deformation classes",
      "bookPage": 71,
      "description": "Close the gap between model theorems and the theorem that there are exactly seventeen deformation families."
    },
    {
      "id": "G",
      "title": "Shared inputs and high-index cases",
      "bookPage": 65,
      "description": "Detailed supporting interfaces and the still-open general Picard/index reduction. Scoped verified applications do not certify whole libraries."
    },
    {
      "id": "H",
      "title": "The completed cubic proof",
      "bookPage": 66,
      "description": "Recognition and supplied-model invariants, with the main mathematical proof ingredients. Reduced Bertini pairs are proved after generation, avoiding a circular argument."
    }
  ],
  "nodes": [
    {
      "id": "shared",
      "title": "Reusable geometric interfaces",
      "statement": "Scoped vanishing, intersections, adjunction, Picard and linear-system results support the model branches.",
      "hypotheses": [
        "Each reused theorem must be matched to its precise field, dimension, smoothness and positivity hypotheses."
      ],
      "conclusion": "Scoped vanishing, intersections, adjunction, Picard and linear-system results support the model branches.",
      "status": "partial",
      "origin": "mixed",
      "panels": [
        "A",
        "G"
      ],
      "family": "shared",
      "details": "Verified uses now include both cubic and two-quadric geometry, Picard comparisons, intrinsic recognition and actual numerical intersections. The complete collection needed for all seventeen families is not assembled.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "euler-polynomial",
        "ample-negative",
        "curve-separation",
        "picard-numerical"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "rank-reduction",
      "title": "Rank-one → primitive index data",
      "statement": "Every smooth complex Fano threefold with ρ=1 has Pic(X)=ℤ[H], H primitive ample and −K_X=rH with 1≤r≤4.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every smooth complex Fano threefold with ρ=1 has Pic(X)=ℤ[H], H primitive ample and −K_X=rH with 1≤r≤4.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "A",
        "G"
      ],
      "family": "shared",
      "details": "Literature target in the local roadmap. “Planned” means no matching verified local endpoint is recorded; it does not assert that the result is absent from all Lean libraries.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "picard-generator",
        "index-bound",
        "shared"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "high-index",
      "title": "Indices 4 and 3",
      "statement": "Every rank-one Fano of index four is ℙ³; every one of index three is a smooth quadric Q³. Both constructions have the claimed invariants.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every rank-one Fano of index four is ℙ³; every one of index three is a smooth quadric Q³. Both constructions have the claimed invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "A"
      ],
      "family": "shared",
      "details": "Literature target in the local roadmap. “Planned” means no matching verified local endpoint is recorded; it does not assert that the result is absent from all Lean libraries.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "p3-recognition",
        "quadric-recognition",
        "p3-construction",
        "quadric-construction",
        "shared"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "index-two",
      "title": "All five index-two cases",
      "statement": "Every exact-index-two, rank-one Fano belongs to one of the five model branches d=H³∈{1,2,3,4,5}.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every exact-index-two, rank-one Fano belongs to one of the five model branches d=H³∈{1,2,3,4,5}.",
      "status": "partial",
      "origin": "unassigned",
      "panels": [
        "A",
        "B"
      ],
      "family": "index2",
      "details": "Cubic and degree-four models and intrinsic quartic double-solid recognition are verified. Degree-two Picard, full converse and invariant-bearing Fermat example have passed production builds; final public/direct acceptance is pending. Degree-five construction preparation is in progress with uncompiled drafts. Degrees one/five, the general degree bound and deformation-family certificates remain open.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "double-solid-cover-map-verification.json",
          "path": "projects/fano-threefolds/audit/double-solid-cover-map-verification.json",
          "commit": "55a6c7f",
          "kind": "audit"
        },
        {
          "label": "double-solid-fermat-verification.json",
          "path": "projects/fano-threefolds/audit/double-solid-fermat-verification.json",
          "commit": "2359c3e",
          "kind": "audit"
        },
        {
          "label": "double-solid-geometry-verification.json",
          "path": "projects/fano-threefolds/audit/double-solid-geometry-verification.json",
          "commit": "81cf101",
          "kind": "audit"
        },
        {
          "label": "double-solid-full-converse-normal.json",
          "path": "projects/fano-threefolds/audit/double-solid-full-converse-normal.json",
          "commit": "2044e6c",
          "kind": "audit"
        }
      ],
      "caveats": [],
      "dependencies": [
        "degree-bound",
        "d1-recognition",
        "d2-recognition",
        "cubic-recognition",
        "quadrics-recognition",
        "d5-recognition",
        "shared"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "index-one",
      "title": "All ten index-one cases",
      "statement": "Every rank-one index-one Fano belongs to exactly one numerical genus branch g∈{2,3,4,5,6,7,8,9,10,12}; every member has an allowed model.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every rank-one index-one Fano belongs to exactly one numerical genus branch g∈{2,3,4,5,6,7,8,9,10,12}; every member has an allowed model.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "A",
        "E"
      ],
      "family": "index1",
      "details": "Literature target in the local roadmap. “Planned” means no matching verified local endpoint is recorded; it does not assert that the result is absent from all Lean libraries.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "genus-bound",
        "g2-recognition",
        "g3-recognition",
        "g4-recognition",
        "g5-recognition",
        "g6-recognition",
        "g7-recognition",
        "g8-recognition",
        "g9-recognition",
        "g10-recognition",
        "g12-recognition",
        "shared"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "family-certificates",
      "title": "Deformation-family certificates",
      "statement": "The seventeen numerical labels are nonempty, exhaustive and each describes one deformation-equivalence class over ℂ.",
      "hypotheses": [
        "Smooth complex Fano threefolds with ρ=1; deformation equivalence is generated by connected smooth proper families."
      ],
      "conclusion": "The seventeen numerical labels are nonempty, exhaustive and each describes one deformation-equivalence class over ℂ.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "A",
        "F"
      ],
      "family": "deformation",
      "details": "Literature target in the local roadmap. “Planned” means no matching verified local endpoint is recorded; it does not assert that the result is absent from all Lean libraries.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "all-existence",
        "connected-families",
        "distinct-labels",
        "exhaustion"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "classification",
      "title": "Exactly 17 rank-one Fano families",
      "statement": "Smooth complex Fano threefolds of Picard number one have exactly 17 deformation families: 1+1+5+10.",
      "hypotheses": [
        "Ground field ℂ; smooth projective integral Fano threefolds, numerical ρ=1."
      ],
      "conclusion": "Smooth complex Fano threefolds of Picard number one have exactly 17 deformation families: 1+1+5+10.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "A",
        "F"
      ],
      "family": "deformation",
      "details": "Ultimate goal. This counts deformation families, not individual isomorphism classes. The 105-family classification also requires all higher Picard numbers and is outside this graph.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "rank-reduction",
        "high-index",
        "index-two",
        "index-one",
        "family-certificates"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "euler-polynomial",
      "title": "Euler polynomial and intersection coefficient",
      "statement": "For a proper d-dimensional scheme and an invertible H, χ(Hⁿ) is a rational polynomial of degree at most d for every n∈ℤ, with d! times the coefficient of nᵈ equal to Hᵈ.",
      "hypotheses": [
        "k is a field; X/k is proper of dimension d; H is invertible."
      ],
      "conclusion": "For a proper d-dimensional scheme and an invertible H, χ(Hⁿ) is a rational polynomial of degree at most d for every n∈ℤ, with d! times the coefficient of nᵈ equal to Hᵈ.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "G"
      ],
      "family": "shared",
      "details": "Local adapter to the pinned Stacks Euler-polynomial and asymptotic Riemann–Roch results. No ampleness or characteristic-zero assumption is needed for this statement.",
      "leanDeclarations": [
        "FanoThreefolds.tensorEulerPolynomialWithDegree"
      ],
      "evidence": [
        {
          "label": "quadrics-numerics-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-numerics-verification.json",
          "kind": "audit",
          "commit": "aeadc65"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "ample-negative",
      "title": "Negative ample vanishing in dimension three",
      "statement": "For smooth projective X of dimension three in characteristic zero and ample L, H^q(X,L⁻¹)=0 for 0≤q<3.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "L is ample and invertible."
      ],
      "conclusion": "For smooth projective X of dimension three in characteristic zero and ample L, H^q(X,L⁻¹)=0 for 0≤q<3.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "G"
      ],
      "family": "shared",
      "details": "Project adapter uses the zero-form case of the pinned MMP Akizuki–Nakano theorem, with Stacks cohomology comparisons.",
      "leanDeclarations": [
        "FanoThreefolds.recognitionNegativeCohomology",
        "MMP.Mori.subsingleton_derivedCohomologyOverField_exteriorPower_tensor_dualSheaf_of_isAmple"
      ],
      "evidence": [
        {
          "label": "recognition-section-count-verification.json",
          "path": "projects/fano-threefolds/audit/recognition-section-count-verification.json",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/RecognitionSectionsCohomology.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/RecognitionSectionsCohomology.lean",
          "kind": "source"
        }
      ],
      "caveats": [
        "This verifies the scoped input used in this project; it is not a new independent semantic audit of the full upstream vanishing library."
      ],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "half-euler",
      "title": "Half-anticanonical Euler formula",
      "statement": "6χ(X,nH)=d·n(n+1)(n+2)+6(n+1) for every integer n, where d=H³.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H."
      ],
      "conclusion": "6χ(X,nH)=d·n(n+1)(n+2)+6(n+1) for every integer n, where d=H³.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B",
        "C",
        "G"
      ],
      "family": "index2",
      "details": "See the exact statement and evidence; this box is a mathematical summary.",
      "leanDeclarations": [
        "FanoThreefolds.indexTwoEulerPolynomial"
      ],
      "evidence": [
        {
          "label": "quadrics-numerics-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-numerics-verification.json",
          "kind": "audit",
          "commit": "aeadc65"
        }
      ],
      "caveats": [
        "This is not an exact-index-two assertion. H need not be primitive, and ρ=1 is not assumed."
      ],
      "dependencies": [
        "euler-polynomial",
        "ample-negative"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "half-sections",
      "title": "Sections of nonnegative half-anticanonical powers",
      "statement": "For n≥0, h⁰(X,nH)=χ(X,nH)=d·n(n+1)(n+2)/6+n+1. In particular h⁰(H)=d+2 and h⁰(2H)=4d+3.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H."
      ],
      "conclusion": "For n≥0, h⁰(X,nH)=χ(X,nH)=d·n(n+1)(n+2)/6+n+1. In particular h⁰(H)=d+2 and h⁰(2H)=4d+3.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B",
        "C",
        "G"
      ],
      "family": "index2",
      "details": "See the exact statement and evidence; this box is a mathematical summary.",
      "leanDeclarations": [
        "FanoThreefolds.indexTwoHilbertFunction",
        "FanoThreefolds.indexTwoSectionCount",
        "FanoThreefolds.indexTwoHilbertStatement_proved"
      ],
      "evidence": [
        {
          "label": "quadrics-numerics-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-numerics-verification.json",
          "kind": "audit",
          "commit": "aeadc65"
        }
      ],
      "caveats": [
        "ℙ³ with H=O(2) has d=8 and satisfies these hypotheses. The formula does not prove d≤5."
      ],
      "dependencies": [
        "half-euler"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "picard-numerical",
      "title": "An ample Picard generator gives ρ=1",
      "statement": "If an ample invertible H generates the integral Picard group and there is a proper integral curve, degree against H identifies numerical one-cycle classes with ℝ, so ρ=1.",
      "hypotheses": [
        "X/k is proper in the setting of the project numerical-cycle construction.",
        "Every invertible sheaf is an integral power of the ample H; a proper integral curve exists."
      ],
      "conclusion": "If an ample invertible H generates the integral Picard group and there is a proper integral curve, degree against H identifies numerical one-cycle classes with ℝ, so ρ=1.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "D",
        "G"
      ],
      "family": "shared",
      "details": "Uses the pinned MMP numerical one-cycle quotient. This is the direction Picard generator ⇒ numerical Picard number, not its converse.",
      "leanDeclarations": [
        "FanoThreefolds.picardNumber_one_of_ample_picardGenerator"
      ],
      "evidence": [
        {
          "label": "cubic-picard-verification.json",
          "path": "projects/fano-threefolds/audit/cubic-picard-verification.json",
          "kind": "audit",
          "commit": "27479d6"
        },
        {
          "label": "FanoThreefolds/CubicNumericalPicard.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/CubicNumericalPicard.lean",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "algebraization",
      "title": "Algebraize the formal line-bundle data",
      "statement": "An appropriate coherent finite locally free adic system along an ample Cartier divisor on a proper S₃ variety of dimension at least three admits coherent algebraization.",
      "hypotheses": [
        "The precise properness, ample Cartier, S₃, dimension and adic-system hypotheses of the pinned Stacks theorem hold."
      ],
      "conclusion": "An appropriate coherent finite locally free adic system along an ample Cartier divisor on a proper S₃ variety of dimension at least three admits coherent algebraization.",
      "status": "verified",
      "origin": "axiom_stacks",
      "panels": [
        "G",
        "H"
      ],
      "family": "shared",
      "details": "The exact imported declaration is included in the cubic Picard transitive axiom audit. It also supplies finite local freeness on a neighborhood of the divisor. Applied to ambient ℙ⁴; identifying rank one and extending the resulting line bundle across the complement require additional steps.",
      "leanDeclarations": [
        "Stacks.Algebraization.exists_completion_iso_of_hasPropertySk_three"
      ],
      "evidence": [
        {
          "label": "cubic-picard-verification.json",
          "path": "projects/fano-threefolds/audit/cubic-picard-verification.json",
          "kind": "audit",
          "commit": "27479d6"
        },
        {
          "label": "Stacks Project, algebraization along an ample divisor, Tag 0EL6",
          "url": "https://stacks.math.columbia.edu/tag/0EL6",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "curve-separation",
      "title": "Degree ≥3 on a genus-one curve separates length two",
      "statement": "An ample line bundle L of degree at least three on a proper one-dimensional curve with scalar constants, genus one and trivial dualizing sheaf separates every length-two subscheme.",
      "hypotheses": [
        "k is any field; C/k is proper of dimension one.",
        "h⁰(O_C)=1, genus(C)=1 and ω_C≅O_C.",
        "L is invertible and ample; deg(L)≥3."
      ],
      "conclusion": "An ample line bundle L of degree at least three on a proper one-dimensional curve with scalar constants, genus one and trivial dualizing sheaf separates every length-two subscheme.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C",
        "G",
        "H"
      ],
      "family": "shared",
      "details": "C may be reducible or nonreduced. The statement uses the actual dualizing sheaf, curve degree and restriction maps; it does not supply such a curve on an arbitrary threefold.",
      "leanDeclarations": [
        "FanoThreefolds.genusOne_separates_of_three_le_degree"
      ],
      "evidence": [
        {
          "label": "quadrics-geometry-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-geometry-verification.json",
          "kind": "audit",
          "commit": "c1588db"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "mathlib-linear",
      "title": "Finite-dimensional linear algebra and finite avoidance",
      "statement": "Dimension bounds produce sections in kernels; over an infinite field finitely many proper linear subspaces can be avoided.",
      "hypotheses": [
        "Finite-dimensional vector spaces; an infinite coefficient field for finite avoidance."
      ],
      "conclusion": "Dimension bounds produce sections in kernels; over an infinite field finitely many proper linear subspaces can be avoided.",
      "status": "partial",
      "origin": "mathlib",
      "panels": [
        "G"
      ],
      "family": "shared",
      "details": "Existing Mathlib inputs occur in verified project arguments. This box is an interface summary, not one independently audited declaration; each future use needs its own exact application.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "FanoThreefolds/QuadricsLinearSystem.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsLinearSystem.lean",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/GenerationMembers.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/GenerationMembers.lean",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "adjunction-interface",
      "title": "Regular-cut adjunction and intersection interfaces",
      "statement": "Translate actual Cartier or regular-sequence cuts into canonical-sheaf and numerical-intersection formulas on the supplied scheme.",
      "hypotheses": [
        "Appropriate smooth ambient and regular immersion/Cartier hypotheses, with coherent duality and dimension assumptions."
      ],
      "conclusion": "Translate actual Cartier or regular-sequence cuts into canonical-sheaf and numerical-intersection formulas on the supplied scheme.",
      "status": "partial",
      "origin": "mixed",
      "panels": [
        "G"
      ],
      "family": "shared",
      "details": "Actual hypersurface adjunction for cubics and the two-quadric conormal-determinant application are verified. Other complete-intersection, weighted and homogeneous models still require their own comparison theorems.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "cubic-verification.json",
          "path": "projects/fano-threefolds/audit/cubic-verification.json",
          "kind": "audit",
          "commit": "8fb8d08"
        },
        {
          "label": "FanoThreefolds/CubicGeometry.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/CubicGeometry.lean",
          "kind": "source"
        },
        {
          "label": "quadrics-supplied-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-supplied-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "fano-vanishing",
      "title": "General Fano structure-sheaf vanishing",
      "statement": "For a smooth complex Fano threefold, H^i(X,O_X)=0 for every i>0.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "For a smooth complex Fano threefold, H^i(X,O_X)=0 for every i>0.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "G"
      ],
      "family": "shared",
      "details": "Needed in the general Picard and anticanonical reductions. Scoped half-anticanonical uses already exist; this box requests the general classification interface.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "ample-negative"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "picard-torsion",
      "title": "No hidden Picard torsion",
      "statement": "For a smooth complex Fano threefold the integral Picard group is torsion-free, and its numerical quotient has the expected rank.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "For a smooth complex Fano threefold the integral Picard group is torsion-free, and its numerical quotient has the expected rank.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "G"
      ],
      "family": "shared",
      "details": "Numerical rank one alone does not identify the integral Picard group. A rigorous algebraic or topological route to torsion-freeness and comparison must be selected.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "fano-vanishing"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "picard-generator",
      "title": "Primitive ample generator for every ρ=1 Fano",
      "statement": "Pic(X)≅ℤ, with a chosen primitive ample generator H; the anticanonical class is r[H] for a positive integer r.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Pic(X)≅ℤ, with a chosen primitive ample generator H; the anticanonical class is r[H] for a positive integer r.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "G"
      ],
      "family": "shared",
      "details": "This reduction concerns every rank-one Fano, not only supplied cubics. The verified generator ⇒ ρ=1 lemma proves the opposite direction.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "picard-torsion"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "index-bound",
      "title": "Fano index at most four",
      "statement": "For a smooth complex Fano threefold with −K_X=rH and H primitive ample, 1≤r≤4.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "For a smooth complex Fano threefold with −K_X=rH and H primitive ample, 1≤r≤4.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "G"
      ],
      "family": "shared",
      "details": "A Kobayashi–Ochiai-type algebraic/index argument, with exact hypotheses and equality cases, remains a classification obligation.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "picard-generator"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "degree-bound",
      "title": "Exact-index-two degree bound",
      "statement": "If Pic(X)=ℤ[H] and −K_X=2H with H primitive ample, then 1≤H³≤5.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=2.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "If Pic(X)=ℤ[H] and −K_X=2H with H primitive ample, then 1≤H³≤5.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "The new all-twist Hilbert formula is useful but does not itself give this bound.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "picard-generator",
        "half-sections"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "p3-construction",
      "title": "ℙ³ is the index-four model",
      "statement": "ℙ³ has Pic=ℤ[O(1)], −K=4H, H³=1, (−K)³=64 and ρ=1.",
      "hypotheses": [
        "Ground field ℂ; H=O_{ℙ³}(1)."
      ],
      "conclusion": "ℙ³ has Pic=ℤ[O(1)], −K=4H, H³=1, (−K)³=64 and ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "G"
      ],
      "family": "index4",
      "details": "Literature target in the local roadmap. “Planned” means no matching verified local endpoint is recorded; it does not assert that the result is absent from all Lean libraries.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "p3-recognition",
      "title": "Recognise index four as ℙ³",
      "statement": "A smooth complex rank-one Fano with primitive −K=4H is isomorphic over ℂ to ℙ³, carrying H to O(1).",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=4.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "A smooth complex rank-one Fano with primitive −K=4H is isomorphic over ℂ to ℙ³, carrying H to O(1).",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "G"
      ],
      "family": "index4",
      "details": "Literature target in the local roadmap. “Planned” means no matching verified local endpoint is recorded; it does not assert that the result is absent from all Lean libraries.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "index-bound"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadric-construction",
      "title": "A smooth quadric is the index-three model",
      "statement": "A smooth quadric Q³⊂ℙ⁴ has Pic=ℤ[H], −K=3H, H³=2, (−K)³=54 and ρ=1.",
      "hypotheses": [
        "Ground field ℂ; Q is a smooth quadratic hypersurface in ℙ⁴; H is the restricted O(1)."
      ],
      "conclusion": "A smooth quadric Q³⊂ℙ⁴ has Pic=ℤ[H], −K=3H, H³=2, (−K)³=54 and ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "G"
      ],
      "family": "index3",
      "details": "Literature target in the local roadmap. “Planned” means no matching verified local endpoint is recorded; it does not assert that the result is absent from all Lean libraries.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "quadric-recognition",
      "title": "Recognise index three as Q³",
      "statement": "A smooth complex rank-one Fano with primitive −K=3H is a smooth quadric hypersurface in ℙ⁴, with its hyperplane polarization.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=3.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "A smooth complex rank-one Fano with primitive −K=3H is a smooth quadric hypersurface in ℙ⁴, with its hyperplane polarization.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "G"
      ],
      "family": "index3",
      "details": "Literature target in the local roadmap. “Planned” means no matching verified local endpoint is recorded; it does not assert that the result is absent from all Lean libraries.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "index-bound"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-model",
      "title": "Cubic polarized model theorem",
      "statement": "The supplied smooth cubic model has the Fano, Picard and index invariants; conversely ample H with −K=2H and H³=3 gives that cubic model on the original X.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "One direction supplies a smooth cubic embedding; the other supplies ample H, ω_X⁻¹≅H² and H³=3."
      ],
      "conclusion": "The supplied smooth cubic model has the Fano, Picard and index invariants; conversely ample H with −K=2H and H³=3 gives that cubic model on the original X.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B",
        "H"
      ],
      "family": "index2",
      "details": "See the exact statement and evidence; this box is a mathematical summary.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "cubic-verification.json",
          "path": "projects/fano-threefolds/audit/cubic-verification.json",
          "kind": "audit",
          "commit": "8fb8d08"
        },
        {
          "label": "cubic-picard-verification.json",
          "path": "projects/fano-threefolds/audit/cubic-picard-verification.json",
          "kind": "audit",
          "commit": "27479d6"
        },
        {
          "label": "fixed-recognition-verification.json",
          "path": "projects/fano-threefolds/audit/fixed-recognition-verification.json",
          "kind": "audit",
          "commit": "e5a7252"
        }
      ],
      "caveats": [
        "A nonempty connected parameter-family certificate is a separate open result."
      ],
      "dependencies": [
        "cubic-construction",
        "cubic-picard",
        "cubic-index",
        "cubic-rho",
        "cubic-recognition"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-construction",
      "title": "Supplied cubic → Fano threefold",
      "statement": "A supplied smooth nonzero cubic X⊂ℙ⁴ is projective integral of dimension three, with ω_X≅O_X(−2), ample −K_X, H³=3 and (−K_X)³=24.",
      "hypotheses": [
        "k algebraically closed of characteristic zero, arbitrary universe u.",
        "A closed immersion of the supplied X into ℙ⁴ has image ideal generated by a nonzero cubic and X is smooth over k."
      ],
      "conclusion": "A supplied smooth nonzero cubic X⊂ℙ⁴ is projective integral of dimension three, with ω_X≅O_X(−2), ample −K_X, H³=3 and (−K_X)³=24.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "Actual-scheme canonical and intersection comparisons are included. The result is not merely a construction of the literal equation zero scheme.",
      "leanDeclarations": [
        "FanoThreefolds.cubicThreefoldStatement_proved"
      ],
      "evidence": [
        {
          "label": "cubic-verification.json",
          "path": "projects/fano-threefolds/audit/cubic-verification.json",
          "kind": "audit",
          "commit": "8fb8d08"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-index",
      "title": "Cubic has exact Fano index two",
      "statement": "For the supplied smooth cubic, two is the greatest positive tensor-root exponent of ω_X⁻¹.",
      "hypotheses": [
        "The supplied smooth cubic and H from the construction theorem."
      ],
      "conclusion": "For the supplied smooth cubic, two is the greatest positive tensor-root exponent of ω_X⁻¹.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "Trilinearity gives 24=r³L³ for every anticanonical root; positive r is bounded by two, and H realizes r=2. Does not assume Pic=ℤ.",
      "leanDeclarations": [
        "FanoThreefolds.cubicIndexTwoStatement_proved",
        "FanoThreefolds.cubicAnticanonicalIndex_isGreatest"
      ],
      "evidence": [
        {
          "label": "cubic-index-verification.json",
          "path": "projects/fano-threefolds/audit/cubic-index-verification.json",
          "kind": "audit",
          "commit": "78dc0d9"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-formal-lifts",
      "title": "Lift cubic line bundles through all thickenings",
      "statement": "Every line bundle on the cubic has compatible Picard lifts to all powers of its Cartier ideal in ℙ⁴.",
      "hypotheses": [
        "The supplied smooth nonzero cubic divisor in ℙ⁴."
      ],
      "conclusion": "Every line bundle on the cubic has compatible Picard lifts to all powers of its Cartier ideal in ℙ⁴.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "Uses H¹ and H² vanishing on Cartier thickenings, the square-zero Picard obstruction sequence and actual compatible invertible representatives.",
      "leanDeclarations": [
        "FanoThreefolds.thickening_picard_obstruction_zero",
        "FanoThreefolds.exists_compatible_picard_idealPowers",
        "FanoThreefolds.exists_picard_idealPowerStageModules"
      ],
      "evidence": [
        {
          "label": "cubic-picard-verification.json",
          "path": "projects/fano-threefolds/audit/cubic-picard-verification.json",
          "kind": "audit",
          "commit": "27479d6"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-ambient-extension",
      "title": "Extend a cubic line bundle to ℙ⁴",
      "statement": "Every line bundle on the supplied cubic is the restriction of an invertible sheaf on ambient ℙ⁴.",
      "hypotheses": [
        "The supplied smooth nonzero cubic; the ample Cartier divisor, S₃ and factorial ambient-stalk conditions are verified for ℙ⁴."
      ],
      "conclusion": "Every line bundle on the supplied cubic is the restriction of an invertible sheaf on ambient ℙ⁴.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "Algebraize the formal lift, obtain local freeness near the divisor, then extend across the factorial complement.",
      "leanDeclarations": [
        "FanoThreefolds.exists_ambient_picardClass_of_idealPowerStageModules",
        "FanoThreefolds.surjective_pullbackPicardHom_cubic"
      ],
      "evidence": [
        {
          "label": "cubic-picard-verification.json",
          "path": "projects/fano-threefolds/audit/cubic-picard-verification.json",
          "kind": "audit",
          "commit": "27479d6"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-formal-lifts",
        "algebraization"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-picard",
      "title": "Integral Picard group of a cubic",
      "statement": "n↦n[H] is an additive isomorphism ℤ≅Pic(X), and every invertible sheaf is a unique integral tensor power of H.",
      "hypotheses": [
        "The supplied smooth cubic over its original algebraically closed characteristic-zero field."
      ],
      "conclusion": "n↦n[H] is an additive isomorphism ℤ≅Pic(X), and every invertible sheaf is a unique integral tensor power of H.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "Ambient line bundles are Serre twists; intersection with H² and H³=3 proves distinct powers give distinct Picard classes.",
      "leanDeclarations": [
        "FanoThreefolds.cubicHyperplanePicardEquiv_exists",
        "FanoThreefolds.cubicInvertibleSheaf_unique_hyperplanePower"
      ],
      "evidence": [
        {
          "label": "cubic-picard-verification.json",
          "path": "projects/fano-threefolds/audit/cubic-picard-verification.json",
          "kind": "audit",
          "commit": "27479d6"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-ambient-extension",
        "cubic-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-rho",
      "title": "Numerical Picard number of a cubic",
      "statement": "The conventional numerical Picard number of the supplied smooth cubic is one.",
      "hypotheses": [
        "The supplied smooth cubic."
      ],
      "conclusion": "The conventional numerical Picard number of the supplied smooth cubic is one.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "See the exact statement and evidence; this box is a mathematical summary.",
      "leanDeclarations": [
        "FanoThreefolds.cubicPicardNumberStatement_proved"
      ],
      "evidence": [
        {
          "label": "cubic-picard-verification.json",
          "path": "projects/fano-threefolds/audit/cubic-picard-verification.json",
          "kind": "audit",
          "commit": "27479d6"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-picard",
        "picard-numerical"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-sections",
      "title": "Cubic intrinsic Euler and section counts",
      "statement": "For intrinsic H with H³=3, χ(nH)=((n+1)³+(n+1))/2 for n∈ℤ; h⁰(H)=5 and nonnegative twists have this Hilbert function.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 3. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "For intrinsic H with H³=3, χ(nH)=((n+1)³+(n+1))/2 for n∈ℤ; h⁰(H)=5 and nonnegative twists have this Hilbert function.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "This cubic formula was proved before the parameterized degree-d formula. No historical dependency on that later theorem is asserted.",
      "leanDeclarations": [
        "FanoThreefolds.recognitionSectionCount",
        "FanoThreefolds.recognitionEulerPolynomial",
        "FanoThreefolds.recognitionHilbertFunction"
      ],
      "evidence": [
        {
          "label": "recognition-section-count-verification.json",
          "path": "projects/fano-threefolds/audit/recognition-section-count-verification.json",
          "kind": "audit"
        },
        {
          "label": "recognition-sections-and-curves-verification.json",
          "path": "projects/fano-threefolds/audit/recognition-sections-and-curves-verification.json",
          "kind": "audit"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-fixed-parity",
      "title": "Fixed-divisor intersection obstruction",
      "statement": "In the cubic intrinsic setting, a nonzero fixed divisor forces positive mixed intersection terms and parity constraints yielding H³≥4.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 3. No Picard-number or primitive-generator hypothesis is assumed.",
        "Assume for contradiction that |H| has a nonzero fixed divisorial part."
      ],
      "conclusion": "In the cubic intrinsic setting, a nonzero fixed divisor forces positive mixed intersection terms and parity constraints yielding H³≥4.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "The proof subtracts fixed prime components, uses residual section ranks and actual proper-intersection degrees, then uses parity. It does not assume an integral general member of |H|.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "fixed-divisors-verification.json",
          "path": "projects/fano-threefolds/audit/fixed-divisors-verification.json",
          "kind": "audit",
          "commit": "5a5989b"
        },
        {
          "label": "FanoThreefolds/IntrinsicFixedDivisors.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/IntrinsicFixedDivisors.lean",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-no-fixed",
      "title": "No fixed divisor for intrinsic cubic data",
      "statement": "Every integral closed surface in X has some H-section restricting nontrivially to it; |H| has no fixed prime divisor.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 3. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "Every integral closed surface in X has some H-section restricting nontrivially to it; |H| has no fixed prime divisor.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "See the exact statement and evidence; this box is a mathematical summary.",
      "leanDeclarations": [
        "FanoThreefolds.intrinsicCubicNoFixedDivisor_proved"
      ],
      "evidence": [
        {
          "label": "fixed-divisors-verification.json",
          "path": "projects/fano-threefolds/audit/fixed-divisors-verification.json",
          "kind": "audit",
          "commit": "5a5989b"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-fixed-parity"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-regular-curves",
      "title": "Regular cubic section curves: genus and lifting",
      "statement": "For a supplied nonzero H-section and a second section regular on its divisor, the intersection curve has scalar constants, genus one, trivial dualizing sheaf and H-degree three; sections lift through the restriction ladder.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 3. No Picard-number or primitive-generator hypothesis is assumed.",
        "The two successive sections are regular; reducedness and irreducibility are not assumed."
      ],
      "conclusion": "For a supplied nonzero H-section and a second section regular on its divisor, the intersection curve has scalar constants, genus one, trivial dualizing sheaf and H-degree three; sections lift through the restriction ladder.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "A conditional regular-cut calculation, not an existence theorem for reduced cuts.",
      "leanDeclarations": [
        "FanoThreefolds.recognitionRegularSectionCurve",
        "FanoThreefolds.recognitionFundamentalMemberRestriction",
        "FanoThreefolds.recognitionCompositeRestrictionSurjective",
        "FanoThreefolds.regularPairDualizingTrivial"
      ],
      "evidence": [
        {
          "label": "recognition-sections-and-curves-verification.json",
          "path": "projects/fano-threefolds/audit/recognition-sections-and-curves-verification.json",
          "kind": "audit"
        },
        {
          "label": "fixed-generation-verification.json",
          "path": "projects/fano-threefolds/audit/fixed-generation-verification.json",
          "commit": "1d56f2c",
          "kind": "audit"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-curve-tests",
      "title": "Separate length two on the actual regular curve",
      "statement": "Every regular two-section curve arising from the intrinsic cubic hypotheses has surjective restriction to all length-two closed subschemes for H restricted to the curve.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 3. No Picard-number or primitive-generator hypothesis is assumed.",
        "A supplied regular pair defines the curve."
      ],
      "conclusion": "Every regular two-section curve arising from the intrinsic cubic hypotheses has surjective restriction to all length-two closed subschemes for H restricted to the curve.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "Duality and Euler-degree estimates work even on nonreduced curves. The later general degree≥3 lemma abstracts this argument.",
      "leanDeclarations": [
        "FanoThreefolds.fixedRegularPair_separates"
      ],
      "evidence": [
        {
          "label": "fixed-generation-verification.json",
          "path": "projects/fano-threefolds/audit/fixed-generation-verification.json",
          "kind": "audit",
          "commit": "1d56f2c"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-regular-curves"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-generation",
      "title": "H is globally generated on original X",
      "statement": "All stalks of the given H are generated by its actual global sections on X.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 3. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "All stalks of the given H are generated by its actual global sections on X.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "Finite avoidance constructs regular cuts, and generation lifts from the curve to the divisor and to X. Generation is on X itself, not merely on a blowup.",
      "leanDeclarations": [
        "FanoThreefolds.intrinsicCubicGlobalGeneration_proved"
      ],
      "evidence": [
        {
          "label": "fixed-generation-verification.json",
          "path": "projects/fano-threefolds/audit/fixed-generation-verification.json",
          "kind": "audit",
          "commit": "1d56f2c"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-no-fixed",
        "cubic-curve-tests"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-separation",
      "title": "H separates every length-two subscheme of X",
      "statement": "For every length-two closed subscheme Z⊂X, H⁰(X,H)→H⁰(Z,H|Z) is surjective.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 3. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "For every length-two closed subscheme Z⊂X, H⁰(X,H)→H⁰(Z,H|Z) is surjective.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "Includes tangent double points, not just pairs of distinct geometric points. Regular cuts through Z and restriction lifting supply the proof.",
      "leanDeclarations": [
        "FanoThreefolds.intrinsicCubicSeparation_proved"
      ],
      "evidence": [
        {
          "label": "fixed-recognition-verification.json",
          "path": "projects/fano-threefolds/audit/fixed-recognition-verification.json",
          "kind": "audit",
          "commit": "e5a7252"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-no-fixed",
        "cubic-curve-tests",
        "cubic-generation"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-embedding",
      "title": "Complete |H| embeds X into ℙ⁴",
      "statement": "H is very ample; its five sections give an over-k closed immersion X→ℙ⁴ carrying O(1) to H.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 3. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "H is very ample; its five sections give an over-k closed immersion X→ℙ⁴ carrying O(1) to H.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "See the exact statement and evidence; this box is a mathematical summary.",
      "leanDeclarations": [
        "FanoThreefolds.recognitionEmbedding_of_degreeTwo"
      ],
      "evidence": [
        {
          "label": "fixed-recognition-verification.json",
          "path": "projects/fano-threefolds/audit/fixed-recognition-verification.json",
          "kind": "audit",
          "commit": "e5a7252"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-separation",
        "cubic-sections"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-ideal",
      "title": "The entire image ideal is one cubic",
      "statement": "For a supplied H-polarized closed embedding into ℙ⁴, the scheme-theoretic image ideal is generated by a nonzero homogeneous cubic.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 3. No Picard-number or primitive-generator hypothesis is assumed.",
        "An over-k closed embedding into ℙ⁴ pulls O(1) back to H."
      ],
      "conclusion": "For a supplied H-polarized closed embedding into ℙ⁴, the scheme-theoretic image ideal is generated by a nonzero homogeneous cubic.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "The Hilbert function first gives a cubic relation; the ideal and dimension argument identifies the whole subscheme. A relation alone would not suffice.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "recognition-cubic-image-verification.json",
          "path": "projects/fano-threefolds/audit/recognition-cubic-image-verification.json",
          "kind": "audit"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-sections"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-recognition",
      "title": "Intrinsic cubic recognition",
      "statement": "Ample H with ω_X⁻¹≅H² and H³=3 is the restricted hyperplane of a smooth cubic embedding of the original X into ℙ⁴.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 3. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "Ample H with ω_X⁻¹≅H² and H³=3 is the restricted hyperplane of a smooth cubic embedding of the original X into ℙ⁴.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B",
        "H"
      ],
      "family": "index2",
      "details": "See the exact statement and evidence; this box is a mathematical summary.",
      "leanDeclarations": [
        "FanoThreefolds.intrinsicCubicRecognitionStatement_proved"
      ],
      "evidence": [
        {
          "label": "fixed-recognition-verification.json",
          "path": "projects/fano-threefolds/audit/fixed-recognition-verification.json",
          "kind": "audit",
          "commit": "e5a7252"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-embedding",
        "cubic-ideal"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-reduced-pair",
      "title": "Reduced regular pairs after generation",
      "statement": "There are two H-sections forming a regular pair whose curve is reduced and has length one at each generic point.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 3. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "There are two H-sections forming a regular pair whose curve is reduced and has length one at each generic point.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "H"
      ],
      "family": "index2",
      "details": "Uses Bertini after global generation. This result is not fed back into the earlier proof of global generation, so the displayed argument is not circular.",
      "leanDeclarations": [
        "FanoThreefolds.intrinsicCubic_exists_reducedRegularPair",
        "FanoThreefolds.intrinsicCubic_exists_multiplicityOnePair"
      ],
      "evidence": [
        {
          "label": "fixed-reduced-pair-verification.json",
          "path": "projects/fano-threefolds/audit/fixed-reduced-pair-verification.json",
          "kind": "audit",
          "commit": "d921967"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-generation"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "cubic-existence",
      "title": "A nonempty smooth cubic family",
      "statement": "Smooth cubic equations in five variables form a nonempty parameter locus giving smooth cubic threefolds with the supplied-model invariants.",
      "hypotheses": [
        "Ground field ℂ; nonzero homogeneous cubic equations up to scaling."
      ],
      "conclusion": "Smooth cubic equations in five variables form a nonempty parameter locus giving smooth cubic threefolds with the supplied-model invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "B",
        "F"
      ],
      "family": "index2",
      "details": "A Fermat-type example can witness nonemptiness; the parameter-family theorem and deformation certificate have not been verified locally.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-model"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-model",
      "title": "Degree-four polarized model package",
      "statement": "The degree-four polarized model is characterised in both directions: ample H with ω_X⁻¹≅H² and H³=4 gives a smooth two-quadric embedding, and every supplied smooth regular intersection has the exact Fano, integral Picard and numerical Picard invariants.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "The degree-four polarized model is characterised in both directions: ample H with ω_X⁻¹≅H² and H³=4 gives a smooth two-quadric embedding, and every supplied smooth regular intersection has the exact Fano, integral Picard and numerical Picard invariants.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "Both geometric directions and an explicit smooth nonempty example are verified at 3d19f62, together with the parameterized all-integer Hilbert formula. The intrinsic direction assumes no primitive-generator or Picard-number hypothesis. The family-level classification obligations remain open.",
      "leanDeclarations": [
        "FanoThreefolds.intrinsicTwoQuadricsRecognitionStatement_proved",
        "FanoThreefolds.smoothTwoQuadricsStatement_proved",
        "FanoThreefolds.smoothTwoQuadricsExistenceStatement_proved"
      ],
      "evidence": [
        {
          "label": "quadrics-supplied-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-supplied-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsProposal.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsProposal.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/QuadricsConstructionAudit.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsConstructionAudit.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [
        "This is not yet a proof that all degree-four models constitute one deformation family."
      ],
      "dependencies": [
        "quadrics-recognition",
        "quadrics-construction",
        "quadrics-existence"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-counts",
      "title": "Six sections, nineteen quadratic sections",
      "statement": "For degree-four intrinsic data, h⁰(H)=6 and h⁰(2H)=19.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "For degree-four intrinsic data, h⁰(H)=6 and h⁰(2H)=19.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "family": "index2",
      "details": "See the exact statement and evidence; this box is a mathematical summary.",
      "leanDeclarations": [
        "FanoThreefolds.indexTwoSectionCount"
      ],
      "evidence": [
        {
          "label": "quadrics-numerics-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-numerics-verification.json",
          "kind": "audit",
          "commit": "aeadc65"
        }
      ],
      "caveats": [],
      "dependencies": [
        "half-sections"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-low-rank",
      "title": "Only finitely many low-rank surfaces",
      "statement": "If H³<r<h⁰(H) for some positive integer r, only finitely many integral surfaces have restriction-image dimension at most one.",
      "hypotheses": [
        "X/k proper integral of dimension three, k a field; H ample invertible.",
        "0<r, H³<r and r<h⁰(X,H)."
      ],
      "conclusion": "If H³<r<h⁰(H) for some positive integer r, only finitely many integral surfaces have restriction-image dimension at most one.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "family": "index2",
      "details": "For degree four, take r=5 because h⁰(H)=6. This finiteness statement alone does not rule out fixed divisors.",
      "leanDeclarations": [
        "FanoThreefolds.finite_lowRank_integralSurfaces"
      ],
      "evidence": [
        {
          "label": "quadrics-geometry-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-geometry-verification.json",
          "kind": "audit",
          "commit": "c1588db"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-no-fixed",
      "title": "No fixed divisor in degree four",
      "statement": "For intrinsic degree-four data, every integral closed surface sees a nonzero H-section; the complete |H| has no fixed prime divisor.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "For intrinsic degree-four data, every integral closed surface sees a nonzero H-section; the complete |H| has no fixed prime divisor.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "family": "index2",
      "details": "A hypothetical fixed part B with residual system M forces H²B=1, H·B·M=2 and H·M²=1. Finite avoidance gives a residual Cartier surface whose positive component intersections sum to one, so it is integral with multiplicity one. Restriction to a curve bounds its residual sections by three, whereas the six sections on X lose at most one on restriction. This contradiction removes the fixed part.",
      "leanDeclarations": [
        "FanoThreefolds.quadrics_fixedPart_eq_top",
        "FanoThreefolds.quadricsNoFixedDivisor",
        "FanoThreefolds.residualSurface_sections_le_three"
      ],
      "evidence": [
        {
          "label": "quadrics-intrinsic-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-intrinsic-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsResidualComponents.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsResidualComponents.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/QuadricsResidualFixedPart.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsResidualFixedPart.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/QuadricsRecognition.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsRecognition.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-counts",
        "quadrics-low-rank"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-regular-cuts",
      "title": "Regular degree-four curves and restriction",
      "statement": "Any successive regular pair of H-sections cuts a proper curve with scalar constants, genus one, trivial dualizing sheaf and H-degree four; its H-sections lift to X.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed.",
        "A nonzero first section and a second section regular on its actual Cartier divisor are supplied."
      ],
      "conclusion": "Any successive regular pair of H-sections cuts a proper curve with scalar constants, genus one, trivial dualizing sheaf and H-degree four; its H-sections lift to X.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "family": "index2",
      "details": "Two actual Cartier exact sequences compute cohomology, genus and degree and give surjective restrictions. Adjunction gives the trivial dualizing sheaf. The statements allow a singular intermediate surface and a reducible or nonreduced curve. The global-generation proof constructs a regular pair using the no-fixed-divisor theorem; this box states the conditional curve calculation.",
      "leanDeclarations": [
        "FanoThreefolds.quadricsRegularSectionCurve",
        "FanoThreefolds.quadricsRegularPairRestriction",
        "FanoThreefolds.regularPairDualizingTrivial"
      ],
      "evidence": [
        {
          "label": "quadrics-intrinsic-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-intrinsic-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsRegularCurve.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsRegularCurve.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/GenerationSectionCurves.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/GenerationSectionCurves.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [
        "half-euler",
        "half-sections"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-generation",
      "title": "Degree-four H is globally generated",
      "statement": "The actual global sections of H generate every stalk of the given H on the original degree-four threefold X.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "The actual global sections of H generate every stalk of the given H on the original degree-four threefold X.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "family": "index2",
      "details": "No fixed divisor allows finite avoidance to choose a regular pair. Degree-four genus-one curve separation supplies generation on the curve; surjective restriction and the defining sections lift it to the surface and then to X. The proof does not replace X by a blowup.",
      "leanDeclarations": [
        "FanoThreefolds.quadricsRegularPair_separates",
        "FanoThreefolds.quadricsGlobalGeneration"
      ],
      "evidence": [
        {
          "label": "quadrics-intrinsic-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-intrinsic-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsRecognition.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsRecognition.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-no-fixed",
        "quadrics-counts",
        "quadrics-regular-cuts",
        "curve-separation"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-separation",
      "title": "Degree-four H separates length two",
      "statement": "The polarization H on the original degree-four threefold separates every length-two closed subscheme, including tangent double points.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "The polarization H on the original degree-four threefold separates every length-two closed subscheme, including tangent double points.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "family": "index2",
      "details": "If restriction to a length-two test failed, its section kernel would be large. Global generation and finite avoidance produce a regular pair through that test. Separation on the actual genus-one section curve, and surjective restriction back to X, contradict failure.",
      "leanDeclarations": [
        "FanoThreefolds.quadricsSeparation"
      ],
      "evidence": [
        {
          "label": "quadrics-intrinsic-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-intrinsic-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsRecognition.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsRecognition.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-generation",
        "quadrics-counts",
        "quadrics-regular-cuts",
        "curve-separation"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-embedding",
      "title": "Complete |H| embeds X into ℙ⁵",
      "statement": "The six-dimensional complete H-system gives an over-k closed immersion X→ℙ⁵ with O(1) pulling back to H and a bijection on spaces of linear sections.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "The six-dimensional complete H-system gives an over-k closed immersion X→ℙ⁵ with O(1) pulling back to H and a bijection on spaces of linear sections.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "family": "index2",
      "details": "A basis of the actual section space and length-two separation yield a closed immersion. The proof transports the projective-space presentation to polynomial projective five-space and verifies that the entire space of ambient linear forms restricts bijectively.",
      "leanDeclarations": [
        "FanoThreefolds.quadricsEmbedding_of_degreeTwo"
      ],
      "evidence": [
        {
          "label": "quadrics-intrinsic-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-intrinsic-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsRecognition.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsRecognition.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-counts",
        "quadrics-separation"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-equations",
      "title": "Two independent equations for a supplied map",
      "statement": "A supplied H-polarized map X→ℙ⁵ has two linearly independent quadratic equations in its scheme-theoretic kernel.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed.",
        "A morphism to ℙ⁵ is supplied together with the actual hyperplane pullback isomorphism."
      ],
      "conclusion": "A supplied H-polarized map X→ℙ⁵ has two linearly independent quadratic equations in its scheme-theoretic kernel.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "family": "index2",
      "details": "See the exact statement and evidence; this box is a mathematical summary.",
      "leanDeclarations": [
        "FanoThreefolds.degreeFour_two_equations_of_polarized_map",
        "FanoThreefolds.exists_two_quadric_equations"
      ],
      "evidence": [
        {
          "label": "quadrics-geometry-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-geometry-verification.json",
          "kind": "audit",
          "commit": "c1588db"
        }
      ],
      "caveats": [
        "Does not construct the map, prove it is an embedding, show the two equations are regular, or identify the full ideal."
      ],
      "dependencies": [
        "quadrics-counts"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-ideal",
      "title": "Regular equations generate the whole ideal",
      "statement": "The two independent quadratic relations of the intrinsic closed embedding form a regular sequence and generate its whole scheme-theoretic image ideal.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed.",
        "The complete H-system is embedded in ℙ⁵."
      ],
      "conclusion": "The two independent quadratic relations of the intrinsic closed embedding form a regular sequence and generate its whole scheme-theoretic image ideal.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "family": "index2",
      "details": "The image is integral and linearly nondegenerate, which makes the independent quadrics a regular sequence. Successive actual Cartier cuts compute the common zero scheme’s Hilbert polynomial. Equality with the embedded threefold’s polynomial, followed by Serre vanishing and generation for the coherent ideal, proves that ideal is zero and hence identifies the full image.",
      "leanDeclarations": [
        "FanoThreefolds.quadrics_regular_of_nondegenerate_image",
        "FanoThreefolds.quadrics_iterated_hilbert",
        "FanoThreefolds.quadrics_ideal_eq_of_hilbert",
        "FanoThreefolds.degreeFour_image_ideal_of_polarized_closedImmersion"
      ],
      "evidence": [
        {
          "label": "quadrics-intrinsic-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-intrinsic-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsRelations.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsRelations.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/QuadricsImageIdentification.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsImageIdentification.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-embedding",
        "quadrics-equations",
        "quadrics-cartier",
        "half-euler"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-recognition",
      "title": "Intrinsic recognition as two quadrics",
      "statement": "Ample H with ω_X⁻¹≅H² and H³=4 has six sections, is very ample, and gives the original X as a smooth scheme-theoretic intersection of two quadrics in ℙ⁵ by its complete system.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "Ample H with ω_X⁻¹≅H² and H³=4 has six sections, is very ample, and gives the original X as a smooth scheme-theoretic intersection of two quadrics in ℙ⁵ by its complete system.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B",
        "C"
      ],
      "family": "index2",
      "details": "The verified endpoint combines length-two separation, the complete-system embedding, regularity of its two quadratic equations and equality of the image ideal. It holds over the original algebraically closed characteristic-zero field at arbitrary universe; neither ρ=1 nor primitive H is assumed.",
      "leanDeclarations": [
        "FanoThreefolds.intrinsicTwoQuadricsRecognitionStatement_proved"
      ],
      "evidence": [
        {
          "label": "quadrics-intrinsic-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-intrinsic-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsRecognition.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsRecognition.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/QuadricsProposal.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsProposal.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [
        "This is the geometric model theorem. Connectedness of a parameter family and classification up to deformation remain separate obligations."
      ],
      "dependencies": [
        "quadrics-embedding",
        "quadrics-ideal"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-cancellation",
      "title": "Regular polynomial pair: cancellation",
      "statement": "If F,G form a regular sequence, multiplication by G modulo F remains injective after the required localizations and dehomogenizations.",
      "hypotheses": [
        "Any coefficient field k; homogeneous quadrics F,G in six variables form a regular sequence."
      ],
      "conclusion": "If F,G form a regular sequence, multiplication by G modulo F remains injective after the required localizations and dehomogenizations.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "Algebraic support for the actual Cartier construction, valid even when the first quadric is singular.",
      "leanDeclarations": [
        "FanoThreefolds.quadrics_pair_cancel",
        "FanoThreefolds.quadrics_dehom_cancel"
      ],
      "evidence": [
        {
          "label": "quadrics-geometry-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-geometry-verification.json",
          "kind": "audit",
          "commit": "c1588db"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-chart",
      "title": "Second equation is regular on every actual chart",
      "statement": "On each standard affine chart of the first-quadric subscheme, multiplication by the restricted second equation has trivial kernel.",
      "hypotheses": [
        "Any field k, arbitrary universe u; F,G are a regular pair of quadrics in six variables."
      ],
      "conclusion": "On each standard affine chart of the first-quadric subscheme, multiplication by the restricted second equation has trivial kernel.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "Earlier verified input at adf1a91. Public named and expanded arbitrary-universe tests and separate direct replay both passed, with exactly the three standard axioms. This chartwise regularity theorem now supports the completed global second Cartier-cut proof.",
      "leanDeclarations": [
        "FanoThreefolds.quadrics_second_chart_regular"
      ],
      "evidence": [
        {
          "label": "quadrics-chart-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-chart-verification.json",
          "kind": "audit",
          "commit": "adf1a91"
        },
        {
          "label": "FanoThreefolds/QuadricsConstructionCharts.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsConstructionCharts.lean",
          "kind": "source",
          "commit": "ad229d4"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-cancellation"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-cartier",
      "title": "Global second Cartier cut",
      "statement": "For a regular polynomial pair F,G, the restriction of G to the actual first-quadric subscheme V(F) is a regular section of O(2), and its zero scheme is an effective Cartier divisor giving V(F,G).",
      "hypotheses": [
        "k is any field; arbitrary universe u.",
        "F,G are homogeneous quadrics in six variables forming a regular sequence; no smoothness of V(F) is assumed."
      ],
      "conclusion": "For a regular polynomial pair F,G, the restriction of G to the actual first-quadric subscheme V(F) is a regular section of O(2), and its zero scheme is an effective Cartier divisor giving V(F,G).",
      "status": "verified",
      "origin": "project",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "The verified chartwise multiplication-injectivity result glues through the affine-local Cartier criterion. Pullback of the second zero-scheme ideal identifies the restricted section, and the composite immersion has kernel equal to the sum of the two original ideals.",
      "leanDeclarations": [
        "FanoThreefolds.quadrics_second_cartier",
        "FanoThreefolds.quadrics_second_regular",
        "FanoThreefolds.quadrics_composite_kernel"
      ],
      "evidence": [
        {
          "label": "quadrics-global-cut-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-global-cut-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsConstructionSecondCut.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsConstructionSecondCut.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-chart"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-geometry",
      "title": "Supplied intersection: geometry and sections",
      "statement": "The supplied smooth regular intersection has dimension three, is projective and integral, has scalar global constants and six hyperplane sections.",
      "hypotheses": [
        "k is any field; arbitrary Lean universe u.",
        "The supplied smooth X is closed-immersed in polynomial ℙ⁵_k with image ideal (F)+(G), where F,G are a regular pair of homogeneous quadrics in six variables.",
        "H is the restricted O(1). The first quadric is not assumed smooth."
      ],
      "conclusion": "The supplied smooth regular intersection has dimension three, is projective and integral, has scalar global constants and six hyperplane sections.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "The given immersion is identified with the iterated Cartier presentation. Each cut lowers relative dimension by one. The Cartier cohomology sequences give one-dimensional constants and six sections of the restricted hyperplane; connectedness and smoothness then give integrality. The geometric and section-rank helpers work over any field.",
      "leanDeclarations": [
        "FanoThreefolds.quadrics_exists_iterated_presentation",
        "FanoThreefolds.quadrics_supplied_section_ranks",
        "FanoThreefolds.quadrics_supplied_connected",
        "FanoThreefolds.quadrics_supplied_geometry"
      ],
      "evidence": [
        {
          "label": "quadrics-supplied-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-supplied-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsEmbedded.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsEmbedded.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/QuadricsSuppliedGeometry.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsSuppliedGeometry.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-cartier"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-adjunction",
      "title": "Adjunction: −K=2H for two quadrics",
      "statement": "On the supplied smooth regular intersection, ω_X≅O_X(−2); consequently ω_X⁻¹≅H² and both H and −K_X are ample.",
      "hypotheses": [
        "k is an algebraically closed field of characteristic zero; arbitrary Lean universe u.",
        "The supplied smooth X is closed-immersed in polynomial ℙ⁵_k with image ideal (F)+(G), where F,G are a regular pair of homogeneous quadrics in six variables.",
        "H is the restricted O(1). The first quadric is not assumed smooth."
      ],
      "conclusion": "On the supplied smooth regular intersection, ω_X≅O_X(−2); consequently ω_X⁻¹≅H² and both H and −K_X are ample.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "Take the determinant of the conormal sequence of the complete intersection and compare it with the actual third relative forms on the supplied X. The argument allows a singular first quadric. The canonical-twist helper itself works over any field; the complete public invariant package is stated over algebraically closed characteristic-zero fields.",
      "leanDeclarations": [
        "FanoThreefolds.quadrics_iterated_conormal_determinant",
        "FanoThreefolds.quadrics_supplied_canonicalTwist",
        "FanoThreefolds.quadrics_supplied_polarization_cubes"
      ],
      "evidence": [
        {
          "label": "quadrics-supplied-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-supplied-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsSuppliedAdjunction.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsSuppliedAdjunction.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/QuadricsSuppliedNumerics.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsSuppliedNumerics.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-cartier",
        "quadrics-geometry"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-degree",
      "title": "Two-quadric degrees: 4 and 32",
      "statement": "For the supplied smooth two-quadric intersection, the actual numerical intersection pairing gives H³=4 and (−K_X)³=32.",
      "hypotheses": [
        "k is an algebraically closed field of characteristic zero; arbitrary Lean universe u.",
        "The supplied smooth X is closed-immersed in polynomial ℙ⁵_k with image ideal (F)+(G), where F,G are a regular pair of homogeneous quadrics in six variables.",
        "H is the restricted O(1). The first quadric is not assumed smooth."
      ],
      "conclusion": "For the supplied smooth two-quadric intersection, the actual numerical intersection pairing gives H³=4 and (−K_X)³=32.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "The section computation gives h⁰(H)=6. Applying the verified half-anticanonical formula h⁰(H)=H³+2 gives H³=4. Tensor-square scaling of the actual numerical pairing then gives (−K_X)³=8H³=32. The proof does not infer the degree merely from a formal product 2·2.",
      "leanDeclarations": [
        "FanoThreefolds.quadrics_supplied_polarization_cubes"
      ],
      "evidence": [
        {
          "label": "quadrics-supplied-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-supplied-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsSuppliedNumerics.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsSuppliedNumerics.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-geometry",
        "quadrics-adjunction",
        "half-sections"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-picard",
      "title": "Integral Picard generator on two quadrics",
      "statement": "For the supplied smooth two-quadric intersection, n↦n[H] is bijective ℤ→Pic(X); equivalently every invertible sheaf is a unique integral tensor power of H.",
      "hypotheses": [
        "k is an algebraically closed field of characteristic zero; arbitrary Lean universe u.",
        "The supplied smooth X is closed-immersed in polynomial ℙ⁵_k with image ideal (F)+(G), where F,G are a regular pair of homogeneous quadrics in six variables.",
        "H is the restricted O(1). The first quadric is not assumed smooth."
      ],
      "conclusion": "For the supplied smooth two-quadric intersection, n↦n[H] is bijective ℤ→Pic(X); equivalently every invertible sheaf is a unique integral tensor power of H.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "Formal Picard lifting and algebraization extend classes across both cuts. The complement of a suitable neighborhood on the first quadric consists of finitely many closed points. Their four-dimensional complete-intersection stalks have punctured spectra with trivial Picard group, so finite induction fills the punctures. Ambient Picard generation gives surjectivity, and pairing with H² with H³=4 gives injectivity. The first quadric need not be smooth.",
      "leanDeclarations": [
        "FanoThreefolds.quadrics_picard_lift_tower",
        "FanoThreefolds.quadrics_picard_extend_algebraization",
        "FanoThreefolds.quadrics_picard_fill_punctures",
        "FanoThreefolds.quadrics_supplied_picard_restriction",
        "FanoThreefolds.quadrics_supplied_picard"
      ],
      "evidence": [
        {
          "label": "quadrics-supplied-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-supplied-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsSuppliedPicardComplement.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsSuppliedPicardComplement.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/QuadricsSuppliedPicard.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsSuppliedPicard.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [
        "The integral Picard result is proved for the supplied smooth model. It does not establish the general reverse implication ρ=1 ⇒ Pic(X)=ℤ for all Fano threefolds."
      ],
      "dependencies": [
        "quadrics-geometry",
        "quadrics-degree",
        "algebraization"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-index-rho",
      "title": "Exact index two and numerical ρ=1",
      "statement": "The supplied smooth intersection has exact Fano index two and conventional numerical Picard number one.",
      "hypotheses": [
        "k is an algebraically closed field of characteristic zero; arbitrary Lean universe u.",
        "The supplied smooth X is closed-immersed in polynomial ℙ⁵_k with image ideal (F)+(G), where F,G are a regular pair of homogeneous quadrics in six variables.",
        "H is the restricted O(1). The first quadric is not assumed smooth."
      ],
      "conclusion": "The supplied smooth intersection has exact Fano index two and conventional numerical Picard number one.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "The maximal-root argument is independent of Picard generation: a positive anticanonical tensor-root exponent r satisfies r³∣32, so r≤2, and H realizes r=2. Separately, the ample integral Picard generator and a positive proper curve identify the numerical one-cycle quotient with a one-dimensional real space.",
      "leanDeclarations": [
        "FanoThreefolds.quadrics_supplied_index",
        "FanoThreefolds.quadrics_supplied_picard"
      ],
      "evidence": [
        {
          "label": "quadrics-supplied-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-supplied-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsConstruction.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsConstruction.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/QuadricsSuppliedPicard.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsSuppliedPicard.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-adjunction",
        "quadrics-degree",
        "quadrics-picard",
        "picard-numerical"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-construction",
      "title": "Supplied two quadrics → complete Fano package",
      "statement": "Every supplied smooth regular intersection of two quadrics in ℙ⁵ is a rank-one Fano threefold of exact index two, with Pic(X)=ℤ[H], H³=4 and (−K_X)³=32.",
      "hypotheses": [
        "k is an algebraically closed field of characteristic zero; arbitrary Lean universe u.",
        "The supplied smooth X is closed-immersed in polynomial ℙ⁵_k with image ideal (F)+(G), where F,G are a regular pair of homogeneous quadrics in six variables.",
        "H is the restricted O(1). The first quadric is not assumed smooth."
      ],
      "conclusion": "Every supplied smooth regular intersection of two quadrics in ℙ⁵ is a rank-one Fano threefold of exact index two, with Pic(X)=ℤ[H], H³=4 and (−K_X)³=32.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B",
        "D"
      ],
      "family": "index2",
      "details": "The final public endpoint includes the supplied scheme’s projectivity, smoothness, integrality, dimension, actual canonical and anticanonical isomorphisms, ampleness, numerical cubes, Picard bijection, numerical ρ=1 and maximal positive tensor-root exponent. Named and independently expanded arbitrary-universe checks passed on the final import with matching direct replay.",
      "leanDeclarations": [
        "FanoThreefolds.smoothTwoQuadricsStatement_proved"
      ],
      "evidence": [
        {
          "label": "quadrics-supplied-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-supplied-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsConstruction.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsConstruction.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/QuadricsProposal.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsProposal.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/QuadricsConstructionAudit.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsConstructionAudit.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [
        "This proves supplied-model invariants, not connectedness or uniqueness of a deformation family."
      ],
      "dependencies": [
        "quadrics-geometry",
        "quadrics-adjunction",
        "quadrics-degree",
        "quadrics-index-rho"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-existence",
      "title": "An explicit smooth two-quadric model exists",
      "statement": "Over every algebraically closed characteristic-zero field, there is a regular pair of quadrics in ℙ⁵ whose simultaneous zero scheme is nonempty and smooth.",
      "hypotheses": [
        "k is algebraically closed of characteristic zero; arbitrary Lean universe u."
      ],
      "conclusion": "Over every algebraically closed characteristic-zero field, there is a regular pair of quadrics in ℙ⁵ whose simultaneous zero scheme is nonempty and smooth.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "D",
        "F"
      ],
      "family": "index2",
      "details": "Take F=∑ᵢ₌₀⁵xᵢ² and G=∑ᵢ₌₀⁵i·xᵢ². Their coefficients are distinct in characteristic zero. The proof establishes polynomial regularity, checks a surviving two-by-two Jacobian minor at each prime on every standard affine chart, and identifies these charts with the actual projective intersection. Connectedness supplies nonemptiness.",
      "leanDeclarations": [
        "FanoThreefolds.diagonalQuadric_example_regular",
        "FanoThreefolds.quadrics_smooth_of_chart_quotients",
        "FanoThreefolds.smoothTwoQuadricsExistenceStatement_proved"
      ],
      "evidence": [
        {
          "label": "quadrics-supplied-model-verification.json",
          "path": "projects/fano-threefolds/audit/quadrics-supplied-model-verification.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "quadrics-acceptance.json",
          "path": "projects/fano-threefolds/audit/quadrics-acceptance.json",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "DEGREE-FOUR-PROOFS.md",
          "path": "projects/fano-threefolds/audit/DEGREE-FOUR-PROOFS.md",
          "commit": "3d19f62",
          "kind": "audit"
        },
        {
          "label": "FanoThreefolds/QuadricsDiagonalSmooth.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsDiagonalSmooth.lean",
          "commit": "3d19f62",
          "kind": "source"
        },
        {
          "label": "FanoThreefolds/QuadricsJacobian.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsJacobian.lean",
          "commit": "3d19f62",
          "kind": "source"
        }
      ],
      "caveats": [
        "This certifies an explicit example over each allowed field. A smooth parameter-space family, its connectedness and its deformation-equivalence certificate have not been proved by this endpoint."
      ],
      "dependencies": [
        "quadrics-cartier"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "d1-construction",
      "title": "Weighted sextic: invariants",
      "statement": "A sextic hypersurface in ℙ(1,1,1,2,3) has −K=2H, H³=1, Pic=ℤ[H] and exact index two with ρ=1.",
      "hypotheses": [
        "Ground field ℂ; quasismooth well-formed weighted model with smooth threefold and invertible restricted O(1)."
      ],
      "conclusion": "A sextic hypersurface in ℙ(1,1,1,2,3) has −K=2H, H³=1, Pic=ℤ[H] and exact index two with ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "Forward construction must include the canonical sheaf, intersection and integral Picard claims; the model name alone is not a proof.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "d1-recognition",
      "title": "Weighted sextic: recognise every input",
      "statement": "Every primitive index-two rank-one Fano of degree 1 is isomorphic, with polarization, to a sextic hypersurface in ℙ(1,1,1,2,3).",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=2 and H³=1.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every primitive index-two rank-one Fano of degree 1 is isomorphic, with polarization, to a sextic hypersurface in ℙ(1,1,1,2,3).",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "An intrinsic recognition theorem. Full graded-ring or cover/homogeneous-model arguments must cover special members, not just a generic example.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "d1-existence",
      "title": "Weighted sextic: nonempty family",
      "statement": "The admissible weighted sextic parameter space has a nonempty locus of smooth models with the asserted invariants.",
      "hypotheses": [
        "Ground field ℂ; the admissibility and smoothness conditions in the construction theorem."
      ],
      "conclusion": "The admissible weighted sextic parameter space has a nonempty locus of smooth models with the asserted invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "B",
        "F"
      ],
      "family": "index2",
      "details": "Literature target in the local roadmap. “Planned” means no matching verified local endpoint is recorded; it does not assert that the result is absent from all Lean libraries.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        }
      ],
      "caveats": [
        "Explicit general models do not alone prove exhaustive recognition or a single deformation class."
      ],
      "dependencies": [
        "d1-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "d2-generation",
      "title": "Degree-two complete map is finite flat",
      "statement": "H has four independent global sections generating every stalk. Its complete system gives an over-k finite flat rank-two morphism X→ℙ³, pulling O(1) back to H and inducing a bijection on linear sections.",
      "hypotheses": [
        "Original algebraically closed field k of characteristic zero, at arbitrary Lean universe u.",
        "X is a smooth projective integral threefold; H is an ample invertible sheaf.",
        "The actual anticanonical sheaf is isomorphic to H⊗H and H³=2."
      ],
      "conclusion": "H has four independent global sections generating every stalk. Its complete system gives an over-k finite flat rank-two morphism X→ℙ³, pulling O(1) back to H and inducing a bijection on linear sections.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "Hilbert numerics give four sections. Fixed/moving intersection positivity excludes a fixed divisor; length-one generation on actual degree-two genus-one section curves lifts to the original X. Properness and ampleness give finiteness; miracle flatness and the hyperplane cube give constant rank two. The public named and expanded map checks, 13 transitive axiom reports and separate direct replay passed.",
      "leanDeclarations": [
        "FanoThreefolds.doubleSolidSectionCount",
        "FanoThreefolds.doubleSolidNoFixedDivisor",
        "FanoThreefolds.doubleSolidGlobalGeneration",
        "FanoThreefolds.exists_completeDoubleSolidMap"
      ],
      "evidence": [
        {
          "label": "double-solid-generation-verification.json",
          "path": "projects/fano-threefolds/audit/double-solid-generation-verification.json",
          "commit": "6a77d67",
          "kind": "audit"
        },
        {
          "label": "double-solid-cover-map-verification.json",
          "path": "projects/fano-threefolds/audit/double-solid-cover-map-verification.json",
          "commit": "55a6c7f",
          "kind": "audit"
        },
        {
          "label": "DoubleSolidGenerationFinite.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/DoubleSolidGenerationFinite.lean",
          "commit": "55a6c7f",
          "kind": "source"
        }
      ],
      "caveats": [
        "This box records the complete finite flat rank-two map. Its actual quartic algebra and over-base native-cover identification are now verified in the separate recognition box."
      ],
      "dependencies": [
        "half-sections"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "d2-native-algebra",
      "title": "Native quartic cover: algebra and branch",
      "statement": "For a supplied homogeneous quartic F on ℙ³, the native double cover has the actual algebra O⊕O(−2), with multiplication prescribed by F on every open. For F≠0, its branch ideals agree with the quartic ideal; smoothness of the native cover implies smoothness of that branch.",
      "hypotheses": [
        "A field k at arbitrary Lean universe u and a supplied homogeneous quartic F on polynomial projective three-space.",
        "F is nonzero for branch-ideal agreement and the smooth-branch implication. The latter assumes that the native cover is smooth over k."
      ],
      "status": "verified",
      "origin": "project",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "The even–odd chart decomposition is an isomorphism of actual algebras, including odd multiplication. The public audit checks both the named and independently expanded pushforward algebra, the branch-ideal comparison and the implication from a smooth cover to a smooth branch. Normal and separate direct checks agree on the 13 standard-three axiom reports.",
      "leanDeclarations": [
        "FanoThreefolds.quarticDoubleProjection_hasAlgebra",
        "FanoThreefolds.doubleSolid_quartic_branch_agreement",
        "FanoThreefolds.doubleSolid_branch_smooth_of_smooth"
      ],
      "evidence": [
        {
          "label": "double-solid-cover-map-verification.json",
          "path": "projects/fano-threefolds/audit/double-solid-cover-map-verification.json",
          "commit": "55a6c7f",
          "kind": "audit"
        },
        {
          "label": "DoubleCoverAlgebraCore.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/DoubleCoverAlgebraCore.lean",
          "commit": "55a6c7f",
          "kind": "source"
        },
        {
          "label": "DoubleSolidConstructionBranch.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/DoubleSolidConstructionBranch.lean",
          "commit": "55a6c7f",
          "kind": "source"
        }
      ],
      "caveats": [
        "This any-field statement concerns the native cover of a supplied quartic. The separate intrinsic-recognition box now identifies the complete map over algebraically closed characteristic-zero fields.",
        "The implication from a smooth native cover to a smooth branch retains its stated smooth-cover hypothesis."
      ],
      "dependencies": [],
      "alternativeDependencies": [],
      "conclusion": "For a supplied homogeneous quartic F on ℙ³, the native double cover has the actual algebra O⊕O(−2), with multiplication prescribed by F on every open. For F≠0, its branch ideals agree with the quartic ideal; smoothness of the native cover implies smoothness of that branch."
    },
    {
      "id": "d2-fermat-example",
      "title": "Smooth Fermat branch, inhabited cover",
      "statement": "The Fermat quartic is nonzero; its actual branch in ℙ³ is smooth and inhabited, and its native double cover is inhabited.",
      "hypotheses": [
        "Original algebraically closed field k of characteristic zero, at arbitrary Lean universe u.",
        "Use the named Fermat quartic and its native double cover."
      ],
      "status": "verified",
      "origin": "project",
      "panels": [
        "B",
        "F"
      ],
      "family": "index2",
      "details": "The explicit Fermat endpoint passed its public named and expanded checks and separate direct Lean replay. Smoothness and nonemptiness are established for the actual quartic branch, and surjectivity supplies a point of the native cover.",
      "leanDeclarations": [
        "FanoThreefolds.fermatQuarticDoubleSolidExistenceStatement_proved"
      ],
      "evidence": [
        {
          "label": "double-solid-fermat-verification.json",
          "path": "projects/fano-threefolds/audit/double-solid-fermat-verification.json",
          "commit": "2359c3e",
          "kind": "audit"
        },
        {
          "label": "DoubleSolidConstructionFermat.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/DoubleSolidConstructionFermat.lean",
          "commit": "2359c3e",
          "kind": "source"
        }
      ],
      "caveats": [
        "This narrower existence endpoint is verified. The broader Fermat-cover invariant package has compiled and awaits final public/direct acceptance.",
        "An inhabited example does not establish a connected parameter family or a single deformation class."
      ],
      "dependencies": [
        "d2-native-algebra"
      ],
      "alternativeDependencies": [],
      "conclusion": "The Fermat quartic is nonzero; its actual branch in ℙ³ is smooth and inhabited, and its native double cover is inhabited."
    },
    {
      "id": "d2-cover-algebra",
      "title": "Rank-two cover algebra and quartic branch",
      "statement": "Identify the actual finite flat cover algebra as O⊕O(−2), with multiplication determined by a smooth quartic branch section.",
      "hypotheses": [
        "Original algebraically closed field k of characteristic zero, at arbitrary Lean universe u.",
        "X is a smooth projective integral threefold; H is an ample invertible sheaf.",
        "The actual anticanonical sheaf is isomorphic to H⊗H and H³=2.",
        "A supplied complete-system finite degree-two map to ℙ³ as in the preceding node."
      ],
      "conclusion": "Identify the actual finite flat cover algebra as O⊕O(−2), with multiplication determined by a smooth quartic branch section.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "The normalized trace splits the actual rank-two pushforward, identifies its trace-free line with O(−2), and constructs the nonzero homogeneous quartic multiplication. Relative-spectrum reconstruction gives an actual native-cover isomorphism over the original projective base. Smoothness of the original X gives smoothness of the scheme-theoretic branch. The named/expanded public audit and separate direct replay passed with 25 matching standard-three axiom reports.",
      "leanDeclarations": [
        "FanoThreefolds.quarticDoubleAlgebra_of_degreeTwoSections",
        "FanoThreefolds.quarticDoubleAlgebra_of_completeMap",
        "FanoThreefolds.quarticCoverIsoOfPushforwardAlgebra"
      ],
      "evidence": [
        {
          "label": "double-solid-geometry-verification.json",
          "path": "projects/fano-threefolds/audit/double-solid-geometry-verification.json",
          "commit": "81cf101",
          "kind": "audit"
        },
        {
          "label": "DoubleSolidRecognition.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/DoubleSolidRecognition.lean",
          "commit": "81cf101",
          "kind": "source"
        },
        {
          "label": "DoubleCoverAlgebraIdentification.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/DoubleCoverAlgebraIdentification.lean",
          "commit": "81cf101",
          "kind": "source"
        }
      ],
      "caveats": [
        "The identification retains the actual algebra multiplication on opens and the map over the original field; an underlying-module splitting alone would not establish this result."
      ],
      "dependencies": [
        "d2-generation",
        "d2-native-algebra"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "d2-picard",
      "title": "Double-solid Picard and numerical invariants",
      "statement": "For the smooth quartic double cover, Pic(X)=ℤ[H] and the conventional numerical Picard number is one.",
      "hypotheses": [
        "Algebraically closed characteristic-zero field k at arbitrary universe.",
        "X is the smooth double cover of ℙ³ defined by a smooth quartic branch section; H is the pulled hyperplane."
      ],
      "conclusion": "For the smooth quartic double cover, Pic(X)=ℤ[H] and the conventional numerical Picard number is one.",
      "status": "compiled",
      "origin": "project",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "An auxiliary ordinary quartic in ℙ⁴ and its actual fourth-root charts supply the Picard comparison. Ambient restriction and injective pullback/descent prove that H freely generates the integral Picard group of the native double solid. The numerical comparison then gives ρ=1. The production build passed; closing public expanded-type, axiom and separate direct checks remain pending.",
      "leanDeclarations": [
        "FanoThreefolds.doubleSolid_cover_picard_generates",
        "FanoThreefolds.doubleSolid_picard_of_generates"
      ],
      "evidence": [
        {
          "label": "double-solid-full-converse-normal.json",
          "path": "projects/fano-threefolds/audit/double-solid-full-converse-normal.json",
          "commit": "2044e6c",
          "kind": "audit"
        },
        {
          "label": "DoubleSolidConstructionPicard.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/DoubleSolidConstructionPicard.lean",
          "commit": "2044e6c",
          "kind": "source"
        },
        {
          "label": "DoubleSolidConverse.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/DoubleSolidConverse.lean",
          "commit": "2044e6c",
          "kind": "source"
        }
      ],
      "caveats": [
        "Compiled at 2044e6c; final public/direct acceptance is pending. This is stronger evidence than an unchecked draft, and weaker than the verified label."
      ],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "d2-construction",
      "title": "Quartic double solid: invariants",
      "statement": "A double cover of ℙ³ branched along a smooth quartic has −K=2H, H³=2, Pic=ℤ[H] and exact index two with ρ=1.",
      "hypotheses": [
        "Original algebraically closed characteristic-zero field k, at arbitrary Lean universe u.",
        "A smooth quartic branch surface in polynomial projective three-space; use the associated rank-two cover algebra O⊕O(−2)."
      ],
      "conclusion": "A double cover of ℙ³ branched along a smooth quartic has −K=2H, H³=2, Pic=ℤ[H] and exact index two with ρ=1.",
      "status": "compiled",
      "origin": "project",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "Every native cover of a nonzero smooth quartic is a smooth projective integral threefold with ample H, actual canonical sheaf H^(−2), anticanonical H², H³=2 and (−K)³=16. The converse also proves Pic(X)=ℤ[H], numerical ρ=1 and exact index two. The production build passed; closing public expanded-type, axiom and separate direct checks remain pending.",
      "leanDeclarations": [
        "FanoThreefolds.smoothQuarticDoubleSolidStatement_proved",
        "FanoThreefolds.doubleSolid_supplied_polarization_index"
      ],
      "evidence": [
        {
          "label": "double-solid-full-converse-normal.json",
          "path": "projects/fano-threefolds/audit/double-solid-full-converse-normal.json",
          "commit": "2044e6c",
          "kind": "audit"
        },
        {
          "label": "double-solid-geometry-verification.json",
          "path": "projects/fano-threefolds/audit/double-solid-geometry-verification.json",
          "commit": "81cf101",
          "kind": "audit"
        },
        {
          "label": "DoubleSolidConverse.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/DoubleSolidConverse.lean",
          "commit": "2044e6c",
          "kind": "source"
        }
      ],
      "caveats": [
        "Canonical/polarization, geometry, cubes and exact index have their accepted 81cf101 audit. The full package including Picard and numerical rank has a successful production build and is awaiting its final common audit/replay."
      ],
      "dependencies": [
        "d2-native-algebra",
        "d2-picard"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "d2-recognition",
      "title": "Quartic double solid: recognise every input",
      "statement": "For the given degree-two half-anticanonical polarization, the complete system gives a finite flat double cover X→ℙ³ with algebra O⊕O(−2), defined by a smooth quartic branch section, and H is the pulled hyperplane.",
      "hypotheses": [
        "Original algebraically closed field k of characteristic zero, at arbitrary Lean universe u.",
        "X is a smooth projective integral threefold; H is an ample invertible sheaf.",
        "The actual anticanonical sheaf is isomorphic to H⊗H and H³=2."
      ],
      "conclusion": "For the given degree-two half-anticanonical polarization, the complete system gives a finite flat double cover X→ℙ³ with algebra O⊕O(−2), defined by a smooth quartic branch section, and H is the pulled hyperplane.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "The original degree-two polarization constructs the complete finite flat rank-two map. Its actual pushforward algebra has quartic multiplication on O(−2), the quartic branch is smooth, and the isomorphism to the native cover commutes with projection over ℙ³. No numerical Picard-rank or pre-existing-cover assumption is added. The normal public build took 566.02 s and its separate direct replay 249.98 s, with named/expanded arbitrary-universe checks and 25 matching axiom reports.",
      "leanDeclarations": [
        "FanoThreefolds.intrinsicQuarticDoubleSolidStatement_proved"
      ],
      "evidence": [
        {
          "label": "double-solid-geometry-verification.json",
          "path": "projects/fano-threefolds/audit/double-solid-geometry-verification.json",
          "commit": "81cf101",
          "kind": "audit"
        },
        {
          "label": "DoubleSolidRecognition.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/DoubleSolidRecognition.lean",
          "commit": "81cf101",
          "kind": "source"
        }
      ],
      "caveats": [
        "This is intrinsic polarized model recognition. Parameter-family connectedness and deformation classification remain separate."
      ],
      "dependencies": [
        "d2-generation",
        "d2-cover-algebra"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "d2-existence",
      "title": "Quartic double solid: explicit smooth example",
      "statement": "Construct a nonempty smooth quartic double solid over every permitted field, with the proved Fano, polarization, index and Picard invariants.",
      "hypotheses": [
        "Algebraically closed characteristic-zero field k at arbitrary Lean universe u."
      ],
      "conclusion": "Construct a nonempty smooth quartic double solid over every permitted field, with the proved Fano, polarization, index and Picard invariants.",
      "status": "compiled",
      "origin": "project",
      "panels": [
        "B",
        "F"
      ],
      "family": "index2",
      "details": "The explicit Fermat native cover is inhabited and satisfies the entire smooth Fano, canonical, polarization, cube, Picard, numerical and exact-index package over every allowed original field. The theorem combines the earlier smooth inhabited branch/cover endpoint with the full supplied-cover invariants. The production build passed; closing public expanded-type, axiom and separate direct checks remain pending.",
      "leanDeclarations": [
        "FanoThreefolds.fermatQuarticDoubleSolidExistenceStatement_proved",
        "FanoThreefolds.fermatQuarticDoubleSolid_invariants"
      ],
      "evidence": [
        {
          "label": "double-solid-full-converse-normal.json",
          "path": "projects/fano-threefolds/audit/double-solid-full-converse-normal.json",
          "commit": "2044e6c",
          "kind": "audit"
        },
        {
          "label": "double-solid-fermat-verification.json",
          "path": "projects/fano-threefolds/audit/double-solid-fermat-verification.json",
          "commit": "2359c3e",
          "kind": "audit"
        },
        {
          "label": "DoubleSolidConverse.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/DoubleSolidConverse.lean",
          "commit": "2044e6c",
          "kind": "source"
        }
      ],
      "caveats": [
        "This is an explicit example over each allowed field. Parameter-family connectedness and deformation equivalence remain open.",
        "The invariant-bearing example proof has compiled; its closing expanded-type/axiom checks and separate direct replay are pending."
      ],
      "dependencies": [
        "d2-fermat-example",
        "d2-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "d5-construction",
      "title": "Grassmannian linear section V₅: invariants",
      "statement": "A smooth codimension-three linear section of Gr(2,5)⊂ℙ⁹ has −K=2H, H³=5, Pic=ℤ[H] and exact index two with ρ=1.",
      "hypotheses": [
        "Ground field ℂ; smooth expected-dimensional linear section with H the restricted Plücker bundle."
      ],
      "conclusion": "A smooth codimension-three linear section of Gr(2,5)⊂ℙ⁹ has −K=2H, H³=5, Pic=ℤ[H] and exact index two with ρ=1.",
      "status": "in_progress",
      "origin": "project",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "An independent preparation lane has audited the pinned Grassmannian/Plücker and restriction APIs and written explicitly uncompiled numerical, equation, matrix and statement drafts. Its current task compares the sign-redundant ordered Plücker coordinates with the conventional ten-coordinate ℙ⁹ presentation. Actual scheme/polarization, canonical, degree and integral Picard bridges remain to be proved and checked.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "Degree-five source/API audit (unchecked drafts)",
          "path": "research/fano-panel-b/degree-five-2026-11-28/AUDIT.md",
          "kind": "source"
        },
        {
          "label": "Exact pinned declarations and gaps",
          "path": "research/fano-panel-b/degree-five-2026-11-28/DECLARATIONS.md",
          "kind": "source"
        },
        {
          "label": "Degree-five statement proposals (uncompiled)",
          "path": "research/fano-panel-b/degree-five-2026-11-28/PROPOSED-STATEMENTS.lean",
          "kind": "source"
        }
      ],
      "caveats": [
        "In progress denotes assigned preparation. None of the new degree-five Lean drafts has been compiled, exported or accepted.",
        "Full supplied-model invariants remain open. The coordinate comparison must preserve the original field and actual O(1), not just an abstract scheme."
      ],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "d5-recognition",
      "title": "Grassmannian linear section V₅: recognise every input",
      "statement": "Every primitive index-two rank-one Fano of degree 5 is isomorphic, with polarization, to a smooth codimension-three linear section of gr(2,5)⊂ℙ⁹.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=2 and H³=5.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every primitive index-two rank-one Fano of degree 5 is isomorphic, with polarization, to a smooth codimension-three linear section of gr(2,5)⊂ℙ⁹.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "The original primitive Pic(X)=ℤ[H] target is preserved. The preparation audit identifies reusable numerical/curve inputs and proposes uncompiled section-count and five-equation drafts. Full generation/separation, ideal generation and codimension-three Pfaffian recognition remain open. The optional stronger Picard-free proposal is not substituted for this target.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "Degree-five source/API audit (unchecked drafts)",
          "path": "research/fano-panel-b/degree-five-2026-11-28/AUDIT.md",
          "kind": "source"
        },
        {
          "label": "Exact pinned declarations and gaps",
          "path": "research/fano-panel-b/degree-five-2026-11-28/DECLARATIONS.md",
          "kind": "source"
        },
        {
          "label": "Degree-five statement proposals (uncompiled)",
          "path": "research/fano-panel-b/degree-five-2026-11-28/PROPOSED-STATEMENTS.lean",
          "kind": "source"
        }
      ],
      "caveats": [
        "Five independent quadratic relations alone do not give the whole image ideal or a Grassmannian presentation.",
        "The located Buchsbaum–Eisenbud result is an exactness criterion for a supplied complex, not the needed codimension-three Pfaffian structure theorem."
      ],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "d5-existence",
      "title": "Grassmannian linear section V₅: nonempty family",
      "statement": "The admissible grassmannian linear section v₅ parameter space has a nonempty locus of smooth models with the asserted invariants.",
      "hypotheses": [
        "Ground field ℂ; the admissibility and smoothness conditions in the construction theorem."
      ],
      "conclusion": "The admissible grassmannian linear section v₅ parameter space has a nonempty locus of smooth models with the asserted invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "B",
        "F"
      ],
      "family": "index2",
      "details": "Literature target in the local roadmap. “Planned” means no matching verified local endpoint is recorded; it does not assert that the result is absent from all Lean libraries.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        }
      ],
      "caveats": [
        "Explicit general models do not alone prove exhaustive recognition or a single deformation class."
      ],
      "dependencies": [
        "d5-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "genus-numerics",
      "title": "Index-one numerical genus and sections",
      "statement": "For primitive H=−K_X, H³=2g−2 with integral g≥2, and h⁰(H)=g+2 after the required vanishing and Riemann–Roch comparisons.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "For primitive H=−K_X, H³=2g−2 with integral g≥2, and h⁰(H)=g+2 after the required vanishing and Riemann–Roch comparisons.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "This is an index-one package; the verified half-anticanonical formula has different hypotheses and cannot simply be substituted.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "picard-generator"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "genus-bound",
      "title": "Allowed genera and exclusion of eleven",
      "statement": "A smooth complex rank-one index-one Fano has g∈{2,3,4,5,6,7,8,9,10,12}; in particular g=11 and g>12 do not occur.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1 and H³=2g−2.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "A smooth complex rank-one index-one Fano has g∈{2,3,4,5,6,7,8,9,10,12}; in particular g=11 and g>12 do not occur.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "The range is an exhaustion theorem to prove, not an assumption defining the input class.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "genus-numerics"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "anticanonical-map",
      "title": "Anticanonical map and its alternatives",
      "statement": "Prove base-point-freeness and the embedding-versus-cover alternatives of |−K_X| for the rank-one index-one cases, including the hyperelliptic possibilities.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Prove base-point-freeness and the embedding-versus-cover alternatives of |−K_X| for the rank-one index-one cases, including the hyperelliptic possibilities.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "A universal very-ampleness claim would lose the genus-two and special genus-three covering cases.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "genus-numerics"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "low-genus-rings",
      "title": "Low-genus section rings and equations",
      "statement": "The anticanonical graded ring in genera two through five has the required cover, hypersurface or complete-intersection presentation.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g∈{2,3,4,5}.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "The anticanonical graded ring in genera two through five has the required cover, hypersurface or complete-intersection presentation.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Prove generators, relations, regularity and equality of full ideals; a count of relations alone is not enough.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "anticanonical-map"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "k3-sections",
      "title": "K3 anticanonical sections",
      "statement": "Construct and control suitable smooth anticanonical K3 sections in the cases required by the chosen high-genus proof.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; additional section conditions are to be derived, not assumed without proof.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Construct and control suitable smooth anticanonical K3 sections in the cases required by the chosen high-genus proof.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Prove smoothness, trivial canonical bundle, H¹(O)=0, polarization and the exact Picard/Brill–Noether conditions used downstream.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai bundles on Fano threefolds",
          "url": "https://arxiv.org/abs/2402.07154",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "anticanonical-map"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "mukai-bundles",
      "title": "Mukai bundles and extension from K3 sections",
      "statement": "Construct the stable bundles with the required ranks, Chern data, generation and cohomology, and extend them to the threefold where the chosen model theorem requires it.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; the applicable genus and K3/Brill–Noether hypotheses must be proved.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Construct the stable bundles with the required ranks, Chern data, generation and cohomology, and extend them to the threefold where the chosen model theorem requires it.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Literature target in the local roadmap. “Planned” means no matching verified local endpoint is recorded; it does not assert that the result is absent from all Lean libraries.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai bundles on Fano threefolds",
          "url": "https://arxiv.org/abs/2402.07154",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "k3-sections"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "mukai-route",
      "title": "High-genus homogeneous-model route",
      "statement": "Recover the genus 6,7,8,9,10,12 models from vector bundles, their sections and the appropriate homogeneous or cone geometry, including special members.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1 and g∈{6,7,8,9,10,12}.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Recover the genus 6,7,8,9,10,12 models from vector bundles, their sections and the appropriate homogeneous or cone geometry, including special members.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Optional complete proof route. The net-of-forms genus-twelve case and special Gushel–Mukai members require their own constructions.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "mukai-bundles"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "projection-route",
      "title": "High-genus birational projection route",
      "statement": "Use lines, conics, projection, controlled birational transformations and reconstruction to recognise all high-genus rank-one Fanos.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1 and g∈{6,7,8,9,10,12}.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Use lines, conics, projection, controlled birational transformations and reconstruction to recognise all high-genus rank-one Fanos.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Alternative to the full Mukai-bundle route. One must control every exceptional case and prove reconstruction; both complete routes are not mandatory.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "genus-numerics"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g3-special",
      "title": "Genus three: retain the double-quadric locus",
      "statement": "The genus-three branch includes both quartic threefolds and double covers of smooth quadrics branched in |4H_Q|.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g=3.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "The genus-three branch includes both quartic threefolds and double covers of smooth quadrics branched in |4H_Q|.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "The two presentations belong to one deformation family. A quartic-only recognition theorem would miss a special locus.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "anticanonical-map"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g6-special",
      "title": "Genus six: ordinary and special Gushel–Mukai",
      "statement": "The genus-six recognition covers the suitable quadric sections of linear sections of the cone over Gr(2,5), including ordinary and special members.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g=6.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "The genus-six recognition covers the suitable quadric sections of linear sections of the cone over Gr(2,5), including ordinary and special members.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Do not replace the all-members target by a theorem valid only for a general ordinary Gushel–Mukai threefold.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": [
        "mukai-route",
        "projection-route"
      ]
    },
    {
      "id": "g2-construction",
      "title": "g=2: Sextic double solid invariants",
      "statement": "An admissible smooth model of the following form: a double cover of ℙ³ branched along a smooth sextic has primitive −K=H, H³=2, Pic=ℤ[H] and ρ=1.",
      "hypotheses": [
        "Ground field ℂ; an admissible expected-dimensional smooth model in the indicated presentation is supplied."
      ],
      "conclusion": "An admissible smooth model of the following form: a double cover of ℙ³ branched along a smooth sextic has primitive −K=H, H³=2, Pic=ℤ[H] and ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Construction includes actual scheme, polarization, canonical bundle, intersection degree and Picard generator comparisons. The exact admissibility predicate is still to be formalised.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "g2-recognition",
      "title": "g=2: recognise every Fano",
      "statement": "Every smooth complex rank-one index-one Fano of genus 2 is isomorphic as a polarized variety to a double cover of ℙ³ branched along a smooth sextic.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g=2.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every smooth complex rank-one index-one Fano of genus 2 is isomorphic as a polarized variety to a double cover of ℙ³ branched along a smooth sextic.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Universal recognition for the numerical branch, not just construction of examples or a general member.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "low-genus-rings"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g2-existence",
      "title": "g=2: nonempty smooth model locus",
      "statement": "There is a nonempty parameter locus of admissible smooth genus-2 models with the stated rank-one Fano invariants.",
      "hypotheses": [
        "Ground field ℂ; the corresponding model and its admissibility conditions."
      ],
      "conclusion": "There is a nonempty parameter locus of admissible smooth genus-2 models with the stated rank-one Fano invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E",
        "F"
      ],
      "family": "index1",
      "details": "Existence is separate from universal recognition and from showing all presentations lie in one deformation class.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "g2-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g3-construction",
      "title": "g=3: Quartic or double quadric invariants",
      "statement": "An admissible smooth model of the following form: a quartic in ℙ⁴ or a double cover of a smooth Q³ branched in |4H_Q| has primitive −K=H, H³=4, Pic=ℤ[H] and ρ=1.",
      "hypotheses": [
        "Ground field ℂ; an admissible expected-dimensional smooth model in the indicated presentation is supplied."
      ],
      "conclusion": "An admissible smooth model of the following form: a quartic in ℙ⁴ or a double cover of a smooth Q³ branched in |4H_Q| has primitive −K=H, H³=4, Pic=ℤ[H] and ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Construction includes actual scheme, polarization, canonical bundle, intersection degree and Picard generator comparisons. The exact admissibility predicate is still to be formalised.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [
        "Both quartic and double-quadric presentations are required; they are not two different deformation-family labels."
      ],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "g3-recognition",
      "title": "g=3: recognise every Fano",
      "statement": "Every smooth complex rank-one index-one Fano of genus 3 is isomorphic as a polarized variety to a quartic in ℙ⁴ or a double cover of a smooth Q³ branched in |4H_Q|.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g=3.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every smooth complex rank-one index-one Fano of genus 3 is isomorphic as a polarized variety to a quartic in ℙ⁴ or a double cover of a smooth Q³ branched in |4H_Q|.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Universal recognition for the numerical branch, not just construction of examples or a general member.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [
        "Both quartic and double-quadric presentations are required; they are not two different deformation-family labels."
      ],
      "dependencies": [
        "low-genus-rings",
        "g3-special"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g3-existence",
      "title": "g=3: nonempty smooth model locus",
      "statement": "There is a nonempty parameter locus of admissible smooth genus-3 models with the stated rank-one Fano invariants.",
      "hypotheses": [
        "Ground field ℂ; the corresponding model and its admissibility conditions."
      ],
      "conclusion": "There is a nonempty parameter locus of admissible smooth genus-3 models with the stated rank-one Fano invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E",
        "F"
      ],
      "family": "index1",
      "details": "Existence is separate from universal recognition and from showing all presentations lie in one deformation class.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [
        "Both quartic and double-quadric presentations are required; they are not two different deformation-family labels."
      ],
      "dependencies": [
        "g3-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g4-construction",
      "title": "g=4: Complete intersection (2,3) invariants",
      "statement": "An admissible smooth model of the following form: a smooth complete intersection of a quadric and a cubic in ℙ⁵ has primitive −K=H, H³=6, Pic=ℤ[H] and ρ=1.",
      "hypotheses": [
        "Ground field ℂ; an admissible expected-dimensional smooth model in the indicated presentation is supplied."
      ],
      "conclusion": "An admissible smooth model of the following form: a smooth complete intersection of a quadric and a cubic in ℙ⁵ has primitive −K=H, H³=6, Pic=ℤ[H] and ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Construction includes actual scheme, polarization, canonical bundle, intersection degree and Picard generator comparisons. The exact admissibility predicate is still to be formalised.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [
        "The ambient quadric is allowed to be singular."
      ],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "g4-recognition",
      "title": "g=4: recognise every Fano",
      "statement": "Every smooth complex rank-one index-one Fano of genus 4 is isomorphic as a polarized variety to a smooth complete intersection of a quadric and a cubic in ℙ⁵.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g=4.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every smooth complex rank-one index-one Fano of genus 4 is isomorphic as a polarized variety to a smooth complete intersection of a quadric and a cubic in ℙ⁵.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Universal recognition for the numerical branch, not just construction of examples or a general member.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [
        "The ambient quadric is allowed to be singular."
      ],
      "dependencies": [
        "low-genus-rings"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g4-existence",
      "title": "g=4: nonempty smooth model locus",
      "statement": "There is a nonempty parameter locus of admissible smooth genus-4 models with the stated rank-one Fano invariants.",
      "hypotheses": [
        "Ground field ℂ; the corresponding model and its admissibility conditions."
      ],
      "conclusion": "There is a nonempty parameter locus of admissible smooth genus-4 models with the stated rank-one Fano invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E",
        "F"
      ],
      "family": "index1",
      "details": "Existence is separate from universal recognition and from showing all presentations lie in one deformation class.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [
        "The ambient quadric is allowed to be singular."
      ],
      "dependencies": [
        "g4-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g5-construction",
      "title": "g=5: Complete intersection (2,2,2) invariants",
      "statement": "An admissible smooth model of the following form: a smooth complete intersection of three quadrics in ℙ⁶ has primitive −K=H, H³=8, Pic=ℤ[H] and ρ=1.",
      "hypotheses": [
        "Ground field ℂ; an admissible expected-dimensional smooth model in the indicated presentation is supplied."
      ],
      "conclusion": "An admissible smooth model of the following form: a smooth complete intersection of three quadrics in ℙ⁶ has primitive −K=H, H³=8, Pic=ℤ[H] and ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Construction includes actual scheme, polarization, canonical bundle, intersection degree and Picard generator comparisons. The exact admissibility predicate is still to be formalised.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "g5-recognition",
      "title": "g=5: recognise every Fano",
      "statement": "Every smooth complex rank-one index-one Fano of genus 5 is isomorphic as a polarized variety to a smooth complete intersection of three quadrics in ℙ⁶.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g=5.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every smooth complex rank-one index-one Fano of genus 5 is isomorphic as a polarized variety to a smooth complete intersection of three quadrics in ℙ⁶.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Universal recognition for the numerical branch, not just construction of examples or a general member.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "low-genus-rings"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g5-existence",
      "title": "g=5: nonempty smooth model locus",
      "statement": "There is a nonempty parameter locus of admissible smooth genus-5 models with the stated rank-one Fano invariants.",
      "hypotheses": [
        "Ground field ℂ; the corresponding model and its admissibility conditions."
      ],
      "conclusion": "There is a nonempty parameter locus of admissible smooth genus-5 models with the stated rank-one Fano invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E",
        "F"
      ],
      "family": "index1",
      "details": "Existence is separate from universal recognition and from showing all presentations lie in one deformation class.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "g5-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g6-construction",
      "title": "g=6: Gushel–Mukai threefold invariants",
      "statement": "An admissible smooth model of the following form: an admissible quadric section of a linear section of the cone over Gr(2,5) has primitive −K=H, H³=10, Pic=ℤ[H] and ρ=1.",
      "hypotheses": [
        "Ground field ℂ; an admissible expected-dimensional smooth model in the indicated presentation is supplied."
      ],
      "conclusion": "An admissible smooth model of the following form: an admissible quadric section of a linear section of the cone over Gr(2,5) has primitive −K=H, H³=10, Pic=ℤ[H] and ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Construction includes actual scheme, polarization, canonical bundle, intersection degree and Picard generator comparisons. The exact admissibility predicate is still to be formalised.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [
        "Admissibility must include ordinary and special Gushel–Mukai members."
      ],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "g6-recognition",
      "title": "g=6: recognise every Fano",
      "statement": "Every smooth complex rank-one index-one Fano of genus 6 is isomorphic as a polarized variety to an admissible quadric section of a linear section of the cone over Gr(2,5).",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g=6.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every smooth complex rank-one index-one Fano of genus 6 is isomorphic as a polarized variety to an admissible quadric section of a linear section of the cone over Gr(2,5).",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Universal recognition for the numerical branch, not just construction of examples or a general member.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [
        "Admissibility must include ordinary and special Gushel–Mukai members."
      ],
      "dependencies": [
        "g6-special"
      ],
      "alternativeDependencies": [
        "mukai-route",
        "projection-route"
      ]
    },
    {
      "id": "g6-existence",
      "title": "g=6: nonempty smooth model locus",
      "statement": "There is a nonempty parameter locus of admissible smooth genus-6 models with the stated rank-one Fano invariants.",
      "hypotheses": [
        "Ground field ℂ; the corresponding model and its admissibility conditions."
      ],
      "conclusion": "There is a nonempty parameter locus of admissible smooth genus-6 models with the stated rank-one Fano invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E",
        "F"
      ],
      "family": "index1",
      "details": "Existence is separate from universal recognition and from showing all presentations lie in one deformation class.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [
        "Admissibility must include ordinary and special Gushel–Mukai members."
      ],
      "dependencies": [
        "g6-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g7-construction",
      "title": "g=7: Spinor linear section invariants",
      "statement": "An admissible smooth model of the following form: a smooth section of OGr₊(5,10)⊂ℙ¹⁵ by ℙ⁸ has primitive −K=H, H³=12, Pic=ℤ[H] and ρ=1.",
      "hypotheses": [
        "Ground field ℂ; an admissible expected-dimensional smooth model in the indicated presentation is supplied."
      ],
      "conclusion": "An admissible smooth model of the following form: a smooth section of OGr₊(5,10)⊂ℙ¹⁵ by ℙ⁸ has primitive −K=H, H³=12, Pic=ℤ[H] and ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Construction includes actual scheme, polarization, canonical bundle, intersection degree and Picard generator comparisons. The exact admissibility predicate is still to be formalised.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "g7-recognition",
      "title": "g=7: recognise every Fano",
      "statement": "Every smooth complex rank-one index-one Fano of genus 7 is isomorphic as a polarized variety to a smooth section of OGr₊(5,10)⊂ℙ¹⁵ by ℙ⁸.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g=7.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every smooth complex rank-one index-one Fano of genus 7 is isomorphic as a polarized variety to a smooth section of OGr₊(5,10)⊂ℙ¹⁵ by ℙ⁸.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Universal recognition for the numerical branch, not just construction of examples or a general member.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": [
        "mukai-route",
        "projection-route"
      ]
    },
    {
      "id": "g7-existence",
      "title": "g=7: nonempty smooth model locus",
      "statement": "There is a nonempty parameter locus of admissible smooth genus-7 models with the stated rank-one Fano invariants.",
      "hypotheses": [
        "Ground field ℂ; the corresponding model and its admissibility conditions."
      ],
      "conclusion": "There is a nonempty parameter locus of admissible smooth genus-7 models with the stated rank-one Fano invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E",
        "F"
      ],
      "family": "index1",
      "details": "Existence is separate from universal recognition and from showing all presentations lie in one deformation class.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "g7-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g8-construction",
      "title": "g=8: Gr(2,6) linear section invariants",
      "statement": "An admissible smooth model of the following form: a smooth section of Gr(2,6)⊂ℙ¹⁴ by ℙ⁹ has primitive −K=H, H³=14, Pic=ℤ[H] and ρ=1.",
      "hypotheses": [
        "Ground field ℂ; an admissible expected-dimensional smooth model in the indicated presentation is supplied."
      ],
      "conclusion": "An admissible smooth model of the following form: a smooth section of Gr(2,6)⊂ℙ¹⁴ by ℙ⁹ has primitive −K=H, H³=14, Pic=ℤ[H] and ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Construction includes actual scheme, polarization, canonical bundle, intersection degree and Picard generator comparisons. The exact admissibility predicate is still to be formalised.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "g8-recognition",
      "title": "g=8: recognise every Fano",
      "statement": "Every smooth complex rank-one index-one Fano of genus 8 is isomorphic as a polarized variety to a smooth section of Gr(2,6)⊂ℙ¹⁴ by ℙ⁹.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g=8.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every smooth complex rank-one index-one Fano of genus 8 is isomorphic as a polarized variety to a smooth section of Gr(2,6)⊂ℙ¹⁴ by ℙ⁹.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Universal recognition for the numerical branch, not just construction of examples or a general member.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": [
        "mukai-route",
        "projection-route"
      ]
    },
    {
      "id": "g8-existence",
      "title": "g=8: nonempty smooth model locus",
      "statement": "There is a nonempty parameter locus of admissible smooth genus-8 models with the stated rank-one Fano invariants.",
      "hypotheses": [
        "Ground field ℂ; the corresponding model and its admissibility conditions."
      ],
      "conclusion": "There is a nonempty parameter locus of admissible smooth genus-8 models with the stated rank-one Fano invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E",
        "F"
      ],
      "family": "index1",
      "details": "Existence is separate from universal recognition and from showing all presentations lie in one deformation class.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "g8-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g9-construction",
      "title": "g=9: LGr(3,6) linear section invariants",
      "statement": "An admissible smooth model of the following form: a smooth section of LGr(3,6)⊂ℙ¹³ by ℙ¹⁰ has primitive −K=H, H³=16, Pic=ℤ[H] and ρ=1.",
      "hypotheses": [
        "Ground field ℂ; an admissible expected-dimensional smooth model in the indicated presentation is supplied."
      ],
      "conclusion": "An admissible smooth model of the following form: a smooth section of LGr(3,6)⊂ℙ¹³ by ℙ¹⁰ has primitive −K=H, H³=16, Pic=ℤ[H] and ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Construction includes actual scheme, polarization, canonical bundle, intersection degree and Picard generator comparisons. The exact admissibility predicate is still to be formalised.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "g9-recognition",
      "title": "g=9: recognise every Fano",
      "statement": "Every smooth complex rank-one index-one Fano of genus 9 is isomorphic as a polarized variety to a smooth section of LGr(3,6)⊂ℙ¹³ by ℙ¹⁰.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g=9.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every smooth complex rank-one index-one Fano of genus 9 is isomorphic as a polarized variety to a smooth section of LGr(3,6)⊂ℙ¹³ by ℙ¹⁰.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Universal recognition for the numerical branch, not just construction of examples or a general member.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": [
        "mukai-route",
        "projection-route"
      ]
    },
    {
      "id": "g9-existence",
      "title": "g=9: nonempty smooth model locus",
      "statement": "There is a nonempty parameter locus of admissible smooth genus-9 models with the stated rank-one Fano invariants.",
      "hypotheses": [
        "Ground field ℂ; the corresponding model and its admissibility conditions."
      ],
      "conclusion": "There is a nonempty parameter locus of admissible smooth genus-9 models with the stated rank-one Fano invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E",
        "F"
      ],
      "family": "index1",
      "details": "Existence is separate from universal recognition and from showing all presentations lie in one deformation class.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "g9-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g10-construction",
      "title": "g=10: G₂ linear section invariants",
      "statement": "An admissible smooth model of the following form: a smooth section of the adjoint G₂ variety in ℙ¹³ by ℙ¹¹ has primitive −K=H, H³=18, Pic=ℤ[H] and ρ=1.",
      "hypotheses": [
        "Ground field ℂ; an admissible expected-dimensional smooth model in the indicated presentation is supplied."
      ],
      "conclusion": "An admissible smooth model of the following form: a smooth section of the adjoint G₂ variety in ℙ¹³ by ℙ¹¹ has primitive −K=H, H³=18, Pic=ℤ[H] and ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Construction includes actual scheme, polarization, canonical bundle, intersection degree and Picard generator comparisons. The exact admissibility predicate is still to be formalised.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "g10-recognition",
      "title": "g=10: recognise every Fano",
      "statement": "Every smooth complex rank-one index-one Fano of genus 10 is isomorphic as a polarized variety to a smooth section of the adjoint G₂ variety in ℙ¹³ by ℙ¹¹.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g=10.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every smooth complex rank-one index-one Fano of genus 10 is isomorphic as a polarized variety to a smooth section of the adjoint G₂ variety in ℙ¹³ by ℙ¹¹.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Universal recognition for the numerical branch, not just construction of examples or a general member.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": [
        "mukai-route",
        "projection-route"
      ]
    },
    {
      "id": "g10-existence",
      "title": "g=10: nonempty smooth model locus",
      "statement": "There is a nonempty parameter locus of admissible smooth genus-10 models with the stated rank-one Fano invariants.",
      "hypotheses": [
        "Ground field ℂ; the corresponding model and its admissibility conditions."
      ],
      "conclusion": "There is a nonempty parameter locus of admissible smooth genus-10 models with the stated rank-one Fano invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E",
        "F"
      ],
      "family": "index1",
      "details": "Existence is separate from universal recognition and from showing all presentations lie in one deformation class.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "g10-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "g12-construction",
      "title": "g=12: Net-of-forms model invariants",
      "statement": "An admissible smooth model of the following form: the smooth projective threefold of common isotropic three-planes for an admissible net of alternating forms on ℂ⁷, inside Gr(3,7) has primitive −K=H, H³=22, Pic=ℤ[H] and ρ=1.",
      "hypotheses": [
        "Ground field ℂ; an admissible expected-dimensional smooth model in the indicated presentation is supplied."
      ],
      "conclusion": "An admissible smooth model of the following form: the smooth projective threefold of common isotropic three-planes for an admissible net of alternating forms on ℂ⁷, inside Gr(3,7) has primitive −K=H, H³=22, Pic=ℤ[H] and ρ=1.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Construction includes actual scheme, polarization, canonical bundle, intersection degree and Picard generator comparisons. The exact admissibility predicate is still to be formalised.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [
        "The net varies. This is not a linear section of one fixed homogeneous threefold; admissibility must ensure expected dimension and smoothness."
      ],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "g12-recognition",
      "title": "g=12: recognise every Fano",
      "statement": "Every smooth complex rank-one index-one Fano of genus 12 is isomorphic as a polarized variety to the smooth projective threefold of common isotropic three-planes for an admissible net of alternating forms on ℂ⁷, inside Gr(3,7).",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=1; g=12.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every smooth complex rank-one index-one Fano of genus 12 is isomorphic as a polarized variety to the smooth projective threefold of common isotropic three-planes for an admissible net of alternating forms on ℂ⁷, inside Gr(3,7).",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E"
      ],
      "family": "index1",
      "details": "Universal recognition for the numerical branch, not just construction of examples or a general member.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [
        "The net varies. This is not a linear section of one fixed homogeneous threefold; admissibility must ensure expected dimension and smoothness."
      ],
      "dependencies": [],
      "alternativeDependencies": [
        "mukai-route",
        "projection-route"
      ]
    },
    {
      "id": "g12-existence",
      "title": "g=12: nonempty smooth model locus",
      "statement": "There is a nonempty parameter locus of admissible smooth genus-12 models with the stated rank-one Fano invariants.",
      "hypotheses": [
        "Ground field ℂ; the corresponding model and its admissibility conditions."
      ],
      "conclusion": "There is a nonempty parameter locus of admissible smooth genus-12 models with the stated rank-one Fano invariants.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "E",
        "F"
      ],
      "family": "index1",
      "details": "Existence is separate from universal recognition and from showing all presentations lie in one deformation class.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
          "url": "https://arxiv.org/abs/2009.13382",
          "kind": "literature"
        },
        {
          "label": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
          "url": "https://arxiv.org/abs/2501.16157",
          "kind": "literature"
        }
      ],
      "caveats": [
        "The net varies. This is not a linear section of one fixed homogeneous threefold; admissibility must ensure expected dimension and smoothness."
      ],
      "dependencies": [
        "g12-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "deformation-relation",
      "title": "A precise deformation-equivalence relation",
      "statement": "Define deformation equivalence using chains of smooth proper families over connected complex bases, and establish equivalence and specialization/comparison properties used by the catalogue.",
      "hypotheses": [
        "Smooth projective complex threefolds in the intended Fano/rank-one moduli problem."
      ],
      "conclusion": "Define deformation equivalence using chains of smooth proper families over connected complex bases, and establish equivalence and specialization/comparison properties used by the catalogue.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "F"
      ],
      "family": "deformation",
      "details": "The final theorem must specify whether it counts families or isomorphism classes. The target here is deformation classes.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "deformation-invariants",
      "title": "Index and degree/genus are deformation invariants",
      "statement": "Along the relevant connected smooth complex Fano families, ρ, the primitive index and the associated degree or genus are constant.",
      "hypotheses": [
        "Connected smooth proper family of complex Fano threefolds in the classification setting."
      ],
      "conclusion": "Along the relevant connected smooth complex Fano families, ρ, the primitive index and the associated degree or genus are constant.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "F"
      ],
      "family": "deformation",
      "details": "Integral Picard and numerical comparison must justify the label invariance; just computing an invariant on one example is insufficient.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "deformation-relation"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "all-existence",
      "title": "Every one of the 17 labels occurs",
      "statement": "Nonempty smooth model families exist for indices four and three, the five index-two degrees and the ten index-one genera.",
      "hypotheses": [
        "Ground field ℂ; the chosen model-family parameter spaces."
      ],
      "conclusion": "Nonempty smooth model families exist for indices four and three, the five index-two degrees and the ten index-one genera.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "F"
      ],
      "family": "deformation",
      "details": "Individual construction and nonemptiness certificates must be supplied for every label.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [
        "Degree four supplies an explicit verified smooth example. Degree two has a verified smooth inhabited Fermat branch and inhabited cover; its full invariant-bearing example has compiled and awaits closing acceptance. These endpoints do not prove connected parameter families or deformation equivalence."
      ],
      "dependencies": [
        "p3-construction",
        "quadric-construction",
        "d1-existence",
        "d2-existence",
        "cubic-existence",
        "quadrics-existence",
        "d5-existence",
        "g2-existence",
        "g3-existence",
        "g4-existence",
        "g5-existence",
        "g6-existence",
        "g7-existence",
        "g8-existence",
        "g9-existence",
        "g10-existence",
        "g12-existence",
        "quadrics-construction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "special-family-comparison",
      "title": "Connect special and ordinary presentations",
      "statement": "Show the genus-three double-quadric and quartic presentations, and the ordinary/special genus-six presentations, lie in their respective single deformation branches.",
      "hypotheses": [
        "Admissible smooth complex models in the genus-three and genus-six branches."
      ],
      "conclusion": "Show the genus-three double-quadric and quartic presentations, and the ordinary/special genus-six presentations, lie in their respective single deformation branches.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "F"
      ],
      "family": "deformation",
      "details": "This prevents accidentally overcounting special presentations or proving only the generic part of the classification.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "deformation-relation",
        "g3-special",
        "g6-special"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "connected-families",
      "title": "One deformation class per label",
      "statement": "For every allowed numerical label, any two models in that branch are deformation equivalent through the required smooth proper families.",
      "hypotheses": [
        "All admissible smooth models for one fixed numerical label over ℂ."
      ],
      "conclusion": "For every allowed numerical label, any two models in that branch are deformation equivalent through the required smooth proper families.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "F"
      ],
      "family": "deformation",
      "details": "Nonempty open subsets of irreducible parameter spaces help in simple equation cases, but model presentations and special loci require comparison. A generic-model theorem is not enough.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "deformation-relation",
        "special-family-comparison",
        "all-existence"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "exhaustion",
      "title": "Every rank-one Fano reaches a listed model",
      "statement": "Every smooth complex Fano threefold with ρ=1 satisfies an allowed index/degree/genus branch and is covered by that branch’s universal recognition theorem.",
      "hypotheses": [
        "Every smooth complex projective integral Fano threefold with numerical ρ=1."
      ],
      "conclusion": "Every smooth complex Fano threefold with ρ=1 satisfies an allowed index/degree/genus branch and is covered by that branch’s universal recognition theorem.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "F"
      ],
      "family": "deformation",
      "details": "This is the missing exhaustive classification statement, distinct from listing seventeen model names.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "rank-reduction",
        "high-index",
        "index-two",
        "index-one"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "distinct-labels",
      "title": "Different labels are not deformation equivalent",
      "statement": "The labels (4,1), (3,2), (2,d) for 1≤d≤5 and (1,g) for g∈{2,…,10,12} give distinct deformation classes.",
      "hypotheses": [
        "Smooth complex rank-one Fano threefolds assigned their primitive index and degree/genus labels."
      ],
      "conclusion": "The labels (4,1), (3,2), (2,d) for 1≤d≤5 and (1,g) for g∈{2,…,10,12} give distinct deformation classes.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "F"
      ],
      "family": "deformation",
      "details": "Use primitive index and the relevant degree/genus together; anticanonical volume alone can coincide across indices.",
      "leanDeclarations": [],
      "evidence": [
        {
          "label": "Book, rank-one progress panels A–F",
          "path": "book/chapters/fano-rank-one-progress.tex",
          "kind": "source"
        },
        {
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "deformation-invariants"
      ],
      "alternativeDependencies": []
    }
  ],
  "references": [
    {
      "id": "IP99",
      "title": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
      "url": "https://link.springer.com/book/9783540614685"
    },
    {
      "id": "DFT22",
      "title": "De Biase–Fatighenti–Tanturri, Fano 3-folds from homogeneous vector bundles over Grassmannians",
      "url": "https://arxiv.org/abs/2009.13382"
    },
    {
      "id": "BKM-bundles",
      "title": "Bayer–Kuznetsov–Macrì, Mukai bundles on Fano threefolds",
      "url": "https://arxiv.org/abs/2402.07154"
    },
    {
      "id": "BKM-models",
      "title": "Bayer–Kuznetsov–Macrì, Mukai models of Fano varieties",
      "url": "https://arxiv.org/abs/2501.16157"
    },
    {
      "id": "Stacks-0EL6",
      "title": "Stacks Project, algebraization along an ample divisor, Tag 0EL6",
      "url": "https://stacks.math.columbia.edu/tag/0EL6"
    }
  ]
};
