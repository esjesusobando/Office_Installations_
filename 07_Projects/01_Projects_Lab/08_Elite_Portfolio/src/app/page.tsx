import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { ProjectsGrid } from "@/components/projects-grid";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

/**
 * HomePage - zuzannarister style
 * White background, huge images, minimal text
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <Hero name="Sofía" />
      
      <ProjectsGrid />
      
      <AboutSection />
      
      <ContactSection />
      
      <Footer />
    </main>
  );
}