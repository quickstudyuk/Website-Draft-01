'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './CoreSubjects.module.css';

const subjectData = [
  {
    id: "maths",
    title: "Mathematics",
    focus: ["Algebra", "Geometry", "Calculations", "Problem solving"],
    howWeHelp: ["Personalised explanations", "Step-by-step problem solving", "Targeted practice", "Confidence building"],
    qleSupport: ["Recorded lessons", "AI revision quizzes", "Progress tracking", "Tutor feedback"],
    color: "#ffbd2e"
  },
  {
    id: "english",
    title: "English",
    focus: ["Essay structure", "Reading comprehension", "Literature analysis", "Creative writing"],
    howWeHelp: ["Structured writing support", "Analytical thinking", "Exam preparation", "Feedback and improvement plans"],
    qleSupport: ["Lesson recordings", "Revision notes", "Writing feedback", "Progress monitoring"],
    color: "#ff5f56"
  },
  {
    id: "biology",
    title: "Biology",
    focus: ["Human biology", "Genetics", "Ecology", "Exam technique"],
    howWeHelp: ["Simplified explanations", "Visual learning", "Active recall practice", "Exam preparation"],
    qleSupport: ["Recorded lessons", "Interactive diagrams", "Progress tracking", "Tutor support"],
    color: "#27c93f"
  },
  {
    id: "chemistry",
    title: "Chemistry",
    focus: ["Bonding", "Reactions", "Calculations", "Practical understanding"],
    howWeHelp: ["Clear breakdowns", "Guided practice", "Revision support", "Confidence building"],
    qleSupport: ["Recorded lessons", "AI revision quizzes", "Formula sheets", "Tutor support"],
    color: "#27c93f"
  },
  {
    id: "physics",
    title: "Physics",
    focus: ["Forces", "Energy", "Electricity", "Calculations"],
    howWeHelp: ["Concept mastery", "Problem-solving techniques", "Exam preparation", "Progress tracking"],
    qleSupport: ["Recorded lessons", "AI revision quizzes", "Formula sheets", "Tutor support"],
    color: "#27c93f"
  },
  {
    id: "combined-sciences",
    title: "Combined Sciences",
    focus: ["Biology concepts", "Chemistry basics", "Physics principles", "Exam technique"],
    howWeHelp: ["Interdisciplinary support", "Clear breakdowns", "Active recall practice", "Exam readiness"],
    qleSupport: ["Recorded lessons", "AI revision quizzes", "Formula sheets", "Tutor support"],
    color: "#06b6d4"
  }
];

export default function CoreSubjects() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const handleCardClick = (index: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
    }
  };

  return (
    <section className="section-padding" style={{ 
      backgroundColor: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'var(--spacing-16)',
      paddingBottom: 'var(--spacing-16)'
    }}>
      {/* Dynamic background accents */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.05) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute', bottom: '10%', left: '-10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#1e3a8a',
            background: 'rgba(30, 58, 138, 0.08)',
            border: '1px solid rgba(30, 58, 138, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Core Curriculum</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#0f172a', 
            marginBottom: 'var(--spacing-3)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}>
            Mastering The Core Subjects
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#475569',
            maxWidth: '650px',
            margin: '0 auto var(--spacing-12) auto',
            lineHeight: 1.6
          }}>
            Year 7 to GCSE or A-Levels, we got you covered. Hover or tap any subject to see how
          </p>
          
          <div className="subjects-flip-grid">
            {subjectData.map((subject, idx) => (
              <div 
                key={idx} 
                data-index={idx}
                className={`flip-card ${flippedCards[idx] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(idx)}
              >
                <div className="flip-card-inner">
                  {/* Front Side: Focus Areas */}
                  <div className="flip-card-front" style={{ borderTop: `4px solid ${subject.color}` }}>
                    <div className="card-subject-header">
                      {subject.title}
                    </div>
                    <div className="card-desc">
                      <p style={{ fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>Focus Areas:</p>
                      <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', margin: '0 auto', display: 'inline-block' }}>
                        {subject.focus.map((f, i) => (
                          <li key={i} style={{ marginBottom: '4px' }}>• {f}</li>
                        ))}
                        <li style={{ marginBottom: '4px', color: '#64748b', fontStyle: 'italic' }}>and more...</li>
                      </ul>
                    </div>
                    <span className="mobile-tap-hint">Tap to Reveal Solution</span>
                  </div>

                  {/* Back Side: QuickStudy Solution */}
                  <div className="flip-card-back" style={{ background: `linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)` }}>
                    <div className="card-badge success-badge">
                      HOW QUICKSTUDY HELPS
                    </div>
                    <h3 className="card-title success-title">{subject.title} Mastery</h3>
                    <div className="card-desc success-desc">
                      <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', margin: '0 auto', display: 'inline-block' }}>
                        {subject.howWeHelp.map((help, i) => (
                          <li key={i} style={{ marginBottom: '4px' }}>✓ {help}</li>
                        ))}
                      </ul>
                      <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%' }}>
                        <p style={{ fontWeight: 700, color: '#38bdf8' }}>QLE Features:</p>
                        <p style={{ fontSize: '0.85rem' }}>{subject.qleSupport.join(" • ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .subjects-flip-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
        }

        @media (min-width: 640px) {
          .subjects-flip-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .subjects-flip-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* 3D Flip Card CSS (Matching Homepage exactly) */
        .flip-card {
          background-color: transparent;
          height: 340px;
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

        .card-badge {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 6px 16px;
          border-radius: 9999px;
          border: 1px solid;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .card-subject-header {
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
          background: rgba(9, 17, 36, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 12px 20px;
          width: 100%;
          text-align: center;
          margin-bottom: 20px;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.15);
          backdrop-filter: blur(8px);
        }

        .success-badge {
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.3);
          background-color: rgba(16, 185, 129, 0.1);
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f172a;
          margin: 4px 0 12px 0;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .success-title {
          color: #ffffff !important;
        }

        .card-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.5;
        }

        .success-desc {
          color: #ffffff !important;
          opacity: 0.95;
        }

        .mobile-tap-hint {
          display: none;
          font-size: 0.7rem;
          color: #64748b;
          margin-top: auto;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .mobile-tap-hint {
            display: inline-block;
          }
        }
      `}</style>
    </section>
  );
}
