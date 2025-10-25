import { Phone, Mail, MapPin } from "lucide-react";
import hagglLogo from "@/assets/haggl-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={hagglLogo} alt="HAGGL Logistics" className="h-10 w-auto" />
              <div>
                <div className="font-bold text-xl leading-none">LOGISTICS</div>
                <div className="text-xs text-secondary-foreground/70">Competitive Freight Solutions</div>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/70">
              Your trusted partner for FTL freight services across South India. 
              Expert hagglers negotiating the best competitive rates for your shipments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>Full Truck Load (FTL)</li>
              <li>Expert Freight Haggling</li>
              <li>Competitive Rate Negotiation</li>
              <li>Tamil Nadu Intrastate freight service</li>
              <li>South India Coverage</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9442602793</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>reachus@haggllogistics.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>No. 19 C, Nehru Nagar 6th Street 1st Cross Street Meenakshi Road, TVS Nagar, Madurai, Madurai, Tamil Nadu, 625003</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
          <p>&copy; 2025 HAGGL LOGISTICS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
