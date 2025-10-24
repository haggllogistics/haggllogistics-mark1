import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, TrendingDown, Shield, Headphones, FileCheck, Zap } from "lucide-react";

const FreightBroker = () => {
 const handleGetQuote = () => {
  const message = encodeURIComponent(
    "*LOAD REQUIREMENT DETAILS:*\n- *Truck type*[e.g., Closed-body, Open-body, Refrigerated truck]\n- *From* [Origin] *To* [Destination]\n- *Material* [e.g., textiles]\n- *Weighing* [Ton, e.g., 5 tons]"
  );
  window.open(`https://wa.me/919442602793?text=${message}`, "_blank");
};

  const services = [
    {
      icon: Handshake,
      title: "Carrier Network",
      description: "Access to 500+ verified carriers across South India"
    },
    {
      icon: TrendingDown,
      title: "Best Rates",
      description: "Competitive pricing through volume negotiations"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Complete insurance and compliance handling"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs"
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Complete paperwork and regulatory compliance"
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      description: "Fast matching and dispatch within hours"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-primary">Freight Haggling</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expert hagglers negotiate with carriers on your behalf to secure the most 
              competitive rates. We leverage our industry connections and haggling expertise 
              to ensure you get the best deal every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">How We Haggle</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our professional hagglers are skilled negotiators who work exclusively to get you 
                the best freight rates. We compare multiple carriers, negotiate aggressively, and 
                leverage our industry relationships to haggle down costs significantly.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">You Submit Requirements</h4>
                    <p className="text-sm text-muted-foreground">
                      Share shipment details, origin, destination, and timeline
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">We Haggle the Best Rate</h4>
                    <p className="text-sm text-muted-foreground">
                      Our hagglers negotiate with multiple carriers to secure the lowest price
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Seamless Execution</h4>
                    <p className="text-sm text-muted-foreground">
                      We manage everything from booking to delivery confirmation
                    </p>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                variant="hero"
                onClick={handleGetQuote}
                className="text-lg px-8 py-6"
              >
                Get Haggled Rates
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-md transition-all border-2 hover:border-primary/50">
                  <CardContent className="pt-6 text-center">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-1 text-sm">{service.title}</h4>
                    <p className="text-xs text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm">Verified Carriers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreightBroker;
