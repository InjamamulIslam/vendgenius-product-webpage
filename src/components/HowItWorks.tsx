import { Smartphone, Droplets, CreditCard, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: 'Select Your Drink',
    description: 'Choose from 4 different fresh juices using the 15-inch touchscreen interface.',
    step: '01'
  },
  {
    icon: Droplets,
    title: 'Customize Your Taste',
    description: 'Add salt, sugar, and select from 2 different flavors to create your perfect blend.',
    step: '02'
  },
  {
    icon: CreditCard,
    title: 'Pay Digitally',
    description: 'Complete your purchase instantly using any UPI app through our secure payment gateway.',
    step: '03'
  },
  {
    icon: CheckCircle,
    title: 'Collect & Enjoy',
    description: 'Place your glass in the delivery chamber and watch your fresh juice being prepared.',
    step: '04'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your customized fresh juice in just 4 simple steps.
            From selection to delivery, the process is seamless and automated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-teal-400 to-green-400 -ml-4 z-0"></div>
              )}

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                <div className="bg-gradient-to-br from-teal-100 to-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-teal-700" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Capacity & Performance
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">240</div>
              <div className="text-gray-600">Total Glasses per Fill</div>
              <div className="text-sm text-gray-500 mt-1">(60 glasses × 4 slots)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">250ml</div>
              <div className="text-gray-600">Standard Glass Size</div>
              <div className="text-sm text-gray-500 mt-1">Perfect serving portion</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">30hrs</div>
              <div className="text-gray-600">Freshness Duration</div>
              <div className="text-sm text-gray-500 mt-1">Thermal insulation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
