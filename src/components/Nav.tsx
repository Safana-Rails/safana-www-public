import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hummingLogo from '../../icons/humming8.png';

const PRODUCT_ITEMS: { label: string; to?: string }[] = [
  { label: 'Browser-based AI Guardrails', to: '/browser-guardrails' },
  { label: 'Laptop-based Application and Network Firewall', to: '/laptop-firewall' },
  { label: 'Centralized MCP Access Gateway', to: '/mcp-gateway' },
];

const COMPANY_ITEMS: { label: string; to: string }[] = [
  { label: 'About', to: '/company' },
  { label: 'Blog', to: '/blog' },
];

export function Nav() {
  const [productOpen, setProductOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const companyMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setProductOpen(false);
      }
      if (companyMenuRef.current && !companyMenuRef.current.contains(e.target as Node)) {
        setCompanyOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-[#050505] focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8 md:py-5">
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <img src={hummingLogo} alt="Safana Rails logo" className="h-10 w-10 shrink-0 rounded-lg object-contain" />
          <span className="font-heading text-xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 via-fuchsia-400 to-purple-800 bg-clip-text text-transparent md:text-2xl">
            Safana Rails
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {/* Product dropdown */}
          <div ref={menuRef} className="relative">
            <button
              type="button"
              onClick={() => setProductOpen((o) => !o)}
              className="flex items-center gap-1 text-[#969696] font-medium transition-colors hover:text-white focus:outline-none"
            >
              Product
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${productOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {productOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 border-t border-blue-400/30 bg-[#0d0d0d]/95 backdrop-blur-md shadow-xl">
                {PRODUCT_ITEMS.map(({ label, to }) =>
                  to ? (
                    <Link
                      key={label}
                      to={to}
                      onClick={() => setProductOpen(false)}
                      className="block w-full px-5 py-3 text-left text-sm text-[#969696] hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 focus:outline-none"
                    >
                      {label}
                    </Link>
                  ) : (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setProductOpen(false)}
                      className="w-full px-5 py-3 text-left text-sm text-[#969696] hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 focus:outline-none"
                    >
                      {label}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Company dropdown */}
          <div ref={companyMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setCompanyOpen((o) => !o)}
              className="flex items-center gap-1 text-[#969696] font-medium transition-colors hover:text-white focus:outline-none"
            >
              Company
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {companyOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 border-t border-blue-400/30 bg-[#0d0d0d]/95 backdrop-blur-md shadow-xl">
                {COMPANY_ITEMS.map(({ label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => setCompanyOpen(false)}
                    className="block w-full px-5 py-3 text-left text-sm text-[#969696] hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 focus:outline-none"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <Link
          to="/contact"
          className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#050505] shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          Request Early Access
        </Link>
      </nav>
    </header>
  );
}
