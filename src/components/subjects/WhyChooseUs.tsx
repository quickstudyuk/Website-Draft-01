import React from 'react';
import { BaseCard } from '@/components/ui/cards';

const reasons = [
  "Personalised Support",
  "Progress Tracking",
  "Affordable Pricing",
  "Flexible Scheduling",
  "Expert Tutors",
  "AI Learning Tools",
  "Transparent Communication"
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-10)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#1e3a8a',
            background: 'rgba(30, 58, 138, 0.08)',
            border: '1px solid rgba(30, 58, 138, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>The QuickStudy Difference</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
            Why Parents Choose QuickStudy
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '650px', margin: '12px auto 0 auto', lineHeight: 1.6 }}>
            The perfect blend of expert human tutoring and advanced AI tools to guarantee your child's success.
          </p>
        </div>
        
        <div className="reasons-container">
          {reasons.map((reason, idx) => (
            <div key={idx} className="reason-pill">
              <span className="reason-check">✓</span>
              <span className="reason-text">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .reasons-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .reason-pill {
          padding: 12px 14px;
          border-radius: 16px;
          background-color: rgba(9, 17, 36, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .reason-check {
          color: #38bdf8;
          font-size: 0.9rem;
          line-height: 1;
        }
        
        .reason-text {
          font-size: 0.8rem;
          font-weight: 600;
          color: white;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .reasons-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
          }
          
          .reason-pill {
            padding: 16px 32px;
            border-radius: 100px;
            gap: 12px;
            transition: transform 0.2s ease, border-color 0.2s ease;
          }
          
          .reason-pill:hover {
            transform: translateY(-2px);
            border-color: rgba(255,255,255,0.3);
          }
          
          .reason-check {
            font-size: 1.25rem;
          }
          
          .reason-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
