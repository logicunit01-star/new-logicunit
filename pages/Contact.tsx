
import React from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { runOperationalAudit } from '../services/gemini';
import { AuditForm, AuditResult } from '../types';

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
      const auditResult = await runOperationalAudit(form);
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-6 italic">Operational Control Audit</h1>
              <p className="text-lg text-slate-600 mb-12 font-light">
                Fill out the diagnostic form below to receive an initial executive assessment of your current operational risks and transformation priorities.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-sm text-slate-600"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold">Main Office</h4>
                    <p className="text-slate-500 text-sm">G-Block, Gulberg III, Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-sm text-slate-600"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold">Inquiries</h4>
                    <p className="text-slate-500 text-sm">advisory@logicunit.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-sm text-slate-600"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold">Direct Line</h4>
                    <p className="text-slate-500 text-sm">+92 (0) 42 35XX XXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-10 relative">
              {result ? (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-center gap-3 mb-6 text-green-600">
                    <CheckCircle2 size={32} />
                    <h3 className="text-2xl font-bold">Initial Audit Complete</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white p-6 border border-slate-100 shadow-sm">
                      <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-2 font-bold">Executive Summary</h4>
                      <p className="text-slate-800 leading-relaxed italic">"{result.riskAssessment}"</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-bold">Key Focus Areas</h4>
                      <ul className="space-y-2">
                        {result.keyRecommendations.map((rec, i) => (
                          <li key={i} className="text-sm text-slate-700 bg-slate-200/50 p-3 border-l-2 border-slate-900">{rec}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-white text-center">
                      <p className="text-xs mb-2 uppercase tracking-tighter opacity-70">Strategic Priority</p>
                      <p className="font-bold">{result.strategicPriority}</p>
                    </div>
                    <button 
                      onClick={() => setResult(null)}
                      className="w-full text-slate-500 text-sm hover:underline"
                    >
                      Start a new audit
                    </button>
                    <p className="text-xs text-slate-400 text-center">Our team will contact you at {form.email} for a full consultation.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase text-slate-500">Company Name</label>
                      <input 
                        required
                        className="bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-600"
                        placeholder="Logic Unit Co."
                        value={form.companyName}
                        onChange={(e) => setForm({...form, companyName: e.target.value})}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase text-slate-500">Industry</label>
                      <select 
                        className="bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-600"
                        value={form.industry}
                        onChange={(e) => setForm({...form, industry: e.target.value})}
                      >
                        <option value="">Select...</option>
                        <option value="FMCG">FMCG Distribution</option>
                        <option value="Industrial">Industrial Supply</option>
                        <option value="General Trading">General Trading</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500">Business Size</label>
                    <select 
                      className="bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-600"
                      value={form.businessSize}
                      onChange={(e) => setForm({...form, businessSize: e.target.value})}
                    >
                      <option value="">Select...</option>
                      <option value="10-25">10-25 Employees</option>
                      <option value="25-80">25-80 Employees</option>
                      <option value="80+">80+ Employees</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500">Current System</label>
                    <input 
                      className="bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-600"
                      placeholder="e.g., Tally, Excel, Quickbooks"
                      value={form.currentSystem}
                      onChange={(e) => setForm({...form, currentSystem: e.target.value})}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500">Main Operational Challenge</label>
                    <textarea 
                      className="bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 h-24 resize-none"
                      placeholder="e.g., Inventory mismatches, branch reporting delays..."
                      value={form.mainChallenge}
                      onChange={(e) => setForm({...form, mainChallenge: e.target.value})}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500">Work Email</label>
                    <input 
                      type="email"
                      required
                      className="bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-600"
                      placeholder="executive@company.com"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                  </div>

                  <button 
                    disabled={loading}
                    type="submit"
                    className="w-full bg-slate-900 text-white font-bold py-4 hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 className="animate-spin" size={20} /> : 'Process Audit Request'}
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
