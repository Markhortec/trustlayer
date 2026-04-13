import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import ArchitectureSection from './components/ArchitectureSection';
import TrustScoreSection from './components/TrustScoreSection';
import DashboardSection from './components/DashboardSection';
import RoadmapSection from './components/RoadmapSection';
import PricingSection from './components/PricingSection';
import GTMSection from './components/GTMSection';
import CompetitorsSection from './components/CompetitorsSection';
import BonusSection from './components/BonusSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 64; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-inter">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <div
        id="hero"
        ref={(el) => { sectionRefs.current['hero'] = el; }}
      >
        <HeroSection onNavigate={scrollToSection} />
      </div>

      <div
        id="overview"
        ref={(el) => { sectionRefs.current['overview'] = el; }}
      >
        <OverviewSection />
      </div>

      <div
        id="architecture"
        ref={(el) => { sectionRefs.current['architecture'] = el; }}
      >
        <ArchitectureSection />
      </div>

      <div
        id="trustscore"
        ref={(el) => { sectionRefs.current['trustscore'] = el; }}
      >
        <TrustScoreSection />
      </div>

      <div
        id="dashboard"
        ref={(el) => { sectionRefs.current['dashboard'] = el; }}
      >
        <DashboardSection />
      </div>

      <div
        id="roadmap"
        ref={(el) => { sectionRefs.current['roadmap'] = el; }}
      >
        <RoadmapSection />
      </div>

      <div
        id="pricing"
        ref={(el) => { sectionRefs.current['pricing'] = el; }}
      >
        <PricingSection />
      </div>

      <div
        id="gtm"
        ref={(el) => { sectionRefs.current['gtm'] = el; }}
      >
        <GTMSection />
      </div>

      <div
        id="competitors"
        ref={(el) => { sectionRefs.current['competitors'] = el; }}
      >
        <CompetitorsSection />
      </div>

      <div
        id="bonus"
        ref={(el) => { sectionRefs.current['bonus'] = el; }}
      >
        <BonusSection />
      </div>

      <Footer />
    </div>
  );
}
