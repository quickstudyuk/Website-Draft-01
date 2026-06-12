'use client';

import React, { useState } from 'react';

// ─── Question Definitions ──────────────────────────────────────────────────────
const questions = [
  {
    id: 'yearGroup',
    question: "What year group is your child currently in?",
    subtext: "This helps us map to the correct curriculum and exam board expectations.",
    options: [
      { label: "Year 7 – 8 (Key Stage 3, Early Secondary)", value: "ks3-early" },
      { label: "Year 9 (Key Stage 3, Transition Year)", value: "ks3-late" },
      { label: "Year 10 – 11 (GCSE, Key Stage 4)", value: "gcse" },
      { label: "Year 12 – 13 (A-Level, Key Stage 5)", value: "alevel" },
    ]
  },
  {
    id: 'subject',
    question: "Which subject needs the most attention right now?",
    subtext: "Choose the subject that causes the most frustration or concern at home.",
    options: [
      { label: "Mathematics", value: "maths" },
      { label: "English Language & Literature", value: "english" },
      { label: "Sciences (Biology, Chemistry, Physics)", value: "science" },
      { label: "Multiple Subjects", value: "multiple" },
    ]
  },
  {
    id: 'confidence',
    question: "How would you describe your child's confidence in school right now?",
    subtext: "Be honest — this shapes how urgently we recommend action.",
    options: [
      { label: "Very Low — avoids questions, fears getting things wrong", value: "very-low" },
      { label: "Below Average — struggles but participates occasionally", value: "below-avg" },
      { label: "Average — keeps up but lacks deeper understanding", value: "average" },
      { label: "Above Average — confident but wants to reach higher grades", value: "above-avg" },
    ]
  },
  {
    id: 'challenge',
    question: "What is the biggest challenge your child currently faces?",
    subtext: "Select the one that resonates most deeply.",
    options: [
      { label: "Falling behind in class — missed foundational concepts", value: "behind" },
      { label: "Exam anxiety — freezes or underperforms under pressure", value: "anxiety" },
      { label: "Poor retention — understands in lessons, forgets quickly", value: "retention" },
      { label: "Lack of motivation or interest in learning", value: "motivation" },
      { label: "Disorganised study habits — no system or routine", value: "habits" },
    ]
  },
  {
    id: 'lastGrade',
    question: "What was your child's most recent grade or predicted grade?",
    subtext: "This gives us a baseline to measure improvement potential.",
    options: [
      { label: "Grade 1–3 / D–G (Needs significant support)", value: "low" },
      { label: "Grade 4–5 / C (Pass level — room for improvement)", value: "mid" },
      { label: "Grade 6–7 / B (Good — aiming for excellence)", value: "high" },
      { label: "Grade 8–9 / A-A* (High achiever — fine-tuning)", value: "top" },
      { label: "Not sure / No recent assessment", value: "unknown" },
    ]
  },
  {
    id: 'currentSupport',
    question: "What support does your child currently receive outside school?",
    subtext: "Helps us understand gaps in their current support structure.",
    options: [
      { label: "None — relying entirely on school", value: "none" },
      { label: "Online resources only (YouTube, revision sites)", value: "online" },
      { label: "Occasional help from family members", value: "family" },
      { label: "Another tutoring service", value: "other-tutor" },
    ]
  },
  {
    id: 'studyHabits',
    question: "How does your child typically approach studying at home?",
    subtext: "Study habits are one of the strongest predictors of long-term success.",
    options: [
      { label: "Rarely studies unless exam is imminent", value: "reactive" },
      { label: "Studies somewhat regularly but without a clear plan", value: "unstructured" },
      { label: "Has a routine but struggles to stay focused", value: "distracted" },
      { label: "Consistent and disciplined — already self-motivated", value: "disciplined" },
    ]
  },
  {
    id: 'email',
    question: "Where should we send your child's Learning Profile?",
    subtext: "We'll email a detailed, personalised diagnostic report. Your data is safe with us.",
    options: []
  }
];

// ─── Analysis Engine ─────────────────────────────────────────────────────────
interface Answers {
  yearGroup?: string;
  subject?: string;
  confidence?: string;
  challenge?: string;
  lastGrade?: string;
  currentSupport?: string;
  studyHabits?: string;
}

interface DiagnosticResult {
  urgencyLevel: 'High' | 'Moderate' | 'Monitored';
  urgencyColor: string;
  urgencyBg: string;
  riskScore: number;          // 0–100 (current academic risk)
  confidenceGap: number;      // 0–100 (how far confidence is from potential)
  improvementPotential: number; // 0–100 (optimistic projection)
  sessionsPerWeek: number;
  sessionDuration: string;
  timeframe: string;
  keyFindings: string[];
  recommendation: string;
  gradeTarget: string;
}

function analyseAnswers(answers: Answers): DiagnosticResult {
  let riskScore = 30;
  let confidenceGap = 40;
  let improvementPotential = 80;

  // ── Year Group adjustments ────────────────────────────────────
  if (answers.yearGroup === 'gcse') { riskScore += 15; improvementPotential += 5; }
  else if (answers.yearGroup === 'alevel') { riskScore += 10; confidenceGap += 5; }
  else if (answers.yearGroup === 'ks3-early') { riskScore -= 5; improvementPotential += 8; }

  // ── Subject adjustments ───────────────────────────────────────
  if (answers.subject === 'multiple') { riskScore += 20; confidenceGap += 10; }
  else if (answers.subject === 'maths') { riskScore += 8; }
  else if (answers.subject === 'science') { riskScore += 5; }

  // ── Confidence adjustments ────────────────────────────────────
  if (answers.confidence === 'very-low') { confidenceGap = Math.min(95, confidenceGap + 40); riskScore += 18; improvementPotential += 12; }
  else if (answers.confidence === 'below-avg') { confidenceGap = Math.min(85, confidenceGap + 20); riskScore += 10; improvementPotential += 8; }
  else if (answers.confidence === 'average') { confidenceGap = Math.min(65, confidenceGap + 5); riskScore += 3; improvementPotential += 5; }
  else if (answers.confidence === 'above-avg') { confidenceGap = Math.max(15, confidenceGap - 15); riskScore -= 5; }

  // ── Challenge adjustments ─────────────────────────────────────
  if (answers.challenge === 'behind') { riskScore += 20; improvementPotential += 10; }
  else if (answers.challenge === 'anxiety') { riskScore += 12; confidenceGap += 15; improvementPotential += 15; }
  else if (answers.challenge === 'retention') { riskScore += 8; improvementPotential += 8; }
  else if (answers.challenge === 'motivation') { riskScore += 15; }
  else if (answers.challenge === 'habits') { riskScore += 10; improvementPotential += 5; }

  // ── Last grade adjustments ────────────────────────────────────
  if (answers.lastGrade === 'low') { riskScore += 22; improvementPotential += 15; confidenceGap += 12; }
  else if (answers.lastGrade === 'mid') { riskScore += 8; improvementPotential += 8; }
  else if (answers.lastGrade === 'high') { riskScore -= 5; improvementPotential += 3; }
  else if (answers.lastGrade === 'top') { riskScore -= 12; improvementPotential -= 5; }
  else if (answers.lastGrade === 'unknown') { riskScore += 5; }

  // ── Current support adjustments ───────────────────────────────
  if (answers.currentSupport === 'none') { riskScore += 12; improvementPotential += 12; }
  else if (answers.currentSupport === 'online') { riskScore += 5; improvementPotential += 8; }
  else if (answers.currentSupport === 'other-tutor') { riskScore += 2; }

  // ── Study habits adjustments ──────────────────────────────────
  if (answers.studyHabits === 'reactive') { riskScore += 15; }
  else if (answers.studyHabits === 'unstructured') { riskScore += 8; improvementPotential += 6; }
  else if (answers.studyHabits === 'distracted') { riskScore += 5; improvementPotential += 4; }
  else if (answers.studyHabits === 'disciplined') { riskScore -= 8; improvementPotential -= 5; confidenceGap = Math.max(10, confidenceGap - 10); }

  // ── Clamp all values ──────────────────────────────────────────
  riskScore = Math.min(92, Math.max(18, riskScore));
  confidenceGap = Math.min(94, Math.max(10, confidenceGap));
  improvementPotential = Math.min(97, Math.max(55, improvementPotential));

  // ── Sessions per week calculation ─────────────────────────────
  let sessionsPerWeek = 1;
  let sessionDuration = '60 mins';
  let timeframe = '3 months';

  if (riskScore >= 70) { sessionsPerWeek = 3; sessionDuration = '60–90 mins'; timeframe = '2–3 months'; }
  else if (riskScore >= 50) { sessionsPerWeek = 2; sessionDuration = '60 mins'; timeframe = '3–4 months'; }
  else { sessionsPerWeek = 1; sessionDuration = '60 mins'; timeframe = '4–6 months'; }

  // ── Multiple subjects override ─────────────────────────────────
  if (answers.subject === 'multiple') sessionsPerWeek = Math.min(4, sessionsPerWeek + 1);

  // ── Urgency classification ────────────────────────────────────
  let urgencyLevel: 'High' | 'Moderate' | 'Monitored' = 'Moderate';
  let urgencyColor = '#f59e0b';
  let urgencyBg = 'rgba(245, 158, 11, 0.12)';
  if (riskScore >= 65) { urgencyLevel = 'High'; urgencyColor = '#ef4444'; urgencyBg = 'rgba(239, 68, 68, 0.12)'; }
  else if (riskScore < 38) { urgencyLevel = 'Monitored'; urgencyColor = '#10b981'; urgencyBg = 'rgba(16, 185, 129, 0.12)'; }

  // ── Key findings ──────────────────────────────────────────────
  const findings: string[] = [];
  if (answers.challenge === 'behind') findings.push("Gaps in foundational knowledge identified — catch-up tuition recommended.");
  if (answers.challenge === 'anxiety') findings.push("Exam anxiety detected — structured practice tests and confidence-building needed.");
  if (answers.confidence === 'very-low' || answers.confidence === 'below-avg') findings.push("Confidence is significantly below potential — requires early intervention.");
  if (answers.studyHabits === 'reactive' || answers.studyHabits === 'unstructured') findings.push("Study habits are inconsistent — structured routines will unlock major gains.");
  if (answers.currentSupport === 'none') findings.push("No current external support — early action will prevent further gaps.");
  if (answers.subject === 'multiple') findings.push("Multiple subjects flagged — a combined subject plan is strongly advised.");
  if (answers.lastGrade === 'low') findings.push("Below-pass grade baseline — significant improvement possible with the right support.");
  if (answers.yearGroup === 'gcse' || answers.yearGroup === 'alevel') findings.push("Exam-critical year — structured revision plans are time-sensitive.");
  if (findings.length === 0) findings.push("Good foundation identified — targeted support will accelerate progress meaningfully.");

  // ── Recommendation text ───────────────────────────────────────
  const recommendation = urgencyLevel === 'High'
    ? "We recommend starting structured tutoring as soon as possible. The combination of factors identified suggests your child is at risk of falling significantly further behind without targeted support."
    : urgencyLevel === 'Moderate'
    ? "Your child has a solid foundation but would benefit greatly from structured, consistent support. A personalised plan now will prevent this from becoming a more urgent concern."
    : "Your child is performing well. Targeted enhancement sessions will help them reach their ceiling and stay ahead of their peers.";

  // ── Grade target ──────────────────────────────────────────────
  const gradeTargetMap: Record<string, string> = {
    low: 'Grade 6–7 (achievable within 3–6 months)',
    mid: 'Grade 7–8 (a realistic and meaningful jump)',
    high: 'Grade 9 / A* (excellence is within reach)',
    top: 'Consistent Grade 9 / A* (peak performance)',
    unknown: 'Grade 6+ (establishing a strong baseline first)',
  };
  const gradeTarget = gradeTargetMap[answers.lastGrade || 'unknown'] || 'Grade 6+';

  return {
    urgencyLevel,
    urgencyColor,
    urgencyBg,
    riskScore,
    confidenceGap,
    improvementPotential,
    sessionsPerWeek,
    sessionDuration,
    timeframe,
    keyFindings: findings.slice(0, 3),
    recommendation,
    gradeTarget
  };
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroDiagnosticTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const questionKeys = ['yearGroup', 'subject', 'confidence', 'challenge', 'lastGrade', 'currentSupport', 'studyHabits'] as const;
  const totalSteps = questions.length; // 8 (7 Q + email)

  const handleOptionClick = (value: string) => {
    const key = questionKeys[step];
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);
    if (step < totalSteps - 1) setStep(step + 1);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsGenerating(true);
    // Simulate analysis + email send (2.5s)
    setTimeout(() => {
      const computed = analyseAnswers(answers);
      setResult(computed);
      setEmailSent(true);
      setIsGenerating(false);
      setIsDone(true);
    }, 2500);
  };

  const resetTest = () => {
    setStep(0);
    setAnswers({});
    setEmail('');
    setEmailSent(false);
    setIsDone(false);
    setResult(null);
    setIsGenerating(false);
  };

  const scrollToGetStarted = () => {
    const el = document.getElementById('get-started');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const currentQuestion = questions[step];
  const isEmailStep = step === totalSteps - 1;
  const progress = Math.round((step / totalSteps) * 100);

  // ── Shared container style ────────────────────────────────────
  const containerStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05)',
    borderRadius: '32px',
    padding: 'var(--spacing-6)',
    width: '100%',
    maxWidth: '550px',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box'
  };

  // ── Generating screen ─────────────────────────────────────────
  if (isGenerating) {
    return (
      <div style={containerStyle}>
        <div style={{ textAlign: 'center', padding: '40px 0', color: 'white' }}>
          <div style={{
            width: '56px', height: '56px',
            border: '4px solid rgba(255,255,255,0.1)',
            borderTopColor: '#38bdf8',
            borderRadius: '50%',
            margin: '0 auto 24px',
            animation: 'diag-spin 1s linear infinite'
          }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>
            Analysing {questionKeys.length} Responses...
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
            Building your child's personalised learning profile.<br />
            This takes just a moment.
          </p>
        </div>
        <style>{`@keyframes diag-spin { 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // ── Result screen ─────────────────────────────────────────────
  if (isDone && result) {
    return (
      <div style={{ ...containerStyle, maxWidth: '560px' }}>
        <div style={{ position: 'relative', zIndex: 1, color: 'white' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{
              display: 'inline-block',
              padding: '4px 16px',
              backgroundColor: result.urgencyBg,
              border: `1px solid ${result.urgencyColor}40`,
              borderRadius: '9999px',
              marginBottom: '10px'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: result.urgencyColor, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {result.urgencyLevel === 'High' ? '⚠ Action Recommended' : result.urgencyLevel === 'Moderate' ? '● Moderate Priority' : '✓ Good Standing'}
              </span>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white', marginBottom: '4px' }}>
              Diagnostic Report
            </h3>
            {emailSent && (
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                Full report sent to <strong style={{ color: '#38bdf8' }}>{email}</strong>
              </p>
            )}
          </div>

          {/* Metric Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>

            {/* Academic Risk */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                <span>Academic Risk Level</span>
                <span style={{ color: result.riskScore >= 65 ? '#ef4444' : result.riskScore >= 40 ? '#f59e0b' : '#10b981' }}>
                  {result.riskScore >= 65 ? 'High' : result.riskScore >= 40 ? 'Moderate' : 'Low'} ({result.riskScore}%)
                </span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                  width: `${result.riskScore}%`, height: '100%', borderRadius: '4px',
                  background: result.riskScore >= 65 ? 'linear-gradient(90deg, #f59e0b, #ef4444)' : result.riskScore >= 40 ? '#f59e0b' : '#10b981',
                  transition: 'width 1s ease'
                }} />
              </div>
            </div>

            {/* Confidence Gap */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                <span>Confidence vs Potential Gap</span>
                <span style={{ color: result.confidenceGap >= 60 ? '#ef4444' : result.confidenceGap >= 35 ? '#f59e0b' : '#10b981' }}>
                  {result.confidenceGap >= 60 ? 'Critical' : result.confidenceGap >= 35 ? 'Noticeable' : 'Manageable'} ({result.confidenceGap}%)
                </span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                  width: `${result.confidenceGap}%`, height: '100%', borderRadius: '4px',
                  backgroundColor: result.confidenceGap >= 60 ? '#ef4444' : result.confidenceGap >= 35 ? '#f59e0b' : '#10b981',
                }} />
              </div>
            </div>

            {/* Improvement Potential */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                <span>Improvement Potential ({result.timeframe})</span>
                <span style={{ color: '#10b981' }}>+{result.improvementPotential}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${result.improvementPotential}%`, height: '100%', borderRadius: '4px', background: 'linear-gradient(90deg, #38bdf8, #10b981)' }} />
              </div>
            </div>
          </div>

          {/* Sessions Recommendation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '14px 18px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '16px',
            marginBottom: '16px'
          }}>
            <div style={{ fontSize: '2rem', lineHeight: 1 }}>📅</div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                Recommended Schedule
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'white' }}>
                {result.sessionsPerWeek}× per week · {result.sessionDuration} each
              </div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
                Target: {result.gradeTarget}
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              Key Findings
            </div>
            {result.keyFindings.map((finding, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                <span style={{ color: '#facc15', fontSize: '0.8rem', marginTop: '2px', flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>{finding}</span>
              </div>
            ))}
          </div>

          {/* Recommendation blurb */}
          <div style={{
            padding: '12px 16px',
            backgroundColor: 'rgba(255,255,255,0.04)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '20px'
          }}>
            <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, margin: 0 }}>
              {result.recommendation}
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToGetStarted}
            style={{
              width: '100%',
              padding: '16px',
              background: 'linear-gradient(135deg, #facc15 0%, #f59e0b 100%)',
              color: '#0f172a',
              fontWeight: 800,
              fontSize: '1.05rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(250, 204, 21, 0.35)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              marginBottom: '12px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(250, 204, 21, 0.45)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(250, 204, 21, 0.35)';
            }}
          >
            Unlock Full Learning Profile →
          </button>

          <button
            onClick={resetTest}
            style={{ display: 'block', width: '100%', fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'center' }}
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  // ── Question screens ──────────────────────────────────────────
  return (
    <div style={containerStyle}>
      <div style={{ position: 'relative', zIndex: 1, color: 'white' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Learning Profile
          </span>
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>
            {step + 1} / {totalSteps}
          </span>
        </div>

        {/* Progress Bar */}
        <div style={{ width: '100%', height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginBottom: '20px' }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #38bdf8, #8b5cf6)',
            borderRadius: '2px',
            transition: 'width 0.35s ease'
          }} />
        </div>

        {/* Question */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white', marginBottom: '6px', lineHeight: 1.4 }}>
          {currentQuestion.question}
        </h3>
        <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', marginBottom: '18px', lineHeight: 1.4 }}>
          {currentQuestion.subtext}
        </p>

        {/* Email Step */}
        {isEmailStep ? (
          <form onSubmit={handleFinalSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '9999px',
                fontSize: '1rem',
                color: 'white',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '15px',
                background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
                color: 'white',
                fontWeight: 800,
                fontSize: '1rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(56, 189, 248, 0.35)'
              }}
            >
              Generate My Free Report ✦
            </button>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', textAlign: 'center', margin: 0 }}>
              No spam. Your data is private and secure.
            </p>
          </form>
        ) : (
          // Multiple Choice Options
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option.value)}
                style={{
                  width: '100%',
                  padding: '13px 18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '14px',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.9)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  lineHeight: 1.4
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.5)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {/* Back Button */}
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            style={{ marginTop: '14px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}
