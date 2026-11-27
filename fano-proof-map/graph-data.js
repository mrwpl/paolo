/* Curated mathematical roadmap. Dependency direction: support -> result. */
window.FANO_GRAPH = {
  "meta": {
    "title": "The rank-one Fano proof map",
    "scope": "A curated mathematical roadmap toward the 17 deformation families of smooth complex Fano threefolds with numerical Picard number one.",
    "snapshot": "28 November 2026 · 02:34 (UTC+08:00) · static snapshot",
    "checkpoint": "adf1a91",
    "updatedAt": "2026-11-27T18:34:00Z",
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
      "Exactly seventeen counts deformation families, not individual varieties up to isomorphism. The higher-Picard-number branches of the 105-family classification are outside this graph."
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
      "description": "Five degree branches. The primitive degree bound is open. Cubic polarized recognition is verified; degree four is the current mathematical frontier."
    },
    {
      "id": "C",
      "title": "Degree four: intrinsic recognition",
      "bookPage": 67,
      "description": "From ample H with −K=2H and H³=4 to a complete-system embedding and the full two-quadric image ideal."
    },
    {
      "id": "D",
      "title": "Degree four: supplied construction",
      "bookPage": 68,
      "description": "From an actual smooth intersection of two quadrics to Fano, Picard and exact-index invariants. The first quadric may be singular."
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
      "details": "Several exact applications are verified. The complete collection needed for all seventeen families is not assembled.",
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
      "details": "The polarized cubic recognition and supplied-model invariants are verified. The general degree bound and the other model branches remain open.",
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
      "details": "A complete hypersurface application is verified for cubics. Iterated quadrics and other homogeneous or weighted models need their own comparison proofs.",
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
      "statement": "Ample H with −K=2H and H³=4 is equivalent to a smooth intersection of two quadrics in ℙ⁵, with exact index and Picard invariants on the supplied side.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "Ample H with −K=2H and H³=4 is equivalent to a smooth intersection of two quadrics in ℙ⁵, with exact index and Picard invariants on the supplied side.",
      "status": "partial",
      "origin": "unassigned",
      "panels": [
        "B"
      ],
      "family": "index2",
      "details": "Numerical and geometric helper results are verified; both main directions remain open.",
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
        "quadrics-recognition",
        "quadrics-construction"
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
      "title": "Remove degree-four fixed divisors",
      "statement": "The complete |H| of intrinsic degree-four data has no fixed prime divisor.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "The complete |H| of intrinsic degree-four data has no fixed prime divisor.",
      "status": "in_progress",
      "origin": "project",
      "panels": [
        "C"
      ],
      "family": "index2",
      "details": "Current proof workstream. The cubic numerical contradiction only gives H³≥4, so equality remains possible here. Additional residual-member and section-rank arguments are required.",
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
        "The residual numerical case H²B=1, H·B·M=2, H·M²=1 for H=B+M has not yet been eliminated. “In progress” describes an open workstream, not a live process."
      ],
      "dependencies": [
        "quadrics-counts",
        "quadrics-low-rank"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-regular-cuts",
      "title": "Actual regular cuts for degree four",
      "statement": "Construct successive regular members of |H| on X and prove their curve has scalar constants, genus one, ω≅O and H-degree four, with the needed restriction maps.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "Construct successive regular members of |H| on X and prove their curve has scalar constants, genus one, ω≅O and H-degree four, with the needed restriction maps.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "C"
      ],
      "family": "index2",
      "details": "The required curve must be constructed; it cannot be assumed smooth or integral merely because |H| is defined.",
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
        "quadrics-no-fixed"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-generation",
      "title": "Degree-four H is globally generated",
      "statement": "Global sections of H generate the actual line bundle on the original X.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "Global sections of H generate the actual line bundle on the original X.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "C"
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
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-regular-cuts",
        "curve-separation"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-separation",
      "title": "Degree-four H separates length two",
      "statement": "For every length-two Z⊂X, including a tangent double point, the restriction map for H is onto.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "For every length-two Z⊂X, including a tangent double point, the restriction map for H is onto.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "C"
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
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-generation",
        "quadrics-regular-cuts",
        "curve-separation"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-embedding",
      "title": "Complete |H| embeds X into ℙ⁵",
      "statement": "The six-dimensional complete section space yields an over-k closed immersion into ℙ⁵ with H the restricted hyperplane.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "The six-dimensional complete section space yields an over-k closed immersion into ℙ⁵ with H the restricted hyperplane.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "C"
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
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
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
      "statement": "For the intrinsic embedding, choose two quadratic relations that form a regular sequence and prove they generate its full scheme-theoretic ideal.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed.",
        "The complete H-system is embedded in ℙ⁵."
      ],
      "conclusion": "For the intrinsic embedding, choose two quadratic relations that form a regular sequence and prove they generate its full scheme-theoretic ideal.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "C"
      ],
      "family": "index2",
      "details": "Regularity and scheme-theoretic equality are separate from the dimension count 21−19=2.",
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
        "quadrics-embedding",
        "quadrics-equations"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-recognition",
      "title": "Intrinsic recognition as two quadrics",
      "statement": "The original X with ample H, −K=2H and H³=4 is a smooth scheme-theoretic intersection of two quadrics in ℙ⁵.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "H is an actual ample invertible sheaf on X, with an isomorphism ω_X⁻¹ ≅ H⊗H.",
        "H³ = 4. No Picard-number or primitive-generator hypothesis is assumed."
      ],
      "conclusion": "The original X with ample H, −K=2H and H³=4 is a smooth scheme-theoretic intersection of two quadrics in ℙ⁵.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "B",
        "C"
      ],
      "family": "index2",
      "details": "The proposition has been prepared and type-compared; no proof of this endpoint is currently verified.",
      "leanDeclarations": [
        "FanoThreefolds.IntrinsicTwoQuadricsRecognitionStatement"
      ],
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
      "details": "Latest verified checkpoint. Public named and expanded arbitrary-universe tests and separate direct replay both passed, with exactly the three standard axioms. This is a chart theorem, not yet the global second Cartier cut.",
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
      "statement": "The restriction of G to V(F) is a regular section of O(2), and its zero scheme is the second effective Cartier divisor giving V(F,G).",
      "hypotheses": [
        "k algebraically closed of characteristic zero, arbitrary universe u.",
        "X is the supplied smooth scheme-theoretic zero locus of a regular pair of quadratic forms F,G in ℙ⁵; H is the restricted O(1).",
        "The first quadric is not assumed smooth."
      ],
      "conclusion": "The restriction of G to V(F) is a regular section of O(2), and its zero scheme is the second effective Cartier divisor giving V(F,G).",
      "status": "in_progress",
      "origin": "project",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "Draft source exists. The selected check has no completed verdict, so this statement is not counted as compiled or proved.",
      "leanDeclarations": [
        "FanoThreefolds.quadrics_second_cartier",
        "FanoThreefolds.quadrics_second_regular"
      ],
      "evidence": [
        {
          "label": "FanoThreefolds/QuadricsConstructionSecondCut.lean",
          "path": "projects/fano-threefolds/FanoThreefolds/QuadricsConstructionSecondCut.lean",
          "kind": "source"
        },
        {
          "label": "QUADRICS-HANDOFF.md",
          "path": "projects/fano-threefolds/audit/QUADRICS-HANDOFF.md",
          "kind": "audit"
        }
      ],
      "caveats": [
        "Do not infer a global result solely from the verified chart theorem; gluing and zero-scheme comparisons remain to be checked."
      ],
      "dependencies": [
        "quadrics-chart"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-geometry",
      "title": "Dimension, constants and integrality of supplied X",
      "statement": "Transport the iterated Cartier presentation to the supplied X and prove dimension three, scalar global constants and integrality using smoothness and connectedness.",
      "hypotheses": [
        "k algebraically closed of characteristic zero, arbitrary universe u.",
        "X is the supplied smooth scheme-theoretic zero locus of a regular pair of quadratic forms F,G in ℙ⁵; H is the restricted O(1).",
        "The first quadric is not assumed smooth."
      ],
      "conclusion": "Transport the iterated Cartier presentation to the supplied X and prove dimension three, scalar global constants and integrality using smoothness and connectedness.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "Section/cohomology sequences and the actual scheme identification are needed. Smoothness alone does not guarantee connectedness or integrality.",
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
        "quadrics-cartier"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-adjunction",
      "title": "Adjunction: −K=2H for two quadrics",
      "statement": "Iterated adjunction on the actual supplied smooth intersection yields ω_X≅O_X(−2), so −K_X≅H² is ample.",
      "hypotheses": [
        "k algebraically closed of characteristic zero, arbitrary universe u.",
        "X is the supplied smooth scheme-theoretic zero locus of a regular pair of quadratic forms F,G in ℙ⁵; H is the restricted O(1).",
        "The first quadric is not assumed smooth."
      ],
      "conclusion": "Iterated adjunction on the actual supplied smooth intersection yields ω_X≅O_X(−2), so −K_X≅H² is ample.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "No extra smoothness hypothesis may be imposed on V(F).",
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
        "quadrics-cartier",
        "quadrics-geometry"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-degree",
      "title": "Two-quadric degrees: 4 and 32",
      "statement": "The actual restricted hyperplane has H³=4 and the anticanonical volume is (−K_X)³=32.",
      "hypotheses": [
        "k algebraically closed of characteristic zero, arbitrary universe u.",
        "X is the supplied smooth scheme-theoretic zero locus of a regular pair of quadratic forms F,G in ℙ⁵; H is the restricted O(1).",
        "The first quadric is not assumed smooth."
      ],
      "conclusion": "The actual restricted hyperplane has H³=4 and the anticanonical volume is (−K_X)³=32.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "Use actual intersection or Euler/Koszul comparisons, not an unproved identification with a formal product 2·2.",
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
        "quadrics-cartier",
        "quadrics-adjunction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-picard",
      "title": "Integral Picard generator on two quadrics",
      "statement": "Every invertible sheaf on the supplied smooth intersection is a unique integral power of H; hence Pic(X)=ℤ[H].",
      "hypotheses": [
        "k algebraically closed of characteristic zero, arbitrary universe u.",
        "X is the supplied smooth scheme-theoretic zero locus of a regular pair of quadratic forms F,G in ℙ⁵; H is the restricted O(1).",
        "The first quadric is not assumed smooth."
      ],
      "conclusion": "Every invertible sheaf on the supplied smooth intersection is a unique integral power of H; hence Pic(X)=ℤ[H].",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "D"
      ],
      "family": "index2",
      "details": "An appropriate Lefschetz/formal-Picard theorem must apply without falsely assuming the first quadric smooth. The cubic proof supplies reusable techniques, not this conclusion.",
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
        "quadrics-geometry"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-index-rho",
      "title": "Exact index two and numerical ρ=1",
      "statement": "For the supplied smooth intersection, H is primitive, the Fano index is exactly two and the conventional numerical Picard number is one.",
      "hypotheses": [
        "k algebraically closed of characteristic zero, arbitrary universe u.",
        "X is the supplied smooth scheme-theoretic zero locus of a regular pair of quadratic forms F,G in ℙ⁵; H is the restricted O(1).",
        "The first quadric is not assumed smooth."
      ],
      "conclusion": "For the supplied smooth intersection, H is primitive, the Fano index is exactly two and the conventional numerical Picard number is one.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "D"
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
          "label": "Iskovskikh–Prokhorov, Fano Varieties (1999)",
          "url": "https://link.springer.com/book/9783540614685",
          "kind": "literature"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadrics-adjunction",
        "quadrics-picard",
        "picard-numerical"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-construction",
      "title": "Supplied two quadrics → complete Fano package",
      "statement": "The supplied smooth intersection in ℙ⁵ is a rank-one Fano of exact index two, H³=4 and (−K)³=32.",
      "hypotheses": [
        "k algebraically closed of characteristic zero, arbitrary universe u.",
        "X is the supplied smooth scheme-theoretic zero locus of a regular pair of quadratic forms F,G in ℙ⁵; H is the restricted O(1).",
        "The first quadric is not assumed smooth."
      ],
      "conclusion": "The supplied smooth intersection in ℙ⁵ is a rank-one Fano of exact index two, H³=4 and (−K)³=32.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "B",
        "D"
      ],
      "family": "index2",
      "details": "Literature target in the local roadmap. “Planned” means no matching verified local endpoint is recorded; it does not assert that the result is absent from all Lean libraries.",
      "leanDeclarations": [
        "FanoThreefolds.SmoothTwoQuadricsStatement"
      ],
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
        "quadrics-geometry",
        "quadrics-adjunction",
        "quadrics-degree",
        "quadrics-index-rho"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "quadrics-existence",
      "title": "A nonempty smooth two-quadric family",
      "statement": "There are smooth regular intersections of two quadrics in ℙ⁵, forming the required nonempty smooth parameter-family locus.",
      "hypotheses": [
        "Ground field ℂ; pairs of quadrics with independent equations and expected dimension."
      ],
      "conclusion": "There are smooth regular intersections of two quadrics in ℙ⁵, forming the required nonempty smooth parameter-family locus.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "D",
        "F"
      ],
      "family": "index2",
      "details": "Construction of a supplied model and existence of a suitable smooth pair are different obligations.",
      "leanDeclarations": [
        "FanoThreefolds.SmoothTwoQuadricsExistenceStatement"
      ],
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
        "quadrics-construction"
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
      "id": "d2-construction",
      "title": "Quartic double solid: invariants",
      "statement": "A double cover of ℙ³ branched along a smooth quartic has −K=2H, H³=2, Pic=ℤ[H] and exact index two with ρ=1.",
      "hypotheses": [
        "Ground field ℂ; finite flat double cover with smooth quartic branch and H the pullback of O(1)."
      ],
      "conclusion": "A double cover of ℙ³ branched along a smooth quartic has −K=2H, H³=2, Pic=ℤ[H] and exact index two with ρ=1.",
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
      "id": "d2-recognition",
      "title": "Quartic double solid: recognise every input",
      "statement": "Every primitive index-two rank-one Fano of degree 2 is isomorphic, with polarization, to a double cover of ℙ³ branched along a smooth quartic.",
      "hypotheses": [
        "X is a smooth projective integral threefold over an algebraically closed field k of characteristic zero.",
        "Statements are intended at arbitrary Lean universe u unless this node explicitly restricts to ℂ.",
        "The conventional numerical Picard number ρ(X) is one.",
        "Pic(X)=ℤ[H], with H primitive and ample; −K_X = rH.",
        "r=2 and H³=2.",
        "X is Fano: its actual anticanonical invertible sheaf ω_X⁻¹ is ample."
      ],
      "conclusion": "Every primitive index-two rank-one Fano of degree 2 is isomorphic, with polarization, to a double cover of ℙ³ branched along a smooth quartic.",
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
      "id": "d2-existence",
      "title": "Quartic double solid: nonempty family",
      "statement": "The admissible quartic double solid parameter space has a nonempty locus of smooth models with the asserted invariants.",
      "hypotheses": [
        "Ground field ℂ; the admissibility and smoothness conditions in the construction theorem."
      ],
      "conclusion": "The admissible quartic double solid parameter space has a nonempty locus of smooth models with the asserted invariants.",
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
      "caveats": [],
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
        "g12-existence"
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
