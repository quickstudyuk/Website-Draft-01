import { prisma } from "@/lib/db";
import { deleteLead } from "@/app/actions/lead";

export default async function ManageLeads() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px' }}>Manage Leads</h1>
      <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
        View and follow up with parents who requested a free consultation via the QS Chatbot.
      </p>

      <div style={{ 
        background: 'rgba(255,255,255,0.03)', 
        border: '1px solid rgba(255,255,255,0.1)', 
        borderRadius: '16px', 
        padding: '24px',
        overflowX: 'auto'
      }}>
        {leads.length === 0 ? (
          <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '40px 0' }}>
            No leads captured yet. The chatbot will capture leads when users fill out the consultation form!
          </p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                <th style={{ padding: '12px 16px', fontWeight: 'normal' }}>Name</th>
                <th style={{ padding: '12px 16px', fontWeight: 'normal' }}>Contact Number</th>
                <th style={{ padding: '12px 16px', fontWeight: 'normal' }}>Captured Date</th>
                <th style={{ padding: '12px 16px', fontWeight: 'normal', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr 
                  key={lead.id} 
                  style={{ 
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    fontSize: '0.95rem',
                    transition: 'background 0.2s',
                  }}
                  className="lead-row"
                >
                  <td style={{ padding: '16px', fontWeight: 'bold', color: 'white' }}>{lead.name}</td>
                  <td style={{ padding: '16px' }}>
                    <a 
                      href={`tel:${lead.phone}`} 
                      style={{ color: '#38bdf8', textDecoration: 'none' }}
                      onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                      onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                      {lead.phone}
                    </a>
                  </td>
                  <td style={{ padding: '16px', color: 'rgba(255,255,255,0.6)' }}>
                    {new Date(lead.createdAt).toLocaleString()}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <form action={async () => {
                      'use server';
                      await deleteLead(lead.id);
                    }}>
                      <button 
                        type="submit" 
                        style={{ 
                          padding: '6px 12px', 
                          background: 'transparent', 
                          border: '1px solid #ef4444', 
                          color: '#ef4444', 
                          borderRadius: '6px', 
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                          fontWeight: 'bold',
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = '#ef4444';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#ef4444';
                        }}
                      >
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <style>{`
        .lead-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }
      `}</style>
    </div>
  );
}
