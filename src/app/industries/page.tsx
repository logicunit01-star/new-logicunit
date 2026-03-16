
import React from 'react';
import { Package, Truck, Factory, Building2, Briefcase, CheckCircle2, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import industriesImg from "../../assets/images/industry.jpg";
const Industries: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={industriesImg}
            alt="Industries"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aramco-navy/90 via-aramco-navy/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="aramco-label text-white/60">Who We Work With</span>
            <h1 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tighter">Operational Control <br />for Distribution</h1>
            <p className="text-xl lg:text-2xl text-white/80 font-medium leading-relaxed">
              If your business is expanding but operational pressure is increasing, you are exactly who we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-aramco-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            <div className="bg-white p-16 hover:bg-aramco-teal group transition-colors">
              <Package className="text-aramco-navy group-hover:text-white mb-10" size={48} />
              <h3 className="text-2xl font-black mb-6 text-aramco-navy group-hover:text-white uppercase tracking-tighter">Distribution Companies</h3>
              <p className="text-slate-600 group-hover:text-white/80 mb-10 leading-relaxed font-medium">Managing multi-location inventory where stock adjustments have become routine and physical counts rarely match reports.</p>
              <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" />Multi-branch Inventory</li>
                <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" />Real-time Reconciliation</li>
                <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" />Movement Logs</li>
              </ul>
            </div>
            <div className="bg-white p-16 hover:bg-aramco-teal group transition-colors">
              <Briefcase className="text-aramco-navy group-hover:text-white mb-10" size={48} />
              <h3 className="text-2xl font-black mb-6 text-aramco-navy group-hover:text-white uppercase tracking-tighter">Trading Businesses</h3>
              <p className="text-slate-600 group-hover:text-white/80 mb-10 leading-relaxed font-medium">Coordinating complex procurement and resale where decisions depend on availability and manual approval chains.</p>
              <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Workflow Automation</li>
                <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Landed Cost Accuracy</li>
                <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Margin Visibility</li>
              </ul>
            </div>
            <div className="bg-white p-16 hover:bg-aramco-teal group transition-colors">
              <Truck className="text-aramco-navy group-hover:text-white mb-10" size={48} />
              <h3 className="text-2xl font-black mb-6 text-aramco-navy group-hover:text-white uppercase tracking-tighter">Wholesale Operations</h3>
              <p className="text-slate-600 group-hover:text-white/80 mb-10 leading-relaxed font-medium">Scaling beyond informal systems where critical data lives in personal spreadsheets and version control has disappeared.</p>
              <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Centralized Master Data</li>
                <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Credit Enforcement</li>
                <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Sales Productivity</li>
              </ul>
            </div>
            <div className="bg-white p-16 hover:bg-aramco-teal group transition-colors">
              <Building2 className="text-aramco-navy group-hover:text-white mb-10" size={48} />
              <h3 className="text-2xl font-black mb-6 text-aramco-navy group-hover:text-white uppercase tracking-tighter">Owner-Led Companies</h3>
              <p className="text-slate-600 group-hover:text-white/80 mb-10 leading-relaxed font-medium">Transitioning into structured organizations where owners shift from daily firefighting to strategic leadership.</p>
              <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Role-based Governance</li>
                <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Exception Monitoring</li>
                <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Executive Dashboards</li>
              </ul>
            </div>
            <div className="bg-white p-16 hover:bg-aramco-teal group transition-colors lg:col-span-2">
              <Factory className="text-aramco-navy group-hover:text-white mb-10" size={48} />
              <h3 className="text-2xl font-black mb-6 text-aramco-navy group-hover:text-white uppercase tracking-tighter">Industrial & Materials Trading</h3>
              <p className="text-slate-600 group-hover:text-white/80 mb-10 leading-relaxed font-medium">Managing bulky inventory and complex SKU catalogs where margin sensitivity and procurement complexity are high.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                  <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Technical SKU Management</li>
                  <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Multi-tier Pricing</li>
                </ul>
                <ul className="space-y-4 text-[10px] text-slate-400 group-hover:text-white/60 uppercase tracking-[0.3em] font-black">
                  <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Reorder Optimization</li>
                  <li className="flex items-center text-xs font-medium text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-white"><ChevronRight size={10} className="mr-2 text-aramco-teal transition-colors duration-300 group-hover:text-white" /> Project Cost Centers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cash Cycle Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-aramco-navy p-16 lg:p-24 text-white flex flex-col lg:flex-row gap-24 items-center relative overflow-hidden">
            <div className="absolute inset-0 aramco-gradient opacity-10"></div>
            <div className="flex-1 relative z-10">
              <span className="aramco-label text-white/40">Financial Control</span>
              <h2 className="text-4xl lg:text-5xl text-white font-black mb-10 uppercase tracking-tighter leading-none">Addressing the <br />"Cash Cycle Gap"</h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                Distribution businesses live and die by their cash cycle. We implement systems that provide 100% visibility.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {['Credit Sales Tracking', 'Purchase Forecasting', 'Dead Stock Control', 'Branch Cash Reconciliation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 bg-white/5 p-8 border border-white/10">
                    <CheckCircle2 className="text-aramco-teal" size={24} />
                    <span className="text-sm font-black uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 text-center lg:text-right relative z-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-6 font-black">Specialized For</p>
              <p className="text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-none">Pakistan <br />SME Sector</p>
              <p className="text-slate-400 text-lg font-medium max-w-xs lg:ml-auto leading-relaxed">Localized for specific regional trading practices and tax compliance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
