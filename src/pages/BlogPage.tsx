import { useEffect, useRef } from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { PurpleBar } from '../components/PurpleBar';

function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    import('mermaid').then((m) => {
      if (cancelled || !ref.current) return;
      m.default.initialize({ startOnLoad: false, theme: 'dark', themeVariables: { darkMode: true, background: '#0d0d0d', primaryColor: '#1e293b', primaryTextColor: '#e2e8f0', lineColor: '#475569', edgeLabelBackground: '#0d0d0d' } });
      const id = `mermaid-${Math.random().toString(36).slice(2)}`;
      m.default.render(id, chart).then(({ svg }) => {
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
      });
    });
    return () => { cancelled = true; };
  }, [chart]);
  return <div ref={ref} className="overflow-x-auto py-4" />;
}

const SHINES_ITEMS = [
  {
    title: 'AI prompt leakage',
    body: 'This is the clearest use case. Many products target the moment a user tries to paste or send sensitive data into AI tools.',
  },
  {
    title: 'Clipboard and file upload control',
    body: 'Browser-based tools can see the actual user workflow and decide whether content should be allowed into ChatGPT, personal Google Drive, or other unapproved destinations.',
  },
  {
    title: 'Shadow AI discovery',
    body: 'Multiple products emphasize visibility into AI usage across the web, including embedded AI features and unsanctioned tools. This matters because many organizations do not know where AI is already being used.',
  },
  {
    title: 'Browser-native threat detection',
    body: 'Some companies focuses on cloned logins, phishing kits, and session hijacking signals. Other companies covers malicious extensions, malicious files, identity attacks, and QR-code-based threats.',
  },
];

const FALLS_SHORT_ITEMS = [
  {
    title: 'The browser does not see everything',
    body: "Not all data movement happens in the browser. Sensitive information still moves through desktop apps, local folders, email clients, synced drives, terminals, APIs, and native AI apps. If your strategy depends only on browser instrumentation, users can step outside the browser and bypass the control surface entirely.",
  },
  {
    title: 'Browser visibility does not equal full data governance',
    body: 'A browser tool may know what was pasted into a page, but not always how that data should be classified across the rest of the enterprise. Strong DLP still requires data taxonomy, policy governance, exception handling, and integration with enterprise labels or compliance controls. Browser tools are excellent enforcers, but many are not full governance systems on their own.',
  },
  {
    title: 'BDR and DLP are not the same discipline',
    body: 'Some vendors are AI/DLP-first. Others are BDR-first. Some are strongest where detection quality for PII, PHI, PCI, and secrets matters most, with ML-powered detectors. Others are strongest where the problem is phishing, session hijacking, or identity abuse. No single vendor publicly demonstrates absolute leadership across AI governance, DLP precision, phishing detection, extension risk, file malware, and SOC investigation at the same time.',
  },
  {
    title: 'Browser products can introduce operational tradeoffs',
    body: 'The broader and deeper the browser enforcement, the more questions buyers must ask about compatibility, performance, privacy, tamper resistance, and deployment overhead. Extension-first models tend to be lower friction. Secure enterprise browsers like Island or Menlo can offer stronger control boundaries, but they also require a much bigger change-management motion.',
  },
  {
    title: 'Browser controls still need backstops',
    body: "A user may be on an unmanaged device. They may use a browser you do not control. They may move data through a workflow your extension does not inspect. Network and platform backstops still matter.",
  },
];

const MATURITY_GAPS = [
  {
    label: 'Gap 1',
    title: 'Over-specialization',
    body: 'Some vendors are great at AI leakage and weaker at day-to-day browser threats. Others are great at phishing and session defense but less mature in sensitive data classification and redaction. Buyers are often forced to choose between "AI governance" and "browser threat response" even though users experience both as one workflow.',
  },
  {
    label: 'Gap 2',
    title: 'Incomplete architecture messaging',
    body: 'Too many products are marketed as if the browser is the whole answer. It is not. The best outcome comes from combining browser enforcement with network inspection, identity controls, endpoint telemetry, and enterprise DLP.',
  },
  {
    label: 'Gap 3',
    title: 'Operator usability',
    body: "A browser solution is only as good as its policies, its tuning burden, its explainability, and the quality of the events it sends to security teams. Detection that is technically impressive but noisy will be bypassed, ignored, or disabled. A lot of company's public precision claims stand out because the market still lacks enough measurable transparency around classifier quality.",
  },
];

const WHAT_TO_LOOK_FOR = [
  {
    title: 'Real last-mile visibility',
    body: 'Can it see typing, paste, prompt send, upload, download, extension installation, and OAuth grants inside the browser? If it only inspects traffic after the fact, it is not really last-mile security. Multiple products all publicly position around direct in-browser visibility and enforcement.',
  },
  {
    title: 'Strong AI data loss controls',
    body: 'Look for prompt inspection, secrets detection, code detection, file upload protection, destination awareness, and tenant awareness. The best solutions should distinguish between corporate and personal instances of the same service and apply different policies accordingly.',
  },
  {
    title: 'More than just DLP',
    body: 'A modern browser solution should also help with phishing, identity abuse, session theft, malicious extensions, risky OAuth grants, and malicious files. Otherwise, you are securing only one half of the problem.',
  },
  {
    title: 'Flexible response actions',
    body: "Blocking everything is not a strategy. You want a platform that supports warning, redaction, justification, redirecting to approved tools, isolating risky content, and full blocking where necessary. Some products use nudge/justify/redirect model and other's use a monitor/warn/block/redact/bypass model.",
  },
  {
    title: 'Detection quality, not just pattern matching',
    body: 'Ask how the vendor detects secrets, code, and sensitive data. Is it mostly regex? Is there contextual ML? Are false positives manageable?',
  },
  {
    title: 'Broad browser and OS coverage',
    body: 'This matters more than most buyers think. If the solution only works well on Chrome for managed Windows devices, your coverage will erode quickly. Multiple products all publish relatively broad browser or OS support.',
  },
  {
    title: 'SIEM and workflow integration',
    body: 'Detection without operationalization is just telemetry. The platform should export meaningful events, integrate with SIEM/SOAR, and support investigations and incident triage.',
  },
  {
    title: 'Clear privacy and trust posture',
    body: "Because these tools can inspect prompts, clipboard content, and browser behavior, you need clarity around what is captured, retained, processed, and exported.",
  },
];

export function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050505]">
      <Nav />

      <main id="main-content" className="flex-1 flex flex-col items-center">

        {/* Hero */}
        <div
          className="relative w-full min-h-[50vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/images/bk-trees.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#050505]/75 pointer-events-none" aria-hidden />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-blue-400/80 border-t border-blue-400/50 bg-blue-400/5 px-5 py-2.5">
                Blog
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
              Thinking Out Loud on{' '}
              <span
                className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x"
                style={{ display: 'inline-block', paddingBottom: '0.15em' }}
              >
                AI Security
              </span>
            </h1>
            <p className="text-white/50 text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Perspectives from the team at Safana Rails.
            </p>
          </div>
        </div>

        <PurpleBar className="h-10" />

        {/* Article */}
        <article className="w-full max-w-3xl mx-auto px-8 py-20">
          <div className="space-y-5 text-white/65 text-base leading-relaxed">

            {/* Article Title */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
              [BLOG] Browser Security for the AI Era: Why Browser-Based Detection Matters{' '}
              <span
                className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ display: 'inline-block', paddingBottom: '0.15em' }}
              >
                and Why It Still Isn't Enough
              </span>
            </h2>

            {/* Opening */}
            <p>Generative AI has changed the shape of enterprise data loss.</p>
            <p>
              Not because employees suddenly became reckless, but because the browser became the place where sensitive work now happens in plain sight: prompts typed into ChatGPT, source code pasted into copilots, customer data uploaded to AI tools, OAuth permissions granted to browser apps, and files downloaded from unknown websites. In many organizations, the riskiest action no longer starts in email or on the endpoint. It starts in a tab.
            </p>
            <p>
              That has created a wave of browser-first security vendors. Companies are all trying to close the "last mile" gap by watching what happens inside the browser itself.
            </p>
            <p>They are onto something real.</p>
            <p>
              The browser is where security teams finally gain visibility into the exact moment a user pastes a secret into an AI prompt, uploads code to a personal SaaS tenant, installs a malicious extension, or lands on a cloned login page. Traditional controls often miss that context because they live too far away from the action. Network tools see traffic. Endpoint tools see processes and files. But the browser sees intent.
            </p>
            <p>Still, there is a growing misconception in the market: that browser-based detection alone is enough.</p>
            <p>It is not.</p>
            <p className="text-white font-medium border-l-2 border-blue-400/40 pl-5">
              The best modern architecture needs both browser-based controls and non-browser-based controls. One without the other leaves major gaps.
            </p>

            {/* The new risk surface */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-5">
                The New Risk Surface{' '}
                <span className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.15em' }}>
                  Starts in the Browser
                </span>
              </h2>
              <div className="space-y-4">
                <p>
                  The rise of AI has made the browser the control plane for sensitive data movement. Employees paste source code into copilots. They upload spreadsheets into chatbots. They sign into personal AI accounts from corporate devices. They move data between sanctioned and unsanctioned tools using copy and paste, drag and drop, file uploads, and screenshots.
                </p>
                <p>
                  This is exactly why browser-native vendors emphasize "last-mile" enforcement. Some products explicitly frames its value around real-time, in-browser control of text input, clipboard activity, and attachments before the data leaves the page. Some companies positions its browser extension around monitoring and controlling GenAI and embedded AI usage across the web.
                </p>
                <p>That is a major shift from legacy DLP thinking.</p>
                <p>
                  Traditional DLP was built for email, file shares, and network egress. AI leakage often happens earlier, inside the application workflow itself. By the time traffic reaches a proxy, critical context may already be gone.
                </p>
              </div>
            </div>

            {/* Why the industry moved */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-5">
                Why the Industry Moved Towards{' '}
                <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.15em' }}>
                  Browser-Based Security
                </span>
              </h2>
              <p className="mb-6">Security teams are adopting browser-based detection because it solves several problems older tools struggle with.</p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: 'Richer context',
                    body: 'A browser-aware control can know the destination site, whether the account is personal or corporate, what the user pasted, whether they are uploading a file, and which browser extension is involved. That is far more actionable than a generic "HTTPS POST to unknown domain."',
                  },
                  {
                    label: 'Inline response',
                    body: 'Modern vendors now support actions like warn, block, redact, justify, redirect, isolate, or allow with audit trail. Some vendows even include granular clipboard, file, QR code, and extension policies.',
                  },
                  {
                    label: 'Browser detection and response, not just DLP',
                    body: 'That matters because users do not only leak secrets to AI. They also run into phishing pages, malicious browser extensions, session hijacking attempts, OAuth abuse, drive-by downloads, and weaponized files.',
                  },
                ].map(({ label, body }) => (
                  <div key={label} className="border-l-2 border-blue-400/40 pl-5">
                    <p className="font-mono text-xs uppercase tracking-widest text-blue-400/70 mb-1">{label}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The core architecture */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-5">
                The Core{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.15em' }}>
                  Architecture
                </span>
              </h2>
              <div className="space-y-4">
                <p>The market increasingly converges on a simple truth: risk happens at multiple layers, so controls must exist at multiple layers too.</p>
                <p>
                  That model is visible across the current market. Browser-first vendors provide direct visibility into the user action. SSE and proxy tools provide network coverage and policy consistency. Endpoint tools provide OS-level enforcement and device context. Together, they form a more complete control plane than any one category can provide alone.
                </p>
                <MermaidDiagram chart={`flowchart TB
  U["User in Browser UI<br/>typing • copy/paste • file upload/download • OAuth grant"] -->|DOM + UI events| E1["Browser Extension / In-Browser Agent<br/>last-mile sensor+enforcer"]
  U -->|HTTPS traffic| N1["SSE/SWG/Proxy/SASE<br/>network inspection & policy"]
  U -->|Local files/apps| EP["Endpoint DLP/EDR<br/>OS-level signals"]

  E1 -->|Policy checks| PE["Policy Engine<br/>rules + ML/NLP + context"]
  PE -->|Inline action| ACT["Enforcement<br/>allow • warn • block • redact/mask • require justification • redirect"]
  E1 -->|Telemetry| LOG["Audit/Telemetry Pipeline<br/>events + artifacts"]
  LOG --> SIEM["SIEM/SOAR/Ticketing<br/>Splunk • Sentinel • etc"]

  subgraph "Optional deep protections"
    RBI["Isolation / Disposable Browser/File Viewer<br/>cloud rendering or sandbox"]
    FS["File scanning/CDR/sandbox verdicts"]
  end

  ACT --> RBI
  ACT --> FS
  N1 --> SIEM
  EP --> SIEM`} />
              </div>
            </div>

            {/* Where browser-based solutions shine */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-5">
                Where Browser-Based Solutions{' '}
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.15em' }}>
                  Shine
                </span>
              </h2>
              <p className="mb-6">Browser-based security is strongest when the risk happens inside the browser session and needs immediate contextual enforcement.</p>
              <div className="flex flex-col gap-5">
                {SHINES_ITEMS.map(({ title, body }) => (
                  <div key={title} className="border-l-2 border-green-400/40 pl-5">
                    <h3 className="font-heading text-base font-bold text-white mb-1">{title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Where browser-based solutions fall short */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                Where Browser-Based Solutions{' '}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.15em' }}>
                  Fall Short
                </span>
              </h2>
              <p className="mb-6 text-white/45 italic">
                This is where the industry narrative gets too optimistic. A browser-based product can be incredibly valuable and still be incomplete.
              </p>
              <div className="flex flex-col gap-5">
                {FALLS_SHORT_ITEMS.map(({ title, body }, i) => (
                  <div key={title} className="border-l-2 border-red-400/40 pl-5">
                    <p className="font-mono text-xs uppercase tracking-widest text-red-400/60 mb-1">{i + 1}.</p>
                    <h3 className="font-heading text-base font-bold text-white mb-1">{title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The maturity gap */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-5">
                The Maturity Gap{' '}
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-fuchsia-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.15em' }}>
                  in the Industry
                </span>
              </h2>
              <p className="mb-6">The industry has made real progress, but it still falls short in three ways.</p>
              <div className="flex flex-col gap-5">
                {MATURITY_GAPS.map(({ label, title, body }) => (
                  <div key={title} className="border-l-2 border-orange-400/40 pl-5">
                    <p className="font-mono text-xs uppercase tracking-widest text-orange-400/60 mb-1">{label}</p>
                    <h3 className="font-heading text-base font-bold text-white mb-1">{title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What to look for */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-5">
                What to Look for in a{' '}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.15em' }}>
                  Browser-Based Solution
                </span>
              </h2>
              <p className="mb-6">
                If you are evaluating this market, do not just ask whether a product is "browser-based." Ask whether it solves the right problems at the right layer.
              </p>
              <div className="flex flex-col gap-5">
                {WHAT_TO_LOOK_FOR.map(({ title, body }, i) => (
                  <div key={title} className="border-l-2 border-purple-400/40 pl-5">
                    <p className="font-mono text-xs uppercase tracking-widest text-purple-400/60 mb-1">{i + 1}.</p>
                    <h3 className="font-heading text-base font-bold text-white mb-1">{title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The right model */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-5">
                The Right Model: Browser-based{' '}
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.15em' }}>
                  plus Non-Browser-based
                </span>
              </h2>
              <div className="space-y-4">
                <p>The winning strategy is not browser versus non-browser. It is browser plus non-browser.</p>
                <p>
                  Use browser-native controls where user context matters most: AI prompts, clipboard, uploads, phishing, session theft, extensions, and risky in-browser behavior.
                </p>
                <p>
                  Use non-browser controls where enterprise consistency matters most: endpoint posture, file governance, network backstops, sanctioned application controls, identity enforcement, and enterprise DLP policy reuse.
                </p>
                <p>That hybrid model is what actually closes the gap.</p>
                <MermaidDiagram chart={`flowchart LR
  B["Browser-based controls<br/>prompts • clipboard • uploads • phishing • extensions • sessions"]
  N["Non-browser controls<br/>endpoint DLP/EDR • SSE/SWG • identity • enterprise DLP"]
  B --> O["Unified Protection Outcome"]
  N --> O

  O --> A1["Prevent AI data leakage"]
  O --> A2["Stop day-to-day browser threats"]
  O --> A3["Improve SOC visibility and response"]
  O --> A4["Reduce bypasses and blind spots"]`} />
                <p>In the AI era, the browser is the last mile. But it should not be the only mile.</p>
                <p className="text-white font-medium border-l-2 border-blue-400/40 pl-5">
                  The organizations that get this right will not buy the loudest "browser security" story. They will build a layered control strategy that treats the browser as the critical enforcement point for user intent, and then reinforces it with the rest of the stack.
                </p>
                <p className="text-white/40 italic">That is what real coverage looks like.</p>
              </div>
            </div>

            <p className="font-mono text-xs text-white/30 mt-10 uppercase tracking-widest border-t border-white/10 pt-6">
              Last Updated: March 2026
            </p>

          </div>
        </article>
      </main>

      <PurpleBar />
      <Footer />
    </div>
  );
}
