'use client';

import React from 'react';
import { AnalyticsMetric } from '@/components/dashboard';

export default function QLEPreview() {
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
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)',
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
          }}>QLE Technology</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.15
          }}>
            Technology That Keeps You Informed
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '16px auto 0 auto', lineHeight: 1.6 }}>
            Parents do not need to guess what is happening in lessons. Everything is visible, structured, and transparent.
          </p>
        </div>
        
        {/* Dashboard Mockup Grid */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="dashboard-mockup" style={{ 
            backgroundColor: 'rgba(9, 17, 36, 0.8)', 
            border: '1px solid rgba(255, 255, 255, 0.15)', 
            borderRadius: '28px', 
            padding: '40px 32px', 
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            {/* Mockup Header */}
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: '0 0 4px 0' }}>Parent Dashboard View</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.5)', margin: 0 }}>Real-time updates on child's study pathway</p>
            </div>

            {/* Metrics Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '20px' 
            }}>
              <AnalyticsMetric 
                value="84%" 
                label="Mathematics Mastery" 
                trend="up" 
                valueStyle={{ color: '#4ade80', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}
                labelStyle={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginTop: '6px' }}
                containerStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid rgba(255, 255, 255, 0.08)', 
                  padding: '24px 20px', 
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              />
              <AnalyticsMetric 
                value="92%" 
                label="English Literature" 
                trend="up" 
                valueStyle={{ color: '#4ade80', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}
                labelStyle={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginTop: '6px' }}
                containerStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid rgba(255, 255, 255, 0.08)', 
                  padding: '24px 20px', 
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              />
              <AnalyticsMetric 
                value="3" 
                label="Completed Sessions" 
                valueStyle={{ color: '#38bdf8', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}
                labelStyle={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginTop: '6px' }}
                containerStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid rgba(255, 255, 255, 0.08)', 
                  padding: '24px 20px', 
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              />
            </div>
            
            {/* Dashboard Lower Section */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: '0 0 16px 0' }}>Recent Lesson Summary</h4>
              
              <div className="mockup-list-item" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '16px 20px', 
                backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                borderRadius: '16px', 
                border: '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '1rem' }}>Algebra: Solving Quadratics</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', marginTop: '4px' }}>Tutor: Sarah M. • Recorded • Notes Generated</div>
                </div>
                <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.9rem' }}>View Details →</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .mockup-list-item:hover {
          background-color: rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(255, 255, 255, 0.12) !important;
        }
      `}</style>
    </section>
  );
}
