import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function AdminDashboard() {
  const noteCount = await prisma.note.count();
  const blogCount = await prisma.blog.count();
  const faqCount = await prisma.fAQ.count();
  const policyCount = await prisma.policy.count();
  const leadCount = await prisma.lead.count();

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px' }}>Dashboard Overview</h1>
      <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>Welcome to the QuickStudy Admin Panel.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
        <DashboardCard title="Notes" count={noteCount} link="/admin/notes" />
        <DashboardCard title="Blogs" count={blogCount} link="/admin/blogs" />
        <DashboardCard title="FAQs" count={faqCount} link="/admin/faqs" />
        <DashboardCard title="Policies" count={policyCount} link="/admin/policies" />
        <DashboardCard title="Leads" count={leadCount} link="/admin/leads" />
      </div>
    </div>
  );
}

function DashboardCard({ title, count, link }: { title: string, count: number, link: string }) {
  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <div style={{ 
        background: 'rgba(255,255,255,0.03)', 
        border: '1px solid rgba(255,255,255,0.1)', 
        borderRadius: '16px', 
        padding: '24px',
        transition: 'all 0.2s',
        cursor: 'pointer'
      }}>
        <h3 style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>{title}</h3>
        <p style={{ fontSize: '3rem', fontWeight: 'bold', color: '#38bdf8', margin: 0 }}>{count}</p>
      </div>
    </Link>
  );
}
