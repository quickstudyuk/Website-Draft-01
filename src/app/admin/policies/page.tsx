import { prisma } from "@/lib/db";
import { updatePolicy } from "@/app/actions/admin";

export default async function ManagePolicies({ searchParams }: { searchParams: Promise<{ slug?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const policiesList = [
    { slug: 'terms', title: 'Terms and Conditions' },
    { slug: 'privacy', title: 'Privacy Policy' },
    { slug: 'safeguarding', title: 'Safeguarding & Transparency' },
    { slug: 'refund', title: 'Refund Policy' },
  ];

  const currentSlug = resolvedSearchParams.slug || 'terms';
  const currentPolicyDef = policiesList.find(p => p.slug === currentSlug) || policiesList[0];

  const policy = await prisma.policy.findUnique({
    where: { slug: currentSlug }
  });

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '24px' }}>Manage Policies</h1>
      
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '12px' }}>
        {policiesList.map(p => (
          <a key={p.slug} href={`?slug=${p.slug}`} style={{
            padding: '8px 16px',
            borderRadius: '100px',
            background: p.slug === currentSlug ? '#38bdf8' : 'rgba(255,255,255,0.05)',
            color: p.slug === currentSlug ? '#0f172a' : 'white',
            textDecoration: 'none',
            fontWeight: p.slug === currentSlug ? 'bold' : 'normal',
            whiteSpace: 'nowrap'
          }}>
            {p.title}
          </a>
        ))}
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Edit {currentPolicyDef.title}</h2>
        <form action={async (formData) => {
          'use server';
          await updatePolicy(currentSlug, formData);
        }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input type="hidden" name="title" value={currentPolicyDef.title} />
          
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'rgba(255,255,255,0.7)' }}>Content (Supports basic Markdown/HTML)</label>
            <textarea 
              name="content" 
              defaultValue={policy?.content || ''} 
              required 
              rows={20} 
              style={{ width: '100%', padding: '16px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', resize: 'vertical', fontFamily: 'monospace' }} 
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" style={{ padding: '12px 32px', background: '#38bdf8', color: '#0f172a', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
