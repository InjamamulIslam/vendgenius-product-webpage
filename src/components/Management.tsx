import { Users, Smartphone } from 'lucide-react';
import { useState } from 'react';

type UserType = 'client' | 'customer';

interface Feature {
  title: string;
  items: string[];
}

const managementData: Record<UserType, { title: string; icon: typeof Smartphone; color: string; features: Feature[] }> = {
  client: {
    title: 'Client App Features',
    icon: Smartphone,
    color: 'from-teal-500 to-green-500',
    features: [
      {
        title: 'Android Application',
        items: [
          'User-friendly interface with smooth navigation',
          'IoT connectivity for real-time updates',
          'Dashboard with key metrics at a glance',
          'Multi-machine management support'
        ]
      },
      {
        title: 'Business Insights',
        items: [
          'Sales performance tracking',
          'Customer preference analytics',
          'Peak hours identification',
          'Revenue forecasting tools'
        ]
      },
      {
        title: 'Operations Management',
        items: [
          'Schedule maintenance windows',
          'Plan refill operations efficiently',
          'Manage multiple machine locations',
          'Set operational hours'
        ]
      },
      {
        title: 'Notifications',
        items: [
          'Low stock alerts',
          'Payment transaction confirmations',
          'Maintenance reminders',
          'System error notifications'
        ]
      }
    ]
  },
  customer: {
    title: 'Customer Experience',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    features: [
      {
        title: 'Easy Ordering',
        items: [
          '15-inch touch interface for intuitive selection',
          'Visual menu with clear juice options',
          'Real-time price display',
          'Audio guidance through the process'
        ]
      },
      {
        title: 'Customization Options',
        items: [
          'Choose from 4 different fresh juices',
          'Adjust salt levels to preference',
          'Control sugar quantity',
          'Select from 2 flavor options'
        ]
      },
      {
        title: 'Payment & Collection',
        items: [
          'Quick UPI payment via any app',
          'Secure digital transaction',
          'Watch juice mixing in transparent chamber',
          'Automated glass detection and delivery'
        ]
      },
      {
        title: 'Quality Assurance',
        items: [
          'Fresh juices kept cool up to 30 hours',
          'Customized blend made to order',
          'Hygiene maintained with automated process',
          'Consistent quality with every serve'
        ]
      }
    ]
  }
};

export default function Management() {
  const [activeTab, setActiveTab] = useState<UserType>('client');
  const data = managementData[activeTab];
  const Icon = data.icon;

  return (
    <section id="management" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Complete Management Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamlined operations for clients and seamless experience for customers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(managementData) as UserType[]).map((type) => {
            const tabData = managementData[type];
            const TabIcon = tabData.icon;
            return (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === type
                    ? `bg-gradient-to-r ${tabData.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105 hover:shadow-md active:scale-95'
                }`}
              >
                <TabIcon className={`w-5 h-5 transition-transform duration-300 ${
                  activeTab === type ? '' : 'group-hover:rotate-12 group-hover:scale-110'
                }`} />
                {tabData.title}
              </button>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200">
          <div className="flex items-center gap-4 mb-8">
            <div className={`bg-gradient-to-br ${data.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{data.title}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${data.color}`}></div>
                  {feature.title}
                </h4>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
