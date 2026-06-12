import React, { Suspense } from 'react';
import LearningProfileEngine from '@/components/profile/LearningProfileEngine';

export default function LearningProfilePage() {
  return (
    <main style={{ padding: '2rem 1rem', display: 'flex', justifyContent: 'center', minHeight: 'calc(100vh - 80px)' }}>
      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
          <h2>Loading Profile...</h2>
        </div>
      }>
        <LearningProfileEngine />
      </Suspense>
    </main>
  );
}
