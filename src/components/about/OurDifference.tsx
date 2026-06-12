'use client';

import React from 'react';

const pillars = [
  {
    num: "01",
    title: "Structured Learning Plans",
    desc: "Every student follows a personalised academic roadmap designed around their goals and weaknesses."
  },
  {
    num: "02",
    title: "Expert Tutors",
    desc: "Carefully selected tutors who focus on understanding, confidence, and exam performance."
  },
  {
    num: "03",
    title: "AI Learning Tools (QLE)",
    desc: "A complete learning environment including recordings, summaries, quizzes, and dashboards."
  },
  {
    num: "04",
    title: "Parent Transparency",
    desc: "Parents always know what is being taught, how the child is progressing, and what comes next."
  }
];

export default function OurDifference() {
  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '100px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      {/* Background radial blobs */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
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
          }}>Our Pillars</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.15
          }}>
            More Than A Tutoring Company
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '650px', margin: '16px auto 0 auto', lineHeight: 1.6 }}>
            We provide a complete learning infrastructure to make academic progress reliable and trackable.
          </p>
        </div>
        
        {/* Grid of Pillars */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="difference-card"
              style={{ 
                padding: '40px 30px', 
                position: 'relative', 
                overflow: 'hidden',
                background: 'rgba(9, 17, 36, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '24px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              {/* Giant Background Number */}
              <div style={{ 
                position: 'absolute', top: '-10px', right: '-10px', 
                fontSize: '6rem', fontWeight: 900, 
                color: 'rgba(56, 189, 248, 0.05)', 
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none'
              }}>
                {pillar.num}
              </div>
              
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 800, 
                color: '#ffffff', 
                margin: 0,
                position: 'relative', 
                zIndex: 1 
              }}>
                {pillar.title}
              </h3>
              
              <p style={{ 
                fontSize: '1rem', 
                color: 'rgba(255, 255, 255, 0.65)', 
                lineHeight: 1.6,
                margin: 0,
                position: 'relative', 
                zIndex: 1 
              }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .difference-card:hover {
          transform: translateY(-5px);
          border-color: rgba(56, 189, 248, 0.5) !important;
          box-shadow: 0 20px 40px rgba(56, 189, 248, 0.12) !important;
        }
      `}</style>
    </section>
  );
}
