import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { ProjectsGrid } from "@/components/projects-grid";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

/**
 * HomePage - Server Component
 * Victoria's Secret / Hollywood Model Aesthetic
 * DESIGN_VARIANCE: 10 (Cinematic, Editorial)
 * MOTION_INTENSITY: 7 (Elegant, Slow)
 * VISUAL_DENSITY: 3 (Spacious, Airy)
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      
      <Hero 
        name="Elena"
        role="Modelo Internacional"
        tagline="Glamour accesible, elegancia atemporal."
      />
      
      <ProjectsGrid />
      
      <AboutSection />
      
      <ContactSection />
      
      <Footer />
    </main>
  );
}