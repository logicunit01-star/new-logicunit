
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';
import Home from './pages/Home';
import Transformation from './pages/Transformation';
import ERP from './pages/ERP';
import Industries from './pages/Industries';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import WhyChooseUs from './pages/WhyChooseUs';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Transformation', path: '/transformation' },
    { name: 'ERP Solutions', path: '/systems' },
    { name: 'Industries', path: '/industries' },
    { name: 'Experience', path: '/experience' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed w-full bg-white border-b border-slate-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-aramco-navy flex items-center justify-center transition-all group-hover:bg-aramco-teal">
              <span className="text-white font-black text-2xl">L</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-aramco-navy uppercase leading-none">Logic Unit</span>
              <span className="text-[9px] font-black tracking-[0.4em] text-aramco-teal uppercase leading-none mt-1.5">Operational Excellence</span>
            </div>
          </Link>

          <div className="hidden xl:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all hover:text-aramco-teal relative py-2 ${
                  location.pathname === link.path 
                    ? 'text-aramco-teal after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-aramco-teal' 
                    : 'text-aramco-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-aramco-navy text-white px-8 py-4 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-aramco-teal transition-all ml-4"
            >
              Book Audit
            </Link>
          </div>

          <button className="xl:hidden p-2 text-aramco-navy" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-slate-100 px-6 pt-4 pb-10 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-4 text-sm font-black text-aramco-navy hover:text-aramco-teal uppercase tracking-[0.2em] border-b border-slate-50"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-aramco-navy text-white text-center py-5 font-black uppercase tracking-[0.2em] mt-6"
          >
            Book Audit
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-aramco-navy text-slate-300 py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-24 border-b border-white/10 pb-24">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-12 bg-white flex items-center justify-center">
              <span className="text-aramco-navy font-black text-2xl">L</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">Logic Unit</span>
              <span className="text-[10px] font-black tracking-[0.4em] text-aramco-teal uppercase leading-none mt-1.5">Operational Excellence</span>
            </div>
          </div>
          <p className="max-w-md mb-12 text-slate-400 text-lg font-medium leading-relaxed">
            A specialized operational transformation partner for growing distribution and trading businesses. 
            Moving enterprises from operational chaos to structured systems control.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-white/40 hover:text-aramco-teal transition-colors"><Linkedin size={28} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-black mb-10 uppercase text-[10px] tracking-[0.4em]">Solutions</h4>
          <ul className="space-y-6 text-xs font-black uppercase tracking-widest">
            <li><Link to="/transformation" className="hover:text-aramco-teal transition-colors">Process Redesign</Link></li>
            <li><Link to="/systems" className="hover:text-aramco-teal transition-colors">Custom ERP Development</Link></li>
            <li><Link to="/transformation" className="hover:text-aramco-teal transition-colors">ERP Customization</Link></li>
            <li><Link to="/industries" className="hover:text-aramco-teal transition-colors">Executive Dashboards</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-10 uppercase text-[10px] tracking-[0.4em]">Contact</h4>
          <ul className="space-y-6 text-xs font-black uppercase tracking-widest">
            <li className="flex items-center space-x-4">
              <MapPin size={20} className="text-aramco-teal" />
              <span className="text-white">Lahore, Pakistan</span>
            </li>
            <li className="flex items-center space-x-4">
              <Mail size={20} className="text-aramco-teal" />
              <span className="text-white">advisory@logicunit.com</span>
            </li>
            <li className="flex items-center space-x-4">
              <Phone size={20} className="text-aramco-teal" />
              <span className="text-white">+92 (0) 42 35XX XXXX</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-16 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
        <p>© {new Date().getFullYear()} Logic Unit Private Limited. All Rights Reserved.</p>
        <div className="flex space-x-12 mt-8 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transformation" element={<Transformation />} />
            <Route path="/systems" element={<ERP />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
