'use client';

import React, { useState, useEffect, useRef } from 'react';
import { saveLead } from "@/app/actions/lead";

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isForm?: boolean;
  isFormSubmitted?: boolean;
}

export default function QSChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hi! I'm **QS Chatbot**, your study companion. Ask me anything about our £18/session online tutoring, our AI study tools, or how to boost your child's exam grades! \n\nI can also register you for a **Free Consultation & Trial Lesson**!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasPromptedForm, setHasPromptedForm] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Form states (when submitting inline)
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  // Show a pulsing unread notification badge after 4 seconds of page load to entice the user
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setUnreadCount(1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  // Triggers the lead form bubble inline
  const triggerLeadForm = () => {
    if (hasPromptedForm) {
      // Find the existing form and scroll to it
      const formMsg = messages.find(m => m.isForm && !m.isFormSubmitted);
      if (formMsg) {
        return;
      }
    }

    setMessages(prev => [
      ...prev,
      {
        id: `form-${Date.now()}`,
        role: 'assistant',
        content: 'Please fill out your details below to schedule your Free Consultation:',
        isForm: true
      }
    ]);
    setHasPromptedForm(true);
  };

  // Handle lead submission
  const handleLeadSubmit = async (e: React.FormEvent, msgId: string) => {
    e.preventDefault();
    if (!leadName.trim() || !leadPhone.trim()) return;

    setIsSubmittingForm(true);
    try {
      const result = await saveLead(leadName, leadPhone);
      if (result.success) {
        // Mark form as submitted
        setMessages(prev => 
          prev.map(m => m.id === msgId ? { ...m, isFormSubmitted: true } : m)
        );
        // Add success message
        setMessages(prev => [
          ...prev,
          {
            id: `success-${Date.now()}`,
            role: 'assistant',
            content: `🎉 **Thank you, ${leadName}!** I've saved your request. One of our academic coordinators will contact you at **${leadPhone}** within 24 hours to schedule your free consultation and trial lesson.`
          }
        ]);
        setLeadName('');
        setLeadPhone('');
      } else {
        alert("Failed to submit consultation request. Please check details and try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingForm(false);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || inputValue;
    if (!messageText.trim()) return;

    if (!textToSend) {
      setInputValue('');
    }

    const userMsgId = `user-${Date.now()}`;
    const newMessages = [
      ...messages,
      { id: userMsgId, role: 'user' as const, content: messageText }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages.map(m => ({ role: m.role, content: m.content })) })
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      const aiReply = data.text || "I'm sorry, I encountered an issue. Can you repeat that?";

      setMessages(prev => [
        ...prev,
        { id: `ai-${Date.now()}`, role: 'assistant', content: aiReply }
      ]);

      // If the AI message suggests booking or name/phone and we haven't shown the form yet, auto-trigger the form!
      const lowercaseReply = aiReply.toLowerCase();
      const triggers = ['consultation form', 'name and contact number', 'name and phone', 'contact number', 'phone number', 'book one for you', 'schedule a free consultation'];
      const matchesTrigger = triggers.some(t => lowercaseReply.includes(t));
      
      if (matchesTrigger && !hasPromptedForm) {
        setTimeout(() => {
          triggerLeadForm();
        }, 1000);
      }

    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { id: `err-${Date.now()}`, role: 'assistant', content: "Sorry, I'm having trouble connecting to the server. You can also contact us directly at quickstudyuk@gmail.com!" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Inline Markdown renderer for basic bold texts
  const renderMessageContent = (text: string) => {
    const parts = text.split('**');
    return parts.map((part, idx) => {
      if (idx % 2 === 1) {
        return <strong key={idx} style={{ color: '#ffffff', fontWeight: 800 }}>{part}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      {/* FLOATING ACTION BUTTON */}
      <button 
        onClick={handleOpenToggle}
        className="qs-chat-fab"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99999,
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(79, 70, 229, 0.4), inset 0 2px 4px rgba(255,255,255,0.2)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          outline: 'none',
        }}
      >
        {isOpen ? (
          // Close Icon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          // Chat Sparkle Icon
          <div style={{ position: 'relative' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#facc15" style={{ position: 'absolute', top: '-6px', right: '-6px', filter: 'drop-shadow(0 0 2px rgba(250,204,21,0.5))' }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </div>
        )}

        {/* Unread pulsing badge */}
        {!isOpen && unreadCount > 0 && (
          <span 
            className="qs-chat-badge"
            style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              backgroundColor: '#ef4444',
              color: 'white',
              fontSize: '10px',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)',
              border: '2px solid white'
            }}
          >
            {unreadCount}
          </span>
        )}
      </button>

      {/* CHAT WINDOW */}
      {isOpen && (
        <div 
          className="qs-chat-window"
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '24px',
            zIndex: 99999,
            width: '380px',
            height: '560px',
            borderRadius: '24px',
            background: 'rgba(9, 15, 30, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(56, 189, 248, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Header */}
          <div style={{
            padding: '18px 24px',
            background: 'rgba(15, 23, 42, 0.6)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  QS Chatbot
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }}></span>
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>QuickStudy Assistant</span>
              </div>
            </div>
            
            {/* Quick Consultation CTA in Header */}
            <button 
              onClick={triggerLeadForm}
              style={{
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: '#38bdf8',
                padding: '6px 12px',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              📅 Free Trial
            </button>
          </div>

          {/* Messages Container */}
          <div style={{
            flex: 1,
            padding: '20px 24px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            scrollbarWidth: 'thin',
          }}
          className="qs-chat-messages"
          >
            {messages.map((msg) => (
              <div 
                key={msg.id}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  width: '100%'
                }}
              >
                <div style={{
                  maxWidth: '85%',
                  padding: msg.isForm ? '16px' : '12px 16px',
                  borderRadius: msg.role === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                  background: msg.role === 'user' 
                    ? 'linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)' 
                    : 'rgba(255, 255, 255, 0.05)',
                  border: msg.role === 'user' 
                    ? 'none' 
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.925rem',
                  lineHeight: '1.5',
                  boxShadow: msg.role === 'user' ? '0 4px 12px rgba(79, 70, 229, 0.2)' : 'none',
                }}>
                  {msg.isForm ? (
                    // INLINE LEAD CAPTURE FORM
                    msg.isFormSubmitted ? (
                      <p style={{ margin: 0, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
                        ✓ Consultation Request Submitted
                      </p>
                    ) : (
                      <form onSubmit={(e) => handleLeadSubmit(e, msg.id)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                          📅 Consultation Booking
                        </div>
                        <p style={{ margin: '0 0 6px 0', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                          Enter details below to claim your free session:
                        </p>
                        <input 
                          type="text" 
                          placeholder="Your Name (Parent)" 
                          required 
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            background: 'rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            color: 'white',
                            fontSize: '0.85rem',
                            outline: 'none',
                          }}
                        />
                        <input 
                          type="tel" 
                          placeholder="Contact Phone Number" 
                          required 
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            background: 'rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            color: 'white',
                            fontSize: '0.85rem',
                            outline: 'none',
                          }}
                        />
                        <button 
                          type="submit" 
                          disabled={isSubmittingForm}
                          style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '8px',
                            background: 'linear-gradient(90deg, #38bdf8 0%, #4f46e5 100%)',
                            border: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            marginTop: '4px',
                            boxShadow: '0 4px 12px rgba(56, 189, 248, 0.25)',
                            transition: 'all 0.2s',
                          }}
                        >
                          {isSubmittingForm ? 'Booking...' : 'Book Free Consultation'}
                        </button>
                      </form>
                    )
                  ) : (
                    // Regular Text Message (rendered inline markdown)
                    <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                      {renderMessageContent(msg.content)}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* AI Typing Indicator */}
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                <div style={{
                  padding: '12px 18px',
                  borderRadius: '18px 18px 18px 2px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <span className="qs-typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.5)', display: 'inline-block', animation: 'bounce 1.4s infinite ease-in-out both' }}></span>
                  <span className="qs-typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.5)', display: 'inline-block', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '0.2s' }}></span>
                  <span className="qs-typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.5)', display: 'inline-block', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies list */}
          <div style={{
            padding: '8px 20px',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            background: 'rgba(15, 23, 42, 0.3)',
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
          }}
          className="qs-chat-quick-replies"
          >
            <button 
              onClick={() => handleSendMessage("What are your pricing plans?")}
              style={{ padding: '6px 12px', borderRadius: '100px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', cursor: 'pointer', outline: 'none' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >
              💰 Pricing
            </button>
            <button 
              onClick={() => handleSendMessage("How do your AI study tools work?")}
              style={{ padding: '6px 12px', borderRadius: '100px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', cursor: 'pointer', outline: 'none' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >
              ⚡ What is QLE?
            </button>
            <button 
              onClick={() => handleSendMessage("Who are the tutors?")}
              style={{ padding: '6px 12px', borderRadius: '100px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', cursor: 'pointer', outline: 'none' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >
              🎓 Tutors
            </button>
            <button 
              onClick={triggerLeadForm}
              style={{ padding: '6px 12px', borderRadius: '100px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38bdf8', fontSize: '0.75rem', fontWeight: 'bold', cursor: 'pointer', outline: 'none' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.18)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; }}
            >
              📅 Book Consultation
            </button>
          </div>

          {/* Footer Input */}
          <div style={{
            padding: '16px 20px',
            background: 'rgba(15, 23, 42, 0.8)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <input 
              type="text" 
              placeholder="Ask a question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(56, 189, 248, 0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
            />
            <button 
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputValue.trim()}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: inputValue.trim() ? 'linear-gradient(135deg, #38bdf8 0%, #4f46e5 100%)' : 'rgba(255,255,255,0.05)',
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: inputValue.trim() ? 'pointer' : 'default',
                transition: 'all 0.2s',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={inputValue.trim() ? "white" : "rgba(255,255,255,0.3)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Global CSS Styles for Chat widget */}
      <style>{`
        .qs-chat-fab:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 12px 40px rgba(79, 70, 229, 0.6), inset 0 2px 4px rgba(255,255,255,0.3) !important;
        }
        .qs-chat-messages::-webkit-scrollbar {
          width: 6px;
        }
        .qs-chat-messages::-webkit-scrollbar-track {
          background: transparent;
        }
        .qs-chat-messages::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .qs-chat-messages::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .qs-chat-quick-replies::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes bounce {
          0%, 80%, 100% { 
            transform: scale(0);
          } 40% { 
            transform: scale(1.0);
          }
        }

        @media (max-width: 480px) {
          .qs-chat-window {
            width: calc(100% - 32px) !important;
            height: calc(100% - 130px) !important;
            bottom: 104px !important;
            right: 16px !important;
          }
        }
      `}</style>
    </>
  );
}
