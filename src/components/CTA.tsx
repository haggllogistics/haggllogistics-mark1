import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

const CTA = () => {
 const handleGetQuote = () => {
  const message = encodeURIComponent(
    "*HAGGLER NEEDS YOUR HELP:*\n- *Truck type*(e.g., Closed-body, Open-body, Refrigerated truck)\n- *From* [Origin] *To* [Destination]\n- *Material* (e.g., textiles)\n- *Weighing* [Ton, e.g., 5 tons]"
  );
  window.open(`https://wa.me/919442602793?text=${message}`, "_blank");
};

 /* const handleCall = () => {
    window.location.href = "tel:+919442602793";
  };*/

const MailUs = () => {
  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=reachus@haggllogistics.in&su=Land+Freight+Quote+Request&body=Hi,%20I%20need%20a%20land%20freight%20quote%20for%20[Truck%20type%20eg.,.%20Closed-body/container,Open-body,Refrigerated%20truck(reefer)]%20from%20[Origin]%20to%20[Destination]%20for%20[Material,%20e.g.,%20textiles]%20weighing%20[Ton,%20e.g.,%205%20tons].", "_blank");
};

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-dark-accent text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Ship Your <span className="text-primary">Cargo</span>?
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Get instant quotes, professional support, and reliable delivery across South India. 
            Our team is ready to handle your freight needs 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              variant="hero"
              onClick={handleGetQuote}
              className="text-lg px-8 py-6 shadow-glow"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={MailUs}
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="mr-2 h-5 w-5" />
              Mail Us
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-secondary-foreground/5 border border-primary/20">
              <Phone className="h-8 w-8 text-primary mb-2" />
              <div className="font-semibold">Call Us</div>
              <div className="text-sm text-secondary-foreground/70">+91 9442602793</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-secondary-foreground/5 border border-primary/20">
              <MessageCircle className="h-8 w-8 text-primary mb-2" />
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-secondary-foreground/70">Instant Quotes</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-secondary-foreground/5 border border-primary/20">
              <Mail className="h-8 w-8 text-primary mb-2" />
              <div className="font-semibold">Email</div>
              <div className="text-sm text-secondary-foreground/70">24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
