import { GoogleGenAI, Type } from "@google/genai";
import { AuditForm, AuditResult } from "@/types";

export const runOperationalAudit = async (data: AuditForm): Promise<AuditResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Conduct an executive-level operational risk assessment for a distribution company.
    Company: ${data.companyName}
    Industry: ${data.industry}
    Size: ${data.businessSize}
    Current Systems: ${data.currentSystem}
    Primary Challenge: ${data.mainChallenge}

    The assessment should be professional, consultative, and focused on operational structure.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: 'You are a senior Operational Transformation Consultant for "Logic Unit". Your tone is executive, serious, and expert.',
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          riskAssessment: {
            type: Type.STRING,
            description: 'A 2-3 sentence executive summary of the operational risk level.',
          },
          keyRecommendations: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: '3 specific structural improvements needed.',
          },
          strategicPriority: {
            type: Type.STRING,
            description: 'The single most important next step for the CEO.',
          },
        },
        required: ['riskAssessment', 'keyRecommendations', 'strategicPriority'],
      },
    },
  });

  const text = response.text;
  try {
    return JSON.parse(text) as AuditResult;
  } catch (err) {
    console.error('Failed to parse Gemini response', err);
    return {
      riskAssessment: 'Based on the provided information, your organization shows signs of structural friction typical of scaling distributors.',
      keyRecommendations: [
        'Institutionalize process documentation',
        'Upgrade legacy spreadsheet workflows',
        'Implement role-based control points'
      ],
      strategicPriority: 'Immediate operational audit of current inventory workflows.'
    };
  }
};
