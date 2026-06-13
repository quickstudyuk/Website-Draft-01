'use client';

import React from 'react';

const inclusions = [
  { title: "Personalised Lessons", desc: "1:1 support tailored to your child's specific gaps." },
  { title: "Expert Tutors", desc: "Vetted subject specialists who know the curriculum." },
  { title: "Lesson Recordings", desc: "24/7 access to past explanations." },
  { title: "AI Lesson Summaries", desc: "Quick overviews of what was covered." },
  { title: "AI Revision Notes", desc: "Custom notes generated from lessons." },
  { title: "AI Quiz Generation", desc: "Active recall practice on weak areas." },
  { title: "Progress Tracking", desc: "Visual data on confidence and mastery." },
  { title: "Parent Updates", desc: "Automated insights after every session." },
  { title: "Flexible Scheduling", desc: "Book times that work for your family." },
  { title: "Learning Dashboard Access", desc: "One central hub for all academic resources." },
  { title: "Syllabus Alignment", desc: "Lessons tailored directly to AQA, Edexcel, and OCR exam boards." },
  { title: "Dedicated Support", desc: "Local coordination team to assist with matching and scheduling." }
];

export default function IncludedFeatures() {
  const [showAll, setShowAll] = React.useState(false);

  return (
    <section className="section-padding" style={{ 
      backgroundColor: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'var(--spacing-16)',
      paddingBottom: 'var(--spacing-16)'
    }}>
      {/* Dynamic background accents (Light Theme) */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#10b981',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>What You Get</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#0f172a', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.2
          }}>
            Everything Included With QuickStudy
          </h2>
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#475569',
            maxWidth: '650px',
            margin: '16px auto 0 auto',
            lineHeight: 1.6
          }}>
            Our comprehensive platform provides everything your child needs to excel.
          </p>
        </div>
        
        <div className="included-features-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '24px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {inclusions.map((item, idx) => {
            const isCollapsible = idx >= 4;
            return (
              <div 
                key={idx} 
                className={`feature-card ${isCollapsible ? 'mobile-collapsible-feature' : ''} ${isCollapsible && !showAll ? 'collapsed' : ''}`}
                style={{ 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '12px',
                  background: 'rgba(224, 242, 254, 0.35)', 
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(186, 230, 253, 0.6)',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px -10px rgba(56, 189, 248, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px -10px rgba(56, 189, 248, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.8)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(56, 189, 248, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8)';
                }}
              >
                <div style={{ 
                  color: '#10b981', 
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  width: '36px', height: '36px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem', fontWeight: 800, lineHeight: 1 
                }}>✓</div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{item.title}</h4>
                <p style={{ fontSize: '1rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile Show More Button */}
        <div className="show-more-wrapper" style={{
          display: 'none',
          justifyContent: 'center',
          marginTop: '32px'
        }}>
          <button 
            onClick={() => setShowAll(!showAll)}
            style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '100px',
              color: '#10b981',
              fontSize: '0.95rem',
              fontWeight: 700,
              padding: '12px 28px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {showAll ? 'Show Less Features' : `Show ${inclusions.length - 4} More Features`}
            <span style={{ transition: 'transform 0.2s ease', transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .included-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .feature-card {
            padding: 16px 12px !important;
          }
          .feature-card h4 {
            font-size: 1rem !important;
          }
          .feature-card p {
            font-size: 0.85rem !important;
          }
          .feature-card:nth-child(2),
          .feature-card:nth-child(3),
          .feature-card:nth-child(6),
          .feature-card:nth-child(7),
          .feature-card:nth-child(10),
          .feature-card:nth-child(11) {
            background: rgba(186, 230, 253, 0.4) !important;
            border-color: rgba(56, 189, 248, 0.5) !important;
          }
          .mobile-collapsible-feature.collapsed {
            display: none !important;
          }
          .show-more-wrapper {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
