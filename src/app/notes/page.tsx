import { prisma } from "@/lib/db";
import NotesClient from "./NotesClient";

export default async function NotesPage() {
  const notes = await prisma.note.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <main style={{ minHeight: '100vh', paddingTop: 'calc(120px + 85px)', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px', marginTop: '-85px', background: '#020617', color: 'white' }}>
      <NotesClient notes={notes} />
    </main>
  );
}
