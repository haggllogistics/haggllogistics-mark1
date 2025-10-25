import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package2, Route, DollarSign, TrendingDown, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Full Truck Load (FTL)",
      description: "Dedicated truck for your entire shipment with direct door-to-door delivery across South India.",
      features: ["Direct delivery", "No intermediate stops", "Faster transit times", "Reduced handling"]
    },
    {
      icon: TrendingDown,
      title: "Expert Haggling",
      description: "Our skilled hagglers target fragmented markets and negotiate the best rates for your shipment, ensuring maximum value.",
      features: ["Professional negotiation", "Market-rate analysis", "Cost optimization", "Best deals guaranteed"]
    },
    {
      icon: Route,
      title: "South India Network",
      description: "Comprehensive coverage across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, and Telangana.",
      features: ["Major city connections", "Rural reach", "Interstate transport", "Express corridors"]
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden charges. Haggled rates that save you money.",
      features: ["Instant quotes", "Volume discounts", "Flexible payment", "No hidden fees"]
    },
    {
      icon: Users,
      title: "Dedicated Hagglers",
      description: "Our team of professional hagglers work tirelessly to get you the most competitive prices.",
      features: ["Expert negotiators", "Industry connections", "Rate comparisons", "Cost savings"]
    },
    {
      icon: Package2,
      title: "Freight Brokering",
      description: "Expert brokering services connecting shippers with reliable carriers at haggled rates.",
      features: ["Carrier vetting", "Load matching", "Price negotiation", "24/7 support"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive freight solutions tailored for your business needs with professional expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <CardHeader>
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
