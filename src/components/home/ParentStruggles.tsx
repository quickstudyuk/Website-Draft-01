'use client';

import React, { useState, useEffect, useRef } from 'react';

interface StruggleCard {
  id: number;
  badgeText: string;
  problemTitle: string;
  problemDesc: string;
  solutionTitle: string;
  solutionDesc: string;
  svgIcon: React.ReactNode;
  solIcon: React.ReactNode;
  accentColor: string;
}

const cardData: StruggleCard[] = [
  {
    id: 1,
    badgeText: "Updates & Support",
    problemTitle: "PARENTS UNSURE OF PROGRESS & SUPPORT",
    problemDesc: "No feedback on learning gaps, and tutors who only help with homework without building a foundation.",
    solutionTitle: "Live Dashboard & Mentoring",
    solutionDesc: "Real-time updates, lesson playback, comprehensive reports, and dedicated 1-on-1 milestone tracking.",
    accentColor: "#10b981",
    svgIcon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        <circle cx="12" cy="12" r="3" strokeDasharray="2 2" />
      </svg>
    ),
    solIcon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="15" x="2" y="3" rx="2" />
        <path d="M12 18v4" />
        <path d="M8 22h8" />
        <path d="M5 8h14" />
        <path d="m9 13 2 2 4-4" stroke="var(--success)" />
      </svg>
    )
  },
  {
    id: 2,
    badgeText: "Falling Behind",
    problemTitle: "FALLING BEHIND IN KEY SUBJECTS",
    problemDesc: "Struggling to keep pace with classroom teaching and missing foundational concepts.",
    solutionTitle: "Personalised Study Plans",
    solutionDesc: "Tailored curriculums that close foundational gaps first, helping them catch up and get ahead.",
    accentColor: "#ef4444",
    svgIcon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m18.7 12-5.1 5.2-4.3-4.3-4.3 4.3" />
        <path d="M17 12h2v2" strokeWidth="2" />
        <circle cx="12" cy="7" r="1" fill="currentColor" />
        <path d="M10 9.5a2.5 2.5 0 0 1 4 0" />
      </svg>
    ),
    solIcon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-5 5" />
        <path d="m19 4-4 5h4z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 3,
    badgeText: "Confidence & Anxiety",
    problemTitle: "LOW CONFIDENCE & EXAM ANXIETY",
    problemDesc: "Afraid of making mistakes, speaking up in class, or freezing under exam pressure.",
    solutionTitle: "Bite-Sized Goals & Wins",
    solutionDesc: "Micro-goals with positive feedback loops that turn exam anxiety into learning curiosity.",
    accentColor: "#f59e0b",
    svgIcon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="m9 10 1.5-1.5" />
        <path d="m13.5 8.5 1.5-1.5" />
      </svg>
    ),
    solIcon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" fill="rgba(253, 224, 71, 0.2)" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2v2" />
        <path d="M20 8h2" />
        <path d="M2 8h2" />
        <path d="m20 3-1.5 1.5" />
        <path d="m4 3 1.5 1.5" />
      </svg>
    )
  },
  {
    id: 4,
    badgeText: "Revision & Strategy",
    problemTitle: "POOR TECHNIQUE & STUDY HABITS",
    problemDesc: "Feeling overwhelmed, wasting hours revising the wrong things, and failing to secure marks.",
    solutionTitle: "Structured Recaps & Technique",
    solutionDesc: "Lesson recaps generating clear focus lists, and past paper practice with examiner tips.",
    accentColor: "#3b82f6",
    svgIcon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
        <path d="M12 6v6l4 2" />
        <path d="M7 10c2.5-3 5 3 7.5 0s1.5-4 4.5 1" strokeDasharray="3 3" />
      </svg>
    ),
    solIcon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m9 12 2 2 4-4" />
        <path d="M8 6h8" />
        <path d="M8 18h8" />
      </svg>
    )
  }
];

const mobileTexts: Record<number, { problemTitle: string; problemDesc: string; solutionTitle: string; solutionDesc: string }> = {
  1: {
    problemTitle: "UNSURE OF PROGRESS",
    problemDesc: "No learning updates, only homework help.",
    solutionTitle: "Dashboard & Mentoring",
    solutionDesc: "Real-time tracking and dedicated milestones."
  },
  2: {
    problemTitle: "FALLING BEHIND",
    problemDesc: "Struggling to keep pace and missing core concepts.",
    solutionTitle: "Personalised Plans",
    solutionDesc: "Tailored plans that close foundational gaps first."
  },
  3: {
    problemTitle: "LOW CONFIDENCE",
    problemDesc: "Fear of mistakes, speaking up, or exam pressure.",
    solutionTitle: "Bite-Sized Wins",
    solutionDesc: "Micro-goals and positive loops to build confidence."
  },
  4: {
    problemTitle: "POOR EXAM TECHNIQUE",
    problemDesc: "Overwhelmed, revising the wrong topics.",
    solutionTitle: "Recaps & Technique",
    solutionDesc: "Focus lists and past paper marker tips."
  }
};

export default function ParentStruggles() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const handleCardClick = (id: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
    }
  };


  return (
    <section className="section-padding" style={{ 
      backgroundColor: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'var(--spacing-16)',
      paddingBottom: 'var(--spacing-4)'
    }}>
      {/* Dynamic background accents */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#0f172a', 
            marginBottom: 'var(--spacing-3)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}>
            Is Your Child Struggling With School?
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#475569',
            maxWidth: '650px',
            margin: '0 auto var(--spacing-12) auto',
            lineHeight: 1.6
          }}>
            See how QuickStudy converts academic frustration into structured success.
          </p>
          
          <div className="struggles-grid">
            {cardData.map((card) => (
              <React.Fragment key={card.id}>
                
                {/* Desktop/Tablet Only: Flipped Cards */}
                <div 
                  data-id={card.id}
                  className={`flip-card desktop-struggle-card ${flippedCards[card.id] ? 'flipped' : ''}`}
                  onClick={() => handleCardClick(card.id)}
                >
                  <div className="flip-card-inner">
                    {/* Front Side: Problem (Dark Red themed headings & frames) */}
                    <div className="flip-card-front" style={{ borderTop: '4px solid #f87171' }}>
                      <div className="card-badge" style={{ color: '#fca5a5', borderColor: 'rgba(252, 165, 165, 0.25)', backgroundColor: 'rgba(252, 165, 165, 0.1)' }}>
                        {card.badgeText}
                      </div>
                      <div className="icon-wrapper" style={{ color: '#fca5a5', backgroundColor: 'rgba(252, 165, 165, 0.1)' }}>
                        {card.svgIcon}
                      </div>
                      <h3 className="card-title" style={{ color: '#fca5a5' }}>{card.problemTitle}</h3>
                      <p className="card-desc" style={{ color: '#fecaca' }}>{card.problemDesc}</p>
                      <span className="mobile-tap-hint" style={{ color: '#fca5a5' }}>Tap to Reveal Solution</span>
                    </div>

                    {/* Back Side: Solution */}
                    <div className="flip-card-back">
                      <div className="card-badge success-badge">
                        QUICKSTUDY SOLUTION
                      </div>
                      <div className="icon-wrapper success-icon">
                        {card.solIcon}
                      </div>
                      <h3 className="card-title success-title">{card.solutionTitle}</h3>
                      <p className="card-desc success-desc">{card.solutionDesc}</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Only: 2-column layout (Left card = Problem reddish shade, Right card = Solution greenish shade, Arrow in between) */}
                <React.Fragment>
                  {/* Left Column: Problem Card (Dark Red themed headings & frames) */}
                  <div className="mobile-struggle-card-wrapper mobile-problem-card-wrapper">
                    <div className="mobile-struggle-card mobile-problem-card" style={{ borderTop: '4px solid #f87171' }}>
                      <div className="card-badge" style={{ color: '#fca5a5', borderColor: 'rgba(252, 165, 165, 0.25)', backgroundColor: 'rgba(252, 165, 165, 0.1)', alignSelf: 'center', margin: '0 0 8px 0', fontSize: '0.6rem', padding: '1px 6px' }}>
                        {card.badgeText}
                      </div>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, justifyContent: 'center' }}>
                        <h4 style={{ margin: 0, fontSize: '0.8rem', fontWeight: 900, color: '#fca5a5', lineHeight: 1.2 }}>
                          {mobileTexts[card.id].problemTitle}
                        </h4>
                        <p style={{ margin: 0, fontSize: '0.68rem', color: '#fecaca', opacity: 0.9, lineHeight: 1.35 }}>
                          {mobileTexts[card.id].problemDesc}
                        </p>
                      </div>

                      {/* Right-pointing Arrow positioned absolutely on the right center edge of the card */}
                      <div className="mobile-card-arrow" style={{ color: '#fca5a5', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                        →
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Solution Card */}
                  <div className="mobile-struggle-card-wrapper mobile-solution-card-wrapper">
                    <div className="mobile-struggle-card mobile-solution-card">
                      <div className="card-badge" style={{ color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)', backgroundColor: 'rgba(16, 185, 129, 0.05)', alignSelf: 'center', margin: '0 0 8px 0', fontSize: '0.6rem', padding: '1px 6px' }}>
                        QuickStudy Solution
                      </div>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, justifyContent: 'center' }}>
                        <h4 style={{ margin: 0, fontSize: '0.8rem', fontWeight: 900, color: '#065f46', lineHeight: 1.2 }}>
                          {mobileTexts[card.id].solutionTitle}
                        </h4>
                        <p style={{ margin: 0, fontSize: '0.68rem', color: '#064e3b', opacity: 0.9, lineHeight: 1.35, fontWeight: 500 }}>
                          {mobileTexts[card.id].solutionDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>

              </React.Fragment>
            ))}
          </div>
          
          <div style={{ marginTop: 'var(--spacing-12)' }}>
            <p style={{ 
              fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', 
              color: '#10b981', 
              fontWeight: 800,
              letterSpacing: '-0.01em',
              display: 'inline-block',
              padding: '12px 32px',
              backgroundColor: 'rgba(16, 185, 129, 0.04)',
              borderRadius: '9999px',
              border: '1px dashed rgba(16, 185, 129, 0.15)'
            }}>
              QuickStudy was built to solve exactly these problems.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .struggles-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
        }

        @media (min-width: 640px) {
          .struggles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .struggles-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* 3D Flip Card CSS */
        .flip-card {
          background-color: transparent;
          height: 310px;
          perspective: 1200px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        @media (hover: hover) and (pointer: fine) {
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
        }

        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .flip-card-front {
          background: linear-gradient(135deg, #10204c 0%, #070d22 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px -15px rgba(10, 20, 50, 0.25);
        }

        .flip-card-back {
          background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
          color: white;
          transform: rotateY(180deg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 15px 35px -5px rgba(30, 58, 138, 0.3);
        }

        /* Card Elements styling */
        .card-badge {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: 9999px;
          border: 1px solid;
          margin-bottom: 8px;
        }

        .success-badge {
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.3);
          background-color: rgba(16, 185, 129, 0.1);
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 8px 0;
          transition: transform 0.3s ease;
        }

        .flip-card:hover .icon-wrapper {
          transform: scale(1.08);
        }

        .success-icon {
          color: #10b981;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 900;
          color: #0f172a;
          margin: 8px 0;
          letter-spacing: -0.01em;
          line-height: 1.2;
          height: 2.8em;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-title {
          color: #ffffff !important;
        }

        .card-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 8px;
        }

        .success-desc {
          color: #ffffff !important;
          opacity: 0.95;
        }

        .mobile-tap-hint {
          display: none;
        }

        /* Mobile specific layout */
        @media (max-width: 767px) {
          .mobile-struggle-card-wrapper {
            display: block !important;
          }
          .desktop-struggle-card {
            display: none !important;
          }
          .struggles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          
          /* Light theme card base */
          .mobile-struggle-card {
            border-radius: 16px;
            padding: 8px 6px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
            min-height: 110px;
            height: 125px !important; /* Forces 125px height */
            box-sizing: border-box;
            text-align: left;
            position: relative;
          }

          /* Problem card: dark shade */
          .mobile-problem-card {
            background: linear-gradient(135deg, #10204c 0%, #070d22 100%) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            box-shadow: 0 4px 12px rgba(10, 20, 50, 0.25) !important;
          }

          /* Solution card: greenish shade */
          .mobile-solution-card {
            background: rgba(209, 250, 229, 0.55) !important;
            border: 1.5px solid rgba(16, 185, 129, 0.25) !important;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.03) !important;
            border-top: 4px solid #10b981 !important;
          }

          /* Left-to-right arrow overlay on problem card */
          .mobile-card-arrow {
            position: absolute;
            right: -11px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #070d22;
            border: 1px solid;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.08);
            color: #ef4444;
            font-size: 10px;
            font-weight: bold;
            pointer-events: none;
          }
        }

        @media (min-width: 1024px) {
          .struggles-grid {
            grid-template-columns: repeat(4, 1fr) !important; /* 4 columns on desktop */
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .struggles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 768px) {
          .mobile-struggle-card-wrapper {
            display: none !important;
          }
          .desktop-struggle-card {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
