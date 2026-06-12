'use client';

import React from 'react';

const steps = [
  { step: "Step 1", title: "Learning Profile Diagnosis" },
  { step: "Step 2", title: "Personalised Learning Plan" },
  { step: "Step 3", title: "Weekly Tutoring Sessions" },
  { step: "Step 4", title: "QLE Environment Support" },
  { step: "Step 5", title: "Continuous Progress Tracking" },
  { step: "Step 6", title: "Improved Confidence & Results" }
];

export default function SystemFlow() {
  return (
    <section className="section-padding" style={{ 
      backgroundColor: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '100px',
      borderBottom: '1px solid #e2e8f0'
    }}>
      {/* Background radial blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#0284c7',
            background: 'rgba(2, 132, 199, 0.08)',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Systematic Approach</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#0f172a', 
            letterSpacing: '-0.02em', 
            margin: '0 0 12px 0',
            lineHeight: 1.15
          }}>
            How We Help Students Improve
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            A structured academic system, not informal tutoring.
          </p>
        </div>
        
        {/* Horizontal & Vertical Flow Container */}
        <div className="flow-container" style={{
          position: 'relative',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '20px 0'
        }}>
          {/* Connecting line */}
          <div className="flow-line" />
          
          <div className="flow-steps">
            {steps.map((item, idx) => (
              <div key={idx} className="step-wrapper">
                <div className="step-node-outer">
                  <div className="step-node">{idx + 1}</div>
                </div>
                <div className="step-content">
                  <span className="step-label">{item.step}</span>
                  <h4 className="step-title">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .flow-container {
          position: relative;
        }

        .flow-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 28px;
          width: 4px;
          background: linear-gradient(180deg, rgba(2, 132, 199, 0.1) 0%, #0284c7 50%, rgba(2, 132, 199, 0.1) 100%);
          z-index: 1;
        }

        .flow-steps {
          display: flex;
          flex-direction: column;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        .step-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }

        .step-node-outer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background-color: #f8fafc;
          border-radius: 50%;
          z-index: 5;
          flex-shrink: 0;
        }

        .step-node {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 3px solid #0284c7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 800;
          color: #0284c7;
          box-shadow: 0 4px 15px rgba(2, 132, 199, 0.15);
          transition: all 0.3s ease;
        }

        .step-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 8px;
        }

        .step-label {
          font-size: 0.8rem;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }

        .step-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.4;
          margin: 0;
        }

        /* Hover animations */
        .step-wrapper:hover .step-node {
          background-color: #0284c7;
          color: #ffffff;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(2, 132, 199, 0.3);
        }

        @media (min-width: 768px) {
          .flow-line {
            top: 28px;
            bottom: auto;
            left: 30px;
            right: 30px;
            height: 4px;
            width: calc(100% - 60px);
            background: linear-gradient(90deg, rgba(2, 132, 199, 0.1) 0%, #0284c7 50%, rgba(2, 132, 199, 0.1) 100%);
          }

          .flow-steps {
            flex-direction: row;
            justify-content: space-between;
            gap: 16px;
          }

          .step-wrapper {
            flex-direction: column;
            align-items: center;
            text-align: center;
            flex: 1;
            gap: 16px;
          }

          .step-content {
            padding-top: 0;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
