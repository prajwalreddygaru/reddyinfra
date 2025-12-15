import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { 
    name: 'Categories', 
    href: '/blog',
    children: [
      { name: 'Cement & Steel', href: '/blog?category=cement-steel' },
      { name: 'Electrical & Plumbing', href: '/blog?category=electrical-plumbing' },
      { name: 'Logistics', href: '/blog?category=logistics' },
      { name: 'Pricing', href: '/blog?category=pricing' },
      { name: 'Supply Chain', href: '/blog?category=supply-chain' },
    ]
  },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div 
            className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.05, rotate: -5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="text-primary-foreground font-display font-bold text-xl">R</span>
          </motion.div>
          <div className="flex flex-col">
            <span className={cn(
              "font-display font-bold text-lg leading-tight transition-colors",
              isScrolled ? "text-foreground" : "text-primary"
            )}>
              Reddy Infra
            </span>
            <span className={cn(
              "text-xs tracking-wider transition-colors",
              isScrolled ? "text-muted-foreground" : "text-secondary"
            )}>
              INFRASTRUCTURE INSIGHTS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.href}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors link-underline py-2",
                  location.pathname === link.href 
                    ? "text-accent" 
                    : isScrolled 
                      ? "text-foreground hover:text-accent"
                      : "text-primary hover:text-accent"
                )}
              >
                {link.name}
                {link.children && <ChevronDown className="w-4 h-4" />}
              </Link>
              
              {/* Dropdown */}
              <AnimatePresence>
                {link.children && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-xl border border-border overflow-hidden"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/contact">Get Updates</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className={cn(
                      "block py-3 text-base font-medium transition-colors",
                      location.pathname === link.href 
                        ? "text-accent" 
                        : "text-foreground hover:text-accent"
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <div className="pl-4 border-l-2 border-border ml-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">Get Updates</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
