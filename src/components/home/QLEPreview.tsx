'use client';

import React, { useState, useEffect } from 'react';

const qleStates = [
  {
    id: 'live',
    title: 'Live Session Feed',
    description: 'Every lesson is conducted through our secure platform, automatically tracking engagement and attendance.',
    mockup: (
      <div style={{ 
        width: '100%', 
        height: '340px', 
        backgroundColor: 'rgba(15, 23, 42, 0.3)', /* Dark translucent background */
        display: 'flex', 
        padding: '16px', 
        gap: '16px',
        position: 'relative',
        boxSizing: 'border-box'
      }}>
        {/* Background abstract patterns */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '120px', height: '120px', background: 'radial-gradient(circle at 0% 0%, rgba(250, 204, 21, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '140px', height: '140px', background: 'radial-gradient(circle at 100% 100%, rgba(56, 189, 248, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        {/* Left Side: Whiteboard */}
        <div style={{ 
          width: '65%', 
          backgroundColor: '#ffffff', 
          borderRadius: '16px', 
          padding: '16px 20px', 
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1.5px solid rgba(255,255,255,0.8)'
        }}>
          {/* Whiteboard Content */}
          <div style={{ textAlign: 'left', fontFamily: 'sans-serif' }}>
            <div style={{ fontWeight: 800, fontSize: '0.75rem', color: '#0f172a', marginBottom: '4px' }}>2. Vary Sentence Openings</div>
            <div style={{ fontSize: '0.625rem', color: '#475569', lineHeight: 1.3, marginBottom: '6px' }}>
              A common mistake in writing is starting multiple sentences in the same way, which can make the text monotonous. Varying your sentence structure keeps your writing dynamic.
            </div>
            
            <ul style={{ 
              listStyleType: 'disc', 
              paddingLeft: '12px', 
              margin: '0 0 10px 0', 
              fontSize: '0.6rem', 
              color: '#334155',
              lineHeight: 1.3
            }}>
              <li><strong>Verb</strong>: Running for her life, Sarah shouted at the bus to stop.</li>
              <li><strong>Simile</strong>: As quiet as a whisper, he turned to me.</li>
              <li><strong>Preposition</strong>: Beyond the gate, the road stretched far away.</li>
              <li><strong>Adverb</strong>: Cautiously, he moved away from the lion.</li>
            </ul>

            <div style={{ fontWeight: 800, fontSize: '0.75rem', color: '#0f172a', marginBottom: '4px' }}>3. Use Figurative Language</div>
            <div style={{ fontSize: '0.625rem', color: '#475569', lineHeight: 1.3, marginBottom: '4px' }}>
              Similes, metaphors, and other forms of figurative language can add depth and richness.
            </div>
            <div style={{ fontSize: '0.6rem', color: '#334155', paddingLeft: '8px', borderLeft: '2px solid #38bdf8', fontStyle: 'italic' }}>
              Example: &quot;The wind howled like a banshee, turning the rain into a salvo...&quot;
            </div>
          </div>
        </div>

        {/* Right Side: Tutor Video Screen inside Glass Block */}
        <div style={{ 
          width: '35%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          height: '100%',
          padding: '8px 0'
        }}>
          {/* Logo */}
          <div style={{ opacity: 0.9 }}>
            <img src="/logo.png" alt="QuickStudy" style={{ height: '32px', filter: 'brightness(0) invert(1)', width: 'auto', objectFit: 'contain' }} />
          </div>

          {/* Glass Block Tutor Feed */}
          <div style={{
            width: '120px',
            height: '80px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Tutor Scene inside Glass Block */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }} viewBox="0 0 120 80">
              {/* Bookshelf Background */}
              <line x1="0" y1="36" x2="120" y2="36" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />
              <line x1="0" y1="64" x2="120" y2="64" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />
              {/* Books */}
              <rect x="15" y="16" width="6" height="20" fill="rgba(244, 63, 94, 0.75)" rx="1" />
              <rect x="23" y="10" width="8" height="26" fill="rgba(59, 130, 246, 0.75)" rx="1" />
              <rect x="33" y="20" width="5" height="16" fill="rgba(16, 185, 129, 0.75)" rx="1" />
              <rect x="85" y="16" width="7" height="20" fill="rgba(168, 85, 247, 0.75)" rx="1" />
              
              <rect x="10" y="44" width="8" height="20" fill="rgba(234, 179, 8, 0.75)" rx="1" />
              <rect x="20" y="47" width="6" height="17" fill="rgba(236, 72, 153, 0.75)" rx="1" />
              <rect x="92" y="44" width="7" height="20" fill="rgba(6, 182, 212, 0.75)" rx="1" />
              
              {/* Tutor Avatar */}
              {/* Torso */}
              <path d="M35 80 C35 60, 85 60, 85 80" fill="rgba(255, 255, 255, 0.9)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
              {/* Head */}
              <circle cx="60" cy="50" r="11" fill="#fed7aa" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
              {/* Hair & Beard */}
              <path d="M48 50 C48 38, 72 38, 72 50 C72 44, 48 44, 48 50" fill="#1e293b" />
              <path d="M52 56 C52 64, 68 64, 68 56" fill="#1e293b" opacity="0.9" /> {/* Beard */}
              {/* Shirt Collar */}
              <path d="M53 66 L60 72 L67 66" stroke="#0f172a" strokeWidth="1" fill="none" />
              
              {/* Hands Gesturing */}
              <circle cx="42" cy="74" r="3.5" fill="#fed7aa" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
              <circle cx="78" cy="74" r="3.5" fill="#fed7aa" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
              <path d="M38 80 L42 74" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.2" />
              <path d="M82 80 L78 74" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.2" />
            </svg>

            {/* Live Indicator on Top corner of the glass block */}
            <div style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(239, 68, 68, 0.25)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              padding: '2px 6px',
              borderRadius: '9999px',
              zIndex: 2
            }}>
              <span className="live-dot" style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: '#ef4444',
                boxShadow: '0 0 6px #ef4444',
                display: 'inline-block',
                animation: 'live-dot-pulse 1.5s infinite'
              }}></span>
              <span style={{ fontSize: '0.55rem', fontWeight: 800, color: '#ef4444', letterSpacing: '0.05em' }}>LIVE</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ai',
    title: 'AI Lesson Summaries',
    description: 'After every lesson, our AI generates a custom summary of strengths, weaknesses, and what to focus on next.',
    mockup: (
      <div style={{ padding: '24px', height: '340px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--secondary), var(--primary))' }}></div>
          <span style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff' }}>AI Insights Generated</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ padding: '14px 18px', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', borderRadius: '0 12px 12px 0' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Strengths</span>
            <span style={{ fontSize: '0.95rem', color: '#e2e8f0', fontWeight: 500 }}>Excellent grasp of varying sentence openings.</span>
          </div>
          <div style={{ padding: '14px 18px', backgroundColor: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #f59e0b', borderRadius: '0 12px 12px 0' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f59e0b', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Needs Review</span>
            <span style={{ fontSize: '0.95rem', color: '#e2e8f0', fontWeight: 500 }}>Sustaining tension in descriptive writing.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'library',
    title: 'Recorded Lessons Library',
    description: 'Students can securely replay any past lesson for revision before exams or tests.',
    mockup: (
      <div style={{ padding: '24px', height: '340px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontWeight: 700, marginBottom: '16px', color: '#ffffff', fontSize: '1rem' }}>Recent Recordings</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px', 
                padding: '12px', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '12px', 
                backgroundColor: 'rgba(255,255,255,0.02)', 
                cursor: 'pointer', 
                transition: 'background-color 0.2s ease' 
              }} 
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'} 
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'}
            >
              {/* Image thumbnail with centered play button */}
              <div style={{
                width: '72px',
                height: '44px',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <img 
                  src={`/tutor${item}.png`} 
                  alt={`Tutor ${item}`} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                    paddingLeft: '2px'
                  }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="#0f172a">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>English Language - Week {4-item}</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>60 mins • {item} days ago</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'dashboard',
    title: 'Progress Dashboard',
    description: 'Parents have complete transparency with real-time analytics on attendance, confidence, and target grades.',
    mockup: (
      <div style={{ padding: '24px', height: '340px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ padding: '16px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38bdf8' }}>100%</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', marginTop: '4px' }}>Attendance</div>
          </div>
          <div style={{ padding: '16px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#10b981' }}>+15%</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', marginTop: '4px' }}>Confidence</div>
          </div>
        </div>
        <div style={{ padding: '16px', backgroundColor: 'rgba(56, 189, 248, 0.08)', borderRadius: '16px', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8', marginBottom: '10px' }}>Target Grade Progression</div>
          <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '75%', height: '100%', backgroundColor: '#38bdf8', borderRadius: '4px' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span>Grade 5</span>
            <span>Grade 7 (Target)</span>
          </div>
        </div>
      </div>
    )
  }
];

export default function QLEPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % qleStates.length);
    }, 4500);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section style={{ 
      padding: 'var(--spacing-16) 0', 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: '-10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ maxWidth: '1100px', position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '4px 12px', 
            backgroundColor: 'rgba(56, 189, 248, 0.08)', 
            color: '#38bdf8', 
            border: '1px solid rgba(56, 189, 248, 0.2)', 
            borderRadius: 'var(--radius-full)', 
            fontSize: '0.875rem', 
            fontWeight: 700, 
            marginBottom: 'var(--spacing-4)' 
          }}>
            The Operating System for Learning
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff' }}>
            Meet The QuickStudy Learning Environment
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--spacing-12)',
          alignItems: 'center'
        }} className="qle-grid">
          
          {/* Left Side: Text States */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
            {qleStates.map((state, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div 
                  key={state.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => { setActiveIndex(idx); setIsHovered(true); }}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    opacity: isActive ? 1 : 0.35,
                    transform: isActive ? 'translateX(10px)' : 'translateX(0)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    borderLeft: isActive ? '3px solid #38bdf8' : '3px solid transparent',
                    paddingLeft: 'var(--spacing-4)'
                  }}
                >
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                    {state.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: isActive ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.4)', lineHeight: 1.5 }}>
                    {state.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Side: Showcase */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
            
            {/* Sleek Label Text above the window */}
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#38bdf8', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em', 
              marginBottom: '16px', 
              textAlign: 'center',
              opacity: 0.95
            }}>
              {activeIndex === 0 ? "sample live class recording" :
               activeIndex === 1 ? "sample AI Session Summary" :
               activeIndex === 2 ? "sample recorded lesson library" :
               "sample progress dashboard"}
            </p>
            
            {/* Showcase Box Container (Styled like the Diagnostic Window Glass Block) */}
            <div 
              className="glass-heavy saas-shadow animate-float" 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.05)',
                borderRadius: '32px', 
                minHeight: '380px',
                width: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Header bar mimicking a browser/app window */}
              <div style={{ 
                height: '40px', 
                backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 var(--spacing-4)',
                gap: '6px'
              }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                <div style={{ marginLeft: '12px', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>app.quickstudy.uk</div>
                
                {/* Live Indicator on Top right corner of browser bar */}
                {activeIndex === 0 && (
                  <div style={{ 
                    marginLeft: 'auto', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    background: 'rgba(239, 68, 68, 0.2)', 
                    padding: '4px 12px', 
                    borderRadius: '9999px', 
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    boxShadow: '0 0 10px rgba(239, 68, 68, 0.15)'
                  }}>
                    <span style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      backgroundColor: '#ef4444', 
                      display: 'inline-block',
                      boxShadow: '0 0 8px #ef4444',
                      animation: 'live-dot-pulse 1.5s infinite'
                    }}></span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#ef4444', letterSpacing: '0.08em' }}>LIVE NOW</span>
                  </div>
                )}
              </div>

              {/* Dynamic Content */}
              <div style={{ position: 'relative', height: 'calc(100% - 40px)' }}>
                {qleStates.map((state, idx) => (
                  <div 
                    key={state.id}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: activeIndex === idx ? 1 : 0,
                      visibility: activeIndex === idx ? 'visible' : 'hidden',
                      transform: activeIndex === idx ? 'scale(1)' : 'scale(0.98)',
                      transition: 'all 0.4s ease-in-out'
                    }}
                  >
                    {state.mockup}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .qle-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        @keyframes live-dot-pulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 10px #ef4444; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
