import { Link } from "wouter";

export default function Privacy() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#3D4F5F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/70 text-lg">Last updated: {new Date().toLocaleDateString("en-AU", { month: "long", year: "numeric" })}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-gray">

          <p className="text-gray-600 leading-relaxed">
            Nebesa Homes Pty Ltd (ABN pending) ("we", "our", "us") is committed to protecting the privacy of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in accordance with the <strong>Australian Privacy Act 1988 (Cth)</strong>, the <strong>Australian Privacy Principles (APPs)</strong>, and applicable New South Wales legislation.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">We may collect the following types of personal information:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>Identity information:</strong> name, address, date of birth</li>
            <li><strong>Contact information:</strong> email address, phone number, postal address</li>
            <li><strong>Property information:</strong> land details, building requirements, site addresses</li>
            <li><strong>Financial information:</strong> payment details for deposits and progress claims (processed securely via third-party providers)</li>
            <li><strong>Communication records:</strong> correspondence via email, phone, or our website contact form</li>
            <li><strong>Website usage data:</strong> IP address, browser type, pages visited (via cookies and analytics)</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">2. How We Collect Information</h2>
          <p className="text-gray-600 leading-relaxed">We collect personal information:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Directly from you when you submit an enquiry, request a quote, or enter into a building contract</li>
            <li>From third parties such as real estate agents, conveyancers, financial institutions, or local councils</li>
            <li>Through our website via contact forms, cookies, and analytics tools (e.g., Google Analytics)</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed">We use your personal information to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Respond to your enquiries and provide quotes</li>
            <li>Enter into and perform building contracts</li>
            <li>Obtain necessary council approvals and building permits (including Development Applications and Complying Development Certificates under the NSW <em>Environmental Planning and Assessment Act 1979</em>)</li>
            <li>Coordinate with subcontractors, suppliers, and certifiers</li>
            <li>Process payments and manage accounts</li>
            <li>Comply with statutory warranty and insurance obligations under the <em>Home Building Act 1989 (NSW)</em></li>
            <li>Send project updates, marketing materials, or newsletters (with your consent)</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">4. Disclosure of Your Information</h2>
          <p className="text-gray-600 leading-relaxed">We may disclose your personal information to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Subcontractors, tradespeople, and suppliers engaged on your project</li>
            <li>Architects, engineers, surveyors, and building certifiers</li>
            <li>Local councils and government authorities (e.g., NSW Fair Trading, council planning departments)</li>
            <li>Insurance providers for Home Building Compensation Fund (HBCF) cover</li>
            <li>Financial institutions and payment processors</li>
            <li>Professional advisors including lawyers and accountants</li>
            <li>The Housing Industry Association (HIA) in connection with our membership obligations</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">5. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. This includes secure digital storage, password-protected systems, and restricted access to personal information on a need-to-know basis.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">6. Cookies & Analytics</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website uses cookies and third-party analytics services (such as Google Analytics) to understand how visitors interact with our site. These tools collect anonymous usage data including pages visited, time spent, and referral sources. You can disable cookies through your browser settings, though some features may not function as intended.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">7. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">Under the Australian Privacy Principles, you have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>Access</strong> the personal information we hold about you</li>
            <li><strong>Request correction</strong> of inaccurate or outdated information</li>
            <li><strong>Opt out</strong> of receiving marketing communications at any time</li>
            <li><strong>Lodge a complaint</strong> if you believe we have breached the Privacy Act</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            To exercise any of these rights, please contact us using the details below.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">8. Retention of Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We retain personal information for as long as necessary to fulfil the purposes for which it was collected, and to comply with our legal obligations. For residential building work in NSW, we are required to retain records for a minimum of <strong>7 years</strong> from the date of completion in accordance with the <em>Home Building Act 1989</em> and Australian tax legislation.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">9. Complaints</h2>
          <p className="text-gray-600 leading-relaxed">
            If you are not satisfied with how we have handled your personal information, you may lodge a complaint with us directly. If the matter is not resolved to your satisfaction, you may contact the <strong>Office of the Australian Information Commissioner (OAIC)</strong> at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#FFB800] hover:underline">www.oaic.gov.au</a> or call <strong>1300 363 992</strong>.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">10. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy or wish to make a request regarding your personal information, please contact us:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mt-4 space-y-2 text-gray-700">
            <p><strong>Nebesa Homes Pty Ltd</strong></p>
            <p>Email: <a href="mailto:info@nebesahomes.au" className="text-[#FFB800] hover:underline">info@nebesahomes.au</a></p>
            <p>Location: Sydney, NSW, Australia</p>
            <p>Builder Licence: 380365C</p>
          </div>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">11. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
          </p>

        </div>
      </section>
    </>
  );
}
