import { Button } from "@/components/ui/button";
import { Truck, Package, MapPin } from "lucide-react";

const Hero = () => {
 const handleGetQuote = () => {
  const message = encodeURIComponent(
    "*LOAD REQUIREMENT DETAILS:*\n- *Truck type*[e.g., Closed-body, Open-body, Refrigerated truck]\n- *From* [Origin] *To* [Destination]\n- *Material* [e.g., textiles]\n- *Weighing* [Ton, e.g., 5 tons]"
  );
  window.open(`https://wa.me/919442602793?text=${message}`, "_blank");
};

  const MailUs = () => {
  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=reachus@haggllogistics.in&su=Land+Freight+Quote+Request&body=Hi,%20I%20need%20a%20land%20freight%20quote%20for%20[Truck%20type%20eg.,.%20Closed-body/container,Open-body,Refrigerated%20truck(reefer)]%20from%20[Origin]%20to%20[Destination]%20for%20[Material,%20e.g.,%20textiles]%20weighing%20[Ton,%20e.g.,%205%20tons].", "_blank");
};
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-4">
            <Truck className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">South India's Competitive Freight Hagglers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Premium</span>{" "}
            <span className="text-primary">Land Freight</span>{" "}
            <span className="text-foreground">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full Truck Load (FTL) services across South India. Our expert hagglers negotiate 
            the best rates with carriers, ensuring you get competitive pricing and reliable delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              variant="hero"
              onClick={handleGetQuote}
              className="text-lg px-8 py-6 shadow-glow hover:scale-105 transition-all"
            >
              Get Instant Quote
            </Button>
            <div
              
              className="text-lg px-8 py-6 "
            >
              Contact Us +91 9442602793
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">FTL Specialist</h3>
              <p className="text-sm text-muted-foreground text-center">
                Dedicated full truck loads for bulk shipments
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">South India Coverage</h3>
              <p className="text-sm text-muted-foreground text-center">
                Extensive network across Tamil Nadu, Karnataka, Kerala & More
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Expert Hagglers</h3>
              <p className="text-sm text-muted-foreground text-center">
                Professional hagglers securing the best competitive rates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
