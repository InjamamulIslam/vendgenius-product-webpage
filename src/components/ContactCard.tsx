import { X, Mail, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';

interface ContactCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactCard({ isOpen, onClose }: ContactCardProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919864220960', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:olelectronics.in@gmail.com';
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold mb-2">Contact Our Team</h2>
          <p className="text-teal-100 text-sm">
            Choose your preferred way to reach us
          </p>
        </div>

        {/* Contact Options */}
        <div className="p-6 space-y-4">
          {/* WhatsApp */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
          >
            <div className="bg-green-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <div className="font-bold text-gray-900 text-lg">WhatsApp</div>
              <div className="text-gray-600 text-sm">+91 9864220960</div>
            </div>
            <div className="text-gray-400 group-hover:text-green-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Email */}
          <button
            onClick={handleEmailClick}
            className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all duration-300 group"
          >
            <div className="bg-teal-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <div className="font-bold text-gray-900 text-lg">Email</div>
              <div className="text-gray-600 text-sm">olelectronics.in@gmail.com</div>
            </div>
            <div className="text-gray-400 group-hover:text-teal-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Info Text */}
          <p className="text-center text-sm text-gray-500 pt-4">
            Our team typically responds within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
