import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Cafe Owner, Mumbai',
    image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=14b8a6&color=fff&size=200',
    rating: 5,
    text: 'VendGenius has transformed my business! The IoT features let me monitor everything remotely, and my customers love the fresh juice options. ROI was achieved in just 6 months.',
  },
  {
    name: 'Priya Sharma',
    role: 'Gym Owner, Delhi',
    image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=10b981&color=fff&size=200',
    rating: 5,
    text: 'The best investment for our gym! Members appreciate the healthy, customizable options. The machine is reliable, easy to manage, and the UPI payment system is seamless.',
  },
  {
    name: 'Amit Patel',
    role: 'Mall Management, Bangalore',
    image: 'https://ui-avatars.com/api/?name=Amit+Patel&background=0ea5e9&color=fff&size=200',
    rating: 5,
    text: 'We installed 5 VendGenius machines across our mall. The real-time analytics help us optimize inventory, and the 30-hour freshness is a game-changer. Highly recommended!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied business owners who've revolutionized their beverage service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-teal-100" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-teal-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-8 lg:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Trusted by 500+ Businesses</h3>
          <p className="text-xl text-teal-100 mb-6">
            Join the fresh juice vending revolution today
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-teal-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">127+</div>
              <div className="text-teal-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-teal-100">Juices Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
