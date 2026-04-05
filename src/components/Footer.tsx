import { Link } from 'react-router-dom';
import hummingLogo from '/icons/humming8.png';

const footerLinks = [
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'AI Security', to: '/ai-security' },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <img src={hummingLogo} alt="Safana Rails logo" className="h-9 w-9 shrink-0 rounded-lg object-contain" />
            <span className="font-heading text-lg font-semibold text-white">Safana Rails</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:justify-end">
            {footerLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-sm text-[#969696] transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#050505]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-[#666]">
            © {year} Safana Rails. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
