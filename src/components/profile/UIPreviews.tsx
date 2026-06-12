import React from 'react';
import styles from './UIPreviews.module.css';
import { LessonCard, QuizCard, ChatMessage, AnalyticsMetric } from '@/components/dashboard';
import { DashboardCard } from '@/components/ui/cards';

export default function UIPreviews() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>QuickStudy Learning Environment</h3>
        <p className={styles.subtitle}>Your child will get immediate access to our premium educational platform.</p>
      </div>
      
      <div className={styles.previewGrid}>
        {/* Sample Progress Dashboard */}
        <div className={styles.previewSection}>
          <h4 className={styles.sectionTitle}>Progress Tracking</h4>
          <div className={styles.dashboardGrid}>
            <DashboardCard title="Attendance" value="100%" />
            <DashboardCard title="Confidence Score" value="78%" />
            <DashboardCard title="Topic Mastery" value="Algebra 85%" />
            <DashboardCard title="Target Grade" value="5 → 7" />
          </div>
        </div>

        {/* Sample AI Lesson Summary */}
        <div className={styles.previewSection}>
          <h4 className={styles.sectionTitle}>AI Lesson Summary</h4>
          <div className={styles.cardBox}>
            <div className={styles.lessonSummaryHeader}>
              <span className={styles.topicBadge}>Algebraic Expressions</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.successText}>Strengths:</span>
              <span>Excellent understanding of substitution.</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.warningText}>Needs Attention:</span>
              <span>Expanding brackets.</span>
            </div>
            <div className={styles.summaryItem} style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid var(--card-border)' }}>
              <span className={styles.primaryText}>Next Lesson:</span>
              <span>Quadratic foundations.</span>
            </div>
          </div>
        </div>

        {/* Sample Tutor Chat */}
        <div className={styles.previewSection}>
          <h4 className={styles.sectionTitle}>Direct Tutor Support</h4>
          <div className={styles.chatBox}>
            <ChatMessage 
              message="Great progress today. Please complete Questions 1–10 before next week." 
              isSent={false} 
              time="Tutor Sarah • 4:30 PM" 
            />
            <ChatMessage 
              message="Thank you. I'll complete them tonight." 
              isSent={true} 
              time="Student • 5:15 PM" 
            />
            <ChatMessage 
              message="Excellent. Let me know if you get stuck." 
              isSent={false} 
              time="Tutor Sarah • 5:20 PM" 
            />
          </div>
        </div>

        {/* Sample Lesson Recording */}
        <div className={styles.previewSection}>
          <h4 className={styles.sectionTitle}>Lesson Replays</h4>
          <LessonCard 
            title="Mathematics: Lesson Recording" 
            duration="Duration: 56 minutes • Available for replay anytime." 
          />
        </div>
      </div>
    </div>
  );
}
