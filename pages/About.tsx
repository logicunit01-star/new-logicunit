
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, ShieldCheck, Award, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 uppercase tracking-tighter">About Logic Unit</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            We are a specialized <strong>custom erp software development company</strong> and operational transformation partner. We don't just build code; we build the <strong>customized erp solutions</strong> that drive enterprise-level performance.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                To empower growing distribution businesses with the structural control they need to transition from founder-dependent operations to system-driven enterprises.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Vision</h4>
                  <p className="text-sm text-slate-500">To be the primary authority in operational excellence for trading SMEs across the region.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Commitment</h4>
                  <p className="text-sm text-slate-500">We prioritize structure over features and business outcomes over technological novelty.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-12 border border-slate-100">
               <div className="mb-8">
                  <div className="w-16 h-1 bg-slate-900 mb-6"></div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Founder & Lead Advisor</h3>
                  <p className="text-slate-600 mb-4">
                    Logic Unit was founded to address a critical gap: distributors had plenty of software vendors but very few transformation partners.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Our team brings decades of experience in supply chain, financial systems, and management consulting to the table, ensuring our advice is grounded in operational reality.
                  </p>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white">
                   <Users size={20} />
                 </div>
                 <div>
                   <p className="font-bold text-slate-900">Expert Team</p>
                   <p className="text-xs text-slate-500 uppercase tracking-widest">Process & ERP Specialists</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900">Our Core Principles</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: 'Authority through Methodology', desc: 'We follow a proven framework, not intuition.', icon: <Target className="text-blue-600" /> },
               { title: 'Long-term Ownership', desc: 'We take responsibility for system adoption.', icon: <ShieldCheck className="text-blue-600" /> },
               { title: 'Result Transparency', desc: 'Success is measured by reduced chaos and higher margins.', icon: <Award className="text-blue-600" /> },
             ].map((p, i) => (
               <div key={i} className="p-8 bg-white border border-slate-200">
                 <div className="mb-6">{p.icon}</div>
                 <h4 className="text-xl font-bold mb-4">{p.title}</h4>
                 <p className="text-slate-500 text-sm">{p.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* EEAT Strategy: Knowledge Hub / Thought Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Operational Excellence Hub</h2>
              <p className="text-slate-600">Sharing our expertise in <strong>custom erp software development</strong> and operational transformation to help SMEs scale with control.</p>
            </div>
            <Link to="/contact" className="text-blue-600 font-bold flex items-center gap-2 hover:underline">
              View All Insights <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-slate-100 mb-6 overflow-hidden relative">
                   <img src={`https://picsum.photos/seed/insight-${i}/600/400`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                   <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900">{post.tag}</div>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors" dangerouslySetInnerHTML={{ __html: post.title }}></h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: post.desc }}></p>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-tighter">
                  Read Article <ArrowRight size={14} />
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
