import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { AISecurityPage } from './pages/AISecurityPage';
import { BrowserGuardrailsPage } from './pages/BrowserGuardrailsPage';
import { LaptopFirewallPage } from './pages/LaptopFirewallPage';
import { MCPGatewayPage } from './pages/MCPGatewayPage';
import { CompanyPage } from './pages/CompanyPage';
import { BlogPage } from './pages/BlogPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/ai-security" element={<AISecurityPage />} />
        <Route path="/browser-guardrails" element={<BrowserGuardrailsPage />} />
        <Route path="/laptop-firewall" element={<LaptopFirewallPage />} />
        <Route path="/mcp-gateway" element={<MCPGatewayPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
