'use client';

import React, { useState } from 'react';

const methodologySteps = [
  {
    id: 'step1',
    label: '1. Diagnostic Profiling',
    title: 'The Learning Profile',
    description: 'We start by identifying exactly where your child stands. Our 60-second diagnostic pinpoints academic risks, confidence gaps, and the specific topics holding them back.',
    features: ['Instant Risk Assessment', 'Confidence Mapping', 'Personalised Action Plan']
  },
  {
    id: 'step2',
    label: '2. Expert Matching',
    title: 'Vetted, Specialist Tutors',
    description: 'We match your child with a tutor who specialises in their exact areas of struggle. Our tutors are trained to build confidence alongside academic capability.',
    features: ['Top 5% of Applicants', 'Subject Specialists', 'Mentorship Approach']
  },
  {
    id: 'step3',
    label: '3. Structured Lessons',
    title: 'Focus & Accountability',
    description: 'No more ad-hoc sessions. Every lesson follows a structured curriculum designed to target weaknesses, introduce new concepts, and test understanding.',
    features: ['60-Minute Focused Sessions', 'Active Recall Testing', 'Curriculum Aligned']
  },
  {
    id: 'step4',
    label: '4. Continuous Support',
    title: 'The QLE Platform',
    description: 'Learning doesn\'t stop when the lesson ends. Our QLE platform provides lesson recordings, AI-generated revision summaries, and measurable progress tracking.',
    features: ['Lesson Recordings', 'AI Summaries', 'Parent Transparency Dashboard']
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section style={{ 
      padding: 'var(--spacing-16) 0', 
      backgroundColor: 'var(--background)',
      position: 'relative' 
    }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--foreground)' }}>
            The QuickStudy Methodology
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)', marginTop: 'var(--spacing-3)' }}>
            A structured, predictable system to take your child from struggling to succeeding.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--spacing-8)',
          alignItems: 'start'
        }} className="methodology-grid">
          
          {/* Left Column: Interactive Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            {methodologySteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    textAlign: 'left',
                    padding: 'var(--spacing-5) var(--spacing-6)',
                    borderRadius: 'var(--radius-xl)',
                    backgroundColor: isActive ? 'white' : 'transparent',
                    border: isActive ? '1px solid var(--primary-light)' : '1px solid transparent',
                    boxShadow: isActive ? '0 10px 25px -5px rgba(0, 0, 0, 0.05)' : 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {isActive && (
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: 'var(--primary)' }}></div>
                  )}
                  <div style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: 700, 
                    color: isActive ? 'var(--primary)' : 'var(--gray-500)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em',
                    marginBottom: '4px',
                    transition: 'color 0.3s ease'
                  }}>
                    {step.label}
                  </div>
                  <div style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 800, 
                    color: isActive ? 'var(--foreground)' : 'var(--gray-600)',
                    transition: 'color 0.3s ease'
                  }}>
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content Pane */}
          <div className="glass-heavy saas-shadow" style={{ 
            borderRadius: 'var(--radius-xl)', 
            padding: 'var(--spacing-8)', 
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div key={activeStep} style={{ animation: 'fadeInUp 0.4s ease-out forwards' }}>
              <style>{`
                @keyframes fadeInUp {
                  from { opacity: 0; transform: translateY(10px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `}</style>
              
              <div style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: 'var(--primary-light)', 
                borderRadius: 'var(--radius-lg)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--primary)', 
                fontSize: '1.5rem', 
                fontWeight: 800,
                marginBottom: 'var(--spacing-5)'
              }}>
                {activeStep + 1}
              </div>
              
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                {methodologySteps[activeStep].title}
              </h3>
              
              <p style={{ fontSize: '1.125rem', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: 'var(--spacing-6)' }}>
                {methodologySteps[activeStep].description}
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-3)' }}>
                {methodologySteps[activeStep].features.map((feature, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.7rem' }}>
                      ✓
                    </div>
                    <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--gray-800)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .methodology-grid {
            grid-template-columns: 1fr 1.5fr !important;
          }
        }
      `}</style>
    </section>
  );
}
