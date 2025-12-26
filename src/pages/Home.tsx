import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Shield, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";
import dermoscopyExam from "@/assets/dermoscopy-exam.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              Expert Skin Cancer Checks in Melbourne
            </h1>
            <p className="text-xl text-foreground mb-8">
              Comprehensive skin cancer detection and dermatology care by Dr Premila Hewage, 
              experienced GP with special interest in skin health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Book Comprehensive Check</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/skin-checks">Learn More</Link>
              </Button>
            </div>
            <div className="mt-6">
              <Button variant="secondary" size="sm" asChild>
                <a href="https://novacompounding.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Compounding Ideas (Prescribers only)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Our Skin Cancer Screening Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right level of care for your skin health needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Comprehensive Check */}
            <Card className="border-2 border-sage hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-block p-3 bg-sage-light rounded-lg mb-4">
                  <Shield className="h-8 w-8 text-sage-dark" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  Comprehensive Skin Cancer Check
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-sage-dark">$250</span>
                  <span className="text-muted-foreground">/ 30 minutes</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Total Body Photography (TBP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Advanced Dermoscopy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Full-body mapping & risk assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Ideal for first-time checks or high-risk patients</span>
                  </li>
                </ul>
                <Button variant="cta" className="w-full" asChild>
                  <Link to="/contact">Book Comprehensive Check</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Express Check */}
            <Card className="border-2 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-block p-3 bg-sage-light rounded-lg mb-4">
                  <Clock className="h-8 w-8 text-sage-dark" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  Express Skin Check
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-sage-dark">$125</span>
                  <span className="text-muted-foreground">/ 15 minutes</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Focused spot check (1-2 areas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Quick dermoscopic assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">No photography included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-dark mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Perfect for follow-ups or reassurance visits</span>
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

      {/* Why Choose Section */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-12">
            Why Choose NovaSkin?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-block p-4 bg-sage rounded-full mb-4">
                <Award className="h-8 w-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                Expert Training
              </h3>
              <p className="text-muted-foreground">
                Specialised training in dermoscopy and skin cancer medicine
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-sage rounded-full mb-4">
                <Shield className="h-8 w-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                Advanced Technology
              </h3>
              <p className="text-muted-foreground">
                State-of-the-art dermoscopy and total body photography
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-sage rounded-full mb-4">
                <Clock className="h-8 w-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                Two Locations
              </h3>
              <p className="text-muted-foreground">
                Available at Fitzroy North and HEMAC Hawthorn East
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-sage rounded-full mb-4">
                <CheckCircle2 className="h-8 w-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                Comprehensive Care
              </h3>
              <p className="text-muted-foreground">
                Full dermatology services beyond skin cancer screening
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={dermoscopyExam}
                alt="Dermoscopy skin examination procedure"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                About Dr Premila Hewage
              </h2>
              <p className="text-lg text-foreground mb-6">
                Dr Premila Hewage is a qualified General Practitioner (MBBS FRACGP) with 
                specialised training in dermoscopy and skin cancer medicine. She is passionate 
                about early detection and prevention of skin cancer.
              </p>
              <p className="text-lg text-foreground mb-8">
                With extensive experience in dermatology and a commitment to patient-centred 
                care, Dr Hewage provides thorough skin examinations and personalised treatment plans.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More About Dr Premila</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Ready to Take Care of Your Skin Health?
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Book your skin cancer check today at one of our convenient Melbourne locations
          </p>
          <Button variant="default" size="lg" className="bg-charcoal text-white hover:bg-charcoal/90" asChild>
            <Link to="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
