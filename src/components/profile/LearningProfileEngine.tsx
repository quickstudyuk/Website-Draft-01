'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import RiskIndicator from './RiskIndicator';
import ImprovementTimeline from './ImprovementTimeline';
import LearningInsights from './LearningInsights';
import ActionPlan from './ActionPlan';
import OutcomesRoadmap from './OutcomesRoadmap';
import UIPreviews from './UIPreviews';
import GlobalCTA from '@/components/ui/GlobalCTA';
import { SurveyResponses, LearningProfileData } from '@/lib/types';
import { generateLearningProfile } from '@/lib/profileLogic';
import { SkeletonLoader } from '@/components/ui/SkeletonLoader';
import styles from './LearningProfileEngine.module.css';

export default function LearningProfileEngine() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState<LearningProfileData | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dataParam = searchParams.get('data');
      let parsedData: Partial<SurveyResponses> = {};
      try {
        if (dataParam) {
          parsedData = JSON.parse(decodeURIComponent(dataParam));
        }
      } catch (e) {
        console.error('Error parsing survey data', e);
      }

      const generatedProfile = generateLearningProfile(parsedData);
      setProfileData(generatedProfile);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [searchParams]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <h2 className={styles.loadingText}>Analyzing Responses...</h2>
        <p className={styles.loadingSub}>Generating your child's personalized Learning Profile</p>
        <div style={{ width: '100%', maxWidth: '600px', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <SkeletonLoader height={100} />
          <SkeletonLoader height={150} />
          <SkeletonLoader height={80} />
        </div>
      </div>
    );
  }

  if (!profileData) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Child's Learning Profile</h1>
        <p className={styles.subtitle}>Based on the information provided, we've identified key opportunities for improvement and created a suggested learning pathway.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.mainColumn}>
          {/* Section 1 */}
          <div className={styles.cardSection}>
            <RiskIndicator level={profileData.riskLevel} />
          </div>
          
          {/* Section 3 */}
          <div className={styles.cardSection}>
            <LearningInsights insights={profileData.insights} />
          </div>

          {/* Section 2 */}
          <div className={styles.cardSection}>
            <ImprovementTimeline timeline={profileData.timeline} />
          </div>

          {/* Section 4 */}
          <div className={styles.cardSection}>
            <ActionPlan plan={profileData.plan} />
          </div>
          
          {/* Section 5 */}
          <div className={styles.cardSection}>
            <OutcomesRoadmap outcomes={profileData.outcomes} />
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <UIPreviews />

      {/* Section 7 */}
      <div style={{ marginTop: '2rem' }}>
        <GlobalCTA />
      </div>
    </div>
  );
}
