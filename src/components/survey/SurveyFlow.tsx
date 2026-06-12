'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/components/ui/ProgressBar';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/FormElements';
import { Slider } from '@/components/ui/Slider';
import { QuestionLayout } from './QuestionLayout';
import { SelectionCard } from './SelectionCard';
import { SurveyResponses } from '@/lib/types';
import styles from './SurveyFlow.module.css';

const TOTAL_STEPS = 7;

export default function SurveyFlow() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [responses, setResponses] = useState<Partial<SurveyResponses>>({
    confidenceLevel: 5 // Default value for slider
  });
  const [timeRemaining, setTimeRemaining] = useState(60);

  // Fake estimated time reduction
  useEffect(() => {
    const remaining = Math.max(15, 60 - ((step - 1) * 8));
    setTimeRemaining(remaining);
  }, [step]);

  const updateResponse = (key: keyof SurveyResponses, value: any) => {
    setResponses(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS) {
      setStep(s => s + 1);
      window.scrollTo(0, 0);
    } else {
      const encodedData = encodeURIComponent(JSON.stringify(responses));
      router.push(`/learning-profile?data=${encodedData}`);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(s => s - 1);
  };

  const progress = (step / TOTAL_STEPS) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <button onClick={handleBack} className={styles.backButton} disabled={step === 1}>
            ← Back
          </button>
          <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>Est. ~{timeRemaining}s</span>
        </div>
        <ProgressBar progress={progress} />
        <span className={styles.stepIndicator}>Step {step} of {TOTAL_STEPS}</span>
      </div>

      <div className={styles.content}>
        {step === 1 && (
          <QuestionLayout title="What year group is your child currently in?">
            <div className={styles.optionsList}>
              {['Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'].map(y => (
                <SelectionCard 
                  key={y} 
                  label={y} 
                  name="yearGroup"
                  checked={responses.yearGroup === y}
                  onChange={() => updateResponse('yearGroup', y)}
                />
              ))}
            </div>
          </QuestionLayout>
        )}

        {step === 2 && (
          <QuestionLayout title="Which subject does your child need the most support with?">
            <div className={styles.optionsList}>
              {['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'Combined Science', 'Multiple Subjects'].map(s => (
                <SelectionCard 
                  key={s} 
                  label={s} 
                  name="subject"
                  checked={responses.subject === s}
                  onChange={() => updateResponse('subject', s)}
                />
              ))}
            </div>
          </QuestionLayout>
        )}

        {step === 3 && (
          <QuestionLayout 
            title="How confident is your child academically?"
            subtitle="1 = Very Low Confidence, 10 = Very High Confidence"
          >
            <div style={{ padding: '2rem 1rem' }}>
              <Slider 
                min={1} 
                max={10} 
                value={responses.confidenceLevel || 5}
                onChange={e => updateResponse('confidenceLevel', Number(e.target.value))}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--gray-500)', fontSize: '0.875rem' }}>
                <span>Very Low</span>
                <span style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '1.25rem' }}>{responses.confidenceLevel || 5}</span>
                <span>Very High</span>
              </div>
            </div>
          </QuestionLayout>
        )}

        {step === 4 && (
          <QuestionLayout title="What is the biggest challenge your child currently faces?">
            <div className={styles.optionsList}>
              {['Low Grades', 'Lack of Confidence', 'Exam Anxiety', 'Poor Study Habits', 'Lack of Motivation', 'Falling Behind in School', 'Difficulty Understanding Concepts'].map(s => (
                <SelectionCard 
                  key={s} 
                  label={s} 
                  name="biggestChallenge"
                  checked={responses.biggestChallenge === s}
                  onChange={() => updateResponse('biggestChallenge', s)}
                />
              ))}
            </div>
          </QuestionLayout>
        )}

        {step === 5 && (
          <QuestionLayout title="What is your primary goal?">
            <div className={styles.optionsList}>
              {['Improve Grades', 'Prepare for GCSEs', 'Prepare for A Levels', 'Catch Up with School', 'Build Confidence', 'Get Ahead Academically'].map(g => (
                <SelectionCard 
                  key={g} 
                  label={g} 
                  name="primaryGoal"
                  checked={responses.primaryGoal === g}
                  onChange={() => updateResponse('primaryGoal', g)}
                />
              ))}
            </div>
          </QuestionLayout>
        )}

        {step === 6 && (
          <QuestionLayout title="How much support do you believe your child currently needs?">
            <div className={styles.optionsList}>
              {['Occasional Support', 'Weekly Support', 'Intensive Exam Preparation', 'Not Sure'].map(a => (
                <SelectionCard 
                  key={a} 
                  label={a} 
                  name="supportNeeded"
                  checked={responses.supportNeeded === a}
                  onChange={() => updateResponse('supportNeeded', a)}
                />
              ))}
            </div>
          </QuestionLayout>
        )}

        {step === 7 && (
          <QuestionLayout 
            title="Where should we send your child's Learning Profile?"
            subtitle="We'll generate your personalized academic diagnosis immediately."
          >
            <div className={styles.formGroup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Input 
                label="Parent Name" 
                placeholder="Jane Doe" 
                value={responses.contactName || ''}
                onChange={e => updateResponse('contactName', e.target.value)}
              />
              <Input 
                label="Email Address" 
                type="email" 
                placeholder="jane@example.com" 
                value={responses.contactEmail || ''}
                onChange={e => updateResponse('contactEmail', e.target.value)}
              />
              <Input 
                label="Phone Number (optional)" 
                type="tel" 
                placeholder="07700 900000" 
                value={responses.contactPhone || ''}
                onChange={e => updateResponse('contactPhone', e.target.value)}
              />
            </div>
          </QuestionLayout>
        )}
      </div>

      <div className={styles.footer}>
        <Button onClick={handleNext} fullWidth size="lg">
          {step === TOTAL_STEPS ? 'Generate Learning Profile' : 'Continue'}
        </Button>
        <button onClick={() => router.push('/')} className={styles.skipButton}>
          Skip survey & go to homepage
        </button>
      </div>
    </div>
  );
}
