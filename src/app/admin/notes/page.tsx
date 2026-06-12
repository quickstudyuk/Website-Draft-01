import { prisma } from "@/lib/db";
import { uploadNote, deleteNote } from "@/app/actions/content";

export default async function ManageNotes() {
  const notes = await prisma.note.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '24px' }}>Manage Notes</h1>
      
      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Upload New Note</h2>
        <form action={async (formData) => {
          'use server';
          await uploadNote(formData);
        }} style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'rgba(255,255,255,0.7)' }}>Note Title</label>
            <input type="text" name="title" required style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'rgba(255,255,255,0.7)' }}>PDF File</label>
            <input type="file" name="file" accept="application/pdf" required style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }} />
          </div>
          <button type="submit" style={{ padding: '12px 24px', background: '#38bdf8', color: '#0f172a', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Upload</button>
        </form>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ fontSize: '1.2rem' }}>Existing Notes</h2>
        {notes.length === 0 && <p style={{ color: 'rgba(255,255,255,0.5)' }}>No notes uploaded yet.</p>}
        {notes.map(note => (
          <div key={note.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 4px 0' }}>{note.title}</h3>
              <a href={note.fileUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', fontSize: '0.9rem', textDecoration: 'none' }}>View PDF</a>
            </div>
            <form action={async () => {
              'use server';
              await deleteNote(note.id);
            }}>
              <button type="submit" style={{ padding: '8px 16px', background: 'transparent', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
