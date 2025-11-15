import { Monitor, Droplets, Package, Smartphone, CreditCard, Wrench, Thermometer, Volume2 } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: '15-inch LCD Touch Interface',
    description: 'Interactive touchscreen interface for seamless user experience. Easy input selection for juice delivery with an enhanced, intuitive design.',
    color: 'bg-blue-500'
  },
  {
    icon: Droplets,
    title: 'Transparent Mixing Chamber',
    description: 'Watch your fresh juice being mixed in real-time through our transparent chamber. Complete visibility of the mixing process.',
    color: 'bg-teal-500'
  },
  {
    icon: Package,
    title: 'Automated Delivery Chamber',
    description: 'Sensor-based automated delivery system. Simply place your 250mL disposable glass and collect your juice automatically.',
    color: 'bg-green-500'
  },
  {
    icon: CreditCard,
    title: 'UPI Enabled Payments',
    description: 'Seamless digital payments through integrated UPI gateway. Accept payments from any UPI app for enhanced user convenience.',
    color: 'bg-orange-500'
  },
  {
    icon: Smartphone,
    title: 'IoT Android App',
    description: 'Real-time analytics, sales figures, and stock monitoring. Remote control features for menu changes and price updates from anywhere.',
    color: 'bg-cyan-500'
  },
  {
    icon: Wrench,
    title: 'Maintenance Mode',
    description: 'Comprehensive system testing and recovery. Check and correct every electronic component. Quick and easy juice refilling system.',
    color: 'bg-red-500'
  },
  {
    icon: Thermometer,
    title: 'Thermal Insulated Containers',
    description: 'Keep juices fresh and cool for up to 30 hours. Separate insulated containers for juice, salt, sugar, and flavors.',
    color: 'bg-indigo-500'
  },
  {
    icon: Volume2,
    title: 'Automated Sound System',
    description: 'Enhanced user experience with audio feedback. Guide customers through the ordering process with clear audio instructions.',
    color: 'bg-pink-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VendGenius combines cutting-edge technology with user-friendly design to deliver
            the perfect fresh juice experience every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-teal-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
