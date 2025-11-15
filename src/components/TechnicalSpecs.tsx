import { Cpu, Database, Wifi, Settings } from 'lucide-react';

const specs = [
  {
    category: 'Display & Interface',
    icon: Cpu,
    color: 'bg-blue-500',
    items: [
      { label: 'Screen Size', value: '15-inch LCD Touchscreen' },
      { label: 'Interface Type', value: 'Interactive Touch Interface' },
      { label: 'User Guidance', value: 'Audio + Visual Feedback' }
    ]
  },
  {
    category: 'Capacity & Storage',
    icon: Database,
    color: 'bg-green-500',
    items: [
      { label: 'Juice Slots', value: '4 Slots (60 glasses each)' },
      { label: 'Total Capacity', value: '240 Glasses per Refill' },
      { label: 'Glass Size', value: '250mL Disposable' },
      { label: 'Insulation', value: 'Keeps Fresh up to 30 Hours' },
      { label: 'Additional Slots', value: 'Salt, Sugar, 2 Flavors' }
    ]
  },
  {
    category: 'Connectivity',
    icon: Wifi,
    color: 'bg-teal-500',
    items: [
      { label: 'IoT Enabled', value: 'Real-time Data Sync' },
      { label: 'Mobile App', value: 'Android Application' },
      { label: 'Payment Gateway', value: 'UPI Integration' },
      { label: 'Remote Control', value: 'Menu & Price Updates' }
    ]
  },
  {
    category: 'Technology',
    icon: Settings,
    color: 'bg-orange-500',
    items: [
      { label: 'Mixing Chamber', value: 'Transparent, Real-time View' },
      { label: 'Delivery System', value: 'Automated Sensor-based' },
      { label: 'Maintenance Mode', value: 'Full System Diagnostics' },
      { label: 'Patent Status', value: 'Patented Technology' }
    ]
  }
];

export default function TechnicalSpecs() {
  return (
    <section id="specifications" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powered by cutting-edge IoT technology and patented innovation,
            VendGenius delivers reliability and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${spec.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{spec.category}</h3>
                </div>

                <div className="space-y-4">
                  {spec.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start pb-3 border-b border-gray-100 last:border-0">
                      <span className="font-semibold text-gray-700">{item.label}</span>
                      <span className="text-gray-600 text-right ml-4">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Key Highlights</h3>
            <div className="grid md:grid-cols-4 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">IoT</div>
                <div className="text-teal-100">Connected Platform</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">UPI</div>
                <div className="text-teal-100">Digital Payments</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Auto</div>
                <div className="text-teal-100">Fully Automated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">30hrs</div>
                <div className="text-teal-100">Fresh & Cool</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
