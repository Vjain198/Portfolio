import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="p-6 h-full relative">
      <Navbar />
      <HeroSection />
      <AboutUs />
    </div>
  );
}
