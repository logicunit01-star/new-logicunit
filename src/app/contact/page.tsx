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
    phoneNumber: '',
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
              <h1 className="text-5xl lg:text-7xl font-black text-[#0D1B2A] mb-10 uppercase tracking-tighter leading-none">
                {CONTACT_CONTENT.title.split(' <br />')[0]} <br />{CONTACT_CONTENT.title.split(' <br />')[1] || ''}
              </h1>
              <p className="text-xl text-slate-600 mb-16 font-medium leading-relaxed">
                {CONTACT_CONTENT.description}
              </p>

              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <div className="bg-[#F4F7FB] p-6 text-[#0D1B2A]"><MapPin size={32} /></div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{CONTACT_CONTENT.officeLabel}</h4>
                    <p className="text-[#0D1B2A] text-xl font-black uppercase tracking-tighter">{SITE_CONFIG.contact.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="bg-[#F4F7FB] p-6 text-[#0D1B2A]"><Mail size={32} /></div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{CONTACT_CONTENT.inquiriesLabel}</h4>
                    <p className="text-[#0D1B2A] text-xl font-black uppercase tracking-tighter">{SITE_CONFIG.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="bg-[#F4F7FB] p-6 text-[#0D1B2A]"><Phone size={32} /></div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{CONTACT_CONTENT.phoneLabel}</h4>
                    <p className="text-[#0D1B2A] text-xl font-black uppercase tracking-tighter">{SITE_CONFIG.contact.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F0F2F8] rounded-2xl p-10 lg:p-14 relative">
              {result ? (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-center gap-4 mb-10 text-[#0062B2]">
                    <CheckCircle2 size={48} />
                    <h3 className="text-3xl font-black uppercase tracking-tighter">{CONTACT_CONTENT.auditComplete}</h3>
                  </div>
                  <div className="space-y-8">
                    <div className="bg-white p-10 border border-[#D6E4F0] rounded-xl">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-4 font-black">{CONTACT_CONTENT.executiveSummary}</h4>
                      <p className="text-[#0D1B2A] text-lg leading-relaxed font-medium italic">"{result.riskAssessment}"</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-6 font-black">{CONTACT_CONTENT.keyFocusAreas}</h4>
                      <ul className="space-y-3">
                        {result.keyRecommendations.map((rec, i) => (
                          <li key={i} className="text-sm font-black uppercase tracking-widest text-white bg-[#0D1B2A] p-6 rounded-lg">{rec}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-8 bg-[#0062B2] text-white text-center rounded-xl">
                      <p className="text-[10px] mb-3 uppercase tracking-[0.3em] font-black opacity-70">{CONTACT_CONTENT.strategicPriority}</p>
                      <p className="text-2xl font-black uppercase tracking-tighter">{result.strategicPriority}</p>
                    </div>
                    <button
                      onClick={() => setResult(null)}
                      className="w-full text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] hover:text-[#0D1B2A] transition-colors"
                    >
                      {CONTACT_CONTENT.startNewAudit}
                    </button>
                    <p className="text-xs text-slate-400 text-center font-medium">Our team will contact you at {form.email} for a full consultation.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Company Name + Industry */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-slate-500">{CONTACT_CONTENT.formLabels.companyName} <span className="text-red-400">*</span></label>
                      <input
                        required
                        className="bg-transparent border-b border-slate-300 pb-2 text-sm text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#0062B2] transition-colors"
                        value={form.companyName}
                        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-slate-500">{CONTACT_CONTENT.formLabels.email} <span className="text-red-400">*</span></label>
                      <input
                        type="email"
                        required
                        className="bg-transparent border-b border-slate-300 pb-2 text-sm text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#0062B2] transition-colors"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + Business Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-slate-500">{CONTACT_CONTENT.formLabels.phoneNumber} <span className="text-red-400">*</span></label>
                      <input
                        type="tel"
                        required
                        className="bg-transparent border-b border-slate-300 pb-2 text-sm text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#0062B2] transition-colors"
                        value={form.phoneNumber}
                        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-slate-500">{CONTACT_CONTENT.formLabels.businessSize} <span className="text-red-400">*</span></label>
                      <select
                        className="bg-transparent border-b border-slate-300 pb-2 text-sm text-slate-500 focus:outline-none focus:border-[#0062B2] transition-colors appearance-none"
                        value={form.businessSize}
                        onChange={(e) => setForm({ ...form, businessSize: e.target.value })}
                      >
                        <option value="">Select...</option>
                        <option value="10-25">10-25 Employees</option>
                        <option value="25-80">25-80 Employees</option>
                        <option value="80+">80+ Employees</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Industry + Current System */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-slate-500">{CONTACT_CONTENT.formLabels.industry} <span className="text-red-400">*</span></label>
                      <select
                        className="bg-transparent border-b border-slate-300 pb-2 text-sm text-slate-500 focus:outline-none focus:border-[#0062B2] transition-colors appearance-none"
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
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-slate-500">{CONTACT_CONTENT.formLabels.currentSystem}</label>
                      <input
                        className="bg-transparent border-b border-slate-300 pb-2 text-sm text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#0062B2] transition-colors"
                        placeholder="e.g., Tally, Excel, SAP"
                        value={form.currentSystem}
                        onChange={(e) => setForm({ ...form, currentSystem: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Main Challenge full width */}
                  <div className="flex flex-col gap-1 pt-2">
                    <label className="text-sm text-slate-500">{CONTACT_CONTENT.formLabels.challenge}</label>
                    <textarea
                      className="bg-transparent border-b border-slate-300 pb-2 text-sm text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#0062B2] transition-colors h-20 resize-none"
                      placeholder="e.g., Inventory mismatches, branch reporting delays..."
                      value={form.mainChallenge}
                      onChange={(e) => setForm({ ...form, mainChallenge: e.target.value })}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      disabled={loading}
                      type="submit"
                      className="bg-[#0D1B2A] text-white font-bold text-sm tracking-wide px-10 py-4 rounded-full hover:bg-[#0062B2] transition-all flex items-center gap-3 disabled:opacity-60"
                    >
                      {loading ? <Loader2 className="animate-spin" size={18} /> : CONTACT_CONTENT.cta}
                    </button>
                  </div>
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
