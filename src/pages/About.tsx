import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const conditions = [
  {
    name: "Acne",
    description:
      "Comprehensive acne management using evidence-based topical, oral, and in-clinic therapies.",
    fullText: `Acne vulgaris is one of the most common skin conditions, affecting both teenagers and adults. It develops when pores become clogged with oil and dead skin cells, leading to blackheads, whiteheads, pimples, or cysts.

Effective management begins with a simple skincare routine — gentle cleansing, oil-free moisturisers, and non-comedogenic sunscreen.`,
    treatments: [
      {
        category: "First-line (topical) treatments",
        items: [
          "Retinoids – Retrieve® (tretinoin), Differin® (adapalene)",
          "Benzoyl Peroxide – Benzac® AC Gel, Benzac Daily Cleanser",
          "Combination Gels – Duac® Gel (clindamycin + benzoyl peroxide), Epiduo® (adapalene + benzoyl peroxide)",
          "Azelaic / Salicylic Acid – The Ordinary Azelaic 10%, La Roche-Posay Effaclar Duo+, CeraVe SA Cleanser"
        ]
      },
      {
        category: "Moderate to severe acne (oral medications)",
        items: [
          "Antibiotics – doxycycline, minocycline, erythromycin",
          "Hormonal therapy (in females) – Yasmin®, Diane-35®, spironolactone",
          "Oral isotretinoin – Oratane®, Roaccutane®, Dermatane® (specialist-supervised)"
        ]
      },
      {
        category: "Adjunctive and supportive options",
        items: [
          "Non-comedogenic skincare (Cetaphil®, QV®, CeraVe®, La Roche-Posay®)",
          "Chemical peels, LED light or laser therapy",
          "Microneedling or fractional laser for acne scars"
        ]
      }
    ],
    footer: "Long-term maintenance with a low-strength topical retinoid helps prevent relapse. Early treatment not only prevents scarring but also restores skin health, confidence, and quality of life.",
    disclaimer: "Information provided for general education only and does not replace medical advice. Always consult a GP or dermatologist for personalised care."
  },
  {
    name: "Rosacea",
    description: "Management of facial redness, flushing, and associated symptoms",
    fullText: "Rosacea is a chronic inflammatory facial disorder with persistent erythema, flushing, telangiectasia and/or inflammatory papules–pustules. Consistent daily care and trigger control are key.",
    treatments: [
      {
        category: "General measures & skincare",
        items: [
          "Identify triggers (heat, sun, alcohol, spicy food, stress).",
          "Gentle, fragrance-free cleanser and moisturiser for sensitive skin.",
          "Daily SPF50+ for sensitive/redness-prone skin."
        ]
      },
      {
        category: "Topical therapies",
        items: [
          "Metronidazole 0.75–1% (Rozex®) or azelaic acid 15–20% (Finacea®, Azclear®).",
          "Ivermectin 1% cream (Soolantra®) for papulopustular disease.",
          "Brimonidine 0.33% gel (Mirvaso®) for persistent erythema (short-acting vasoconstrictor)."
        ]
      },
      {
        category: "Oral options",
        items: [
          "Doxycycline 50–100 mg daily (anti-inflammatory dose) 6–12 weeks.",
          "Low-dose isotretinoin for refractory cases (specialist-supervised)."
        ]
      },
      {
        category: "Procedural & adjuncts",
        items: [
          "Vascular laser / IPL for telangiectasia and background redness.",
          "Camouflage (green tint) and skincare education."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care from a GP/dermatologist."
  },
  {
    name: "Eczema",
    description: "Treatment of atopic dermatitis and contact dermatitis",
    fullText: "Eczema is a chronic, relapsing, pruritic dermatitis with barrier dysfunction and type-2 inflammation.",
    treatments: [
      {
        category: "Skin care & prevention",
        items: [
          "Liberal, regular emollients/ointments (QV®, CeraVe®, Dermeze®).",
          "Short lukewarm showers; soap-free cleansers; cotton clothing; trigger minimisation."
        ]
      },
      {
        category: "Topicals",
        items: [
          "Topical corticosteroids by site/severity (hydrocortisone 1% face; mometasone/betamethasone for body flares).",
          "Calcineurin inhibitors (tacrolimus/Protopic®, pimecrolimus/Elidel®) as steroid-sparing, especially face/flexures.",
          "Antiseptics/antibiotics if secondary infection."
        ]
      },
      {
        category: "Systemic/specialist",
        items: [
          "Short oral steroids for severe flares only.",
          "Antihistamines for nocturnal itch.",
          "Moderate–severe refractory: phototherapy, dupilumab (Dupixent®), or other immunomodulators under specialist care."
        ]
      },
      {
        category: "Contact overlap",
        items: [
          "Consider patch testing if suspicion of allergic contact dermatitis."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care."
  },
  {
    name: "Contact Dermatitis",
    description: "Diagnosis and management of allergic and irritant reactions",
    fullText: "Contact dermatitis may be irritant (most common) or allergic (type IV hypersensitivity). History, distribution, and exposures guide diagnosis.",
    treatments: [
      {
        category: "General measures",
        items: [
          "Identify/avoid irritants and allergens (soaps, wet work, nickel, fragrances, preservatives).",
          "Barrier repair with frequent emollients; protective gloves and hand-care routines."
        ]
      },
      {
        category: "Treatment",
        items: [
          "Topical corticosteroids matched to site/severity; short courses only on face/flexures.",
          "Calcineurin inhibitors as steroid-sparing on sensitive sites.",
          "Secondary infection: treat appropriately."
        ]
      },
      {
        category: "Diagnosis confirmation",
        items: [
          "Refer for patch testing when allergic contact dermatitis suspected or dermatitis persists despite avoidance."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care."
  },
  {
    name: "Psoriasis",
    description: "Treatment plans for plaque psoriasis and other variants",
    fullText: "Psoriasis is an immune-mediated disease with well-demarcated erythematous plaques and silvery scale; nails and joints may be involved.",
    treatments: [
      {
        category: "Topical first-line",
        items: [
          "Vitamin D analogue + potent steroid combinations (calcipotriol/betamethasone: Dovobet®, Enstilar®) once daily.",
          "Alternatives/adjuncts: calcipotriol alone, coal tar, salicylic acid (for scale)."
        ]
      },
      {
        category: "Phototherapy",
        items: [
          "Narrowband UVB under specialist supervision for widespread disease or topical-refractory plaques."
        ]
      },
      {
        category: "Systemic therapy (specialist)",
        items: [
          "Conventional: methotrexate, cyclosporin, acitretin.",
          "Biologics/targeted: TNF-α, IL-17, IL-23 inhibitors per criteria and screening."
        ]
      },
      {
        category: "Support",
        items: [
          "Screen for psoriatic arthritis; address cardiometabolic risk; optimise emollients."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care."
  },
  {
    name: "Seborrhoeic Dermatitis",
    description: "Management of scalp and facial seborrhoeic dermatitis",
    fullText: "Chronic dermatosis driven by Malassezia yeast with erythematous, flaky plaques on scalp, eyebrows, nasolabial folds, beard, and chest.",
    treatments: [
      {
        category: "First-line",
        items: [
          "Antifungal shampoos/creams: ketoconazole 2% shampoo/cream; selenium sulfide or zinc pyrithione shampoos (2–3×/week).",
          "Gentle cleanser; avoid irritants."
        ]
      },
      {
        category: "Anti-inflammatory",
        items: [
          "Low-potency topical corticosteroid (hydrocortisone 1%) short courses for facial flares.",
          "Topical calcineurin inhibitors (pimecrolimus/tacrolimus) as steroid-sparing for sensitive sites."
        ]
      },
      {
        category: "Scalp protocol",
        items: [
          "Keratolytics (salicylic acid) to lift scale; rotate medicated shampoos; consider short steroid lotion for itch."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care."
  },
  {
    name: "Fungal Infections",
    description: "Treatment of tinea, ringworm, and other fungal conditions",
    fullText: "Dermatophyte infections present with annular, scaly, often pruritic plaques (body/groin/feet) or nail dystrophy.",
    treatments: [
      {
        category: "Topical first-line (skin)",
        items: [
          "Terbinafine 1% or an azole (clotrimazole, miconazole). Continue 1 week after clearing."
        ]
      },
      {
        category: "Oral therapy",
        items: [
          "Consider for extensive disease, involvement of hair/nails, or failure of topicals.",
          "Terbinafine for onychomycosis (≈6–8 weeks fingernails; 3–4 months toenails)."
        ]
      },
      {
        category: "Adjuncts",
        items: [
          "Keep skin dry; treat predisposing factors; avoid steroid-antifungal fixed combos unless short-term for inflamed tinea."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care."
  },
  {
    name: "Urticaria (Hives)",
    description: "Assessment and management of acute and chronic urticaria",
    fullText: "Wheals and/or angioedema lasting <24 h per lesion; chronic spontaneous urticaria if >6 weeks.",
    treatments: [
      {
        category: "First-line",
        items: [
          "Daily non-sedating H1 antihistamine (cetirizine, loratadine, fexofenadine)."
        ]
      },
      {
        category: "If inadequate control",
        items: [
          "Up-dose the same antihistamine up to 4× standard dose (off-label).",
          "Consider montelukast or short oral steroid rescue for severe flares only."
        ]
      },
      {
        category: "Refractory",
        items: [
          "Omalizumab (specialist-initiated) per guideline pathways."
        ]
      },
      {
        category: "Red flags",
        items: [
          "Suspected anaphylaxis → emergency management."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care."
  },
  {
    name: "Warts",
    description: "Treatment options for common, plantar, and other wart types",
    fullText: "Benign HPV-induced lesions; many resolve spontaneously but can persist for years.",
    treatments: [
      {
        category: "First-line home/clinic",
        items: [
          "Topical salicylic acid (17–40%) with regular paring/occlusion for weeks.",
          "Cryotherapy (liquid nitrogen) every 2–4 weeks for suitable lesions."
        ]
      },
      {
        category: "Other options (selected cases)",
        items: [
          "Cantharidin, curettage, or immunotherapy for recalcitrant warts."
        ]
      },
      {
        category: "Support",
        items: [
          "Manage expectations: multiple sessions often needed; periungual/plantar lesions can be stubborn."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care."
  },
  {
    name: "Actinic Keratoses",
    description: "Treatment of sun-damaged skin lesions",
    fullText: "Sun-induced keratinocytic dysplasia with potential to progress to SCC; treat lesions and the field of sun damage.",
    treatments: [
      {
        category: "Lesion-directed",
        items: [
          "Cryotherapy for isolated AKs; curettage in select sites."
        ]
      },
      {
        category: "Field therapy",
        items: [
          "5-fluorouracil (5% or 4%), imiquimod (5% or 3.75%), photodynamic therapy, or diclofenac 3% gel.",
          "Rigorous sun protection and skin surveillance."
        ]
      },
      {
        category: "Safety note",
        items: [
          "Ingenol mebutate (Picato®) withdrawn due to malignancy risk; avoid."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care."
  },
  {
    name: "Seborrhoeic Keratoses",
    description: "Assessment of benign skin growths",
    fullText: "Very common benign \"stuck-on\" keratinocytic lesions; treatment is cosmetic unless irritated or diagnostic doubt exists.",
    treatments: [
      {
        category: "Management",
        items: [
          "Reassurance when classic.",
          "Removal options if symptomatic/cosmetic: curettage, cryotherapy, or electrosurgery."
        ]
      },
      {
        category: "When to refer/biopsy",
        items: [
          "Atypical features, rapid change, or diagnostic uncertainty."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care."
  },
  {
    name: "Benign Moles",
    description: "Evaluation and monitoring of benign pigmented lesions",
    fullText: "Common benign melanocytic naevi; most stable over years.",
    treatments: [
      {
        category: "Monitoring & patient education",
        items: [
          "Teach ABCDE and \"new or changing\" warning signs; prompt review if change or outlier lesion.",
          "Dermoscopy improves accuracy; baseline photos assist."
        ]
      },
      {
        category: "When to biopsy/refer",
        items: [
          "Evolution, asymmetry, irregular network/colour, nodularity, or any clinician concern."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care."
  },
  {
    name: "Skin Infections",
    description: "Diagnosis and treatment of bacterial skin infections",
    fullText: "Spectrum includes impetigo, folliculitis, and cellulitis.",
    treatments: [
      {
        category: "Impetigo",
        items: [
          "Localised: topical mupirocin; oral if extensive.",
          "Hygiene measures and decolonisation if recurrent."
        ]
      },
      {
        category: "Cellulitis",
        items: [
          "Oral flucloxacillin/dicloxacillin or cephalexin in mild cases; escalate if systemic.",
          "Drain abscesses when indicated."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care."
  },
  {
    name: "Perioral Dermatitis",
    description: "Management of facial rash around the mouth",
    fullText: "Papulopustular eruption around mouth/nose/eyes; often triggered by topical steroids or heavy cosmetics.",
    treatments: [
      {
        category: "Key step",
        items: [
          "Cease facial topical steroids (taper if potent) and simplify skincare (gentle cleanser, non-comedogenic moisturiser, SPF)."
        ]
      },
      {
        category: "Topical options",
        items: [
          "Metronidazole, erythromycin, azelaic acid, or pimecrolimus/tacrolimus."
        ]
      },
      {
        category: "Oral options",
        items: [
          "Doxycycline or other tetracyclines for 6–8 weeks in moderate–severe disease."
        ]
      },
      {
        category: "Tips",
        items: [
          "Expect transient rebound after stopping steroids; avoid heavy occlusive cosmetics."
        ]
      }
    ],
    disclaimer: "Educational only; seek individualised care."
  },
];

const DermatologyPage = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConditions = conditions.filter(condition =>
    condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    condition.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-sage-dark">NovaSkin</div>
            <div className="flex gap-6">
              <a href="/" className="text-charcoal hover:text-sage-dark">Home</a>
              <a href="/services" className="text-charcoal hover:text-sage-dark">Services</a>
              <a href="/about" className="text-charcoal hover:text-sage-dark">About</a>
              <a href="/contact" className="text-charcoal hover:text-sage-dark">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-charcoal mb-6">
              Dermatology Services
            </h1>
            <p className="text-xl text-foreground">
              Comprehensive management of common skin conditions with 
              evidence-based treatments and personalized care
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search conditions (e.g., acne, eczema, rosacea...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-full focus:border-emerald-400 focus:outline-none text-slate-700 placeholder-slate-400"
            />
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
              Conditions We Treat
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredConditions.map((condition, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer bg-white border-2 ${
                    expanded === index 
                      ? 'shadow-2xl border-emerald-400' 
                      : 'shadow-md hover:shadow-xl border-slate-200 hover:border-emerald-300'
                  }`}
                  onClick={() => setExpanded(expanded === index ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors pr-2">
                        {condition.name}
                      </h3>
                      <div className={`flex-shrink-0 transition-transform duration-300 ${expanded === index ? 'rotate-180' : ''}`}>
                        {expanded === index ? (
                          <ChevronUp className="w-6 h-6 text-emerald-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-emerald-600" />
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {condition.description}
                    </p>

                    {expanded === index && (
                      <div className="mt-6 pt-6 border-t-2 border-slate-100 space-y-6">
                        {/* Overview */}
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {condition.fullText}
                          </p>
                        </div>

                        {/* Treatment Sections */}
                        {condition.treatments?.map((section, idx) => (
                          <div key={idx}>
                            <h4 className="font-bold text-slate-800 mb-3 text-base">
                              {section.category}
                            </h4>
                            <ul className="space-y-2">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start">
                                  <span className="text-emerald-500 mr-2 mt-1 flex-shrink-0">●</span>
                                  <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {/* Footer */}
                        {condition.footer && (
                          <div className="bg-emerald-50 p-4 rounded-lg">
                            <p className="text-sm text-slate-700 leading-relaxed">
                              {condition.footer}
                            </p>
                          </div>
                        )}

                        {/* Disclaimer */}
                        <div className="pt-4 border-t border-slate-200">
                          <p className="text-xs text-slate-500 italic">
                            {condition.disclaimer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform origin-left transition-transform duration-300 ${
                    expanded === index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></div>
                </div>
              ))}
            </div>

            {filteredConditions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">No conditions found matching "{searchTerm}"</p>
              </div>
            )}

            <div className="bg-sage-light p-8 rounded-lg text-center">
              <p className="text-lg text-foreground mb-4">
                This list continues to grow as NovaSkin expands its dermatology services.
              </p>
              <p className="text-foreground">
                If you have a skin condition not listed here, please contact us to discuss 
                whether we can help or provide appropriate referrals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
              Our Approach to Dermatology Care
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-charcoal">1</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Thorough Assessment
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive evaluation to accurately diagnose your skin condition
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-charcoal">2</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Personalized Treatment
                </h3>
                <p className="text-muted-foreground">
                  Evidence-based treatment plans tailored to your specific needs
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-charcoal">3</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Ongoing Support
                </h3>
                <p className="text-muted-foreground">
                  Follow-up care to ensure treatment effectiveness and adjust as needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Need Help with a Skin Condition?
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Book an appointment to discuss your dermatology concerns with Dr Premila Hewage
          </p>
          <button className="bg-charcoal text-white px-8 py-3 rounded-md font-semibold hover:bg-charcoal/90 transition-colors">
            Book Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NovaSkin</h3>
              <p className="text-white/80">Comprehensive dermatology services</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a href="/" className="text-white/80 hover:text-white">Home</a>
                <a href="/services" className="text-white/80 hover:text-white">Services</a>
                <a href="/about" className="text-white/80 hover:text-white">About</a>
                <a href="/contact" className="text-white/80 hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-white/80">Melbourne, Victoria, AU</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
            <p>&copy; 2024 NovaSkin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DermatologyPage;
