import { Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('request-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Open form after scroll animation completes
      setTimeout(() => {
        const openFormEvent = new CustomEvent('openDemoForm');
        window.dispatchEvent(openFormEvent);
      }, 800);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-green-50 overflow-hidden min-h-screen flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-6 lg:space-y-7">
            <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-900">Patented Technology</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Automated Fresh Juice
              <span className="block bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                Vending Revolution
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              VendGenius is an <strong>IoT-enabled fresh juice vending machine</strong> with patented technology.
              Deliver customized, fresh juices with complete control and real-time analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              <button 
                onClick={scrollToDemo}
                className="group bg-gradient-to-r from-teal-600 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToDemo}
                className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg border-2 border-gray-200 hover:border-teal-600 hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </button>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              <div className="group flex items-center gap-2 bg-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-md border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm sm:text-base text-gray-900">IoT Enabled</span>
              </div>
              <div className="group flex items-center gap-2 bg-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-md border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm sm:text-base text-gray-900">UPI Payments</span>
              </div>
              <div className="group flex items-center gap-2 bg-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-md border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm sm:text-base text-gray-900">4 Juice Slots</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-green-400 rounded-3xl opacity-30 blur-3xl animate-pulse"></div>
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <img
                src="/Vendgenius-2[1].png"
                alt="VendGenius Fresh Juice Vending Machine - IoT Enabled Smart Vending"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </div>
            
            {/* Floating Feature Badges - Hidden on mobile to prevent overlap */}
            <div className="hidden sm:block absolute -left-4 top-1/4 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-xl border border-gray-100 animate-float">
              <div className="text-xl sm:text-2xl font-bold text-teal-600">240</div>
              <div className="text-xs text-gray-600 whitespace-nowrap">Glasses/Fill</div>
            </div>
            <div className="hidden sm:block absolute -right-4 top-1/2 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-xl border border-gray-100 animate-float animation-delay-2000">
              <div className="text-xl sm:text-2xl font-bold text-green-600">30hrs</div>
              <div className="text-xs text-gray-600 whitespace-nowrap">Fresh & Cool</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
