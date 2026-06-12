import React from 'react';

export default function OurMission() {
  return (
    <section className="section-padding" style={{ 
      backgroundColor: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '100px',
      borderBottom: '1px solid #e2e8f0'
    }}>
      {/* Light theme background accent blobs */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.04) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#0284c7',
            background: 'rgba(2, 132, 199, 0.08)',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '4px'
          }}>Our Mission</span>

          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#0f172a', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.15
          }}>
            Every Child Deserves The Right Support To Succeed
          </h2>
          
          <div style={{ 
            fontSize: '1.2rem', 
            color: '#475569', 
            lineHeight: 1.75, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
            marginTop: '12px'
          }}>
            <p style={{ margin: 0 }}>
              QuickStudy was built in Birmingham with a simple goal:
              <br />
              <strong style={{ color: '#0f172a', display: 'inline-block', marginTop: '8px' }}>
                To make high-quality academic support accessible, structured, and effective for every family.
              </strong>
            </p>
            <p style={{ margin: 0 }}>
              We believe that success in education should not depend on luck, expensive private tutoring, or inconsistent support.
            </p>
            <p style={{ margin: 0, fontWeight: 700, color: '#0284c7' }}>
              It should come from clarity, structure, and consistent guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
