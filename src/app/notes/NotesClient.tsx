'use client';

import React, { useState } from 'react';

export default function NotesClient({ notes }: { notes: { id: string, title: string, fileUrl: string }[] }) {
  const [unlockedNotes, setUnlockedNotes] = useState<Record<string, boolean>>({});
  const [email, setEmail] = useState('');
  const [selectedNote, setSelectedNote] = useState<string | null>(null);

  const handleUnlock = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    if (email.includes('@')) {
      setUnlockedNotes(prev => ({ ...prev, [id]: true }));
      setSelectedNote(null);
      // In a real app, you would send this email to your backend/CRM
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '16px' }}>Study Notes</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Access high-quality study materials, summary notes, and revision guides provided by QuickStudy.</p>
      </div>

      {notes.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>No notes are currently available. Check back soon!</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {notes.map(note => {
            const isUnlocked = unlockedNotes[note.id];
            
            return (
              <div key={note.id} style={{ 
                background: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '16px', 
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.2s',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ padding: '12px', background: 'rgba(56,189,248,0.1)', borderRadius: '12px', color: '#38bdf8' }}>📄</div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'white', lineHeight: 1.4, margin: '0 0 8px 0' }}>{note.title}</h3>
                    {!isUnlocked && (
                      <span style={{ fontSize: '0.8rem', background: 'rgba(239,68,68,0.2)', color: '#ef4444', padding: '2px 8px', borderRadius: '100px' }}>Preview Only (1 Page)</span>
                    )}
                  </div>
                </div>

                {/* PDF PREVIEW IFRAME (Restricted to page 1) */}
                <div style={{ width: '100%', height: '200px', marginBottom: '24px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                  <iframe src={`${note.fileUrl}#page=1&toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="100%" style={{ border: 'none', pointerEvents: isUnlocked ? 'auto' : 'none' }} title={note.title} />
                  
                  {!isUnlocked && (
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to bottom, transparent, rgba(2,6,23,0.95))', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '16px' }}>
                      <p style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 'bold' }}>Unlock full PDF below</p>
                    </div>
                  )}
                </div>

                <div style={{ marginTop: 'auto' }}>
                  {isUnlocked ? (
                    <a href={note.fileUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', textAlign: 'center', padding: '12px', background: '#38bdf8', color: '#0f172a', fontWeight: 'bold', borderRadius: '8px', textDecoration: 'none' }}>
                      Download Full PDF
                    </a>
                  ) : (
                    selectedNote === note.id ? (
                      <form onSubmit={(e) => handleUnlock(e, note.id)} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <input 
                          type="email" 
                          placeholder="Enter your email to unlock" 
                          required 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(56,189,248,0.5)', color: 'white', fontSize: '0.9rem' }} 
                        />
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button type="button" onClick={() => setSelectedNote(null)} style={{ flex: 1, padding: '10px', background: 'transparent', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem' }}>Cancel</button>
                          <button type="submit" style={{ flex: 1, padding: '10px', background: '#38bdf8', color: '#0f172a', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem' }}>Unlock</button>
                        </div>
                      </form>
                    ) : (
                      <button onClick={() => setSelectedNote(note.id)} style={{ width: '100%', padding: '12px', background: 'transparent', color: '#38bdf8', border: '1px solid #38bdf8', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>
                        Unlock Full PDF
                      </button>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
