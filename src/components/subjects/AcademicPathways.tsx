'use client';

import React from 'react';

export default function AcademicPathways() {
  return (
    <section className="pathways-section">
      <div className="container" style={{ maxWidth: '1100px', position: 'relative' }}>
        
        {/* Section Title */}
        <div className="pathways-header">
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#38bdf8',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Structured Progression</span>
          <h2 className="pathways-title">
            The Academic Pathway
          </h2>
          <p className="pathways-subtitle">
            A fully connected, step-by-step journey from early secondary school to university readiness.
          </p>
        </div>

        {/* 1. DESKTOP VIEW (Connected Network Diagram) */}
        <div className="pathways-desktop-container">
          
          {/* Animated Connecting Lines (Behind Cards) */}
          <svg className="connecting-lines-svg" viewBox="0 0 1000 550" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line-grad-left" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
                <stop offset="100%" stopColor="rgba(56, 189, 248, 0.1)" />
              </linearGradient>
              <linearGradient id="line-grad-right" x1="0" y1="0.5" x2="1" y2="0.5">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
              </linearGradient>
            </defs>

            {/* Bézier Connecting Paths */}
            {/* Top-Left: Year 7-8 */}
            <path id="path-tl" d="M 425 240 C 375 240, 370 120, 320 120" stroke="url(#line-grad-left)" strokeWidth="2.5" fill="none" />
            
            {/* Bottom-Left: Year 9 */}
            <path id="path-bl" d="M 425 310 C 375 310, 370 430, 320 430" stroke="url(#line-grad-left)" strokeWidth="2.5" fill="none" />
            
            {/* Top-Right: GCSE */}
            <path id="path-tr" d="M 575 240 C 625 240, 630 120, 680 120" stroke="url(#line-grad-right)" strokeWidth="2.5" fill="none" />
            
            {/* Bottom-Right: A-Level */}
            <path id="path-br" d="M 575 310 C 625 310, 630 430, 680 430" stroke="url(#line-grad-right)" strokeWidth="2.5" fill="none" />

            {/* Glowing flowing signals along paths */}
            <circle r="4" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)">
              <animateMotion dur="4s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#path-tl" />
              </animateMotion>
            </circle>
            <circle r="4" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)">
              <animateMotion dur="4s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#path-bl" />
              </animateMotion>
            </circle>
            <circle r="4" fill="#10b981" filter="drop-shadow(0 0 6px #10b981)">
              <animateMotion dur="4s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#path-tr" />
              </animateMotion>
            </circle>
            <circle r="4" fill="#10b981" filter="drop-shadow(0 0 6px #10b981)">
              <animateMotion dur="4s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#path-br" />
              </animateMotion>
            </circle>
          </svg>

          {/* Left Side Column: KS3 */}
          <div className="pathways-col pathways-col-left">
            {/* Card 1: Year 7-8 */}
            <div className="pathways-card pathways-card-tl">
              <div className="pathways-card-header">
                <div className="pathways-icon" style={{ color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', borderColor: 'rgba(56, 189, 248, 0.2)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="card-title">YEAR 7-8 PATHWAY</h3>
                  <p className="card-subtitle">Key Stage 3 Foundation</p>
                </div>
              </div>
              <div className="card-desc">
                <ul className="card-list">
                  <li><strong>Focus:</strong> Bridging the primary-to-secondary gap.</li>
                  <li><strong>Core Skills:</strong> Foundational Maths & English literacy.</li>
                  <li><strong>Habits:</strong> Building independent study routines early.</li>
                  <li><strong>QLE Setup:</strong> Introduction to lesson recordings.</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Year 9 */}
            <div className="pathways-card pathways-card-bl">
              <div className="pathways-card-header">
                <div className="pathways-icon" style={{ color: '#818cf8', background: 'rgba(129, 140, 248, 0.1)', borderColor: 'rgba(129, 140, 248, 0.2)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="card-title" style={{ color: '#818cf8' }}>YEAR 9 PATHWAY</h3>
                  <p className="card-subtitle">KS3 Transition Year</p>
                </div>
              </div>
              <div className="card-desc">
                <ul className="card-list">
                  <li><strong>Focus:</strong> Preparation for GCSE options.</li>
                  <li><strong>Core Skills:</strong> Advanced problem solving & analysis.</li>
                  <li><strong>Habits:</strong> Using AI revision tools effectively.</li>
                  <li><strong>Outcome:</strong> Confidence to tackle Key Stage 4.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Central Column: The Core */}
          <div className="pathways-col pathways-col-center">
            <div className="center-core-node">
              <svg viewBox="0 0 200 200" width="180" height="180">
                {/* Outer orbital rings */}
                <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="65" fill="rgba(9, 17, 36, 0.8)" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 15px rgba(56,189,248,0.2))' }} />
                
                {/* Inner glowing core */}
                <circle cx="100" cy="100" r="45" fill="url(#core-gradient)" />
                <circle cx="100" cy="100" r="45" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                
                {/* Center Icon (Graduation Cap / Star) */}
                <g transform="translate(75, 75) scale(0.5)">
                  <path d="M50 15 L90 35 L50 55 L10 35 Z" fill="rgba(255,255,255,0.9)" />
                  <path d="M20 40 L20 65 C30 75, 70 75, 80 65 L80 40" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="4" />
                  <line x1="90" y1="35" x2="90" y2="60" stroke="rgba(255,255,255,0.9)" strokeWidth="4" />
                </g>

                <defs>
                  <radialGradient id="core-gradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right Side Column: KS4/KS5 */}
          <div className="pathways-col pathways-col-right">
            {/* Card 3: GCSE */}
            <div className="pathways-card pathways-card-tr">
              <div className="pathways-card-header">
                <div className="pathways-icon" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="card-title" style={{ color: '#10b981' }}>GCSE PATHWAY</h3>
                  <p className="card-subtitle">Year 10-11 (KS4)</p>
                </div>
              </div>
              <div className="card-desc">
                <ul className="card-list">
                  <li><strong>Focus:</strong> Syllabus mastery & exam readiness.</li>
                  <li><strong>Core Skills:</strong> Exam technique & time management.</li>
                  <li><strong>Support:</strong> AI generated revision summaries.</li>
                  <li><strong>Outcome:</strong> Achieving or exceeding target grades.</li>
                </ul>
              </div>
            </div>

            {/* Card 4: A-Level */}
            <div className="pathways-card pathways-card-br">
              <div className="pathways-card-header">
                <div className="pathways-icon" style={{ color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.2)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="card-title" style={{ color: '#f59e0b' }}>A-LEVEL PATHWAY</h3>
                  <p className="card-subtitle">Year 12-13 (KS5)</p>
                </div>
              </div>
              <div className="card-desc">
                <ul className="card-list">
                  <li><strong>Focus:</strong> Deep subject mastery & complex application.</li>
                  <li><strong>Core Skills:</strong> Independent study, university prep.</li>
                  <li><strong>Support:</strong> Specialist top 5% graduate tutors.</li>
                  <li><strong>Outcome:</strong> Elite university admissions.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* 2. MOBILE VIEW (Stacked Cards with Central Node at Top) */}
        <div className="pathways-mobile-container">
          <div className="center-core-node-mobile">
            <svg viewBox="0 0 200 200" width="140" height="140">
                <circle cx="100" cy="100" r="65" fill="rgba(9, 17, 36, 0.8)" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" />
                <circle cx="100" cy="100" r="45" fill="url(#core-gradient-mobile)" />
                <circle cx="100" cy="100" r="45" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <g transform="translate(75, 75) scale(0.5)">
                  <path d="M50 15 L90 35 L50 55 L10 35 Z" fill="rgba(255,255,255,0.9)" />
                  <path d="M20 40 L20 65 C30 75, 70 75, 80 65 L80 40" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="4" />
                  <line x1="90" y1="35" x2="90" y2="60" stroke="rgba(255,255,255,0.9)" strokeWidth="4" />
                </g>
                <defs>
                  <radialGradient id="core-gradient-mobile" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                  </radialGradient>
                </defs>
            </svg>
          </div>

          <div className="pathways-cards-stack-mobile">
            {/* Card 1 */}
            <div className="pathways-card-mobile">
              <h3 className="card-title-mobile" style={{ color: '#38bdf8' }}>YEAR 7-8 PATHWAY</h3>
              <p className="card-subtitle-mobile">Key Stage 3 Foundation</p>
              <ul className="card-list-mobile">
                <li><strong>Focus:</strong> Bridging the primary-to-secondary gap.</li>
                <li><strong>Core Skills:</strong> Foundational Maths & English literacy.</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="pathways-card-mobile">
              <h3 className="card-title-mobile" style={{ color: '#818cf8' }}>YEAR 9 PATHWAY</h3>
              <p className="card-subtitle-mobile">KS3 Transition Year</p>
              <ul className="card-list-mobile">
                <li><strong>Focus:</strong> Preparation for GCSE options.</li>
                <li><strong>Core Skills:</strong> Advanced problem solving & analysis.</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="pathways-card-mobile">
              <h3 className="card-title-mobile" style={{ color: '#10b981' }}>GCSE PATHWAY</h3>
              <p className="card-subtitle-mobile">Year 10-11 (KS4)</p>
              <ul className="card-list-mobile">
                <li><strong>Focus:</strong> Syllabus mastery & exam readiness.</li>
                <li><strong>Core Skills:</strong> Exam technique & time management.</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="pathways-card-mobile">
              <h3 className="card-title-mobile" style={{ color: '#f59e0b' }}>A-LEVEL PATHWAY</h3>
              <p className="card-subtitle-mobile">Year 12-13 (KS5)</p>
              <ul className="card-list-mobile">
                <li><strong>Focus:</strong> Deep subject mastery & complex application.</li>
                <li><strong>Core Skills:</strong> Independent study, university prep.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .pathways-section {
          padding: 90px 0;
          background: linear-gradient(135deg, #020617 0%, #0f172a 100%);
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .pathways-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .pathways-title {
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin: 0 0 12px 0;
        }

        .pathways-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Connecting lines */
        .connecting-lines-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        /* Desktop Grid / Network positioning */
        .pathways-desktop-container {
          display: flex;
          position: relative;
          z-index: 1;
          width: 100%;
          height: 580px;
          justify-content: space-between;
          align-items: center;
        }

        .pathways-col {
          display: flex;
          flex-direction: column;
          z-index: 2;
        }

        .pathways-col-left, .pathways-col-right {
          width: 380px;
          height: 520px;
          justify-content: space-between;
        }

        .pathways-col-center {
          width: 200px;
          align-items: center;
          justify-content: center;
        }

        .center-core-node {
          animation: float-slow 6s ease-in-out infinite;
        }

        /* Mastery card details */
        .pathways-card {
          background: rgba(9, 17, 36, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          box-sizing: border-box;
          backdrop-filter: blur(12px);
        }

        .pathways-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .pathways-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 16px;
        }

        .pathways-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          border: 1px solid;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #38bdf8;
          margin: 0 0 4px 0;
          letter-spacing: 0.05em;
        }

        .card-subtitle {
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          margin: 0;
        }

        .card-desc {
          text-align: left;
        }

        .card-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .card-list li {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
        }

        .card-list li strong {
          color: #ffffff;
        }

        /* Mobile Layout */
        .pathways-mobile-container {
          display: none;
        }

        /* Float animation */
        @keyframes float-slow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        /* Media Queries */
        @media (max-width: 1023px) {
          .pathways-desktop-container {
            display: none !important;
          }
          
          .pathways-mobile-container {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            width: 100%;
          }

          .center-core-node-mobile {
            animation: float-slow 5s ease-in-out infinite;
          }

          .pathways-cards-stack-mobile {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            max-width: 600px;
          }

          .pathways-card-mobile {
            background: rgba(9, 17, 36, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .card-title-mobile {
            font-size: 1rem;
            font-weight: 800;
            margin: 0 0 4px 0;
            text-align: left;
          }

          .card-subtitle-mobile {
            font-size: 0.85rem;
            font-weight: 600;
            color: rgba(255,255,255,0.6);
            margin: 0 0 12px 0;
            text-align: left;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 12px;
          }

          .card-list-mobile {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .card-list-mobile li {
            font-size: 0.85rem;
            color: rgba(255,255,255,0.8);
          }
        }
      `}</style>
    </section>
  );
}
