import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import ProductVision from "../../components/sections/ProductVision";
import Features from "../../components/sections/Features";
import HowItWorks from "../../components/sections/HowItWorks";
import EngineeringJourney from "../../components/sections/EngineeringJourney";
import Benefits from "../../components/sections/Benefits";
import CTA from "../../components/sections/CTA";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <ProductVision />
      <Features />
      <HowItWorks />
      <EngineeringJourney />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
