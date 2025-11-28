import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LegalLayoutProps {
  title: string;
  description?: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, description, lastUpdated, children }: LegalLayoutProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    try {
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate('/');
      }
    } catch {
      navigate('/');
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-28 pb-12 bg-gradient-to-br from-teal-50 via-white to-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 mb-4 text-teal-700 hover:text-teal-800 font-semibold bg-white border-2 border-teal-100 px-3 py-1.5 rounded-lg shadow-sm hover:shadow transition-all"
                aria-label="Go back"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">{title}</h1>
              {description && (
                <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl">{description}</p>
              )}
            </div>
            {lastUpdated && (
              <div className="hidden sm:flex items-center gap-2 bg-white border-2 border-teal-100 text-teal-700 px-3 py-2 rounded-lg shadow-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
                <span className="text-sm font-semibold">Updated: {lastUpdated}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-8 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[240px,1fr] gap-8">
            {/* TOC placeholder via children section anchors */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-2">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">On this page</div>
                <div id="toc" className="space-y-1 text-sm" />
              </div>
            </aside>

            <article className="prose prose-teal max-w-none">
              <div className="space-y-6 text-gray-700">
                {children}
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
