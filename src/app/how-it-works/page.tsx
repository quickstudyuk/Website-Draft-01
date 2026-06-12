import React from 'react';
import HowItWorksHero from '@/components/how-it-works/HowItWorksHero';
import TraditionalTutoringProblem from '@/components/how-it-works/TraditionalTutoringProblem';
import SystemOverview from '@/components/how-it-works/SystemOverview';
import LearningProfileStep from '@/components/how-it-works/LearningProfileStep';
import ParentConsultationStep from '@/components/how-it-works/ParentConsultationStep';
import TrialLessonStep from '@/components/how-it-works/TrialLessonStep';
import QLEStep from '@/components/how-it-works/QLEStep';
import AISupportStep from '@/components/how-it-works/AISupportStep';
import ParentTrackingStep from '@/components/how-it-works/ParentTrackingStep';
import JourneyFlow from '@/components/how-it-works/JourneyFlow';
import WhyItWorks from '@/components/how-it-works/WhyItWorks';
import GlobalCTA from '@/components/ui/GlobalCTA';

export const metadata = {
  title: 'How QuickStudy Works | The Complete Learning System',
  description: 'Understand how the QuickStudy ecosystem works together. From the initial Learning Profile diagnosis to expert tutoring, AI insights, and parent progress tracking.',
};

export default function HowItWorksPage() {
  return (
    <main>
      <HowItWorksHero />
      <TraditionalTutoringProblem />
      <SystemOverview />
      <LearningProfileStep />
      <ParentConsultationStep />
      <TrialLessonStep />
      <QLEStep />
      <AISupportStep />
      <ParentTrackingStep />
      <JourneyFlow />
      <WhyItWorks />
      <GlobalCTA />
    </main>
  );
}
