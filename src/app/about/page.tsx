import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import OurMission from '@/components/about/OurMission';
import OurDifference from '@/components/about/OurDifference';
import SystemFlow from '@/components/about/SystemFlow';
import Safeguarding from '@/components/about/Safeguarding';
import CommunitySupport from '@/components/about/CommunitySupport';
import QLEPreview from '@/components/about/QLEPreview';
import TrustPillars from '@/components/about/TrustPillars';
import Outcomes from '@/components/about/Outcomes';
import Testimonials from '@/components/about/Testimonials';
import GlobalCTA from '@/components/ui/GlobalCTA';

export const metadata = {
  title: 'About QuickStudy | Safe, Structured Academic Support',
  description: 'QuickStudy is a structured academic support platform combining expert tutoring, personalised learning plans, and AI-powered learning tools to help students improve with confidence.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurMission />
      <OurDifference />
      <SystemFlow />
      <Safeguarding />
      <CommunitySupport />
      <QLEPreview />
      <TrustPillars />
      <Outcomes />
      <Testimonials />
      <GlobalCTA />
    </main>
  );
}
