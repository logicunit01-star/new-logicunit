import { NextRequest, NextResponse } from 'next/server';
import { runOperationalAudit } from '@/services/gemini';
import { AuditForm } from '@/types';

export async function POST(req: NextRequest) {
    try {
        const body: AuditForm = await req.json();

        try {
            const strapiPayload = {
                data: {
                    companyName: body.companyName,
                    Industry: body.industry,
                    businessSize: body.businessSize,
                    phoneNumber: Number(body.phoneNumber.replace(/\D/g, '')) || 0,
                    currentSystem: body.currentSystem,
                    mainoperationalChallenges: body.mainChallenge,
                    workingEmail: body.email
                }
            };

            await fetch('https://passionate-wisdom-fcf8af723e.strapiapp.com/api/erp-contact-forms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 9a3856845ebe725846b18b4638877616e934781bfbfd668c07c3dae52d8758e38cc94f3ba1b98282c74001203140e3f617400c44d519c502880e502478e358766d26e04ba70d9743cbc35892e479c4bb2bfc3b74c7b5239e3a019e26f179c8549aa5a106f4a56dc6d20b923ed0eb0dfed73d9f4ad866e05d29a2aa29d6add2dd'
                },
                body: JSON.stringify(strapiPayload)
            });
        } catch (strapiError) {
            console.error('Failed to save to Strapi:', strapiError);
        }

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
