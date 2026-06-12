'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { BaseCard, InteractiveCard, DashboardCard, FeatureCard } from '@/components/ui/cards';
import { Dropdown } from '@/components/ui/Dropdown';
import { Slider } from '@/components/ui/Slider';
import { Modal } from '@/components/ui/Modal';
import { Tooltip } from '@/components/ui/Tooltip';
import { SkeletonLoader } from '@/components/ui/SkeletonLoader';
import { Stepper } from '@/components/ui/Stepper';
import { AnalyticsMetric, LessonCard, QuizCard, ChatMessage } from '@/components/dashboard';

export default function DesignSystemPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sliderVal, setSliderVal] = useState(50);

  return (
    <div className="container section-padding" style={{ paddingBottom: '100px' }}>
      <h1>Design System Preview</h1>
      <p className="text-caption">Review the Global UI components built for QuickStudy.</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Inputs & Elements</h2>
        <div className="grid-responsive" style={{ marginTop: '1rem' }}>
          <div>
            <Dropdown 
              label="Select Subject" 
              options={[
                { value: 'math', label: 'Mathematics' },
                { value: 'science', label: 'Science' }
              ]} 
            />
          </div>
          <div>
            <Slider 
              label="Confidence Level" 
              value={sliderVal} 
              onChange={e => setSliderVal(Number(e.target.value))} 
            />
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Overlays & Progress</h2>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', alignItems: 'center' }}>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Sample Modal">
            <p>This is a glassmorphism modal component.</p>
            <div style={{ marginTop: '1rem' }}>
              <Button onClick={() => setIsModalOpen(false)}>Close</Button>
            </div>
          </Modal>

          <Tooltip content="This is a helpful tooltip!" position="top">
            <span style={{ textDecoration: 'underline', cursor: 'help' }}>Hover me for tooltip</span>
          </Tooltip>
        </div>
        <div style={{ marginTop: '2rem', maxWidth: '400px' }}>
          <Stepper currentStep={2} totalSteps={4} />
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Cards System</h2>
        <div className="grid-responsive" style={{ marginTop: '1rem' }}>
          <BaseCard>
            <h4>Base Card</h4>
            <p>Standard container for static content.</p>
          </BaseCard>
          <InteractiveCard>
            <h4>Interactive Card</h4>
            <p>Hover me to see the lift and subtle glow effect.</p>
          </InteractiveCard>
          <FeatureCard 
            title="AI Learning" 
            description="Personalized insights generated in real-time." 
            icon="🤖" 
          />
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Dashboard Elements</h2>
        <div className="grid-responsive" style={{ marginTop: '1rem' }}>
          <DashboardCard title="Total Study Time" value="12.5 hrs" icon="⏱️">
            <AnalyticsMetric value="96%" label="Improvement in Math" trend="up" />
          </DashboardCard>
          <LessonCard title="Algebra Fundamentals" duration="15 mins" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <QuizCard title="Fractions Review" questionCount={10} topic="Math" />
            <div style={{ padding: '1rem', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-lg)' }}>
              <ChatMessage message="Can we review question 4?" isSent={true} time="10:00 AM" />
              <ChatMessage message="Sure! Let's break down the denominator first." isSent={false} time="10:02 AM" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Loading States</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
          <SkeletonLoader type="circular" />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <SkeletonLoader width="60%" />
            <SkeletonLoader width="40%" />
          </div>
        </div>
      </section>

    </div>
  );
}
