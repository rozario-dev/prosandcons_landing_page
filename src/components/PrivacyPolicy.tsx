import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-white dark:bg-dark-bg text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="mb-6">
          prosandcons.ai ("we," "us," or "our") is committed to protecting your privacy in strict compliance with the EU General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other applicable international privacy laws. Our core principle is zero retention of user input, ensuring your privacy is securely and transparently handled during real-time AI debates.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Data Roles and Responsibilities</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Data Controllers</h3>
        <p className="mb-4">
          Third-party login service providers (Google, Apple, GitHub) manage your account data. Their privacy policies are as follows:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><a href="#" className="text-blue-600 hover:underline">Google Privacy Policy</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Apple Privacy Policy</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">GitHub Privacy Statement</a></li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Data Processor</h3>
        <p className="mb-6">
          prosandcons.ai only processes anonymized identifiers (e.g., encrypted user IDs) provided by these services and does not collect, store, or link any personal data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data We Process and Purposes</h2>
        <p className="mb-4">
          To provide the AI debate service, we process only the following minimal data:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>User Input:</strong> Encrypted in memory and sent to AI models in real-time, not stored (Retention: 0 seconds; Legal Basis: GDPR Art. 6(1)(b) - Performance of a contract; CCPA - Service provision).
          </li>
          <li className="mb-2">
            <strong>AI Responses:</strong> Anonymized text temporarily cached for compliance and performance optimization (Retention: ≤72 hours; Legal Basis: GDPR Art. 6(1)(f) - Legitimate interests; CCPA - Business purposes). Legitimate interests include content moderation, error analysis, and responding to legal requests (with court orders).
          </li>
          <li className="mb-2">
            <strong>Error Logs:</strong> Only error codes (e.g., HTTP 500) are recorded, without user identifiers (Retention: ≤7 days; Legal Basis: GDPR Art. 6(1)(c) - Legal obligation; CCPA - Security).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Security Measures</h2>
        <p className="mb-4">
          We implement the following technical measures to protect your data:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>User Input Protection:</strong> AES-256 memory encryption with session isolation using Intel SGX/TEE; data is immediately destroyed after the session.
          </li>
          <li className="mb-2">
            <strong>Response Anonymization:</strong> Irreversible anonymization via HMAC-SHA256 hashing with hourly salt rotation.
          </li>
          <li className="mb-2">
            <strong>Data Transmission:</strong> TLS 1.3 (AES-256-GCM) for user-server communication; dual encryption (TLS 1.3 + RSA-4096) for server-AI API interactions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your Privacy Rights</h2>
        <p className="mb-4">
          Under the GDPR and CCPA, you have the following rights, which can be exercised via support@prosandcons.ai:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>Access and Deletion:</strong> Provide the session timestamp and AI model type to request access to or deletion of cached responses (processed within 72 hours).
          </li>
          <li className="mb-2">
            <strong>Opt-Out:</strong> Enable "Incognito Mode" to disable all logging (including responses and errors).
          </li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Rights</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>ChatGPT:</strong> Refer to openai's policy for more information.</li>
          <li><strong>Gemini:</strong> Refer to google gemini's policy for more information</li>
          <li><strong>Grok:</strong> Refer to xAI's policy for more information</li>
          <li><strong>Deepseek:</strong> Refer to deepseek's policy for more information</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party AI Services</h2>
        <p className="mb-4">
          We integrate the following AI models (ChatGPT, Gemini, Grok) for debates. Their data retention policies and our protective measures are as follows:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>ChatGPT:</strong> Default retention of 30 days; we add the X-User-Input-Transient: true header to limit retention.
          </li>
          <li className="mb-2">
            <strong>Gemini:</strong> Retention for 18 months; we append #NoLog to inputs.
          </li>
          <li className="mb-2">
            <strong>Grok:</strong> We rotate API IPs per request for added protection.
          </li>
          <li className="mb-2">
            <strong>Deepseek:</strong> We rotate API IPs per request for added protection.
          </li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Cross-Border Compliance</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>EU-US:</strong> ChatGPT, Grok and Gemini comply with the EU-US Data Privacy Framework</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Compliance and Incident Response</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Legal Requests:</strong> Data requests from EU users are handled via the EU Judicial Portal. Logs are anonymized and cannot be traced to individuals.
          </li>
          <li className="mb-2">
            <strong>Data Breach:</strong> In the event of a breach, we will notify regulators and affected users within 72 hours and provide remediation steps.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Additional Terms</h2>
        <p className="mb-4">
          Children's Privacy: [Content appears to be cut off in the source]
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;