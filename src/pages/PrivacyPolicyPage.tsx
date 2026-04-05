import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { PurpleBar } from '../components/PurpleBar';

const LAST_UPDATED_DATE = '22 March, 2026';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-white/10 pt-8">
      <h2 className="text-xl font-semibold text-[#e5e5e5] mb-4">{title}</h2>
      <div className="space-y-4 text-[#969696] leading-relaxed">{children}</div>
    </section>
  );
}

export function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050505]">
      <Nav />

      <main id="main-content" className="flex flex-1 flex-col items-center px-6 py-16">
        <div className="w-full max-w-3xl">

          <div className="mb-12">
            <p className="text-sm font-mono text-[#666] uppercase tracking-widest mb-3">Privacy</p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-[#666] text-sm">Last updated date: {LAST_UPDATED_DATE}</p>
          </div>

          <div className="space-y-10">

            <Section title="1. Introduction">
              <p>
                Safana Rails (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates a suite of AI guardrail tools and an associated website (collectively, the &ldquo;Service&rdquo;). This Privacy Policy describes how we collect, use, disclose, and safeguard information when you use our Service.
              </p>
              <p>
                By accessing or using the Service, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the Service.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We collect the following categories of information through our Services:</p>

              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="text-[#e5e5e5] font-medium mb-2">2.1 Account Information</h3>
                  <p>
                    When you authenticate via Google OAuth, we collect your email address. This is used solely to associate Service activity with your organisation account and to provide access controls.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#e5e5e5] font-medium mb-2">2.2 Detection Event Data</h3>
                  <p>
                    Our Services monitor activity for the purpose of detecting sensitive or confidential information. When a potential sensitive item is detected, we log the following:
                  </p>
                  <ul className="mt-3 ml-4 space-y-1 list-disc list-outside text-[#969696]">
                    <li>A unique installation or session identifier</li>
                    <li>Your authenticated email address (if signed in)</li>
                    <li>Timestamp of the detection event</li>
                    <li>The URL or context active at the time of detection</li>
                    <li>The user action taken (e.g., allowed, blocked, dismissed)</li>
                    <li>The category of sensitive data detected (e.g., &ldquo;AWS Access Key&rdquo;)</li>
                    <li>A redacted representation of the detected value (first four characters only; the remainder is never transmitted)</li>
                    <li>Your organisation identifier</li>
                    <li>Client version number</li>
                    <li>User-agent or environment string</li>
                  </ul>
                  <p className="mt-3">
                    The actual content of detected secrets or sensitive data is never transmitted to our servers in full. Redaction occurs locally on your device before any data is sent.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#e5e5e5] font-medium mb-2">2.3 Categories of Detected Information</h3>
                  <p>Our Services are configured to identify the following categories of potentially sensitive content:</p>
                  <ul className="mt-3 ml-4 space-y-1 list-disc list-outside text-[#969696]">
                    <li>Cloud provider access and secret keys (AWS, Google Cloud)</li>
                    <li>SSH private keys</li>
                    <li>Generic API keys and tokens</li>
                    <li>JSON Web Tokens (JWTs)</li>
                    <li>Password strings matching common patterns</li>
                    <li>Version control platform personal access tokens (e.g., GitHub)</li>
                    <li>Business-sensitive content identified by AI analysis, including references to mergers and acquisitions, sales pipeline data, financial projections, and investment portfolio information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#e5e5e5] font-medium mb-2">2.4 Usage and Technical Data</h3>
                  <p>
                    We may collect technical data such as client type and version, operating system, and environment details to support troubleshooting and service improvements. This data does not identify you personally.
                  </p>
                </div>
              </div>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information we collect for the following purposes:</p>
              <ul className="mt-3 ml-4 space-y-2 list-disc list-outside">
                <li>To provide, operate, and maintain the Service, including detecting and alerting on sensitive data in accordance with your organization&rsquo;s configured policies</li>
                <li>To generate activity logs and audit trails accessible to your organization administrator</li>
                <li>To improve the accuracy and performance of detection models</li>
                <li>To authenticate users and enforce organizational access controls</li>
                <li>To respond to support inquiries and resolve technical issues</li>
                <li>To comply with applicable legal obligations</li>
              </ul>
              <p className="mt-4">
                We do not use your information for advertising purposes, and we do not sell your personal data to third parties.
              </p>
            </Section>

            <Section title="4. Data Storage and Infrastructure">
              <p>
                Detection event logs are stored in Google Cloud Firestore. Data processing occurs via Google Cloud Functions deployed in the <span className="text-white font-mono text-sm">europe-west1</span> and <span className="text-white font-mono text-sm">us-west1</span> regions.
              </p>
              <p>
                By using the Service, you acknowledge that your data may be processed and stored in these regions. If your organisation has specific data residency requirements, please contact us before deploying our tools.
              </p>
            </Section>

            <Section title="5. Third-Party Services">
              <p>We use the following third-party services in the operation of the Service:</p>
              <ul className="mt-3 ml-4 space-y-2 list-disc list-outside">
                <li><span className="text-[#e5e5e5]">Google OAuth 2.0</span>;for user authentication and identity verification</li>
                <li><span className="text-[#e5e5e5]">Google Cloud Functions</span>;for server-side AI analysis of detected content</li>
                <li><span className="text-[#e5e5e5]">OpenAI API</span>;for AI-based content classification (content fragments may be transmitted in redacted or summarised form; full sensitive values are not transmitted)</li>
              </ul>
              <p className="mt-4">
                Each third party is subject to their own privacy policies. We recommend reviewing the privacy documentation for Google Cloud Platform and OpenAI if you have concerns about how those services handle data.
              </p>
            </Section>

            <Section title="6. Data Sharing and Disclosure">
              <p>We do not sell, trade, or rent your personal information. We may disclose information in the following limited circumstances:</p>
              <ul className="mt-3 ml-4 space-y-2 list-disc list-outside">
                <li><span className="text-[#e5e5e5]">Your organization administrator</span>;detection event logs are accessible to the administrator of your organization&rsquo;s Safana Rails account</li>
                <li><span className="text-[#e5e5e5]">Service providers</span>;as described in Section 5, limited data is shared with third-party infrastructure providers necessary to operate the Service</li>
                <li><span className="text-[#e5e5e5]">Legal requirements</span>;we may disclose information where required by law, court order, or regulatory authority</li>
                <li><span className="text-[#e5e5e5]">Business transfers</span>;in the event of a merger, acquisition, or sale of assets, user data may be transferred to the successor entity, subject to equivalent privacy protections</li>
              </ul>
            </Section>

            <Section title="7. Data Retention">
              <p>
                We retain detection event logs for as long as your organization maintains an active account with Safana Rails. Upon account termination, we will delete or anonymise your organisation&rsquo;s data within 90 days, unless a longer retention period is required by applicable law.
              </p>
              <p>
                You may request deletion of your personal data at any time by contacting us.
              </p>
            </Section>

            <Section title="8. Security">
              <p>
                We implement technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. These include authentication token validation, TLS encryption in transit, and access controls on our cloud infrastructure.
              </p>
              
            </Section>

            <Section title="9. Children's Privacy">
              <p>
                The Service is not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you believe we have inadvertently collected such information, please contact us and we will take steps to delete it.
              </p>
            </Section>

            <Section title="10. Your Rights">
              <p>Depending on your jurisdiction, you may have the following rights with respect to your personal data:</p>
              <ul className="mt-3 ml-4 space-y-2 list-disc list-outside">
                <li>The right to access the personal data we hold about you</li>
                <li>The right to correct inaccurate or incomplete data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to object to or restrict certain processing activities</li>
                <li>The right to data portability</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us. We will respond within the timeframe required by applicable law.
              </p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page and, where the changes are material, notify users via the Service or by email. Your continued use of the Service after changes are posted constitutes your acceptance of the updated policy.
              </p>
            </Section>

          </div>
        </div>
      </main>

      <PurpleBar />
      <Footer />
    </div>
  );
}
