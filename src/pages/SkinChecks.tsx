import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Shield, Camera, FileText, Stethoscope } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SkinChecks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-charcoal mb-6">
              Skin Cancer Screening Services
            </h1>
            <p className="text-xl text-foreground">
              Comprehensive and express skin cancer checks using advanced dermoscopy 
              and total body photography technology
            </p>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Comprehensive Check */}
            <Card className="border-2 border-sage">
              <CardHeader className="bg-sage-light">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-8 w-8 text-sage-dark" />
                  <CardTitle className="text-2xl">Comprehensive Check</CardTitle>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-sage-dark">$250</span>
                  <span className="text-muted-foreground">/ 30 minutes</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-charcoal mb-4">What's Included:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Total Body Photography (TBP) for baseline documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Advanced dermoscopy examination of all moles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Full-body skin mapping and risk assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Documented management plan for future comparisons</span>
                  </li>
                </ul>

                <h3 className="font-semibold text-charcoal mb-3">Best For:</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-sage-dark">•</span>
                    <span className="text-foreground">First-time skin cancer screenings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-dark">•</span>
                    <span className="text-foreground">Patients with many moles or freckles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-dark">•</span>
                    <span className="text-foreground">Family history of skin cancer or melanoma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-dark">•</span>
                    <span className="text-foreground">High UV exposure history</span>
                  </li>
                </ul>

                <Button variant="cta" className="w-full" asChild>
                  <Link to="/contact">Book Comprehensive Check</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Express Check */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-8 w-8 text-sage-dark" />
                  <CardTitle className="text-2xl">Express Check</CardTitle>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-sage-dark">$125</span>
                  <span className="text-muted-foreground">/ 15 minutes</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-charcoal mb-4">What's Included:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Focused examination of 1-2 specific areas of concern</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Quick dermoscopic assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Professional medical evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">No photography (spot check only)</span>
                  </li>
                </ul>

                <h3 className="font-semibold text-charcoal mb-3">Best For:</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-sage-dark">•</span>
                    <span className="text-foreground">Follow-up checks of specific lesions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-dark">•</span>
                    <span className="text-foreground">Reassurance about a specific spot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-dark">•</span>
                    <span className="text-foreground">Quick assessment of new or changing spots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-dark">•</span>
                    <span className="text-foreground">Patients with previous baseline established</span>
                  </li>
                </ul>

                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Book Express Check</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-12">
            What to Expect During Your Appointment
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-block p-4 bg-sage rounded-full mb-4">
                <FileText className="h-8 w-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                1. Medical History
              </h3>
              <p className="text-muted-foreground">
                We'll review your medical and family history, sun exposure, 
                and any skin concerns you have
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-sage rounded-full mb-4">
                <Camera className="h-8 w-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                2. Examination
              </h3>
              <p className="text-muted-foreground">
                Thorough skin examination using state-of-the-art dermoscopy 
                and photography equipment
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-sage rounded-full mb-4">
                <Stethoscope className="h-8 w-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                3. Action Plan
              </h3>
              <p className="text-muted-foreground">
                Receive a clear management plan with recommendations for 
                monitoring or treatment if needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How often should I get a skin check?</AccordionTrigger>
                <AccordionContent>
                  For most people, an annual skin check is recommended. However, if you have a 
                  history of skin cancer, many moles, or other risk factors, more frequent checks 
                  (every 3-6 months) may be advised. Dr Hewage will provide personalised recommendations 
                  based on your individual risk profile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What is dermoscopy?</AccordionTrigger>
                <AccordionContent>
                  Dermoscopy is a non-invasive technique that uses a specialised magnifying device 
                  to examine skin lesions in detail. It allows the doctor to see structures beneath 
                  the skin's surface that aren't visible to the naked eye, improving diagnostic accuracy 
                  for skin cancer detection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need to prepare for my appointment?</AccordionTrigger>
                <AccordionContent>
                  Please arrive with clean skin (no makeup, moisturizer, or nail polish). Wear 
                  comfortable clothing that's easy to remove. For comprehensive checks, you'll need 
                  to undress to your underwear, so wear comfortable undergarments. Bring a list of 
                  any medications you're taking and note any changes in existing moles or new spots.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Will I get results immediately?</AccordionTrigger>
                <AccordionContent>
                  Dr Hewage will discuss her initial findings with you during your appointment. 
                  If any lesions require biopsy, results typically take 7-10 days. You'll be contacted 
                  with results and follow-up recommendations as needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Is the check covered by Medicare?</AccordionTrigger>
                <AccordionContent>
                  Skin cancer checks are private services. However, some patients may be eligible 
                  for bulk billing (pensioners, children under 16, healthcare card holders at HEMAC). 
                  Private health insurance may provide rebates depending on your level of cover. 
                  Please check with your insurer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Book Your Skin Cancer Check Today
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Early detection saves lives. Schedule your appointment now.
          </p>
          <Button variant="default" size="lg" className="bg-charcoal text-white hover:bg-charcoal/90" asChild>
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SkinChecks;
