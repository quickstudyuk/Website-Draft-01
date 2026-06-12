import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import Link from "next/link";
import { logout } from "@/app/actions/auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (!session.isAdmin) {
    redirect("/login");
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0f172a', color: 'white' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: '#020617', borderRight: '1px solid rgba(255,255,255,0.1)', padding: '24px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '32px', color: '#38bdf8' }}>Admin Panel</h2>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
          <Link href="/admin" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Dashboard Home</Link>
          <Link href="/admin/notes" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Manage Notes</Link>
          <Link href="/admin/blogs" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Manage Blogs</Link>
          <Link href="/admin/faqs" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Manage FAQs</Link>
          <Link href="/admin/policies" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Manage Policies</Link>
          <Link href="/admin/leads" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Manage Leads</Link>
        </nav>

        <form action={logout}>
          <button type="submit" style={{ width: '100%', padding: '12px', background: 'transparent', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '8px', cursor: 'pointer' }}>
            Logout
          </button>
        </form>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
