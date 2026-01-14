import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeatureGrid } from "./components/FeatureGrid";
import { JourneyFeature } from "./components/JourneyFeature";
import { TestimonialGrid } from "./components/TestimonialGrid";
import { BottomCTA } from "./components/BottomCTA";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-pink-500 selection:text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <FeatureGrid />
        <JourneyFeature />
        <TestimonialGrid />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
