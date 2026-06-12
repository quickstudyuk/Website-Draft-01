'use client';

import React from 'react';

const traditionalFeatures = [
  "One lesson per week with no follow-up support",
  "Limited visibility on child's actual progress",
  "Minimal student engagement outside of lesson times",
  "Generic worksheets with no digital recordings to review"
];

const quickstudyFeatures = [
  "Personalised 1:1 tutoring tailored to their syllabus",
  "Full lesson recordings stored for 24/7 student revision",
  "AI generated summaries & custom revision notes after every lesson",
  "AI customised revision resources, active recall quizzes & worksheets",
  "Real-time progress tracking with high parent visibility",
  "Dedicated local support and regular feedback loop"
];

const comparisonRows = [
  { feature: "Learning Plan", traditional: "None / Generic worksheets", qs: "Structured Academic Pathway", icon: "📋" },
  { feature: "Support Beyond Lessons", traditional: "None (starts and ends with the lesson)", qs: "24/7 Complete Support Included", icon: "💬" },
  { feature: "Lesson Recordings", traditional: "No (once the lesson ends, it's gone)", qs: "Yes (recorded and stored forever)", icon: "🎥" },
  { feature: "Progress Tracking", traditional: "Limited (occasional parent feedback)", qs: "Real-time Parent Dashboard", icon: "📊" },
  { feature: "AI Study Tools", traditional: "No (manual revision only)", qs: "Yes (summaries, quizzes, notes)", icon: "🤖" },
  { feature: "Parent Visibility", traditional: "Low (rarely know what's covered)", qs: "High (detailed post-session updates)", icon: "👁️" }
];

export default function ValueComparison() {
  return (
    <section id="how-we-differ" className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      position: 'relative', 
      zIndex: 1,
      paddingTop: '100px',
      paddingBottom: '100px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      overflow: 'hidden'
    }}>
      {/* Background blobs matching the theme */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ maxWidth: '1100px', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#38bdf8',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Comparison</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.15
          }}>
            How We Differ From Our Competitors
          </h2>
          <p style={{ 
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '16px auto 0 auto',
            lineHeight: 1.6
          }}>
            Traditional tutoring leaves students on their own between sessions. QuickStudy provides a complete, modern learning environment that guarantees progress.
          </p>
        </div>

        {/* Side-by-Side Cards */}
        <div className="comparison-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '80px',
          alignItems: 'stretch'
        }}>
          {/* Traditional Card */}
          <div className="diff-card traditional-diff" style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(239, 68, 68, 0.15)',
            borderRadius: '24px',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.65)', margin: 0 }}>Traditional Tutoring</h3>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.4)', fontWeight: 600 }}>The static approach</span>
              </div>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.15rem', fontWeight: 800, border: '1px solid rgba(239, 68, 68, 0.2)'
              }}>✗</div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {traditionalFeatures.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.55)', lineHeight: 1.4 }}>
                  <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '1.25rem', marginTop: '-2px' }}>✗</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* QuickStudy Card */}
          <div className="diff-card quickstudy-diff" style={{
            background: 'rgba(9, 17, 36, 0.7)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            borderRadius: '24px',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 15px 35px rgba(56, 189, 248, 0.08)'
          }}>
            <div style={{
              position: 'absolute', top: '-14px', right: '32px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: '#ffffff',
              fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em',
              padding: '6px 16px', borderRadius: '9999px',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              Complete System
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>QuickStudy Way</h3>
                <span style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 700 }}>The complete ecosystem</span>
              </div>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.15rem', fontWeight: 800, border: '1px solid rgba(16, 185, 129, 0.3)'
              }}>✓</div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {quickstudyFeatures.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', fontSize: '1.05rem', color: '#ffffff', fontWeight: 500, lineHeight: 1.4 }}>
                  <span style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '20px', height: '20px', borderRadius: '50%',
                    backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#10b981', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0, marginTop: '2px'
                  }}>✓</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Table Sub-header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Side-by-Side Capabilities
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.95rem', marginTop: '8px' }}>
            A detailed, feature-by-feature analysis of learning environment standards.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="comparison-table-wrapper" style={{ 
          overflowX: 'auto',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(9, 17, 36, 0.6)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            minWidth: '750px'
          }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <th style={{ padding: '20px 24px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 700, fontSize: '0.95rem' }}>Feature</th>
                <th style={{ padding: '20px 24px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 700, fontSize: '0.95rem' }}>Traditional Tutoring</th>
                <th style={{ padding: '20px 24px', color: '#38bdf8', fontWeight: 700, fontSize: '0.95rem', background: 'rgba(56, 189, 248, 0.03)' }}>QuickStudy Way</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="table-row" style={{ 
                  borderBottom: idx === comparisonRows.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'background-color 0.2s ease'
                }}>
                  <td style={{ padding: '18px 24px', color: '#ffffff', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.25rem' }}>{row.icon}</span>
                    {row.feature}
                  </td>
                  <td style={{ padding: '18px 24px', color: 'rgba(255, 255, 255, 0.45)', fontSize: '0.95rem' }}>
                    <span style={{ color: '#ef4444', marginRight: '6px' }}>✗</span> {row.traditional}
                  </td>
                  <td style={{ padding: '18px 24px', color: '#38bdf8', fontWeight: 700, fontSize: '0.95rem', background: 'rgba(56, 189, 248, 0.03)' }}>
                    <span style={{ color: '#4ade80', marginRight: '6px' }}>✓</span> {row.qs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <style>{`
        .diff-card:hover {
          transform: translateY(-6px);
        }
        .traditional-diff:hover {
          border-color: rgba(239, 68, 68, 0.35) !important;
          box-shadow: 0 15px 35px rgba(239, 68, 68, 0.05);
        }
        .quickstudy-diff:hover {
          border-color: rgba(56, 189, 248, 0.6) !important;
          box-shadow: 0 20px 40px rgba(56, 189, 248, 0.15) !important;
        }
        .table-row:hover {
          background-color: rgba(255, 255, 255, 0.02);
        }
        @media (max-width: 768px) {
          .comparison-cards-grid {
            gap: 20px !important;
            margin-bottom: 50px !important;
          }
          .diff-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
