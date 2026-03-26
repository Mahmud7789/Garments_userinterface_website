import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">About Our Company</h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              A legacy of craftsmanship and a future of innovation in the global garments industry.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop" 
                alt="Office" 
                className="rounded-2xl shadow-2xl w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="section-subtitle">Who We Are</span>
              <h2 className="section-title">Leading the Way in Apparel Manufacturing</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Founded in 2010, Ratno Garments has grown from a small workshop to a premier manufacturing powerhouse. We serve some of the world's most recognizable brands, delivering excellence in every stitch.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our commitment to quality, ethical manufacturing, and environmental sustainability sets us apart. We believe in building long-term partnerships based on trust, transparency, and top-tier performance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-accent">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-sm text-slate-500">Years of Excellence</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-accent">
                  <p className="text-2xl font-bold text-primary">2000+</p>
                  <p className="text-sm text-slate-500">Skilled Workforce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-primary"
            >
              <Target className="h-12 w-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide high-quality, sustainable apparel manufacturing solutions that exceed our clients' expectations while fostering a safe and empowering environment for our employees.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-accent"
            >
              <Eye className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted and innovative global partner in the garments industry, leading the transition towards a more sustainable and technologically advanced future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subtitle">Our Strengths</span>
            <h2 className="section-title">Manufacturing Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Volume Production',
                desc: 'Capacity to produce over 500,000 pieces per month across multiple product categories.'
              },
              {
                title: 'Design & Development',
                desc: 'In-house R&D team to help brands with pattern making, fabric sourcing, and trend analysis.'
              },
              {
                title: 'Ethical Compliance',
                desc: 'Fully compliant with international labor standards and environmental regulations.'
              }
            ].map((cap, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="shrink-0">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">{cap.title}</h4>
                  <p className="text-slate-600">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
