import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  Instagram, 
  Youtube, 
  MessageCircle
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "glass-nav py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-black tracking-tighter text-white">
          FITBANK
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "font-heading font-bold tracking-tight uppercase transition-colors",
                location.pathname === link.path ? "text-fit-orange border-b-2 border-fit-orange" : "text-white/80 hover:text-fit-orange"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link 
          to="/join" 
          className="bg-fit-orange text-white px-8 py-2.5 rounded-pill font-heading font-bold uppercase tracking-wider hover:scale-105 transition-transform active:scale-95"
        >
          Join Now
        </Link>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="text-3xl font-heading font-black tracking-tighter text-white">
            FITBANK
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/" className="text-white/60 hover:text-fit-orange uppercase font-heading font-bold tracking-widest text-sm">Home</Link>
            <Link to="/services" className="text-white/60 hover:text-fit-orange uppercase font-heading font-bold tracking-widest text-sm">Services</Link>
            <Link to="/pricing" className="text-white/60 hover:text-fit-orange uppercase font-heading font-bold tracking-widest text-sm">Pricing</Link>
            <Link to="/about" className="text-white/60 hover:text-fit-orange uppercase font-heading font-bold tracking-widest text-sm">About Us</Link>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-fit-orange transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-white/60 hover:text-fit-orange transition-colors"><Youtube size={24} /></a>
            <a href="#" className="text-white/60 hover:text-fit-orange transition-colors"><MessageCircle size={24} /></a>
          </div>
        </div>
        
        <div className="w-full h-px bg-white/5 mb-8" />
        
        <p className="text-center text-white/30 text-xs font-heading tracking-[0.2em] uppercase">
          © 2026 FITBANK. THE KINETIC VAULT. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
