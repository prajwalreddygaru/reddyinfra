import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Package, Truck, Users, Cpu } from 'lucide-react';

const pillars = [
  {
    icon: Package,
    title: 'Bulk Aggregation',
    subtitle: 'Save 15-20%',
    description: 'We aggregate demand from multiple buyers to negotiate wholesale prices that were previously only available to large players.',
    color: 'bg-accent',
  },
  {
    icon: Truck,
    title: 'Predictable Logistics',
    subtitle: 'On-time delivery',
    description: 'Our network of verified transport partners ensures your materials arrive when promised, with real-time tracking.',
    color: 'bg-primary',
  },
  {
    icon: Users,
    title: 'Distributor-Friendly',
    subtitle: 'Fair margins',
    description: 'We work with distributors, not against them. Our model ensures everyone in the chain earns fair margins.',
    color: 'bg-steel-light',
  },
  {
    icon: Cpu,
    title: 'Technology-Led',
    subtitle: 'Smart operations',
    description: 'From demand forecasting to route optimization, technology drives efficiency at every step of the supply chain.',
    color: 'bg-rust',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export function ValuePillars() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 infra-grid opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Four Pillars of Smarter Procurement
          </h2>
          <p className="text-muted-foreground text-lg">
            Our approach is built on principles that benefit everyone in the infrastructure ecosystem—from manufacturers to end contractors.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-2xl p-8 shadow-lg border border-border hover:border-accent/50 transition-all duration-300"
            >
              {/* Icon */}
              <motion.div 
                className={`w-14 h-14 ${pillar.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: -5 }}
              >
                <pillar.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <div className="space-y-2">
                <span className="text-accent text-sm font-medium">{pillar.subtitle}</span>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className={`absolute -top-8 -right-8 w-16 h-16 ${pillar.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`} />
              </div>

              {/* Number indicator */}
              <div className="absolute bottom-6 right-6 font-display text-6xl font-bold text-muted/30 group-hover:text-accent/20 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
