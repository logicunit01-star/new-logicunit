import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, XCircle, ArrowRight, BarChart3, Database, Workflow, ShieldCheck, Activity } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/industrial/1920/1080?grayscale" 
            alt="Industrial Operations" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aramco-navy/90 via-aramco-navy/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <span className="aramco-label text-white/80">Operational Transformation Partner</span>
            <h1 className="text-5xl lg:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
              From Operational Chaos <br /> <span className="text-aramco-teal">to Structured Control</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 mb-10 leading-relaxed font-medium max-w-2xl">
              ERP & Operational Systems for Distribution and Trading Businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="btn-aramco-primary">
                Begin Transformation
              </Link>
              <Link to="/experience" className="btn-aramco-outline border-white text-white hover:bg-white hover:text-aramco-navy">
                Our Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section: Growth Stress */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <span className="aramco-label">The Reality of Growth</span>
              <h2 className="text-4xl lg:text-6xl font-black text-aramco-navy mb-10 uppercase tracking-tighter leading-none">
                Growth should <br />create leverage.
              </h2>
              <p className="text-2xl text-slate-600 mb-12 leading-relaxed font-medium">
                But for most distribution and trading companies, growth creates stress.
              </p>
              <div className="space-y-4 text-lg text-slate-500 font-medium">
                <p>Inventory errors increase.</p>
                <p>Approvals slow down.</p>
                <p>Excel files multiply.</p>
                <p>Branches operate differently.</p>
                <p>And the owner becomes the control center for everything.</p>
              </div>
            </div>
            
            <div className="bg-aramco-gray p-16 border-l-8 border-aramco-teal">
              <h3 className="text-3xl font-black text-aramco-navy uppercase tracking-tighter leading-none mb-8">
                The problem is not growth. <br />The problem is lack of operational structure.
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                At Logic-Unit, we redesign operations for growing distribution and trading businesses. We implement structured systems, configure ERP correctly, automate workflows, and build internal controls that create long-term operational clarity.
              </p>
              <div className="pt-8 border-t border-slate-200">
                <p className="text-sm font-black text-aramco-teal uppercase tracking-[0.3em]">Software is not the goal. Control is.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-32 bg-aramco-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div>
                <span className="aramco-label text-white/40">Our Focus</span>
                <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 uppercase tracking-tighter leading-none">
                  Who We Serve
                </h2>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                  If your business is experiencing operational friction as you grow, we are built for you.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Distribution companies managing multi-location inventory',
                    'Trading businesses handling procurement and resale',
                    'Wholesale operations struggling with stock accuracy',
                    'Owner-led businesses scaling beyond 20–50 employees',
                    'Companies replacing Excel-based systems with structured ERP'
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-6 bg-white/5 p-6 border-l-4 border-aramco-teal">
                      <div className="w-8 h-8 bg-white/10 text-aramco-teal flex items-center justify-center shrink-0">
                        <ChevronRight size={16} />
                      </div>
                      <span className="text-sm font-black uppercase tracking-widest text-white">{point}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="relative aspect-square bg-white/5 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/warehouse-ops/1000/1000?grayscale" 
                  alt="Warehouse Operation" 
                  className="w-full h-full object-cover opacity-50" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-aramco-navy/40"></div>
             </div>
          </div>
        </div>
      </section>

      {/* What Actually Breaks */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="aramco-label mx-auto">The Breaking Point</span>
            <h2 className="text-4xl lg:text-6xl font-black text-aramco-navy mb-8 uppercase tracking-tighter">What Actually Breaks When <br />Distribution Companies Grow</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
              At 5 employees, informal systems work. At 50 employees, they collapse.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-slate-200">
            {[
              { title: "Inventory Mismatches", desc: "Stock numbers in the system don’t match physical reality. Adjustments become normal." },
              { title: "Excel Dependency", desc: "Critical data lives in spreadsheets owned by individuals. Version control becomes impossible." },
              { title: "Manual Approval Bottlenecks", desc: "Purchase approvals sit in inboxes. Orders wait for sign-offs." },
              { title: "No Real-Time Branch Visibility", desc: "Head office doesn’t know what’s happening daily." },
              { title: "Owner-Dependent Decisions", desc: "Every exception requires escalation. Strategic work is replaced by operational firefighting." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-12 hover:bg-aramco-gray transition-colors group">
                <span className="text-5xl font-black text-slate-100 mb-8 block group-hover:text-aramco-teal transition-colors">0{idx + 1}</span>
                <h4 className="text-lg font-black text-aramco-navy mb-4 uppercase tracking-widest leading-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-aramco-gray p-16 text-center">
            <p className="text-3xl font-black text-aramco-navy uppercase tracking-tighter">These are structural issues. <br />Installing software without redesigning operations does not solve them.</p>
          </div>
        </div>
      </section>

      {/* Philosophy: Structure Before Software */}
      <section className="py-32 bg-aramco-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-aramco-teal/10 skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="aramco-label text-white/40">Our Philosophy</span>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 uppercase tracking-tighter leading-none">
                Structure <br />Before Software
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                Many ERP implementations fail because companies buy software first and ask questions later. We do the opposite. We start with structure.
              </p>
              <div className="space-y-8">
                {[
                  'Processes must be engineered before they are automated',
                  'ERP must mirror business logic, not force artificial workflows',
                  'Internal controls must be embedded into daily operations',
                  'Reporting must support executive decision-making'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6">
                    <div className="w-10 h-10 bg-aramco-teal text-white flex items-center justify-center shrink-0">
                      <ArrowRight size={20} />
                    </div>
                    <span className="text-lg font-black uppercase tracking-widest text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-16 flex flex-col justify-center">
                <ShieldCheck size={64} className="text-aramco-teal mb-8" />
                <h3 className="text-3xl font-black text-aramco-navy mb-6 uppercase tracking-tighter leading-none">"This is operational transformation — not software installation."</h3>
                <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em] font-black">Logic-Unit Core Belief</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="aramco-label mx-auto">The Framework</span>
            <h2 className="text-4xl lg:text-6xl font-black text-aramco-navy mb-8 uppercase tracking-tighter">Our Operational <br />Transformation Framework</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
              We combine consulting depth with technical execution.
            </p>
          </div>
          
          <div className="space-y-px bg-slate-200">
            {[
              { 
                title: "1. Process Engineering", 
                desc: "We map your current operations in detail: Procurement flows, Inventory movements, Sales cycles, Inter-branch transfers, Approval hierarchies, Reporting gaps. We identify inefficiencies and design a future-state workflow that supports scale.",
                objective: "Create a structured operations framework that removes bottlenecks and supports growth."
              },
              { 
                title: "2. ERP Configuration Around Your Business Model", 
                desc: "ERP should not dictate how you work. It should support how you work — correctly. We implement and configure ERP systems specifically for distribution and trading environments, including multi-branch control, batch tracking, and purchase-to-sale integration.",
                objective: "Governance and transparency. Not just data entry."
              },
              { 
                title: "3. Workflow Automation That Removes Bottlenecks", 
                desc: "Manual approvals slow down operations and increase risk. We automate purchase requests, credit limit validation, inventory transfers, and sales order confirmations.",
                objective: "Policy-driven decisions, reduced dependency on individuals, faster operational cycles."
              },
              { 
                title: "4. Internal Controls and Governance Systems", 
                desc: "Growth without control creates financial and operational risk. We implement segregation of duties, role-based system access, automated audit trails, and exception reporting dashboards.",
                objective: "Strengthen governance across your ERP environment. Operational control is about discipline."
              },
              { 
                title: "5. Executive Reporting and Real-Time Visibility", 
                desc: "Leaders need clarity. We build executive dashboards that provide real-time inventory positions, branch performance comparisons, margin tracking, and cash flow visibility.",
                objective: "Decisions shift from reactive to strategic. You see the business clearly."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-16 hover:bg-aramco-gray transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-black text-aramco-navy uppercase tracking-tighter mb-6">{item.title}</h3>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                  <div className="bg-aramco-navy p-10 text-white flex flex-col justify-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4">The Objective</span>
                    <p className="text-lg font-black uppercase tracking-tighter leading-tight">{item.objective}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Changes After Implementation */}
      <section className="py-32 bg-aramco-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="aramco-label">The Outcome</span>
              <h2 className="text-4xl lg:text-6xl font-black text-aramco-navy mb-10 uppercase tracking-tighter leading-none">
                What Changes After <br />Implementation
              </h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
                When structure replaces chaos, the shift is visible. Inventory discrepancies reduce. Approvals move faster. Owners step out of daily bottlenecks. Data becomes reliable. Branches align operationally.
              </p>
              <div className="bg-aramco-navy p-12 text-white">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Most importantly:</h3>
                <p className="text-4xl font-black text-aramco-teal uppercase tracking-tighter">The business <br />becomes scalable.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                'Inventory discrepancies reduce',
                'Approvals move faster',
                'Owners step out of daily bottlenecks',
                'Data becomes reliable',
                'Branches align operationally'
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-6 bg-white p-8 border-l-4 border-aramco-teal shadow-sm">
                  <CheckCircle2 className="text-aramco-teal w-8 h-8 shrink-0" />
                  <span className="text-lg font-black uppercase tracking-widest text-aramco-navy">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="aramco-label mx-auto">Our Identity</span>
            <h2 className="text-4xl lg:text-6xl font-black text-aramco-navy mb-8 uppercase tracking-tighter">Why Distribution and Trading <br />Businesses Choose Logic-Unit</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
              We are not a generic software company. We are operational architects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-200">
            {[
              { title: 'Distribution Workflows', desc: 'Deep understanding of high-volume inventory and trading operations.' },
              { title: 'ERP Expertise', desc: 'Technical mastery of ERP implementation and configuration.' },
              { title: 'Process Redesign', desc: 'Capability to engineer workflows that support growth.' },
              { title: 'Internal Controls', desc: 'Experience in structuring governance and governance systems.' }
            ].map((item, idx) => (
              <div key={idx} className="p-12 bg-white hover:bg-aramco-navy group transition-colors">
                <h4 className="font-black text-aramco-navy mb-6 uppercase text-xs tracking-[0.2em] group-hover:text-aramco-teal">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
              We work directly with decision-makers. We ask difficult operational questions. And we design systems that last.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-aramco-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="aramco-label mx-auto">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-black text-aramco-navy mb-8 uppercase tracking-tighter">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-8">
            {[
              { 
                q: "What is ERP for distribution companies?", 
                a: "It is a structured business management system that integrates inventory, procurement, sales, reporting, and internal controls across branches." 
              },
              { 
                q: "Why do trading businesses lose operational control?", 
                a: "Because growth increases complexity without increasing structure. Informal processes cannot scale." 
              },
              { 
                q: "Can ERP solve inventory mismatches?", 
                a: "Only when configured correctly with validation rules, workflow automation, and internal controls." 
              },
              { 
                q: "How do we reduce dependency on owners?", 
                a: "By implementing role-based approvals, automated workflows, and structured reporting systems." 
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-12 border border-slate-100">
                <h4 className="text-xl font-black text-aramco-navy uppercase tracking-tighter mb-4">{faq.q}</h4>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Message */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="aramco-label mx-auto">Direct Dialogue</span>
          <h2 className="text-4xl lg:text-6xl font-black text-aramco-navy mb-12 uppercase tracking-tighter">A Direct Message to <br />Business Owners</h2>
          <div className="space-y-8 text-2xl text-slate-600 font-medium leading-relaxed">
            <p>If your business feels heavier as it grows, you are not alone.</p>
            <p>Growth without structure creates operational stress.</p>
            <p>You do not need more spreadsheets.</p>
            <p className="text-aramco-navy font-black uppercase tracking-tighter text-4xl">You need a system that supports scale. <br />We help you build it.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-aramco-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="aramco-label mx-auto">Next Steps</span>
          <h2 className="text-4xl lg:text-5xl font-black text-aramco-navy mb-8 uppercase tracking-tighter">Start With an <br />Operational Assessment</h2>
          <p className="text-xl text-slate-600 mb-12 font-medium leading-relaxed">
            We begin with a structured operational review to identify process gaps, control weaknesses, and reporting blind spots.
          </p>
          <Link to="/contact" className="btn-aramco-primary text-lg px-12 py-6">
            Request Operational Audit
          </Link>
          <p className="mt-12 text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Operational control is not optional. It is foundational.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
