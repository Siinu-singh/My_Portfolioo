
import dynamic from 'next/dynamic';
import HomeSection from '@/components/sections/home-section';

// Dynamically import below-the-fold components to aggressively split JS bundle and improve TTI/FID
const AboutSection = dynamic(() => import('@/components/sections/about-section'), { ssr: true });
const StatsSection = dynamic(() => import('@/components/sections/stats-section'), { ssr: true });
const SkillsSection = dynamic(() => import('@/components/sections/skills-section'), { ssr: true });
const ProjectsSection = dynamic(() => import('@/components/sections/projects-section'), { ssr: true });
const ContactSection = dynamic(() => import('@/components/sections/contact-section'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/footer'), { ssr: true });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header is rendered inside HomeSection */}
      <main className="flex-grow relative overflow-x-hidden"> {/* Prevent horizontal overflow */}
        <HomeSection />
        <AboutSection /> {/* Add the About section here */}
        <StatsSection /> {/* Add StatsSection */}
        <SkillsSection /> {/* Add SkillsSection */}
        {/* <ExperienceAndEducationSection /> Removed redundant section */}
        <ProjectsSection /> {/* Add the Projects section here */}
        <ContactSection /> {/* Add the Contact section here */}
      </main>
      <Footer />
    </div>
  );
}

