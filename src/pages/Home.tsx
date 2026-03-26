import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Factory, Globe, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1920&auto=format&fit=crop"
            alt="Garments Factory"
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl py-12 md:py-0"
          >
            <span className="section-subtitle">Excellence in Apparel</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premium <span className="text-accent">Jeans Pant</span> Manufacturing
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Ratno Garments is a world-class manufacturer providing high-quality denim and apparel solutions for global brands. Precision, quality, and scale combined.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary flex items-center justify-center gap-2">
                View Our Products <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-outline flex items-center justify-center gap-2">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Annual Production', value: '100K+' },
              { label: 'Clients', value: '10+' },
              { label: 'Factory Workers', value: '200+' },
              { label: 'Years Experience', value: '15+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Category: Jeans */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="section-subtitle">Our Specialty</span>
              <h2 className="section-title">World-Class Jeans Pant Manufacturing</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We specialize in high-end denim production, utilizing state-of-the-art machinery and sustainable washing techniques. From raw denim to finished retail-ready products, we handle it all with unmatched expertise.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Premium Quality Denim Fabric',
                  'Advanced Laser & Ozone Washing',
                  'Custom Branding & Packaging',
                  'Strict Quality Control Standards'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-accent" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/products" className="btn-primary inline-block">Explore Denim Collection</Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop" 
                alt="Jeans" 
                className="rounded-lg shadow-xl w-full h-64 object-cover mt-8"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop" 
                alt="Denim" 
                className="rounded-lg shadow-xl w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-subtitle">Why Ratno Garments</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnering for Global Success</h2>
            <p className="text-slate-600">We provide end-to-end manufacturing solutions that empower brands to scale efficiently while maintaining the highest quality standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory className="h-10 w-10 text-accent" />,
                title: 'Advanced Production',
                desc: 'Our facility is equipped with the latest automated cutting and sewing technology for maximum efficiency.'
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-accent" />,
                title: 'Quality Assurance',
                desc: 'Every single piece undergoes a 4-point inspection process to ensure zero-defect delivery.'
              },
              {
                icon: <Globe className="h-10 w-10 text-accent" />,
                title: 'Global Export',
                desc: 'We have a robust logistics network capable of shipping to Europe, North America, and beyond.'
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl border border-slate-800 hover:border-accent/50 transition-all"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
