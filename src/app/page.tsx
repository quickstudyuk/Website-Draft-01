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
import MobileBottomResults from '@/components/home/MobileBottomResults';


export const metadata = {
  title: 'QuickStudy | A Smarter Way To Help Your Child Succeed',
  description: 'Personalised tutoring, structured learning plans, and AI-powered learning tools designed to improve confidence, understanding, and academic performance.',
};

export default function Home() {
  return (
    <main className="homepage-main-container">
      <div className="section-hero"><HeroSection /></div>
      <div className="section-videos"><ParentVideos /></div>
      <div className="section-struggles"><ParentStruggles /></div>
      <div className="section-solution"><TheSolution /></div>
      <div className="section-qle"><QLEPreview /></div>
      <div className="section-results"><ResultsOutcomes /></div>
      <div className="section-consultation"><ConsultationTrial /></div>
      <div className="section-mentors"><Mentors /></div>
      <div className="section-testimonials"><Testimonials /></div>
      <div className="section-bottom-results"><MobileBottomResults /></div>
    </main>

  );
}
