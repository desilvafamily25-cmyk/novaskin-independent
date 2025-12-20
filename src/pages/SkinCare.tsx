import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Droplets, Sun, Sparkles, AlertCircle, Heart, Leaf, FlaskConical, Info, ChevronRight } from "lucide-react";

// Detailed ingredient data
const ingredientDetails: Record<string, {
  name: string;
  emoji: string;
  description: string;
  commonUses: string[];
  concentrations?: string[];
  maxStrength?: string;
  professionalUse?: string;
  importantNotes?: string;
}> = {
  // Prescription Retinoids
  "Tretinoin": {
    name: "Tretinoin",
    emoji: "✨",
    description: "Tretinoin is a prescription vitamin A derivative used in dermatology to treat acne and photoaged skin. It works by increasing skin cell turnover, reducing follicular plugging, and influencing collagen production over time.",
    commonUses: ["Acne", "Sun-damaged skin", "Uneven texture and tone"],
    concentrations: ["0.025%", "0.05%", "0.1%"],
    maxStrength: "0.1% (topical cream or gel)",
    importantNotes: "Tretinoin commonly causes dryness, redness, and irritation, especially during the first weeks of use. It should not be used during pregnancy and requires careful introduction under medical guidance."
  },
  "Adapalene": {
    name: "Adapalene",
    emoji: "💫",
    description: "Adapalene is a topical retinoid primarily used for acne. It regulates skin cell turnover and reduces comedone formation, with generally better tolerability than older retinoids.",
    commonUses: ["Comedonal and inflammatory acne"],
    concentrations: ["0.1%", "0.3%"],
    maxStrength: "0.3% (prescription)"
  },
  "Tazarotene": {
    name: "Tazarotene",
    emoji: "⚡",
    description: "Tazarotene is a prescription retinoid used for acne and psoriasis. It is effective but tends to be more irritating than other topical retinoids.",
    commonUses: ["Acne", "Psoriasis"],
    concentrations: ["0.05%", "0.1%"],
    maxStrength: "0.1%"
  },
  // Exfoliating Acids
  "Glycolic acid (AHA)": {
    name: "Glycolic Acid",
    emoji: "🍇",
    description: "Glycolic acid is an alpha hydroxy acid that exfoliates the skin surface, improving texture and brightness by reducing cohesion between dead skin cells.",
    commonUses: ["Dull or rough skin", "Mild hyperpigmentation", "Acne-prone skin"],
    concentrations: ["5–10% (leave-on products)"],
    professionalUse: "20–70% (chemical peels performed in clinical settings)",
    importantNotes: "There is no universal maximum concentration for cosmetic products, but higher concentrations significantly increase the risk of irritation and skin injury when used without medical supervision."
  },
  "Lactic acid (AHA)": {
    name: "Lactic Acid",
    emoji: "🥛",
    description: "Lactic acid is an alpha hydroxy acid with exfoliating and humectant properties. It is often better tolerated than glycolic acid in sensitive skin.",
    commonUses: ["Uneven texture", "Mild pigmentation", "Dry or sensitive skin"],
    concentrations: ["5–10% for home use"],
    professionalUse: "Higher concentrations used professionally under supervision"
  },
  "Salicylic acid (BHA)": {
    name: "Salicylic Acid",
    emoji: "🌿",
    description: "Salicylic acid is oil-soluble, allowing it to penetrate into pores. It has exfoliating and anti-inflammatory properties.",
    commonUses: ["Acne", "Blackheads", "Oily skin"],
    concentrations: ["0.5–2% (OTC acne treatment)"],
    maxStrength: "2% (for acne treatment)",
    professionalUse: "Commonly 20–30% for professional peels"
  },
  // Barrier-Supporting
  "Ceramides": {
    name: "Ceramides",
    emoji: "🛡️",
    description: "Ceramides are naturally occurring lipids in the outer layer of the skin. They play a critical role in maintaining the skin barrier and preventing moisture loss.",
    commonUses: ["Dry skin", "Eczema-prone skin", "Barrier repair during active treatments"],
    importantNotes: "There is no standardized or maximum percentage. Ceramides are typically formulated as part of a lipid blend."
  },
  "Cholesterol": {
    name: "Cholesterol",
    emoji: "🔬",
    description: "Cholesterol is a key structural lipid in the stratum corneum. When combined with ceramides and fatty acids, it helps restore barrier integrity.",
    commonUses: ["Barrier repair", "Compromised or irritated skin"],
    importantNotes: "No standardized or maximum percentage; used in physiologic lipid ratios."
  },
  "Fatty acids": {
    name: "Fatty Acids",
    emoji: "💧",
    description: "Free fatty acids are essential components of the skin barrier and work synergistically with ceramides and cholesterol.",
    commonUses: ["Dry or inflamed skin", "Barrier dysfunction"],
    importantNotes: "No standardized or maximum percentage."
  },
  // Anti-Inflammatory
  "Niacinamide": {
    name: "Niacinamide (Vitamin B3)",
    emoji: "💎",
    description: "Niacinamide is a multifunctional ingredient that supports barrier function, reduces inflammation, and can help regulate oil production.",
    commonUses: ["Acne-prone skin", "Redness", "Barrier support"],
    concentrations: ["2–5% (evidence-based)"],
    importantNotes: "Higher concentrations are sometimes used, but there is no universally defined maximum for cosmetic products."
  },
  "Panthenol": {
    name: "Panthenol (Pro-Vitamin B5)",
    emoji: "🌸",
    description: "Panthenol is a humectant and skin-conditioning agent that improves skin comfort and supports barrier recovery.",
    commonUses: ["Dry or irritated skin", "Post-treatment care"],
    concentrations: ["1–5%"],
    maxStrength: "Approximately 5.3% in leave-on products"
  },
  "Allantoin": {
    name: "Allantoin",
    emoji: "🌱",
    description: "Allantoin is a skin protectant that soothes irritation and supports skin healing.",
    commonUses: ["Sensitive or irritated skin", "Barrier support"],
    concentrations: ["0.5–2% (OTC skin protectant)"],
    maxStrength: "2%"
  },
  "Centella asiatica": {
    name: "Centella Asiatica",
    emoji: "🍃",
    description: "Centella asiatica is a botanical ingredient used for its soothing and barrier-supportive properties. Some extracts contain triterpenes such as madecassoside.",
    commonUses: ["Sensitive skin", "Redness", "Barrier support"],
    concentrations: ["Up to approximately 0.5% extract in leave-on products"],
    professionalUse: "1–2% titrated extract in specific medical formulations"
  },
  // Pigment-Modulating
  "Azelaic acid": {
    name: "Azelaic Acid",
    emoji: "🌾",
    description: "Azelaic acid is a dicarboxylic acid used in dermatology for acne, rosacea-related inflammation, and hyperpigmentation.",
    commonUses: ["Acne", "Rosacea-prone skin", "Hyperpigmentation"],
    concentrations: ["15% (prescription strength)"],
    importantNotes: "Lower strengths are commonly used in non-prescription products, but prescription formulations have the strongest evidence base."
  },
  "Vitamin C": {
    name: "Vitamin C (Ascorbic Acid)",
    emoji: "🍊",
    description: "Vitamin C is a topical antioxidant that supports collagen synthesis and helps improve uneven tone and signs of sun damage.",
    commonUses: ["Photoaged skin", "Uneven pigmentation"],
    concentrations: ["10–20% (commonly effective)"],
    importantNotes: "Concentrations above 20% have not consistently shown additional benefit and may increase irritation."
  },
  "Tranexamic acid": {
    name: "Tranexamic Acid",
    emoji: "✨",
    description: "Tranexamic acid is used topically for pigment disorders, particularly melasma, by influencing pathways involved in melanocyte activation.",
    commonUses: ["Melasma", "Hyperpigmentation"],
    concentrations: ["2–5% (commonly studied)"]
  },
  "Kojic acid": {
    name: "Kojic Acid",
    emoji: "🍄",
    description: "Kojic acid is a tyrosinase inhibitor used to reduce pigment production.",
    commonUses: ["Hyperpigmentation"],
    maxStrength: "1% (EU safety assessment maximum)"
  },
  // Acne-Focused
  "Benzoyl peroxide": {
    name: "Benzoyl Peroxide",
    emoji: "💪",
    description: "Benzoyl peroxide is an antibacterial and keratolytic agent that reduces acne-causing bacteria.",
    commonUses: ["Inflammatory acne"],
    concentrations: ["2.5–10% (OTC acne treatment)"],
    maxStrength: "10%"
  },
  "Salicylic acid": {
    name: "Salicylic Acid",
    emoji: "🌿",
    description: "Salicylic acid is oil-soluble, allowing it to penetrate into pores. It has exfoliating and anti-inflammatory properties.",
    commonUses: ["Acne", "Blackheads", "Oily skin"],
    concentrations: ["0.5–2% (OTC acne treatment)"],
    maxStrength: "2% (for acne treatment)",
    professionalUse: "Commonly 20–30% for professional peels"
  },
  "Sulfur": {
    name: "Sulfur",
    emoji: "🟡",
    description: "Sulfur has keratolytic and antimicrobial properties and is used in acne management.",
    commonUses: ["Acne", "Oily skin"],
    concentrations: ["3–10% (OTC acne treatment)"],
    maxStrength: "10%"
  },
  // Sun Protection
  "Physical (mineral) filters": {
    name: "Physical (Mineral) Filters",
    emoji: "☀️",
    description: "Physical sunscreens contain mineral ingredients like zinc oxide and titanium dioxide that sit on the skin surface and reflect/scatter UV radiation.",
    commonUses: ["Sun protection for all skin types", "Sensitive skin", "Post-procedure care"],
    importantNotes: "Physical filters are generally well-tolerated and provide broad-spectrum protection. They may leave a white cast on darker skin tones."
  },
  "Chemical filters": {
    name: "Chemical Filters",
    emoji: "🧪",
    description: "Chemical sunscreens contain organic compounds that absorb UV radiation and convert it to heat, which is then released from the skin.",
    commonUses: ["Sun protection for all skin types", "Daily wear under makeup"],
    importantNotes: "Chemical filters typically have a more cosmetically elegant finish but may cause irritation in sensitive individuals."
  }
};

const SkinCare = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);

  const ingredientCategories = [
    {
      id: "retinoids",
      title: "Prescription Retinoids",
      icon: Sparkles,
      emoji: "✨",
      ingredients: ["Tretinoin", "Adapalene", "Tazarotene"],
      whatTheyDo: "Prescription retinoids are vitamin A derivatives that regulate skin cell turnover, reduce follicular plugging, and influence collagen production.",
      whoMayBenefit: ["Acne-prone skin", "Photoaged skin", "Uneven texture or tone"],
      considerations: [
        "Common side effects include dryness, redness, and irritation, especially during the first weeks of use",
        "Sun sensitivity is increased",
        "Not recommended during pregnancy"
      ],
      guidance: "Retinoids are highly effective but require careful introduction and monitoring. Barrier-supportive skin care and sun protection are essential when using these medications."
    },
    {
      id: "exfoliating",
      title: "Exfoliating Acids",
      icon: Droplets,
      emoji: "💧",
      ingredients: ["Glycolic acid (AHA)", "Lactic acid (AHA)", "Salicylic acid (BHA)"],
      whatTheyDo: "Exfoliating acids remove dead skin cells from the surface or within pores, improving texture and clarity.",
      whoMayBenefit: ["Acne-prone skin", "Dull or uneven skin tone", "Mild hyperpigmentation"],
      considerations: [
        "Overuse can damage the skin barrier",
        "May worsen rosacea or eczema",
        "Can increase sun sensitivity"
      ],
      guidance: "Exfoliation should be limited and individualized. More is not better, and irritation is not a sign of effectiveness."
    },
    {
      id: "barrier",
      title: "Barrier-Supporting Ingredients",
      icon: Shield,
      emoji: "🛡️",
      ingredients: ["Ceramides", "Cholesterol", "Fatty acids"],
      whatTheyDo: "These ingredients restore and maintain the skin's natural barrier, reducing water loss and protecting against irritants.",
      whoMayBenefit: ["Dry or sensitive skin", "Eczema-prone skin", "Post-procedure or medically treated skin"],
      considerations: [
        "Generally well tolerated",
        "Essential when using active or prescription treatments"
      ],
      guidance: "Barrier repair is foundational to skin health and is often overlooked. Healthy skin tolerates treatments better and heals more effectively."
    },
    {
      id: "antiinflammatory",
      title: "Anti-Inflammatory Ingredients",
      icon: Heart,
      emoji: "💗",
      ingredients: ["Niacinamide", "Panthenol", "Allantoin", "Centella asiatica"],
      whatTheyDo: "These ingredients reduce inflammation, support barrier function, and improve tolerance to other treatments.",
      whoMayBenefit: ["Sensitive skin", "Rosacea-prone skin", "Acne-prone skin experiencing irritation"],
      considerations: [
        "Generally suitable for daily use",
        "Concentration and formulation matter"
      ],
      guidance: "Anti-inflammatory ingredients are especially useful for patients balancing medical treatments with daily skin care."
    },
    {
      id: "pigment",
      title: "Pigment-Modulating Ingredients",
      icon: Leaf,
      emoji: "🌿",
      ingredients: ["Azelaic acid", "Vitamin C", "Tranexamic acid", "Kojic acid"],
      whatTheyDo: "These ingredients influence melanin production and distribution, helping to improve uneven pigmentation.",
      whoMayBenefit: ["Post-inflammatory hyperpigmentation", "Melasma", "Uneven skin tone"],
      considerations: [
        "Results are gradual",
        "Sun protection is essential for effectiveness",
        "Irritation can worsen pigmentation if not managed"
      ],
      guidance: "Pigment concerns are complex and often require a combination of medical treatment and strict sun protection."
    },
    {
      id: "acne",
      title: "Acne-Focused Ingredients",
      icon: FlaskConical,
      emoji: "🧪",
      ingredients: ["Benzoyl peroxide", "Salicylic acid", "Sulfur"],
      whatTheyDo: "These ingredients reduce acne-causing bacteria, unclog pores, and decrease inflammation.",
      whoMayBenefit: ["Mild to moderate acne", "Oily or combination skin"],
      considerations: [
        "Can cause dryness and irritation",
        "Benzoyl peroxide may bleach fabrics"
      ],
      guidance: "Persistent or scarring acne should be medically evaluated. Over-the-counter ingredients are often supportive, not curative."
    },
    {
      id: "sunprotection",
      title: "Sun Protection Ingredients",
      icon: Sun,
      emoji: "☀️",
      ingredients: ["Physical (mineral) filters", "Chemical filters"],
      whatTheyDo: "Sunscreen protects against ultraviolet radiation, reducing the risk of skin cancer, premature aging, and pigment disorders.",
      whoMayBenefit: ["Everyone, regardless of skin type or age"],
      considerations: [
        "Daily use is essential, even on cloudy days",
        "Reapplication is necessary for adequate protection"
      ],
      guidance: "Sun protection is the most important skin care step for both skin cancer prevention and long-term skin health."
    }
  ];

  const skinConcerns = [
    { concern: "Acne-prone skin", recommendations: "Retinoids, salicylic acid, niacinamide" },
    { concern: "Rosacea or sensitive skin", recommendations: "Barrier-supporting and anti-inflammatory ingredients" },
    { concern: "Eczema-prone skin", recommendations: "Barrier repair ingredients; avoid over-exfoliation" },
    { concern: "Hyperpigmentation", recommendations: "Azelaic acid, vitamin C, pigment-modulating agents with sun protection" },
    { concern: "Aging or sun-damaged skin", recommendations: "Retinoids, antioxidants, daily sunscreen" }
  ];

  const safetyConsiderations = [
    "Pregnancy",
    "Immunosuppressed patients",
    "History of skin cancer",
    "Active inflammatory skin disease"
  ];

  const getIngredientDetail = (ingredientName: string) => {
    return ingredientDetails[ingredientName] || null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-sage-light/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Skin Care Ingredients: An Educational Guide
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Evidence-based education about commonly used skin care ingredients, their dermatologic functions, and clinical considerations for optimal skin health.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-sage/20 bg-sage-light/10">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-semibold text-charcoal mb-4">Skin Care as Part of Skin Health</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Skin care plays an important role in maintaining the health and function of the skin. While medical treatments address specific dermatologic conditions and skin cancers, daily skin care practices can support the skin barrier, reduce inflammation, and improve treatment tolerance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This page is designed to provide evidence-based education about commonly used skin care ingredients. It is not intended to promote specific products or replace individualized medical advice. Skin type, underlying conditions, and concurrent treatments should always be considered when selecting skin care ingredients.
                  </p>
                  <div className="bg-white/50 rounded-lg p-4 mt-6">
                    <h3 className="font-medium text-charcoal mb-2">How to Use This Guide</h3>
                    <p className="text-sm text-muted-foreground">
                      Skin care products are best understood by their active ingredients, rather than by brand or marketing claims. Below, ingredients are grouped by their primary dermatologic function, with guidance on who may benefit, potential side effects, and when professional supervision is recommended.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ingredient Categories - Tabbed Interface */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-charcoal text-center mb-8">
                Skin Care Ingredient Categories
              </h2>
              
              <Tabs defaultValue="retinoids" className="w-full">
                <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8">
                  {ingredientCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-3 rounded-full border border-sage/30 bg-white text-base font-medium transition-all hover:bg-sage-light"
                    >
                      <span className="mr-2 text-lg">{category.emoji}</span>
                      <span className="hidden sm:inline">{category.title}</span>
                      <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {ingredientCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <Card className="border-sage/20 shadow-lg">
                      <CardHeader className="bg-gradient-to-r from-sage-light/40 to-sage-light/20 border-b border-sage/10 py-8">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/20 rounded-xl">
                            <category.icon className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-3xl text-charcoal">{category.title}</CardTitle>
                            <p className="text-muted-foreground mt-1">Click on an ingredient to learn more</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 md:p-10">
                        {/* Clickable Ingredients Grid */}
                        <div className="mb-10">
                          <h4 className="text-lg font-semibold text-primary uppercase tracking-wide mb-5 flex items-center gap-2">
                            <FlaskConical className="w-5 h-5" />
                            Common Ingredients
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {category.ingredients.map((ingredient, idx) => {
                              const detail = getIngredientDetail(ingredient);
                              return (
                                <button
                                  key={idx}
                                  onClick={() => setSelectedIngredient(ingredient)}
                                  className="group relative flex items-center gap-4 p-5 bg-white border-2 border-sage/30 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 text-left"
                                >
                                  <span className="text-3xl">{detail?.emoji || "💊"}</span>
                                  <div className="flex-1">
                                    <span className="text-lg font-semibold text-charcoal group-hover:text-primary transition-colors">
                                      {detail?.name || ingredient}
                                    </span>
                                    <p className="text-sm text-muted-foreground mt-1">
                                      Tap for details
                                    </p>
                                  </div>
                                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Left Column */}
                          <div className="space-y-6">
                            <div className="bg-sage-light/20 rounded-xl p-6">
                              <h4 className="text-lg font-semibold text-primary uppercase tracking-wide mb-4">
                                What They Do
                              </h4>
                              <p className="text-muted-foreground leading-relaxed text-lg">
                                {category.whatTheyDo}
                              </p>
                            </div>

                            <div className="bg-teal/10 rounded-xl p-6">
                              <h4 className="text-lg font-semibold text-teal uppercase tracking-wide mb-4">
                                Who May Benefit
                              </h4>
                              <ul className="space-y-3">
                                {category.whoMayBenefit.map((benefit, idx) => (
                                  <li key={idx} className="flex items-center gap-3 text-muted-foreground text-lg">
                                    <span className="w-2.5 h-2.5 bg-teal rounded-full flex-shrink-0" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="space-y-6">
                            <div className="bg-warm/10 rounded-xl p-6">
                              <h4 className="text-lg font-semibold text-warm uppercase tracking-wide mb-4 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5" />
                                Important Considerations
                              </h4>
                              <ul className="space-y-3">
                                {category.considerations.map((consideration, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-muted-foreground text-lg">
                                    <Info className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                                    {consideration}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                              <h4 className="text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-primary" />
                                Dermatology Guidance
                              </h4>
                              <p className="text-muted-foreground leading-relaxed text-lg">
                                {category.guidance}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Ingredient Detail Dialog */}
        <Dialog open={!!selectedIngredient} onOpenChange={() => setSelectedIngredient(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh]">
            <DialogHeader>
              {selectedIngredient && getIngredientDetail(selectedIngredient) && (
                <DialogTitle className="flex items-center gap-3 text-2xl">
                  <span className="text-4xl">{getIngredientDetail(selectedIngredient)?.emoji}</span>
                  {getIngredientDetail(selectedIngredient)?.name}
                </DialogTitle>
              )}
            </DialogHeader>
            <ScrollArea className="max-h-[60vh] pr-4">
              {selectedIngredient && getIngredientDetail(selectedIngredient) && (
                <div className="space-y-6 py-4">
                  {/* Description */}
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2 text-lg">Description</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {getIngredientDetail(selectedIngredient)?.description}
                    </p>
                  </div>

                  {/* Common Uses */}
                  <div className="bg-sage-light/30 rounded-lg p-5">
                    <h4 className="font-semibold text-charcoal mb-3 text-lg">Common Uses</h4>
                    <ul className="space-y-2">
                      {getIngredientDetail(selectedIngredient)?.commonUses.map((use, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Concentrations */}
                  {getIngredientDetail(selectedIngredient)?.concentrations && (
                    <div className="bg-teal/10 rounded-lg p-5">
                      <h4 className="font-semibold text-charcoal mb-3 text-lg">Typical Concentrations</h4>
                      <ul className="space-y-2">
                        {getIngredientDetail(selectedIngredient)?.concentrations?.map((conc, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <FlaskConical className="w-4 h-4 text-teal" />
                            {conc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Maximum Strength */}
                  {getIngredientDetail(selectedIngredient)?.maxStrength && (
                    <div className="flex items-start gap-3 p-4 bg-warm/10 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-charcoal mb-1">Maximum Commonly Used Strength</h4>
                        <p className="text-muted-foreground">{getIngredientDetail(selectedIngredient)?.maxStrength}</p>
                      </div>
                    </div>
                  )}

                  {/* Professional Use */}
                  {getIngredientDetail(selectedIngredient)?.professionalUse && (
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-charcoal mb-1">Professional Use</h4>
                        <p className="text-muted-foreground">{getIngredientDetail(selectedIngredient)?.professionalUse}</p>
                      </div>
                    </div>
                  )}

                  {/* Important Notes */}
                  {getIngredientDetail(selectedIngredient)?.importantNotes && (
                    <div className="border-l-4 border-warm p-4 bg-warm/5 rounded-r-lg">
                      <h4 className="font-semibold text-charcoal mb-2 flex items-center gap-2">
                        <Info className="w-5 h-5 text-warm" />
                        Important Notes
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {getIngredientDetail(selectedIngredient)?.importantNotes}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>
          </DialogContent>
        </Dialog>

        {/* Ingredient Selection by Skin Concern */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-charcoal text-center mb-8">
                Ingredient Selection by Skin Concern
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skinConcerns.map((item, index) => (
                  <Card key={index} className="border-sage/20 hover:shadow-md transition-shadow hover:border-primary/30">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-charcoal mb-3 text-lg">{item.concern}</h3>
                      <p className="text-muted-foreground">{item.recommendations}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Safety and Medical Oversight */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-warm/30 bg-warm/5">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-warm/20 rounded-lg flex-shrink-0">
                      <AlertCircle className="w-7 h-7 text-warm" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-charcoal mb-4">Safety and Medical Oversight</h2>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                        Skin care ingredients can interact with medical treatments and underlying skin conditions. Irritation, worsening redness, or persistent discomfort are not expected outcomes and should prompt reassessment.
                      </p>
                      <p className="text-muted-foreground mb-3 text-lg">Special consideration is required for:</p>
                      <ul className="grid sm:grid-cols-2 gap-3 mb-4">
                        {safetyConsiderations.map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-muted-foreground text-lg">
                            <span className="w-2 h-2 bg-warm rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="font-medium text-charcoal text-lg">
                        When in doubt, professional guidance is recommended.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Card className="border-sage/30 bg-gradient-to-b from-sage-light/20 to-transparent">
                <CardContent className="p-10">
                  <h2 className="text-2xl font-semibold text-charcoal mb-4">Final Note</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Skin care should support—not compromise—skin health. An individualized approach, grounded in dermatologic science and guided by medical expertise, provides the safest and most effective results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SkinCare;
