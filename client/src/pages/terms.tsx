import { Link } from "wouter";

export default function Terms() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#3D4F5F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Terms of Service</h1>
          <p className="text-white/70 text-lg">Last updated: {new Date().toLocaleDateString("en-AU", { month: "long", year: "numeric" })}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-gray">

          <p className="text-gray-600 leading-relaxed">
            These Terms of Service ("Terms") govern your use of the Nebesa Homes website at <a href="https://nebesahomes.au" className="text-[#FFB800] hover:underline">nebesahomes.au</a> ("Website") and any enquiries, quotes, or engagements with Nebesa Homes Pty Ltd (Builder Licence 380365C) ("we", "our", "us"). By accessing or using our Website, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">1. About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Nebesa Homes Pty Ltd is a licensed residential builder operating in New South Wales, Australia. We hold <strong>Builder Licence 380365C</strong> issued by NSW Fair Trading and are a member of the <strong>Housing Industry Association (HIA)</strong>. All residential building work we perform is carried out in accordance with the <em>Home Building Act 1989 (NSW)</em> and the <em>National Construction Code (NCC)</em>.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">2. Website Use</h2>
          <p className="text-gray-600 leading-relaxed">This Website is provided for informational purposes. By using this Website, you agree to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Use the Website lawfully and not for any fraudulent or malicious purpose</li>
            <li>Not reproduce, duplicate, or copy any content without our prior written consent</li>
            <li>Not attempt to gain unauthorised access to any part of the Website</li>
            <li>Provide accurate and truthful information when submitting enquiries or contact forms</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">3. Enquiries & Quotes</h2>
          <p className="text-gray-600 leading-relaxed">
            Information, pricing, and project details displayed on this Website are indicative only and do not constitute a formal offer or contract. All quotes provided by Nebesa Homes are:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Subject to a detailed site inspection and assessment</li>
            <li>Valid for the period stated on the quote (typically 30 days unless otherwise specified)</li>
            <li>Subject to council approval, engineering requirements, and site conditions</li>
            <li>Exclusive of variations, upgrades, or changes requested after acceptance</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            A binding agreement is only formed when a written building contract is signed by both parties in accordance with the <em>Home Building Act 1989 (NSW)</em>.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">4. Building Contracts</h2>
          <p className="text-gray-600 leading-relaxed">
            All residential building work valued over $5,000 (including GST) is governed by a written contract as required under the <em>Home Building Act 1989 (NSW)</em>. Our contracts comply with all statutory requirements including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>A detailed description of the work to be carried out</li>
            <li>The contract price or a method for calculating the price</li>
            <li>The date for completion or the period within which the work will be completed</li>
            <li>A checklist of statutory warranties</li>
            <li>Details of the cooling-off period (5 business days from signing)</li>
            <li>Details of the Home Building Compensation Fund (HBCF) insurance cover for work over $20,000</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">5. Statutory Warranties</h2>
          <p className="text-gray-600 leading-relaxed">
            Under the <em>Home Building Act 1989 (NSW)</em>, the following statutory warranties apply to all residential building work performed by Nebesa Homes:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Work will be done with due care and skill and in accordance with the plans and specifications</li>
            <li>All materials will be good and suitable for the purpose for which they are used</li>
            <li>Work will be done in accordance with, and will comply with, the <em>Home Building Act 1989</em> and any other relevant law</li>
            <li>Work will be done with due diligence and within the time stipulated or a reasonable time</li>
            <li>Work will result in a dwelling that is reasonably fit for occupation as a dwelling</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            Warranty periods: <strong>6 years</strong> for major defects and <strong>2 years</strong> for all other defects from the date of completion.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">6. Home Building Compensation Fund (HBCF)</h2>
          <p className="text-gray-600 leading-relaxed">
            For residential building work valued over $20,000 (including GST), Nebesa Homes obtains HBCF insurance as required by the <em>Home Building Act 1989 (NSW)</em>. This insurance protects homeowners if the builder is unable to complete the work or rectify defects due to insolvency, death, or disappearance. A certificate of insurance will be provided before any work commences.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">7. Progress Payments</h2>
          <p className="text-gray-600 leading-relaxed">
            Progress payments are structured in accordance with the <em>Home Building Act 1989 (NSW)</em> and are based on completion of defined stages of work. For contracts over $20,000, the maximum deposit is <strong>10% of the contract price</strong>. Detailed payment schedules are included in the building contract.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">8. Variations</h2>
          <p className="text-gray-600 leading-relaxed">
            Any changes to the agreed scope of work, materials, or specifications must be documented in writing as a variation to the building contract. Variations may affect the contract price and completion timeline. We will provide a written quote for any variation before proceeding.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">9. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All content on this Website — including text, images, graphics, logos, and design — is the property of Nebesa Homes Pty Ltd or its licensors and is protected by Australian copyright law. Project photographs remain the property of Nebesa Homes and may not be used without written permission.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">10. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            To the maximum extent permitted by law, Nebesa Homes shall not be liable for any indirect, incidental, or consequential damages arising from your use of this Website. Nothing in these Terms excludes or limits any consumer guarantee under the <em>Australian Consumer Law</em> that cannot be excluded or limited by law.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">11. Dispute Resolution</h2>
          <p className="text-gray-600 leading-relaxed">
            In the event of a dispute relating to residential building work, the parties agree to first attempt resolution through direct negotiation. If unresolved, disputes may be referred to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>NSW Fair Trading</strong> — for complaints about residential building work (<a href="https://www.fairtrading.nsw.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#FFB800] hover:underline">www.fairtrading.nsw.gov.au</a>)</li>
            <li><strong>NSW Civil and Administrative Tribunal (NCAT)</strong> — for formal adjudication of building disputes</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">12. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms are governed by the laws of <strong>New South Wales, Australia</strong>. You agree to submit to the exclusive jurisdiction of the courts of New South Wales for the resolution of any disputes.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">13. Changes to These Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with a revised "Last updated" date. Your continued use of the Website following any changes constitutes acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-heading font-bold text-[#3D4F5F] mt-10 mb-4">14. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mt-4 space-y-2 text-gray-700">
            <p><strong>Nebesa Homes Pty Ltd</strong></p>
            <p>Email: <a href="mailto:info@nebesahomes.au" className="text-[#FFB800] hover:underline">info@nebesahomes.au</a></p>
            <p>Location: Sydney, NSW, Australia</p>
            <p>Builder Licence: 380365C</p>
            <p>HIA Member</p>
          </div>

        </div>
      </section>
    </>
  );
}
