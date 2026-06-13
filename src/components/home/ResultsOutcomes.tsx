'use client';

import React from 'react';

export default function ResultsOutcomes() {
  return (
    <section className="mastery-section">
      <div className="container" style={{ maxWidth: '1100px', position: 'relative' }}>
        
        {/* Section Title */}
        <div className="mastery-header">
          <h2 className="mastery-title">
            The Path To Academic Mastery
          </h2>
        </div>

        {/* 1. DESKTOP VIEW (Connected Network Diagram) */}
        <div className="mastery-desktop-container">
          
          {/* Animated Connecting Lines (Behind Cards) */}
          <svg className="connecting-lines-svg" viewBox="0 0 1000 550" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line-grad-left" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
                <stop offset="100%" stopColor="rgba(56, 189, 248, 0.1)" />
              </linearGradient>
              <linearGradient id="line-grad-right" x1="0" y1="0.5" x2="1" y2="0.5">
                <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
                <stop offset="100%" stopColor="rgba(56, 189, 248, 0.1)" />
              </linearGradient>
            </defs>

            {/* Bézier Connecting Paths */}
            {/* Top-Left: Diagnostic */}
            <path id="path-tl" d="M 425 240 C 375 240, 370 100, 320 100" stroke="url(#line-grad-left)" strokeWidth="2.5" fill="none" />
            
            {/* Bottom-Left: Support */}
            <path id="path-bl" d="M 425 310 C 375 310, 370 450, 320 450" stroke="url(#line-grad-left)" strokeWidth="2.5" fill="none" />
            
            {/* Top-Right: Habits */}
            <path id="path-tr" d="M 575 240 C 625 240, 630 100, 680 100" stroke="url(#line-grad-right)" strokeWidth="2.5" fill="none" />
            
            {/* Bottom-Right: Exams */}
            <path id="path-br" d="M 575 310 C 625 310, 630 450, 680 450" stroke="url(#line-grad-right)" strokeWidth="2.5" fill="none" />

            {/* Glowing flowing signals along paths */}
            <circle r="4" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)">
              <animateMotion dur="3.5s" repeatCount="indefinite">
                <mpath href="#path-tl" />
              </animateMotion>
            </circle>
            <circle r="4" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)">
              <animateMotion dur="3.5s" repeatCount="indefinite">
                <mpath href="#path-bl" />
              </animateMotion>
            </circle>
            <circle r="4" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)">
              <animateMotion dur="3.5s" repeatCount="indefinite">
                <mpath href="#path-tr" />
              </animateMotion>
            </circle>
            <circle r="4" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)">
              <animateMotion dur="3.5s" repeatCount="indefinite">
                <mpath href="#path-br" />
              </animateMotion>
            </circle>
          </svg>

          {/* Left Side Column: Diagnostic & Support */}
          <div className="mastery-col mastery-col-left">
            {/* Card 1: Diagnostic */}
            <div className="mastery-card mastery-card-tl">
              <div className="mastery-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.5">
                  <path d="M12 3 L8 15 M12 3 L16 15" strokeLinecap="round" />
                  <circle cx="12" cy="3" r="1.5" fill="#1e293b" />
                  <path d="M9.5 10h5" />
                  <path d="M4 17h16" strokeLinecap="round" />
                  <path d="M6 17v2M9 17v2M12 17v2M15 17v2M18 17v2" />
                  <path d="M4 14a2 2 0 0 1 2-2h4v5H6a2 2 0 0 1-2-2z" />
                  <circle cx="18" cy="10" r="3" />
                  <path d="M18 7a3 3 0 0 0 0 6M15 10h6" />
                </svg>
              </div>
              <div className="mastery-card-text">
                <h3 className="card-title">DIAGNOSTIC PROFILING:</h3>
                <p className="card-subtitle">Understanding Your Child's Unique Profile</p>
                <p className="card-desc">Identifying specific learning gaps, academic risk levels, and syllabus-matching needs before we start.</p>
              </div>
            </div>

            {/* Card 3: Support */}
            <div className="mastery-card mastery-card-bl">
              <div className="mastery-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.5">
                  <path d="M12 21C12 21 19 17 19 11V5L12 2L5 5V11C5 17 12 21 12 21Z" stroke="#3b82f6" fill="rgba(59,130,246,0.05)" />
                  <path d="M12 7c-1.5 0-2 1-2 2s1 1.5 1.5 2c-.5.5-1 1-1 2s.5 1.5 1.5 1.5M12 7c1.5 0 2 1 2 2s-1 1.5-1.5 2c.5.5 1 1 1 2s-.5 1.5-1.5 1.5M12 7v10" stroke="#a855f7" strokeWidth="1.2" />
                  <path d="M17 6 L17 12 M15 8 L17 6 L19 8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="mastery-card-text">
                <h3 className="card-title">PERSONALIZED SUPPORT:</h3>
                <p className="card-subtitle">Building Confidence in Difficult Subjects</p>
                <p className="card-desc">Tailored 1:1 lessons with subject-specialist mentors who focus on concept mastery and confidence building.</p>
              </div>
            </div>
          </div>

          {/* Central Column: The Mind Graphic */}
          <div className="mastery-col mastery-col-center">
            <div className="center-brain-node">
              <svg viewBox="0 0 200 200" width="180" height="180">
                {/* Outer borders */}
                <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
                <circle cx="100" cy="100" r="88" fill="#ffffff" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 10px 25px rgba(0,60,120,0.08))' }} />
                
                {/* Golden Brain Constellation */}
                <g transform="translate(10, 10) scale(0.9)">
                  <path d="M100 45 C80 45, 65 55, 65 75 C65 85, 75 90, 75 100 C75 110, 65 115, 65 125 C65 145, 80 155, 100 155" fill="none" stroke="url(#gold-gradient)" strokeWidth="2" opacity="0.8" />
                  <path d="M100 45 C120 45, 135 55, 135 75 C135 85, 125 90, 125 100 C125 110, 135 115, 135 125 C135 145, 120 155, 100 155" fill="none" stroke="url(#gold-gradient)" strokeWidth="2" opacity="0.8" />
                  <line x1="100" y1="45" x2="100" y2="155" stroke="url(#gold-gradient)" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
                  
                  {/* Constellation Lines */}
                  <line x1="80" y1="65" x2="95" y2="80" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
                  <line x1="95" y1="80" x2="85" y2="105" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
                  <line x1="85" y1="105" x2="90" y2="135" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
                  <line x1="120" y1="65" x2="105" y2="80" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
                  <line x1="105" y1="80" x2="115" y2="105" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
                  <line x1="115" y1="105" x2="110" y2="135" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
                  
                  {/* Constellation Dots */}
                  <circle cx="80" cy="65" r="3" fill="#d4af37" />
                  <circle cx="95" cy="80" r="2.5" fill="#d4af37" />
                  <circle cx="85" cy="105" r="3" fill="#d4af37" />
                  <circle cx="90" cy="135" r="2.5" fill="#d4af37" />
                  <circle cx="120" cy="65" r="3" fill="#d4af37" />
                  <circle cx="105" cy="80" r="2.5" fill="#d4af37" />
                  <circle cx="115" cy="105" r="3" fill="#d4af37" />
                  <circle cx="110" cy="135" r="2.5" fill="#d4af37" />
                  
                  {/* Constellation Stars */}
                  <path d="M 68 85 L 70 87 L 72 85 L 70 83 Z" fill="#d4af37" opacity="0.7" />
                  <path d="M 132 85 L 134 87 L 136 85 L 134 83 Z" fill="#d4af37" opacity="0.7" />
                  <path d="M 72 120 L 74 122 L 76 120 L 74 118 Z" fill="#d4af37" opacity="0.7" />
                  <path d="M 128 120 L 130 122 L 132 120 L 130 118 Z" fill="#d4af37" opacity="0.7" />
                  
                  {/* Hand with Eye */}
                  <g transform="translate(85, 110) scale(0.15)">
                    <path d="M 90 200 C 90 190, 85 180, 80 170 C 65 150, 40 140, 40 100 C 40 90, 48 82, 58 82 C 68 82, 70 95, 70 100 C 70 80, 78 72, 88 72 C 98 72, 100 85, 100 90 C 100 75, 108 67, 118 67 C 128 67, 130 80, 130 85 C 130 78, 138 72, 148 72 C 158 72, 160 85, 160 100 C 160 120, 150 140, 140 160 C 130 180, 120 200, 110 200" fill="none" stroke="#d4af37" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="100" cy="125" r="14" fill="none" stroke="#d4af37" strokeWidth="8" />
                    <circle cx="100" cy="125" r="6" fill="#d4af37" />
                    <line x1="100" y1="103" x2="100" y2="109" stroke="#d4af37" strokeWidth="6" />
                    <line x1="82" y1="117" x2="87" y2="120" stroke="#d4af37" strokeWidth="6" />
                    <line x1="118" y1="117" x2="113" y2="120" stroke="#d4af37" strokeWidth="6" />
                  </g>
                </g>
                <defs>
                  <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d4af37" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right Side Column: Habits & Exams */}
          <div className="mastery-col mastery-col-right">
            {/* Card 2: Habits */}
            <div className="mastery-card mastery-card-tr">
              <div className="mastery-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.5">
                  <circle cx="9" cy="14" r="5" stroke="#3b82f6" />
                  <path d="M9 11v3h2.5" stroke="#3b82f6" strokeLinecap="round" />
                  <rect x="13" y="6" width="7" height="10" rx="1" strokeLinecap="round" />
                  <path d="M15 4h3a1 1 0 0 1 1 1v1H14V5a1 1 0 0 1 1-1z" fill="rgba(30,41,59,0.1)" />
                  <path d="M15 9h3M15 12h3" strokeWidth="1" />
                  <path d="M15 12l1 1 2-2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="mastery-card-text">
                <h3 className="card-title">STRUCTURED HABITS:</h3>
                <p className="card-subtitle">Consistent Study and Accountability</p>
                <p className="card-desc">Instilling daily study routines, target accountability logs, and structured independent study habits.</p>
              </div>
            </div>

            {/* Card 4: Exams */}
            <div className="mastery-card mastery-card-br">
              <div className="mastery-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.5">
                  <path d="M8 5h4M9 5v11a3 3 0 0 0 6 0V5" stroke="#64748b" strokeLinecap="round" />
                  <path d="M9 8h4M9 11h2M9 14h3" stroke="#64748b" strokeWidth="1" />
                  <path d="M10 13v3a1 1 0 0 0 2 0v-3z" fill="rgba(56,189,248,0.2)" stroke="none" />
                  <circle cx="16" cy="14" r="4.5" stroke="#ef4444" />
                  <path d="M16 11.5v2.5h1.5" stroke="#ef4444" strokeLinecap="round" />
                  <path d="M15 9.5h2M16 9.5v-1" stroke="#ef4444" />
                </svg>
              </div>
              <div className="mastery-card-text">
                <h3 className="card-title">STRATEGIC EXAMS:</h3>
                <p className="card-subtitle">Better Performance and Techniques</p>
                <p className="card-desc">Mastering exam paper structures, time-management techniques, and mock test preparation under pressure.</p>
              </div>
            </div>
          </div>

        </div>

        {/* 2. MOBILE VIEW (Stacked Cards with Central Node at Top) */}
        <div className="mastery-mobile-container">
          <div className="center-brain-node-mobile">
            <svg viewBox="0 0 200 200" width="140" height="140">
              <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
              <circle cx="100" cy="100" r="88" fill="#ffffff" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
              <g transform="translate(10, 10) scale(0.9)">
                <path d="M100 45 C80 45, 65 55, 65 75 C65 85, 75 90, 75 100 C75 110, 65 115, 65 125 C65 145, 80 155, 100 155" fill="none" stroke="url(#gold-gradient-mobile)" strokeWidth="2" opacity="0.8" />
                <path d="M100 45 C120 45, 135 55, 135 75 C135 85, 125 90, 125 100 C125 110, 135 115, 135 125 C135 145, 120 155, 100 155" fill="none" stroke="url(#gold-gradient-mobile)" strokeWidth="2" opacity="0.8" />
                
                {/* Constellation Dots */}
                <circle cx="80" cy="65" r="3" fill="#d4af37" />
                <circle cx="95" cy="80" r="2.5" fill="#d4af37" />
                <circle cx="85" cy="105" r="3" fill="#d4af37" />
                <circle cx="90" cy="135" r="2.5" fill="#d4af37" />
                <circle cx="120" cy="65" r="3" fill="#d4af37" />
                <circle cx="105" cy="80" r="2.5" fill="#d4af37" />
                <circle cx="115" cy="105" r="3" fill="#d4af37" />
                <circle cx="110" cy="135" r="2.5" fill="#d4af37" />
                
                {/* Hand with Eye */}
                <g transform="translate(85, 110) scale(0.15)">
                  <path d="M 90 200 C 90 190, 85 180, 80 170 C 65 150, 40 140, 40 100 C 40 90, 48 82, 58 82 C 68 82, 70 95, 70 100 C 70 80, 78 72, 88 72 C 98 72, 100 85, 100 90 C 100 75, 108 67, 118 67 C 128 67, 130 80, 130 85 C 130 78, 138 72, 148 72 C 158 72, 160 85, 160 100 C 160 120, 150 140, 140 160 C 130 180, 120 200, 110 200" fill="none" stroke="#d4af37" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="100" cy="125" r="14" fill="none" stroke="#d4af37" strokeWidth="8" />
                  <circle cx="100" cy="125" r="6" fill="#d4af37" />
                </g>
              </g>
              <defs>
                <linearGradient id="gold-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d4af37" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="mastery-cards-stack-mobile">
            {/* Card 1 */}
            <div className="mastery-card-mobile">
              <div className="card-icon-mobile">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.5" width="36" height="36">
                  <path d="M12 3 L8 15 M12 3 L16 15" strokeLinecap="round" />
                  <path d="M4 17h16" strokeLinecap="round" />
                  <path d="M4 14a2 2 0 0 1 2-2h4v5H6a2 2 0 0 1-2-2z" />
                  <circle cx="18" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="card-title-mobile">DIAGNOSTIC PROFILING:</h3>
                <p className="card-subtitle-mobile">Understanding Your Child's Unique Profile</p>
                <p className="card-desc-mobile">Identifying specific learning gaps, academic risk levels, and syllabus-matching needs before we start.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="mastery-card-mobile">
              <div className="card-icon-mobile">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.5" width="36" height="36">
                  <circle cx="9" cy="14" r="5" stroke="#3b82f6" />
                  <rect x="13" y="6" width="7" height="10" rx="1" />
                </svg>
              </div>
              <div>
                <h3 className="card-title-mobile">STRUCTURED HABITS:</h3>
                <p className="card-subtitle-mobile">Consistent Study and Accountability</p>
                <p className="card-desc-mobile">Instilling daily study routines, target accountability logs, and structured independent study habits.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="mastery-card-mobile">
              <div className="card-icon-mobile">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.5" width="36" height="36">
                  <path d="M12 21C12 21 19 17 19 11V5L12 2L5 5V11C5 17 12 21 12 21Z" stroke="#3b82f6" fill="rgba(59,130,246,0.05)" />
                </svg>
              </div>
              <div>
                <h3 className="card-title-mobile">PERSONALIZED SUPPORT:</h3>
                <p className="card-subtitle-mobile">Building Confidence in Difficult Subjects</p>
                <p className="card-desc-mobile">Tailored 1:1 lessons with subject-specialist mentors who focus on concept mastery and confidence building.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="mastery-card-mobile">
              <div className="card-icon-mobile">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="1.5" width="36" height="36">
                  <path d="M9 5v11a3 3 0 0 0 6 0V5" stroke="#64748b" />
                  <circle cx="16" cy="14" r="4.5" stroke="#ef4444" />
                </svg>
              </div>
              <div>
                <h3 className="card-title-mobile">STRATEGIC EXAMS:</h3>
                <p className="card-subtitle-mobile">Better Performance and Techniques</p>
                <p className="card-desc-mobile">Mastering exam paper structures, time-management techniques, and mock test preparation under pressure.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Footer Baseline Text */}
        <p className="mastery-footer-text">
          Going from struggling to succeeding: A complete learning ecosystem.
        </p>

      </div>

      <style>{`
        .mastery-section {
          padding: 90px 0;
          background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #fffbf0 100%);
          position: relative;
          overflow: hidden;
        }

        .mastery-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 50px;
        }

        .crest-shield {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
        }

        .mastery-title {
          font-size: clamp(1.65rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin: 0;
          text-align: center;
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
        .mastery-desktop-container {
          display: flex;
          position: relative;
          z-index: 1;
          width: 100%;
          height: 550px;
          justify-content: space-between;
          align-items: center;
        }

        .mastery-col {
          display: flex;
          flex-direction: column;
          z-index: 2;
        }

        .mastery-col-left, .mastery-col-right {
          width: 360px;
          height: 480px;
          justify-content: space-between;
        }

        .mastery-col-center {
          width: 200px;
          align-items: center;
          justify-content: center;
        }

        .center-brain-node {
          animation: float-slow 6s ease-in-out infinite;
        }

        /* Mastery card details */
        .mastery-card {
          background: #ffffff;
          border: 1px solid #d9e6f2;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 60, 120, 0.05), 0 1px 3px rgba(0,0,0,0.01);
          display: flex;
          gap: 18px;
          align-items: flex-start;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          box-sizing: border-box;
        }

        .mastery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0, 60, 120, 0.1), 0 2px 8px rgba(0,0,0,0.02);
          border-color: #38bdf8;
        }

        .mastery-card-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f7ff;
          border-radius: 12px;
          padding: 8px;
          box-sizing: border-box;
        }

        .mastery-card-text {
          text-align: left;
        }

        .card-title {
          font-size: 0.825rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px 0;
          letter-spacing: 0.05em;
        }

        .card-subtitle {
          font-size: 1rem;
          font-weight: 700;
          color: #38bdf8;
          margin: 0 0 8px 0;
          line-height: 1.2;
        }

        .card-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        .mastery-footer-text {
          margin-top: 50px;
          text-align: center;
          font-size: 1.1rem;
          font-weight: 700;
          color: #475569;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 1;
        }

        /* Mobile Layout */
        .mastery-mobile-container {
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
          .mastery-desktop-container {
            display: none !important;
          }
          
          .mastery-mobile-container {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            width: 100%;
          }

          .center-brain-node-mobile {
            animation: float-slow 5s ease-in-out infinite;
          }

          .mastery-cards-stack-mobile {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            max-width: 600px;
          }

          .mastery-card-mobile {
            background: #ffffff;
            border: 1px solid #d9e6f2;
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 8px 24px rgba(0, 60, 120, 0.04);
            display: flex;
            gap: 16px;
            align-items: flex-start;
          }

          .card-icon-mobile {
            width: 44px;
            height: 44px;
            background: #f0f7ff;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .card-title-mobile {
            font-size: 0.8rem;
            font-weight: 800;
            color: #0f172a;
            margin: 0 0 4px 0;
            text-align: left;
          }

          .card-subtitle-mobile {
            font-size: 0.95rem;
            font-weight: 700;
            color: #38bdf8;
            margin: 0 0 6px 0;
            text-align: left;
          }

          .card-desc-mobile {
            font-size: 0.85rem;
            color: #64748b;
            margin: 0;
            text-align: left;
            line-height: 1.4;
          }
        }
        @media (max-width: 767px) {
          .mastery-section {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
