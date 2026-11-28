/* Curated dependency direction: supporting result -> conclusion. */
window.DEL_PEZZO_GRAPH = {
  "meta": {
    "title": "The del Pezzo proof map",
    "scope": "The completed classification of smooth del Pezzo surfaces over algebraically closed fields of characteristic zero, with its proof ingredients and the twenty-seven-line theorem.",
    "snapshot": "28 November 2026 · static snapshot of verified surface checkpoint",
    "checkpoint": "fc6f8e1",
    "updatedAt": "2026-11-28T05:00:00Z",
    "fieldScope": "Headlines retain the original algebraically closed characteristic-zero field at arbitrary Lean universe u. Some individual supporting lemmas have weaker hypotheses. Isomorphisms and birationality are over that original field.",
    "versionPins": {
      "Lean": "v4.35.0",
      "Mathlib": "56a005855ea17e0b0958f73ec801ae140b0a1679",
      "AxiomMath/Stacks": "c496df0d9beea9deaeabcea8492605f9a0a2313b",
      "MMP": "1f9ade367087ec711a2ce1382bad279a5a0284c3"
    },
    "limitations": [
      "This is a curated mathematical graph, not an exhaustive extraction of Lean constants.",
      "Arrows mean selected mathematical support → conclusion; they need not equal literal imports of the displayed declaration.",
      "Verified applies only to the scoped statement and recorded evidence; compiled definitions are identified as definitions.",
      "Private source and audit files are not published; relative paths identify locally retained evidence.",
      "Provenance attributes imported work to the pinned repository rather than guessing individual authorship.",
      "The supervised Codex/SHEAF project supplied local proofs and adapters, reusing Mathlib, AxiomMath/Stacks and MMP.",
      "Public checks and separate direct Lean replay use the same Lean implementation; the Linux SHEAF comparator remains unrun.",
      "The classification does not mean a unique surface up to isomorphism in each degree.",
      "Optional open extensions are not missing premises of the completed classification.",
      "The Negativity Lemma sibling project was not added as a dependency of this project.",
      "The direct minimal del Pezzo proof does not invoke an unformalised general Hirzebruch-surface classification.",
      "This is a dated evidence snapshot, not a live agent monitor or a percentage of effort completed."
    ]
  },
  "panels": [
    {
      "id": "A",
      "title": "The completed classification",
      "description": "Theorem 2.19 and its main mathematical route. The classification is the final conclusion of this overview; the later 27-line application has its own Panel G.",
      "bookSection": "Chapter 2 · del Pezzo surfaces"
    },
    {
      "id": "B",
      "title": "Vanishing and Castelnuovo rationality",
      "description": "Actual cohomology, finite minimal reduction, rational pencils and the low-degree closure of Castelnuovo’s criterion.",
      "bookSection": "Chapter 2 · del Pezzo surfaces"
    },
    {
      "id": "C",
      "title": "Contractions and minimal del Pezzos",
      "description": "Negative curves, preservation of ampleness, Picard pairing and direct recognition as P² or P¹×P¹.",
      "bookSection": "Chapter 2 · del Pezzo surfaces"
    },
    {
      "id": "D",
      "title": "From a surface to ordinary plane centres",
      "description": "A birational plane morphism, point factorisation and exclusion of infinitely near centres.",
      "bookSection": "Chapter 2 · del Pezzo surfaces"
    },
    {
      "id": "E",
      "title": "Literal general position and ampleness",
      "description": "Actual homogeneous equations, local multiplicities, strict transforms and the two directions of the plane blowup criterion.",
      "bookSection": "Chapter 2 · del Pezzo surfaces"
    },
    {
      "id": "F",
      "title": "Existence and full classification",
      "description": "A nonempty configuration-scheme open, all model directions, and occurrence of exactly degrees one through nine.",
      "bookSection": "Chapter 2 · del Pezzo surfaces"
    },
    {
      "id": "G",
      "title": "Exceptional curves and the 27 lines",
      "description": "Full Picard classes, uniqueness, the six-point lattice and actual embedded lines on a supplied smooth cubic.",
      "bookSection": "Chapter 2 · del Pezzo surfaces"
    },
    {
      "id": "H",
      "title": "Reused foundations and optional extensions",
      "description": "Selected verified library inputs and local comparison theorems; optional extensions are separate from the completed classification.",
      "bookSection": "Chapter 2 · del Pezzo surfaces"
    }
  ],
  "nodes": [
    {
      "id": "canonical",
      "title": "Canonical bundle and degree comparisons",
      "statement": "The canonical divisor represents Ω²; ample −K is equivalent to ampleness of its actual dual sheaf. Prime divisors cover all integral curves and intersection agrees with integer degree.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u."
      ],
      "conclusion": "The canonical divisor represents Ω²; ample −K is equivalent to ampleness of its actual dual sheaf. Prime divisors cover all integral curves and intersection agrees with integer degree.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "H"
      ],
      "details": "Thirteen local comparisons connect the MMP divisor representation to intrinsic sheaves and all integral curves, including singular curves.",
      "leanDeclarations": [
        "DelPezzo.surface_anticanonical_iff_intrinsic",
        "DelPezzo.surface_integralCurves_iff_primeDivisors",
        "DelPezzo.surface_negativeSelfIntersection_iff_integerDegree"
      ],
      "evidence": [
        {
          "label": "verification.json",
          "path": "projects/del-pezzo/audit/verification.json",
          "commit": "f9ada65",
          "kind": "verification",
          "date": "2026-11-22T19:26:08+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Definition 2.1 / comparison interfaces"
    },
    {
      "id": "adjunction",
      "title": "Adjunction and the genus-zero test",
      "statement": "For an integral surface curve, arithmetic adjunction and pₐ≥0 identify pₐ=0 with the projective line over k.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. C is an integral proper curve."
      ],
      "conclusion": "For an integral surface curve, arithmetic adjunction and pₐ≥0 identify pₐ=0 with the projective line over k.",
      "status": "verified",
      "origin": "axiom_mmp",
      "panels": [
        "H"
      ],
      "details": "Selected public MMP inputs were built and transitively audited; the curve is not assumed smooth.",
      "leanDeclarations": [
        "MMP.Threefold.isIntersectionNumber_canonical_add_eq_neg_two_mul_eulerCharacteristic",
        "MMP.Mori.arithmeticGenus_nonneg_and_eq_zero_iff",
        "MMP.Mori.intersectionNumber_projection_and_surface_curve"
      ],
      "evidence": [
        {
          "label": "axioms.json",
          "path": "projects/del-pezzo/audit/axioms.json",
          "commit": "f9ada65",
          "kind": "verification",
          "date": "2026-11-22T19:26:08+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "ample-positive",
      "title": "Ample bundles have positive curve degree",
      "statement": "An ample invertible sheaf has strictly positive degree on every proper integral curve.",
      "hypotheses": [
        "The supplied Cartier sheaf is ample; the proper curve and structure morphism satisfy the selected MMP interface."
      ],
      "conclusion": "An ample invertible sheaf has strictly positive degree on every proper integral curve.",
      "status": "verified",
      "origin": "axiom_mmp",
      "panels": [
        "H"
      ],
      "details": "",
      "leanDeclarations": [
        "MMP.Threefold.Mori.degreeOn_cartierSheaf_pos_of_isAmple"
      ],
      "evidence": [
        {
          "label": "axioms.json",
          "path": "projects/del-pezzo/audit/axioms.json",
          "commit": "f9ada65",
          "kind": "verification",
          "date": "2026-11-22T19:26:08+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "rr",
      "title": "Surface Riemann–Roch and Serre duality",
      "statement": "Actual Euler characteristics and section spaces obey the surface Riemann–Roch and duality identities used in the subsequent proofs.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. H¹(X,O_X)=0 and H⁰(X,ω_X⊗ω_X)=0; anticanonical ampleness is not assumed."
      ],
      "conclusion": "Actual Euler characteristics and section spaces obey the surface Riemann–Roch and duality identities used in the subsequent proofs.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "H"
      ],
      "details": "Local comparisons reuse the pinned MMP/Stacks cohomology and intersection machinery; on a Castelnuovo surface χ(O)=1. This node covers those scoped inputs, not an audit of every cohomology theorem.",
      "leanDeclarations": [
        "DelPezzo.CastelnuovoSurface.two_mul_divisorEuler"
      ],
      "evidence": [
        {
          "label": "CANONICAL-NEGATIVE.md",
          "path": "projects/del-pezzo/audit/CANONICAL-NEGATIVE.md",
          "commit": "e0a139a",
          "kind": "report",
          "date": "2026-11-23T19:12:07+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "akizuki",
      "title": "All-universe Akizuki–Nakano input",
      "statement": "The selected vanishing theorem applies to the original field universe and gives the negative ample vanishing needed for structure-sheaf cohomology.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. A supplied invertible sheaf is ample and the Akizuki–Nakano degree inequality holds."
      ],
      "conclusion": "The selected vanishing theorem applies to the original field universe and gives the negative ample vanishing needed for structure-sheaf cohomology.",
      "status": "verified",
      "origin": "axiom_mmp",
      "panels": [
        "H"
      ],
      "details": "Use a=0, q=2−i and L=O(−K); smooth Serre duality then gives Hⁱ(O)=0. No Scheme.{0} reduction is inserted.",
      "leanDeclarations": [
        "MMP.Mori.subsingleton_derivedCohomologyOverField_exteriorPower_tensor_dualSheaf_of_isAmple"
      ],
      "evidence": [
        {
          "label": "cohomology-verification.json",
          "path": "projects/del-pezzo/audit/cohomology-verification.json",
          "commit": "0bd13c6",
          "kind": "verification",
          "date": "2026-11-23T14:07:00+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "stacks-contract",
      "title": "Projective contraction of a (−1)-curve",
      "statement": "A supplied exceptional curve of the first kind admits a projective contraction with an actual point-blowup diagram.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. A supplied prime is an exceptional curve of the first kind."
      ],
      "conclusion": "A supplied exceptional curve of the first kind admits a projective contraction with an actual point-blowup diagram.",
      "status": "verified",
      "origin": "axiom_stacks",
      "panels": [
        "H"
      ],
      "details": "Pinned Stacks construction, with MMP adapters deriving the smooth surface target and birationality.",
      "leanDeclarations": [
        "AlgebraicGeometry.exists_isContractionOfExceptionalCurve_isProjective",
        "AlgebraicGeometry.IsContractionOfExceptionalCurve.exists_blowUp_iso"
      ],
      "evidence": [
        {
          "label": "contraction-source-axioms.json",
          "path": "projects/del-pezzo/audit/contraction-source-axioms.json",
          "commit": "b0a47db",
          "kind": "verification",
          "date": "2026-11-22T22:12:29+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "integer-bound",
      "title": "Integer multiplicity bound",
      "statement": "The genus bound and Σm≥3a force one of the forbidden line, conic or singular-cubic multiplicity configurations.",
      "hypotheses": [
        "At most eight nonnegative integral multiplicities; positive degree a; Σm(m−1)≤(a−1)(a−2) and Σm≥3a."
      ],
      "conclusion": "The genus bound and Σm≥3a force one of the forbidden line, conic or singular-cubic multiplicity configurations.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "E",
        "H"
      ],
      "details": "Mathlib Cauchy and integer arithmetic imply a≤4; summing m(m−1)≥2m−2 excludes a=4. The a=1,2,3 cases yield the exact patterns.",
      "leanDeclarations": [
        "DelPezzo.classify_plane_curve_multiplicities"
      ],
      "evidence": [
        {
          "label": "criterion-multiplicity-arithmetic-build.json",
          "path": "projects/del-pezzo/audit/criterion-multiplicity-arithmetic-build.json",
          "commit": "fa3af27",
          "kind": "verification",
          "date": "2026-11-25T07:31:51+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "pluri",
      "title": "All positive pluricanonical sections vanish",
      "statement": "H⁰(X,O(mK_X))=0 for every positive integer m and every canonical representative.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "H⁰(X,O(mK_X))=0 for every positive integer m and every canonical representative.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "B"
      ],
      "details": "Negative intersection of mK with the ample anticanonical class excludes an effective section divisor. The zero divisor case is included.",
      "leanDeclarations": [
        "DelPezzo.pluricanonicalVanishingStatement_proved"
      ],
      "evidence": [
        {
          "label": "pluricanonical-proof-verification.json",
          "path": "projects/del-pezzo/audit/pluricanonical-proof-verification.json",
          "commit": "4c5d22b",
          "kind": "verification",
          "date": "2026-11-23T12:37:41+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "canonical",
        "ample-positive"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Lemma 2.5"
    },
    {
      "id": "cohom",
      "title": "Hⁱ(O)=0 and χ(O)=1",
      "statement": "All positive actual structure-sheaf cohomology groups vanish and χ(O_X)=1.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "All positive actual structure-sheaf cohomology groups vanish and χ(O_X)=1.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "B"
      ],
      "details": "Uses the actual cohomology objects, k≅Γ(O_X), and finite-dimensional Euler comparison; includes i>2.",
      "leanDeclarations": [
        "DelPezzo.cohomologyStatement_proved"
      ],
      "evidence": [
        {
          "label": "cohomology-verification.json",
          "path": "projects/del-pezzo/audit/cohomology-verification.json",
          "commit": "0bd13c6",
          "kind": "verification",
          "date": "2026-11-23T14:07:00+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "canonical",
        "akizuki"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Proposition 2.6"
    },
    {
      "id": "point-vanish",
      "title": "Point contraction preserves q=P₂=0",
      "statement": "Contract a supplied (−1)-curve while preserving both actual Castelnuovo vanishings and birationality over k.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. H¹(X,O_X)=0 and H⁰(X,ω_X⊗ω_X)=0; anticanonical ampleness is not assumed. A supplied (−1)-curve is to be contracted."
      ],
      "conclusion": "Contract a supplied (−1)-curve while preserving both actual Castelnuovo vanishings and birationality over k.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B"
      ],
      "details": "",
      "leanDeclarations": [
        "DelPezzo.pointBlowdownH1Descent_proved",
        "DelPezzo.pointBlowdownBicanonicalDescent_proved",
        "DelPezzo.castelnuovoPointContraction_proved"
      ],
      "evidence": [
        {
          "label": "POINT-BLOWDOWN.md",
          "path": "projects/del-pezzo/audit/POINT-BLOWDOWN.md",
          "commit": "5fa35b0",
          "kind": "report",
          "date": "2026-11-23T15:54:33+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "stacks-contract"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "rank-drop",
      "title": "A finite rank drops at every contraction",
      "statement": "The curve-tested quotient of H¹(X,Ω¹) has finite dimension and strictly decreases under a point blowdown.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. H¹(X,O_X)=0 and H⁰(X,ω_X⊗ω_X)=0; anticanonical ampleness is not assumed."
      ],
      "conclusion": "The curve-tested quotient of H¹(X,Ω¹) has finite dimension and strictly decreases under a point blowdown.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B"
      ],
      "details": "Regular curve tests lift to the blowup; the exceptional Chern class is outside the pulled-back subspace. This proves termination at arbitrary universe without assuming N₁ finiteness from a universe-zero wrapper.",
      "leanDeclarations": [
        "DelPezzo.CastelnuovoSurface.pointStep_curveTestedHodgeRank_lt"
      ],
      "evidence": [
        {
          "label": "minimal-reduction-verification.json",
          "path": "projects/del-pezzo/audit/minimal-reduction-verification.json",
          "commit": "ab829a8",
          "kind": "verification",
          "date": "2026-11-23T17:39:01+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "point-vanish"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "minimal-reduction",
      "title": "Finite chain to a minimal surface",
      "statement": "A finite sequence of point contractions reaches a surface with no (−1)-curves, preserving q=P₂=0 and birationality over k.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. H¹(X,O_X)=0 and H⁰(X,ω_X⊗ω_X)=0; anticanonical ampleness is not assumed."
      ],
      "conclusion": "A finite sequence of point contractions reaches a surface with no (−1)-curves, preserving q=P₂=0 and birationality over k.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "B"
      ],
      "details": "",
      "leanDeclarations": [
        "DelPezzo.minimalReductionStatement_proved",
        "DelPezzo.CastelnuovoSurface.exists_minimal_pointChain"
      ],
      "evidence": [
        {
          "label": "minimal-reduction-verification.json",
          "path": "projects/del-pezzo/audit/minimal-reduction-verification.json",
          "commit": "ab829a8",
          "kind": "verification",
          "date": "2026-11-23T17:39:01+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "point-vanish",
        "rank-drop"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "nonnef",
      "title": "Canonical non-nefness and moving prime",
      "statement": "K is non-nef; on a minimal surface a prime C has K·C<0, C²≥0 and at least two independent sections of O(C).",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. H¹(X,O_X)=0 and H⁰(X,ω_X⊗ω_X)=0; anticanonical ampleness is not assumed."
      ],
      "conclusion": "K is non-nef; on a minimal surface a prime C has K·C<0, C²≥0 and at least two independent sections of O(C).",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B"
      ],
      "details": "RR and duality first produce an anticanonical section under hypothetical nefness. Its effective divisor contradicts nefness. Adjunction and minimality control the resulting prime.",
      "leanDeclarations": [
        "DelPezzo.canonicalNegativeModelStatement_proved",
        "DelPezzo.minimalCanonicalNegativeSectionsStatement_proved"
      ],
      "evidence": [
        {
          "label": "canonical-negative-verification.json",
          "path": "projects/del-pezzo/audit/canonical-negative-verification.json",
          "commit": "e0a139a",
          "kind": "verification",
          "date": "2026-11-23T19:12:07+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "rr",
        "adjunction",
        "minimal-reduction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "rational-pencil",
      "title": "Rational prime gives a plane birational model",
      "statement": "A smooth rational prime of nonnegative square yields an actual rational pencil and birationality over k with P².",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. H¹(X,O_X)=0 and H⁰(X,ω_X⊗ω_X)=0; anticanonical ampleness is not assumed. A canonical-negative smooth rational prime of nonnegative self-intersection has been supplied."
      ],
      "conclusion": "A smooth rational prime of nonnegative square yields an actual rational pencil and birationality over k with P².",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B"
      ],
      "details": "The incidence graph has a proper flat open family with rational special fibre. Tsen and the genus-zero conic argument split the generic fibre; dense opens reconstruct the plane.",
      "leanDeclarations": [
        "DelPezzo.birationalOver_plane_of_cartier_rational_pencil",
        "DelPezzo.CastelnuovoSurface.birationalOver_plane_of_smoothRationalPrime"
      ],
      "evidence": [
        {
          "label": "CASTELNUOVO-COMPLETION.md",
          "path": "projects/del-pezzo/audit/CASTELNUOVO-COMPLETION.md",
          "commit": "93a215d",
          "kind": "report",
          "date": "2026-11-24T10:53:03+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "nonnef"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "low-degree",
      "title": "Resolve the residual degrees 1, 2 and 3",
      "statement": "The residual minimal cases produce a canonical-negative smooth rational prime in each of K²=1,2,3.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. H¹(X,O_X)=0 and H⁰(X,ω_X⊗ω_X)=0; anticanonical ampleness is not assumed. X is minimal and has the indicated canonical square."
      ],
      "conclusion": "The residual minimal cases produce a canonical-negative smooth rational prime in each of K²=1,2,3.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "B"
      ],
      "details": "Under the residual primitive-canonical alternative, actual section rings give weighted sextic, quartic double-plane and cubic models. Marked-line Euler obstructions specialize back and exclude the alternative. These are scoped residual arguments, not an unrestricted anticanonical-model classification.",
      "leanDeclarations": [
        "DelPezzo.CastelnuovoSurface.hasCanonicalNegativeSmoothRationalPrime_of_square_eq_one",
        "DelPezzo.CastelnuovoSurface.hasCanonicalNegativeSmoothRationalPrime_of_square_eq_two",
        "DelPezzo.CastelnuovoSurface.hasCanonicalNegativeSmoothRationalPrime_of_square_eq_three"
      ],
      "evidence": [
        {
          "label": "castelnuovo-completion-final-verification.json",
          "path": "projects/del-pezzo/audit/castelnuovo-completion-final-verification.json",
          "commit": "93a215d",
          "kind": "verification",
          "date": "2026-11-24T10:53:03+08:00"
        }
      ],
      "caveats": [
        "The general low-degree anticanonical presentation package is a separate extension."
      ],
      "dependencies": [
        "nonnef",
        "rr"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "castelnuovo",
      "title": "Castelnuovo rationality criterion",
      "statement": "q=P₂=0 implies birationality over the original field with the polynomial projective plane.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. H¹(X,O_X)=0 and H⁰(X,ω_X⊗ω_X)=0; anticanonical ampleness is not assumed."
      ],
      "conclusion": "q=P₂=0 implies birationality over the original field with the polynomial projective plane.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "B"
      ],
      "details": "The nonpositive and large-square branches are resolved by adjunction and an auxiliary blowup; the three residual positive degrees are closed separately. No del Pezzo ampleness is assumed in the criterion.",
      "leanDeclarations": [
        "DelPezzo.castelnuovoCriterionStatement_proved"
      ],
      "evidence": [
        {
          "label": "castelnuovo-completion-final-verification.json",
          "path": "projects/del-pezzo/audit/castelnuovo-completion-final-verification.json",
          "commit": "93a215d",
          "kind": "verification",
          "date": "2026-11-24T10:53:03+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "minimal-reduction",
        "nonnef",
        "rational-pencil",
        "low-degree"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Theorem 2.4 · Castelnuovo item"
    },
    {
      "id": "rationality",
      "title": "Every del Pezzo is rational",
      "statement": "Every smooth del Pezzo surface in the approved field scope is birational over k with P².",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "Every smooth del Pezzo surface in the approved field scope is birational over k with P².",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "B",
        "C"
      ],
      "details": "",
      "leanDeclarations": [
        "DelPezzo.rationalityStatement_proved"
      ],
      "evidence": [
        {
          "label": "castelnuovo-completion-final-verification.json",
          "path": "projects/del-pezzo/audit/castelnuovo-completion-final-verification.json",
          "commit": "93a215d",
          "kind": "verification",
          "date": "2026-11-24T10:53:03+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "pluri",
        "cohom",
        "castelnuovo"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Proposition 2.9"
    },
    {
      "id": "negative",
      "title": "Negative curves are (−1)-curves",
      "statement": "Every integral curve with C²<0 is isomorphic over k to P¹ and has C²=−1.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "Every integral curve with C²<0 is isomorphic over k to P¹ and has C²=−1.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "C"
      ],
      "details": "Adjunction combines negative integral self-degree and negative canonical degree with pₐ≥0. Smoothness of the curve is a conclusion.",
      "leanDeclarations": [
        "DelPezzo.negativeCurveStatement_proved"
      ],
      "evidence": [
        {
          "label": "theorem-verification.json",
          "path": "projects/del-pezzo/audit/theorem-verification.json",
          "commit": "918330f",
          "kind": "verification",
          "date": "2026-11-22T20:20:18+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "canonical",
        "adjunction",
        "ample-positive"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Lemma 2.10"
    },
    {
      "id": "anti-one",
      "title": "Anticanonical degree of a negative curve",
      "statement": "Every negative integral curve satisfies (−K_X)·C=1 for every canonical representative.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "Every negative integral curve satisfies (−K_X)·C=1 for every canonical representative.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C",
        "G"
      ],
      "details": "",
      "leanDeclarations": [
        "DelPezzo.negativeCurve_anticanonical_degree_one"
      ],
      "evidence": [
        {
          "label": "COROLLARY.md",
          "path": "projects/del-pezzo/audit/COROLLARY.md",
          "commit": "e49d4ca",
          "kind": "report",
          "date": "2026-11-22T21:54:18+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "negative",
        "adjunction"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "blowup-formula",
      "title": "Point blowup: canonical and square formulas",
      "statement": "K_Bl=π* K+E, E²=−1, π*K·E=0 and K_Bl²=K²−1, with intrinsic square comparisons.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. The morphism is the actual blowup of a smooth closed point."
      ],
      "conclusion": "K_Bl=π* K+E, E²=−1, π*K·E=0 and K_Bl²=K²−1, with intrinsic square comparisons.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "C",
        "E"
      ],
      "details": "The MMP canonical formula, Stacks proper degree-one projection and local comparison lemmas give the actual integer square identities.",
      "leanDeclarations": [
        "MMP.Threefold.Resolution.isCanonicalDivisor_pullback_add_single_blowUp_singleton",
        "DelPezzo.canonicalSquare_pointBlowup"
      ],
      "evidence": [
        {
          "label": "contraction-square-verification.json",
          "path": "projects/del-pezzo/audit/contraction-square-verification.json",
          "commit": "f644c76",
          "kind": "verification",
          "date": "2026-11-23T10:23:33+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "canonical",
        "stacks-contract"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Proposition 2.8"
    },
    {
      "id": "curve-positive",
      "title": "All target curves retain positive −K degree",
      "statement": "For a point contraction of a del Pezzo, every integral target curve has positive anticanonical degree.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "For a point contraction of a del Pezzo, every integral target curve has positive anticanonical degree.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "details": "Construct each actual strict-transform prime and compare residue-field degree one. Singular integral target curves are included.",
      "leanDeclarations": [
        "DelPezzo.anticanonical_prime_degree_pos_of_formula",
        "DelPezzo.degree_pos_all_integral_curves"
      ],
      "evidence": [
        {
          "label": "CONTRACTION-PROOF.md",
          "path": "projects/del-pezzo/audit/CONTRACTION-PROOF.md",
          "commit": "0c03a7f",
          "kind": "report",
          "date": "2026-11-23T10:50:01+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "negative",
        "blowup-formula",
        "ample-positive"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "nakai",
      "title": "Surface Nakai criterion",
      "statement": "Positive square and positive degree on every integral curve imply ampleness of the supplied invertible sheaf.",
      "hypotheses": [
        "A smooth projective integral surface over the original algebraically closed characteristic-zero field, and an actual invertible sheaf with positive square and positive degree on every integral closed curve."
      ],
      "conclusion": "Positive square and positive degree on every integral curve imply ampleness of the supplied invertible sheaf.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "C",
        "E",
        "H"
      ],
      "details": "Local dimension-two specialization of the pinned generic projective Nakai theorem; all integral closed subschemes are accounted for.",
      "leanDeclarations": [
        "DelPezzo.surface_nakai"
      ],
      "evidence": [
        {
          "label": "contraction-curves-verification.json",
          "path": "projects/del-pezzo/audit/contraction-curves-verification.json",
          "commit": "e40e68d",
          "kind": "verification",
          "date": "2026-11-23T10:00:20+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "dp-contract",
      "title": "Contraction preserves the del Pezzo property",
      "statement": "Contract a (−1)-curve to a smooth del Pezzo Y; the actual point-blowup diagram holds and K_Y²=K_X²+1.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "Contract a (−1)-curve to a smooth del Pezzo Y; the actual point-blowup diagram holds and K_Y²=K_X²+1.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "C",
        "D"
      ],
      "details": "Projectivity, smoothness, integrality, dimension and target ampleness are conclusions, not added premises.",
      "leanDeclarations": [
        "DelPezzo.contractionStatement_proved"
      ],
      "evidence": [
        {
          "label": "contraction-proof-verification.json",
          "path": "projects/del-pezzo/audit/contraction-proof-verification.json",
          "commit": "0c03a7f",
          "kind": "verification",
          "date": "2026-11-23T10:50:01+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "stacks-contract",
        "blowup-formula",
        "curve-positive",
        "nakai"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Proposition 2.11"
    },
    {
      "id": "picard-saturation",
      "title": "Rational surface Picard pairing is saturated",
      "statement": "Common point-blowup resolutions transport the saturated integral Picard intersection pairing from the plane.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. H¹(X,O_X)=0 and H⁰(X,ω_X⊗ω_X)=0; anticanonical ampleness is not assumed."
      ],
      "conclusion": "Common point-blowup resolutions transport the saturated integral Picard intersection pairing from the plane.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "C"
      ],
      "details": "Uses pinned Stacks common resolution and Picard decomposition. It yields degree-one divisors on square-zero rational primes; no full minimal rational-surface classification is imported.",
      "leanDeclarations": [
        "DelPezzo.hasSaturatedPicardIntersection_of_birationalOver",
        "DelPezzo.CastelnuovoSurface.hasSaturatedPicardIntersection"
      ],
      "evidence": [
        {
          "label": "minimal-del-pezzo-final-verification.json",
          "path": "projects/del-pezzo/audit/minimal-del-pezzo-final-verification.json",
          "commit": "e59fb8f",
          "kind": "verification",
          "date": "2026-11-24T14:35:38+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "castelnuovo",
        "blowup-formula"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "least-prime",
      "title": "Least-degree rational prime has integral members",
      "statement": "Choose a smooth rational prime with least anticanonical degree; every effective member of its linear system is a single reduced integral curve.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample. X is minimal."
      ],
      "conclusion": "Choose a smooth rational prime with least anticanonical degree; every effective member of its linear system is a single reduced integral curve.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "details": "Canonical negativity and residual-component arguments exclude decompositions.",
      "leanDeclarations": [
        "DelPezzo.CastelnuovoSurface.exists_least_anticanonical_degree_rational_prime",
        "DelPezzo.CastelnuovoSurface.effective_member_eq_prime_of_least_degree"
      ],
      "evidence": [
        {
          "label": "minimal-del-pezzo-final-verification.json",
          "path": "projects/del-pezzo/audit/minimal-del-pezzo-final-verification.json",
          "commit": "e59fb8f",
          "kind": "verification",
          "date": "2026-11-24T14:35:38+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "picard-saturation",
        "adjunction",
        "ample-positive"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "small-square",
      "title": "The least rational prime has C²=0 or 1",
      "statement": "A least-anticanonical-degree rational prime on a minimal del Pezzo has square zero or one.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample. X is minimal."
      ],
      "conclusion": "A least-anticanonical-degree rational prime on a minimal del Pezzo has square zero or one.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "details": "For C²≥2, RR after one blowup gives an effective pullback minus twice the exceptional curve. Arithmetic adjunction contradicts irreducibility of its pushforward.",
      "leanDeclarations": [
        "DelPezzo.CastelnuovoSurface.exists_square_zero_or_one_rational_prime"
      ],
      "evidence": [
        {
          "label": "minimal-del-pezzo-final-verification.json",
          "path": "projects/del-pezzo/audit/minimal-del-pezzo-final-verification.json",
          "commit": "e59fb8f",
          "kind": "verification",
          "date": "2026-11-24T14:35:38+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "least-prime",
        "blowup-formula",
        "rr"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "minimal-plane",
      "title": "Square one gives the plane",
      "statement": "The rational curve restriction sequence lifts two generators; with the canonical section they define an isomorphism X≅P² over k.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample. X is minimal and has a smooth rational prime of square one."
      ],
      "conclusion": "The rational curve restriction sequence lifts two generators; with the canonical section they define an isomorphism X≅P² over k.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "details": "Intersection one proves dominance and degree one. Minimality and the smooth target promote the proper birational map to an isomorphism.",
      "leanDeclarations": [
        "DelPezzo.CastelnuovoSurface.exists_plane_iso_of_square_one"
      ],
      "evidence": [
        {
          "label": "minimal-del-pezzo-final-verification.json",
          "path": "projects/del-pezzo/audit/minimal-del-pezzo-final-verification.json",
          "commit": "e59fb8f",
          "kind": "verification",
          "date": "2026-11-24T14:35:38+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "small-square",
        "cohom"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "minimal-quadric",
      "title": "Square zero gives P¹×P¹",
      "statement": "An integral pairing argument constructs a second square-zero rational prime meeting the first once; the two pencils give an isomorphism to P¹×P¹.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample. X is minimal and has a smooth rational prime of square zero."
      ],
      "conclusion": "An integral pairing argument constructs a second square-zero rational prime meeting the first once; the two pencils give an isomorphism to P¹×P¹.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "C"
      ],
      "details": "RR parity and saturation give the degree-one divisor; positivity supplies the second prime. The target is the actual fibre product over k.",
      "leanDeclarations": [
        "DelPezzo.CastelnuovoSurface.iso_projectiveLineProduct_of_square_zero"
      ],
      "evidence": [
        {
          "label": "minimal-del-pezzo-final-verification.json",
          "path": "projects/del-pezzo/audit/minimal-del-pezzo-final-verification.json",
          "commit": "e59fb8f",
          "kind": "verification",
          "date": "2026-11-24T14:35:38+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "small-square",
        "picard-saturation",
        "cohom",
        "rr"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "minimal-dp",
      "title": "Minimal del Pezzo recognition",
      "statement": "A minimal smooth del Pezzo is isomorphic over k to P² or P¹×P¹.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample. No prime is a (−1)-curve."
      ],
      "conclusion": "A minimal smooth del Pezzo is isomorphic over k to P² or P¹×P¹.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "C",
        "D"
      ],
      "details": "This direct proof uses least-degree rational curves, Picard pairing and explicit linear systems. It does not rely on an unformalised classification of all minimal rational surfaces.",
      "leanDeclarations": [
        "DelPezzo.minimalDelPezzoStatement_proved"
      ],
      "evidence": [
        {
          "label": "minimal-del-pezzo-final-verification.json",
          "path": "projects/del-pezzo/audit/minimal-del-pezzo-final-verification.json",
          "commit": "e59fb8f",
          "kind": "verification",
          "date": "2026-11-24T14:35:38+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "minimal-plane",
        "minimal-quadric"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Proposition 2.12"
    },
    {
      "id": "quadric-plane",
      "title": "Blow up the quadric and contract both rulings",
      "statement": "For any closed point on P¹×P¹, its blowup is a blowup of P² at two distinct points, contracting the strict transforms of the labelled rulings.",
      "hypotheses": [
        "An algebraically closed characteristic-zero field and an arbitrary closed point of P¹×P¹."
      ],
      "conclusion": "For any closed point on P¹×P¹, its blowup is a blowup of P² at two distinct points, contracting the strict transforms of the labelled rulings.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "D"
      ],
      "details": "Explicit projective coordinates, affine incidence blowup charts and gluing identify both blowup maps over k.",
      "leanDeclarations": [
        "DelPezzo.quadricToPlaneStatement_proved"
      ],
      "evidence": [
        {
          "label": "QUADRIC-TO-PLANE.md",
          "path": "projects/del-pezzo/audit/QUADRIC-TO-PLANE.md",
          "commit": "d10a85e",
          "kind": "report",
          "date": "2026-11-24T17:13:45+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Lemma 2.13"
    },
    {
      "id": "plane-model",
      "title": "A plane morphism unless X is the split quadric",
      "statement": "Unless X≅P¹×P¹ over k, there is a birational morphism X→P² over k.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "Unless X≅P¹×P¹ over k, there is a birational morphism X→P² over k.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "D"
      ],
      "details": "Induct on the already finite curve-tested Hodge rank. A quadric contraction target is handled by the actual marked-point blowup identification.",
      "leanDeclarations": [
        "DelPezzo.planeModelStatement_proved"
      ],
      "evidence": [
        {
          "label": "plane-model-final-verification.json",
          "path": "projects/del-pezzo/audit/plane-model-final-verification.json",
          "commit": "5a54de8",
          "kind": "verification",
          "date": "2026-11-24T18:34:23+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "minimal-dp",
        "dp-contract",
        "rank-drop",
        "quadric-plane"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Proposition 2.14"
    },
    {
      "id": "factorization",
      "title": "Factor a supplied surface birational morphism",
      "statement": "A supplied birational morphism of smooth projective integral surfaces factors into point blowups over its actual target.",
      "hypotheses": [
        "A supplied birational morphism of smooth projective integral surfaces over the approved original field."
      ],
      "conclusion": "A supplied birational morphism of smooth projective integral surfaces factors into point blowups over its actual target.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "D",
        "H"
      ],
      "details": "Local adapter to pinned Stacks resolution/factorisation, retaining all intermediate surfaces and structure maps.",
      "leanDeclarations": [
        "DelPezzo.factorsAsPointBlowups_of_surface_morphism"
      ],
      "evidence": [
        {
          "label": "ORDINARY-CENTRES.md",
          "path": "projects/del-pezzo/audit/ORDINARY-CENTRES.md",
          "commit": "404faac",
          "kind": "report",
          "date": "2026-11-24T23:47:49+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "no-near",
      "title": "No infinitely near centres",
      "statement": "Every centre in every relevant point-blowup factorisation avoids the existing exceptional locus.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "Every centre in every relevant point-blowup factorisation avoids the existing exceptional locus.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "D"
      ],
      "details": "Blowing up a point on a prior exceptional curve makes its strict-transform square at most −2, contradicting the negative-curve theorem after descending ampleness.",
      "leanDeclarations": [
        "DelPezzo.noInfinitelyNearCentresStatement_proved"
      ],
      "evidence": [
        {
          "label": "ordinary-centres-final-verification.json",
          "path": "projects/del-pezzo/audit/ordinary-centres-final-verification.json",
          "commit": "404faac",
          "kind": "verification",
          "date": "2026-11-24T23:47:49+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "factorization",
        "negative",
        "dp-contract",
        "blowup-formula"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Lemma 2.15 · universal marked-centre clause"
    },
    {
      "id": "ordinary",
      "title": "The supplied plane morphism is an ordinary blowup",
      "statement": "The original plane morphism is isomorphic over P² to the blowup of the reduced union of finitely many distinct ordinary points.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "The original plane morphism is isomorphic over P² to the blowup of the reduced union of finitely many distinct ordinary points.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "D"
      ],
      "details": "Disjoint point blowups are identified with the actual blowup of the finite reduced union; the morphism triangle, not only the abstract source, is retained.",
      "leanDeclarations": [
        "DelPezzo.ordinaryCentresStatement_proved"
      ],
      "evidence": [
        {
          "label": "ordinary-centres-final-verification.json",
          "path": "projects/del-pezzo/audit/ordinary-centres-final-verification.json",
          "commit": "404faac",
          "kind": "verification",
          "date": "2026-11-24T23:47:49+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "plane-model",
        "no-near"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Lemma 2.15"
    },
    {
      "id": "literal-gp",
      "title": "Literal general-position conditions",
      "statement": "No line contains three marked points; no conic contains six; no cubic through eight has multiplicity at least two at a marked point.",
      "hypotheses": [
        "At most eight distinct closed points of the polynomial projective plane over the approved field."
      ],
      "conclusion": "No line contains three marked points; no conic contains six; no cubic through eight has multiplicity at least two at a marked point.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "E",
        "F"
      ],
      "details": "Compiled definition with actual homogeneous forms and scheme-stalk ideal-square test. Forms may be reducible or nonreduced; the empty centre is included.",
      "leanDeclarations": [
        "DelPezzo.PlaneGeneralPosition"
      ],
      "evidence": [
        {
          "label": "BLOWUP-CRITERION.md",
          "path": "projects/del-pezzo/audit/BLOWUP-CRITERION.md",
          "commit": "7352dad",
          "kind": "report",
          "date": "2026-11-25T07:19:08+08:00"
        }
      ],
      "caveats": [
        "This is a verified formal definition and comparison boundary, not a standalone theorem of existence."
      ],
      "dependencies": [],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Definition 2.16"
    },
    {
      "id": "plane-transform",
      "title": "Actual plane strict transforms and multiplicities",
      "statement": "For a degree-a integral plane curve, the blowup strict transform has square a²−Σm² and anticanonical degree 3a−Σm.",
      "hypotheses": [
        "Blowup of a finite set of distinct closed plane points; an integral plane curve and its actual multiplicities."
      ],
      "conclusion": "For a degree-a integral plane curve, the blowup strict transform has square a²−Σm² and anticanonical degree 3a−Σm.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "E"
      ],
      "details": "All orders are measured at the original plane points, transported across the isomorphism open. Arbitrary forms are decomposed with their original prime coefficients.",
      "leanDeclarations": [
        "DelPezzo.BlowupCriterion.primeTransform_plane_intersections",
        "DelPezzo.BlowupCriterion.primeTransform_genus_bound"
      ],
      "evidence": [
        {
          "label": "criterion-finite-tower-build.json",
          "path": "projects/del-pezzo/audit/criterion-finite-tower-build.json",
          "commit": "4506ff6",
          "kind": "verification",
          "date": "2026-11-25T09:29:40+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "blowup-formula"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "plane-square",
      "title": "Finite plane blowup has K²=9−r",
      "statement": "The actual blowup of r distinct ordinary plane points has intrinsic canonical square 9−r, without assuming r≤8.",
      "hypotheses": [
        "A finite reduced set of distinct closed points of P² over the approved field."
      ],
      "conclusion": "The actual blowup of r distinct ordinary plane points has intrinsic canonical square 9−r, without assuming r≤8.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "E",
        "F"
      ],
      "details": "Identify the plane canonical sheaf with O(−3) and its Picard pairing, then iterate the actual point-blowup formula.",
      "leanDeclarations": [
        "DelPezzo.BlowupCriterion.finiteBlowup_canonicalSquare"
      ],
      "evidence": [
        {
          "label": "criterion-plane-build.json",
          "path": "projects/del-pezzo/audit/criterion-plane-build.json",
          "commit": "3a594a2",
          "kind": "verification",
          "date": "2026-11-25T09:05:17+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "blowup-formula"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "criterion",
      "title": "Plane blowup is del Pezzo iff general position",
      "statement": "For r≤8 the actual reduced r-point blowup is del Pezzo exactly when the literal general-position conditions hold.",
      "hypotheses": [
        "r≤8 distinct closed points of P² over the approved field; the actual finite reduced blowup is used."
      ],
      "conclusion": "For r≤8 the actual reduced r-point blowup is del Pezzo exactly when the literal general-position conditions hold.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "E",
        "F"
      ],
      "details": "Necessity sums the actual prime coefficients of any forbidden form. Sufficiency uses adjunction, the multiplicity bound, positive square and Nakai for every integral curve.",
      "leanDeclarations": [
        "DelPezzo.blowupCriterionStatement_proved"
      ],
      "evidence": [
        {
          "label": "blowup-criterion-final-verification.json",
          "path": "projects/del-pezzo/audit/blowup-criterion-final-verification.json",
          "commit": "4506ff6",
          "kind": "verification",
          "date": "2026-11-25T09:29:40+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "literal-gp",
        "integer-bound",
        "plane-transform",
        "plane-square",
        "nakai"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Theorem 2.17"
    },
    {
      "id": "open-locus",
      "title": "Determinantal opens encode general position",
      "statement": "On the actual r-fold scheme product, value and first-jet rank conditions define an open whose ordered k-points satisfy the literal incidence tests.",
      "hypotheses": [
        "0≤r≤8; the product of the polynomial planes is taken over the original field."
      ],
      "conclusion": "On the actual r-fold scheme product, value and first-jet rank conditions define an open whose ordered k-points satisfy the literal incidence tests.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "F"
      ],
      "details": "Affine chart equations are compared with projective stalk orders and residue-field ranks. This is a scheme open, not merely a set of tuples.",
      "leanDeclarations": [
        "DelPezzo.PlaneConfiguration.mem_valuesOpen",
        "DelPezzo.PlaneConfiguration.mem_cubicJetOpen",
        "DelPezzo.PlaneConfiguration.mem_goodOpen"
      ],
      "evidence": [
        {
          "label": "general-position-open-verification.json",
          "path": "projects/del-pezzo/audit/general-position-open-verification.json",
          "commit": "479d8f7",
          "kind": "verification",
          "date": "2026-11-25T13:05:44+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "literal-gp"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "gp-witness",
      "title": "An explicit eight-point configuration",
      "statement": "An eight-point interpolation certificate and its prefixes supply a good ordered tuple for every r≤8, including r=0.",
      "hypotheses": [
        "The original algebraically closed characteristic-zero field; r≤8."
      ],
      "conclusion": "An eight-point interpolation certificate and its prefixes supply a good ordered tuple for every r≤8, including r=0.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "F"
      ],
      "details": "Root multiplicities certify the required rank and first-order nonvanishing conditions.",
      "leanDeclarations": [
        "DelPezzo.PlaneConfiguration.exists_good_tuple"
      ],
      "evidence": [
        {
          "label": "general-position-open-verification.json",
          "path": "projects/del-pezzo/audit/general-position-open-verification.json",
          "commit": "479d8f7",
          "kind": "verification",
          "date": "2026-11-25T13:05:44+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "literal-gp"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "nonempty-open",
      "title": "General position is a nonempty scheme open",
      "statement": "For every r≤8 the ordered configuration product has a nonempty open whose k-points are exactly the distinct general-position tuples.",
      "hypotheses": [
        "Every original algebraically closed characteristic-zero field; each r≤8, including the empty product Spec k."
      ],
      "conclusion": "For every r≤8 the ordered configuration product has a nonempty open whose k-points are exactly the distinct general-position tuples.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "F"
      ],
      "details": "",
      "leanDeclarations": [
        "DelPezzo.generalPositionOpenStatement_proved"
      ],
      "evidence": [
        {
          "label": "general-position-open-verification.json",
          "path": "projects/del-pezzo/audit/general-position-open-verification.json",
          "commit": "479d8f7",
          "kind": "verification",
          "date": "2026-11-25T13:05:44+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "open-locus",
        "gp-witness"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Proposition 2.18"
    },
    {
      "id": "split-model",
      "title": "The split quadric is del Pezzo of degree 8",
      "statement": "P¹×P¹ is del Pezzo with intrinsic canonical square eight.",
      "hypotheses": [
        "The split product of two polynomial projective lines over the original field."
      ],
      "conclusion": "P¹×P¹ is del Pezzo with intrinsic canonical square eight.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "F"
      ],
      "details": "Use the common two-point plane blowup and the same intrinsic square comparison.",
      "leanDeclarations": [
        "DelPezzo.projectiveLineProduct_anticanonical",
        "DelPezzo.classification_of_split_quadric"
      ],
      "evidence": [
        {
          "label": "classification-verification.json",
          "path": "projects/del-pezzo/audit/classification-verification.json",
          "commit": "17aba50",
          "kind": "verification",
          "date": "2026-11-25T13:57:54+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "quadric-plane",
        "criterion",
        "blowup-formula"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "degrees",
      "title": "Every degree 1 through 9 occurs",
      "statement": "Over each permitted field, del Pezzo degrees are exactly the integers 1,…,9.",
      "hypotheses": [
        "Every original algebraically closed characteristic-zero field."
      ],
      "conclusion": "Over each permitted field, del Pezzo degrees are exactly the integers 1,…,9.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "F"
      ],
      "details": "General-position points provide degree d=9−r; the empty centre provides the plane of degree nine. The converse bound uses positivity and the model alternatives.",
      "leanDeclarations": [
        "DelPezzo.classification_degreeOccurs_of_range",
        "DelPezzo.classification_range_of_degreeOccurs"
      ],
      "evidence": [
        {
          "label": "classification-verification.json",
          "path": "projects/del-pezzo/audit/classification-verification.json",
          "commit": "17aba50",
          "kind": "verification",
          "date": "2026-11-25T13:57:54+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "nonempty-open",
        "criterion",
        "plane-square",
        "ordinary",
        "split-model"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "classification",
      "title": "Classification of smooth del Pezzo surfaces",
      "statement": "X is del Pezzo iff X≅P¹×P¹ or X is the blowup of P² at r≤8 distinct ordinary points in literal general position; the degrees are 8 and 9−r.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u."
      ],
      "conclusion": "X is del Pezzo iff X≅P¹×P¹ or X is the blowup of P² at r≤8 distinct ordinary points in literal general position; the degrees are 8 and 9−r.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "A",
        "F"
      ],
      "details": "Both directions, every presentation’s canonical-square formula, and occurrence of all and only degrees 1,…,9 are verified over the original field.",
      "leanDeclarations": [
        "DelPezzo.classificationStatement_proved"
      ],
      "evidence": [
        {
          "label": "classification-verification.json",
          "path": "projects/del-pezzo/audit/classification-verification.json",
          "commit": "17aba50",
          "kind": "verification",
          "date": "2026-11-25T13:57:54+08:00"
        }
      ],
      "caveats": [
        "This does not assert a unique isomorphism class at each degree.",
        "This is classification of smooth del Pezzo surfaces, not of all algebraic surfaces."
      ],
      "dependencies": [
        "ordinary",
        "criterion",
        "split-model",
        "plane-square",
        "nonempty-open",
        "degrees"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Theorem 2.19"
    },
    {
      "id": "picard-class",
      "title": "Every Picard class has a divisor representative",
      "statement": "The actual Picard group is represented by Cartier divisors, with equality detected by sheaf isomorphism and the same integral pairing.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "The actual Picard group is represented by Cartier divisors, with equality detected by sheaf isomorphism and the same integral pairing.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "G"
      ],
      "details": "Reuse Stacks picardRep and MMP invertible-sheaf/divisor representability; this is the full Picard group, not a chosen blowup sublattice.",
      "leanDeclarations": [
        "DelPezzo.surfaceDivisorClass_surjective",
        "DelPezzo.surfaceDivisorClass_eq_iff_iso_rep",
        "DelPezzo.surfaceDivisorClass_canonical"
      ],
      "evidence": [
        {
          "label": "exceptional-class-verification.json",
          "path": "projects/del-pezzo/audit/exceptional-class-verification.json",
          "commit": "f37e444",
          "kind": "verification",
          "date": "2026-11-25T15:31:42+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "canonical"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "exceptional-effective",
      "title": "Exceptional numerical data give an effective prime",
      "statement": "A class with D²=K·D=−1 has an effective representative; anticanonical degree one forces one reduced prime component.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "A class with D²=K·D=−1 has an effective representative; anticanonical degree one forces one reduced prime component.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "G"
      ],
      "details": "RR gives χ=1; the complementary divisor has negative ample pairing, so dual sections vanish. Two nonzero effective components would have anticanonical degree at least two.",
      "leanDeclarations": [
        "DelPezzo.CastelnuovoSurface.exists_effective_of_exceptional_numbers"
      ],
      "evidence": [
        {
          "label": "exceptional-class-verification.json",
          "path": "projects/del-pezzo/audit/exceptional-class-verification.json",
          "commit": "f37e444",
          "kind": "verification",
          "date": "2026-11-25T15:31:42+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "picard-class",
        "rr",
        "cohom",
        "ample-positive"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "exceptional",
      "title": "Exceptional classes have unique curves",
      "statement": "A Picard class is represented by a (−1)-curve iff D²=K·D=−1; its integral prime representative is unique.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "A Picard class is represented by a (−1)-curve iff D²=K·D=−1; its integral prime representative is unique.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "G"
      ],
      "details": "Distinct prime curves have nonnegative mutual intersection, contradicting the common class’s square −1. Uniqueness is equality of actual primes, hence of their ideal sheaves.",
      "leanDeclarations": [
        "DelPezzo.exceptionalClassStatement_proved"
      ],
      "evidence": [
        {
          "label": "exceptional-class-verification.json",
          "path": "projects/del-pezzo/audit/exceptional-class-verification.json",
          "commit": "f37e444",
          "kind": "verification",
          "date": "2026-11-25T15:31:42+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "exceptional-effective",
        "negative",
        "anti-one"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Proposition 2.20"
    },
    {
      "id": "cubic-geometry",
      "title": "A smooth cubic is a degree-three del Pezzo",
      "statement": "A supplied smooth cubic in P³ is a smooth integral del Pezzo with −K=O(1), h⁰(−K)=4 and K²=3.",
      "hypotheses": [
        "A nonzero homogeneous cubic over the original algebraically closed characteristic-zero field, with smooth zero scheme and its supplied embedding."
      ],
      "conclusion": "A supplied smooth cubic in P³ is a smooth integral del Pezzo with −K=O(1), h⁰(−K)=4 and K²=3.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "G"
      ],
      "details": "Hypersurface cohomology gives constants and integrality; conormal adjunction and the Euler sequence give the actual polarization; RR gives degree three.",
      "leanDeclarations": [
        "DelPezzo.CubicLines.smoothCubicEquation_geometry",
        "DelPezzo.CubicLines.cubicEquation_canonicalSquare"
      ],
      "evidence": [
        {
          "label": "cubic-lines-hypersurface-build.json",
          "path": "projects/del-pezzo/audit/cubic-lines-hypersurface-build.json",
          "commit": "963345b",
          "kind": "verification",
          "date": "2026-11-25T16:38:15+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "canonical",
        "rr"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "six-picard",
      "title": "Six-point model and full Picard isometry",
      "statement": "Every supplied smooth cubic has a six-point plane model whose full Picard pairing is diag(1,−1,…,−1) and K=−3H+ΣEᵢ.",
      "hypotheses": [
        "A smooth cubic as in the supplied embedding theorem."
      ],
      "conclusion": "Every supplied smooth cubic has a six-point plane model whose full Picard pairing is diag(1,−1,…,−1) and K=−3H+ΣEᵢ.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "G"
      ],
      "details": "Classification excludes the degree-eight quadric and forces r=6. Iterated point-blowup Picard decompositions identify the full pairing and canonical functional, not only formal lattice symbols.",
      "leanDeclarations": [
        "DelPezzo.cubicLines_picardCoordinates"
      ],
      "evidence": [
        {
          "label": "CUBIC-LINES.md",
          "path": "projects/del-pezzo/audit/CUBIC-LINES.md",
          "commit": "4122bbc",
          "kind": "report",
          "date": "2026-11-25T16:55:12+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "classification",
        "cubic-geometry",
        "blowup-formula"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "lattice27",
      "title": "Exactly 27 exceptional lattice classes",
      "statement": "The equations Σmᵢ²=d²+1 and Σmᵢ=3d−1 have exactly 27 integral solutions: 6 exceptional, 15 pair-lines and 6 five-point conics.",
      "hypotheses": [
        "The integer lattice ℤ×(Fin 6→ℤ) with the two displayed equations."
      ],
      "conclusion": "The equations Σmᵢ²=d²+1 and Σmᵢ=3d−1 have exactly 27 integral solutions: 6 exceptional, 15 pair-lines and 6 five-point conics.",
      "status": "verified",
      "origin": "mixed",
      "panels": [
        "G",
        "H"
      ],
      "details": "Mathlib Cauchy forces d=0,1,2; coordinates are the appropriate signed indicators, and subsets of sizes 1,2,5 are enumerated.",
      "leanDeclarations": [
        "DelPezzo.CubicLines.fin27_equiv_exceptionalNumbers"
      ],
      "evidence": [
        {
          "label": "cubic-lines-verification.json",
          "path": "projects/del-pezzo/audit/cubic-lines-verification.json",
          "commit": "f70bfe2",
          "kind": "verification",
          "date": "2026-11-25T15:50:11+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [],
      "alternativeDependencies": []
    },
    {
      "id": "exceptional27",
      "title": "Exactly 27 actual exceptional primes",
      "statement": "The finite lattice enumeration and full Picard criterion give a bijection Fin 27 with all actual exceptional prime divisors.",
      "hypotheses": [
        "A degree-three del Pezzo with the actual six-point model."
      ],
      "conclusion": "The finite lattice enumeration and full Picard criterion give a bijection Fin 27 with all actual exceptional prime divisors.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "G"
      ],
      "details": "",
      "leanDeclarations": [
        "DelPezzo.CubicLines.fin27_equiv_exceptionalPrimes"
      ],
      "evidence": [
        {
          "label": "CUBIC-LINES.md",
          "path": "projects/del-pezzo/audit/CUBIC-LINES.md",
          "commit": "4122bbc",
          "kind": "report",
          "date": "2026-11-25T16:55:12+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "six-picard",
        "lattice27",
        "exceptional"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "line-bridge",
      "title": "Exceptional primes are embedded linear lines",
      "statement": "Exceptional primes correspond bijectively to the linear line ideal sheaves contained in the original cubic embedding.",
      "hypotheses": [
        "The actual supplied smooth cubic embedding into polynomial P³."
      ],
      "conclusion": "Exceptional primes correspond bijectively to the linear line ideal sheaves contained in the original cubic embedding.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "G"
      ],
      "details": "Degree one of the restricted hyperplane on P¹ forces linearity; conversely, a contained linear line has the degree-one polarization and adjunction gives an exceptional prime.",
      "leanDeclarations": [
        "DelPezzo.CubicLines.minusOneCurveEquivLinearLine"
      ],
      "evidence": [
        {
          "label": "cubic-lines-verification.json",
          "path": "projects/del-pezzo/audit/cubic-lines-verification.json",
          "commit": "fc6f8e1",
          "kind": "verification",
          "date": "2026-11-25T17:32:55+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "cubic-geometry",
        "exceptional"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "lines27",
      "title": "Every smooth cubic contains exactly 27 lines",
      "statement": "The entire type of contained embedded linear line ideals is equivalent to Fin 27, with an injective family and actual scheme-theoretic containment.",
      "hypotheses": [
        "Every smooth supplied cubic surface over an algebraically closed characteristic-zero field, arbitrary universe u."
      ],
      "conclusion": "The entire type of contained embedded linear line ideals is equivalent to Fin 27, with an injective family and actual scheme-theoretic containment.",
      "status": "verified",
      "origin": "project",
      "panels": [
        "G"
      ],
      "details": "Counts distinct embedded closed linear subschemes, not only divisor classes or abstract copies of P¹. The normal public build and separate direct Lean replay agree.",
      "leanDeclarations": [
        "DelPezzo.twentySevenLinesStatement_proved",
        "DelPezzo.exists_twentySeven_distinct_lines"
      ],
      "evidence": [
        {
          "label": "cubic-lines-verification.json",
          "path": "projects/del-pezzo/audit/cubic-lines-verification.json",
          "commit": "fc6f8e1",
          "kind": "verification",
          "date": "2026-11-25T17:32:55+08:00"
        }
      ],
      "caveats": [],
      "dependencies": [
        "exceptional27",
        "line-bridge"
      ],
      "alternativeDependencies": [],
      "bookSection": "Chapter 2 · Theorem 2.21"
    },
    {
      "id": "models-extension",
      "title": "Extension: all-degree anticanonical models",
      "statement": "Package the unrestricted anticanonical maps and section rings for all del Pezzo degrees, including the degree-one and degree-two special geometry.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "Package the unrestricted anticanonical maps and section rings for all del Pezzo degrees, including the degree-one and degree-two special geometry.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "H"
      ],
      "details": "Scoped weighted and cubic constructions occur inside the Castelnuovo proof; they do not by themselves provide this broader all-degree API.",
      "leanDeclarations": [],
      "evidence": [],
      "caveats": [
        "Not needed to complete the already verified classification theorem.",
        "Open means not assembled as this endpoint in the inspected project."
      ],
      "dependencies": [
        "classification",
        "pluri",
        "cohom",
        "low-degree"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "counts-extension",
      "title": "Extension: exceptional-curve counts in every degree",
      "statement": "Extend the cubic lattice/prime correspondence to an explicit all-degree count and incidence graph of exceptional curves.",
      "hypotheses": [
        "X is a smooth projective integral surface over an algebraically closed field k of characteristic zero, at arbitrary Lean universe u. Its actual anticanonical invertible sheaf is ample."
      ],
      "conclusion": "Extend the cubic lattice/prime correspondence to an explicit all-degree count and incidence graph of exceptional curves.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "H"
      ],
      "details": "The class-recognition theorem is reusable; only the cubic’s exhaustive 27-class enumeration and embedded-line bridge are claimed here.",
      "leanDeclarations": [],
      "evidence": [],
      "caveats": [
        "This is an optional extension, not a missing premise of Theorem 2.19."
      ],
      "dependencies": [
        "classification",
        "exceptional",
        "lattice27"
      ],
      "alternativeDependencies": []
    },
    {
      "id": "fields-extension",
      "title": "Extension: arithmetic and positive characteristic",
      "statement": "State and verify separately the appropriate classification results over nonclosed fields or in positive characteristic.",
      "hypotheses": [
        "A separately specified arithmetic or positive-characteristic ground field."
      ],
      "conclusion": "State and verify separately the appropriate classification results over nonclosed fields or in positive characteristic.",
      "status": "planned",
      "origin": "unassigned",
      "panels": [
        "H"
      ],
      "details": "The present final endpoints retain algebraic closure and characteristic zero; no transfer to these settings is implied.",
      "leanDeclarations": [],
      "evidence": [],
      "caveats": [
        "Scope must be chosen before a proof campaign; the present theorem does not claim these extensions."
      ],
      "dependencies": [],
      "alternativeDependencies": []
    }
  ],
  "references": [
    {
      "label": "Local del Pezzo project verification",
      "path": "projects/del-pezzo/audit/CLASSIFICATION.md"
    },
    {
      "label": "Book chapter",
      "path": "book/chapters/del-pezzo-surfaces.tex"
    },
    {
      "label": "Mathlib",
      "url": "https://github.com/leanprover-community/mathlib4"
    },
    {
      "label": "AxiomMath/Stacks",
      "url": "https://github.com/AxiomMath/Stacks"
    },
    {
      "label": "AxiomMath/MMP",
      "url": "https://github.com/AxiomMath/MMP"
    }
  ]
};
