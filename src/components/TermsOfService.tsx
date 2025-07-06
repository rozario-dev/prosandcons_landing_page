import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-white dark:bg-dark-bg text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="mb-6">
          Welcome to prosandcons.ai (hereinafter "the Platform" or "we"). These User Terms of Service (hereinafter "the Terms") constitute a legal agreement between you and the Platform, governing your rights and obligations when using our service. By using the Platform, you acknowledge that you have read and agree to comply with these Terms. If you do not agree, please do not use the service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Service Overview</h2>
        <p className="mb-6">
          prosandcons.ai is an AI-driven debate platform where users can input a topic, and AI simulates opposing sides (Pros and Cons) in real-time debates. The platform supports multiple languages, customizable debate styles, and sharing features to enhance user experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Age Requirement:</strong> You must be at least 16 years old (or the minimum legal age in your jurisdiction) to use the Platform.
          </li>
          <li className="mb-2">
            <strong>Account Registration:</strong> You are required to log in via third-party services (e.g., Google, Apple, or GitHub). Using these services indicates your acceptance of their respective terms and policies.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Conduct Guidelines</h2>
        <p className="mb-4">
          When using the Platform, you agree to:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            Not upload or distribute any unlawful, fraudulent, defamatory, obscene, or offensive content.
          </li>
          <li className="mb-2">
            Not engage in illegal activities or actions that harm others' rights via the Platform.
          </li>
          <li className="mb-2">
            Not interfere with, disrupt, or attempt unauthorized access to the Platform's systems through technical means.
          </li>
          <li className="mb-2">
            Be responsible for the accuracy and legality of the content you input.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Platform Ownership:</strong> The Platform's design, code, logos, and underlying AI-generated content are protected by copyright and trademark laws, owned by the Platform or its licensors. You may not copy, modify, or distribute these materials without permission.
          </li>
          <li className="mb-2">
            <strong>User Content:</strong> You retain ownership of your input content but grant the Platform a worldwide, non-exclusive, royalty-free license to store, display, and improve the service.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Privacy Protection</h2>
        <p className="mb-6">
          We respect your privacy. Please review our Privacy Policy to understand how we collect, use, and protect your information. The Platform only processes anonymized data when necessary and does not store sensitive personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. AI Content Disclaimer</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Nature Statement:</strong> AI-generated debate content is for entertainment, educational, or reference purposes only and does not constitute professional advice. The Platform makes no warranties regarding its accuracy or completeness.
          </li>
          <li className="mb-2">
            <strong>User Risk:</strong> You assume full responsibility for any decisions or actions taken based on AI content.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>As-Is Service:</strong> The Platform is provided "as is," with no express or implied warranties, including but not limited to availability or error-free operation.
          </li>
          <li className="mb-2">
            <strong>Liability Scope:</strong> To the extent permitted by law, the Platform shall not be liable for any losses (including data loss or profit loss) arising from the use of the service.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Service Termination</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>User Option:</strong> You may stop using the Platform at any time without notice.
          </li>
          <li className="mb-2">
            <strong>Platform Rights:</strong> We reserve the right to suspend or terminate your access if you violate these Terms or if your actions may harm others or the Platform, without prior notice.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Dispute Resolution</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Governing Law:</strong> These Terms are governed by the laws of Ireland.
          </li>
          <li className="mb-2">
            <strong>Resolution Process:</strong> Disputes arising from these Terms or the service shall first be resolved through negotiation; if unsuccessful, they shall be submitted to the Irish Arbitration Association for resolution.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. General Provisions</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Terms Updates:</strong> We may update these Terms periodically, with the new version posted on the Platform. Continued use after updates signifies your acceptance.
          </li>
          <li className="mb-2">
            <strong>Force Majeure:</strong> The Platform is not liable for service interruptions due to force majeure events (e.g., earthquakes, wars, or cyberattacks).
          </li>
          <li className="mb-2">
            <strong>Contact Us:</strong> [Content appears to be cut off in the source]
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsOfService;