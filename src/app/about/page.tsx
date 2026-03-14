
import React from 'react';
import Link from 'next/link';
import { Target, Users, ShieldCheck, Award, ArrowRight, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/about-logic/1920/1080?grayscale" 
            alt="About Logic-Unit" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aramco-navy/90 via-aramco-navy/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="aramco-label text-white/60">Our Story</span>
            <h1 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tighter">About <br />Logic-Unit</h1>
            <p className="text-xl lg:text-2xl text-white/80 font-medium leading-relaxed">
              We are not just a software company. We are an operational transformation partner for distribution and trading businesses seeking structured control.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="aramco-label">Purpose</span>
              <h2 className="text-4xl lg:text-5xl font-black text-aramco-navy mb-10 uppercase tracking-tighter leading-none">Our Mission</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
                To empower growing distribution businesses with the structural control they need to transition from founder-dependent operations to system-driven enterprises.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xs font-black text-slate-400 mb-4 uppercase tracking-[0.3em]">Vision</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">To be the primary authority in operational excellence for trading SMEs across the region.</p>
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-400 mb-4 uppercase tracking-[0.3em]">Commitment</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">We prioritize structure over features and business outcomes over technological novelty.</p>
                </div>
              </div>
            </div>
            <div className="bg-aramco-gray p-16 border border-slate-100 relative group">
               <div className="absolute top-0 left-0 w-2 h-full bg-aramco-teal"></div>
               <div className="mb-12">
                  <h3 className="text-xs font-black text-slate-400 mb-6 uppercase tracking-[0.3em]">Founder & Lead Advisor</h3>
                  <p className="text-2xl font-black text-aramco-navy mb-8 leading-tight uppercase tracking-tighter">
                    DISTRIBUTORS HAD PLENTY OF SOFTWARE VENDORS BUT VERY FEW TRANSFORMATION PARTNERS.
                  </p>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Our team brings decades of experience in supply chain, financial systems, and management consulting to the table, ensuring our advice is grounded in operational reality.
                  </p>
               </div>
               <div className="flex items-center gap-8">
                 <div className="w-20 h-20 bg-aramco-navy flex items-center justify-center text-white transition-colors group-hover:bg-aramco-teal">
                   <Users size={32} />
                 </div>
                 <div>
                   <p className="text-xl font-black text-aramco-navy uppercase tracking-tighter">Expert Team</p>
                   <p className="text-[10px] text-aramco-teal uppercase tracking-[0.3em] font-black">Process & ERP Specialists</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-32 bg-aramco-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-24">
             <span className="aramco-label mx-auto">Values</span>
             <h2 className="text-4xl lg:text-6xl font-black text-aramco-navy uppercase tracking-tighter">Our Core Principles</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
             {[
               { title: 'Authority through Methodology', desc: 'We follow a proven framework, not intuition.', icon: <Target className="text-aramco-teal" size={40} /> },
               { title: 'Long-term Ownership', desc: 'We take responsibility for system adoption.', icon: <ShieldCheck className="text-aramco-teal" size={40} /> },
               { title: 'Result Transparency', desc: 'Success is measured by reduced chaos and higher margins.', icon: <Award className="text-aramco-teal" size={40} /> },
             ].map((p, i) => (
               <div key={i} className="bg-white p-16 hover:bg-aramco-navy group transition-colors">
                 <div className="mb-10 group-hover:scale-110 transition-transform">{p.icon}</div>
                 <h4 className="text-xl font-black mb-6 text-aramco-navy group-hover:text-white uppercase tracking-tighter">{p.title}</h4>
                 <p className="text-slate-500 group-hover:text-white/60 leading-relaxed font-medium">{p.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Knowledge Hub */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="aramco-label">Insights</span>
              <h2 className="text-4xl lg:text-6xl font-black text-aramco-navy mb-6 uppercase tracking-tighter leading-none">Operational <br />Excellence Hub</h2>
              <p className="text-xl text-slate-600 font-medium">Sharing our expertise in <strong>custom erp software development</strong>.</p>
            </div>
            <Link href="/contact" className="text-aramco-teal font-black flex items-center gap-3 hover:text-aramco-navy transition-colors text-sm uppercase tracking-[0.2em]">
              View All Insights <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            {[
              { 
                tag: 'Strategy', 
                title: 'The Hidden Cost of Off-the-Shelf ERPs', 
                desc: 'Why generic systems often fail distribution businesses and how <strong>customized erp solutions</strong> provide a better ROI.' 
              },
              { 
                tag: 'Operations', 
                title: 'Eliminating the Cash Cycle Gap', 
                desc: 'How to use <strong>customized erp software</strong> to gain 100% visibility into your branch cash flows and credit sales.' 
              },
              { 
                tag: 'Technology', 
                title: 'The Future of Custom ERP Integration', 
                desc: 'Exploring the impact of <strong>custom erp integration services</strong> on multi-warehouse inventory management.' 
              },
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer bg-white p-12 hover:bg-aramco-gray transition-colors">
                <div className="aspect-video bg-aramco-gray mb-10 overflow-hidden relative">
                   <img src={`https://picsum.photos/seed/insight-${i}/600/400?grayscale`} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                   <div className="absolute top-0 left-0 bg-aramco-navy text-white px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em]">{post.tag}</div>
                </div>
                <h4 className="text-2xl font-black mb-6 text-aramco-navy group-hover:text-aramco-teal transition-colors leading-tight uppercase tracking-tighter" dangerouslySetInnerHTML={{ __html: post.title }}></h4>
                <p className="text-slate-500 leading-relaxed mb-10 font-medium text-sm" dangerouslySetInnerHTML={{ __html: post.desc }}></p>
                <div className="flex items-center gap-3 text-[10px] font-black text-aramco-navy uppercase tracking-[0.3em] group-hover:translate-x-4 transition-transform">
                  Read Article <ChevronRight size={14} className="text-aramco-teal" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
