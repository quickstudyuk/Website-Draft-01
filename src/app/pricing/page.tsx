import React from 'react';
import PricingHero from '@/components/pricing/PricingHero';
import ValueComparison from '@/components/pricing/ValueComparison';
import PricingOverview from '@/components/pricing/PricingOverview';
import IncludedFeatures from '@/components/pricing/IncludedFeatures';
import SupportExamples from '@/components/pricing/SupportExamples';
import PricingCommunities from '@/components/pricing/PricingCommunities';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import ROI from '@/components/pricing/ROI';
import GlobalCTA from '@/components/ui/GlobalCTA';

export const metadata = {
  title: 'QuickStudy Pricing | Affordable, Transparent Tutoring',
  description: 'Invest in your child\'s future with confidence. Simple, transparent pricing for personalised tutoring and complete access to the QuickStudy Learning Environment.',
};

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <PricingOverview />
      <ValueComparison />
      <IncludedFeatures />
      <SupportExamples />
      <PricingCommunities />
      <PricingFAQ />
      <ROI />
      <GlobalCTA />
    </main>
  );
}
