import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import ContactCard from './ContactCard';

const faqs = [
  {
    question: 'How does the IoT connectivity work?',
    answer: 'VendGenius connects to the internet via WiFi or cellular network, enabling real-time data sync with our Android app. You can monitor sales, inventory, and machine status from anywhere, anytime.',
  },
  {
    question: 'What is the capacity of the vending machine?',
    answer: 'The machine has 4 juice slots, each holding 60 glasses (250ml each), totaling 240 glasses per refill. This means you can serve up to 240 customers before needing to refill.',
  },
  {
    question: 'How long do the juices stay fresh?',
    answer: 'Our thermal insulated containers keep juices fresh and cool for up to 30 hours. This ensures optimal taste and quality throughout the day without requiring frequent refills.',
  },
  {
    question: 'What payment methods are supported?',
    answer: 'VendGenius is equipped with a UPI payment gateway, accepting payments from all major UPI apps like Google Pay, PhonePe, Paytm, and more. The payment process is quick, secure, and seamless.',
  },
  {
    question: 'Can I customize the menu and prices remotely?',
    answer: 'Yes! Through our Android app, you can remotely update juice options, change prices, enable/disable specific items, and configure customization options (salt, sugar, flavors) in real-time.',
  },
  {
    question: 'What maintenance is required?',
    answer: 'The machine features a comprehensive maintenance mode for system testing and troubleshooting. Regular tasks include refilling juices, cleaning the mixing chamber, and basic component checks. The app sends automatic alerts for maintenance needs.',
  },
  {
    question: 'Is the machine suitable for outdoor installation?',
    answer: 'VendGenius is designed for indoor or covered outdoor locations. It requires a stable power supply and internet connectivity. For specific outdoor requirements, please contact our team for customized solutions.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We provide comprehensive support including installation assistance, training on the Android app, regular maintenance guidelines, and 24/7 technical support via phone, email, and our app chat feature.',
  },
  {
    question: 'Can I track which juices are most popular?',
    answer: 'Absolutely! The Android app provides detailed analytics showing which juices are selling best, peak hours, customer preferences, and comprehensive sales reports to help optimize your menu and inventory.',
  },
  {
    question: 'What is the warranty period?',
    answer: 'VendGenius comes with a 1-year comprehensive warranty covering all electronic components and mechanical parts. Extended warranty options are available. All software updates are free for the lifetime of the machine.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isContactCardOpen, setIsContactCardOpen] = useState(false);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about VendGenius
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-teal-300 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-teal-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button 
            onClick={() => setIsContactCardOpen(true)}
            className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact Our Team
          </button>
        </div>
      </div>

      {/* Contact Card Modal */}
      <ContactCard isOpen={isContactCardOpen} onClose={() => setIsContactCardOpen(false)} />
    </section>
  );
}
