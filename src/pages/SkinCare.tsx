import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Shield, Droplets, Sun, Sparkles, AlertCircle, Heart, Leaf } from "lucide-react";

const SkinCare = () => {
  const ingredientCategories = [
    {
      id: "retinoids",
      title: "Prescription Retinoids",
      icon: Sparkles,
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
      icon: Sparkles,
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
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-charcoal text-center mb-8">
                Skin Care Ingredient Categories
              </h2>
              
              <Tabs defaultValue="retinoids" className="w-full">
                <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8">
                  {ingredientCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-sage data-[state=active]:text-charcoal px-4 py-2 rounded-full border border-sage/30 bg-white"
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">{category.title}</span>
                      <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {ingredientCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <Card className="border-sage/20">
                      <CardHeader className="bg-sage-light/20 border-b border-sage/10">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-sage/20 rounded-lg">
                            <category.icon className="w-6 h-6 text-sage-dark" />
                          </div>
                          <CardTitle className="text-2xl text-charcoal">{category.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 md:p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Left Column */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-sm font-semibold text-sage-dark uppercase tracking-wide mb-3">
                                Common Ingredients
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {category.ingredients.map((ingredient, idx) => (
                                  <Badge key={idx} variant="secondary" className="bg-sage-light/50 text-charcoal">
                                    {ingredient}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-sage-dark uppercase tracking-wide mb-3">
                                What They Do
                              </h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {category.whatTheyDo}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-sage-dark uppercase tracking-wide mb-3">
                                Who May Benefit
                              </h4>
                              <ul className="space-y-2">
                                {category.whoMayBenefit.map((benefit, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                                    <span className="w-1.5 h-1.5 bg-sage rounded-full flex-shrink-0" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-sm font-semibold text-sage-dark uppercase tracking-wide mb-3">
                                Important Considerations
                              </h4>
                              <ul className="space-y-2">
                                {category.considerations.map((consideration, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                    <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                    {consideration}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-sage-light/30 rounded-lg p-4">
                              <h4 className="text-sm font-semibold text-charcoal mb-2">
                                Dermatology Guidance
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
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

        {/* Ingredient Selection by Skin Concern */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-charcoal text-center mb-8">
                Ingredient Selection by Skin Concern
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skinConcerns.map((item, index) => (
                  <Card key={index} className="border-sage/20 hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-charcoal mb-2">{item.concern}</h3>
                      <p className="text-sm text-muted-foreground">{item.recommendations}</p>
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
              <Card className="border-amber-200 bg-amber-50/50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-amber-100 rounded-lg flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-charcoal mb-4">Safety and Medical Oversight</h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Skin care ingredients can interact with medical treatments and underlying skin conditions. Irritation, worsening redness, or persistent discomfort are not expected outcomes and should prompt reassessment.
                      </p>
                      <p className="text-muted-foreground mb-3">Special consideration is required for:</p>
                      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                        {safetyConsiderations.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm font-medium text-charcoal">
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
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-charcoal mb-4">Final Note</h2>
                  <p className="text-muted-foreground leading-relaxed">
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
