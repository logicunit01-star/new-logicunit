
import React from 'react';
import Link from 'next/link';
import { Database, Server, RefreshCw, BarChart4, ClipboardCheck, ArrowRight, Workflow, CheckCircle2, Target, TrendingUp, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import erpImg from "../../assets/images/erp-solutions.jpg";
import StrategicDecisionImg from "../../assets/images/strategic-decision.jpg";
const ERP: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={erpImg}
            alt="ERP Systems"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aramco-navy/90 via-aramco-navy/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="aramco-label text-white/60">Systems & Infrastructure</span>
            <h1 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tighter">Systems Configured <br />for Control</h1>
            <p className="text-xl lg:text-2xl text-white/80 font-medium leading-relaxed">
              Many ERP implementations fail because software is installed without operational alignment. We restore that alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Infographic */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="aramco-label mx-auto">The Objective</span>
            <h2 className="text-4xl lg:text-5xl font-black text-aramco-navy mb-6 uppercase tracking-tighter">Why Operational Control <br />Trumps Generic ERP</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Software is just a tool. <strong>Operational control is the objective</strong>. We configure systems that mirror your business model.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
            <div className="p-16 bg-white hover:bg-aramco-gray transition-colors">
              <div className="w-16 h-16 bg-aramco-teal text-white flex items-center justify-center mb-10">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-black mb-6 text-aramco-navy uppercase tracking-widest">Structured Control</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                We build <strong>structured operations systems</strong> that eliminate bottlenecks and ensure every transaction follows a predefined path.
              </p>
            </div>
            <div className="p-16 bg-white hover:bg-aramco-gray transition-colors">
              <div className="w-16 h-16 bg-aramco-navy text-white flex items-center justify-center mb-10">
                <Workflow size={32} />
              </div>
              <h3 className="text-xl font-black mb-6 text-aramco-navy uppercase tracking-widest">Governance Automation</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Implementing <strong>governance automation</strong> through role-based access and automated audit logs for total accountability.
              </p>
            </div>
            <div className="p-16 bg-white hover:bg-aramco-gray transition-colors">
              <div className="w-16 h-16 bg-aramco-teal text-white flex items-center justify-center mb-10">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-black mb-6 text-aramco-navy uppercase tracking-widest">Scalable Structure</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Our <strong>distribution ERP implementation</strong> provides a foundation that scales with your growth without increasing complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-32 bg-aramco-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <span className="aramco-label">Capabilities</span>
            <h2 className="text-4xl lg:text-5xl font-black text-aramco-navy mb-8 uppercase tracking-tighter">
              ERP Systems Configured to <br />Support Operational Control
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl font-medium leading-relaxed">
              Our focus is on <strong>distribution ERP implementation</strong> and <strong>trading company ERP systems</strong> that ensure your system supports governance, transparency, and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            {[
              { title: 'Multi-branch Inventory Control', desc: 'Centralized <strong>inventory control software</strong> for real-time stock tracking across all locations.', icon: <Server size={24} /> },
              { title: 'Real-time Stock Tracking', desc: 'Eliminate inventory mismatches with automated <strong>supply chain automation</strong>.', icon: <Database size={24} /> },
              { title: 'Role-based Approval Workflows', desc: 'Enforce SOPs with <strong>automated approval systems</strong> built into the ERP.', icon: <RefreshCw size={24} /> },
              { title: 'Automated Data Validation', desc: 'Reduce human error with system-enforced validation rules and <strong>internal control systems</strong>.', icon: <BarChart4 size={24} /> },
              { title: 'Audit Trails', desc: 'Full accountability with <strong>audit trail ERP</strong> configuration for every transaction.', icon: <ClipboardCheck size={24} /> },
              { title: 'Centralized Reporting', desc: 'One source of truth with <strong>multi-branch reporting software</strong>.', icon: <ArrowRight size={24} /> },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-12 hover:bg-aramco-teal group transition-colors">
                <div className="text-aramco-teal group-hover:text-white mb-8">{item.icon}</div>
                <h3 className="text-lg font-black mb-4 text-aramco-navy group-hover:text-white uppercase tracking-widest">{item.title}</h3>
                <p className="text-slate-500 group-hover:text-white/80 text-sm leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="aramco-label">Strategic Advantage</span>
              <h2 className="text-4xl lg:text-5xl font-black text-aramco-navy mb-10 uppercase tracking-tighter leading-none">Off-the-Shelf vs. <br />Custom ERP Development</h2>
              <p className="text-xl text-slate-600 mb-12 font-medium leading-relaxed">
                Choosing between a generic system and a <strong>custom erp solution</strong> is a critical strategic decision.
              </p>
              <div className="space-y-px bg-slate-200">
                {[
                  { label: 'Business Fit', custom: '100% Alignment', off: '60-70% Alignment' },
                  { label: 'Long-term Cost', custom: 'Lower (No recurring per-user fees)', off: 'Higher (Scaling costs)' },
                  { label: 'Competitive Edge', custom: 'Unique proprietary workflows', off: 'Same tools as competitors' },
                  { label: 'Integration', custom: 'Native & Seamless', off: 'Complex & Fragile' },
                ].map((row, i) => (
                  <div key={i} className="flex flex-row sm:flex-row sm:items-center justify-between p-8 bg-aramco-gray">
                    <div><span className="font-black text-aramco-navy text-[10px] uppercase tracking-[0.3em] mb-4 sm:mb-0">{row.label}</span>
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 text-sm">
                        <span className="text-aramco-teal font-black uppercase tracking-widest text-xs">Custom: {row.custom}</span>

                      </div>
                    </div>
                    <span className="text-slate-400 font-black uppercase tracking-widest text-xs">Off-the-shelf: {row.off}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white shadow-2xl overflow-hidden">
                <Image
                  src={StrategicDecisionImg}
                  alt="Custom ERP Software Development"
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-aramco-navy text-white p-16 max-w-sm hidden md:block border-l-8 border-aramco-teal">
                <p className="text-2xl italic font-black leading-tight uppercase tracking-tighter">"Reduced operational overhead by 40% for our last distribution client."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 bg-aramco-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="aramco-label text-white/40 mx-auto">Impact</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 uppercase tracking-tighter">What Changes After <br />Structured Control</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">When operational structure is restored, the impact is measurable and immediate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {[
              { title: 'Inventory Accuracy', desc: 'Inventory discrepancies reduce significantly as stock adjustments become rare and physical counts match reports.' },
              { title: 'Accelerated Approvals', desc: 'Approval cycles accelerate as manual bottlenecks are replaced by automated, policy-driven workflows.' },
              { title: 'Seamless Coordination', desc: 'Branch coordination improves with real-time visibility across all locations from a single source of truth.' },
              { title: 'Reliable Decision Data', desc: 'Data becomes reliable, moving leadership from reactive firefighting to proactive strategic planning.' },
              { title: 'Strategic Focus', desc: 'Owners regain time to focus on growth and market expansion instead of daily operational exceptions.' },
              { title: 'Intentional Growth', desc: 'Growth stops feeling chaotic and heavy; it becomes intentional, scalable, and manageable.' }
            ].map((item, idx) => (
              <div key={idx} className="p-16 bg-aramco-navy hover:bg-white group transition-colors">
                <div className="w-16 h-16 bg-aramco-teal/20 text-aramco-teal flex items-center justify-center mb-10 group-hover:bg-aramco-teal group-hover:text-white transition-colors">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-black mb-6 text-white group-hover:text-aramco-navy uppercase tracking-tighter">{item.title}</h4>
                <p className="text-slate-400 group-hover:text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-24">
            <div className="max-w-3xl">
              <span className="aramco-label">Next Steps</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tighter">Custom ERP is the <br />Tool, Not the Goal</h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                A <strong>customized erp</strong> without structure is just a digital version of the chaos you already have. Let our <strong>custom erp development services</strong> help you build a foundation that actually lasts.
              </p>
            </div>
            <Link href="/contact" className="btn-aramco-primary text-lg px-12 py-6 whitespace-nowrap">
              Discuss System Requirements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERP;
