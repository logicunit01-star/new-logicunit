
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/operational-depth/1920/1080?grayscale" 
            alt="Operational Depth" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aramco-navy/90 via-aramco-navy/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="aramco-label text-white/60">Built on Experience</span>
            <h1 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tighter">Real Operational <br />Experience</h1>
            <p className="text-xl lg:text-2xl text-white/80 font-medium leading-relaxed">
              Our authority does not come from writing code. It comes from years of working inside distribution and trading environments.
            </p>
          </div>
        </div>
      </section>

      {/* Pressure Points */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="aramco-label">Understanding Reality</span>
              <h2 className="text-4xl lg:text-5xl font-black text-aramco-navy mb-10 uppercase tracking-tighter leading-none">
                Operational <br />Pressure Points
              </h2>
              <ul className="space-y-8">
                {[
                  "The cash cycle gap that quietly drains working capital",
                  "Inventory that fails in physical audits",
                  "Approval bottlenecks that slow procurement",
                  "Branches operating without unified control",
                  "Owners forced into daily exception management"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-6">
                    <CheckCircle2 className="text-aramco-teal w-8 h-8 shrink-0 mt-1" />
                    <span className="text-xl text-slate-600 font-medium leading-tight">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-aramco-gray p-16 border-l-8 border-aramco-teal group">
              <p className="text-3xl font-black text-aramco-navy uppercase tracking-tighter leading-none mb-10">
                "We don’t approach businesses as software vendors. We approach them as operational architects."
              </p>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                Before structure, we analyze reality. Before systems, we design control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-aramco-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { label: "15+ Years", sub: "Operational Experience across distribution and trading." },
              { label: "50+", sub: "Structured Systems Delivered around business logic." },
              { label: "100%", sub: "Client Retention through operational clarity." },
              { label: "ZERO", sub: "Failed Transformations. We measure success by adoption." }
            ].map((stat, idx) => (
              <div key={idx} className="bg-aramco-navy p-12 hover:bg-white/5 transition-colors">
                <h3 className="text-5xl font-black mb-6 text-aramco-teal tracking-tighter uppercase">{stat.label}</h3>
                <p className="text-slate-400 font-medium text-sm leading-relaxed uppercase tracking-widest">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-aramco-gray p-16 md:p-24 border border-slate-100 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-aramco-teal"></div>
            <span className="aramco-label">Our Promise</span>
            <h2 className="text-4xl md:text-6xl font-black text-aramco-navy mb-12 uppercase tracking-tighter leading-none">The Logic Unit <br />Commitment</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <p className="text-2xl text-slate-600 leading-relaxed mb-12 font-medium">
                  We take full ownership of structured system adoption. If your team does not operate confidently within the redesigned system, our work is not finished.
                </p>
                <div className="space-y-6">
                  {[
                    "True transformation is not installation.",
                    "It is behavioral change.",
                    "It is operational discipline.",
                    "It is leadership visibility."
                  ].map((line, idx) => (
                    <div key={idx} className="flex items-center space-x-4 text-aramco-teal font-black uppercase tracking-widest text-sm">
                      <ArrowRight size={20} />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-end items-end text-right">
                <div className="border-t-4 border-aramco-navy pt-8">
                  <p className="text-2xl font-black text-aramco-navy uppercase tracking-tighter">Lead Advisory Team</p>
                  <p className="text-sm font-black text-aramco-teal uppercase tracking-[0.3em] mt-2">Logic Unit Private Limited</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
