import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FTLInfo from "@/components/FTLInfo";
import SouthIndia from "@/components/SouthIndia";
import FreightBroker from "@/components/FreightBroker";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="services">
          <Services />
        </section>
        <FTLInfo />
        <section id="coverage">
          <SouthIndia />
        </section>
        <section id="broker">
          <FreightBroker />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
