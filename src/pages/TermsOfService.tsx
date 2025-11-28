import LegalLayout from '../components/LegalLayout';

export default function TermsOfService() {
  const lastUpdated = 'Nov 28, 2025';

  return (
    <LegalLayout
      title="Terms of Service"
      description="Please read these terms carefully before using VendGenius."
      lastUpdated={lastUpdated}
    >
      <section id="definitions" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Definitions</h2>
        <ul className="list-disc pl-5">
          <li><span className="font-semibold">"You"</span> means the individual or entity using our Services.</li>
          <li><span className="font-semibold">"Services"</span> includes the VendGenius website, Android app, APIs, and related offerings.</li>
        </ul>
      </section>
      <section id="acceptance" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Acceptance of Terms</h2>
        <p>By accessing or using our website/services, you agree to these Terms.</p>
      </section>

      <section id="use" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Use of Service</h2>
        <ul className="list-disc pl-5">
          <li>Use the services only for lawful purposes</li>
          <li>Do not attempt to disrupt or reverse engineer systems</li>
          <li>Provide accurate information when requested</li>
        </ul>
      </section>

      <section id="accounts" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Accounts & Security</h2>
        <p>You are responsible for safeguarding your account credentials and for all activities under your account.</p>
      </section>

      <section id="ip" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Intellectual Property</h2>
        <p>All content, trademarks, and technologies are owned by or licensed to VendGenius.</p>
      </section>

      <section id="user-conduct" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">User Conduct</h2>
        <ul className="list-disc pl-5">
          <li>No abuse, harassment, or violation of third-party rights</li>
          <li>No uploading of malicious code or attempts to bypass security</li>
          <li>No unauthorized data scraping or automated access</li>
        </ul>
      </section>

      <section id="prohibited" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Prohibited Uses</h2>
        <p>Using the Services in violation of laws, or for any harmful or deceptive purpose, is strictly prohibited.</p>
      </section>

      <section id="limitations" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Limitations of Liability</h2>
        <p>VendGenius is not liable for indirect or consequential damages to the extent permitted by law.</p>
      </section>

      <section id="disclaimer" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Disclaimer of Warranties</h2>
        <p>The Services are provided on an "as is" and "as available" basis without warranties of any kind.</p>
      </section>

      <section id="indemnification" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Indemnification</h2>
        <p>You agree to defend, indemnify, and hold harmless VendGenius from claims arising out of your use of the Services.</p>
      </section>

      <section id="termination" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Termination</h2>
        <p>We may suspend or terminate access if these Terms are violated.</p>
      </section>

      <section id="law" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Governing Law</h2>
        <p>These Terms are governed by applicable laws of India, unless stated otherwise.</p>
      </section>

      <section id="changes" className="bg-white border-2 border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900">Changes to Terms</h2>
        <p>We may update these Terms periodically. Continued use of the Services after updates constitutes acceptance.</p>
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
