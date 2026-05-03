import { Package, ShieldCheck, Tag, Users } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURES = [
  {
    icon: <Package className="w-8 h-8" />,
    title: 'Packaged Groceries & Staples',
    description: 'High-quality rice, lentils, oil, and flour from the brands you trust.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Household Essentials',
    description: 'Complete range of cleaning, personal care, and home care products.',
  },
  {
    icon: <Tag className="w-8 h-8" />,
    title: 'Affordable Prices',
    description: 'Competitive pricing on all daily FMCG products for maximum value.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Friendly Local Service',
    description: 'Personalized neighborly care with Davangere tradition for every customer.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-gray-900 mb-4"
          >
            Why Choose <span className="text-green-700">Rama & Co?</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-green-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 group-hover:rotate-0 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
