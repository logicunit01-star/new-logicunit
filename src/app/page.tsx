import React from 'react';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { HOME_CONTENT } from '@/constants/content';
import { ROUTES } from '@/constants/routes';
import Image from "next/image";
import heroImg from "../assets/images/lu-erp-hero.jpg";
import whoWeServeImg from "../assets/images/who-we-serve.jpg";


const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="Industrial Operations"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/95 via-[#000000]/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/60 mb-6 block uppercase">{HOME_CONTENT.hero.badge}</span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-8 tracking-tight">
              {HOME_CONTENT.hero.title}  <span className="text-[#75BF2A]">{HOME_CONTENT.hero.titleAccent}</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/75 mb-12 leading-relaxed font-normal max-w-xl">
              {HOME_CONTENT.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={ROUTES.CONTACT} className="btn-aramco-primary">
                {HOME_CONTENT.hero.ctaPrimary}
              </Link>
              <Link href={ROUTES.EXPERIENCE} className="btn-aramco-outline border-white text-white hover:bg-white hover:text-[#0D1B2A]">
                {HOME_CONTENT.hero.ctaSecondary}
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
              <span className="aramco-label">{HOME_CONTENT.reality.label}</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-8 leading-tight tracking-tight">
                {HOME_CONTENT.reality.title.split(' <br />')[0]} <br />{HOME_CONTENT.reality.title.split(' <br />')[1]}
              </h2>
              <p className="text-xl text-[#4A6080] mb-12 leading-relaxed">
                {HOME_CONTENT.reality.description}
              </p>
              <div className="space-y-5 border-l-2 border-[#D6E4F0] pl-8">
                {HOME_CONTENT.reality.points.map((point, i) => (
                  <p key={i} className="text-base text-[#6B84A0] font-medium">{point}</p>
                ))}
              </div>
            </div>

            <div className="bg-[#F4F7FB] p-12 border-l-4 border-[#0062B2]">
              <h3 className="text-2xl font-bold text-[#0D1B2A] leading-tight mb-8">
                {HOME_CONTENT.reality.summaryTitle.split(' <br />')[0]} <br />{HOME_CONTENT.reality.summaryTitle.split(' <br />')[1]}
              </h3>
              <p className="text-base text-[#4A6080] leading-relaxed mb-10">
                {HOME_CONTENT.reality.summaryText}
              </p>
              <div className="pt-8 border-t border-[#D6E4F0]">
                <p className="text-xs font-black text-[#0062B2] uppercase tracking-[0.3em]">{HOME_CONTENT.reality.footerNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-32 bg-[#0D1B2A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-white/30 mb-6 block uppercase">{HOME_CONTENT.whoWeServe.label}</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
                {HOME_CONTENT.whoWeServe.title}
              </h2>
              <p className="text-base text-[#9AAFCA] mb-12 leading-relaxed">
                {HOME_CONTENT.whoWeServe.description}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {HOME_CONTENT.whoWeServe.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-5 bg-white/5 p-5 border-l-2 border-[#75BF2A]">
                    <div className="w-8 h-8 bg-[#75BF2A]/10 text-[#75BF2A] flex items-center justify-center shrink-0">
                      <ChevronRight size={14} />
                    </div>
                    <span className="text-sm font-medium text-[#C8D8EC]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={whoWeServeImg}
                alt="Warehouse Operation"
                className="w-full h-full object-cover opacity-100"
                referrerPolicy="no-referrer"
              />
              {/* <div className="absolute inset-0 bg-[#0D1B2A]/0"></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* What Actually Breaks */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="aramco-label mx-auto">The Breaking Point</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-6 leading-tight tracking-tight">What Actually Breaks When <br />Distribution Companies Grow</h2>
            <p className="text-base text-[#6B84A0] max-w-2xl mx-auto">
              At 5 employees, informal systems work. At 50 employees, they collapse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#D6E4F0]">
            {[
              { title: "Inventory Mismatches", desc: "Stock numbers in the system don't match physical reality. Adjustments become normal." },
              { title: "Excel Dependency", desc: "Critical data lives in spreadsheets owned by individuals. Version control becomes impossible." },
              { title: "Manual Approval Bottlenecks", desc: "Purchase approvals sit in inboxes. Orders wait for sign-offs." },
              { title: "No Real-Time Branch Visibility", desc: "Head office doesn't know what's happening daily." },
              { title: "Owner-Dependent Decisions", desc: "Every exception requires escalation. Strategic work is replaced by operational firefighting." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 hover:bg-[#F4F7FB] transition-all group cursor-default">
                <span className="text-5xl font-light text-[#D6E4F0] mb-8 block group-hover:text-[#0062B2] transition-colors">0{idx + 1}</span>
                <h4 className="text-base font-bold text-[#0D1B2A] mb-4 leading-tight">{item.title}</h4>
                <p className="text-[#6B84A0] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-0 bg-[#0062B2] p-16 text-center">
            <p className="text-2xl font-bold text-white leading-relaxed">These are structural issues. <br />Installing software without redesigning operations does not solve them.</p>
          </div>
        </div>
      </section>

      {/* Philosophy: Structure Before Software */}
      <section className="py-32 bg-[#F4F7FB] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="aramco-label">Our Philosophy</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-8 leading-tight tracking-tight">
                Structure <br />Before Software
              </h2>
              <p className="text-base text-[#4A6080] mb-12 leading-relaxed">
                Many ERP implementations fail because companies buy software first and ask questions later. We do the opposite. We start with structure.
              </p>
              <div className="space-y-6">
                {[
                  'Processes must be engineered before they are automated',
                  'ERP must mirror business logic, not force artificial workflows',
                  'Internal controls must be embedded into daily operations',
                  'Reporting must support executive decision-making'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5">
                    <div className="w-2 h-2 bg-[#0062B2] mt-2.5 shrink-0"></div>
                    <span className="text-base font-medium text-[#1E3A5F]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#0D1B2A] p-16 flex flex-col justify-center">
                <ShieldCheck size={48} className="text-[#75BF2A] mb-8" />
                <h3 className="text-xl font-bold text-white mb-6 leading-relaxed">"This is operational transformation — not software installation."</h3>
                <p className="text-[#9AAFCA] text-xs font-bold tracking-[0.2em] uppercase">Logic-Unit Core Belief</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-24">
            <span className="aramco-label">The Framework</span>
            <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-5xl lg:text-6xl font-black text-[#0D1B2A] leading-[1.05] tracking-tight max-w-xl">
                Operational Transformation Framework
              </h2>
              <p className="text-sm text-[#6B84A0] max-w-xs leading-relaxed lg:mb-2 lg:text-right">
                We combine consulting depth<br />with technical execution.
              </p>
            </div>
            {/* Full-width rule */}
            <div className="mt-10 h-px bg-[#D6E4F0]" />
          </div>

          {/* Sticky stacking cards */}
          <div className="relative">
            {[
              {
                title: "Process Engineering",
                desc: "We map your current operations in detail: Procurement flows, Inventory movements, Sales cycles, Inter-branch transfers, Approval hierarchies, Reporting gaps. We identify inefficiencies and design a future-state workflow that supports scale.",
                objective: "Create a structured operations framework that removes bottlenecks and supports growth."
              },
              {
                title: "ERP Configuration Around Your Business Model",
                desc: "ERP should not dictate how you work. It should support how you work — correctly. We implement and configure ERP systems specifically for distribution and trading environments, including multi-branch control, batch tracking, and purchase-to-sale integration.",
                objective: "Governance and transparency. Not just data entry."
              },
              {
                title: "Workflow Automation That Removes Bottlenecks",
                desc: "Manual approvals slow down operations and increase risk. We automate purchase requests, credit limit validation, inventory transfers, and sales order confirmations.",
                objective: "Policy-driven decisions, reduced dependency on individuals, faster operational cycles."
              },
              {
                title: "Internal Controls and Governance Systems",
                desc: "Growth without control creates financial and operational risk. We implement segregation of duties, role-based system access, automated audit trails, and exception reporting dashboards.",
                objective: "Strengthen governance across your ERP environment. Operational control is about discipline."
              },
              {
                title: "Executive Reporting and Real-Time Visibility",
                desc: "Leaders need clarity. We build executive dashboards that provide real-time inventory positions, branch performance comparisons, margin tracking, and cash flow visibility.",
                objective: "Decisions shift from reactive to strategic. You see the business clearly."
              }
            ].map((item, idx, arr) => (
              <div
                key={idx}
                className="sticky group overflow-hidden"
                style={{
                  top: `${idx * 52}px`,
                  zIndex: idx + 1,
                }}
              >
                {/* Top accent bar — only visible on hover */}
                <div className="h-[3px] bg-gradient-to-r from-[#0062B2] to-[#00A3E0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="grid grid-cols-1 lg:grid-cols-12 bg-white shadow-[0_4px_24px_-4px_rgba(0,98,178,0.08)] border border-[#E8F0F8] rounded-xl overflow-hidden">

                  {/* Step number — narrow left column */}
                  <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center py-10 border-r border-[#E8F0F8] bg-[#F8FAFC]">
                    <span className="text-[11px] font-black tracking-[0.2em] text-[#0062B2]/40 uppercase [writing-mode:vertical-rl] rotate-180">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="lg:col-span-7 p-10 lg:p-12 group-hover:bg-[#FAFCFF] transition-colors duration-300">
                    {/* Mobile step number */}
                    <span className="lg:hidden text-[9px] font-black tracking-[0.3em] text-[#0062B2]/40 uppercase mb-3 block">
                      {String(idx + 1).padStart(2, "0")} / {String(arr.length).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg lg:text-xl font-black text-[#0D1B2A] leading-snug mb-5 group-hover:text-[#0062B2] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-[#4A6080] leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Objective panel */}
                  <div className="lg:col-span-4 relative bg-[#0062B2] p-10 lg:p-12 text-white flex flex-col justify-center overflow-hidden">
                    {/* Background texture */}
                    <div className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: "24px 24px"
                      }}
                    />
                    <div className="relative z-10">
                      <span className="text-[9px] font-black tracking-[0.3em] text-white/40 uppercase mb-5 block">
                        The Objective
                      </span>
                      {/* Teal rule */}
                      <div className="w-8 h-[2px] bg-white/20 mb-5" />
                      <p className="text-[15px] font-semibold leading-relaxed text-white/90">
                        {item.objective}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}

            <div style={{ height: `${4 * 52}px` }} />
          </div>

        </div>
      </section>

      {/* What Changes After Implementation */}
      <section className="py-32 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="aramco-label">The Outcome</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-8 leading-tight tracking-tight">
                What Changes After <br />Implementation
              </h2>
              <p className="text-base text-[#4A6080] mb-12 leading-relaxed">
                When structure replaces chaos, the shift is visible. Inventory discrepancies reduce. Approvals move faster. Owners step out of daily bottlenecks. Data becomes reliable. Branches align operationally.
              </p>
              <div className="bg-[#0D1B2A] p-12 text-white">
                <h3 className="text-lg font-bold mb-4 text-white/60 uppercase tracking-widest text-xs">Most importantly:</h3>
                <p className="text-3xl font-bold text-[#75BF2A]">The business <br />becomes scalable.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px bg-[#D6E4F0]">
              {[
                'Inventory discrepancies reduce',
                'Approvals move faster',
                'Owners step out of daily bottlenecks',
                'Data becomes reliable',
                'Branches align operationally'
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-6 bg-white p-7 border-l-4 border-[#0062B2]">
                  <CheckCircle2 className="text-[#0062B2] w-6 h-6 shrink-0" />
                  <span className="text-sm font-semibold text-[#0D1B2A]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="aramco-label mx-auto">Our Identity</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-6 leading-tight tracking-tight">Why Distribution and Trading <br />Businesses Choose Logic-Unit</h2>
            <p className="text-base text-[#6B84A0] max-w-2xl mx-auto">
              We are not a generic software company. We are operational architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#D6E4F0]">
            {[
              { title: 'Distribution Workflows', desc: 'Deep understanding of high-volume inventory and trading operations.' },
              { title: 'ERP Expertise', desc: 'Technical mastery of ERP implementation and configuration.' },
              { title: 'Process Redesign', desc: 'Capability to engineer workflows that support growth.' },
              { title: 'Internal Controls', desc: 'Experience in structuring governance and governance systems.' }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-white hover:bg-[#F4F7FB] transition-all group cursor-default">
                <div className="w-8 h-[2px] bg-[#0062B2] mb-8 group-hover:w-16 transition-all duration-300"></div>
                <h4 className="font-bold text-[#0D1B2A] mb-4 text-base group-hover:text-[#0062B2] transition-colors">{item.title}</h4>
                <p className="text-[#6B84A0] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 border-t border-[#D6E4F0] pt-16 text-center">
            <p className="text-base text-[#4A6080] max-w-2xl mx-auto leading-relaxed">
              We work directly with decision-makers. We ask difficult operational questions. And we design systems that last.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#F4F7FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="aramco-label mx-auto">FAQ</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-6 leading-tight tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-px bg-[#D6E4F0]">
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
              <div key={idx} className="bg-white p-10 border-l-4 border-transparent hover:border-[#0062B2] transition-all group">
                <h4 className="text-base font-bold text-[#0D1B2A] mb-4 group-hover:text-[#0062B2] transition-colors">{faq.q}</h4>
                <p className="text-sm text-[#4A6080] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Message */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Label */}
          <span className="aramco-label">Direct Dialogue</span>

          {/* Two-column layout: heading left, content right */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Sticky heading */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0D1B2A] tracking-tight leading-tight">
                A Direct Message<br />
                to Business<br />
                Owners
              </h2>
              {/* Decorative rule */}
              <div className="mt-8 w-12 h-1 bg-aramco-teal" />
            </div>

            {/* Right: Body copy */}
            <div className="space-y-6 text-lg text-[#4A6080] leading-relaxed">
              <p>
                If your business feels heavier as it grows, you are not alone.
              </p>
              <p>
                Growth without structure creates operational stress — missed handoffs, duplicated effort, decisions made on incomplete information.
              </p>
              <p>
                More spreadsheets are not the answer.
              </p>

              {/* Divider */}
              <div className="border-t border-slate-100 pt-6">
                <p className="text-[#0D1B2A] font-black text-2xl leading-snug">
                  You need a system that supports scale.
                </p>
                <p className="text-[#4A6080] text-lg mt-3">
                  We help you build it — without disrupting what already works.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#0062B2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 mb-6 block uppercase">Next Steps</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">Start With an <br />Operational Assessment</h2>
          <p className="text-base text-white/70 mb-14 leading-relaxed max-w-2xl mx-auto">
            We begin with a structured operational review to identify process gaps, control weaknesses, and reporting blind spots.
          </p>
          <Link href="/contact" className="inline-block bg-white text-[#0062B2] px-14 py-5 text-sm font-bold hover:bg-[#F4F7FB] transition-all tracking-widest uppercase">
            Request Operational Audit
          </Link>
          <p className="mt-14 text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Operational control is not optional. It is foundational.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
