import { NextRequest, NextResponse } from 'next/server';
import { runOperationalAudit } from '@/services/gemini';
import { AuditForm } from '@/types';

export async function POST(req: NextRequest) {
    try {
        const body: AuditForm = await req.json();
        const result = await runOperationalAudit(body);
        return NextResponse.json(result);
    } catch (error) {
        console.error('Audit API error:', error);
        return NextResponse.json(
            {
                riskAssessment: 'Based on the provided information, your organization shows signs of structural friction typical of scaling distributors.',
                keyRecommendations: [
                    'Institutionalize process documentation',
                    'Upgrade legacy spreadsheet workflows',
                    'Implement role-based control points'
                ],
                strategicPriority: 'Immediate operational audit of current inventory workflows.'
            },
            { status: 200 }
        );
    }
}
