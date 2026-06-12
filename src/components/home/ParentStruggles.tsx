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
    badgeText: "Regular Parent Updates",
    problemTitle: "PARENTS UNSURE IF PROGRESS IS MADE",
    problemDesc: "No feedback on what was learned, where the gaps are, or if it is worth the money.",
    solutionTitle: "Live Parent Dashboard",
    solutionDesc: "Real-time updates, lesson playback, comprehensive reports, and projected improvement mapping.",
    accentColor: "#10b981", // Success Green
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
    accentColor: "#ef4444", // Red/Coral for urgency
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
    badgeText: "Confidence Issue",
    problemTitle: "LOW CONFIDENCE IN LEARNING",
    problemDesc: "Afraid of making mistakes, speaking up in class, or tackling difficult homework.",
    solutionTitle: "Immediate Wins & Guidance",
    solutionDesc: "Bite-sized micro-goals with positive feedback loops that turn anxiety into curiosity.",
    accentColor: "#f59e0b", // Amber/Yellow
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
    badgeText: "Revision Structure",
    problemTitle: "NOT KNOWING WHAT TO REVISE",
    problemDesc: "Feeling overwhelmed by the curriculum and wasting hours revising the wrong things.",
    solutionTitle: "Structured Lesson Recaps",
    solutionDesc: "Crystal clear focus lists generated automatically from class insights so they know exactly what to study.",
    accentColor: "#3b82f6", // Blue
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
  },
  {
    id: 5,
    badgeText: "Exam Strategy",
    problemTitle: "POOR PERFORMANCE DESPITE EFFORT",
    problemDesc: "Studying for hours but failing to achieve high marks due to poor exam technique.",
    solutionTitle: "Targeted Exam Technique",
    solutionDesc: "Practising with real past papers under exam conditions with instant marker-level tips.",
    accentColor: "#8b5cf6", // Purple
    svgIcon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
        <path d="m4 12 4-2" stroke="red" strokeWidth="2" />
        <path d="m18 16 2-2" stroke="red" strokeWidth="2" />
      </svg>
    ),
    solIcon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="rgba(34, 197, 94, 0.1)" />
        <path d="M14 2v6h6" />
        <path d="m9 15 2 2 4-4" stroke="var(--success)" />
        <text x="14" y="14" fill="var(--success)" fontSize="8" fontWeight="bold" fontFamily="sans-serif">A+</text>
      </svg>
    )
  },
  {
    id: 6,
    badgeText: "Academic Support",
    problemTitle: "LACK OF STRUCTURED ACADEMIC SUPPORT",
    problemDesc: "Tutors who just help with homework instead of building a structured foundation.",
    solutionTitle: "1-on-1 Dedicated Support",
    solutionDesc: "Continuous mentoring, regular check-ins, and step-by-step progress towards key milestones.",
    accentColor: "#06b6d4", // Cyan
    svgIcon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V10" />
        <path d="M9 21V14" />
        <path d="M13 21V12" />
        <path d="M17 21V8" />
        <path d="M5 10c.5-2 2-3 4-2" strokeDasharray="2 2" />
        <path d="M13 12c.5-2 2-3 4-2" strokeDasharray="2 2" />
      </svg>
    ),
    solIcon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <rect x="5" y="13" width="3" height="8" fill="var(--primary)" opacity="0.3" />
        <rect x="10" y="9" width="3" height="12" fill="var(--primary)" opacity="0.6" />
        <rect x="15" y="5" width="3" height="16" fill="var(--primary)" />
        <path d="m7 10 5-4 5-2" fill="none" stroke="var(--accent)" strokeWidth="3" />
      </svg>
    )
  }
];

export default function ParentStruggles() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = Number(entry.target.getAttribute('data-id'));
        if (entry.isIntersecting) {
          // Auto flip to back on scroll into view
          setFlippedCards(prev => ({ ...prev, [id]: true }));
        } else {
          // Auto flip to front when out of view
          setFlippedCards(prev => ({ ...prev, [id]: false }));
        }
      });
    }, {
      threshold: 0.35,
      rootMargin: "-8% 0px -8% 0px"
    });

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const handleCardClick = (id: number) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
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
            Hover or tap any challenge below to see how QuickStudy converts academic frustration into structured success.
          </p>
          
          <div className="struggles-grid">
            {cardData.map((card, idx) => (
              <div 
                key={card.id} 
                ref={el => { cardRefs.current[idx] = el; }}
                data-id={card.id}
                className={`flip-card ${flippedCards[card.id] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="flip-card-inner">
                  {/* Front Side: Problem */}
                  <div className="flip-card-front" style={{ borderTop: `4px solid ${card.accentColor}` }}>
                    <div className="card-badge" style={{ color: card.accentColor, borderColor: `${card.accentColor}30` }}>
                      {card.badgeText}
                    </div>
                    <div className="icon-wrapper" style={{ color: card.accentColor, backgroundColor: `${card.accentColor}08` }}>
                      {card.svgIcon}
                    </div>
                    <h3 className="card-title">{card.problemTitle}</h3>
                    <p className="card-desc">{card.problemDesc}</p>
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
            ))}
          </div>
          
          <div style={{ marginTop: 'var(--spacing-12)' }}>
            <p style={{ 
              fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', 
              color: 'var(--primary)', 
              fontWeight: 800,
              letterSpacing: '-0.01em',
              display: 'inline-block',
              padding: '12px 32px',
              backgroundColor: 'rgba(30, 58, 138, 0.04)',
              borderRadius: '9999px',
              border: '1px dashed rgba(30, 58, 138, 0.15)'
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

        .flip-card:hover .flip-card-inner,
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
          background: rgba(224, 242, 254, 0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(186, 230, 253, 0.45);
          box-shadow: 0 10px 30px -10px rgba(56, 189, 248, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8);
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
      `}</style>
    </section>
  );
}
