import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Workflow, Target, TrendingUp, Search, Activity, ChevronRight } from 'lucide-react';
import Image from "next/image";
import operations from "../../assets/images/operation.jpg";

const Transformation: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={operations}
            alt="Operational Control"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#000000]/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="aramco-label text-white/60">Methodology</span>
            <h1 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tighter">Operational <br />Transformation</h1>
            <p className="text-xl lg:text-2xl text-white/80 font-medium leading-relaxed">
              Logic-Unit helps distribution and trading businesses redesign their operations, implement structured systems, and build long-term operational control.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="aramco-label">Our Approach</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-10 text-[#0D1B2A] uppercase tracking-tighter leading-none">Operational <br />Transformation Framework</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
                Logic-Unit combines process engineering, ERP implementation, systems integration, workflow automation, and internal controls into one structured transformation program.
              </p>
              <div className="space-y-px bg-[#D6E4F0]">
                <div className="flex gap-8 p-12 bg-[#F4F7FB] hover:bg-white transition-colors group">
                  <Search className="text-[#0062B2] shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl font-black mb-4 text-[#0D1B2A] uppercase tracking-widest">Process Engineering</h4>
                    <p className="text-slate-600 leading-relaxed font-medium">Mapping inefficiencies and designing future-state workflows that support multi-branch scalability.</p>
                  </div>
                </div>
                <div className="flex gap-8 p-12 bg-[#F4F7FB] hover:bg-white transition-colors group">
                  <Workflow className="text-[#0D1B2A] shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl font-black mb-4 text-[#0D1B2A] uppercase tracking-widest">Internal Controls</h4>
                    <p className="text-slate-600 leading-relaxed font-medium">Building accountability and fraud prevention through role-based access and automated audit logs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F4F7FB] p-16 border border-[#D6E4F0]">
              <h3 className="text-xs font-black mb-12 text-slate-400 uppercase tracking-[0.3em]">Framework Components</h3>
              <ul className="space-y-10">
                {[
                  { title: 'Process Engineering', desc: 'Redesigning workflows for <strong>business process redesign</strong> and <strong>operational efficiency improvement</strong>.' },
                  { title: 'ERP Configuration', desc: 'Configuring <strong>distribution ERP implementation</strong> around your standardized processes.' },
                  { title: 'Workflow Automation', desc: 'Implementing <strong>automated approval systems</strong> to eliminate bottlenecks.' },
                  { title: 'Internal Control Implementation', desc: 'Establishing <strong>internal control systems</strong> for governance and risk management.' },
                  { title: 'Executive Reporting', desc: 'Building <strong>operational KPI dashboards</strong> for real-time business analytics.' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-8">
                    <CheckCircle2 className="text-[#0062B2] mt-1 shrink-0" size={28} />
                    <div>
                      <h4 className="text-lg font-black text-[#0D1B2A] mb-2 uppercase tracking-tighter" dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                      <p className="text-slate-500 leading-relaxed font-medium text-sm" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-32 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="aramco-label mx-auto">Deep Dive</span>
            <h2 className="text-4xl lg:text-6xl font-black text-[#0D1B2A] uppercase tracking-tighter">Operational Architecture</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D6E4F0]">
            {/* Process Engineering */}
            <div className="bg-white p-16 hover:bg-[#0062B2] group transition-colors">
              <h3 className="text-2xl font-black mb-8 text-[#0D1B2A] group-hover:text-white uppercase tracking-tighter">1. Process Engineering</h3>
              <p className="text-slate-600 group-hover:text-white/80 mb-10 leading-relaxed font-medium">
                Before introducing structure, we deeply understand your current operations. We map purchasing decisions, inventory movement, sales approvals, and financial validation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Remove Duplication</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Clarify Responsibilities</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Reduce Approval Layers</li>
                </ul>
                <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Strengthen Accountability</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Support Scale</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Define Future SOPs</li>
                </ul>
              </div>
            </div>

            {/* Systems Aligned to Process */}
            <div className="bg-white p-16 hover:bg-[#0062B2] group transition-colors">
              <h3 className="text-2xl font-black mb-8 text-[#0D1B2A] group-hover:text-white uppercase tracking-tighter">2. Systems Aligned to Process</h3>
              <p className="text-slate-600 group-hover:text-white/80 mb-10 leading-relaxed font-medium">
                Systems should reflect business logic, not distort it. We configure operational systems to ensure decisions become consistent and information becomes trustworthy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Multi-branch Control</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Real-time Accuracy</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Structured Approval</li>
                </ul>
                <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Controlled Access</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Automated Validation</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Data Consistency</li>
                </ul>
              </div>
            </div>

            {/* Workflow Automation */}
            <div className="bg-white p-16 hover:bg-[#0062B2] group transition-colors">
              <h3 className="text-2xl font-black mb-8 text-[#0D1B2A] group-hover:text-white uppercase tracking-tighter">3. Workflow Automation</h3>
              <p className="text-slate-600 group-hover:text-white/80 mb-10 leading-relaxed font-medium">
                Manual workflows create dependency and delay. We design structured flows that ensure discipline without micromanagement, removing daily friction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Follow Policy Automatically</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Escalate Intelligently</li>
                </ul>
                <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Reduce Involvement</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Traceable Records</li>
                </ul>
              </div>
            </div>

            {/* Internal Controls */}
            <div className="bg-white p-16 hover:bg-[#0062B2] group transition-colors">
              <h3 className="text-2xl font-black mb-8 text-[#0D1B2A] group-hover:text-white uppercase tracking-tighter">4. Internal Controls</h3>
              <p className="text-slate-600 group-hover:text-white/80 mb-10 leading-relaxed font-medium">
                Growth introduces risk. Internal control is not about restriction; it is about protection of inventory, margins, and leadership time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Segregation of Duties</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Role-based Permissions</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Validation Checks</li>
                </ul>
                <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Audit-ready Logs</li>
                  <li className="flex items-center"><ChevronRight size={12} className="mr-3 text-[#0062B2] group-hover:text-white" /> Exception Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Roadmap */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="aramco-label mx-auto">The Process</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0D1B2A] mb-6 uppercase tracking-tighter">The Transformation Roadmap</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Our proven 5-step methodology for implementing <strong>custom erp development services</strong>.</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-[#D6E4F0] -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#D6E4F0] relative z-10">
              {[
                { step: '01', title: 'Audit', desc: 'Diagnostic of current operational gaps and risks.' },
                { step: '02', title: 'Design', desc: 'Mapping future-state SOPs and <strong>erp customization</strong> needs.' },
                { step: '03', title: 'Build', desc: 'Executing <strong>custom erp software development</strong>.' },
                { step: '04', title: 'Deploy', desc: 'System rollout and <strong>custom erp training</strong>.' },
                { step: '05', title: 'Govern', desc: 'Ongoing optimization and system audits.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-12 text-center hover:bg-[#F4F7FB] transition-colors group">
                  <div className="w-20 h-20 bg-[#0D1B2A] text-white flex items-center justify-center mx-auto mb-10 font-black text-2xl group-hover:bg-[#0062B2] transition-colors">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-black text-[#0D1B2A] mb-4 uppercase tracking-widest">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-32 bg-[#0D1B2A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="aramco-label text-white/40 mx-auto">Results</span>
          <h2 className="text-4xl lg:text-6xl font-black mb-24 uppercase tracking-tighter">The Measurable Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <div>
              <TrendingUp className="mx-auto mb-10 text-[#75BF2A]" size={64} />
              <h4 className="text-7xl font-black mb-6 text-white tracking-tighter">30%</h4>
              <p className="text-slate-400 text-xl font-medium uppercase tracking-widest">Increase in <br />Warehouse Throughput</p>
            </div>
            <div>
              <Target className="mx-auto mb-10 text-[#75BF2A]" size={64} />
              <h4 className="text-7xl font-black mb-6 text-white tracking-tighter">99.8%</h4>
              <p className="text-slate-400 text-xl font-medium uppercase tracking-widest">Inventory Accuracy <br />Achieved</p>
            </div>
            <div>
              <Activity className="mx-auto mb-10 text-[#75BF2A]" size={64} />
              <h4 className="text-7xl font-black mb-6 text-white tracking-tighter">ZERO</h4>
              <p className="text-slate-400 text-xl font-medium uppercase tracking-widest">Owner-Dependence <br />for Approvals</p>
            </div>
          </div>
          <div className="mt-32">
            <Link href="/contact" className="btn-aramco-primary text-lg px-12 py-6">
              Request Transformation Roadmap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transformation;
