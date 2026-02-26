
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';
import Home from './pages/Home';
import Transformation from './pages/Transformation';
import ERP from './pages/ERP';
import Industries from './pages/Industries';
import About from './pages/About';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Transformation', path: '/transformation' },
    { name: 'ERP Solutions', path: '/systems' },
    { name: 'Industries', path: '/industries' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed w-full bg-white border-b border-slate-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">Logic Unit</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-slate-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-slate-800 transition-all rounded-sm"
            >
              Book Audit
            </Link>
          </div>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-slate-900 text-white text-center px-4 py-3 rounded-sm font-medium"
          >
            Book Audit
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Logic Unit</span>
          </div>
          <p className="max-w-sm mb-6 text-slate-400">
            A specialized operational transformation partner for growing distribution and trading businesses. 
            Moving enterprises from operational chaos to structured systems control.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Solutions</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/transformation" className="hover:text-white transition-colors">Process Redesign</Link></li>
            <li><Link to="/systems" className="hover:text-white transition-colors">Custom ERP Development</Link></li>
            <li><Link to="/transformation" className="hover:text-white transition-colors">ERP Customization Services</Link></li>
            <li><Link to="/industries" className="hover:text-white transition-colors">Executive Dashboards</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center space-x-3">
              <MapPin size={16} className="text-slate-500" />
              <span>Lahore, Pakistan</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-slate-500" />
              <span>advisory@logicunit.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-slate-500" />
              <span>+92 (0) 42 35XX XXXX</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© {new Date().getFullYear()} Logic Unit Private Limited. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Engagement</a>
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
