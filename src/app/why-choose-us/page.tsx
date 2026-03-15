
import React from 'react';
import { CheckCircle2, ArrowRight, XCircle } from 'lucide-react';
import Image from 'next/image';
import whyChooseUsImg from "../../assets/images/whyChoose.jpg";
import advantageImg from "../../assets/images/advantage.jpg";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={whyChooseUsImg}
            alt="Distribution Leaders"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="aramco-label text-white/60">Why Choose Us</span>
            <h1 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tighter">Distribution <br />Excellence</h1>
            <p className="text-xl lg:text-2xl text-white/80 font-medium leading-relaxed">
              Standard business software is built for average use cases. Distribution businesses are not average.
            </p>
          </div>
        </div>
      </section>

      {/* Distribution Challenges */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="aramco-label">The Reality</span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0D1B2A] mb-10 uppercase tracking-tighter leading-none">
                Distribution <br />Challenges
              </h2>
              <ul className="space-y-8">
                {[
                  "Multi-location inventory complexity",
                  "Thin margins requiring precise control",
                  "High transaction volume",
                  "Procurement-to-sales coordination",
                  "Branch-level accountability"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-6">
                    <CheckCircle2 className="text-[#0062B2] w-8 h-8 shrink-0 mt-1" />
                    <span className="text-xl text-slate-600 font-medium leading-tight">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F4F7FB] p-16 border-l-8 border-[#0062B2] group">
              <p className="text-3xl font-black text-[#0D1B2A] uppercase tracking-tighter leading-none mb-10">
                "When structure is imposed by rigid systems, businesses adapt unnaturally. And that creates friction."
              </p>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                We eliminate that friction through operational architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Standard Software Trap */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="aramco-label mx-auto">The Problem</span>
            <h2 className="text-4xl lg:text-6xl font-black text-[#0D1B2A] mb-6 uppercase tracking-tighter">The Standard Software Trap</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Many growing companies fall into predictable patterns:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D6E4F0]">
            {[
              { title: "Rigid Workflows", desc: "Workflows that force you to abandon proven operational practices." },
              { title: "Licensing Models", desc: "Models that increase cost as your team grows." },
              { title: "Generic Reporting", desc: "Reporting that hides operational blind spots." },
              { title: "Data Entry Priority", desc: "Systems that prioritize data entry over governance." },
              { title: "Complexity", desc: "Technology that replaces visibility with complexity." }
            ].map((trap, idx) => (
              <div key={idx} className="bg-white p-12 hover:bg-red-50 group transition-colors">
                <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <XCircle size={28} />
                </div>
                <h4 className="text-lg font-black text-[#0D1B2A] mb-4 uppercase tracking-widest">{trap.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{trap.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-24 text-center">
            <p className="text-3xl font-black text-[#0D1B2A] uppercase tracking-tighter">Standard software may digitize processes. <br />But it rarely creates operational control.</p>
          </div>
        </div>
      </section>

      {/* The Logic Unit Advantage */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src={advantageImg}
                alt="Advantage"
                className="w-full h-full object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="aramco-label">The Solution</span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0D1B2A] mb-10 uppercase tracking-tighter leading-none">The Logic Unit Advantage</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
                We design structured operational systems that align with your business model. Not the other way around.
              </p>
              <h4 className="text-xs font-black text-slate-400 mb-8 uppercase tracking-[0.3em]">Here's what changes:</h4>
              <div className="space-y-8">
                {[
                  "Workflows are mapped around your real trading operations",
                  "Inventory control reflects actual stock movement behavior",
                  "Branch reporting provides real-time operational clarity",
                  "Approval systems reduce bottlenecks without removing oversight",
                  "Internal controls are embedded into daily transactions"
                ].map((advantage, idx) => (
                  <div key={idx} className="flex items-center space-x-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0062B2] text-white flex items-center justify-center">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-xl text-slate-600 font-medium leading-tight">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Control Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0D1B2A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <span className="aramco-label text-white/40">Alignment</span>
            <h2 className="text-4xl lg:text-6xl font-black mb-10 uppercase tracking-tighter text-white leading-none">Structured Control <br />Over Generic Customization</h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              Many providers talk about customization. We focus on alignment. Alignment between process and system, responsibility and authority, inventory and financial reporting, growth and governance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            <div className="bg-[#0D1B2A] p-16 hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-black mb-8 text-[#75BF2A] uppercase tracking-widest">Predictability</h3>
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                This creates something far more valuable than customization. It creates predictability. And predictability is what allows distribution businesses to scale confidently.
              </p>
            </div>
            <div className="bg-[#0D1B2A] p-16 flex items-center justify-center hover:bg-white/5 transition-colors">
              <div className="text-center">
                <div className="text-8xl font-black text-[#75BF2A] mb-6 tracking-tighter">100%</div>
                <div className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Operational Alignment</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
