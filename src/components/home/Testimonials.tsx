'use client';

import React, { useState, useEffect } from 'react';
import { BaseCard } from '@/components/ui/cards';

interface FeedbackItem {
  quote: string;
  author: string;
  stars: number;
  // Admin-only fields stored in state (not displayed in card)
  name: string;
  email: string;
  role: string;
  classGroup: string;
  hidden: boolean;
}

const DEFAULT_FEEDBACKS: FeedbackItem[] = [
  {
    quote: "My child finally understands Maths properly.",
    author: "Parent of Year 9 Student",
    stars: 5,
    name: "Anonymous",
    email: "parent1@quickstudy.uk",
    role: "parent",
    classGroup: "Year 9 Student",
    hidden: true
  },
  {
    quote: "The system makes everything clear.",
    author: "Parent of GCSE Student",
    stars: 5,
    name: "Anonymous",
    email: "parent2@quickstudy.uk",
    role: "parent",
    classGroup: "GCSE Student",
    hidden: true
  },
  {
    quote: "We can actually see progress week by week.",
    author: "Parent of Year 7 Student",
    stars: 5,
    name: "Anonymous",
    email: "parent3@quickstudy.uk",
    role: "parent",
    classGroup: "Year 7 Student",
    hidden: true
  },
  {
    quote: "The AI revision notes are extremely helpful before tests.",
    author: "Year 10 Student",
    stars: 5,
    name: "Kamil Ahmad",
    email: "student1@quickstudy.uk",
    role: "student",
    classGroup: "Year 10 Student",
    hidden: true
  },
  {
    quote: "Structured study habits helped me manage my GCSE stress.",
    author: "GCSE Student",
    stars: 5,
    name: "Fatima Ali",
    email: "student2@quickstudy.uk",
    role: "student",
    classGroup: "GCSE Student",
    hidden: true
  },
  {
    quote: "The learning environment makes lesson delivery smooth and tracks student focus perfectly.",
    author: "Chemistry Tutor",
    stars: 5,
    name: "Dr. James Smith",
    email: "tutor1@quickstudy.uk",
    role: "tutor",
    classGroup: "Chemistry Tutor",
    hidden: true
  }
];

export default function Testimonials() {
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>(DEFAULT_FEEDBACKS);
  const [expanded, setExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quote, setQuote] = useState('');
  const [stars, setStars] = useState(5);
  const [role, setRole] = useState('parent');
  const [classGroup, setClassGroup] = useState('');
  const [hidden, setHidden] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('quickstudy_feedbacks');
    if (stored) {
      try {
        setFeedbacks(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse stored feedbacks", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quote || !email || !classGroup) return;

    // Formatting author display metadata
    const formattedRole = role === 'parent' ? 'Parent' : role === 'student' ? 'Student' : 'Tutor';
    const authorText = hidden 
      ? `${formattedRole} of ${classGroup}`
      : `${name || 'Anonymous'} (${formattedRole} of ${classGroup})`;

    const newItem: FeedbackItem = {
      quote,
      author: authorText,
      stars,
      name: name || 'Anonymous',
      email,
      role,
      classGroup,
      hidden
    };

    const updated = [newItem, ...feedbacks]; // Put new review at the beginning
    setFeedbacks(updated);
    localStorage.setItem('quickstudy_feedbacks', JSON.stringify(updated));

    // Reset Form
    setName('');
    setEmail('');
    setQuote('');
    setStars(5);
    setRole('parent');
    setClassGroup('');
    setHidden(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setShowForm(false);
    }, 2500);
  };

  const visibleFeedbacks = expanded ? feedbacks : feedbacks.slice(0, 3);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--gray-50)', padding: 'var(--spacing-16) 0' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--foreground)', marginBottom: 'var(--spacing-8)' }}>
          What Parents Say
        </h2>
        
        {/* Testimonials Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 'var(--spacing-4)',
          marginBottom: '24px'
        }}>
          {visibleFeedbacks.map((item, idx) => (
            <BaseCard key={idx} style={{ 
              padding: 'var(--spacing-6)', 
              backgroundColor: 'white', 
              border: '1px solid var(--gray-200)', 
              textAlign: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'var(--spacing-3)',
              borderRadius: '20px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
              justifyContent: 'space-between',
              minHeight: '200px'
            }}>
              <div>
                <div style={{ color: '#fbbf24', fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '8px' }}>
                  {'★'.repeat(item.stars)}{'☆'.repeat(5 - item.stars)}
                </div>
                <p style={{ fontSize: '1.05rem', color: 'var(--gray-800)', fontStyle: 'italic', lineHeight: 1.5, margin: 0 }}>
                  &quot;{item.quote}&quot;
                </p>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)', fontWeight: 600, marginTop: '8px' }}>
                — {item.author}
              </div>
            </BaseCard>
          ))}
        </div>

        {/* Counter and Form Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '24px' }}>
          
          {/* & [count] More Feedbacks Link */}
          {feedbacks.length > 3 && (
            <button 
              onClick={() => setExpanded(!expanded)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'opacity 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              {expanded ? 'Show Less' : `& ${feedbacks.length - 3} More Feedbacks →`}
            </button>
          )}

          {/* Toggle form button */}
          <button 
            onClick={() => setShowForm(!showForm)}
            style={{
              padding: '10px 24px',
              backgroundColor: 'rgba(30, 58, 138, 0.05)',
              color: 'var(--primary)',
              fontWeight: 700,
              borderRadius: '9999px',
              border: '1px dashed rgba(30, 58, 138, 0.2)',
              cursor: 'pointer',
              marginTop: '8px',
              fontSize: '0.9rem'
            }}
          >
            {showForm ? 'Cancel Feedback' : 'Share Your Feedback'}
          </button>

          {/* Inline Submission Form */}
          {showForm && (
            <div style={{
              width: '100%',
              maxWidth: '550px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              marginTop: '16px',
              textAlign: 'left'
            }}>
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🎉</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--foreground)', margin: 0 }}>Thank you for your feedback!</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', marginTop: '6px' }}>Your review is saved and has been added to our records.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--foreground)', margin: 0 }}>Share Your Experience</h3>
                  
                  {/* Selectable Stars */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--gray-700)', marginBottom: '6px' }}>Rating</label>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setStars(star)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1.5rem',
                            color: star <= stars ? '#fbbf24' : '#e2e8f0',
                            padding: 0
                          }}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--gray-700)', marginBottom: '4px' }}>Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Sarah K." 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--gray-300)', fontSize: '0.9rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--gray-700)', marginBottom: '4px' }}>Email (Internal Only)</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. sarah@test.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--gray-300)', fontSize: '0.9rem' }}
                      />
                    </div>
                  </div>

                  {/* Anonymous Checkbox */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input 
                      type="checkbox" 
                      id="hide-name"
                      checked={hidden}
                      onChange={(e) => setHidden(e.target.checked)}
                      style={{ cursor: 'pointer' }}
                    />
                    <label htmlFor="hide-name" style={{ fontSize: '0.85rem', color: 'var(--gray-600)', cursor: 'pointer' }}>
                      Hide my name in public (submit anonymously)
                    </label>
                  </div>

                  {/* Role and Class Group */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--gray-700)', marginBottom: '4px' }}>Your Role</label>
                      <select 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}
                        style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid var(--gray-300)', fontSize: '0.9rem', backgroundColor: 'white' }}
                      >
                        <option value="parent">Parent</option>
                        <option value="student">Student</option>
                        <option value="tutor">Tutor</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--gray-700)', marginBottom: '4px' }}>Class / Year Group</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. GCSE Student, Year 9 Student" 
                        value={classGroup}
                        onChange={(e) => setClassGroup(e.target.value)}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--gray-300)', fontSize: '0.9rem' }}
                      />
                    </div>
                  </div>

                  {/* Quote Textarea */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--gray-700)', marginBottom: '4px' }}>Feedback / Opinion</label>
                    <textarea 
                      required
                      rows={3} 
                      placeholder="Share your experience..." 
                      value={quote}
                      onChange={(e) => setQuote(e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--gray-300)', fontSize: '0.9rem', fontFamily: 'sans-serif' }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    style={{
                      padding: '12px',
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      fontWeight: 700,
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      textAlign: 'center',
                      boxShadow: '0 4px 10px rgba(30, 58, 138, 0.15)'
                    }}
                  >
                    Submit Feedback
                  </button>
                </form>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
