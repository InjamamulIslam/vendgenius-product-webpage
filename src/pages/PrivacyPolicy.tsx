import LegalLayout from '../components/LegalLayout';

export default function PrivacyPolicy() {
  const lastUpdated = 'Nov 28, 2025';

  return (
    <LegalLayout
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information when you use VendGenius."
      lastUpdated={lastUpdated}
    >
      <section id="definitions" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Definitions</h2>
        <ul className="list-disc pl-5">
          <li><span className="font-semibold">"Services"</span> means our website, product pages, Android app, APIs, and related offerings.</li>
          <li><span className="font-semibold">"Personal Data"</span> means any information that identifies you or can be linked to you.</li>
          <li><span className="font-semibold">"Process"</span> means any operation performed on personal data such as collection, use, storage, or disclosure.</li>
        </ul>
      </section>

      <section id="introduction" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Introduction</h2>
        <p>
          Your privacy is important to us. This Privacy Policy explains what data we collect, how we use it, and your rights.
          By using our website or services, you agree to this policy.
        </p>
      </section>

      <section id="data-we-collect" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Data We Collect</h2>
        <ul className="list-disc pl-5">
          <li>Contact details (name, email, phone, company, location) via forms</li>
          <li>Usage data (pages visited, device information, interactions)</li>
          <li>Technical data (IP address, browser type, cookies)</li>
        </ul>
      </section>

      <section id="how-we-use" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">How We Use Your Data</h2>
        <ul className="list-disc pl-5">
          <li>Provide demos and respond to inquiries</li>
          <li>Improve our website and services</li>
          <li>Send updates you opt in to receive</li>
          <li>Maintain security and prevent fraud</li>
        </ul>
      </section>

      <section id="legal-basis" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Legal Bases for Processing</h2>
        <ul className="list-disc pl-5">
          <li>Consent when you submit forms or opt in to communications</li>
          <li>Legitimate interest for analytics, security, and service improvement</li>
          <li>Contractual necessity to provide requested demos or services</li>
          <li>Compliance with legal obligations</li>
        </ul>
      </section>

      <section id="cookies" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Cookies</h2>
        <p>
          We use cookies to enhance user experience, analyze traffic, and remember preferences. You can manage cookies in your browser settings.
        </p>
      </section>

      <section id="third-parties" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Third-Party Services</h2>
        <p>
          We may use trusted third parties (analytics, form processing) who process data on our behalf under strict confidentiality and security obligations.
        </p>
      </section>

      <section id="security" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Data Security</h2>
        <p>
          We implement measures to protect your data. However, no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section id="retention" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Data Retention</h2>
        <p>We retain personal data only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
      </section>

      <section id="international" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">International Transfers</h2>
        <p>Your information may be transferred and processed in countries other than your own. We take steps to ensure appropriate safeguards are in place.</p>
      </section>

      <section id="children" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Children’s Privacy</h2>
        <p>Our services are not directed to children under 13. We do not knowingly collect data from children. If you believe a child provided data, contact us to remove it.</p>
      </section>

      <section id="your-rights" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>
        <ul className="list-disc pl-5">
          <li>Access, correct, or delete your personal data</li>
          <li>Opt out of communications</li>
          <li>Request data portability where applicable</li>
        </ul>
      </section>

      <section id="exercise-rights" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">How to Exercise Your Rights</h2>
        <p>To exercise your rights, contact us using the details below. We may need to verify your identity before processing your request.</p>
      </section>

      <section id="changes" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. We will update the “Last Updated” date and, where appropriate, notify you of significant changes.</p>
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
