import { SurveyResponses, LearningProfileData } from './types';

export function generateLearningProfile(responses: Partial<SurveyResponses>): LearningProfileData {
  const confidence = responses.confidenceLevel || 5;
  const challenge = responses.biggestChallenge || '';
  const goal = responses.primaryGoal || '';
  const support = responses.supportNeeded || '';
  const subject = responses.subject || 'Multiple Subjects';

  // 1. Calculate Risk Level
  let riskLevel: LearningProfileData['riskLevel'] = 'Moderate Risk';
  
  if (confidence <= 4 || challenge === 'Falling Behind in School' || challenge === 'Low Grades') {
    riskLevel = 'High Risk';
  } else if (confidence >= 8 && (goal === 'Get Ahead Academically' || goal === 'Build Confidence')) {
    riskLevel = 'Low Risk';
  }

  // 2. Determine Timeline
  let timeline = {
    visible: '4-8 weeks',
    strong: '2-4 months',
    longTerm: '6-12 months'
  };

  if (riskLevel === 'High Risk') {
    timeline.visible = '6-10 weeks';
    timeline.strong = '3-6 months';
  } else if (riskLevel === 'Low Risk') {
    timeline.visible = '2-4 weeks';
    timeline.strong = '1-2 months';
  }

  // 3. Generate Insights
  const insights: string[] = [];
  if (confidence <= 5) insights.push('Confidence barriers affecting performance');
  if (challenge === 'Exam Anxiety') insights.push('Exam pressure and test-taking anxiety');
  if (challenge === 'Poor Study Habits' || challenge === 'Lack of Motivation') insights.push('Inconsistent revision and study habits');
  if (challenge === 'Difficulty Understanding Concepts' || challenge === 'Falling Behind in School') insights.push('Foundational knowledge gaps');
  if (insights.length === 0) insights.push('Requires structured, targeted practice');

  // 4. Recommended Plan
  let sessionsPerWeek = '1 lesson per week';
  if (support === 'Weekly Support' || riskLevel === 'Moderate Risk') {
    sessionsPerWeek = '2 lessons per week';
  } else if (support === 'Intensive Exam Preparation' || riskLevel === 'High Risk') {
    sessionsPerWeek = '2-3 lessons per week';
  }

  const focusAreas = [
    `${subject} core principles`,
    challenge === 'Exam Anxiety' ? 'Exam technique and pacing' : 'Active recall methods',
    'Confidence building through guided practice'
  ];

  // 5. Expected Outcomes
  const outcomes = {
    weeks8: confidence <= 5 ? 'Improved confidence and reduced anxiety' : 'Stronger grasp of complex topics',
    weeks12: 'Better assessment performance and consistent study habits',
    months6: 'Strong academic independence and targeted grade achievement'
  };

  // 7. Final Recommendation
  const recommendation = `Based on your responses, we believe your child would benefit from structured ${sessionsPerWeek} focused on ${focusAreas[1].toLowerCase()} and ${focusAreas[2].toLowerCase()}. With consistent tutoring and use of the QuickStudy Learning Environment, significant progress can be achieved over the coming months.`;

  return {
    riskLevel,
    timeline,
    insights,
    plan: {
      sessionsPerWeek,
      focusAreas
    },
    outcomes,
    recommendation
  };
}
