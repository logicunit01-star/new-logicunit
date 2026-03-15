
export interface AuditForm {
  companyName: string;
  industry: string;
  businessSize: string;
  currentSystem: string;
  mainChallenge: string;
  email: string;
  phoneNumber: string;
}

export interface AuditResult {
  riskAssessment: string;
  keyRecommendations: string[];
  strategicPriority: string;
}
