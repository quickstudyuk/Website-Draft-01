'use client';

import React, { useState, useEffect, useRef } from 'react';

const qleStates = [
  {
    id: 'recordings',
    title: 'Lesson Recordings',
    description: 'Never forget an explanation. Revisit difficult topics anytime from your personal, secure vault.',
    label: 'secure video playback',
    mockup: (
      <div style={{ padding: '20px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, backgroundColor: '#000', borderRadius: '16px', overflow: 'hidden', position: 'relative', boxShadow: '0 10px 20px rgba(0,0,0,0.4)' }}>
          <img src="/tutor1.png" alt="Tutor Session" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'rgba(15, 23, 42, 0.8)', padding: '12px', borderRadius: '12px', backdropFilter: 'blur(8px)' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <div style={{ flex: 1, height: '4px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}>
              <div style={{ width: '45%', height: '100%', backgroundColor: '#38bdf8', borderRadius: '2px' }}></div>
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff' }}>24:12 / 60:00</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ai-summaries',
    title: 'AI Lesson Summaries',
    description: 'Instantly review what was learned. Our AI highlights strengths and pinpoints areas needing focus.',
    label: 'session analysis',
    mockup: (
      <div style={{ padding: '24px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7, #38bdf8)' }}></div>
          <span style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff' }}>AI Insights Generated</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ padding: '14px 18px', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', borderRadius: '0 12px 12px 0' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10b981', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Strengths</span>
            <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>Excellent grasp of quadratic equations.</span>
          </div>
          <div style={{ padding: '14px 18px', backgroundColor: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #f59e0b', borderRadius: '0 12px 12px 0' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f59e0b', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Needs Review</span>
            <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>Applying factorisation in complex word problems.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ai-notes',
    title: 'AI Revision Notes',
    description: 'Custom notes generated directly from the tutoring session for frictionless, highly relevant revision.',
    label: 'smart notes generator',
    mockup: (
      <div style={{ padding: '24px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', flex: 1, boxShadow: '0 10px 25px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h4 style={{ color: '#0f172a', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 10px 0' }}>Factorising Quadratics</h4>
            <p style={{ color: '#475569', fontSize: '0.825rem', lineHeight: 1.4, margin: '0 0 12px 0' }}>
              To factorise an expression in the form <strong>x² + bx + c</strong>, find two numbers that:
            </p>
            <ul style={{ color: '#475569', fontSize: '0.8rem', lineHeight: 1.4, margin: '0 0 12px 0', paddingLeft: '18px', textAlign: 'left' }}>
              <li style={{ marginBottom: '4px' }}>Multiply to give the constant term <strong>c</strong></li>
              <li style={{ marginBottom: '4px' }}>Add to give the x coefficient <strong>b</strong></li>
            </ul>
            <div style={{ backgroundColor: '#f8fafc', borderLeft: '3px solid #3b82f6', padding: '8px 12px', borderRadius: '4px', fontSize: '0.75rem', color: '#1e293b', textAlign: 'left', lineHeight: 1.4 }}>
              <strong>Example:</strong> x² + 5x + 6 = (x + 2)(x + 3)<br/>
              <em>Product (2 × 3) = 6 | Sum (2 + 3) = 5</em>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ padding: '8px 16px', backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '0.75rem', fontWeight: 700, borderRadius: '8px' }}>Algebra</div>
            <div style={{ padding: '8px 16px', backgroundColor: '#fef2f2', color: '#dc2626', fontSize: '0.75rem', fontWeight: 700, borderRadius: '8px' }}>Factorisation</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ai-quizzes',
    title: 'AI Quizzes',
    description: 'Active recall practice formulated entirely on the student\'s exact curriculum and lesson content.',
    label: 'interactive active recall',
    mockup: (
      <div style={{ padding: '24px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, margin: '0 0 8px 0' }}>Knowledge Check</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>Question 3 of 10</p>
        </div>
        <div style={{ padding: '16px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', marginBottom: '16px', color: '#fff', fontSize: '0.95rem' }}>
          What is the primary function of mitochondria in a cell?
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
          <div style={{ padding: '12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#94a3b8', fontSize: '0.85rem' }}>Protein synthesis</div>
          <div style={{ padding: '12px', border: '1px solid #10b981', backgroundColor: 'rgba(16,185,129,0.1)', borderRadius: '8px', color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>Energy production (ATP) ✓</div>
          <div style={{ padding: '12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#94a3b8', fontSize: '0.85rem' }}>DNA storage</div>
        </div>
      </div>
    )
  },
  {
    id: 'progress',
    title: 'Progress Tracking',
    description: 'Clear visibility into topic mastery, confidence levels, and overall academic trajectory.',
    label: 'mastery dashboard',
    mockup: (
      <div style={{ padding: '24px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ padding: '16px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38bdf8' }}>92%</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', marginTop: '4px' }}>Topic Mastery</div>
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
  },
  {
    id: 'parents',
    title: 'Parent Updates',
    description: 'Automated insights so you\'re always informed without having to chase for information.',
    label: 'parent insight portal',
    mockup: (
      <div style={{ padding: '24px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📱</div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>Weekly Update Ready</div>
              <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Just now</div>
            </div>
          </div>
          <p style={{ color: '#e2e8f0', fontSize: '0.85rem', lineHeight: 1.6, margin: '0 0 16px 0' }}>
            Sarah completed 2 lessons and 3 quizzes this week. Confidence in Chemistry has improved. 1 area requires additional focus.
          </p>
          <div style={{ padding: '10px', textAlign: 'center', backgroundColor: 'rgba(56,189,248,0.1)', color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, borderRadius: '8px', cursor: 'pointer' }}>
            View Full Report
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'communication',
    title: 'Tutor Communication',
    description: 'Direct messaging to resolve questions between sessions and stay continually connected.',
    label: 'secure messaging',
    mockup: (
      <div style={{ padding: '20px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(15,23,42,0.6)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#38bdf8', overflow: 'hidden' }}>
               <img src="/tutor2.png" alt="Tutor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>Dr. James Wilson</div>
              <div style={{ color: '#10b981', fontSize: '0.7rem' }}>Online</div>
            </div>
          </div>
          <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ alignSelf: 'flex-end', backgroundColor: '#38bdf8', color: '#fff', padding: '10px 14px', borderRadius: '16px 16px 0 16px', fontSize: '0.8rem', maxWidth: '80%' }}>
              I'm stuck on question 4 from the revision sheet.
            </div>
            <div style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', padding: '10px 14px', borderRadius: '16px 16px 16px 0', fontSize: '0.8rem', maxWidth: '80%' }}>
              No problem! Remember to balance the equation first. What do you get when you multiply both sides by 2?
            </div>
          </div>
          <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '8px 16px', color: '#64748b', fontSize: '0.8rem' }}>Type a message...</div>
          </div>
        </div>
      </div>
    )
  }
];

export default function QLEPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPeekCollapsed, setIsPeekCollapsed] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth < 768) {
            setHasAnimated(true);
            observer.disconnect();

            // Peek animation: slide close, then slide back open
            setIsPeekCollapsed(true);
            setTimeout(() => {
              setIsPeekCollapsed(false);
            }, 700);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  const handleMobileItemClick = (idx: number) => {
    setIsPeekCollapsed(false);
    setHasAnimated(true);
    
    if (activeIndex === idx) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(idx);
    }
  };

  return (
    <section 
      ref={sectionRef}
      style={{ 
        padding: 'var(--spacing-16) 0', 
        background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
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
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Meet The QuickStudy Learning Environment
          </h2>

          {/* YouTube Video Explainer Trigger Button */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1.5px solid rgba(56, 189, 248, 0.4)',
              borderRadius: '9999px',
              color: '#38bdf8',
              fontSize: '0.9rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(56, 189, 248, 0.1)',
              transition: 'all 0.2s ease',
              marginTop: '8px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>▶</span> 2-Min Video Explains Everything About QLE
          </button>
        </div>

        {/* 1. DESKTOP LAYOUT (Side-by-side grid) */}
        <div className="qle-desktop-layout">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--spacing-12)',
            alignItems: 'center'
          }} className="qle-grid">
            
            {/* Left Side: Text States */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
              {qleStates.map((state, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div 
                    key={state.id}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => { setActiveIndex(idx); setIsHovered(true); }}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                      opacity: isActive ? 1 : 0.6,
                      transform: isActive ? 'translateX(8px)' : 'translateX(0)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      borderLeft: isActive ? '3px solid #38bdf8' : '3px solid transparent',
                      paddingLeft: 'var(--spacing-4)'
                    }}
                  >
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.4)', marginBottom: '6px', transition: 'color 0.3s ease' }}>
                      {state.title}
                    </h3>
                    {isActive && (
                      <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5, margin: 0, animation: 'fadeIn 0.3s ease-in' }}>
                        {state.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side: Showcase */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
              
              {/* Sleek Label Text above the window */}
              <p style={{ 
                fontSize: '0.8rem', 
                color: '#38bdf8', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                marginBottom: '16px', 
                textAlign: 'center',
                opacity: 0.95,
                height: '16px'
              }}>
                {activeIndex >= 0 && activeIndex < qleStates.length ? qleStates[activeIndex].label : ''}
              </p>
              
              {/* Showcase Box Container */}
              <div 
                className="glass-heavy saas-shadow animate-float" 
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.05)',
                  borderRadius: '32px', 
                  height: '420px',
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

        {/* 2. MOBILE ACCORDION DROPDOWN LAYOUT */}
        <div className="qle-mobile-layout">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {qleStates.map((state, idx) => {
              const isActive = activeIndex === idx && !isPeekCollapsed;
              return (
                <div 
                  key={state.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '24px',
                    padding: '16px 20px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isActive ? '0 10px 25px rgba(0, 0, 0, 0.25)' : 'none'
                  }}
                >
                  {/* Header Click Area */}
                  <div 
                    onClick={() => handleMobileItemClick(idx)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      gap: '12px'
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.55)',
                      margin: 0,
                      transition: 'color 0.3s ease',
                      flex: 1,
                      textAlign: 'left'
                    }}>
                      {state.title}
                    </h3>
                    
                    {/* Small dropdown chevron arrow */}
                    <div style={{
                      color: isActive ? '#38bdf8' : 'rgba(255, 255, 255, 0.3)',
                      transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease, color 0.3s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>

                  {/* Dropdown collapsible container */}
                  <div 
                    onClick={() => handleMobileItemClick(idx)}
                    style={{
                      maxHeight: isActive ? '1000px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                      opacity: isActive ? 1 : 0,
                      visibility: isActive ? 'visible' : 'hidden',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ paddingTop: '12px' }}>
                      {/* Description Text */}
                      <p style={{
                        fontSize: '0.86rem',
                        color: 'rgba(255, 255, 255, 0.75)',
                        lineHeight: 1.5,
                        margin: '0 0 16px 0',
                        textAlign: 'left'
                      }}>
                        {state.description}
                      </p>

                      {/* Mockup Label */}
                      <p style={{
                        fontSize: '0.72rem',
                        color: '#38bdf8',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        margin: '0 0 10px 0',
                        textAlign: 'center'
                      }}>
                        {state.label}
                      </p>

                          {/* Showcase Box Container */}
                          <div 
                            className="glass-heavy saas-shadow" 
                            style={{ 
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              backdropFilter: 'blur(16px)',
                              WebkitBackdropFilter: 'blur(16px)',
                              border: '1px solid rgba(255, 255, 255, 0.12)',
                              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25), inset 0 0 15px rgba(255, 255, 255, 0.05)',
                              borderRadius: '24px', 
                              height: '320px',
                              width: '100%',
                              position: 'relative',
                              overflow: 'hidden',
                              marginBottom: '4px'
                            }}
                          >
                            {/* Header bar mimicking app/browser window */}
                            <div style={{ 
                              height: '36px', 
                              backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              padding: '0 12px',
                              gap: '6px'
                            }}>
                              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                              <div style={{ marginLeft: '10px', fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>app.quickstudy.uk</div>
                            </div>

                            {/* Showcase mockup content scaled down to fit */}
                            <div style={{ position: 'relative', height: 'calc(100% - 36px)', transform: 'scale(0.9)', transformOrigin: 'top center' }}>
                              {state.mockup}
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* YouTube Video Modal Popup */}
      {isVideoModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '800px',
              aspectRatio: '16/9',
              backgroundColor: '#000000',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; }}
            >
              ✕
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/QWCpJKIwZVQ?autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              style={{ width: '100%', height: '100%', display: 'block' }}
            ></iframe>
          </div>
        </div>
      )}

      <style>{`
        .qle-mobile-layout {
          display: none !important;
        }
        .qle-desktop-layout {
          display: block !important;
        }
        @media (max-width: 767px) {
          .qle-mobile-layout {
            display: block !important;
          }
          .qle-desktop-layout {
            display: none !important;
          }
        }
        @media (min-width: 1024px) {
          .qle-grid {
            grid-template-columns: 1fr 1.4fr !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
