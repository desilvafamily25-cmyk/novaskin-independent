import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Heart, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import drPremila from "@/assets/dr-premila.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-charcoal mb-6">
              About Dr Premila Hewage
            </h1>
            <p className="text-xl text-foreground">
              Experienced General Practitioner with special interest in skin cancer 
              detection and dermatology
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src={drPremila}
                  alt="Dr Premila Hewage, General Practitioner specializing in skin cancer checks and dermatology"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-6">
                  Committed to Your Skin Health
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Dr Premila Hewage is a qualified General Practitioner (MBBS FRACGP) with 
                  specialised training in dermoscopy and skin cancer medicine. She brings a 
                  wealth of experience and a patient-centred approach to skin health care.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Passionate about early detection and prevention of skin cancer, Dr Hewage 
                  utilizes state-of-the-art technology including advanced dermoscopy and 
                  total body photography to provide comprehensive skin assessments.
                </p>
                <p className="text-lg text-foreground">
                  With a commitment to ongoing education and staying current with the latest 
                  advances in dermatology, Dr Hewage provides evidence-based care tailored 
                  to each patient's individual needs.
                </p>
              </div>
            </div>

            {/* Qualifications */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-2 border-sage">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-8 w-8 text-sage-dark" />
                    <h3 className="text-2xl font-bold text-charcoal">Qualifications</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-sage-dark mt-1">•</span>
                      <span className="text-foreground">
                        <strong>MBBS</strong> — Bachelor of Medicine, Bachelor of Surgery
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-dark mt-1">•</span>
                      <span className="text-foreground">
                        <strong>FRACGP</strong> — Fellow of the Royal Australian College of General Practitioners
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-sage">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-8 w-8 text-sage-dark" />
                    <h3 className="text-2xl font-bold text-charcoal">Specializations</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-sage-dark mt-1">•</span>
                      <span className="text-foreground">
                        Advanced training in <strong>dermoscopy</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-dark mt-1">•</span>
                      <span className="text-foreground">
                        Specialised training in <strong>skin cancer medicine</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-dark mt-1">•</span>
                      <span className="text-foreground">
                        Expertise in <strong>dermatology</strong> and skin conditions
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
              Our Approach to Care
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-block p-4 bg-sage rounded-full mb-4">
                  <Heart className="h-8 w-8 text-charcoal" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Patient-Centred
                </h3>
                <p className="text-muted-foreground">
                  Every patient receives personalised care with time to discuss 
                  concerns and ask questions
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-sage rounded-full mb-4">
                  <Stethoscope className="h-8 w-8 text-charcoal" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Evidence-Based
                </h3>
                <p className="text-muted-foreground">
                  Treatment recommendations based on the latest research and 
                  clinical guidelines
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-sage rounded-full mb-4">
                  <Award className="h-8 w-8 text-charcoal" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Excellence
                </h3>
                <p className="text-muted-foreground">
                  Commitment to the highest standards of medical care and 
                  ongoing professional development
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
            Ready to Book Your Appointment?
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Experience expert skin care with Dr Premila Hewage at one of our convenient Melbourne locations
          </p>
          <Button variant="default" size="lg" className="bg-charcoal text-white hover:bg-charcoal/90" asChild>
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
