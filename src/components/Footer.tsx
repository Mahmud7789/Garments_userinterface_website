import { Link } from 'react-router-dom';
import { Shirt, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Shirt className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-white tracking-tight">
                RATNO<span className="text-accent">GARMENTS</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              A leading garments manufacturer committed to quality, innovation, and sustainable production. Specializing in premium denim and apparel for global markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Our Factory</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Our Products</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Manufacturing Process</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Products</h3>
            <ul className="space-y-4">
              <li><Link to="/products" className="hover:text-accent transition-colors">Jeans Pant</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">T-Shirts</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Polo Shirts</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Formal Shirts</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                <span>123 Industrial Area, Garment District, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-accent shrink-0" size={18} />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-accent shrink-0" size={18} />
                <span>info@ratnogarments.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ratno Garments Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
