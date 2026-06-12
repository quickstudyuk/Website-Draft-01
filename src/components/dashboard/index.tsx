import React, { ReactNode } from 'react';
import { BaseCard, InteractiveCard } from '@/components/ui/cards';
import styles from './DashboardUI.module.css';

interface AnalyticsMetricProps {
  value: string;
  label: string;
  trend?: 'up' | 'down';
  valueStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export function AnalyticsMetric({ 
  value, 
  label, 
  trend, 
  valueStyle, 
  labelStyle, 
  containerStyle 
}: AnalyticsMetricProps) {
  return (
    <div className={styles.metricContainer} style={containerStyle}>
      <div className={styles.metricValue} style={valueStyle}>{value}</div>
      <div className={styles.metricLabel} style={labelStyle}>
        {label}
        {trend === 'up' && <span style={{ color: '#4ade80', marginLeft: '4px' }}>↑</span>}
        {trend === 'down' && <span style={{ color: 'var(--danger)', marginLeft: '4px' }}>↓</span>}
      </div>
    </div>
  );
}

interface LessonCardProps {
  title: string;
  duration: string;
  thumbnailUrl?: string;
}

export function LessonCard({ title, duration, thumbnailUrl }: LessonCardProps) {
  return (
    <InteractiveCard className={styles.lessonCard}>
      <div 
        className={styles.lessonThumbnail} 
        style={thumbnailUrl ? { backgroundImage: `url(${thumbnailUrl})`, backgroundSize: 'cover' } : undefined}
      >
        <div className={styles.lessonPlayBtn}>▶</div>
      </div>
      <div className={styles.lessonMeta}>
        <span className={styles.lessonTitle}>{title}</span>
        <span className={styles.lessonDesc}>{duration}</span>
      </div>
    </InteractiveCard>
  );
}

interface QuizCardProps {
  title: string;
  questionCount: number;
  topic: string;
}

export function QuizCard({ title, questionCount, topic }: QuizCardProps) {
  return (
    <InteractiveCard className={styles.quizCard}>
      <div className={styles.quizHeader}>
        <span className={styles.quizBadge}>{topic}</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>{questionCount} Qs</span>
      </div>
      <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--foreground)' }}>{title}</h4>
    </InteractiveCard>
  );
}

interface ChatMessageProps {
  message: string;
  isSent: boolean;
  time?: string;
}

export function ChatMessage({ message, isSent, time }: ChatMessageProps) {
  return (
    <div className={styles.chatContainer}>
      <div className={`${styles.chatMessage} ${isSent ? styles.chatSent : styles.chatReceived}`}>
        {message}
        {time && <div className={styles.chatMeta}>{time}</div>}
      </div>
    </div>
  );
}
