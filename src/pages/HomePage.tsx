import React, { useState, useEffect, useRef } from 'react';
import { Clock, Workflow, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { PurpleBar } from '../components/PurpleBar';
import { AmbientAnimations } from '../components/AmbientAnimations';
import { GraphLines } from '../components/GraphLines';

const DURATION_MS = 2000;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function HomePage() {
  const [count70, setCount70] = useState(0);
  const [count300, setCount300] = useState(0);
  const [sectionsInView, setSectionsInView] = useState({ goingFast: false, expectedOutcome: false, solutions: false, endSection: false });
  const impactSectionRef = useRef<HTMLDivElement>(null);
  const goingFastSectionRef = useRef<HTMLDivElement>(null);
  const solutionsSectionRef = useRef<HTMLDivElement>(null);
  const endSectionRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = impactSectionRef.current;
    if (!el) return;

    let rafId: number;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / DURATION_MS, 1);
          const eased = easeOutCubic(progress);
          setCount70(Math.round(70 * eased));
          setCount300(Math.round(300 * eased));
          if (progress < 1) {
            rafId = requestAnimationFrame(tick);
          }
        };
        rafId = requestAnimationFrame(tick);
      },
      { threshold: 0.05, rootMargin: '0px 0px -80px 0px' }
    );
    observer.observe(el);
    return () => {
      hasAnimatedRef.current = false;
      observer.disconnect();
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const refs = [
      { ref: goingFastSectionRef, key: 'goingFast' as const },
      { ref: impactSectionRef, key: 'expectedOutcome' as const },
      { ref: solutionsSectionRef, key: 'solutions' as const },
      { ref: endSectionRef, key: 'endSection' as const },
    ];
    const observers: IntersectionObserver[] = [];
    refs.forEach(({ ref, key }) => {
      const el = ref.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setSectionsInView((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#050505]">
      <Nav />

      <main id="main-content" className="flex-1 flex flex-col items-center p-8">
        {/* Hero - Safana Rails animation area with background image */}
        <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/bk-trees.jpeg')" }}>
          <div className="absolute inset-0 bg-[#050505]/65 pointer-events-none" aria-hidden />
          <div className="text-center relative z-10 max-w-4xl mx-auto px-6">

            {/* Title */}
            <h1 className="font-heading text-7xl font-bold tracking-tight md:text-9xl mb-6 animate-fade-in-up animation-delay-1000">
              <span className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-purple-800 bg-clip-text text-transparent animate-gradient-x">
                Safana Rails
              </span>
            </h1>

            {/* Colorful bar */}
            <div className="w-48 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-6 rounded-full animate-line-expand animation-delay-2000 animate-pulse"></div>

            {/* Tagline */}
            <p className="font-heading text-2xl md:text-3xl font-semibold text-white/80 mb-5 animate-fade-in-up animation-delay-1000">
              Making it{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">safe</span>
              {' '}to go{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">fast</span>
            </p>

            {/* Description */}
            <p className="font-heading text-base text-white/55 font-light max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-1000">
              Real-time protection at the browser's last mile, enabling{' '}
              <span className="font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">safe AI</span> adoption and developer velocity.
            </p>

            {/* Feature items */}
            <div className="flex flex-wrap items-center justify-center gap-4 animate-pop-in animation-delay-4000">
              <div className="border-t border-blue-400/50 bg-blue-400/5 px-5 py-2.5 hover:bg-blue-400/10 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="font-heading text-xs font-medium text-blue-300 tracking-wide">Real-Time Protection</span>
                </div>
              </div>
              <div className="border-t border-fuchsia-400/50 bg-fuchsia-400/5 px-5 py-2.5 hover:bg-fuchsia-400/10 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <Workflow className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" />
                  <span className="font-heading text-xs font-medium text-fuchsia-300 tracking-wide">Native Threat Defense</span>
                </div>
              </div>
              <div className="border-t border-cyan-400/50 bg-cyan-400/5 px-5 py-2.5 hover:bg-cyan-400/10 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <Brain className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="font-heading text-xs font-medium text-cyan-300 tracking-wide">Identity-Aware</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PurpleBar className="h-10" />

        <div className="text-center w-full">
          {/* Page Divider */}
          <div className="w-full max-w-4xl mx-auto my-20">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* The Problem Section - Going Fast */}
          <div
            ref={goingFastSectionRef}
            className={`relative w-full py-10 bg-cover bg-center bg-no-repeat overflow-hidden transition-all duration-700 ease-out ${
              sectionsInView.goingFast ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ backgroundImage: "url('/images/bk-ice.jpeg')" }}
          >
            <div className="absolute inset-0 bg-[#050505]/80 pointer-events-none" aria-hidden />
            <AmbientAnimations />
            <div className="relative z-10 max-w-6xl mx-auto px-8">
              {/* Problem Title */}
              <div className="text-center mb-8">
                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-red-400/80 mb-4 border-t border-red-400/50 bg-red-400/5 px-5 py-2.5">
                  The Challenge
                </span>
                <h2 className="font-heading font-bold mb-6">
                  <div className="text-5xl md:text-7xl text-white mb-3 leading-tight">
                    AI is Moving Fast,
                  </div>
                  <div className="text-4xl md:text-6xl leading-tight">
                    <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.15em' }}>
                      So Are the Risks
                    </span>
                  </div>
                </h2>
                <p className="text-lg text-white/60 max-w-xl mx-auto mt-4 mb-6 leading-relaxed">
                  The pressure to adopt AI quickly is real, but so are the security gaps it creates.
                </p>
              </div>

              {/* Problem Cards - staircase */}
              <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                {[
                  { num: '01', title: 'Speed pressure', body: 'Adopt AI fast or risk falling behind competitors ready or not.' },
                  { num: '02', title: 'Data exposure', body: 'Sensitive data silently leaking to LLMs and third-party training sets.' },
                  { num: '03', title: 'Shadow AI', body: 'Employees already using unapproved tools outside IT visibility.' },
                  { num: '04', title: 'Vendor chaos', body: "Every app claims to be 'AI-powered' with zero governance or oversight." },
                ].map(({ num, title, body }, i) => (
                  <div
                    key={num}
                    className="border-t-2 border-red-400/60 bg-white/5 px-5 py-3 hover:bg-white/10 transition-colors duration-300"
                    style={{ marginLeft: `${i * 2}rem`, width: `calc(100% - ${i * 2}rem)` }}
                  >
                    <p className="font-mono text-xs uppercase tracking-widest text-red-400/70 mb-2" style={{ letterSpacing: '-0.04em' }}>{title}</p>
                    <div className="text-white/60 text-sm leading-relaxed">{body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Page Divider */}
          <div className="w-full max-w-4xl mx-auto my-20">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Expected Impact and Outcome Section */}
          <div
            ref={impactSectionRef}
            className={`relative w-full py-20 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out ${
              sectionsInView.expectedOutcome ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ backgroundImage: "url('/images/bk-penguin2.jpeg')" }}
          >
            <div className="absolute inset-0 bg-[#050505]/80 pointer-events-none" aria-hidden />
            <GraphLines />
              <div className="relative z-10 max-w-6xl mx-auto px-8">
              {/* Impact Title */}
              <div className="text-center mb-12">
                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-green-400/80 mb-4 border-t border-green-400/50 bg-green-400/5 px-5 py-2.5">
                  Expected Outcomes
                </span>
                <h2 className="font-heading font-bold">
                  <div className="text-5xl md:text-7xl text-white leading-tight">
                    Real Results
                  </div>
                  <div className="text-4xl md:text-6xl leading-tight">
                    <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.15em' }}>
                      Measurable Impact
                    </span>
                  </div>
                </h2>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
                <div className="border-t-2 border-red-400/60 bg-white/5 p-8 hover:bg-white/10 transition-colors duration-300">
                  <p className="font-mono text-xs uppercase tracking-widest text-red-400/70 mb-4" style={{ letterSpacing: '-0.04em' }}>Data Exposure</p>
                  <div className="text-6xl md:text-7xl font-bold text-red-300 mb-3">{count70}%</div>
                  <p className="text-white/60 text-sm leading-relaxed">Drop in sensitive data exposure across AI tools</p>
                </div>
                <div className="border-t-2 border-green-400/60 bg-white/5 p-8 hover:bg-white/10 transition-colors duration-300">
                  <p className="font-mono text-xs uppercase tracking-widest text-green-400/70 mb-4" style={{ letterSpacing: '-0.04em' }}>AI Adoption</p>
                  <div className="text-6xl md:text-7xl font-bold text-green-300 mb-3">{count300}%</div>
                  <p className="text-white/60 text-sm leading-relaxed">Increase in AI tool adoption across the company</p>
                </div>
              </div>

              {/* Bottom Text */}
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  Real-time guardrails, not roadblocks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Divider */}
        <div className="w-full max-w-4xl mx-auto my-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Our Solutions section */}
        <div
          ref={solutionsSectionRef}
          className={`relative w-full py-20 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out ${
            sectionsInView.solutions ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ backgroundImage: "url('/images/bk-otter.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#050505]/80 pointer-events-none" aria-hidden />
          <div className="relative z-10 max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-blue-400/80 mb-4 border-t border-blue-400/50 bg-blue-400/5 px-5 py-2.5">
                Our Solutions
              </span>
              <h2 className="font-heading font-bold">
                <div className="text-5xl md:text-6xl text-white leading-tight">
                  Secure AI at Every Layer,
                </div>
                <div className="text-3xl md:text-4xl leading-tight mt-2">
                  <span className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x" style={{ display: 'inline-block', paddingBottom: '0.15em' }}>
                    from Browser to Endpoint to Infrastructure
                  </span>
                </div>
              </h2>
            </div>

            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
              {[
                {
                  to: '/browser-guardrails',
                  label: 'Browser-based AI Guardrails',
                  body: 'Stop sensitive data before it reaches AI, directly in the browser',
                  border: 'border-blue-400/60',
                  tag: 'text-blue-400/70',
                },
                {
                  to: '/laptop-firewall',
                  label: 'Laptop-based Application & Network Firewall',
                  body: 'Control which apps can connect out, from every managed device',
                  border: 'border-fuchsia-400/60',
                  tag: 'text-fuchsia-400/70',
                },
                {
                  to: '/mcp-gateway',
                  label: 'Centralized MCP Access Gateway',
                  body: 'Standardize and govern MCP access across your organization',
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
          </div>
        </div>

        {/* Page Divider */}
        <div className="w-full max-w-4xl mx-auto my-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* End section with background image */}
        <section
          ref={endSectionRef}
          className={`relative w-full min-h-[60vh] bg-cover bg-center bg-no-repeat mt-20 transition-all duration-700 ease-out ${
            sectionsInView.endSection ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ backgroundImage: "url('/images/bk-food.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#050505]/40 pointer-events-none" aria-hidden />
        </section>
      </main>
      <PurpleBar />
      <Footer />
    </div>
  );
}
