import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { PurpleBar } from '../components/PurpleBar';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-white/10 pt-10">
      <h2 className="text-xl font-semibold text-[#e5e5e5] mb-6">{title}</h2>
      <div className="space-y-6 text-[#969696] leading-relaxed">{children}</div>
    </section>
  );
}

function QA({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-[#e5e5e5] font-medium">{question}</h3>
      <div className="space-y-3 text-[#969696]">{children}</div>
    </div>
  );
}

export function AISecurityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050505]">
      <Nav />

      <main id="main-content" className="flex flex-1 flex-col items-center px-6 py-16">
        <div className="w-full max-w-3xl">

          <div className="mb-12">
            <p className="text-sm font-mono text-[#666] uppercase tracking-widest mb-3">Security</p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white mb-4">
              AI Security
            </h1>
            <p className="text-[#969696] text-lg leading-relaxed">
              At Safana Rails, we want to be transparent about how we use AI in our product and what that means for your data.
            </p>
          </div>

          <div className="space-y-12">

            <Section title="How we use AI in our product">
              <p>
                Safana Rails helps organisations stay secure when their teams use AI tools. Our core functionality (guardrails for AI usage) does not rely on AI. It works through deterministic pattern matching, running entirely within your browser.
              </p>
              <p>
                For a subset of more complex, context-dependent detections, we do use third-party AI services. Below we explain exactly where AI is and is not involved.
              </p>

              <QA question="Is AI used for the core secret detection in Safana Rails?">
                <p>
                  No. The detection of credentials, API keys, tokens, and other structured secrets is performed locally within your browser using pattern matching. This process does not involve any AI model and no data is transmitted to external services to perform these detections.
                </p>
              </QA>

              <QA question="Where does Safana Rails use AI?">
                <p>
                  AI is used for a specific category of detection that pattern matching alone cannot reliably perform: identifying sensitive <em>business context</em>. This includes unstructured references to:
                </p>
                <ul className="ml-4 mt-2 space-y-1 list-disc list-outside">
                  <li>Mergers, acquisitions, or strategic transactions</li>
                  <li>Sales pipeline figures and deal data</li>
                  <li>Financial projections and internal forecasts</li>
                  <li>Investment portfolio information</li>
                </ul>
                <p className="mt-3">
                  When content is flagged as a candidate for this type of analysis, a minimal, redacted representation of the relevant text is sent to a third-party AI provider for classification. The full contents are never transmitted.
                </p>
              </QA>

              <QA question="Do I need to use the AI-based detection features?">
                <p>
                  No. AI-assisted classification is not enabled by default and is not an opt-out feature; it requires you to actively connect your own AI provider API key. If you do not supply a key, only pattern-based secret detection will run. You are in full control of whether any content is ever sent to an AI provider.
                </p>
              </QA>
            </Section>

            <Section title="How we protect your data">
              <p>
                We work with third-party AI providers to deliver context-aware detection capabilities. The security of your data is our primary concern, and we hold our providers to the same standards we apply internally.
              </p>

              <QA question="Is Safana Rails customer data used to train or fine-tune any AI model?">
                <p>
                  No. Safana Rails customer data is not retained, processed, or used in any manner to train, fine-tune, or otherwise develop any AI model, whether operated by Safana Rails or a third-party provider. We have explicitly opted out of data use for training purposes with all AI service providers we work with.
                </p>
              </QA>

              <QA question="What data is actually sent to AI providers?">
                <p>
                  When content is submitted for AI-based classification, only a redacted representation is transmitted. Specifically:
                </p>
                <ul className="ml-4 mt-2 space-y-1 list-disc list-outside">
                  <li>Detected credential values are truncated to the first four characters before any data leaves your browser; the remainder is never transmitted</li>
                  <li>AI classification requests contain only the text relevant to the classification task, not screenshots, page content, or full clipboard history</li>
                  <li>No personally identifiable information beyond what is strictly necessary is included in AI requests</li>
                </ul>
              </QA>

              <QA question="How does the data flow work when AI is involved?">
                <p>
                  When a clipboard event is identified as a candidate for AI classification, the extension sends a structured prompt to a text classification service hosted on Google Cloud Functions. That function forwards the relevant, redacted content to our AI provider and returns a classification result. The result is used to determine whether to alert the user.
                </p>
                <p>
                  Customer data submitted to our AI provider is used solely for the purpose of returning a classification response. It is not stored on a long-term basis.
                </p>
              </QA>

              <QA question="How long do AI providers retain processed data?">
                <p>
                  Our AI service providers process submitted data solely for the purpose of generating a response. Data is purged from provider systems within 30 days of processing under the terms of our data processing agreements. We do not permit providers to retain data for any purpose beyond service delivery.
                </p>
              </QA>

              <QA question="Are there data processing agreements in place with AI providers?">
                <p>
                  Yes. Each third-party AI provider we work with has an executed data processing agreement with Safana Rails. These agreements bind providers to security controls equivalent to or stricter than those we operate ourselves, including encryption in transit and at rest, access controls, and data retention limits.
                </p>
              </QA>
            </Section>

            <Section title="Infrastructure and data residency">
              <p>
                Detection event logs and audit data are stored in Google Cloud Firestore. AI classification requests are routed through Google Cloud Functions deployed in the <span className="text-white font-mono text-sm">europe-west1</span> region. Event logging functions are deployed in <span className="text-white font-mono text-sm">us-west1</span>.
              </p>
              <p>
                If your organisation has specific data residency requirements, please contact us before deploying the extension so we can discuss available options.
              </p>
            </Section>

            <Section title="Questions?">
              <p>
                To learn more about Safana Rails&rsquo; security controls, or to discuss your organisation&rsquo;s specific requirements, get in touch
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
