'use client';

import React from 'react';
import Link from 'next/link';

export default function PricingOverview() {
  const [sessions, setSessions] = React.useState(12);
  const rate = 18;
  const total = sessions * rate;

  // Helper to give parents context on frequency (e.g. 8 sessions = 2 sessions per week)
  const getFrequencyText = (qty: number) => {
    const weeklyAvg = (qty / 4).toFixed(1);
    // clean up .0
    const weeklyFormatted = weeklyAvg.endsWith('.0') ? weeklyAvg.slice(0, -2) : weeklyAvg;
    return `Approximately ${weeklyFormatted} sessions per week`;
  };

  return (
    <section className="section-padding" style={{ 
      backgroundColor: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '100px',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0'
    }}>
      {/* Light theme background accent blobs */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute', bottom: '10%', left: '-10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ maxWidth: '1100px', position: 'relative', zIndex: 1 }}>
        <div className="pricing-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px',
          alignItems: 'center'
        }}>
          
          {/* Left Side: Pricing details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <span style={{
                display: 'inline-block',
                fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.15em', color: '#0284c7',
                background: 'rgba(2, 132, 199, 0.08)',
                border: '1px solid rgba(2, 132, 199, 0.2)',
                borderRadius: '100px', padding: '6px 18px',
                marginBottom: '16px'
              }}>Core Pricing</span>
              
              <h2 style={{ 
                fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
                fontWeight: 800, 
                color: '#0f172a', 
                letterSpacing: '-0.02em', 
                margin: 0,
                lineHeight: 1.15
              }}>
                Simple, Transparent Pricing
              </h2>
            </div>

            {/* Flat Rate Info Card - Dark Styling */}
            <div style={{ 
              background: 'rgba(9, 17, 36, 0.95)', 
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
              padding: '36px 30px', 
              borderRadius: '24px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              cursor: 'default'
            }}
            className="price-display-card"
            >
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Standard Flat Rate</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: 'clamp(3.5rem, 6vw, 4.5rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>£18</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#60a5fa' }}>/ session</span>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', marginTop: '16px', lineHeight: 1.5, marginBottom: 0 }}>
                Includes 1:1 tailored support, full lesson recordings, automated summaries, and parent dashboard access.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
              <p style={{ margin: 0, fontWeight: 700, color: '#0f172a' }}>No hidden fees. No long-term contracts.</p>
              <p style={{ margin: 0 }}>Pay-as-you-go or block book depending on your needs. Adjust or cancel sessions anytime.</p>
            </div>
            
            <div style={{ marginTop: '8px' }}>
              <Link href="/book-trial" style={{ textDecoration: 'none' }}>
                <button 
                  style={{ 
                    padding: '16px 32px', 
                    fontSize: '1.05rem', 
                    backgroundColor: 'rgba(2, 132, 199, 0.1)', 
                    color: '#0284c7', 
                    border: '1px solid rgba(2, 132, 199, 0.3)', 
                    borderRadius: 'var(--radius-md)', 
                    fontWeight: 700, 
                    cursor: 'pointer', 
                    transition: 'all 0.2s ease', 
                    boxShadow: '0 4px 15px rgba(2, 132, 199, 0.05)' 
                  }} 
                  onMouseOver={(e) => { 
                    e.currentTarget.style.backgroundColor = 'rgba(2, 132, 199, 0.18)'; 
                    e.currentTarget.style.transform = 'translateY(-2px)'; 
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(2, 132, 199, 0.1)';
                  }} 
                  onMouseOut={(e) => { 
                    e.currentTarget.style.backgroundColor = 'rgba(2, 132, 199, 0.1)'; 
                    e.currentTarget.style.transform = 'translateY(0)'; 
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(2, 132, 199, 0.05)';
                  }}
                >
                  Book A Free Trial Lesson
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Interactive Expense Estimator - Dark Styling */}
          <div style={{
            background: 'rgba(9, 17, 36, 0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '28px',
            padding: '40px 32px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}
          className="estimator-card"
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>Monthly Expense Estimator</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.95rem', marginTop: '6px', marginBottom: 0 }}>
                Slide to select number of sessions per month (8 to 40).
              </p>
            </div>

            {/* Selector Control */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.85)' }}>Sessions per month</span>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: '#38bdf8' }}>{sessions}</span>
              </div>

              {/* Slider Input */}
              <div style={{ position: 'relative', width: '100%', padding: '10px 0' }}>
                <input 
                  type="range" 
                  min="8" 
                  max="40" 
                  value={sessions} 
                  onChange={(e) => setSessions(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    outline: 'none',
                    WebkitAppearance: 'none',
                    cursor: 'pointer'
                  }}
                  className="custom-range-slider"
                />
              </div>

              {/* Weekly Help Text */}
              <div style={{ 
                textAlign: 'center', 
                color: '#60a5fa', 
                fontSize: '0.95rem', 
                fontWeight: 600,
                backgroundColor: 'rgba(96, 165, 250, 0.08)',
                padding: '10px 14px',
                borderRadius: '10px',
                border: '1px solid rgba(96, 165, 250, 0.15)'
              }}>
                {getFrequencyText(sessions)}
              </div>
            </div>

            {/* Result Display */}
            <div style={{
              backgroundColor: 'rgba(9, 17, 36, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '20px',
              padding: '24px',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Estimated Monthly Cost</span>
              <div style={{ fontSize: '3.25rem', fontWeight: 800, color: '#4ade80', margin: '8px 0 4px 0', lineHeight: 1 }}>
                £{total}
              </div>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.4)', display: 'block' }}>
                *Before discounts (if any)
              </span>
            </div>
            
            {/* Quick selectors for parent ease of use */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Presets:</span>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[8, 12, 16, 24].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSessions(num)}
                    style={{
                      flex: '1',
                      minWidth: '60px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: sessions === num ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: sessions === num ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                      color: sessions === num ? '#38bdf8' : 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.85rem',
                      fontWeight: sessions === num ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {num === 8 && '2/wk (8)'}
                    {num === 12 && '3/wk (12)'}
                    {num === 16 && '4/wk (16)'}
                    {num === 24 && '6/wk (24)'}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        .price-display-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
        }
        
        /* Slider Webkit Styling */
        .custom-range-slider::-webkit-slider-runnable-track {
          width: 100%;
          height: 8px;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-range-slider::-webkit-slider-thumb {
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background: #38bdf8;
          cursor: pointer;
          -webkit-appearance: none;
          margin-top: -7px;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
          transition: transform 0.1s ease;
        }
        .custom-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        
        /* Slider Mozilla Styling */
        .custom-range-slider::-moz-range-track {
          width: 100%;
          height: 8px;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-range-slider::-moz-range-thumb {
          height: 22px;
          width: 22px;
          border: none;
          border-radius: 50%;
          background: #38bdf8;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
          transition: transform 0.1s ease;
        }
        .custom-range-slider::-moz-range-thumb:hover {
          transform: scale(1.15);
        }

        @media (max-width: 768px) {
          .pricing-grid {
            gap: 40px !important;
          }
          .estimator-card {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
