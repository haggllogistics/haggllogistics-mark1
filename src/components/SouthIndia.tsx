import { Card, CardContent } from "@/components/ui/card";
import { MapPin, TrendingUp, Users, Clock } from "lucide-react";

const SouthIndia = () => {
  const states = [
    {
      name: "Tamil Nadu",
      cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tiruppur"],
      highlight: "Manufacturing & Textile Hub"
    },
    {
      name: "Karnataka",
      cities: ["Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum", "Gulbarga"],
      highlight: "IT & Industrial Corridor"
    },
    {
      name: "Kerala",
      cities: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam", "Palakkad"],
      highlight: "Ports & Spice Trade"
    },
    {
      name: "Andhra Pradesh",
      cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati", "Rajahmundry"],
      highlight: "Coastal Trade Routes"
    },
    {
      name: "Telangana",
      cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Mahbubnagar"],
      highlight: "Pharma & Tech Center"
    }
  ];

  const stats = [
    { icon: MapPin, value: "500+", label: "Cities Connected" },
    { icon: TrendingUp, value: "50K+", label: "Shipments Delivered" },
    { icon: Users, value: "15+", label: "Happy Clients" },
    { icon: Clock, value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">South India</span> Coverage
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive freight network spanning across all major cities and industrial hubs in South India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {states.map((state, index) => (
            <Card key={index} className="hover:shadow-lg transition-all border-2 hover:border-primary/50">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{state.name}</h3>
                    <p className="text-sm text-primary font-medium">{state.highlight}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                </div>
                
             {/*
  <div className="space-y-2">
    <p className="text-sm font-medium text-muted-foreground mb-2">Key Cities:</p>
    <div className="flex flex-wrap gap-2">
      {state.cities.map((city, idx) => (
        <span
          key={idx}
          className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
        >
          {city}
        </span>
      ))}
    </div>
  </div>
*/}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 border-2 border-primary/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Major Trade Routes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">Madurai ↔ Chennai</div>
              <p className="text-sm text-muted-foreground">Construction & Manufacturing Corridor</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">Coimbatore ↔ Kochi</div>
              <p className="text-sm text-muted-foreground">Textile & Port Route</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">Chennai ↔ Hyderabad</div>
              <p className="text-sm text-muted-foreground">Pharma & Coastal Trade</p>
            </div>
             <div className="text-center">
              <div className="text-lg font-semibold mb-2">Chennai ↔ Bangalore</div>
              <p className="text-sm text-muted-foreground">Raw material & Tyre Trade</p>
            </div>
              <div className="text-center">
              <div className="text-lg font-semibold mb-2">Pudukkottai ↔ Madurai</div>
              <p className="text-sm text-muted-foreground">Raw cotton and fibers Trade</p>
            </div>
             <div className="text-center">
              <div className="text-lg font-semibold mb-2">Coimbatore ↔ Madurai</div>
              <p className="text-sm text-muted-foreground">Machinery Item Trade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SouthIndia;
