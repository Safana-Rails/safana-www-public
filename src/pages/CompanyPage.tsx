import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { PurpleBar } from '../components/PurpleBar';

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

const PROBLEMS_SEEN = [
  { title: 'Developers pasting sensitive data', body: 'Sensitive data pasted directly into AI tools, with no visibility and no guardrails.' },
  { title: 'Uncontrolled AI connections', body: 'AI applications making outbound connections that nobody could see or stop.' },
  { title: 'Unmanaged MCP adoption', body: 'Teams adopting MCP and agentic AI workflows without any centralized control.' },
  { title: 'Tools missing the critical moment', body: 'Security tools that simply could not see the exact moment data leaves.' },
];

const BELIEFS = [
  { title: 'Enable people to move fast, not slow them down', body: 'Security that creates friction gets bypassed. Controls need to work with how people actually work.' },
  { title: 'Work where users actually are', body: 'Not where we wish they were. In the browser, on the endpoint, in the tools they already use every day.' },
  { title: 'Be precise and contextual, not noisy and reactive', body: 'The right control at the right moment; targeted, not blunt.' },
];

export function CompanyPage() {
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-blue-400/80 border-t border-blue-400/50 bg-blue-400/5 px-5 py-2.5">
                Company
              </span>
            </div>
            <h1 className="font-heading text-5xl font-bold tracking-tight text-white md:text-7xl mb-4 leading-tight">
              Built by Security Engineers.
            </h1>
            <p
              className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x"
              style={{ display: 'block', paddingBottom: '0.1em' }}
            >
              Solving Real Problems.
            </p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
              Safana Rails was founded by three security engineers who kept running into the same issue: the way people work has changed, but security hasn't kept up.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#050505] shadow-sm transition-all duration-200 hover:bg-gray-100 hover:scale-[1.02]"
            >
              Get in Touch <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <PurpleBar className="h-10" />

        <div className="w-full max-w-5xl mx-auto px-8 py-20 space-y-28">

          {/* How We Got Here */}
          <FadeSection>
            <div className="py-14 px-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-blue-400/80 mb-5 border-t border-blue-400/50 bg-blue-400/5 px-5 py-2.5">
                How We Got Here
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                The World Changed.{' '}
                <span className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  Security Didn't.
                </span>
              </h2>
              <p className="text-white/55 text-base max-w-xl leading-relaxed mb-10">
                We kept seeing the same patterns: tools built for a different era, applied to a world that had already moved on.
              </p>
              <div className="flex flex-col gap-3 max-w-xl mb-10">
                {[
                  'AI is everywhere',
                  'The browser is the new workspace',
                  'Every laptop is its own perimeter',
                ].map((item, i) => (
                  <div
                    key={item}
                    className="border-t-2 border-blue-400/60 bg-white/5 px-5 py-3"
                    style={{ marginLeft: `${i * 1.5}rem`, width: `calc(100% - ${i * 1.5}rem)` }}
                  >
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/45 text-base max-w-xl leading-relaxed">
                And the tools meant to protect these environments either don't see the problem, or break how people work. So we decided to build what we actually needed.
              </p>
            </div>
          </FadeSection>

          {/* The Problem We Kept Seeing */}
          <FadeSection>
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-red-400/80 mb-5 border-t border-red-400/50 bg-red-400/5 px-5 py-2.5">
                The Problem We Kept Seeing
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                The Same Patterns,{' '}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  Over and Over
                </span>
              </h2>
              <p className="text-white/55 text-base max-w-xl mx-auto mt-4 leading-relaxed">
                In our day-to-day work, we saw these risks playing out in real environments, affecting real teams.
              </p>
            </div>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              {PROBLEMS_SEEN.map(({ title, body }, i) => (
                <div
                  key={title}
                  className="border-t-2 border-red-400/60 bg-white/5 px-5 py-3 hover:bg-white/10 transition-colors"
                  style={{ marginLeft: `${i * 2}rem`, width: `calc(100% - ${i * 2}rem)` }}
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-red-400/70 mb-1">{title}</p>
                  <p className="text-white/60 text-sm">{body}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-white/40 text-sm mt-8 italic max-w-xl mx-auto">
              The most critical risks were happening at the last mile; inside the browser, on the endpoint, and in user-managed configurations. And there was no clean way to solve it.
            </p>
          </FadeSection>

          {/* What We Believe */}
          <FadeSection>
            <div className="py-14 px-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-purple-400/80 mb-5 border-t border-purple-400/50 bg-purple-400/5 px-5 py-2.5">
                What We Believe
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Security Should{' '}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  Work for People
                </span>
              </h2>
              <p className="text-white/55 text-base max-w-xl leading-relaxed mb-8">
                We believe security should:
              </p>
              <div className="flex flex-col gap-4 max-w-xl mb-10">
                {BELIEFS.map(({ title, body }, i) => (
                  <div
                    key={title}
                    className="border-t-2 border-purple-400/60 bg-white/5 px-5 py-3"
                    style={{ marginLeft: `${i * 2}rem`, width: `calc(100% - ${i * 2}rem)` }}
                  >
                    <p className="font-mono text-xs uppercase tracking-widest text-purple-400/70 mb-1">{title}</p>
                    <p className="text-white/60 text-sm">{body}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-base max-w-xl leading-relaxed italic border-l-2 border-fuchsia-400/40 pl-5">
                You shouldn't have to choose between using modern tools and protecting your data.
              </p>
            </div>
          </FadeSection>

          {/* What We're Building */}
          <FadeSection>
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-green-400/80 mb-5 border-t border-green-400/50 bg-green-400/5 px-5 py-2.5">
                What We're Building
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                A New Control Layer{' '}
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  for the AI Era
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-10">
              {[
                {
                  to: '/browser-guardrails',
                  label: 'Browser-based AI Guardrails',
                  body: 'Protect data at the moment it\'s shared',
                  border: 'border-blue-400/60',
                  tag: 'text-blue-400/70',
                },
                {
                  to: '/laptop-firewall',
                  label: 'Laptop-based Application & Network Firewall',
                  body: 'Control outbound behavior at the endpoint',
                  border: 'border-fuchsia-400/60',
                  tag: 'text-fuchsia-400/70',
                },
                {
                  to: '/mcp-gateway',
                  label: 'Centralized MCP Access Gateway',
                  body: 'Bring order to fragmented AI infrastructure',
                  border: 'border-cyan-400/60',
                  tag: 'text-cyan-400/70',
                },
              ].map(({ to, label, body, border, tag }, i) => (
                <Link
                  key={label}
                  to={to}
                  className={`block border-t-2 ${border} bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors duration-300`}
                  style={{ marginLeft: `${i * 2}rem`, width: `calc(100% - ${i * 2}rem)` }}
                >
                  <p className={`font-mono text-xs uppercase tracking-widest ${tag} mb-1`} style={{ letterSpacing: '-0.04em' }}>{label}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                </Link>
              ))}
            </div>
            <p className="text-white/40 text-sm italic text-center max-w-xl mx-auto">
              Together, these give organizations control across the three places where modern risk actually lives: the browser, the device, and the access layer.
            </p>
          </FadeSection>

          {/* Why We Exist */}
          <FadeSection>
            <div className="py-14 px-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400/80 mb-5 border-t border-cyan-400/50 bg-cyan-400/5 px-5 py-2.5">
                Why We Exist
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                We Started with a Problem{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.25em' }}>
                  We Couldn't Ignore
                </span>
              </h2>
              <div className="flex flex-col gap-4 max-w-xl">
                {[
                  { title: 'Not a product idea', body: "We didn't start with a product idea. We started with a problem we couldn't ignore." },
                  { title: 'A real-world pattern', body: 'Something we saw in real environments, affecting real teams, every day.' },
                  { title: 'Building for you', body: "If you're running into the same challenges, we're building this for you." },
                ].map(({ title, body }, i) => (
                  <div
                    key={title}
                    className="border-t-2 border-cyan-400/60 bg-white/5 px-5 py-3"
                    style={{ marginLeft: `${i * 2}rem`, width: `calc(100% - ${i * 2}rem)` }}
                  >
                    <p className="font-mono text-xs uppercase tracking-widest text-cyan-400/70 mb-1">{title}</p>
                    <p className="text-white/60 text-sm">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>

          {/* CTA */}
          <FadeSection>
            <div className="text-center py-10 border-t border-white/10">
              <p className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
                Get in Touch
              </p>
              <p className="text-white/50 text-base mb-2">
                We're early, we're focused, and we're always looking to learn from teams facing these problems in the real world.
              </p>
              <p className="text-white/40 text-sm">
                If this resonates, we'd love to hear from you.
              </p>
            </div>
          </FadeSection>

        </div>

        {/* Page Divider */}
        <div className="w-full max-w-4xl mx-auto my-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Otter image section */}
        <div
          className="relative w-full min-h-[50vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bk-otter2.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#050505]/40 pointer-events-none" aria-hidden />
        </div>

        <div className="h-20" />

      </main>

      <PurpleBar />
      <Footer />
    </div>
  );
}
