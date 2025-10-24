import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import hagglLogo from "@/assets/haggl-logo.png";

const Header = () => {
 const handleGetQuote = () => {
  const message = encodeURIComponent(
    "*LOAD REQUIREMENT DETAILS:*\n- *Truck type*[e.g., Closed-body, Open-body, Refrigerated truck]\n- *From* [Origin] *To* [Destination]\n- *Material* [e.g., textiles]\n- *Weighing* [Ton, e.g., 5 tons]"
  );
  window.open(`https://wa.me/919442602793?text=${message}`, "_blank");
};

    const MailUs = () => {
  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=reachus@haggllogistics.in&su=Land+Freight+Quote+Request&body=Hi,%20I%20need%20a%20land%20freight%20quote%20for%20[Truck%20type%20eg.,.%20Closed-body/container,Open-body,Refrigerated%20truck(reefer)]%20from%20[Origin]%20to%20[Destination]%20for%20[Material,%20e.g.,%20textiles]%20weighing%20[Ton,%20e.g.,%205%20tons].", "_blank");
};

  const handleCall = () => {
    window.location.href = "tel:+919442602793";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={hagglLogo} alt="HAGGL Logistics" className="h-10 w-auto" />
            <div>
              <div className="font-bold text-xl leading-none">LOGISTICS</div>
              <div className="text-xs text-muted-foreground">Brokerage Firm</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#coverage" className="text-sm font-medium hover:text-primary transition-colors">
              Coverage
            </a>
            <a href="#broker" className="text-sm font-medium hover:text-primary transition-colors">
              Freight Broker
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={MailUs}
              className="hidden sm:flex"
            >
              
              Get Quote
            </Button>
            <Button
              variant="hero"
              size="sm"
              onClick={handleCall}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
