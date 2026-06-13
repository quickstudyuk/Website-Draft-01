'use client';

import React, { useState } from 'react';

interface LearningStep {
  id: number;
  category: string;
  title: string;
  description: string;
  svgIcon: React.ReactNode;
}

const stepsData: LearningStep[] = [
  {
    id: 1,
    category: "DIAGNOSTIC PROFILING",
    title: "The Learning Profile",
    description: "We start by identifying exactly where your child stands. Our 60-second diagnostic pinpoints academic risks, confidence gaps, and the specific topics holding them back.",
    svgIcon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-2.5 2.5" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 2.5 2.5" />
        <path d="M12 4.5a3.5 3.5 0 0 0-3.5 3.5c0 1 1 2.5 1.5 3" />
        <path d="M12 4.5a3.5 3.5 0 0 1 3.5 3.5c0 1-1 2.5-1.5 3" />
        <path d="M12 19.5a3.5 3.5 0 0 0-3.5-3.5c0-1 1-2.5 1.5-3" />
        <path d="M12 19.5a3.5 3.5 0 0 1 3.5-3.5c0-1-1-2.5-1.5-3" />
      </svg>
    )
  },
  {
    id: 2,
    category: "EXPERT MATCHING",
    title: "Vetted, Specialist Tutors",
    description: "We match your child with a tutor who specialises in their exact areas of struggle. Our tutors are in the top 5% of applicants and focus on mentorship alongside academic capability.",
    svgIcon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: 3,
    category: "PERSONALIZED SUPPORT",
    title: "AI Revision & Environment",
    description: "Learning continues outside the classroom. Tutees get lesson recordings and bite-sized, AI-generated revision notes matching their syllabus via the QLE environment.",
    svgIcon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8h10" />
        <path d="M7 12h5" />
      </svg>
    )
  },
  {
    id: 4,
    category: "INTEGRATED SYSTEM",
    title: "Connected Success",
    description: "A fully connected system where learning diagnostic gaps, tutoring lessons, revision feedback, and parent progress tracking work in complete harmony.",
    svgIcon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <line x1="7.5" y1="7.5" x2="10.5" y2="10.5" />
        <line x1="16.5" y1="7.5" x2="13.5" y2="10.5" />
        <line x1="7.5" y1="16.5" x2="10.5" y2="13.5" />
        <line x1="16.5" y1="16.5" x2="13.5" y2="13.5" />
      </svg>
    )
  }
];

export default function TheSolution() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const handleCardClick = (id: number) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="unified-solution-section">
      <div className="unified-container">
        
        {/* Main Section Header */}
        <div className="unified-header">
          <h2 className="unified-section-title">
            SIMPLE, PERSONALIZED LEARNING FOR SUCCESS.
          </h2>
        </div>

        {/* 4 Columns Grid */}
        <div className="unified-grid">
          {stepsData.map((step) => (
            <div 
              key={step.id} 
              className={`unified-card ${flippedCards[step.id] ? 'flipped' : ''}`}
              onClick={() => handleCardClick(step.id)}
            >
              <div className="unified-card-inner">
                
                {/* Front Side */}
                <div className="unified-card-front">
                  {/* Top Pill Badge */}
                  <div className="card-badge-wrapper">
                    <span className="card-badge">{step.category}</span>
                  </div>

                  {/* Icon */}
                  <div className="card-icon-container">
                    <div className="card-icon-wrapper">
                      {step.svgIcon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="card-text-container">
                    <h3 className="card-main-title">{step.title}</h3>
                    <p className="card-details-desc desktop-desc">{step.description}</p>
                  </div>

                  {/* Tap hint */}
                  <div className="mobile-tap-hint">
                    Tap to view more
                  </div>
                </div>

                {/* Back Side: Renders ONLY details text centered perfectly */}
                <div className="unified-card-back">
                  
                  {/* Description Centered vertically & horizontally */}
                  <div className="card-text-container" style={{ margin: 'auto 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p className="card-details-desc" style={{ color: '#ffffff', opacity: 0.95, margin: 0, fontSize: '0.72rem', lineHeight: 1.45, textAlign: 'center' }}>
                      {step.description}
                    </p>
                  </div>

                  <div className="mobile-tap-hint" style={{ color: '#10b981' }}>
                    Tap to flip back
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .unified-solution-section {
          background-color: #f8fafc; /* Very light background for card pop-out contrast */
          padding: 32px 0 100px 0;
          position: relative;
          overflow: hidden;
        }

        .unified-container {
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .unified-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .unified-section-title {
          font-size: clamp(2rem, 4.5vw, 3.25rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.01em;
          line-height: 1.15;
          text-transform: uppercase;
        }

        .unified-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 640px) {
          .unified-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .unified-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }
        }

        /* High-fidelity card structure exactly matching request image */
        .unified-card {
          background: linear-gradient(135deg, #10204c 0%, #070d22 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px; /* Very smooth highly rounded corners */
          padding: 40px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 20px 40px -15px rgba(10, 20, 50, 0.25);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 460px;
          justify-content: flex-start;
        }

        .unified-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px -10px rgba(10, 20, 50, 0.45);
          border-color: rgba(16, 185, 129, 0.25); /* Glow matching badge */
        }

        /* Pill Badge (Centered at top) */
        .card-badge-wrapper {
          margin-bottom: 28px;
        }

        .card-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #10b981; /* Green text label */
          background-color: rgba(16, 185, 129, 0.1); /* Translucent green back */
          border: 1px solid rgba(16, 185, 129, 0.3); /* Translucent green border */
          letter-spacing: 0.06em;
          padding: 6px 16px;
          border-radius: 9999px;
          text-transform: uppercase;
        }

        /* Center Icon container */
        .card-icon-container {
          margin-bottom: 28px;
        }

        .card-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 24px;
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981; /* Green icon */
          background: rgba(255, 255, 255, 0.03); /* Glassmorphic square */
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.02);
          transition: all 0.3s ease;
        }

        .unified-card:hover .card-icon-wrapper {
          background: rgba(16, 185, 129, 0.08);
          border-color: rgba(16, 185, 129, 0.4);
          transform: scale(1.05);
        }

        /* Text details container */
        .card-text-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        .card-main-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff; /* White title */
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .card-details-desc {
          font-size: 0.95rem;
          color: #94a3b8; /* Muted grey-blue detail text */
          line-height: 1.6;
          margin: 0;
        }

        /* Flippable Card Base Layout Styles */
        .unified-card-inner {
          width: 100%;
          height: 100%;
        }

        .unified-card-front {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        .unified-card-back {
          display: none !important;
        }

        .mobile-tap-hint {
          display: none;
        }

        /* Mobile specific card overrides */
        @media (max-width: 767px) {
          .unified-solution-section {
            padding: 24px 0 60px 0 !important;
          }
          .unified-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .unified-card {
            perspective: 1000px !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            min-height: 140px !important;
            height: 150px !important;
            cursor: pointer !important;
          }
          .unified-card-inner {
            position: relative !important;
            width: 100% !important;
            height: 100% !important;
            transform-style: preserve-3d !important;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }
          .unified-card.flipped .unified-card-inner {
            transform: rotateY(180deg) !important;
          }
          .unified-card-front, .unified-card-back {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            -webkit-backface-visibility: hidden !important;
            backface-visibility: hidden !important;
            border-radius: 20px !important;
            padding: 16px 12px !important;
            box-sizing: border-box !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .unified-card-front {
            background: linear-gradient(135deg, #10204c 0%, #070d22 100%) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            box-shadow: 0 10px 25px rgba(10, 20, 50, 0.25) !important;
            z-index: 2 !important;
            transform: rotateY(0deg) !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
            position: relative !important;
          }
          .unified-card-back {
            background: linear-gradient(135deg, #070d22 0%, #10204c 100%) !important;
            border: 1.5px solid rgba(16, 185, 129, 0.35) !important;
            box-shadow: 0 12px 30px rgba(16, 185, 129, 0.15) !important;
            transform: rotateY(180deg) !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
          }
          .desktop-desc {
            display: none !important;
          }
          .mobile-tap-hint {
            display: block !important;
            font-size: 0.65rem !important;
            font-weight: 800 !important;
            text-transform: uppercase;
            letter-spacing: 0.04em !important;
            color: #38bdf8 !important;
            opacity: 0.5 !important; /* Transparent / less highlighted */
            position: absolute !important;
            bottom: 12px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            margin: 0 !important;
            width: 100% !important;
            text-align: center !important;
          }
          .unified-card-back .mobile-tap-hint {
            position: absolute !important;
            bottom: 4px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            font-size: 0.5rem !important;
            margin: 0 !important;
          }
          
          .card-badge-wrapper {
            position: absolute !important;
            top: 14px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            margin: 0 !important;
          }
          .card-badge {
            font-size: 0.58rem !important;
            padding: 2px 8px !important;
          }
          .card-icon-container {
            position: absolute !important;
            left: 50% !important;
            top: 50% !important;
            transform: translate(-50%, -50%) !important; /* Centered behind text */
            margin-bottom: 0 !important;
            right: auto !important;
            bottom: auto !important;
            z-index: 0 !important;
            pointer-events: none !important;
          }
          .card-icon-wrapper {
            width: 90px !important;
            height: 90px !important;
            border: none !important;
            background: transparent !important;
            box-shadow: none !important;
            opacity: 0.04 !important; /* More transparent shaded watermark */
          }
          .card-icon-wrapper svg {
            width: 80px !important;
            height: 80px !important;
          }
          .card-text-container {
            position: relative !important;
            z-index: 1 !important;
            gap: 4px !important;
            text-align: center !important;
            align-items: center !important;
            margin: 0 !important;
          }
          .card-main-title {
            font-size: 0.95rem !important;
            font-weight: 800 !important;
            text-align: center !important;
          }
          .card-details-desc {
            font-size: 0.72rem !important;
            line-height: 1.45 !important;
            color: #cbd5e1 !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
