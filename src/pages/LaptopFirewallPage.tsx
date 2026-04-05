import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, SlidersHorizontal, EyeOff, Wifi, Server, ChevronRight } from 'lucide-react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { PurpleBar } from '../components/PurpleBar';

const KEY_CAPABILITIES = [
  {
    icon: Shield,
    title: 'Application-Aware Outbound Firewall',
    body: 'See and control which apps can communicate over the network.',
    color: 'blue' as const,
  },
  {
    icon: SlidersHorizontal,
    title: 'Admin-Managed Policy Enforcement',
    body: 'Define rules once and deploy them across the fleet.',
    color: 'fuchsia' as const,
  },
  {
    icon: Globe,
    title: 'Per-App, Per-Destination Control',
    body: 'Allow or block connections by application, host, port, or protocol.',
    color: 'cyan' as const,
  },
  {
    icon: EyeOff,
    title: 'Silent Endpoint Enforcement',
    body: 'Runs directly on the laptop without requiring end users to make decisions.',
    color: 'purple' as const,
  },
  {
    icon: Wifi,
    title: 'Works Anywhere',
    body: 'Applies whether users are in the office, at home, or on the road.',
    color: 'blue' as const,
  },
  {
    icon: Server,
    title: 'Fleet Deployment via MDM',
    body: 'Deploy and manage policies at scale through tools like Kandji.',
    color: 'fuchsia' as const,
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
  { title: 'Monitors outbound traffic', body: 'Activity tracked at the device level in real time.' },
  { title: 'Maps to applications', body: 'Each outbound connection attributed to the specific app that made it.' },
  { title: 'Applies policies', body: 'Allow, block, or restrict; instantly on the device, no network routing required.' },
];

const WHAT_YOU_CAN_CONTROL = [
  'Block unapproved AI desktop apps from reaching external APIs',
  'Restrict developer tools to approved package registries',
  'Prevent internal applications from communicating with unknown endpoints',
  'Limit background services from sending telemetry to third parties',
  'Allow only approved apps to access internal or production services',
];

const AUDIENCE = [
  { label: 'Security teams', body: 'that need stronger endpoint egress control' },
  { label: 'IT and platform teams', body: 'managing fleets of company laptops' },
  { label: 'Organizations scaling AI & SaaS', body: 'adopting developer tooling at speed' },
  { label: 'Enterprises', body: 'that want centralized, application-level network enforcement' },
];

export function LaptopFirewallPage() {
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
                Product
              </span>
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-fuchsia-400/90 border-t border-fuchsia-400/60 bg-fuchsia-400/10 px-5 py-2.5">
                Coming Soon
              </span>
            </div>
            <h1 className="font-heading text-5xl font-bold tracking-tight text-white md:text-7xl mb-6 leading-tight">
              Control What{' '}
              <span
                className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x"
                style={{ display: 'inline-block', paddingBottom: '0.1em' }}
              >
                Leaves the Endpoint
              </span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
              Application-aware outbound firewalling for managed devices, centrally configured by admins and enforced directly on the endpoint.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              Join the waitlist <ChevronRight className="w-4 h-4" />
            </Link>
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
                  Modern Work Happens{' '}
                  <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                    Outside the Perimeter
                  </span>
                </h2>
                <p className="text-white/55 text-base max-w-xl leading-relaxed mb-10">
                  And sensitive data leaves the device through paths most organizations have no control over.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mb-10">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-red-400/70 mb-4">Employees use</p>
                    <div className="flex flex-col gap-3">
                      {[
                        'Personal SaaS tools',
                        'AI apps',
                        'Unknown domains',
                        'Untrusted networks',
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
                    <p className="font-mono text-xs uppercase tracking-widest text-orange-400/70 mb-4">Data leaves through</p>
                    <div className="flex flex-col gap-3">
                      {[
                        'Browser uploads',
                        'API calls',
                        'Background processes',
                        'Local applications',
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
                  Most organizations have limited control over what applications are allowed to connect out, where data is sent, and which destinations should be trusted.
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
                { title: 'Traditional firewalls', body: "Don't extend to individual laptops." },
                { title: 'VPNs and proxies', body: 'Are bypassed or disabled by users.' },
                { title: 'Endpoint tools', body: 'Focus on malware; not data movement.' },
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
              Security teams lack fine-grained control over outbound behavior.
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
                  Enforcement{' '}
                  <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                    Directly on the Endpoint
                  </span>
                </h2>
                <p className="text-white/55 text-base max-w-xl leading-relaxed mb-8">
                  Laptop-based Application and Network Firewall gives enterprises centralized control over outbound connections at the laptop level.
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
                <br></br>
                <p className="text-white/55 text-base max-w-xl leading-relaxed mb-8">
                Instead of relying on users to make security decisions, admins define the rules and deploy them across the organization.
                </p>
              </div>
              
            </div>
          </FadeSection>

          {/* Key Capabilities */}
          <FadeSection>
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-blue-400/80 mb-5 border-t border-blue-400/50 bg-blue-400/5 px-5 py-2.5">
                Key Capabilities
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                Built for{' '}
                <span className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  the Modern Endpoint
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

          {/* What You Can Control */}
          <FadeSection>
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400/80 mb-5 border-t border-cyan-400/50 bg-cyan-400/5 px-5 py-2.5">
                What You Can Control
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Common{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  Policy Examples
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-3 max-w-2xl mx-auto">
              {WHAT_YOU_CAN_CONTROL.map((item, i) => (
                <div
                  key={item}
                  className="border-t-2 border-cyan-400/60 bg-white/5 px-5 py-3 hover:bg-white/10 transition-colors"
                  style={{ marginLeft: `${i * 1}rem`, width: `calc(100% - ${i * 1}rem)` }}
                >
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </FadeSection>

          {/* Why It Matters */}
          <FadeSection>
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-purple-400/80 mb-5 border-t border-purple-400/50 bg-purple-400/5 px-5 py-2.5">
                Why It Matters
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Every Laptop is Now{' '}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  its Own Perimeter
                </span>
              </h2>
            </div>
            <p className="text-white/55 text-base max-w-2xl mx-auto text-center mb-10 leading-relaxed">
              If you cannot control outbound connections on the endpoint, you cannot fully control where company data goes or what software is allowed to talk to the internet.
            </p>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-8">
              {[
                { title: 'Remote work', body: 'Employees operate outside any network perimeter.' },
                { title: 'BYOD', body: 'Personal devices carry corporate data and access.' },
                { title: 'AI-driven workflows', body: 'New tools introduce new exfiltration paths every week.' },
              ].map(({ title, body }, i) => (
                <div
                  key={title}
                  className="border-t-2 border-purple-400/60 bg-white/5 px-5 py-3 hover:bg-white/10 transition-colors"
                  style={{ marginLeft: `${i * 2}rem`, width: `calc(100% - ${i * 2}rem)` }}
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-purple-400/70 mb-1">{title}</p>
                  <p className="text-white/60 text-sm">{body}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-white/40 text-sm italic">
              This product extends network policy directly to the device; without relying on the office network or a fragile proxy path.
            </p>
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
                Deploy lightweight outbound control to managed laptops.
              </p>
              <p className="text-white/50 text-base mb-2">
                Start enforcing application-level network policy in minutes.
              </p>
              <p className="text-white/40 text-sm mb-8">
                No user training. No network redesign. Just endpoint-level control at enterprise scale.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-[#050505] shadow-sm transition-all duration-200 hover:bg-gray-100 hover:scale-[1.02]"
              >
                Join the waitlist <ChevronRight className="w-4 h-4" />
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
