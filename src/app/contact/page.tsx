"use client";

import React from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { AuditForm, AuditResult } from '@/types';
import { CONTACT_CONTENT } from '@/constants/content';
import { API_ENDPOINTS } from '@/constants/apiEndpoints';
import { SITE_CONFIG } from '@/constants/siteConfig';

const Contact: React.FC = () => {
  const [form, setForm] = React.useState<AuditForm>({
    companyName: '',
    industry: '',
    businessSize: '',
    currentSystem: '',
    mainChallenge: '',
    email: '',
  });

  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<AuditResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.AUDIT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const auditResult = await response.json();
      setResult(auditResult);
    } catch (error) {
      console.error(error);
      alert('There was an issue processing your audit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="aramco-label">{CONTACT_CONTENT.label}</span>
              <h1 className="text-5xl lg:text-7xl font-black text-aramco-navy mb-10 uppercase tracking-tighter leading-none">
                {CONTACT_CONTENT.title.split(' <br />')[0]} <br />{CONTACT_CONTENT.title.split(' <br />')[1] || ''}
              </h1>
              <p className="text-xl text-slate-600 mb-16 font-medium leading-relaxed">
                {CONTACT_CONTENT.description}
              </p>

              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <div className="bg-aramco-gray p-6 text-aramco-navy"><MapPin size={32} /></div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{CONTACT_CONTENT.officeLabel}</h4>
                    <p className="text-aramco-navy text-xl font-black uppercase tracking-tighter">{SITE_CONFIG.contact.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="bg-aramco-gray p-6 text-aramco-navy"><Mail size={32} /></div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{CONTACT_CONTENT.inquiriesLabel}</h4>
                    <p className="text-aramco-navy text-xl font-black uppercase tracking-tighter">{SITE_CONFIG.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="bg-aramco-gray p-6 text-aramco-navy"><Phone size={32} /></div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{CONTACT_CONTENT.phoneLabel}</h4>
                    <p className="text-aramco-navy text-xl font-black uppercase tracking-tighter">{SITE_CONFIG.contact.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-aramco-gray p-12 lg:p-16 relative">
              {result ? (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-center gap-4 mb-10 text-aramco-teal">
                    <CheckCircle2 size={48} />
                    <h3 className="text-3xl font-black uppercase tracking-tighter">{CONTACT_CONTENT.auditComplete}</h3>
                  </div>
                  <div className="space-y-8">
                    <div className="bg-white p-10 border border-slate-200">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-4 font-black">{CONTACT_CONTENT.executiveSummary}</h4>
                      <p className="text-aramco-navy text-lg leading-relaxed font-medium italic">"{result.riskAssessment}"</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-6 font-black">{CONTACT_CONTENT.keyFocusAreas}</h4>
                      <ul className="space-y-3">
                        {result.keyRecommendations.map((rec, i) => (
                          <li key={i} className="text-sm font-black uppercase tracking-widest text-white bg-aramco-navy p-6">{rec}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-8 bg-aramco-teal text-white text-center">
                      <p className="text-[10px] mb-3 uppercase tracking-[0.3em] font-black opacity-70">{CONTACT_CONTENT.strategicPriority}</p>
                      <p className="text-2xl font-black uppercase tracking-tighter">{result.strategicPriority}</p>
                    </div>
                    <button
                      onClick={() => setResult(null)}
                      className="w-full text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] hover:text-aramco-navy transition-colors"
                    >
                      {CONTACT_CONTENT.startNewAudit}
                    </button>
                    <p className="text-xs text-slate-400 text-center font-medium">Our team will contact you at {form.email} for a full consultation.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{CONTACT_CONTENT.formLabels.companyName}</label>
                      <input
                        required
                        className="bg-white border border-slate-200 px-6 py-4 text-sm font-medium focus:outline-none focus:border-aramco-teal transition-colors"
                        placeholder="Logic Unit Co."
                        value={form.companyName}
                        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{CONTACT_CONTENT.formLabels.industry}</label>
                      <select
                        className="bg-white border border-slate-200 px-6 py-4 text-sm font-medium focus:outline-none focus:border-aramco-teal transition-colors appearance-none"
                        value={form.industry}
                        onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      >
                        <option value="">Select...</option>
                        <option value="FMCG">FMCG Distribution</option>
                        <option value="Industrial">Industrial Supply</option>
                        <option value="General Trading">General Trading</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{CONTACT_CONTENT.formLabels.businessSize}</label>
                    <select
                      className="bg-white border border-slate-200 px-6 py-4 text-sm font-medium focus:outline-none focus:border-aramco-teal transition-colors appearance-none"
                      value={form.businessSize}
                      onChange={(e) => setForm({ ...form, businessSize: e.target.value })}
                    >
                      <option value="">Select...</option>
                      <option value="10-25">10-25 Employees</option>
                      <option value="25-80">25-80 Employees</option>
                      <option value="80+">80+ Employees</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{CONTACT_CONTENT.formLabels.currentSystem}</label>
                    <input
                      className="bg-white border border-slate-200 px-6 py-4 text-sm font-medium focus:outline-none focus:border-aramco-teal transition-colors"
                      placeholder="e.g., Tally, Excel, Quickbooks"
                      value={form.currentSystem}
                      onChange={(e) => setForm({ ...form, currentSystem: e.target.value })}
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{CONTACT_CONTENT.formLabels.challenge}</label>
                    <textarea
                      className="bg-white border border-slate-200 px-6 py-4 text-sm font-medium focus:outline-none focus:border-aramco-teal transition-colors h-32 resize-none"
                      placeholder="e.g., Inventory mismatches, branch reporting delays..."
                      value={form.mainChallenge}
                      onChange={(e) => setForm({ ...form, mainChallenge: e.target.value })}
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{CONTACT_CONTENT.formLabels.email}</label>
                    <input
                      type="email"
                      required
                      className="bg-white border border-slate-200 px-6 py-4 text-sm font-medium focus:outline-none focus:border-aramco-teal transition-colors"
                      placeholder="executive@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-aramco-navy text-white font-black uppercase tracking-widest py-6 hover:bg-aramco-teal transition-all flex items-center justify-center gap-3"
                  >
                    {loading ? <Loader2 className="animate-spin" size={24} /> : CONTACT_CONTENT.cta}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
