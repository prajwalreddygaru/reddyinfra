import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  categories: [
    { name: 'Cement & Steel', href: '/blog?category=cement-steel' },
    { name: 'Electrical & Plumbing', href: '/blog?category=electrical-plumbing' },
    { name: 'Logistics', href: '/blog?category=logistics' },
    { name: 'Pricing', href: '/blog?category=pricing' },
    { name: 'Supply Chain', href: '/blog?category=supply-chain' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-2xl">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight">
                  Reddy Infra
                </span>
                <span className="text-xs text-primary-foreground/70 tracking-wider">
                  INFRASTRUCTURE INSIGHTS
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Building smarter supply chains for infrastructure. We're creating transparency 
              in material pricing and logistics for contractors, builders, and distributors across India.
            </p>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <a href="mailto:hello@reddyinfra.in" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                hello@reddyinfra.in
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                +91 99999 99999
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Hyderabad, India
              </span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Platform Notice */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Coming Soon</h4>
            <motion.div 
              className="bg-accent/20 rounded-lg p-4 border border-accent/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-primary-foreground/90 mb-3">
                <strong>B2B Procurement Platform</strong>
              </p>
              <p className="text-xs text-primary-foreground/70 leading-relaxed">
                We're building India's most trusted infrastructure procurement platform. 
                WhatsApp ordering, EMI options, distributor portals, and more.
              </p>
              <Link 
                to="/contact" 
                className="inline-block mt-4 text-sm text-accent hover:underline"
              >
                Join the waitlist →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60 text-center md:text-left">
            © {new Date().getFullYear()} Reddy Infra. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60 italic text-center md:text-right font-display">
            "We are building infrastructure for infrastructure"
          </p>
        </div>
      </div>
    </footer>
  );
}
