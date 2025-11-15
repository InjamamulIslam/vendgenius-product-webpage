import { ArrowRight, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import DemoForm from './DemoForm';

export default function CTA() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  useEffect(() => {
    const handleOpenDemoForm = () => {
      setIsDemoFormOpen(true);
    };

    window.addEventListener('openDemoForm', handleOpenDemoForm);
    return () => window.removeEventListener('openDemoForm', handleOpenDemoForm);
  }, []);

  return (
    <section id="request-demo" className="py-20 bg-gradient-to-br from-teal-600 via-green-600 to-emerald-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Join the fresh juice vending revolution with VendGenius. Get started today and watch your business grow with cutting-edge IoT technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => setIsDemoFormOpen(true)}
              className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
              Download Brochure
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-3 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-teal-100">Call Us</div>
                <div className="font-semibold">+91 XXXXX XXXXX</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-3 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-teal-100">Email Us</div>
                <div className="font-semibold">info@vendgenius.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Form Modal */}
      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </section>
  );
}
