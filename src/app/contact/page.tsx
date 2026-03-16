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

  const inputClass =
    "w-full bg-transparent border-b border-[#D6E4F0] pb-2 text-sm text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#0062B2] transition-colors duration-200";

  const labelClass =
    "text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2 block";

  return (
    <div className="flex flex-col">
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="mb-20">
            <span className="aramco-label">{CONTACT_CONTENT.label}</span>
            <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h1 className="text-5xl lg:text-6xl font-black text-[#0D1B2A] leading-[1.05] tracking-tight">
                {CONTACT_CONTENT.title.split(' <br />')[0]}<br />
                <span className="text-[#0062B2]">{CONTACT_CONTENT.title.split(' <br />')[1] || ''}</span>
              </h1>
              <p className="text-sm text-[#6B84A0] max-w-xs leading-relaxed lg:text-right lg:mb-1">
                {CONTACT_CONTENT.description}
              </p>
            </div>
            <div className="mt-10 h-px bg-[#D6E4F0]" />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Contact Info */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-px">
              {[
                {
                  icon: <MapPin size={20} />,
                  label: CONTACT_CONTENT.officeLabel,
                  value: SITE_CONFIG.contact.location,
                },
                {
                  icon: <Mail size={20} />,
                  label: CONTACT_CONTENT.inquiriesLabel,
                  value: SITE_CONFIG.contact.email,
                },
                {
                  icon: <Phone size={20} />,
                  label: CONTACT_CONTENT.phoneLabel,
                  value: SITE_CONFIG.contact.phone,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-6 bg-white border border-[#E8F0F8] p-8 hover:border-[#0062B2]/30 hover:shadow-[0_4px_24px_-4px_rgba(0,98,178,0.08)] transition-all duration-200"
                  style={{ borderRadius: i === 0 ? '12px 12px 0 0' : i === 2 ? '0 0 12px 12px' : '0' }}
                >
                  <div className="w-10 h-10 bg-[#F4F7FB] flex items-center justify-center text-[#0062B2] shrink-0 rounded-lg group-hover:bg-[#0062B2] group-hover:text-white transition-all duration-200">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-1">
                      {item.label}
                    </span>
                    <p className="text-sm font-black text-[#0D1B2A] uppercase tracking-tight truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Form / Result */}
            <div className="lg:col-span-8 bg-white border border-[#E8F0F8] rounded-2xl shadow-[0_4px_24px_-4px_rgba(0,98,178,0.08)] overflow-hidden">

              {/* Form Header Bar */}
              <div className="px-10 py-6 border-b border-[#E8F0F8] bg-[#F8FAFC] flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0D1B2A]">
                  Operational Audit Request
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Free · Confidential
                </span>
              </div>

              <div className="p-10 lg:p-12">
                {result ? (
                  /* ── Result State ── */
                  <div className="animate-in fade-in duration-500 space-y-8">

                    {/* Success Header */}
                    <div className="flex items-center gap-4 text-[#0062B2]">
                      <CheckCircle2 size={40} strokeWidth={2.5} />
                      <div>
                        <h3 className="text-2xl font-black uppercase tracking-tight text-[#0D1B2A]">
                          {CONTACT_CONTENT.auditComplete}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          Report generated for {form.companyName}
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-[#E8F0F8]" />

                    {/* Executive Summary */}
                    <div>
                      <span className={labelClass}>{CONTACT_CONTENT.executiveSummary}</span>
                      <div className="bg-[#F8FAFC] border border-[#E8F0F8] rounded-xl p-8">
                        <p className="text-[#0D1B2A] text-base leading-relaxed font-medium italic">
                          "{result.riskAssessment}"
                        </p>
                      </div>
                    </div>

                    {/* Key Recommendations */}
                    <div>
                      <span className={labelClass}>{CONTACT_CONTENT.keyFocusAreas}</span>
                      <ul className="space-y-2">
                        {result.keyRecommendations.map((rec, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 bg-[#F8FAFC] border border-[#E8F0F8] px-6 py-4 rounded-xl"
                          >
                            <span className="text-[9px] font-black text-[#0062B2] uppercase tracking-widest mt-0.5 shrink-0">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="text-sm font-black uppercase tracking-tight text-[#0D1B2A]">
                              {rec}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Strategic Priority */}
                    <div className="relative bg-[#0062B2] rounded-xl p-8 text-white overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                          backgroundSize: '24px 24px'
                        }}
                      />
                      <div className="relative z-10 flex items-center justify-between gap-6">
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 block mb-2">
                            {CONTACT_CONTENT.strategicPriority}
                          </span>
                          <p className="text-xl font-black uppercase tracking-tight">
                            {result.strategicPriority}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 font-medium text-center">
                      Our team will contact you at{' '}
                      <span className="text-[#0062B2] font-black">{form.email}</span>{' '}
                      for a full consultation.
                    </p>

                    <button
                      onClick={() => setResult(null)}
                      className="w-full text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] hover:text-[#0D1B2A] transition-colors py-2"
                    >
                      {CONTACT_CONTENT.startNewAudit}
                    </button>
                  </div>

                ) : (
                  /* ── Form State ── */
                  <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                      <div>
                        <label className={labelClass}>
                          {CONTACT_CONTENT.formLabels.companyName} <span className="text-red-400">*</span>
                        </label>
                        <input
                          required
                          className={inputClass}
                          value={form.companyName}
                          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>
                          {CONTACT_CONTENT.formLabels.email} <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          className={inputClass}
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                      <div>
                        <label className={labelClass}>
                          {CONTACT_CONTENT.formLabels.phoneNumber} <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          className={inputClass}
                          value={form.phoneNumber}
                          onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>
                          {CONTACT_CONTENT.formLabels.businessSize} <span className="text-red-400">*</span>
                        </label>
                        <select
                          className={`${inputClass} appearance-none cursor-pointer`}
                          value={form.businessSize}
                          onChange={(e) => setForm({ ...form, businessSize: e.target.value })}
                        >
                          <option value="">Select...</option>
                          <option value="10-25">10–25 Employees</option>
                          <option value="25-80">25–80 Employees</option>
                          <option value="80+">80+ Employees</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                      <div>
                        <label className={labelClass}>
                          {CONTACT_CONTENT.formLabels.industry} <span className="text-red-400">*</span>
                        </label>
                        <select
                          className={`${inputClass} appearance-none cursor-pointer`}
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
                      <div>
                        <label className={labelClass}>
                          {CONTACT_CONTENT.formLabels.currentSystem}
                        </label>
                        <input
                          className={inputClass}
                          placeholder="e.g., Tally, Excel, SAP"
                          value={form.currentSystem}
                          onChange={(e) => setForm({ ...form, currentSystem: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Challenge */}
                    <div>
                      <label className={labelClass}>
                        {CONTACT_CONTENT.formLabels.challenge}
                      </label>
                      <textarea
                        className={`${inputClass} h-20 resize-none`}
                        placeholder="e.g., Inventory mismatches, branch reporting delays..."
                        value={form.mainChallenge}
                        onChange={(e) => setForm({ ...form, mainChallenge: e.target.value })}
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2 flex items-center justify-between gap-6">
                      <p className="text-[10px] text-slate-400 font-medium">
                        Your data is confidential and never shared.
                      </p>
                      <button
                        disabled={loading}
                        type="submit"
                        className="shrink-0 bg-[#0D1B2A] text-white font-black text-[10px] tracking-[0.2em] uppercase px-10 py-4 rounded-full hover:bg-[#0062B2] transition-all duration-200 flex items-center gap-3 disabled:opacity-60"
                      >
                        {loading
                          ? <><Loader2 className="animate-spin" size={14} /> Processing...</>
                          : CONTACT_CONTENT.cta
                        }
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;