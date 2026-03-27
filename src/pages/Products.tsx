import { motion } from 'motion/react';
import {assets} from '../assets/assets';

const Products = () => {
  const categories = [
    {
      id: 'jeans',
      title: 'Jeans Pant',
      description: 'Premium denim crafted with precision and style.',
      items: [
        { name: 'Slim Fit Denim', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop', features: ['100% Cotton', 'Stretchable', 'YKK Zippers'] },
        { name: 'Regular Fit Jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop', features: ['Durable Fabric', 'Classic 5-Pocket', 'Reinforced Stitching'] },
        { name: 'Distressed Denim', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop', features: ['Hand-Crafted Rips', 'Modern Wash', 'Premium Feel'] },
      ]
    },
    {
      id: 'tshirt',
      title: 'T-Shirts',
      description: 'Comfortable and trendy cotton t-shirts for every occasion.',
      items: [
        { name: 'Basic Crew Neck', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop', features: ['Combed Cotton', 'Breathable', 'Pre-shrunk'] },
        { name: 'Graphic Tee', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop', features: ['High-Quality Print', 'Soft Finish', 'Modern Fit'] },
        { name: 'V-Neck Premium', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop', features: ['Organic Cotton', 'Silk Finish', 'Tagless'] },
      ]
    },
    {
      id: 'polo',
      title: 'Polo Shirts',
      description: 'Sophisticated polo shirts with a perfect fit.',
      items: [
        { name: 'Classic Pique Polo', image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=600&auto=format&fit=crop', features: ['Pique Knit', 'Ribbed Collar', 'Side Slits'] },
        { name: 'Sport Fit Polo', image: 'https://images.unsplash.com/photo-1625910513397-22a99c1163f6?q=80&w=600&auto=format&fit=crop', features: ['Moisture Wicking', 'Lightweight', 'Anti-Odor'] },
      ]
    },
    {
      id: 'shirt',
      title: 'Formal Shirts',
      description: 'Sharp and elegant shirts for the modern professional.',
      items: [
        { name: 'Oxford Button Down', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop', features: ['Easy Iron', 'Tailored Fit', 'Pearl Buttons'] },
        { name: 'Linen Summer Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop', features: ['Pure Linen', 'Cooling Effect', 'Relaxed Fit'] },
      ]
    }
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
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Our Product Collection</h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              Explore our diverse range of high-quality apparel manufactured with global standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, idx) => (
        <section key={cat.id} className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="section-subtitle">Category</span>
              <h2 className="section-title">{cat.title}</h2>
              <p className="text-slate-600">{cat.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 group"
                >
                  <div className="h-80 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">{item.name}</h3>
                    <ul className="space-y-2">
                      {item.features.map((feat, j) => (
                        <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 w-full py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-md font-semibold">
                      Inquire Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;
