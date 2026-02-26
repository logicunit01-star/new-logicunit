
import React from 'react';
import { Package, Truck, Factory, Building2, ShoppingCart, Briefcase } from 'lucide-react';

const Industries: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">Custom ERP Software Development for Distribution & Trading</h1>
          <p className="text-xl text-slate-600 max-w-3xl font-light">
            We provide specialized <strong>custom erp development services</strong> for high-volume, multi-transactional businesses where inventory velocity and cash cycle visibility are paramount.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 border border-slate-200">
              <Package className="text-blue-600 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">FMCG & Consumer Goods</h3>
              <p className="text-slate-600 mb-6">High turnover distribution requiring tight expiry tracking and route-to-market visibility.</p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>• Batch & Expiry Management</li>
                <li>• Route Sales Tracking</li>
                <li>• Retail Outlet Performance</li>
              </ul>
            </div>
            <div className="bg-white p-10 border border-slate-200">
              <Truck className="text-blue-600 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Industrial & Parts Supplies</h3>
              <p className="text-slate-600 mb-6">Complex SKU catalogs with thousands of variations and cross-reference requirements.</p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>• Technical SKU Management</li>
                <li>• Multi-tier Pricing Strategies</li>
                <li>• Reorder Point Optimization</li>
              </ul>
            </div>
            <div className="bg-white p-10 border border-slate-200">
              <Building2 className="text-blue-600 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">General Trading Houses</h3>
              <p className="text-slate-600 mb-6">Businesses moving large volumes of diverse goods with complex import/export documentation.</p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>• Landed Cost Calculation</li>
                <li>• Multi-currency Accounting</li>
                <li>• Branch Reconciliation</li>
              </ul>
            </div>
            <div className="bg-white p-10 border border-slate-200">
              <Factory className="text-blue-600 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Construction & Materials</h3>
              <p className="text-slate-600 mb-6">Managing bulky inventory, project-based deliveries, and credit-heavy sales cycles.</p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>• Credit Limit Controls</li>
                <li>• Delivery Fleet Tracking</li>
                <li>• Project Cost Centers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 p-12 lg:p-20 text-white flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 italic">Addressing the "Cash Cycle Gap"</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Distribution businesses live and die by their cash cycle. We implement systems that provide 100% visibility into:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Credit Sales Tracking', 'Purchase Forecasting', 'Dead Stock Control', 'Branch Cash Reconciliation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-800 p-4 rounded-sm">
                    <CheckCircle2 className="text-blue-400" size={18} />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 text-center lg:text-right">
               <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Specialized For</p>
               <p className="text-3xl font-bold text-white">Pakistan SME Sector</p>
               <p className="text-slate-400 mt-4 text-sm max-w-xs ml-auto">Localized for specific regional trading practices and tax compliance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckCircle2 = ({ className, size }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

export default Industries;
