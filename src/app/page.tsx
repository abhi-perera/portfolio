import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TalkWithMe from "@/components/TalkWithMe";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TalkWithMe />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
