export interface SurveyResponses {
  yearGroup: string;
  subject: string;
  confidenceLevel: number; // 1-10
  biggestChallenge: string;
  primaryGoal: string;
  supportNeeded: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
}

export interface LearningProfileData {
  riskLevel: 'Low Risk' | 'Moderate Risk' | 'High Risk';
  timeline: {
    visible: string;
    strong: string;
    longTerm: string;
  };
  insights: string[];
  plan: {
    sessionsPerWeek: string;
    focusAreas: string[];
  };
  outcomes: {
    weeks8: string;
    weeks12: string;
    months6: string;
  };
  recommendation: string;
}
