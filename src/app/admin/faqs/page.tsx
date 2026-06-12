import { prisma } from "@/lib/db";
import { createFAQ, deleteFAQ } from "@/app/actions/admin";

export default async function ManageFAQs() {
  const faqs = await prisma.fAQ.findMany({ orderBy: { order: 'asc' } });

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '24px' }}>Manage FAQs</h1>
      
      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Add New FAQ</h2>
        <form action={async (formData) => {
          'use server';
          await createFAQ(formData);
        }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'rgba(255,255,255,0.7)' }}>Question</label>
            <input type="text" name="question" required style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'rgba(255,255,255,0.7)' }}>Answer</label>
            <textarea name="answer" required rows={3} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', resize: 'vertical' }} />
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
            <div style={{ width: '150px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'rgba(255,255,255,0.7)' }}>Order (optional)</label>
              <input type="number" name="order" defaultValue="0" style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }} />
            </div>
            <button type="submit" style={{ padding: '12px 24px', background: '#38bdf8', color: '#0f172a', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Add FAQ</button>
          </div>
        </form>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ fontSize: '1.2rem' }}>Existing FAQs</h2>
        {faqs.length === 0 && <p style={{ color: 'rgba(255,255,255,0.5)' }}>No FAQs added yet.</p>}
        {faqs.map(faq => (
          <div key={faq.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ flex: 1, paddingRight: '20px' }}>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 8px 0', color: '#38bdf8' }}>{faq.question}</h3>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.5 }}>{faq.answer}</p>
            </div>
            <form action={async () => {
              'use server';
              await deleteFAQ(faq.id);
            }}>
              <button type="submit" style={{ padding: '8px 16px', background: 'transparent', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
