'use client';

import { useActionState } from 'react';
import { login, forgotPassword } from '@/app/actions/auth';

export default function LoginPage() {
  const [loginState, loginAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      return await login(formData);
    },
    null
  );

  const [forgotState, forgotAction, isForgotPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      return await forgotPassword();
    },
    null
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020617', padding: '20px' }}>
      <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', width: '100%', maxWidth: '400px', backdropFilter: 'blur(10px)' }}>
        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '8px', fontSize: '2rem' }}>Admin Login</h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '32px' }}>Access the QuickStudy dashboard.</p>
        
        <form action={loginAction} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '8px', fontSize: '0.9rem' }}>Username</label>
            <input 
              name="username" 
              type="text" 
              required 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.5)', color: 'white' }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '8px', fontSize: '0.9rem' }}>Password</label>
            <input 
              name="password" 
              type="password" 
              required 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.5)', color: 'white' }} 
            />
          </div>

          {loginState?.error && (
            <div style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center' }}>
              {loginState.error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={isPending}
            style={{ 
              marginTop: '16px', padding: '12px', borderRadius: '8px', 
              background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)', 
              color: 'white', fontWeight: 'bold', border: 'none', cursor: isPending ? 'not-allowed' : 'pointer',
              opacity: isPending ? 0.7 : 1
            }}
          >
            {isPending ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <form action={forgotAction}>
            <button 
              type="submit" 
              disabled={isForgotPending}
              style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              {isForgotPending ? 'Sending...' : 'Forgot Password?'}
            </button>
          </form>
          {forgotState?.success && <p style={{ color: '#10b981', fontSize: '0.85rem', marginTop: '8px' }}>{forgotState.success}</p>}
          {forgotState?.error && <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '8px' }}>{forgotState.error}</p>}
        </div>
      </div>
    </div>
  );
}
