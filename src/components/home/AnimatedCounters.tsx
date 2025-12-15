import { motion } from 'framer-motion';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { IndianRupee, MapPin, Percent, Building2 } from 'lucide-react';

const stats = [
  { 
    icon: IndianRupee, 
    end: 150, 
    suffix: ' Cr+', 
    label: 'Materials Tracked', 
    description: 'In transaction value',
  },
  { 
    icon: MapPin, 
    end: 200, 
    suffix: '+', 
    label: 'Towns Served', 
    description: 'Across 12 states',
  },
  { 
    icon: Percent, 
    end: 18, 
    suffix: '%', 
    label: 'Average Savings', 
    description: 'For our partners',
  },
  { 
    icon: Building2, 
    end: 1000, 
    suffix: '+', 
    label: 'Active Partners', 
    description: 'Contractors & distributors',
  },
];

function CounterCard({ stat, index }: { stat: typeof stats[0], index: number }) {
  const { count, ref, isVisible } = useAnimatedCounter({ 
    end: stat.end, 
    duration: 2500 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="bg-card rounded-2xl p-8 text-center border border-border hover:border-accent/30 transition-all duration-300 h-full">
        {/* Icon */}
        <motion.div 
          className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <stat.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
        </motion.div>

        {/* Counter Value */}
        <div className="mb-2">
          <motion.span
            className="font-display text-4xl md:text-5xl font-bold text-foreground counter-value"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
          >
            {stat.icon === IndianRupee ? '₹' : ''}{count}{stat.suffix}
          </motion.span>
        </div>

        {/* Label */}
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
          {stat.label}
        </h3>
        <p className="text-sm text-muted-foreground">
          {stat.description}
        </p>

        {/* Animated progress bar */}
        <motion.div
          className="mt-6 h-1 bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={isVisible ? { width: '100%' } : { width: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function AnimatedCounters() {
  return (
    <section className="py-24 bg-muted/50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Numbers That Matter
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results from real partnerships. These numbers represent the trust placed in us by contractors and distributors across India.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <CounterCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
