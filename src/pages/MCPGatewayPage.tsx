import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, Eye, Lock, BarChart2, Users, ChevronRight } from 'lucide-react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { PurpleBar } from '../components/PurpleBar';

const KEY_CAPABILITIES = [
  {
    icon: Server,
    title: 'Centralized MCP Configuration',
    body: 'Manage all MCP server endpoints from one place; no more per-user local config.',
    color: 'blue' as const,
  },
  {
    icon: Shield,
    title: 'Approved Server Inventory',
    body: 'Standardize which MCP servers your organization uses and trusts.',
    color: 'fuchsia' as const,
  },
  {
    icon: Eye,
    title: 'Identity-Aware Access Control',
    body: 'Grant access to MCP servers by user, role, or team.',
    color: 'cyan' as const,
  },
  {
    icon: Lock,
    title: 'Consistent Authentication',
    body: 'Move away from scattered local credentials; manage auth centrally and securely.',
    color: 'purple' as const,
  },
  {
    icon: BarChart2,
    title: 'Operational Visibility',
    body: 'See which MCP connections are active, who is using them, and how.',
    color: 'blue' as const,
  },
  {
    icon: Users,
    title: 'Simplified Onboarding and Offboarding',
    body: 'Grant, update, or remove MCP access centrally; no manual reconfiguration per device.',
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
  { title: 'Acts as the access layer', body: 'The gateway sits between users and MCP services; all connections route through it.' },
  { title: 'Centralizes what matters', body: 'Endpoint configuration, authentication, policy enforcement, connection management, and usage visibility; all in one place.' },
  { title: 'One place to manage, one path to connect', body: 'Admins define and update configuration centrally; employees connect through the approved, standardized path.' },
];

const WHAT_THIS_SOLVES = [
  { title: 'No standard config', body: 'MCP servers configured differently across every machine; replaced with a single source of truth.' },
  { title: 'Scattered credentials', body: 'API keys and tokens stored locally on individual machines; replaced with centrally managed auth.' },
  { title: 'No central visibility', body: 'No way to know which MCP servers are in use or by whom; replaced with operational dashboards.' },
  { title: 'Access control gaps', body: 'Anyone with a config file can connect to any MCP server; replaced with identity-aware access policies.' },
  { title: 'Manual onboarding and offboarding', body: 'Adding or removing MCP access requires touching every machine; replaced with centralized lifecycle management.' },
];

const AUDIENCE = [
  { label: 'Platform teams', body: 'standardizing MCP tooling across engineering' },
  { label: 'Security teams', body: 'needing visibility and control over MCP access and credentials' },
  { label: 'Engineering organizations', body: 'scaling MCP usage beyond individual developers' },
  { label: 'Enterprises', body: 'requiring governance, auditability, and access control over agentic workflows' },
];

export function MCPGatewayPage() {
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
              Bring Control to{' '}
              <span
                className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x"
                style={{ display: 'inline-block', paddingBottom: '0.1em' }}
              >
                MCP at Scale
              </span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
              A centralized gateway for standardizing, securing, and managing MCP access across your organization.
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
                  MCP is Configured{' '}
                  <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.25em' }}>
                    Ad Hoc, Everywhere
                  </span>
                </h2>
                <p className="text-white/55 text-base max-w-xl leading-relaxed mb-10">
                  MCP adoption is growing fast, but today most configuration happens at the individual level; each developer manages their own connections, credentials, and server settings locally.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mb-10">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-red-400/70 mb-4">How MCP is configured today</p>
                    <div className="flex flex-col gap-3">
                      {[
                        'Each developer manages their own config',
                        'MCP server endpoints stored locally',
                        'Credentials scattered across machines',
                        'No standardization across the team',
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
                    <p className="font-mono text-xs uppercase tracking-widest text-orange-400/70 mb-4">What no one can see or control</p>
                    <div className="flex flex-col gap-3">
                      {[
                        'Which MCP servers are in use',
                        'Who has access to what',
                        'Whether credentials are stale or shared',
                        'What happens when someone leaves',
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
                  There is no central view of MCP access, and no way to enforce policy at scale.
                </p>
              </div>
            </div>
          </FadeSection>

          {/* Why Existing Approaches Fall Short */}
          <FadeSection>
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-orange-400/80 mb-5 border-t border-orange-400/50 bg-orange-400/5 px-5 py-2.5">
                The Gap
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                Why Existing Approaches{' '}
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-red-600 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  Fall Short
                </span>
              </h2>
              <p className="text-white/55 text-base max-w-xl mx-auto mt-4 leading-relaxed">
                MCP is configured at the edge; on individual machines, in local config files, by individual developers. That creates real operational and security problems.
              </p>
            </div>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              {[
                { title: 'No consistency', body: 'Different developers use different servers, versions, and configurations.' },
                { title: 'Credential sprawl', body: 'API keys and tokens scattered across local machines with no central rotation or revocation.' },
                { title: 'No access control', body: 'Anyone with a local config can connect to any MCP server; role-based access does not exist.' },
                { title: 'Zero visibility', body: 'No audit trail of which MCP connections were made, by whom, or when.' },
                { title: 'Painful offboarding', body: "Removing a departing employee's MCP access requires manually updating every machine they used." },
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
          </FadeSection>

          {/* The Solution */}
          <FadeSection>
            <div className="py-14 px-10">
              <div>
                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-green-400/80 mb-5 border-t border-green-400/50 bg-green-400/5 px-5 py-2.5">
                  The Solution
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  A Single{' '}
                  <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.25em' }}>
                    Control Layer for MCP
                  </span>
                </h2>
                <p className="text-white/55 text-base max-w-xl leading-relaxed mb-8">
                  Instead of each developer managing their own MCP configuration, the gateway provides a single, centrally managed access layer. Admins define which MCP servers are approved, who can access them, how they authenticate, and what policies apply. Employees connect through a standardized path.
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
                  Centralized MCP Governance
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

          {/* What This Solves */}
          <FadeSection>
            <div className="text-center mb-10">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400/80 mb-5 border-t border-cyan-400/50 bg-cyan-400/5 px-5 py-2.5">
                What This Solves
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                Replacing{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.25em' }}>
                  Fragmented MCP Sprawl
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              {WHAT_THIS_SOLVES.map(({ title, body }, i) => (
                <div
                  key={title}
                  className="border-t-2 border-cyan-400/60 bg-white/5 px-5 py-3 hover:bg-white/10 transition-colors"
                  style={{ marginLeft: `${i * 2}rem`, width: `calc(100% - ${i * 2}rem)` }}
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-cyan-400/70 mb-1">{title}</p>
                  <p className="text-white/60 text-sm">{body}</p>
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
                MCP is Becoming{' '}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  Core Infrastructure
                </span>
              </h2>
            </div>
            <p className="text-white/55 text-base max-w-2xl mx-auto text-center mb-10 leading-relaxed">
              As MCP becomes the standard interface for agentic AI workflows, the way it is configured and accessed becomes a foundational security and operational concern. What works for a single developer does not scale to a team; and what works for a team does not scale to an enterprise.
            </p>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-8">
              {[
                { title: 'Harder to secure', body: 'Decentralized config means no consistent security posture across MCP connections.' },
                { title: 'Harder to support', body: 'IT and platform teams cannot troubleshoot what they cannot see.' },
                { title: 'Harder to standardize', body: 'Without a central registry, teams drift toward incompatible configurations.' },
                { title: 'Harder to trust', body: 'Agentic systems need reliable, auditable access paths; ad hoc config does not provide that.' },
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
                Replace fragmented local configuration with a managed, standardized access layer for MCP.
              </p>
              <p className="text-white/50 text-base mb-8">
                Give employees the flexibility to use MCP, without giving up control.
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
