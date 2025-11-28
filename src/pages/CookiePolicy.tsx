import LegalLayout from '../components/LegalLayout';

export default function CookiePolicy() {
  const lastUpdated = 'Nov 28, 2025';

  return (
    <LegalLayout
      title="Cookie Policy"
      description="Learn what cookies we use and how you can control them."
      lastUpdated={lastUpdated}
    >
      <section id="what-are-cookies" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device to improve your browsing experience.</p>
      </section>

      <section id="types" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Types of Cookies We Use</h2>
        <ul className="list-disc pl-5">
          <li>Essential cookies for site functionality</li>
          <li>Analytics cookies to understand usage</li>
          <li>Preference cookies to remember settings</li>
        </ul>
      </section>

      <section id="how-we-use" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">How We Use Cookies</h2>
        <p>We use cookies to keep you signed in (if applicable), remember preferences, and analyze traffic.</p>
      </section>

      <section id="durations" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Cookie Duration</h2>
        <p>
          Some cookies are session-based (deleted when you close your browser), while others are persistent and remain until they expire or are deleted.
        </p>
      </section>

      <section id="manage" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Managing Cookies</h2>
        <p>You can control cookies via your browser settings. Disabling some cookies may affect functionality.</p>
      </section>

      <section id="third-party" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Third-Party Cookies</h2>
        <p>We may allow trusted partners (e.g., analytics) to set cookies for performance and insights.</p>
      </section>

      <section id="consent" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Your Consent</h2>
        <p>By using our site, you consent to the use of cookies as described in this policy. Where required, we will request your explicit consent.</p>
      </section>

      <section id="dnt" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Do Not Track</h2>
        <p>Some browsers offer a “Do Not Track” setting. Our site currently does not respond to DNT signals, but you can manage cookies through browser settings.</p>
      </section>

      <section id="updates" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Updates to This Policy</h2>
        <p>We may update this Cookie Policy from time to time. Please review it periodically for changes.</p>
      </section>

      <section id="contact" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Contact</h2>
        <p>
          Email: <a className="text-teal-700 font-semibold" href="mailto:olelectronics.in@gmail.com">olelectronics.in@gmail.com</a>
          <br />Phone: <a className="text-teal-700 font-semibold" href="tel:+919864220960">+91 9864220960</a>
        </p>
      </section>
    </LegalLayout>
  );
}
