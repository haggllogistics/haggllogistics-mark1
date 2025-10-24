import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const FTLInfo = () => {
const handleGetQuote = () => {
  const message = encodeURIComponent(
    "*HAGGLER NEEDS YOUR HELP:*\n- *Truck type*(e.g., Closed-body, Open-body, Refrigerated truck)\n- *From* [Origin] *To* [Destination]\n- *Material* (e.g., textiles)\n- *Weighing* [Ton, e.g., 5 tons]"
  );
  window.open(`https://wa.me/919442602793?text=${message}`, "_blank");
};

    const MailUs = () => {
  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=reachus@haggllogistics.in&su=Land+Freight+Quote+Request&body=Hi,%20I%20need%20a%20land%20freight%20quote%20for%20[Truck%20type%20eg.,.%20Closed-body/container,Open-body,Refrigerated%20truck(reefer)]%20from%20[Origin]%20to%20[Destination]%20for%20[Material,%20e.g.,%20textiles]%20weighing%20[Ton,%20e.g.,%205%20tons].", "_blank");
};

  const benefits = [
    "Exclusive truck dedicated to your cargo",
    "Faster delivery with no intermediate stops",
    "Reduced handling minimizes damage risk",
    "Cost-effective for large shipments (10+ tons)",
    "Flexible scheduling based on your timeline",
    "Suitable for time-sensitive shipments",
    "Better security for high-value goods"
  ];

  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">FTL</span>?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Full Truck Load (FTL) shipping is ideal when you have enough cargo to fill an entire truck. 
              This dedicated service ensures your goods move directly from origin to destination without 
              consolidation with other shipments.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button
              size="lg"
              variant="hero"
              onClick={MailUs}
              className="text-lg px-8 py-6"
            >
              Request FTL Quote
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Ideal For:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Bulk shipments (25+ tons)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Time-critical deliveries</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>High-value or fragile goods</span>
                </li>
             
              </ul>
            </div>
            
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Truck Types:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>32ft Multi-Axle Trucks</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>20ft & 24ft Container Trucks</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Refrigerated Trucks</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Flatbed Trucks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FTLInfo;
