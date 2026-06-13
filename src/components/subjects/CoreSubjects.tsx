'use client';

import React, { useState } from 'react';
import { AnalyticsMetric } from '@/components/dashboard';
import styles from './CoreSubjects.module.css';

const subjectData = [
  {
    id: "maths",
    title: "Mathematics",
    focus: ["Algebra", "Geometry", "Calculations", "Problem solving"],
    howWeHelp: ["Personalised explanations", "Step-by-step problem solving", "Targeted practice", "Confidence building"],
    qleSupport: ["Recorded lessons", "AI revision quizzes", "Progress tracking", "Tutor feedback"],
    color: "#ffbd2e",
    pathway: {
      title: "Sample Mathematics Pathway",
      step1Title: "Diagnostic",
      step1Desc: "Identify knowledge gaps in Algebra.",
      step2Title: "Weekly Mentoring",
      step2Desc: "Targeted problem-solving practice.",
      step3Title: "Confidence Built",
      metricValue: "84%",
      metricLabel: "Topic Mastery",
      metricTrend: "up" as const
    }
  },
  {
    id: "english",
    title: "English",
    focus: ["Essay structure", "Reading comprehension", "Literature analysis", "Creative writing"],
    howWeHelp: ["Structured writing support", "Analytical thinking", "Exam preparation", "Feedback and improvement plans"],
    qleSupport: ["Lesson recordings", "Revision notes", "Writing feedback", "Progress monitoring"],
    color: "#ff5f56",
    pathway: {
      title: "Sample English Pathway",
      step1Title: "Writing Assessment",
      step1Desc: "Analyse essay structure & expression.",
      step2Title: "Weekly Coaching",
      step2Desc: "Active comprehension & essay planning.",
      step3Title: "Fluent Expression",
      metricValue: "92%",
      metricLabel: "Essay Writing Marks",
      metricTrend: "up" as const
    }
  },
  {
    id: "biology",
    title: "Biology",
    focus: ["Human biology", "Genetics", "Ecology", "Exam technique"],
    howWeHelp: ["Simplified explanations", "Visual learning", "Active recall practice", "Exam preparation"],
    qleSupport: ["Recorded lessons", "Interactive diagrams", "Progress tracking", "Tutor support"],
    color: "#27c93f",
    pathway: {
      title: "Sample Biology Pathway",
      step1Title: "Diagnostic Quiz",
      step1Desc: "Identify gaps in cell biology & ecology.",
      step2Title: "Active Recall",
      step2Desc: "Spaced repetition of biological processes.",
      step3Title: "Knowledge Secured",
      metricValue: "87%",
      metricLabel: "Terminology Precision",
      metricTrend: "up" as const
    }
  },
  {
    id: "chemistry",
    title: "Chemistry",
    focus: ["Bonding", "Reactions", "Calculations", "Practical understanding"],
    howWeHelp: ["Clear breakdowns", "Guided practice", "Revision support", "Confidence building"],
    qleSupport: ["Recorded lessons", "AI revision quizzes", "Formula sheets", "Tutor support"],
    color: "#27c93f",
    pathway: {
      title: "Sample Chemistry Pathway",
      step1Title: "Formula Audit",
      step1Desc: "Check understanding of bonding & moles.",
      step2Title: "Step-by-Step Guidance",
      step2Desc: "Practice chemical equation balancing.",
      step3Title: "Concepts Mastered",
      metricValue: "85%",
      metricLabel: "Equation Accuracy",
      metricTrend: "up" as const
    }
  },
  {
    id: "physics",
    title: "Physics",
    focus: ["Forces", "Energy", "Electricity", "Calculations"],
    howWeHelp: ["Concept mastery", "Problem-solving techniques", "Exam preparation", "Progress tracking"],
    qleSupport: ["Recorded lessons", "AI revision quizzes", "Formula sheets", "Tutor support"],
    color: "#27c93f",
    pathway: {
      title: "Sample Physics Pathway",
      step1Title: "Concept Check",
      step1Desc: "Identify gaps in mechanics & energy.",
      step2Title: "Structured Practice",
      step2Desc: "Mastering equations & problem solving.",
      step3Title: "Exam Ready",
      metricValue: "88%",
      metricLabel: "Problem Solving Speed",
      metricTrend: "up" as const
    }
  },
  {
    id: "combined-sciences",
    title: "Combined Sciences",
    focus: ["Biology concepts", "Chemistry basics", "Physics principles", "Exam technique"],
    howWeHelp: ["Interdisciplinary support", "Clear breakdowns", "Active recall practice", "Exam readiness"],
    qleSupport: ["Recorded lessons", "AI revision quizzes", "Formula sheets", "Tutor support"],
    color: "#06b6d4",
    pathway: {
      title: "Sample Combined Sciences Pathway",
      step1Title: "General Science Audit",
      step1Desc: "Map core Biology, Chemistry & Physics gaps.",
      step2Title: "All-Round Mentoring",
      step2Desc: "Dual-science syllabus coverage & exam prep.",
      step3Title: "Integrated Success",
      metricValue: "90%",
      metricLabel: "Double Award Prediction",
      metricTrend: "up" as const
    }
  }
];

// Straight pathway card component
const PathwayCard = ({ pathway, color }: { pathway: any; color: string }) => {
  return (
    <div style={{
      backgroundColor: '#091124',
      borderRadius: '20px',
      padding: '20px',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      color: '#ffffff',
      textAlign: 'left',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h4 style={{ 
        fontSize: '1.1rem', 
        fontWeight: 800, 
        color: '#ffffff', 
        marginBottom: '16px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '10px'
      }}>
        {pathway.title}
      </h4>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', position: 'relative' }}>
        {/* Step 1 */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)',
            border: '2px solid rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.8rem', fontWeight: 700, flexShrink: 0
          }}>1</div>
          <div style={{ flex: 1 }}>
            <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', margin: '0 0 2px 0' }}>{pathway.step1Title}</h5>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.4 }}>{pathway.step1Desc}</p>
          </div>
        </div>
        
        {/* Vertical line between step 1 and 2 */}
        <div style={{ width: '2px', height: '16px', backgroundColor: 'rgba(255,255,255,0.15)', marginLeft: '13px', marginTop: '2px', marginBottom: '2px' }}></div>
        
        {/* Step 2 */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)',
            border: '2px solid rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.8rem', fontWeight: 700, flexShrink: 0
          }}>2</div>
          <div style={{ flex: 1 }}>
            <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', margin: '0 0 2px 0' }}>{pathway.step2Title}</h5>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.4 }}>{pathway.step2Desc}</p>
          </div>
        </div>
        
        {/* Vertical line between step 2 and 3 */}
        <div style={{ width: '2px', height: '16px', backgroundColor: 'rgba(255,255,255,0.15)', marginLeft: '13px', marginTop: '2px', marginBottom: '2px' }}></div>
        
        {/* Step 3 */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '50%',
            backgroundColor: color, color: '#ffffff',
            border: `2px solid ${color}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.8rem', fontWeight: 700, flexShrink: 0,
            boxShadow: `0 0 10px ${color}40`
          }}>3</div>
          <div style={{ flex: 1 }}>
            <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0' }}>{pathway.step3Title}</h5>
            <AnalyticsMetric 
              value={pathway.metricValue} 
              label={pathway.metricLabel} 
              trend={pathway.metricTrend} 
              valueStyle={{ color: '#4ade80', fontSize: '1.4rem', fontWeight: 800 }} 
              labelStyle={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.8rem' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CoreSubjects() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [activeMobileIndex, setActiveMobileIndex] = useState<number | null>(null);
  const [selectedPathwaySubject, setSelectedPathwaySubject] = useState<any | null>(null);

  const handleCardClick = (index: number) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
    }
  };

  const handleMobileAccordionClick = (index: number) => {
    setActiveMobileIndex(activeMobileIndex === index ? null : index);
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
          
          {/* Desktop/Tablet Flip Grid */}
          <div className="subjects-flip-grid desktop-subjects-layout">
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
                      <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div>
                          <p style={{ fontWeight: 700, color: '#38bdf8', fontSize: '0.85rem', margin: '0 0 2px 0' }}>QLE Features:</p>
                          <p style={{ fontSize: '0.8rem', margin: 0, opacity: 0.9 }}>{subject.qleSupport.join(" • ")}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPathwaySubject(subject);
                          }}
                          style={{
                            alignSelf: 'center',
                            padding: '6px 14px',
                            fontSize: '0.75rem',
                            fontWeight: 750,
                            color: '#38bdf8',
                            backgroundColor: 'rgba(56, 189, 248, 0.1)',
                            border: '1px solid rgba(56, 189, 248, 0.3)',
                            borderRadius: '100px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            marginTop: '4px'
                          }}
                          onMouseOver={(ev) => {
                            ev.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.2)';
                            ev.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.5)';
                          }}
                          onMouseOut={(ev) => {
                            ev.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.1)';
                            ev.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
                          }}
                        >
                          View Sample Pathway
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Accordion Layout */}
          <div className="mobile-subjects-accordion">
            {subjectData.map((subject, idx) => {
              const isActive = activeMobileIndex === idx;
              return (
                <div key={idx} className="mobile-accordion-item" onClick={() => handleMobileAccordionClick(idx)}>
                  <div className="mobile-accordion-header" style={{ borderLeft: `4px solid ${subject.color}` }}>
                    <span className="mobile-accordion-title">{subject.title}</span>
                    <span className={`mobile-accordion-icon ${isActive ? 'active' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </div>
                  
                  <div className="mobile-accordion-content" style={{
                    maxHeight: isActive ? '1200px' : '0px',
                    opacity: isActive ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.4s ease, padding 0.4s ease',
                    padding: isActive ? '16px' : '0 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Focus Areas</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {subject.focus.map((f, i) => (
                            <li key={i} style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '4px', display: 'flex', gap: '6px' }}>
                              <span style={{ color: subject.color }}>•</span> {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div style={{ backgroundColor: 'rgba(30, 58, 138, 0.05)', borderRadius: '12px', padding: '12px' }}>
                        <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>QuickStudy Solution</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {subject.howWeHelp.map((help, i) => (
                            <li key={i} style={{ fontSize: '0.85rem', color: '#334155', marginBottom: '4px', display: 'flex', gap: '6px' }}>
                              <span style={{ color: '#10b981' }}>✓</span> {help}
                            </li>
                          ))}
                        </ul>
                        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', marginBottom: '4px' }}>QLE Features Included:</p>
                          <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.4 }}>{subject.qleSupport.join(" • ")}</p>
                        </div>
                      </div>

                      {/* Straight Sample Pathway */}
                      <div style={{ marginTop: '4px' }}>
                        <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Sample {subject.title} Pathway
                        </p>
                        <PathwayCard pathway={subject.pathway} color={subject.color} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Pathway Modal */}
      {selectedPathwaySubject && (
        <div 
          onClick={() => setSelectedPathwaySubject(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '450px',
              backgroundColor: '#091124',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPathwaySubject(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; }}
            >
              ✕
            </button>
            <div style={{ padding: '8px' }}>
              <PathwayCard pathway={selectedPathwaySubject.pathway} color={selectedPathwaySubject.color} />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .subjects-flip-grid {
          display: grid;
          gap: 24px;
        }
        
        .desktop-subjects-layout {
          display: none;
        }

        .mobile-subjects-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }

        .mobile-accordion-item {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          cursor: pointer;
        }

        .mobile-accordion-header {
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
        }

        .mobile-accordion-title {
          font-weight: 800;
          font-size: 1.1rem;
          color: #0f172a;
        }

        .mobile-accordion-icon {
          color: #64748b;
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
        }

        .mobile-accordion-icon.active {
          transform: rotate(180deg);
          color: #38bdf8;
        }

        @media (min-width: 768px) {
          .desktop-subjects-layout {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
          .mobile-subjects-accordion {
            display: none;
          }
        }

        @media (min-width: 1024px) {
          .desktop-subjects-layout {
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
        }

        @media (max-width: 768px) {
          .mobile-tap-hint {
            display: block;
            font-size: 0.75rem;
            color: #0284c7;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            text-align: center;
          }
          .flip-card-front {
            padding-bottom: 48px;
          }
          .flip-card {
            height: 410px;
          }
        }
      `}</style>
    </section>
  );
}

