import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'CO₂ Reduction', value: '1M+', unit: 'Tons per Year' },
  { label: 'Clean Energy', value: '500K', unit: 'MWh Generated' },
  { label: 'Ocean Area', value: '10K', unit: 'Hectares Cultivated' },
  { label: 'Communities', value: '50+', unit: 'Supported' },
];

export function Impact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="impact" className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Making a Global Impact
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our commitment to sustainable energy production creates positive change
            for the environment and communities worldwide.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-blue-100 mb-1">{stat.label}</div>
              <div className="text-blue-200">{stat.unit}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}