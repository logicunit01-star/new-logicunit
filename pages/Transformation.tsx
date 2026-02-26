
import React from 'react';
import { Link } from 'react-router-dom';
// Added Activity to imports
import { CheckCircle2, Workflow, Target, TrendingUp, Search, Activity } from 'lucide-react';

const Transformation: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Operational Transformation Program</h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Moving from "Management by Crisis" to "Management by System." A structured program for distributors seeking long-term control.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">What is Operational Control?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Operational control isn't about micro-management. It is about creating an environment where every transaction follows a predefined path, every error is caught by the system, and every executive has a clear view of the truth. Our <strong>custom erp software development services</strong> are designed to provide this exact level of control.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-slate-50 border-l-4 border-blue-600">
                  <Search className="text-blue-600 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Total Visibility</h4>
                    <p className="text-sm text-slate-500">Know where every SKU is and what every branch is doing in real-time through a <strong>customized erp system</strong>.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-slate-50 border-l-4 border-slate-900">
                  <Workflow className="text-slate-900 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Standardized SOPs</h4>
                    <p className="text-sm text-slate-500">Decisions are based on policy, enforced by <strong>customized erp software</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-10 border border-slate-200">
              <h3 className="text-2xl font-bold mb-8 text-slate-900">Program Deliverables</h3>
              <ul className="space-y-6">
                {[
                  { title: 'Process Documentation', desc: 'A complete manual of redesigned workflows for your <strong>customized erp</strong>.' },
                  { title: 'Inventory Control Design', desc: 'Lock-tight receiving and dispatch controls via <strong>custom erp feature development</strong>.' },
                  { title: 'Role-Based Access Structure', desc: 'Ensuring data security across the organization with <strong>erp customization</strong>.' },
                  { title: 'Executive Dashboards', desc: 'One screen to view entire business health built into your <strong>custom erp solution</strong>.' },
                  { title: 'Workflow Automation', desc: 'Removing manual intervention in routine tasks through <strong>custom erp integration services</strong>.' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-900" dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                      <p className="text-slate-500 text-sm" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Roadmap Infographic */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">The Transformation Roadmap</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our proven 5-step methodology for implementing <strong>custom erp development services</strong>.</p>
          </div>
          
          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: '01', title: 'Audit', desc: 'Diagnostic of current operational gaps and risks.' },
                { step: '02', title: 'Design', desc: 'Mapping future-state SOPs and <strong>erp customization</strong> needs.' },
                { step: '03', title: 'Build', desc: 'Executing <strong>custom erp software development</strong>.' },
                { step: '04', title: 'Deploy', desc: 'System rollout and <strong>custom erp training</strong>.' },
                { step: '05', title: 'Govern', desc: 'Ongoing optimization and system audits.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 border border-slate-200 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mx-auto mb-6 font-bold rounded-full border-4 border-white shadow-lg">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">The Measurable Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <TrendingUp className="mx-auto mb-6 text-blue-400" size={48} />
              <h4 className="text-4xl font-bold mb-2">30%</h4>
              <p className="text-slate-400">Increase in warehouse throughput after process redesign.</p>
            </div>
            <div>
              <Target className="mx-auto mb-6 text-blue-400" size={48} />
              <h4 className="text-4xl font-bold mb-2">99.8%</h4>
              <p className="text-slate-400">Inventory accuracy achieved through systematic tracking.</p>
            </div>
            <div>
              <Activity className="mx-auto mb-6 text-blue-400" size={48} />
              <h4 className="text-4xl font-bold mb-2">Zero</h4>
              <p className="text-slate-400">Owner-dependence for day-to-day operational approvals.</p>
            </div>
          </div>
          <div className="mt-20">
            <Link to="/contact" className="bg-white text-slate-900 px-10 py-5 font-bold hover:bg-slate-100 transition-all rounded-sm inline-block">
              Request Transformation Roadmap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transformation;
