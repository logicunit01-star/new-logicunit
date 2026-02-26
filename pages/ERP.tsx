
import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Server, RefreshCw, BarChart4, ClipboardCheck, ArrowRight, Workflow } from 'lucide-react';

const ERP: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Custom ERP Software Development Services
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              We are a premier <strong>custom ERP development company</strong> specializing in building high-performance, <strong>customized ERP solutions</strong> that institutionalize your redesigned operational processes.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Infographic */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Custom ERP Development?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Off-the-shelf software forces you to change your business. Our <strong>custom erp development services</strong> change the software to fit your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200">
            <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-6 rounded-sm">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Zero Bloat</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Unlike generic platforms, our <strong>customized erp development</strong> focuses only on the features you need, ensuring a clean, fast, and intuitive user experience.
              </p>
            </div>
            <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-6 rounded-sm">
                <Workflow size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Seamless Workflows</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We specialize in <strong>customizing erp</strong> to mirror your exact operational SOPs, eliminating manual workarounds and data silos.
              </p>
            </div>
            <div className="p-10 hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-6 rounded-sm">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Scalable Growth</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our <strong>custom erp solutions</strong> grow with you. Add new modules, branches, or integrations as your business complexity increases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-8 border-slate-900 pl-6">
              Expert Custom ERP Software Development
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl">
              Most ERP failures happen because companies try to fit their broken processes into a software template. As a leading <strong>custom ERP software development company</strong>, we do the opposite. We fix the processes first, then provide <strong>custom erp development services</strong> to enforce them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Custom ERP Solutions', desc: 'Every field and workflow built for your specific trading model through our customized erp development process.', icon: <Server size={24} /> },
              { title: 'ERP Customization Services', desc: 'Tailoring existing platforms or building from scratch with extensive erp customization options.', icon: <Database size={24} /> },
              { title: 'Custom ERP Integration Services', desc: 'Connecting accounting, inventory, and sales into one unified loop with our customized erp services.', icon: <RefreshCw size={24} /> },
              { title: 'Custom ERP Feature Development', desc: 'Building unique modules that cut through the noise and provide customized erp solutions.', icon: <BarChart4 size={24} /> },
              { title: 'Customized ERP System', desc: 'Barcode-ready tracking for multi-warehouse distributors using a fully customized erp software.', icon: <ClipboardCheck size={24} /> },
              { title: 'Custom ERP Training', desc: 'Ensuring your team masters the customizing erp software for maximum operational control.', icon: <ArrowRight size={24} /> },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-100 bg-white hover:shadow-xl transition-all border-t-4 border-t-slate-900">
                <div className="text-blue-600 mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section (EEAT Strategy) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Off-the-Shelf vs. Custom ERP Development</h2>
              <p className="text-slate-600 mb-8">
                Choosing between a generic system and a <strong>custom erp solution</strong> is a critical strategic decision. Here is how our <strong>custom erp software development</strong> compares to standard market options.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Business Fit', custom: '100% Alignment', off: '60-70% Alignment' },
                  { label: 'Long-term Cost', custom: 'Lower (No recurring per-user fees)', off: 'Higher (Scaling costs)' },
                  { label: 'Competitive Edge', custom: 'Unique proprietary workflows', off: 'Same tools as competitors' },
                  { label: 'Integration', custom: 'Native & Seamless', off: 'Complex & Fragile' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-900 text-sm uppercase tracking-wider">{row.label}</span>
                    <div className="flex gap-8 text-sm">
                      <span className="text-blue-600 font-bold">Custom: {row.custom}</span>
                      <span className="text-slate-400">Off-the-shelf: {row.off}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/erp-dev/800/600" 
                alt="Custom ERP Software Development" 
                className="rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 max-w-xs hidden md:block">
                <p className="text-sm italic font-light">"Our <strong>customized erp</strong> approach reduced operational overhead by 40% for our last distribution client."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive (SEO Strategy) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Advanced ERP Customization Options</h2>
            <p className="text-slate-500">Deep-tier <strong>custom erp feature development</strong> for complex trading environments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-blue-600 font-bold">01</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Customizing ERP System for Multi-Branch</h4>
                <p className="text-slate-600 text-sm">Real-time stock reconciliation across multiple geographic locations with our <strong>customized erp system</strong>.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-blue-600 font-bold">02</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Custom ERP Integration Services</h4>
                <p className="text-slate-600 text-sm">Automated bank reconciliation and payment gateway integration through <strong>custom erp integration</strong>.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-blue-600 font-bold">03</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Customized ERP Services for Compliance</h4>
                <p className="text-slate-600 text-sm">Automated tax calculation and regulatory reporting built into your <strong>customized erp software</strong>.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-blue-600 font-bold">04</div>
              <div>
                <h4 className="text-xl font-bold mb-2">ERP Systems with Easy No-Code Customization</h4>
                <p className="text-slate-600 text-sm">Empower your admins with <strong>erp systems with easy no-code customization options</strong> for rapid field updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (AI Overview / Chatbot Strategy) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Custom ERP Development FAQ</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">What is the benefit of a custom ERP development company over a standard vendor?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A <strong>custom erp development company</strong> like Logic Unit builds software around your unique business processes. Standard vendors provide generic tools that often require expensive workarounds. Our <strong>custom erp development services</strong> ensure 100% process alignment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">How long does custom erp software development take?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A typical <strong>custom erp software development</strong> project ranges from 3 to 6 months depending on complexity. We use an agile <strong>customized erp development</strong> approach to deliver core modules early for immediate ROI.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Do you offer erp customization services for existing systems?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes, we provide extensive <strong>erp customization services</strong> and <strong>custom erp integration services</strong> to enhance your current infrastructure if a full rebuild is not required.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Is a customized erp system more expensive?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                While the initial investment in <strong>customized erp development</strong> may be higher, the long-term TCO (Total Cost of Ownership) is often lower due to the absence of recurring per-user licensing fees and the efficiency gains of a <strong>customized erp</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
             <div className="max-w-xl">
               <h2 className="text-3xl font-bold mb-4">Custom ERP Software Development is the Tool, Not the Goal</h2>
               <p className="text-slate-400">
                 A <strong>customized erp</strong> without structure is just a digital version of the chaos you already have. Let our <strong>custom erp development services</strong> help you build a foundation that actually lasts.
               </p>
             </div>
             <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 font-bold hover:bg-blue-500 transition-all rounded-sm uppercase tracking-widest text-sm">
               Discuss System Requirements
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

// Missing icons for the value prop section
const Target = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);

const TrendingUp = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);

export default ERP;
