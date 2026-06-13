'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PricingOverview() {
  const [sessions, setSessions] = useState(12);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const getFrequencyText = (qty: number) => {
    const weeklyAvg = (qty / 4).toFixed(1);
    const weeklyFormatted = weeklyAvg.endsWith('.0') ? weeklyAvg.slice(0, -2) : weeklyAvg;
    return `Approximately ${weeklyFormatted} sessions per week`;
  };

  return (
    <section className="section-padding" style={{ 
      backgroundColor: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
      paddingBottom: '60px',
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

      <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 1, margin: '0 auto', textAlign: 'center' }}>
        
        {/* Header Block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', marginBottom: '32px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#0284c7',
            background: 'rgba(2, 132, 199, 0.08)',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            borderRadius: '100px', padding: '6px 18px'
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
          <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            Pay-as-you-go or block book depending on your needs. Adjust or cancel sessions anytime. No hidden fees. No long-term contracts.
          </p>
        </div>

        {/* Flat Rate Info Card - Centered */}
        <div style={{ 
          background: 'rgba(9, 17, 36, 0.95)', 
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
          padding: '36px 30px', 
          borderRadius: '24px',
          maxWidth: '600px',
          margin: '0 auto 24px auto',
          textAlign: 'center'
        }}
        className="price-display-card"
        >
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Standard Flat Rate</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', justifyContent: 'center' }}>
            <span style={{ fontSize: 'clamp(3.5rem, 6vw, 4.5rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>£18</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#60a5fa' }}>/ session</span>
          </div>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', marginTop: '16px', lineHeight: 1.5, marginBottom: 0 }}>
            Includes 1:1 tailored support, full lesson recordings, automated summaries, and parent dashboard access.
          </p>
        </div>

        {/* Action Button Group */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <Link href="/book-trial" style={{ textDecoration: 'none' }}>
            <button 
              style={{ 
                padding: '14px 28px', 
                fontSize: '1rem', 
                backgroundColor: '#0f172a', 
                color: '#ffffff', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: 'var(--radius-md)', 
                fontWeight: 700, 
                cursor: 'pointer', 
                transition: 'all 0.2s ease', 
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
              }} 
              onMouseOver={(e) => { 
                e.currentTarget.style.backgroundColor = '#1e293b'; 
                e.currentTarget.style.transform = 'translateY(-2px)'; 
              }} 
              onMouseOut={(e) => { 
                e.currentTarget.style.backgroundColor = '#0f172a'; 
                e.currentTarget.style.transform = 'translateY(0)'; 
              }}
            >
              Book A Free Trial Lesson
            </button>
          </Link>
        </div>

        {/* Expandable Calculator Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
          <button 
            onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '16px 32px',
              backgroundColor: '#0f172a',
              border: '1.5px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              color: '#ffffff',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease',
              width: '100%',
              maxWidth: '380px',
              boxSizing: 'border-box'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1e293b';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#0f172a';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff' }}>
              Calculate Your Monthly Cost
              <span style={{ 
                transform: isCalculatorOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                transition: 'transform 0.3s ease',
                display: 'inline-block',
                fontSize: '0.85rem',
                color: '#ffffff'
              }}>▼</span>
            </span>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 700, marginTop: '2px' }}>
              in 1 easy step
            </span>
          </button>
        </div>

        {/* Sliding Calculator Drawer */}
        <div style={{
          maxHeight: isCalculatorOpen ? '1000px' : '0px',
          opacity: isCalculatorOpen ? 1 : 0,
          visibility: isCalculatorOpen ? 'visible' : 'hidden',
          overflow: 'hidden',
          transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
          marginTop: '20px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            background: 'rgba(9, 17, 36, 0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '28px',
            padding: '36px 30px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width: '100%',
            maxWidth: '600px'
          }}
          className="estimator-card"
          >
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>Monthly Expense Estimator</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem', marginTop: '4px', marginBottom: 0 }}>
                Adjust the slider to choose number of sessions per month (8 to 40).
              </p>
            </div>

            {/* Slider Control */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.85)' }}>Sessions per month</span>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: '#38bdf8' }}>{sessions}</span>
              </div>

              {/* Slider Input */}
              <div style={{ position: 'relative', width: '100%', padding: '6px 0' }}>
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
                fontSize: '0.9rem', 
                fontWeight: 700,
                backgroundColor: 'rgba(96, 165, 250, 0.08)',
                padding: '10px 14px',
                borderRadius: '10px',
                border: '1px solid rgba(96, 165, 250, 0.15)'
              }}>
                {getFrequencyText(sessions)}
              </div>
            </div>

            {/* Comparative Pricing Output */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {/* QuickStudy Price */}
              <div style={{
                backgroundColor: 'rgba(74, 222, 128, 0.05)',
                border: '1px solid rgba(74, 222, 128, 0.2)',
                borderRadius: '16px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>QuickStudy Cost</span>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#10b981', margin: '4px 0 2px 0', lineHeight: 1 }}>
                  £{sessions * 18}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>£18 / session</span>
              </div>

              {/* Competitor Price */}
              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '16px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Other Tutor Cost</span>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ef4444', margin: '8px 0 4px 0', lineHeight: 1 }}>
                  £{sessions * 30}
                </div>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>at £30 / session rate</span>
              </div>
            </div>
            
            {/* Quick presets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
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
          .estimator-card {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

