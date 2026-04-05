import React, { useState } from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { PurpleBar } from '../components/PurpleBar';

const AI_JOURNEY_OPTIONS = [
  "We block AI and need strong enforcement",
  "We're thinking about opening up some AI usage",
  "We've already enabled AI, but need governance controls",
  "We don't want to limit any AI usage, but we want visibility",
  "Other",
] as const;

const COUNTRY_CODES = [
  { code: '+1', label: '+1 (US/CA)' },
  { code: '+44', label: '+44 (UK)' },
  { code: '+61', label: '+61 (AU)' },
  { code: '+49', label: '+49 (DE)' },
  { code: '+33', label: '+33 (FR)' },
  { code: '+81', label: '+81 (JP)' },
  { code: '+91', label: '+91 (IN)' },
  { code: '+86', label: '+86 (CN)' },
  { code: '+55', label: '+55 (BR)' },
  { code: '+52', label: '+52 (MX)' },
  { code: '+31', label: '+31 (NL)' },
  { code: '+34', label: '+34 (ES)' },
  { code: '+39', label: '+39 (IT)' },
  { code: '+41', label: '+41 (CH)' },
  { code: '+46', label: '+46 (SE)' },
  { code: '+47', label: '+47 (NO)' },
  { code: '+27', label: '+27 (ZA)' },
  { code: '+971', label: '+971 (AE)' },
  { code: '+65', label: '+65 (SG)' },
  { code: '+82', label: '+82 (KR)' },
];

const labelClass = 'block text-sm font-medium text-[#969696] mb-2';

function fieldClass(error?: string) {
  return `w-full px-4 py-3 rounded-lg bg-white/5 border ${
    error ? 'border-red-500/60 focus:ring-red-400/50 focus:border-red-400/50' : 'border-white/20 focus:ring-blue-400/50 focus:border-blue-400/50'
  } text-white placeholder-[#666] focus:outline-none focus:ring-2 transition-colors`;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-red-400">{message}</p>;
}

function validate(fields: {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  phoneNumber: string;
  aiJourney: string;
}) {
  const errors: Partial<Record<keyof typeof fields, string>> = {};

  if (!fields.firstName.trim()) errors.firstName = 'First name is required.';
  if (!fields.lastName.trim()) errors.lastName = 'Last name is required.';

  if (!fields.workEmail.trim()) {
    errors.workEmail = 'Work email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.workEmail.trim())) {
    errors.workEmail = 'Please enter a valid email address.';
  }

  if (!fields.companyName.trim()) errors.companyName = 'Company name is required.';

  if (fields.phoneNumber.trim() && !/^[\d\s\-().+]{6,}$/.test(fields.phoneNumber.trim())) {
    errors.phoneNumber = 'Please enter a valid phone number.';
  }

  if (!fields.aiJourney) errors.aiJourney = 'Please select an option.';

  return errors;
}

export function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aiJourney, setAiJourney] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState('');
  const [agreeComms, setAgreeComms] = useState(false);

  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<string, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function touch(field: string) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  function revalidate(field: string, overrides?: Partial<{ firstName: string; lastName: string; workEmail: string; companyName: string; phoneNumber: string; aiJourney: string }>) {
    const next = validate({ firstName, lastName, workEmail, companyName, phoneNumber, aiJourney, ...overrides });
    setErrors((prev) => ({ ...prev, [field]: next[field as keyof typeof next] }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { firstName: true, lastName: true, workEmail: true, companyName: true, phoneNumber: true, aiJourney: true };
    setTouched(allTouched);
    const next = validate({ firstName, lastName, workEmail, companyName, phoneNumber, aiJourney });
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          workEmail,
          companyName,
          phone: phoneNumber.trim() ? `${countryCode} ${phoneNumber.trim()}` : '',
          aiJourney,
          hearAboutUs,
          agreeComms,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly at info@safanarails.com.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#050505]">
      <Nav />

      <main id="main-content" className="flex flex-1 flex-col items-center p-8">
        <div
          className="relative w-full max-w-2xl mt-12 rounded-2xl overflow-hidden md:mt-16"
          style={{ backgroundImage: "url('/images/bk-trees.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#050505]/60 pointer-events-none" aria-hidden />
          <div className="relative z-10 p-10 md:p-14">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl mb-2">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-[#969696] text-lg mb-2">
              Send us a message and we'll get back to you soon.
            </p>
            <p className="text-sm text-[#666] mb-10">
              We'll respond within 2 business days.
            </p>

            {submitted ? (
              <div className="text-center py-10">
                <p className="font-heading text-2xl font-bold text-white mb-3">Message received!</p>
                <p className="text-white/55 text-base">We'll be in touch within 2 business days.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value); if (touched.firstName) revalidate('firstName', { firstName: e.target.value }); }}
                    onBlur={() => { touch('firstName'); revalidate('firstName'); }}
                    className={fieldClass(touched.firstName ? errors.firstName : undefined)}
                    placeholder="Jane"
                  />
                  <FieldError message={touched.firstName ? errors.firstName : undefined} />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value); if (touched.lastName) revalidate('lastName', { lastName: e.target.value }); }}
                    onBlur={() => { touch('lastName'); revalidate('lastName'); }}
                    className={fieldClass(touched.lastName ? errors.lastName : undefined)}
                    placeholder="Doe"
                  />
                  <FieldError message={touched.lastName ? errors.lastName : undefined} />
                </div>
              </div>

              <div>
                <label htmlFor="workEmail" className={labelClass}>
                  Work Email
                </label>
                <input
                  id="workEmail"
                  type="email"
                  value={workEmail}
                  onChange={(e) => { setWorkEmail(e.target.value); if (touched.workEmail) revalidate('workEmail', { workEmail: e.target.value }); }}
                  onBlur={() => { touch('workEmail'); revalidate('workEmail'); }}
                  className={fieldClass(touched.workEmail ? errors.workEmail : undefined)}
                  placeholder="jane@company.com"
                />
                <FieldError message={touched.workEmail ? errors.workEmail : undefined} />
              </div>

              <div>
                <label htmlFor="companyName" className={labelClass}>
                  Company Name
                </label>
                <input
                  id="companyName"
                  type="text"
                  value={companyName}
                  onChange={(e) => { setCompanyName(e.target.value); if (touched.companyName) revalidate('companyName', { companyName: e.target.value }); }}
                  onBlur={() => { touch('companyName'); revalidate('companyName'); }}
                  className={fieldClass(touched.companyName ? errors.companyName : undefined)}
                  placeholder="Acme Inc."
                />
                <FieldError message={touched.companyName ? errors.companyName : undefined} />
              </div>

              <div>
                <label htmlFor="phoneNumber" className={labelClass}>
                  Phone <span className="text-[#666] font-normal">(optional)</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className={`${fieldClass()} !w-24 shrink-0 px-2 cursor-pointer [&>option]:bg-[#1a1a1a]`}
                    aria-label="Country code"
                    title="Country code"
                  >
                    {COUNTRY_CODES.map(({ code, label }) => (
                      <option key={code} value={code} title={label}>
                        {code}
                      </option>
                    ))}
                  </select>
                  <div className="min-w-0 flex-1">
                    <input
                      id="phoneNumber"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => { setPhoneNumber(e.target.value); if (touched.phoneNumber) revalidate('phoneNumber', { phoneNumber: e.target.value }); }}
                      onBlur={() => { touch('phoneNumber'); revalidate('phoneNumber'); }}
                      className={fieldClass(touched.phoneNumber ? errors.phoneNumber : undefined)}
                      placeholder="555 123 4567"
                    />
                  </div>
                </div>
                <FieldError message={touched.phoneNumber ? errors.phoneNumber : undefined} />
              </div>

              <div>
                <label htmlFor="aiJourney" className={labelClass}>
                  Where are you in your AI journey?
                </label>
                <select
                  id="aiJourney"
                  value={aiJourney}
                  onChange={(e) => { setAiJourney(e.target.value); if (touched.aiJourney) revalidate('aiJourney', { aiJourney: e.target.value }); }}
                  onBlur={() => { touch('aiJourney'); revalidate('aiJourney'); }}
                  className={`${fieldClass(touched.aiJourney ? errors.aiJourney : undefined)} cursor-pointer [&>option]:bg-[#1a1a1a]`}
                >
                  <option value="">Select one…</option>
                  {AI_JOURNEY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <FieldError message={touched.aiJourney ? errors.aiJourney : undefined} />
              </div>

              <div>
                <label htmlFor="hearAboutUs" className={labelClass}>
                  How did you hear about us?
                </label>
                <input
                  id="hearAboutUs"
                  type="text"
                  value={hearAboutUs}
                  onChange={(e) => setHearAboutUs(e.target.value)}
                  className={fieldClass()}
                  placeholder="e.g. LinkedIn, a friend, search..."
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreeComms}
                  onChange={(e) => setAgreeComms(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-white/30 bg-white/5 text-blue-400 focus:ring-2 focus:ring-blue-400/50 cursor-pointer"
                />
                <span className="text-sm text-[#969696] group-hover:text-[#b0b0b0] transition-colors">
                  I agree to receive other communications from Safana Rails (updates, train puns, and the occasional meme; we'll keep it light 🚂).
                </span>
              </label>

              {submitError && (
                <p className="text-sm text-red-400">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-white hover:bg-gray-100 text-[#050505] px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
            )}
          </div>
        </div>
      </main>
      <PurpleBar />
      <Footer />
    </div>
  );
}
