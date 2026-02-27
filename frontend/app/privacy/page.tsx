"use client";

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6 text-sm text-gray-500">
        Effective Date: February 27, 2026
      </p>

      <section className="space-y-6">
        <p>
          This Privacy Policy describes how <strong>Your Company Name</strong> ("we", "our", or "us")
          collects, uses, and protects your personal data in accordance with the
          <strong> Data Privacy Act of 2012 (Republic Act No. 10173)</strong> and its
          Implementing Rules and Regulations.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full name</li>
          <li>Email address</li>
          <li>Contact number</li>
          <li>Billing information</li>
          <li>IP address and device info</li>
          <li>Cookies and usage data</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">2. Purpose of Processing</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide and improve our services</li>
          <li>Process transactions</li>
          <li>Communicate updates and support</li>
          <li>Comply with legal obligations</li>
          <li>Ensure website security and prevent fraud</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">3. Legal Basis for Processing</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Consent</li>
          <li>Performance of a contract</li>
          <li>Legal obligations</li>
          <li>Legitimate interests not overridden by your rights</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">4. Data Sharing and Disclosure</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Service providers and partners</li>
          <li>Payment processors</li>
          <li>Government authorities when required by law</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">5. Data Retention</h2>
        <p>We retain personal data only as long as necessary to fulfill the purposes for which it was collected or as required by law.</p>

        <h2 className="text-2xl font-semibold mt-8">6. Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Be informed</li>
          <li>Access your data</li>
          <li>Object to processing</li>
          <li>Rectify inaccurate data</li>
          <li>Erase or block data</li>
          <li>Data portability</li>
          <li>File a complaint with the National Privacy Commission</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">7. Security Measures</h2>
        <p>We implement organizational, physical, and technical measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction.</p>

        <h2 className="text-2xl font-semibold mt-8">8. Cookies</h2>
        <p>Our website may use cookies and similar technologies to enhance user experience and analyze traffic.</p>

        <h2 className="text-2xl font-semibold mt-8">9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

        <h2 className="text-2xl font-semibold mt-8">10. Contact Us</h2>
        <p>
          <strong>Your Company Name</strong><br />
          Email: privacy@yourdomain.com<br />
          Address: Your Company Address, Philippines
        </p>
      </section>
    </main>
  );
}