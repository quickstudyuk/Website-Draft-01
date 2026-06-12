'use client';

import React, { useState } from 'react';
import GlobalCTA from '@/components/ui/GlobalCTA';

export default function FAQClient({ dbFaqs }: { dbFaqs: { id: string, question: string, answer: string, order: number }[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <main>
      {/* PAGE HERO */}
      <section className="section-padding" style={{ 
        background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
        textAlign: 'center', 
        position: 'relative', 
        overflow: 'hidden',
        paddingTop: 'calc(120px + 85px)',
        paddingBottom: '100px',
        marginTop: '-85px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        {/* Background blobs matching the theme */}
        <div style={{
          position: 'absolute', top: '10%', right: '-5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          zIndex: 0, pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-10%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
          zIndex: 0, pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#60a5fa',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '4px'
          }}>Got Questions?</span>
          
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            letterSpacing: '-0.02em', 
            lineHeight: 1.1,
            margin: 0
          }}>
            Frequently Asked{' '}
            <span style={{ 
              backgroundColor: '#facc15', 
              color: '#0f172a', 
              padding: '2px 14px 6px', 
              borderRadius: '8px',
              display: 'inline-block',
              lineHeight: '1.1'
            }}>
              Questions
            </span>
          </h1>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255, 255, 255, 0.7)', 
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '8px auto 0 auto'
          }}>
            Everything you need to know about the QuickStudy system, pricing, and how we help your child succeed.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="section-padding" style={{ 
        backgroundColor: '#f8fafc',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
        paddingBottom: '100px',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{
          position: 'absolute', top: '20%', left: '-10%',
          width: '40vw', height: '40vw',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.04) 0%, transparent 70%)',
          zIndex: 0, pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {dbFaqs.length === 0 ? (
               <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#64748b' }}>No FAQs available at the moment. Please check back later.</p>
            ) : (
              dbFaqs.map((faq) => {
                const isOpen = openIndex === faq.id;
                
                return (
                  <div 
                    key={faq.id} 
                    className={`faq-accordion-card ${isOpen ? 'is-open' : ''}`}
                    style={{ 
                      backgroundColor: 'rgba(9, 17, 36, 0.96)', 
                      border: isOpen ? '1px solid rgba(56, 189, 248, 0.5)' : '1px solid rgba(255, 255, 255, 0.15)',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: isOpen ? '0 15px 30px rgba(0, 0, 0, 0.12)' : '0 4px 10px rgba(0, 0, 0, 0.03)',
                      borderRadius: '20px'
                    }}
                  >
                    <button 
                      onClick={() => toggleAccordion(faq.id)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 28px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        gap: '16px'
                      }}
                    >
                      <span>{faq.question}</span>
                      <span style={{ 
                        color: '#38bdf8', 
                        fontSize: '1.5rem', 
                        lineHeight: 1,
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0
                      }}>
                        +
                      </span>
                    </button>
                    
                    {isOpen && (
                      <div style={{ 
                        padding: '0 28px 20px 28px', 
                        fontSize: '1.025rem', 
                        color: 'rgba(255, 255, 255, 0.75)', 
                        lineHeight: 1.6 
                      }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <GlobalCTA 
        headline="Still Have Questions?"
        subheadline="Book a free consultation to speak with our team directly, or start your child's Learning Profile."
      />

      <style>{`
        .faq-accordion-card:hover {
          transform: translateY(-2px);
          border-color: rgba(56, 189, 248, 0.4) !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important;
        }
        .faq-accordion-card.is-open:hover {
          transform: translateY(-2px);
          border-color: rgba(56, 189, 248, 0.6) !important;
          box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
        }
      `}</style>
    </main>
  );
}
