'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ConsultationTrial() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const handleCardClick = (index: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
    }
  };

  return (
    <section id="get-started" style={{ 
      backgroundColor: 'var(--gray-900)', 
      color: 'white',
      paddingTop: '40px', // Reduced black space at the top
      paddingBottom: '90px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '16px', color: '#ffffff' }}>
            Choose The Best Way To Get Started
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-300)', lineHeight: 1.6, margin: 0 }}>
            Not ready for a Subscription? Explore our free entry options.
          </p>
        </div>
        
        <div className="trial-grid">
          
          {/* Card 1: Consultation */}
          <div 
            data-index={0}
            className={`trial-flip-card ${flippedCards[0] ? 'flipped' : ''}`}
            onClick={() => handleCardClick(0)}
          >
            <div className="trial-flip-card-inner">
              {/* Front Side */}
              <div className="trial-flip-card-front">
                <h3 className="trial-card-title">Free Parent Consultation</h3>
                <p className="trial-card-desc">
                  Speak with our team for guidance. Perfect for parents seeking clarity and a personalised learning plan.
                </p>
                <div className="trial-card-bestfor">
                  Best for: Parents seeking direction.
                </div>
                <span className="mobile-tap-hint">Tap to Reveal Solution</span>
              </div>
              
              {/* Back Side */}
              <div className="trial-flip-card-back">
                <h3 className="trial-card-back-title">Free Parent Consultation</h3>
                <p className="trial-card-back-text">Schedule a 15-minute call with our academic team to map your goals.</p>
                <Link href="/consultation" style={{ width: '100%', textDecoration: 'none' }} onClick={(e) => e.stopPropagation()}>
                  <button className="trial-book-btn">
                    Book Free Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Trial Lesson */}
          <div 
            data-index={1}
            className={`trial-flip-card ${flippedCards[1] ? 'flipped' : ''}`}
            onClick={() => handleCardClick(1)}
          >
            <div className="trial-flip-card-inner">
              {/* Front Side */}
              <div className="trial-flip-card-front">
                <h3 className="trial-card-title">Free Trial Lesson</h3>
                <p className="trial-card-desc">
                  A real 1:1 student learning experience to understand our structured teaching approach.
                </p>
                <div className="trial-card-bestfor">
                  Best for: Students wanting to experience the system.
                </div>
                <span className="mobile-tap-hint">Tap to Reveal Solution</span>
              </div>
              
              {/* Back Side */}
              <div className="trial-flip-card-back">
                <h3 className="trial-card-back-title">Free Trial Lesson</h3>
                <p className="trial-card-back-text">Let your child experience our environment and vet our teaching approach.</p>
                <Link href="/survey" style={{ width: '100%', textDecoration: 'none' }} onClick={(e) => e.stopPropagation()}>
                  <button className="trial-book-btn" style={{ backgroundColor: '#10b981', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)' }}>
                    Book Free Trial
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .trial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          max-width: 800px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .trial-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* 3D Flip styling */
        .trial-flip-card {
          background-color: transparent;
          height: 240px;
          perspective: 1200px;
          cursor: pointer;
        }

        .trial-flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        @media (hover: hover) and (pointer: fine) {
          .trial-flip-card:hover .trial-flip-card-inner {
            transform: rotateY(180deg);
          }
        }

        .trial-flip-card.flipped .trial-flip-card-inner {
          transform: rotateY(180deg);
        }

        .trial-flip-card-front, .trial-flip-card-back {
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
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        /* Glassmorphic Front Cards */
        .trial-flip-card-front {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05);
          color: white;
          text-align: left;
          align-items: flex-start;
          gap: 8px;
        }

        /* Glassmorphic Back Cards (revealing buttons) */
        .trial-flip-card-back {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.05);
          color: white;
          transform: rotateY(180deg);
          gap: 12px;
        }

        .trial-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #38bdf8;
          margin: 0;
        }

        .trial-card-desc {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0;
        }

        .trial-card-bestfor {
          font-size: 0.85rem;
          font-weight: 700;
          color: #facc15;
          margin-top: 4px;
        }

        .trial-card-back-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .trial-card-back-text {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.4;
          margin: 0;
        }

        .trial-book-btn {
          width: 100%;
          padding: 12px;
          background-color: #facc15;
          color: #0f172a;
          font-weight: 800;
          font-size: 0.95rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
          box-shadow: 0 4px 12px rgba(250, 204, 21, 0.25);
        }

        .trial-book-btn:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        .mobile-tap-hint {
          display: none;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: auto;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
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
