import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function BlogIndexPage() {
  const blogs = await prisma.blog.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <main style={{ minHeight: '100vh', paddingTop: 'calc(120px + 85px)', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px', marginTop: '-85px', background: '#020617', color: 'white' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '16px' }}>QuickStudy Blog</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Insights, articles, and educational news from the QuickStudy team.</p>
        </div>

        {blogs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>No blog articles published yet.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            {blogs.map((blog: any) => (
              <Link key={blog.id} href={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '16px', 
                  padding: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s',
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <div>
                    <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                    <h2 style={{ fontSize: '1.5rem', color: 'white', margin: 0 }}>{blog.title}</h2>
                  </div>
                  <div style={{ color: '#38bdf8', padding: '12px', background: 'rgba(56,189,248,0.1)', borderRadius: '50%' }}>
                    &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
