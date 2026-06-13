import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ParentVideos from '@/components/home/ParentVideos';
import ParentStruggles from '@/components/home/ParentStruggles';
import TheSolution from '@/components/home/TheSolution';
import QLEPreview from '@/components/home/QLEPreview';
import ResultsOutcomes from '@/components/home/ResultsOutcomes';
import ConsultationTrial from '@/components/home/ConsultationTrial';
import Testimonials from '@/components/home/Testimonials';

import Mentors from '@/components/home/Mentors';

export const metadata = {
  title: 'QuickStudy | A Smarter Way To Help Your Child Succeed',
  description: 'Personalised tutoring, structured learning plans, and AI-powered learning tools designed to improve confidence, understanding, and academic performance.',
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ParentVideos />
      <ParentStruggles />
      <TheSolution />
      <QLEPreview />
      <ResultsOutcomes />
      <ConsultationTrial />
      <Mentors />
      <Testimonials />
    </main>
  );
}
