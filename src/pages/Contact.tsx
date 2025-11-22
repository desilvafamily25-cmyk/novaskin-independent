import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ExternalLink, CreditCard, ParkingCircle, Train } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-charcoal mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-foreground mb-8">
              Choose from our two convenient Melbourne locations
            </p>
            <p className="text-lg text-muted-foreground">
              Book online via HotDoc for the fastest appointment confirmation
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Fitzroy North Medical Clinic */}
            <Card className="border-2 border-sage hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-sage-light">
                <CardTitle className="text-2xl text-charcoal">
                  Fitzroy North Medical Clinic
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-sage-dark mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal">Address</p>
                      <p className="text-foreground">460 Brunswick St</p>
                      <p className="text-foreground">Fitzroy North VIC 3068</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-sage-dark mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal">Phone</p>
                      <a href="tel:0391253991" className="text-foreground hover:text-sage-dark">
                        (03) 9125 3991
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-sage-dark mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal">Email</p>
                      <a 
                        href="mailto:reception@fitzroynorthmedical.com.au" 
                        className="text-foreground hover:text-sage-dark break-all"
                      >
                        reception@fitzroynorthmedical.com.au
                      </a>
                    </div>
                  </div>
                </div>

                <Button variant="cta" className="w-full" asChild>
                  <a 
                    href="https://www.hotdoc.com.au/medical-centres/fitzroy-north-VIC-3068/fitzroy-north-medical-clinic/doctors/dr-premila-hewage-skin-checks" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Book on HotDoc
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>

                {/* Google Map Embed */}
                <div className="rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0937462289806!2d144.9742!3d-37.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642f4b0d2e5b1%3A0x5045675218ce6e0!2s460%20Brunswick%20St%2C%20Fitzroy%20North%20VIC%203068!5e0!3m2!1sen!2sau!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fitzroy North Medical Clinic location map"
                  />
                </div>
              </CardContent>
            </Card>

            {/* HEMAC - Hawthorn East */}
            <Card className="border-2 border-sage hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-sage-light">
                <CardTitle className="text-2xl text-charcoal">
                  HEMAC — Hawthorn East Medical & Aesthetic Clinic
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-sage-dark mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal">Address</p>
                      <p className="text-foreground">Level 1, 663 Burwood Road</p>
                      <p className="text-foreground">Hawthorn East VIC 3123</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-sage-dark mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal">Phone</p>
                      <a href="tel:0390789997" className="text-foreground hover:text-sage-dark">
                        (03) 9078 9997
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-sage-dark mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal">Email</p>
                      <a 
                        href="mailto:info@hemac.com.au" 
                        className="text-foreground hover:text-sage-dark"
                      >
                        info@hemac.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-sage-dark mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Opening Hours</p>
                      <p className="text-sm text-foreground">GP & Allied Health: Mon–Fri 8:30am–6pm</p>
                      <p className="text-sm text-foreground">Aesthetics: Tue–Fri 9:30am–6pm, Sat 9:30am–2:30pm</p>
                    </div>
                  </div>
                </div>

                <Button variant="cta" className="w-full" asChild>
                  <a 
                    href="https://www.hotdoc.com.au/medical-centres/hawthorn-east-VIC-3123/hawthorn-east-medical-aesthetic-clinic/doctors/dr-premila-hewage-women-s-health-menopause" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Book on HotDoc
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>

                {/* Google Map Embed */}
                <div className="rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.3456789012345!2d145.0442!3d-37.8213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6430e2f2f2f2f%3A0x5045675218ce6e0!2s663%20Burwood%20Rd%2C%20Hawthorn%20East%20VIC%203123!5e0!3m2!1sen!2sau!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="HEMAC Hawthorn East location map"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HEMAC Additional Info */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-charcoal text-center mb-8">
              HEMAC Hawthorn East — Additional Information
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <ParkingCircle className="h-8 w-8 text-sage-dark mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Parking</h3>
                  <p className="text-sm text-muted-foreground">
                    Off-street parking at rear. Street parking available on Burwood Rd.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Train className="h-8 w-8 text-sage-dark mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Public Transport</h3>
                  <p className="text-sm text-muted-foreground">
                    2 minute walk from Auburn Station
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <CreditCard className="h-8 w-8 text-sage-dark mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2">Billing</h3>
                  <p className="text-sm text-muted-foreground">
                    Mixed billing. Bulk billing available for eligible patients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Reminder */}
      <section className="py-16 bg-sage-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              Which Service Should I Book?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-sage-dark mb-2">
                  Comprehensive Check — $250
                </h3>
                <p className="text-sm text-muted-foreground mb-3">30 minutes</p>
                <p className="text-foreground">
                  First-time check, many moles, family history, or high-risk patients
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-sage-dark mb-2">
                  Express Check — $125
                </h3>
                <p className="text-sm text-muted-foreground mb-3">15 minutes</p>
                <p className="text-foreground">
                  Specific spot check, follow-up, or reassurance visit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
