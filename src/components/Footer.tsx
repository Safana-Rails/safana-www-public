import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();
  return <footer className="border-t border-[#dbe4ef] bg-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm md:flex-row md:px-8"><Link to="/" className="flex items-center gap-2.5 font-heading text-lg font-semibold text-[#10233f]"><img src="/icons/hatchmark.svg" alt="Hatchmark" className="h-8 w-8 shrink-0 object-contain" />Hatchmark</Link><div className="flex gap-6 text-[#52657d]"><Link to="/privacy" className="hover:text-[#1769d1]">Privacy</Link><Link to="/contact" className="hover:text-[#1769d1]">Contact</Link></div><p className="text-[#7a8ba0]">© {year} Hatchmark. All rights reserved.</p></div></footer>;
}
