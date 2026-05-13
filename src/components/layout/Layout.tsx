import { Outlet, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const navLinks = [
    { name: "Geschichte", href: "/#geschichte" },
    { name: "Vorteile", href: "/#vorteile" },
    { name: "Kontakt", href: "/#kontakt" },
  ];

  return (
    <div className="min-h-[100svh] bg-neutral-base text-text-main selection:bg-brand/20 relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-10 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <Link to="/" className="block w-32 md:w-40 hover:opacity-80 transition-opacity">
            <img src="https://s1.directupload.eu/images/260513/dn6dtuar.webp" alt="M&S Bauelemente" className="w-full h-auto object-contain" />
          </Link>
        </div>
        
        <nav className="hidden md:flex gap-6 lg:gap-10 font-bold uppercase tracking-widest text-xs pointer-events-auto">
          {navLinks.map(item => (
            <a 
              key={item.name} 
              href={item.href} 
              className="hover:text-brand relative overflow-hidden group transition-colors"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50 relative pointer-events-auto text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Full-screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="hidden" 
            animate="visible" 
            exit="hidden"
            variants={menuVariants} 
            className="fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-10"
          >
              <nav className="flex flex-col gap-10 font-bold uppercase tracking-widest text-2xl text-center">
                  {navLinks.map(item => (
                      <a 
                        key={item.name} 
                        href={item.href} 
                        onClick={() => setIsMenuOpen(false)} 
                        className="hover:text-brand transition-colors"
                      >
                        {item.name}
                      </a>
                  ))}
                  <div className="h-px bg-neutral-800 w-12 mx-auto my-4" />
                  <Link to="/impressum" onClick={() => setIsMenuOpen(false)} className="text-xl text-neutral-400 hover:text-brand transition-colors">
                    Impressum
                  </Link>
                  <Link to="/datenschutz" onClick={() => setIsMenuOpen(false)} className="text-xl text-neutral-400 hover:text-brand transition-colors">
                    Datenschutz
                  </Link>
              </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-10 border-t border-neutral-800 text-neutral-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/3 flex justify-center md:justify-start order-2 md:order-1">
                <p>&copy; 2026 M&S Bauelemente. Alle Rechte.</p>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center gap-6 order-1 md:order-2">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://email.ionos.de/appsuite/#app=io.ox/mail&mailto=mailto%3Amail%40example.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                  <Mail size={20} />
                </a>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-6 font-medium order-3 md:order-3">
                <Link to="/impressum" className="hover:text-brand transition-colors">Impressum</Link>
                <Link to="/datenschutz" className="hover:text-brand transition-colors">Datenschutz</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}
