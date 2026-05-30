import NavigationMenu from '@/components/NavigationMenu/NavigationMenu';
import HeroSection from '@/components/HeroSection/HeroSection';
import AboutSection from '@/components/AboutSection/AboutSection';
import TechGrid from '@/components/TechGrid/TechGrid';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import WorkExperience from '@/components/WorkExperience/WorkExperience';
import ValuesSection from '@/components/ValuesSection/ValuesSection';
import Footer from '@/components/Footer/Footer';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <NavigationMenu />
      <HeroSection />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <TechGrid />
      </ScrollReveal>
      <ScrollReveal>
        <SocialLinks />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <WorkExperience />
      </ScrollReveal>
      <ScrollReveal>
        <ValuesSection />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  );
}
