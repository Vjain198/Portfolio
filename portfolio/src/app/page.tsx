import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "../app/components/ProjectsSection";
import Skills from "./components/Skills";
import WorkHistorySection from "./components/WorkHistorySection";

export default function Home() {
  return (
    <div className="p-6 h-full relative">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WorkHistorySection />
      <ProjectsSection />
      <Skills />
      <ContactForm />
    </div>
  );
}
