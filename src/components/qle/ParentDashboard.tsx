import React from 'react';
import styles from './ParentDashboard.module.css';
import { AnalyticsMetric } from '@/components/dashboard';
import { DashboardCard } from '@/components/ui/cards';

export default function ParentDashboard() {
  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className={styles.headline} style={{ color: 'white' }}>Everything In One Place</h2>
        
        <div className={styles.dashboardMockup}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarLogo}>QLE Parent</div>
            <nav className={styles.sidebarNav}>
              <span className={styles.navItemActive}>Overview</span>
              <span className={styles.navItem}>Upcoming Lessons</span>
              <span className={styles.navItem}>Summaries</span>
              <span className={styles.navItem}>Tutor Feedback</span>
              <span className={styles.navItem}>Goals</span>
              <span className={styles.navItem}>Resources</span>
            </nav>
          </div>
          
          <div className={styles.mainContent}>
            <div className={styles.topBar}>
              <h3 style={{ margin: 0 }}>Welcome back, Sarah</h3>
              <div className={styles.profileIcon}>S</div>
            </div>
            
            <div className={styles.grid}>
              <DashboardCard title="Attendance" value="100%" icon="📅" style={{ background: 'rgba(9, 17, 36, 0.45)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}>
                <AnalyticsMetric value="Perfect" label="This term" trend="up" />
              </DashboardCard>
              
              <DashboardCard title="Confidence Score" value="78%" icon="🌟" style={{ background: 'rgba(9, 17, 36, 0.45)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}>
                <AnalyticsMetric value="+12%" label="Since last month" trend="up" />
              </DashboardCard>
              
              <DashboardCard title="Mathematics Mastery" value="84%" icon="📐" style={{ background: 'rgba(9, 17, 36, 0.45)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}>
                <AnalyticsMetric value="On Track" label="Curriculum" trend="up" />
              </DashboardCard>
              
              <DashboardCard title="Target Grade" value="5 → 7" icon="🎯" style={{ background: 'rgba(9, 17, 36, 0.45)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}>
                <AnalyticsMetric value="Projected" label="End of Year" trend="up" />
              </DashboardCard>
            </div>
            
            <div className={styles.recentActivity}>
              <h4 className={styles.sectionTitle} style={{ color: 'white' }}>Recent Activity</h4>
              <div className={styles.activityItem} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span className={styles.activityIcon}>📝</span>
                <div className={styles.activityText} style={{ color: 'rgba(255,255,255,0.75)' }}>
                  <strong style={{ color: 'white' }}>Mathematics Lesson Summary</strong> available for review.
                </div>
                <span className={styles.activityTime}>2h ago</span>
              </div>
              <div className={styles.activityItem} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span className={styles.activityIcon}>💬</span>
                <div className={styles.activityText} style={{ color: 'rgba(255,255,255,0.75)' }}>
                  <strong style={{ color: 'white' }}>New message</strong> from Tutor David.
                </div>
                <span className={styles.activityTime}>1d ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
