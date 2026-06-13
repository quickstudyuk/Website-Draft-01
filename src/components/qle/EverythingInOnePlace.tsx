'use client';

import React, { useState } from 'react';

const messages = [
  { message: "Great work today. Please complete Questions 1–10 before next week.", sender: "Tutor", isSent: false, time: "5:30 PM" },
  { message: "Thank you. I understand algebra much better now.", sender: "Student", isSent: true, time: "6:15 PM" },
  { message: "Excellent. Let me know if you need help before our next session.", sender: "Tutor", isSent: false, time: "6:20 PM" },
  { message: "Thank you for the update.", sender: "Parent", isSent: false, time: "7:00 PM" },
  { message: "You're welcome. Progress has been very positive this week.", sender: "Tutor", isSent: false, time: "7:05 PM" },
];

const senderColors: Record<string, string> = {
  Tutor: '#38bdf8',
  Student: '#a78bfa',
  Parent: '#34d399',
};

export default function EverythingInOnePlace() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenItem(openItem === idx ? null : idx);
  };

  const showSampleBtnStyle = {
    padding: '6px 14px',
    backgroundColor: 'rgba(56, 189, 248, 0.08)',
    border: '1.5px solid rgba(56, 189, 248, 0.35)',
    color: '#38bdf8',
    borderRadius: '10px',
    fontWeight: 700,
    fontSize: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px'
  };

  return (
    <section className="everything-in-one-place-mobile" style={{
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '40px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '500px' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#38bdf8',
            background: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            borderRadius: '99px',
            padding: '4px 14px',
            marginBottom: '10px'
          }}>
            All In One System
          </span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Everything In One Place
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', marginTop: '6px', lineHeight: 1.4 }}>
            No more scattered materials. Review your child&apos;s progress and resources in a unified mobile dashboard.
          </p>
        </div>

        {/* Accordion Points */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* Point 1: Revision Generator */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '20px',
            padding: '16px 18px',
            boxShadow: openItem === 0 ? '0 10px 25px rgba(0, 0, 0, 0.25)' : 'none',
            transition: 'all 0.3s'
          }}>
            <div 
              onClick={() => toggleItem(0)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer', gap: '12px' }}
            >
              <div style={{ flex: 1, textAlign: 'left' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: openItem === 0 ? '#ffffff' : 'rgba(255, 255, 255, 0.85)' }}>
                  Revision Created Automatically using AI
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.55)', marginTop: '4px', lineHeight: 1.35, marginBottom: 0 }}>
                  Instantly reviews transcripts and generates notes, flashcards, and exam practice questions from every session.
                </p>
              </div>
              <div style={{
                color: openItem === 0 ? '#38bdf8' : 'rgba(255, 255, 255, 0.3)',
                transform: openItem === 0 ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
                marginTop: '2px'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            
            {openItem !== 0 && (
              <div style={{ marginTop: '10px', textAlign: 'left' }}>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleItem(0); }}
                  style={showSampleBtnStyle}
                >
                  Show Sample
                </button>
              </div>
            )}

            <div style={{
              maxHeight: openItem === 0 ? '1200px' : '0px',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease',
              opacity: openItem === 0 ? 1 : 0
            }}>
              <div 
                onClick={() => setOpenItem(null)} // Tapping anywhere on opened dropdown collapses it
                style={{ paddingTop: '16px', cursor: 'pointer' }}
              >
                {/* AI Flow Description */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  alignItems: 'center',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '14px',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1rem' }}>📄</span>
                    <span style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 600 }}>Lesson Transcript</span>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>↓</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center', background: 'rgba(56, 189, 248, 0.1)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                    <span style={{ fontSize: '1rem' }}>🤖</span>
                    <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700 }}>AI Processing</span>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>↓</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', width: '100%' }}>
                    {['Revision Notes', 'Flashcards', 'Quiz Questions', 'Exam Practice'].map((item, idx) => (
                      <div key={idx} style={{ padding: '6px', border: '1px dashed rgba(56,189,248,0.3)', background: 'rgba(56,189,248,0.04)', borderRadius: '8px', color: '#38bdf8', fontSize: '0.65rem', fontWeight: 600, textAlign: 'center' }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practice Question Sample */}
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '14px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>
                  <div style={{ display: 'inline-block', fontSize: '0.65rem', fontWeight: 700, backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '2px 8px', borderRadius: '4px' }}>
                    Exam Practice Sample
                  </div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fff', marginTop: '8px', marginBottom: '8px', textAlign: 'left' }}>
                    Expand (x + 4)(x + 2)
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ padding: '8px 12px', border: '1px solid rgba(16, 185, 129, 0.4)', backgroundColor: 'rgba(16, 185, 129, 0.08)', borderRadius: '8px', color: '#10b981', fontSize: '0.75rem', fontWeight: 700, textAlign: 'left' }}>
                      x² + 6x + 8 ✓ (Correct Answer)
                    </div>
                    {['x² + 8x + 6', 'x² + 2x + 8', 'x² + 4x + 2'].map((opt, oIdx) => (
                      <div key={oIdx} style={{ padding: '8px 12px', border: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', textAlign: 'left' }}>
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Point 2: Digital Whiteboard */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '20px',
            padding: '16px 18px',
            boxShadow: openItem === 1 ? '0 10px 25px rgba(0, 0, 0, 0.25)' : 'none',
            transition: 'all 0.3s'
          }}>
            <div 
              onClick={() => toggleItem(1)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer', gap: '12px' }}
            >
              <div style={{ flex: 1, textAlign: 'left' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: openItem === 1 ? '#ffffff' : 'rgba(255, 255, 255, 0.85)' }}>
                  Digital Whiteboard to assist further learning
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.55)', marginTop: '4px', lineHeight: 1.35, marginBottom: 0 }}>
                  An interactive, shared workspace for real-time collaboration and visual problem solving between tutor and student.
                </p>
              </div>
              <div style={{
                color: openItem === 1 ? '#38bdf8' : 'rgba(255, 255, 255, 0.3)',
                transform: openItem === 1 ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
                marginTop: '2px'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

            {openItem !== 1 && (
              <div style={{ marginTop: '10px', textAlign: 'left' }}>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleItem(1); }}
                  style={showSampleBtnStyle}
                >
                  Show Sample
                </button>
              </div>
            )}

            <div style={{
              maxHeight: openItem === 1 ? '1000px' : '0px',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease',
              opacity: openItem === 1 ? 1 : 0
            }}>
              <div 
                onClick={() => setOpenItem(null)} // Tapping anywhere on opened dropdown collapses it
                style={{ paddingTop: '16px', cursor: 'pointer' }}
              >
                {/* Whiteboard Mockup Container */}
                <div style={{
                  background: 'rgba(9, 17, 36, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                  overflow: 'hidden'
                }}>
                  {/* Mockup Header */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '8px 12px',
                    background: 'rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
                    </div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginLeft: '4px' }}>
                      QuickStudy Canvas
                    </span>
                  </div>

                  {/* Toolbar */}
                  <div style={{
                    display: 'flex', gap: '12px', padding: '6px 12px',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    fontSize: '0.8rem',
                    justifyContent: 'center'
                  }}>
                    <span>✏️</span><span>🖍️</span><span>📐</span><span>📝</span>
                  </div>

                  {/* Paper Canvas */}
                  <div style={{ padding: '12px', background: '#091124' }}>
                    <div style={{
                      background: '#ffffff',
                      borderRadius: '10px',
                      padding: '12px',
                      color: '#0f172a',
                      textAlign: 'left'
                    }}>
                      <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 800, borderBottom: '1px solid #e2e8f0', paddingBottom: '4px', marginBottom: '8px' }}>
                        AQA Mathematics Paper 1
                      </div>
                      <div style={{ fontSize: '0.75rem', lineHeight: 1.4 }}>
                        <p><strong>Q4.</strong> Solve the simultaneous equations:</p>
                        <p style={{ margin: '2px 0 2px 10px', fontStyle: 'italic', fontWeight: 600 }}>2x + y = 7</p>
                        <p style={{ margin: '2px 0 6px 10px', fontStyle: 'italic', fontWeight: 600 }}>3x - y = 8</p>
                      </div>
                      
                      {/* Annotations */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                        <div style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '8px', fontSize: '0.7rem' }}>
                          <span style={{ color: '#2563eb', fontWeight: 800, display: 'block', fontSize: '0.65rem', marginBottom: '2px' }}>Sarah (Tutor)</span>
                          <p style={{ margin: 0, color: '#1e293b' }}>Add equations to eliminate y:</p>
                          <p style={{ margin: 0, fontWeight: 700, color: '#1e293b' }}>5x = 15  ➜  x = 3</p>
                        </div>
                        <div style={{ borderLeft: '3px solid #8b5cf6', paddingLeft: '8px', fontSize: '0.7rem' }}>
                          <span style={{ color: '#7c3aed', fontWeight: 800, display: 'block', fontSize: '0.65rem', marginBottom: '2px' }}>Student</span>
                          <p style={{ margin: 0, color: '#1e293b' }}>Substitute x = 3 into first equation:</p>
                          <p style={{ margin: 0, fontWeight: 700, color: '#1e293b' }}>2(3) + y = 7  ➜  y = 1</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', padding: '8px 12px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)'
                  }}>
                    <span>👨‍🏫 Sarah</span>
                    <span>👩‍🎓 Student</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Point 3: Tutor Support */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '20px',
            padding: '16px 18px',
            boxShadow: openItem === 2 ? '0 10px 25px rgba(0, 0, 0, 0.25)' : 'none',
            transition: 'all 0.3s'
          }}>
            <div 
              onClick={() => toggleItem(2)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer', gap: '12px' }}
            >
              <div style={{ flex: 1, textAlign: 'left' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: openItem === 2 ? '#ffffff' : 'rgba(255, 255, 255, 0.85)' }}>
                  Always available tutor support
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.55)', marginTop: '4px', lineHeight: 1.35, marginBottom: 0 }}>
                  Direct messaging to ask questions, submit homework, and resolve problems between tutoring sessions.
                </p>
              </div>
              <div style={{
                color: openItem === 2 ? '#38bdf8' : 'rgba(255, 255, 255, 0.3)',
                transform: openItem === 2 ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
                marginTop: '2px'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

            {openItem !== 2 && (
              <div style={{ marginTop: '10px', textAlign: 'left' }}>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleItem(2); }}
                  style={showSampleBtnStyle}
                >
                  Show Sample
                </button>
              </div>
            )}

            <div style={{
              maxHeight: openItem === 2 ? '1000px' : '0px',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease',
              opacity: openItem === 2 ? 1 : 0
            }}>
              <div 
                onClick={() => setOpenItem(null)} // Tapping anywhere on opened dropdown collapses it
                style={{ paddingTop: '16px', cursor: 'pointer' }}
              >
                {/* Chat Mockup */}
                <div style={{
                  background: 'rgba(9, 17, 36, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                  overflow: 'hidden'
                }}>
                  {/* Chat Header */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '8px 12px',
                    background: 'rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
                    </div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginLeft: '4px' }}>
                      QuickStudy Mentor Chat
                    </span>
                  </div>

                  {/* Messages */}
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {messages.slice(0, 3).map((msg, idx) => (
                      <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.isSent ? 'flex-end' : 'flex-start' }}>
                        <span style={{ fontSize: '0.65rem', fontWeight: 700, color: senderColors[msg.sender], marginBottom: '2px' }}>
                          {msg.sender}
                        </span>
                        <div style={{
                          maxWidth: '85%',
                          padding: '8px 12px',
                          borderRadius: msg.isSent ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                          fontSize: '0.75rem',
                          lineHeight: 1.4,
                          background: msg.isSent ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255,255,255,0.07)',
                          color: '#fff',
                          textAlign: 'left'
                        }}>
                          {msg.message}
                          <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', marginTop: '2px', textAlign: msg.isSent ? 'right' : 'left' }}>
                            {msg.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div style={{
                    padding: '8px 12px',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center'
                  }}>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '6px 12px', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textAlign: 'left' }}>
                      Type a message…
                    </div>
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>
                      ➤
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Point 4: Parent Dashboard */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '20px',
            padding: '16px 18px',
            boxShadow: openItem === 3 ? '0 10px 25px rgba(0, 0, 0, 0.25)' : 'none',
            transition: 'all 0.3s'
          }}>
            <div 
              onClick={() => toggleItem(3)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer', gap: '12px' }}
            >
              <div style={{ flex: 1, textAlign: 'left' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: openItem === 3 ? '#ffffff' : 'rgba(255, 255, 255, 0.85)' }}>
                  Parent Dashboard
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.55)', marginTop: '4px', lineHeight: 1.35, marginBottom: 0 }}>
                  Updates you regularly on lessons, attendance, confidence scores, and real-time tutor feedback.
                </p>
              </div>
              <div style={{
                color: openItem === 3 ? '#38bdf8' : 'rgba(255, 255, 255, 0.3)',
                transform: openItem === 3 ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
                marginTop: '2px'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

            {openItem !== 3 && (
              <div style={{ marginTop: '10px', textAlign: 'left' }}>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleItem(3); }}
                  style={showSampleBtnStyle}
                >
                  Show Sample
                </button>
              </div>
            )}

            <div style={{
              maxHeight: openItem === 3 ? '1000px' : '0px',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease',
              opacity: openItem === 3 ? 1 : 0
            }}>
              <div 
                onClick={() => setOpenItem(null)} // Tapping anywhere on opened dropdown collapses it
                style={{ paddingTop: '16px', cursor: 'pointer' }}
              >
                {/* Parent Dashboard Mockup */}
                <div style={{
                  background: 'rgba(9, 17, 36, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                  overflow: 'hidden',
                  textAlign: 'left'
                }}>
                  {/* Header */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '10px 14px',
                    background: 'rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8' }}>QLE Parent Portal</span>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#38bdf8', color: '#091124', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800 }}>S</div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 700 }}>Welcome back, Sarah</div>
                    
                    {/* Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px', textAlign: 'center' }}>
                        <span style={{ fontSize: '1rem', display: 'block', marginBottom: '2px' }}>📅</span>
                        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', display: 'block' }}>Attendance</span>
                        <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 800 }}>100%</span>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px', textAlign: 'center' }}>
                        <span style={{ fontSize: '1rem', display: 'block', marginBottom: '2px' }}>🌟</span>
                        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', display: 'block' }}>Confidence</span>
                        <span style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 800 }}>78%</span>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px', textAlign: 'center' }}>
                        <span style={{ fontSize: '1rem', display: 'block', marginBottom: '2px' }}>📐</span>
                        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', display: 'block' }}>Math Mastery</span>
                        <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 800 }}>84%</span>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px', textAlign: 'center' }}>
                        <span style={{ fontSize: '1rem', display: 'block', marginBottom: '2px' }}>🎯</span>
                        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', display: 'block' }}>Target Grade</span>
                        <span style={{ fontSize: '0.9rem', color: '#34d399', fontWeight: 800 }}>5 → 7</span>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div style={{ marginTop: '4px' }}>
                      <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Recent Activity</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' }}>
                        <span>📝</span>
                        <div>
                          <strong>Mathematics Summary</strong> available.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .everything-in-one-place-mobile {
          display: none !important;
        }
        @media (max-width: 767px) {
          .everything-in-one-place-mobile {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
