'use client';

import React from 'react';
import { useLearningProfileResult, setDiagnosticModalOpen, setLearningProfileResult } from './LearningProfileStore';

export default function MobileBottomResults() {
  const result = useLearningProfileResult();

  const handleStartTest = () => {
    setDiagnosticModalOpen(true);
  };

  const handleStartOver = () => {
    setLearningProfileResult(null);
    window.dispatchEvent(new Event('qs_profile_reset'));
  };

  return (
    <section className="mobile-bottom-results-section" style={{
      padding: 'var(--spacing-12) 0',
      backgroundColor: '#070b19',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '20%',
        width: '80vw',
        height: '80vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4.5vw, 2.25rem)',
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            marginBottom: 'var(--spacing-6)',
            letterSpacing: '-0.02em'
          }}>
            Your Child's Learning Profile
          </h2>

          {!result ? (
            /* Empty State */
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px dashed rgba(255, 255, 255, 0.15)',
              borderRadius: '24px',
              padding: 'var(--spacing-8) var(--spacing-6)',
              textAlign: 'center',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📋</div>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.75)',
                fontWeight: 600,
                lineHeight: 1.5,
                margin: '0 0 var(--spacing-6) 0',
                textTransform: 'none'
              }}>
                Complete your 60 second diagnostic to view full results
              </p>
              
              <button
                onClick={handleStartTest}
                style={{
                  padding: '14px 28px',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #facc15 0%, #f59e0b 100%)',
                  color: '#0f172a',
                  border: 'none',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(250, 204, 21, 0.3)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(250, 204, 21, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(250, 204, 21, 0.3)';
                }}
              >
                Complete Diagnostic Test
              </button>
            </div>
          ) : (
            /* Results State */
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)',
              borderRadius: '32px',
              padding: 'var(--spacing-6)',
              boxSizing: 'border-box'
            }}>
              
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 16px',
                  backgroundColor: result.urgencyBg,
                  border: `1px solid ${result.urgencyColor}40`,
                  borderRadius: '9999px',
                  marginBottom: '10px'
                }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: result.urgencyColor, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {result.urgencyLevel === 'High' ? '⚠ Action Recommended' : result.urgencyLevel === 'Moderate' ? '● Moderate Priority' : '✓ Good Standing'}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white', marginBottom: '4px', marginTop: 0 }}>
                  Diagnostic Report
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                  Calculated Risk and Recommendations
                </p>
              </div>

              {/* Metric Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                
                {/* Academic Risk */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px', color: 'white' }}>
                    <span>Academic Risk Level</span>
                    <span style={{ color: result.riskScore >= 65 ? '#ef4444' : result.riskScore >= 40 ? '#f59e0b' : '#10b981' }}>
                      {result.riskScore >= 65 ? 'High' : result.riskScore >= 40 ? 'Moderate' : 'Low'} ({result.riskScore}%)
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${result.riskScore}%`, height: '100%', borderRadius: '4px',
                      background: result.riskScore >= 65 ? 'linear-gradient(90deg, #f59e0b, #ef4444)' : result.riskScore >= 40 ? '#f59e0b' : '#10b981',
                      transition: 'width 1s ease'
                    }} />
                  </div>
                </div>

                {/* Confidence Gap */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px', color: 'white' }}>
                    <span>Confidence vs Potential Gap</span>
                    <span style={{ color: result.confidenceGap >= 60 ? '#ef4444' : result.confidenceGap >= 35 ? '#f59e0b' : '#10b981' }}>
                      {result.confidenceGap >= 60 ? 'Critical' : result.confidenceGap >= 35 ? 'Noticeable' : 'Manageable'} ({result.confidenceGap}%)
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${result.confidenceGap}%`, height: '100%', borderRadius: '4px',
                      backgroundColor: result.confidenceGap >= 60 ? '#ef4444' : result.confidenceGap >= 35 ? '#f59e0b' : '#10b981',
                    }} />
                  </div>
                </div>

                {/* Improvement Potential */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px', color: 'white' }}>
                    <span>Improvement Potential ({result.timeframe})</span>
                    <span style={{ color: '#10b981' }}>+{result.improvementPotential}%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${result.improvementPotential}%`, height: '100%', borderRadius: '4px', background: 'linear-gradient(90deg, #38bdf8, #10b981)' }} />
                  </div>
                </div>
              </div>

              {/* Sessions Recommendation */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 18px',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '16px',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '2rem', lineHeight: 1 }}>📅</div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                    Recommended Schedule
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'white' }}>
                    {result.sessionsPerWeek}× per week · {result.sessionDuration} each
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
                    Target: {result.gradeTarget}
                  </div>
                </div>
              </div>

              {/* Key Findings */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  Key Findings
                </div>
                {result.keyFindings.map((finding, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ color: '#facc15', fontSize: '0.8rem', marginTop: '2px', flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4, textAlign: 'left' }}>{finding}</span>
                  </div>
                ))}
              </div>

              {/* Recommendation blurb */}
              <div style={{
                padding: '12px 16px',
                backgroundColor: 'rgba(255,255,255,0.04)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '20px'
              }}>
                <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, margin: 0, textAlign: 'left' }}>
                  {result.recommendation}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => {
                    const el = document.getElementById('get-started');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'linear-gradient(135deg, #facc15 0%, #f59e0b 100%)',
                    color: '#0f172a',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(250, 204, 21, 0.35)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(250, 204, 21, 0.45)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(250, 204, 21, 0.35)';
                  }}
                >
                  Unlock Full Learning Profile →
                </button>

                <button
                  onClick={handleStartOver}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255, 255, 255, 0.4)',
                    textDecoration: 'underline',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    marginTop: '8px',
                    textAlign: 'center'
                  }}
                >
                  Retake Diagnostic Test
                </button>
              </div>

            </div>
          )}

        </div>
      </div>

      <style>{`
        /* Hide on desktop, show only on mobile */
        @media (min-width: 1024px) {
          .mobile-bottom-results-section {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
