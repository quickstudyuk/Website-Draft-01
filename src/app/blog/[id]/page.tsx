import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const blog = await prisma.blog.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!blog) {
    notFound();
  }

  return (
    <main style={{ minHeight: '100vh', padding: '120px 20px 60px', background: '#020617', color: 'white', display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Link href="/blog" style={{ color: '#38bdf8', textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>
          &larr; Back to all blogs
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>{blog.title}</h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '40px' }}>
          Published on {new Date(blog.createdAt).toLocaleDateString()}
        </p>

        {/* Embed the PDF full width/height */}
        <div style={{ flex: 1, minHeight: '800px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: 'white' }}>
          <iframe 
            src={`${blog.pdfUrl}#toolbar=0`} 
            width="100%" 
            height="100%" 
            style={{ border: 'none' }}
            title={blog.title}
          />
        </div>
      </div>
    </main>
  );
}
