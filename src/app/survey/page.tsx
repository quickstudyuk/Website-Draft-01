import SurveyFlow from '@/components/survey/SurveyFlow';

export default function SurveyPage() {
  return (
    <main style={{ padding: '2rem 1rem', display: 'flex', justifyContent: 'center', minHeight: 'calc(100vh - 80px)' }}>
      <SurveyFlow />
    </main>
  );
}
