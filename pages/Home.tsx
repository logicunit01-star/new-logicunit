
import React from 'react';
import { Link } from 'react-router-dom';
// Added ArrowRight to imports
import { ChevronRight, BarChart3, Database, Workflow, ShieldCheck, Activity, Users, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-32 lg:pt-40 lg:pb-52 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              From Operational Chaos to <span className="text-blue-600">Structured Control</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
              We help growing distribution and trading businesses redesign their operations, implement structured systems, and build long-term operational control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-8 py-4 text-center font-medium hover:bg-slate-800 transition-all rounded-sm flex items-center justify-center gap-2"
              >
                Book Operational Audit <ChevronRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="border border-slate-200 text-slate-900 px-8 py-4 text-center font-medium hover:bg-slate-50 transition-all rounded-sm"
              >
                Schedule Executive Consultation
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block"></div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                When Growth Creates Operational Stress
              </h2>
              <p className="text-lg text-slate-600 mb-8 font-light">
                Rapid expansion often outpaces internal controls. Systems that worked at 5 employees break at 50.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Inaccurate inventory and frequent mismatches',
                  'Heavy dependence on fragile Excel spreadsheets',
                  'Manual approval workflows causing delays',
                  'Lack of real-time visibility into branch operations',
                  'Owner-dependent decision making as a bottleneck'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-900 font-semibold text-lg italic border-l-4 border-blue-600 pl-4">
                "The issue is not growth. The issue is lack of operational structure."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 border border-slate-200 shadow-sm">
                <p className="text-4xl font-bold text-slate-900 mb-2">90%</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Of SMEs rely on Excel for Core Data</p>
              </div>
              <div className="bg-white p-8 border border-slate-200 shadow-sm mt-8">
                <p className="text-4xl font-bold text-slate-900 mb-2">45%</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Inventory shrinkage due to weak controls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 max-w-3xl mx-auto">
            Expert Custom ERP Software Development Company
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Logic Unit combines process redesign, <strong>custom erp development services</strong>, workflow automation, and executive reporting into a structured transformation program. We are a <strong>custom erp software development company</strong> that believes software is just a tool; <strong>operational control is the objective</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 bg-slate-50 text-left">
              <Workflow className="text-blue-600 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Process Engineering</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We map your current inefficiencies and design future-state workflows that scale.
              </p>
            </div>
            <div className="p-8 border border-slate-100 bg-slate-50 text-left">
              <Database className="text-blue-600 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Custom ERP Solutions</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our <strong>custom erp integration services</strong> ensure your systems mirror your redesigned processes, not the other way around.
              </p>
            </div>
            <div className="p-8 border border-slate-100 bg-slate-50 text-left">
              <ShieldCheck className="text-blue-600 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">ERP Customization</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Implementing role-based access, automated audits, and <strong>erp customization services</strong> for long-term control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EEAT / Trust Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Built on Experience & Expertise</h2>
              <p className="text-lg text-slate-600 mb-8 font-light">
                Our authority in <strong>custom erp software development</strong> comes from years of hands-on operational management. We don't just write code; we understand the "Cash Cycle Gap" that kills distribution businesses.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-3xl font-bold text-slate-900">15+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Years Experience</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-3xl font-bold text-slate-900">50+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Systems Deployed</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-3xl font-bold text-slate-900">100%</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Client Retention</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-3xl font-bold text-slate-900">Zero</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Failed Projects</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">The Logic Unit Promise</h3>
                <p className="text-slate-400 mb-8 italic">
                  "We take full ownership of the system adoption. If your team doesn't use the <strong>customized erp system</strong> we built, we haven't finished our job."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">LU</div>
                  <div>
                    <p className="font-bold">Lead Advisory Team</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Logic Unit Private Limited</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Infographic: Custom vs Off-the-shelf */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Distribution Leaders Choose Custom ERP Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Standard software is built for everyone. Our <strong>customized erp software</strong> is built for you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-slate-50 border border-slate-100">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center text-sm">X</span>
                The Standard Software Trap
              </h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">!</span>
                  <span>Rigid workflows that force you to change your successful SOPs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">!</span>
                  <span>Expensive per-user licensing that punishes your growth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">!</span>
                  <span>Generic reporting that doesn't show the "real" truth of your branches.</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-blue-50 border border-blue-100">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-blue-900">
                <span className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center text-sm">✓</span>
                The Logic Unit Advantage
              </h4>
              <ul className="space-y-4 text-sm text-blue-900/70">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Customized erp solutions</strong> designed specifically for your trading model.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>One-time investment in a <strong>custom erp solution</strong> you own forever.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Deep <strong>custom erp integration services</strong> for real-time branch visibility.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Framework */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Operational Transformation Framework</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A proprietary five-phase methodology for distribution excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              { title: 'Diagnosis', desc: 'Deep dive into current operational bottlenecks.', icon: '01' },
              { title: 'Redesign', desc: 'Defining standardized SOPs and control points.', icon: '02' },
              { title: 'Implementation', desc: 'System deployment and team training.', icon: '03' },
              { title: 'Visibility', desc: 'Real-time dashboards for executive oversight.', icon: '04' },
              { title: 'Governance', desc: 'Ongoing optimization and system refinement.', icon: '05' },
            ].map((phase, idx) => (
              <div key={idx} className="relative p-8 bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all group">
                <span className="text-5xl font-bold text-slate-700 mb-6 block group-hover:text-blue-600 transition-colors">{phase.icon}</span>
                <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                <p className="text-slate-400 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Client Profile */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-video bg-slate-100 overflow-hidden">
                <img src="https://picsum.photos/800/600?grayscale" alt="Warehouse Operation" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-slate-900/10"></div>
             </div>
             <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Built for Growing Distribution & Trading Businesses
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-600 leading-relaxed font-light">
                    Our methodology is specifically designed for businesses that have moved past the startup phase and are facing "complexity friction."
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Users size={20} />
                      </div>
                      <span className="text-sm font-medium text-slate-700">10–80 Employees</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Activity size={20} />
                      </div>
                      <span className="text-sm font-medium text-slate-700">Multi-warehouse Ops</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {['Founder-led transition', 'Outgrowing Excel/Basic systems', 'Need for enterprise-grade visibility'].map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                        <ChevronRight size={14} className="text-blue-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Long-Term Operational Partnership</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">We don't do "one-and-done" projects. We build the engine and stay to help you tune it.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-10 border border-slate-100 shadow-sm text-left">
              <h3 className="text-xl font-bold mb-4 text-slate-900 uppercase tracking-tight">Phase I: Implementation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Intensive 3-6 month transformation project focused on core process redesign and system setup.
              </p>
              <ul className="text-xs space-y-2 text-slate-500 uppercase tracking-widest font-semibold">
                <li>• Process Mapping</li>
                <li>• ERP Configuration</li>
                <li>• Master Data Cleaning</li>
              </ul>
            </div>
            <div className="p-10 bg-slate-900 text-white text-left">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Phase II: Optimization</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Ongoing advisory retainer to ensure the system evolves with your growth.
              </p>
              <ul className="text-xs space-y-2 text-slate-400 uppercase tracking-widest font-semibold">
                <li>• Monthly System Audits</li>
                <li>• Dashboard Refinement</li>
                <li>• Team Competency Coaching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Evaluate Your Operational Control</h2>
          <p className="text-xl text-slate-600 mb-10 font-light">
            Take the first step toward structured operations with a professional diagnostic of your current processes and systems.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-5 text-lg font-medium hover:bg-slate-800 transition-all rounded-sm shadow-xl"
          >
            Request Operational Audit <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
