import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const conditions = [
  {
    name: "Acne",
    description:
      "Comprehensive acne management using evidence-based topical, oral, and in-clinic therapies.",
    fullText: `
Acne vulgaris is one of the most common skin conditions, affecting both teenagers and adults. 
It develops when pores become clogged with oil and dead skin cells, leading to blackheads, whiteheads, pimples, or cysts.

Effective management begins with a simple skincare routine — gentle cleansing, oil-free moisturisers, and non-comedogenic sunscreen.  

<strong>First-line (topical) treatments</strong>
• Retinoids – Retrieve® (tretinoin), Differin® (adapalene)  
• Benzoyl Peroxide – Benzac® AC Gel, Benzac Daily Cleanser  
• Combination Gels – Duac® Gel (clindamycin + benzoyl peroxide), Epiduo® (adapalene + benzoyl peroxide)  
• Azelaic / Salicylic Acid – The Ordinary Azelaic 10%, La Roche-Posay Effaclar Duo+, CeraVe SA Cleanser  

<strong>Moderate to severe acne (oral medications)</strong>
• Antibiotics – doxycycline, minocycline, erythromycin  
• Hormonal therapy (in females) – Yasmin®, Diane-35®, spironolactone  
• Oral isotretinoin – Oratane®, Roaccutane®, Dermatane® (specialist-supervised)

<strong>Adjunctive and supportive options</strong>
• Non-comedogenic skincare (Cetaphil®, QV®, CeraVe®, La Roche-Posay®)  
• Chemical peels, LED light or laser therapy  
• Microneedling or fractional laser for acne scars  

Long-term maintenance with a low-strength topical retinoid helps prevent relapse.  
Early treatment not only prevents scarring but also restores skin health, confidence, and quality of life.

<i>Information provided for general education only and does not replace medical advice. Always consult a GP or dermatologist for personalised care.</i>
`,
  },
  {
    name: "Rosacea",
    description: "Management of facial redness, flushing, and associated symptoms",
    fullText: `
Rosacea is a chronic inflammatory facial disorder with persistent erythema, flushing, telangiectasia and/or inflammatory papules–pustules. Consistent daily care and trigger control are key.

<strong>General measures & skincare</strong>  
• Identify triggers (heat, sun, alcohol, spicy food, stress).  
• Gentle, fragrance-free cleanser and moisturiser for sensitive skin.  
• Daily SPF50+ for sensitive/redness-prone skin.

<strong>Topical therapies</strong>  
• Metronidazole 0.75–1% (Rozex®) or azelaic acid 15–20% (Finacea®, Azclear®).  
• Ivermectin 1% cream (Soolantra®) for papulopustular disease.  
• Brimonidine 0.33% gel (Mirvaso®) for persistent erythema (short-acting vasoconstrictor).

<strong>Oral options</strong>  
• Doxycycline 50–100 mg daily (anti-inflammatory dose) 6–12 weeks.  
• Low-dose isotretinoin for refractory cases (specialist-supervised).

<strong>Procedural & adjuncts</strong>  
• Vascular laser / IPL for telangiectasia and background redness.  
• Camouflage (green tint) and skincare education.

<i>Educational only; seek individualised care from a GP/dermatologist.</i>
`,
  },
  {
    name: "Eczema",
    description: "Treatment of atopic dermatitis and contact dermatitis",
    fullText: `
Eczema is a chronic, relapsing, pruritic dermatitis with barrier dysfunction and type-2 inflammation.

<strong>Skin care & prevention</strong>  
• Liberal, regular emollients/ointments (QV®, CeraVe®, Dermeze®).  
• Short lukewarm showers; soap-free cleansers; cotton clothing; trigger minimisation.

<strong>Topicals</strong>  
• Topical corticosteroids by site/severity (hydrocortisone 1% face; mometasone/betamethasone for body flares).  
• Calcineurin inhibitors (tacrolimus/Protopic®, pimecrolimus/Elidel®) as steroid-sparing, especially face/flexures.  
• Antiseptics/antibiotics if secondary infection.

<strong>Systemic/specialist</strong>  
• Short oral steroids for severe flares only.  
• Antihistamines for nocturnal itch.  
• Moderate–severe refractory: phototherapy, dupilumab (Dupixent®), or other immunomodulators under specialist care.

<strong>Contact overlap</strong>  
• Consider patch testing if suspicion of allergic contact dermatitis.

<i>Educational only; seek individualised care.</i>
`,
  },
  {
    name: "Contact Dermatitis",
    description: "Diagnosis and management of allergic and irritant reactions",
    fullText: `
Contact dermatitis may be <strong>irritant</strong> (most common) or <strong>allergic</strong> (type IV hypersensitivity). History, distribution, and exposures guide diagnosis.

<strong>General measures</strong>  
• Identify/avoid irritants and allergens (soaps, wet work, nickel, fragrances, preservatives).  
• Barrier repair with frequent emollients; protective gloves and hand-care routines.

<strong>Treatment</strong>  
• Topical corticosteroids matched to site/severity; short courses only on face/flexures.  
• Calcineurin inhibitors as steroid-sparing on sensitive sites.  
• Secondary infection: treat appropriately.

<strong>Diagnosis confirmation</strong>  
• Refer for <strong>patch testing</strong> when allergic contact dermatitis suspected or dermatitis persists despite avoidance.

<i>Educational only; seek individualised care.</i>
`,
  },
  {
    name: "Psoriasis",
    description: "Treatment plans for plaque psoriasis and other variants",
    fullText: `
Psoriasis is an immune-mediated disease with well-demarcated erythematous plaques and silvery scale; nails and joints may be involved.

<strong>Topical first-line</strong>  
• Vitamin D analogue + potent steroid combinations (calcipotriol/betamethasone: Dovobet®, Enstilar®) once daily.  
• Alternatives/adjuncts: calcipotriol alone, coal tar, salicylic acid (for scale).

<strong>Phototherapy</strong>  
• Narrowband UVB under specialist supervision for widespread disease or topical-refractory plaques.

<strong>Systemic therapy (specialist)</strong>  
• Conventional: methotrexate, cyclosporin, acitretin.  
• Biologics/targeted: TNF-α, IL-17, IL-23 inhibitors per criteria and screening.

<strong>Support</strong>  
• Screen for psoriatic arthritis; address cardiometabolic risk; optimise emollients.

<i>Educational only; seek individualised care.</i>
`,
  },
  {
    name: "Seborrhoeic Dermatitis",
    description: "Management of scalp and facial seborrhoeic dermatitis",
    fullText: `
Chronic dermatosis driven by Malassezia yeast with erythematous, flaky plaques on scalp, eyebrows, nasolabial folds, beard, and chest.

<strong>First-line</strong>  
• Antifungal shampoos/creams: ketoconazole 2% shampoo/cream; selenium sulfide or zinc pyrithione shampoos (2–3×/week).  
• Gentle cleanser; avoid irritants.

<strong>Anti-inflammatory</strong>  
• Low-potency topical corticosteroid (hydrocortisone 1%) short courses for facial flares.  
• Topical calcineurin inhibitors (pimecrolimus/tacrolimus) as steroid-sparing for sensitive sites.

<strong>Scalp protocol</strong>  
• Keratolytics (salicylic acid) to lift scale; rotate medicated shampoos; consider short steroid lotion for itch.

<i>Educational only; seek individualised care.</i>
`,
  },
  {
    name: "Fungal Infections",
    description: "Treatment of tinea, ringworm, and other fungal conditions",
    fullText: `
Dermatophyte infections present with annular, scaly, often pruritic plaques (body/groin/feet) or nail dystrophy.

<strong>Topical first-line (skin)</strong>  
• Terbinafine 1% or an azole (clotrimazole, miconazole). Continue 1 week after clearing.

<strong>Oral therapy</strong>  
• Consider for extensive disease, involvement of hair/nails, or failure of topicals.  
• Terbinafine for onychomycosis (≈6–8 weeks fingernails; 3–4 months toenails).

<strong>Adjuncts</strong>  
• Keep skin dry; treat predisposing factors; avoid steroid-antifungal fixed combos unless short-term for inflamed tinea.

<i>Educational only; seek individualised care.</i>
`,
  },
  {
    name: "Urticaria (Hives)",
    description: "Assessment and management of acute and chronic urticaria",
    fullText: `
Wheals and/or angioedema lasting <24 h per lesion; chronic spontaneous urticaria if >6 weeks.

<strong>First-line</strong>  
• Daily non-sedating H1 antihistamine (cetirizine, loratadine, fexofenadine).

<strong>If inadequate control</strong>  
• Up-dose the same antihistamine up to 4× standard dose (off-label).  
• Consider montelukast or short oral steroid rescue for severe flares only.

<strong>Refractory</strong>  
• Omalizumab (specialist-initiated) per guideline pathways.

<strong>Red flags</strong>  
• Suspected anaphylaxis → emergency management.

<i>Educational only; seek individualised care.</i>
`,
  },
  {
    name: "Warts",
    description: "Treatment options for common, plantar, and other wart types",
    fullText: `
Benign HPV-induced lesions; many resolve spontaneously but can persist for years.

<strong>First-line home/clinic</strong>  
• Topical salicylic acid (17–40%) with regular paring/occlusion for weeks.  
• Cryotherapy (liquid nitrogen) every 2–4 weeks for suitable lesions.

<strong>Other options (selected cases)</strong>  
• Cantharidin, curettage, or immunotherapy for recalcitrant warts.

<strong>Support</strong>  
• Manage expectations: multiple sessions often needed; periungual/plantar lesions can be stubborn.

<i>Educational only; seek individualised care.</i>
`,
  },
  {
    name: "Actinic Keratoses",
    description: "Treatment of sun-damaged skin lesions",
    fullText: `
Sun-induced keratinocytic dysplasia with potential to progress to SCC; treat lesions and the field of sun damage.

<strong>Lesion-directed</strong>  
• Cryotherapy for isolated AKs; curettage in select sites.

<strong>Field therapy</strong>  
• 5-fluorouracil (5% or 4%), imiquimod (5% or 3.75%), photodynamic therapy, or diclofenac 3% gel.  
• Rigorous sun protection and skin surveillance.

<strong>Safety note</strong>  
• Ingenol mebutate (Picato®) withdrawn due to malignancy risk; avoid.

<i>Educational only; seek individualised care.</i>
`,
  },
  {
    name: "Seborrhoeic Keratoses",
    description: "Assessment of benign skin growths",
    fullText: `
Very common benign “stuck-on” keratinocytic lesions; treatment is cosmetic unless irritated or diagnostic doubt exists.

<strong>Management</strong>  
• Reassurance when classic.  
• Removal options if symptomatic/cosmetic: curettage, cryotherapy, or electrosurgery.

<strong>When to refer/biopsy</strong>  
• Atypical features, rapid change, or diagnostic uncertainty.

<i>Educational only; seek individualised care.</i>
`,
  },
  {
    name: "Benign Moles",
    description: "Evaluation and monitoring of benign pigmented lesions",
    fullText: `
Common benign melanocytic naevi; most stable over years.

<strong>Monitoring & patient education</strong>  
• Teach ABCDE and “new or changing” warning signs; prompt review if change or outlier lesion.  
• Dermoscopy improves accuracy; baseline photos assist.

<strong>When to biopsy/refer</strong>  
• Evolution, asymmetry, irregular network/colour, nodularity, or any clinician concern.

<i>Educational only; seek individualised care.</i>
`,
  },
  {
    name: "Skin Infections",
    description: "Diagnosis and treatment of bacterial skin infections",
    fullText: `
Spectrum includes impetigo, folliculitis, and cellulitis.

<strong>Impetigo</strong>  
• Localised: topical mupirocin; oral if extensive.  
• Hygiene measures and decolonisation if recurrent.

<strong>Cellulitis</strong>  
• Oral flucloxacillin/dicloxacillin or cephalexin in mild cases; escalate if systemic.  
• Drain abscesses when indicated.

<i>Educational only; seek individualised care.</i>
`,
  },
  {
    name: "Perioral Dermatitis",
    description: "Management of facial rash around the mouth",
    fullText: `
Papulopustular eruption around mouth/nose/eyes; often triggered by topical steroids or heavy cosmetics.

<strong>Key step</strong>  
• Cease facial topical steroids (taper if potent) and simplify skincare (gentle cleanser, non-comedogenic moisturiser, SPF).

<strong>Topical options</strong>  
• Metronidazole, erythromycin, azelaic acid, or pimecrolimus/tacrolimus.

<strong>Oral options</strong>  
• Doxycycline or other tetracyclines for 6–8 weeks in moderate–severe disease.

<strong>Tips</strong>  
• Expect transient rebound after stopping steroids; avoid heavy occlusive cosmetics.

<i>Educational only; seek individualised care.</i>
`,
  },
];

const Dermatology = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpanded((current) => (current === index ? null : index));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

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

      {/* Conditions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
              Conditions We Treat
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {conditions.map((condition, index) => {
                const isOpen = expanded === index;
                return (
                  <Card
                    key={index}
                    className={`relative flex flex-col h-full border border-sage-light/60 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                      isOpen ? "ring-2 ring-sage-dark ring-offset-1" : ""
                    }`}
                    onClick={() => toggleCard(index)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg font-semibold text-sage-dark">
                            {condition.name}
                          </CardTitle>
                          <p className="text-xs uppercase tracking-wide text-muted-foreground/80 mt-1">
                            Dermatology care
                          </p>
                        </div>
                        <div className="mt-1 shrink-0 rounded-full bg-sage-light p-1.5">
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-sage-dark" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-sage-dark" />
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-2">
                        {condition.description}
                      </p>

                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                          isOpen ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div
                          className="rounded-md bg-sage-light/40 px-3 py-3 text-sm"
                        >
                          <div
                            className="
                              prose prose-sm max-w-none text-gray-800 
                              prose-strong:text-charcoal 
                              prose-em:text-charcoal 
                              prose-p:my-2 prose-li:my-1
                            "
                            style={{ whiteSpace: "pre-line" }}
                            dangerouslySetInnerHTML={{ __html: condition.fullText }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

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
          <Button
            variant="default"
            size="lg"
            className="bg-charcoal text-white hover:bg-charcoal/90"
            asChild
          >
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dermatology;
