import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Zap, Code, BarChart2 } from 'lucide-react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { PurpleBar } from '../components/PurpleBar';

const KEY_CAPABILITIES = [
  {
    icon: Shield,
    title: 'Real-Time Prompt Protection',
    body: 'Stops sensitive data before it reaches (unapproved) AI tools.',
    color: 'blue' as const,
  },
  {
    icon: Eye,
    title: 'Last-Mile Visibility',
    body: 'Captures what network and endpoint tools miss.',
    color: 'fuchsia' as const,
  },
  {
    icon: Zap,
    title: 'Developer-Friendly Guardrails',
    body: 'No friction. No broken workflows.',
    color: 'cyan' as const,
  },
  {
    icon: Code,
    title: 'Context-Aware Detection',
    body: 'Understands secrets, code, and structured data.',
    color: 'purple' as const,
  },
  {
    icon: BarChart2,
    title: 'AI Usage Visibility',
    body: 'Discover which AI tools are being used;and how.',
    color: 'blue' as const,
  },
] as const;

const colorMap = {
  blue:    { border: 'border-blue-400/50',    bg: 'bg-blue-400/5',    hover: 'hover:bg-blue-400/10',    icon: 'text-blue-400',    label: 'text-blue-300' },
  fuchsia: { border: 'border-fuchsia-400/50', bg: 'bg-fuchsia-400/5', hover: 'hover:bg-fuchsia-400/10', icon: 'text-fuchsia-400', label: 'text-fuchsia-300' },
  cyan:    { border: 'border-cyan-400/50',    bg: 'bg-cyan-400/5',    hover: 'hover:bg-cyan-400/10',    icon: 'text-cyan-400',    label: 'text-cyan-300' },
  purple:  { border: 'border-purple-400/50',  bg: 'bg-purple-400/5',  hover: 'hover:bg-purple-400/10',  icon: 'text-purple-400',  label: 'text-purple-300' },
};

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
}

const WORKFLOW_STEPS = [
  { title: 'Monitors input', body: 'Prompt input, copy/paste, and file uploads tracked in real time.' },
  { title: 'Detects risk', body: 'Secrets, source code, and sensitive structured data identified instantly.' },
  { title: 'Applies guardrails', body: 'Warn, require justification, or block; all in milliseconds, with no noticeable latency.' },
];

const AUDIENCE = [
  { label: 'Security teams', body: 'enabling AI adoption across the org' },
  { label: 'Engineering teams', body: 'protecting proprietary code' },
  { label: 'Compliance teams', body: 'managing data exposure risk' },
];

export function BrowserGuardrailsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050505]">
      <Nav />

      <main id="main-content" className="flex-1 flex flex-col items-center">

        {/* Hero */}
        <div
          className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/images/bk-trees.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#050505]/70 pointer-events-none" aria-hidden />
          <div className="relative z-10 text-center max-w-3xl mx-auto px-8">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-blue-400/80 mb-6 border-t border-blue-400/50 bg-blue-400/5 px-5 py-2.5">
              Product
            </span>
            <h1 className="font-heading text-5xl font-bold tracking-tight text-white md:text-7xl mb-6 leading-tight">
              Secure the{' '}
              <span
                className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x"
                style={{ display: 'inline-block', paddingBottom: '0.1em' }}
              >
                Last Mile
              </span>
              {' '}of AI
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
              Real-time browser protection that keeps sensitive data out of untrusted AI; without slowing developers down.
            </p>
            {/* Video embed */}
            <div className="mt-10 w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/fJq1li9jBIc"
                title="Safana Rails Browser Guard"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <PurpleBar className="h-10" />

        <div className="w-full max-w-5xl mx-auto px-8 py-20 space-y-28">

          {/* The Problem */}
          <FadeSection>
            <div className="py-14 px-10">
              <div>
                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-red-400/80 mb-5 border-t border-red-400/50 bg-red-400/5 px-5 py-2.5">
                  The Problem
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  The Browser has Become the{' '}
                  <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                    Default Interface for Work
                  </span>
                </h2>
                <p className="text-white/55 text-base max-w-xl leading-relaxed mb-10">
                  Everything happens inside it.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mb-10">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-red-400/70 mb-4">Work happens here</p>
                    <div className="flex flex-col gap-3">
                      {[
                        'SaaS apps',
                        'Internal tools',
                        'Documentation',
                        'Developer workflows',
                      ].map((item, i) => (
                        <div
                          key={item}
                          className="border-t-2 border-red-400/60 bg-white/5 px-5 py-3"
                          style={{ marginLeft: `${i * 0.75}rem`, width: `calc(100% - ${i * 0.75}rem)` }}
                        >
                          <span className="text-white/70 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-orange-400/70 mb-4">AI is built into all of it</p>
                    <div className="flex flex-col gap-3">
                      {[
                        'IDEs in the browser',
                        'Productivity tools',
                        'Support systems',
                        'Internal apps',
                        'Third-party SaaS',
                      ].map((item, i) => (
                        <div
                          key={item}
                          className="border-t-2 border-orange-400/60 bg-white/5 px-5 py-3"
                          style={{ marginLeft: `${i * 0.75}rem`, width: `calc(100% - ${i * 0.75}rem)` }}
                        >
                          <span className="text-white/70 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-white/40 text-sm italic max-w-xl">
                  Sensitive data doesn't just get uploaded; it gets typed, pasted, and generated directly inside the browser.
                </p>
              </div>
            </div>
          </FadeSection>

          {/* Why Existing Solutions Fall Short */}
          <FadeSection>
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-orange-400/80 mb-5 border-t border-orange-400/50 bg-orange-400/5 px-5 py-2.5">
                The Gap
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                Why Existing Solutions{' '}
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-red-600 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  Fall Short
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              {[
                { title: "Network DLP", body: "Can't see copy/paste or prompt intent." },
                { title: "Endpoint tools", body: "Miss in-browser activity entirely." },
                { title: "Blocking AI tools", body: "Kills productivity and drives shadow usage." },
              ].map(({ title, body }, i) => (
                <div
                  key={title}
                  className="border-t-2 border-orange-400/60 bg-white/5 px-5 py-3 hover:bg-white/10 transition-colors"
                  style={{ marginLeft: `${i * 2}rem`, width: `calc(100% - ${i * 2}rem)` }}
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-orange-400/70 mb-1">{title}</p>
                  <p className="text-white/60 text-sm">{body}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-white/40 text-sm mt-8 italic">
              Security teams are left choosing between speed and safety.
            </p>
          </FadeSection>

          {/* The Solution */}
          <FadeSection>
            <div className="py-14 px-10">
              <div>
                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-green-400/80 mb-5 border-t border-green-400/50 bg-green-400/5 px-5 py-2.5">
                  The Solution
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Protection at the{' '}
                  <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                    Exact Moment of Risk
                  </span>
                </h2>
                <p className="text-white/55 text-base max-w-xl leading-relaxed mb-8">
                  Safana Rails runs directly in the browser to intervene <em>before</em> sensitive data leaves; guiding users without disrupting flow.
                </p>
                <div className="flex flex-col gap-4 max-w-xl">
                  {WORKFLOW_STEPS.map(({ title, body }, i) => (
                    <div
                      key={title}
                      className="border-t-2 border-green-400/60 bg-white/5 px-5 py-3"
                      style={{ marginLeft: `${i * 2}rem`, width: `calc(100% - ${i * 2}rem)` }}
                    >
                      <p className="font-mono text-xs uppercase tracking-widest text-green-400/70 mb-1">{title}</p>
                      <p className="text-white/60 text-sm">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <img
                    src="/images/safana-browser1.png"
                    alt="Safana Rails browser guardrails in action"
                    className="w-full rounded-lg border border-white/10 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </FadeSection>

          {/* Key Capabilities */}
          <FadeSection>
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-blue-400/80 mb-5 border-t border-blue-400/50 bg-blue-400/5 px-5 py-2.5">
                Capabilities
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                Built for the{' '}
                <span className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  AI Era
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {KEY_CAPABILITIES.map(({ icon: Icon, title, body, color }) => {
                const c = colorMap[color];
                return (
                  <div
                    key={title}
                    className={`border-t-2 ${c.border} ${c.bg} ${c.hover} px-6 py-5 transition-colors duration-300`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className={`w-4 h-4 ${c.icon} shrink-0`} />
                      <p className={`font-mono text-xs uppercase tracking-widest ${c.label}`}>{title}</p>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{body}</p>
                  </div>
                );
              })}
            </div>
          </FadeSection>

          {/* Who It's For */}
          <FadeSection>
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-fuchsia-400/80 mb-5 border-t border-fuchsia-400/50 bg-fuchsia-400/5 px-5 py-2.5">
                Who It's For
              </span>
            </div>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              {AUDIENCE.map(({ label, body }, i) => (
                <div
                  key={label}
                  className="border-t-2 border-fuchsia-400/60 bg-white/5 px-5 py-3 hover:bg-white/10 transition-colors"
                  style={{ marginLeft: `${i * 2}rem`, width: `calc(100% - ${i * 2}rem)` }}
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-fuchsia-400/70 mb-1">{label}</p>
                  <p className="text-white/60 text-sm">{body}</p>
                </div>
              ))}
            </div>
          </FadeSection>

          {/* CTA */}
          <FadeSection>
            <div className="text-center py-10 border-t border-white/10">
              <p className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
                AI isn't going away.
              </p>
              <p className="text-white/50 text-lg mb-2">The question is:</p>
              <p
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x mb-8"
                style={{ display: 'inline-block', paddingBottom: '0.1em' }}
              >
                How do you let your teams use it safely?
              </p>
              <p className="text-white/40 text-sm mb-8">
                No infrastructure. No disruption. Immediate value.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-[#050505] shadow-sm transition-all duration-200 hover:bg-gray-100 hover:scale-[1.02]"
              >
                Start protecting today
              </Link>
            </div>
          </FadeSection>

        </div>
      </main>

      <PurpleBar />
      <Footer />
    </div>
  );
}
