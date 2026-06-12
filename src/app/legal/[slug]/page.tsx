import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

function renderMarkdown(text: string) {
  if (!text) return null;
  
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];
  
  const flushList = (key: string | number) => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${key}`} style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'disc' }}>
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };
  
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    
    // Check if it's a list item
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      const content = trimmed.slice(2);
      // parse bold text inline
      const parts = content.split('**');
      const inlineElems = parts.map((part, pIdx) => {
        if (pIdx % 2 === 1) return <strong key={pIdx}>{part}</strong>;
        return part;
      });
      currentList.push(<li key={`li-${idx}`} style={{ color: '#334155' }}>{inlineElems}</li>);
    } else {
      // Flush any accumulated list items
      flushList(idx);
      
      if (trimmed === '') {
        return;
      }
      
      if (trimmed.startsWith('# ')) {
        const content = trimmed.slice(2);
        elements.push(<h1 key={idx} style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginTop: '2.5rem', marginBottom: '1.25rem' }}>{content}</h1>);
      } else if (trimmed.startsWith('## ')) {
        const content = trimmed.slice(3);
        elements.push(<h2 key={idx} style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>{content}</h2>);
      } else if (trimmed.startsWith('### ')) {
        const content = trimmed.slice(4);
        elements.push(<h3 key={idx} style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>{content}</h3>);
      } else {
        // parse bold text inline
        const parts = trimmed.split('**');
        const inlineElems = parts.map((part, pIdx) => {
          if (pIdx % 2 === 1) return <strong key={pIdx}>{part}</strong>;
          return part;
        });
        elements.push(<p key={idx} style={{ marginBottom: '1.25rem', color: '#334155' }}>{inlineElems}</p>);
      }
    }
  });
  
  // Flush any final list
  flushList('final');
  
  return elements;
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const policy = await prisma.policy.findUnique({
    where: { slug: resolvedParams.slug }
  });

  const validSlugs = ['terms', 'privacy', 'safeguarding', 'refund'];
  
  if (!validSlugs.includes(resolvedParams.slug)) {
    notFound();
  }

  const titleMap: Record<string, string> = {
    'terms': 'Terms and Conditions',
    'privacy': 'Privacy Policy',
    'safeguarding': 'Safeguarding & Transparency',
    'refund': 'Refund Policy'
  };

  const defaultTitle = titleMap[resolvedParams.slug];

  return (
    <main style={{ minHeight: '100vh', paddingTop: 'calc(120px + 85px)', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px', marginTop: '-85px', background: '#f8fafc', color: '#0f172a' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px' }}>
          {policy?.title || defaultTitle}
        </h1>
        {policy?.updatedAt && (
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '40px' }}>
            Last updated: {new Date(policy.updatedAt).toLocaleDateString()}
          </p>
        )}

        <div style={{ 
          background: 'white', 
          padding: '40px', 
          borderRadius: '16px', 
          border: '1px solid #e2e8f0',
          boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
          lineHeight: '1.8',
          fontSize: '1.05rem',
          color: '#334155'
        }}>
          {policy?.content ? renderMarkdown(policy.content) : (
            <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>
              This policy is currently being updated. Please check back later.
            </p>
          )}
        </div>
        
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#0284c7', textDecoration: 'none', fontWeight: 'bold' }}>
            &larr; Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}

