import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Bulk Order Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Formspree integration
    // User needs to set VITE_FORMSPREE_ID in their environment
    //const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'xpzeonwa'; // Fallback for demo if not set

    try {
      const response = await fetch(`https://formspree.io/f/xvzvgydp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'Bulk Order Inquiry', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              Ready to start your production? Get in touch with our team for a custom quote.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-8">Get In Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-accent shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Our Location</h4>
                      <p className="text-slate-600">Road - 01,Block - B, Yea khaza Bhaban, 4th Floor, Kalwalapara, Mirpur- 1, Dhaka-1216, Bangladesh</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-accent shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Phone Number</h4>
                      <p className="text-slate-600">+880 1768166655</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-accent shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Email Address</h4>
                      <p className="text-slate-600">ratnogarments@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-accent shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Working Hours</h4>
                      <p className="text-slate-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200">
                <div className="text-center p-6">
                  <MapPin className="h-10 w-10 text-slate-300 mx-auto mb-2" />
                  <p className="text-slate-400 font-medium italic">Google Maps Integration Placeholder Langitut: 23.797813, Longitute:90.353757</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-primary mb-8">Send Us a Message</h3>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center"
                  >
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h4>
                    <p className="text-green-700 mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center gap-3 text-red-700">
                        <AlertCircle size={20} />
                        <p>Something went wrong. Please try again or contact us directly via email.</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="example@gmail.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      >
                        <option>Bulk Order Inquiry</option>
                        <option>Sample Development</option>
                        <option>Partnership Opportunity</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full flex items-center justify-center gap-2 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>Sending... <Loader2 className="animate-spin" size={18} /></>
                      ) : (
                        <>Send Message <Send size={18} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
