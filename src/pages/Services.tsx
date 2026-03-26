import { motion } from 'motion/react';
import { Settings, Zap, ShieldCheck, Truck, Recycle, Search } from 'lucide-react';

const Services = () => {
  const steps = [
    { icon: <Search />, title: 'Design & Sourcing', desc: 'We help source the finest fabrics and develop patterns based on your brand requirements.' },
    { icon: <Settings />, title: 'Sample Development', desc: 'Rapid prototyping and sample creation to ensure the fit and finish are perfect.' },
    { icon: <Zap />, title: 'Bulk Production', desc: 'Efficient large-scale manufacturing using automated machinery for consistent quality.' },
    { icon: <ShieldCheck />, title: 'Quality Control', desc: 'Rigorous 4-point inspection at every stage of production to ensure zero defects.' },
    { icon: <Truck />, title: 'Logistics & Export', desc: 'Global shipping solutions with full documentation and tracking for international clients.' },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Manufacturing Services</h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              End-to-end apparel production solutions tailored for global brands and wholesalers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subtitle">Our Workflow</span>
            <h2 className="section-title">The Production Process</h2>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-20 h-20 bg-white border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="section-subtitle">Zero Defects</span>
              <h2 className="section-title">Uncompromising Quality Control</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Quality is the cornerstone of Ratno Garments. Our dedicated QC team monitors every stage of production, from yarn selection to final packing. We adhere to AQL 1.5/2.5 standards to ensure your brand receives only the best.
              </p>
              <div className="space-y-4">
                {[
                  'Fabric Strength & Color Fastness Testing',
                  'In-line Inspection During Sewing',
                  'Final Random Inspection (FRI)',
                  'Needle Detection & Safety Checks'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-medium text-primary">
                    <ShieldCheck className="text-accent" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
                alt="Quality Control" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Recycle className="text-accent shrink-0" size={32} />
                <h2 className="text-2xl md:text-3xl font-bold">Sustainable Manufacturing</h2>
              </div>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                We are committed to reducing our environmental footprint. Our factory uses water-recycling systems for denim washing, energy-efficient lighting, and we prioritize sourcing organic and recycled materials whenever possible.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <div className="inline-block p-4 md:p-6 border-2 border-accent rounded-full mb-4">
                <span className="text-3xl md:text-4xl font-bold text-accent">40%</span>
              </div>
              <p className="font-medium">Water Saved Yearly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
