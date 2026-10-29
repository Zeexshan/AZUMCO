import React, { useState, useEffect, useRef } from 'react';
import azumcoLogo from './LOGO.png';
import { AZUMCO_LOGO_DATA_URL } from './logoData';
import {
  Code2,
  TrendingUp,
  Settings,
  ArrowRight,
  CheckCircle2,
  Layers,
  Search,
  Share2,
  Megaphone,
  Palette,
  Video,
  ShieldCheck,
  BarChart3,
  Sparkles,
  ChevronDown,
  Mail,
  Send,
  Workflow,
  Server,
  Zap,
  HelpCircle,
  Menu,
  X,
  Compass,
  Check,
  Clock,
  Terminal,
  Smartphone,
  Globe,
  ShoppingBag,
  Sliders,
  Cpu,
  Monitor,
  Activity,
  ChevronRight,
  Play,
  Loader2,
  AlertCircle,
  FileText,
  Lock,
  Scale,
  Linkedin,
  Instagram,
  Copy,
  ExternalLink
} from 'lucide-react';

function BrandLogo({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <div
      className={`relative rounded-xl bg-[#181B1F] border border-[#343A40] flex items-center justify-center overflow-hidden transition-colors ${className}`}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <img
        src={AZUMCO_LOGO_DATA_URL || azumcoLogo}
        alt="Azumco Logo"
        className="w-full h-full object-contain p-1"
        loading="eager"
        decoding="sync"
      />
    </div>
  );
}

function LiveDeliverableShowcase() {
  const [activeTab, setActiveTab] = useState<'web' | 'seo' | 'ops'>('web');

  return (
    <div className="rounded-xl bg-[#0C0E11] border border-[#252A30] overflow-hidden shadow-2xl relative w-full">
      <div className="absolute top-2 left-2 text-[#3A4048] font-mono text-[10px] pointer-events-none select-none">+</div>
      <div className="absolute top-2 right-2 text-[#3A4048] font-mono text-[10px] pointer-events-none select-none">+</div>

      <div className="bg-[#121519] border-b border-[#252A30] px-3 sm:px-4 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF6A00]" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#252A30]" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#252A30]" />
          </div>
          <span className="text-[10px] sm:text-[11px] font-mono text-[#A7ADB3] tracking-wider uppercase ml-1">
            [AZUMCO // SYS-CONSOLE]
          </span>
        </div>

        <div className="flex items-center gap-1 bg-[#08090B] p-1 rounded-md border border-[#252A30]">
          <button
            type="button"
            onClick={() => setActiveTab('web')}
            className={`px-2.5 sm:px-3 py-1 rounded-sm text-[10px] sm:text-[11px] font-mono uppercase tracking-wider transition-all min-h-[30px] flex items-center ${
              activeTab === 'web'
                ? 'bg-[#FF6A00] text-white'
                : 'text-[#A7ADB3] hover:text-white'
            }`}
          >
            01 Web
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('seo')}
            className={`px-2.5 sm:px-3 py-1 rounded-sm text-[10px] sm:text-[11px] font-mono uppercase tracking-wider transition-all min-h-[30px] flex items-center ${
              activeTab === 'seo'
                ? 'bg-[#FF6A00] text-white'
                : 'text-[#A7ADB3] hover:text-white'
            }`}
          >
            02 Search
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ops')}
            className={`px-2.5 sm:px-3 py-1 rounded-sm text-[10px] sm:text-[11px] font-mono uppercase tracking-wider transition-all min-h-[30px] flex items-center ${
              activeTab === 'ops'
                ? 'bg-[#FF6A00] text-white'
                : 'text-[#A7ADB3] hover:text-white'
            }`}
          >
            03 Ops
          </button>
        </div>
      </div>

      <div className="p-3.5 sm:p-5 bg-[#08090B]">
        {activeTab === 'web' && (
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#121519] border border-[#252A30] rounded-md px-3 py-2 text-xs font-mono">
              <span className="text-[#A7ADB3] truncate">https://prod-cluster.azumco.io</span>
              <span className="text-[#10B981] font-semibold shrink-0 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                99/100 Core Web Vitals
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="p-2 sm:p-3 rounded-md bg-[#121519] border border-[#252A30] text-center">
                <p className="text-[9px] sm:text-[10px] uppercase font-mono text-[#555B61]">Speed Index</p>
                <p className="text-base sm:text-lg font-bold text-white mt-0.5 font-mono">0.38s</p>
                <p className="text-[9px] sm:text-[10px] text-[#FF7A00] font-mono">Sub-sec TTFB</p>
              </div>
              <div className="p-2 sm:p-3 rounded-md bg-[#121519] border border-[#252A30] text-center">
                <p className="text-[9px] sm:text-[10px] uppercase font-mono text-[#555B61]">Shift</p>
                <p className="text-base sm:text-lg font-bold text-white mt-0.5 font-mono">0.00</p>
                <p className="text-[9px] sm:text-[10px] text-[#A7ADB3] font-mono">Zero CLS</p>
              </div>
              <div className="p-2 sm:p-3 rounded-md bg-[#121519] border border-[#252A30] text-center">
                <p className="text-[9px] sm:text-[10px] uppercase font-mono text-[#555B61]">Uptime</p>
                <p className="text-base sm:text-lg font-bold text-white mt-0.5 font-mono">99.99%</p>
                <p className="text-[9px] sm:text-[10px] text-[#10B981] font-mono">24/7 SLA</p>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-md bg-[#121519] border border-[#252A30] space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white">Full-Stack Application Cluster</span>
                <span className="font-mono text-[#FF7A00] text-[10px] sm:text-[11px] uppercase tracking-wider">Edge Live</span>
              </div>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Custom engineered with TypeScript, modular design tokens, server-rendered edge cache, and hardened security.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 rounded-md bg-[#121519] border border-[#252A30] space-y-1.5">
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-[#555B61]">
                <span>google.com/search</span>
                <span>•</span>
                <span className="text-[#FF7A00]">Organic Position #1</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                Commercial Search Dominance // Azumco Verified
              </p>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                High-buyer intent keyword landing pages with programmatic schema graph and technical crawl optimization.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="p-2.5 sm:p-3 rounded-md bg-[#121519] border border-[#252A30]">
                <p className="text-[9px] sm:text-[10px] uppercase font-mono text-[#555B61]">Organic Reach</p>
                <p className="text-lg sm:text-xl font-bold text-white mt-0.5 font-mono">+380%</p>
                <p className="text-[9px] sm:text-[10px] text-[#FF7A00] font-mono">Verified impressions</p>
              </div>
              <div className="p-2.5 sm:p-3 rounded-md bg-[#121519] border border-[#252A30]">
                <p className="text-[9px] sm:text-[10px] uppercase font-mono text-[#555B61]">Qualified Leads</p>
                <p className="text-lg sm:text-xl font-bold text-white mt-0.5 font-mono">4.5x</p>
                <p className="text-[9px] sm:text-[10px] text-[#10B981] font-mono">Direct conversion</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ops' && (
          <div className="space-y-2 font-mono text-xs">
            <div className="p-2.5 sm:p-3 rounded-md bg-[#121519] border border-[#252A30] flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2 h-2 rounded-full bg-[#FF6A00] shrink-0" />
                <span className="text-white font-medium truncate">Automated Lead Webhook Pipeline</span>
              </div>
              <span className="text-[#10B981] text-[10px] sm:text-[11px] shrink-0">&lt; 35ms</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-md bg-[#121519] border border-[#252A30] flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] shrink-0" />
                <span className="text-white font-medium truncate">Continuous Security &amp; Scans</span>
              </div>
              <span className="text-[#A7ADB3] text-[10px] sm:text-[11px] shrink-0">Daily 04:00 UTC</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-md bg-[#121519] border border-[#252A30] flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
                <span className="text-white font-medium truncate">Executive Monthly Telemetry</span>
              </div>
              <span className="text-[#A7ADB3] text-[10px] sm:text-[11px] shrink-0">Real-Time Sync</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ScopeCustomizer() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'web_dev',
    'google_seo',
    'maintenance'
  ]);

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [notes, setNotes] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const presets = [
    { name: 'Fast Launch MVP', ids: ['web_dev', 'google_seo'] },
    { name: 'Full Growth Retainer', ids: ['web_dev', 'google_seo', 'paid_ads', 'maintenance'] },
    { name: 'Custom App + Ops', ids: ['custom_app', 'automation', 'maintenance'] },
    { name: 'Brand & Landing Page', ids: ['brand_design', 'web_dev'] }
  ];

  const options = [
    {
      id: 'web_dev',
      label: 'Custom Website / Landing Page',
      pillar: 'Build',
      time: '2–3 Weeks',
      desc: 'High-converting Next/Vite web application with sub-second TTFB, edge cache & SEO schema'
    },
    {
      id: 'custom_app',
      label: 'Full Web / Mobile Application',
      pillar: 'Build',
      time: '6–10 Weeks',
      desc: 'Scalable multi-screen platform with user dashboards, databases & authentication logic'
    },
    {
      id: 'automation',
      label: 'Business Process Automation',
      pillar: 'Build',
      time: '1–2 Weeks',
      desc: 'Custom webhook pipelines, CRM sync, and automated workflows connecting your stack'
    },
    {
      id: 'google_seo',
      label: 'Google Search Takeover (SEO)',
      pillar: 'Grow',
      time: 'Monthly Retainer',
      desc: 'Commercial high-buyer intent keywords, technical crawl audit, programmatic pages'
    },
    {
      id: 'paid_ads',
      label: 'Targeted Paid Ads (Google & Meta)',
      pillar: 'Grow',
      time: 'Immediate Setup',
      desc: 'Dedicated acquisition funnels targeting customers with verified purchase intent'
    },
    {
      id: 'brand_design',
      label: 'Brand & Visual Identity System',
      pillar: 'Grow',
      time: '1–2 Weeks',
      desc: 'Vector logo system, color tokens, typography hierarchy, and digital guidelines'
    },
    {
      id: 'social_video',
      label: 'Short-Form Video Production',
      pillar: 'Grow',
      time: 'Monthly Retainer',
      desc: 'High-retention social assets, script outlines, and motion edits for brand authority'
    },
    {
      id: 'maintenance',
      label: 'Uptime, Security & Tech Retainer',
      pillar: 'Manage',
      time: 'Monthly Retainer',
      desc: '24/7 uptime monitoring, vulnerability patching, code reviews, and monthly SLA'
    }
  ];

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedCount = selectedServices.length;

  const calculateEstimate = () => {
    if (selectedCount === 0) {
      return {
        timeline: 'Select Capabilities',
        tier: 'Custom Configuration',
        squad: 'Awaiting Selection'
      };
    }
    const hasApp = selectedServices.includes('custom_app');
    const hasWeb = selectedServices.includes('web_dev');
    const hasRetainer = selectedServices.includes('maintenance') || selectedServices.includes('google_seo') || selectedServices.includes('social_video');

    if (hasApp && hasRetainer) {
      return {
        timeline: '8–12 Weeks + Monthly Growth',
        tier: 'Full Enterprise Engineering & Ops',
        squad: '1 Senior Full-Stack Lead, 1 UI/UX Architect, 1 SEO Specialist'
      };
    }
    if (hasApp) {
      return {
        timeline: '6–10 Weeks Sprint',
        tier: 'Custom Application MVP',
        squad: '1 Senior Full-Stack Engineer, 1 Product Designer'
      };
    }
    if (hasWeb && hasRetainer) {
      return {
        timeline: '2–3 Weeks + Monthly Retainer',
        tier: 'Full Digital Presence (Build + Grow)',
        squad: '1 Frontend Engineer, 1 Growth/SEO Lead'
      };
    }
    if (hasWeb) {
      return {
        timeline: '2–3 Weeks Sprint',
        tier: 'Modern High-Velocity Web Platform',
        squad: '1 Senior Web Engineer'
      };
    }
    if (hasRetainer) {
      return {
        timeline: 'Immediate Onboarding (Monthly)',
        tier: 'Growth & Operational Management',
        squad: '1 Dedicated Growth & Reliability Lead'
      };
    }
    return {
      timeline: '1–2 Weeks Sprint',
      tier: 'Specialized Digital Sprint',
      squad: '1 Senior Technical Specialist'
    };
  };

  const estimate = calculateEstimate();

  const handleSendScope = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    if (honeypot.trim().length > 0) {
      setSendSuccess(true);
      return;
    }

    const trimmedName = clientName.trim();
    const trimmedEmail = clientEmail.trim();
    const trimmedCompany = companyName.trim();
    const trimmedNotes = notes.trim();

    if (!trimmedName || !trimmedEmail) {
      setSendError('Please provide your name and work email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setSendError('Please enter a valid work email address.');
      return;
    }

    if (selectedCount === 0) {
      setSendError('Please select at least one capability module.');
      return;
    }

    const now = Date.now();
    try {
      const stored = localStorage.getItem('azumco_scope_timestamps');
      const timestamps: number[] = stored ? JSON.parse(stored) : [];
      const recent = timestamps.filter((t) => now - t < 3600000);

      if (recent.length > 0 && now - recent[recent.length - 1] < 60000) {
        setSendError('Please wait 60 seconds before sending another estimate.');
        return;
      }

      if (recent.length >= 3) {
        setSendError('Limit reached (3 estimates per hour). Reach us directly at contact.azumco@gmail.com.');
        return;
      }
    } catch {
    }

    setIsSending(true);
    setSendError(null);

    const selectedLabels = selectedServices
      .map((id) => {
        const item = options.find((o) => o.id === id);
        return item ? `• [${item.pillar}] ${item.label} (${item.time})` : '';
      })
      .filter(Boolean)
      .join('\n');

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: 'service_5d5440u',
          template_id: 'template_9byg32j',
          user_id: 'yvPfwS9AOeDRV_WLI',
          template_params: {
            client_name: trimmedName,
            client_email: trimmedEmail,
            company_name: trimmedCompany || 'Direct Inquiry',
            selected_modules: selectedLabels,
            estimated_timeline: estimate.timeline,
            recommended_tier: estimate.tier,
            notes: trimmedNotes || 'No additional notes provided.',
            name: trimmedName,
            email: trimmedEmail,
            company: trimmedCompany || 'Direct Inquiry',
            message: `Scope Simulator Submission:\nClient: ${trimmedName} (${trimmedEmail})\nCompany: ${trimmedCompany || 'N/A'}\nTimeline: ${estimate.timeline}\nTier: ${estimate.tier}\n\nSelected Capabilities:\n${selectedLabels}\n\nNotes:\n${trimmedNotes || 'None'}`
          }
        })
      });

      if (!response.ok) {
        throw new Error('Email service response error.');
      }

      try {
        const stored = localStorage.getItem('azumco_scope_timestamps');
        const timestamps: number[] = stored ? JSON.parse(stored) : [];
        const recent = timestamps.filter((t) => now - t < 3600000);
        recent.push(now);
        localStorage.setItem('azumco_scope_timestamps', JSON.stringify(recent));
      } catch {
      }

      setSendSuccess(true);
    } catch {
      setSendError('Unable to send estimate right now. Please email contact.azumco@gmail.com directly.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="rounded-xl sm:rounded-2xl bg-[#0E1013] border border-[#252A30] p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#252A30]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A00] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7A00]">[ AZUMCO // SCOPE-ARCHITECT ]</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#FFFFFF] mt-1 tracking-tight">
            Interactive Scope &amp; Architecture Simulator
          </h3>
          <p className="text-xs sm:text-sm text-[#A7ADB3] mt-1 max-w-2xl">
            Select the digital capabilities your business requires. Our real-time engine models delivery velocity, team allocation, and transmits a full technical brief to your inbox.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <div className="px-3 py-1.5 rounded-md bg-[#181B1F] border border-[#FF6A00]/40 text-xs font-mono font-semibold text-[#FF7A00]">
            {selectedCount} Active Modules
          </div>
        </div>
      </div>

      <div className="pt-4 pb-2 flex flex-wrap items-center gap-2">
        <span className="text-[11px] text-[#555B61] font-mono uppercase">Quick Presets:</span>
        {presets.map((preset) => (
          <button
            key={preset.name}
            type="button"
            onClick={() => setSelectedServices(preset.ids)}
            className="px-2.5 py-1.5 rounded-md text-[11px] font-mono bg-[#15181C] hover:bg-[#1E2228] border border-[#2B3037] text-[#D0D4D9] hover:text-white transition-all active:scale-[0.98] min-h-[32px] flex items-center"
          >
            {preset.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-4 sm:pt-6">
        <div className="lg:col-span-7 space-y-3">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#555B61] block">
            Select Capabilities
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {options.map((opt) => {
              const isChecked = selectedServices.includes(opt.id);
              return (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => toggleService(opt.id)}
                  className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all duration-150 min-h-[100px] active:scale-[0.99] group ${
                    isChecked
                      ? 'bg-[#181B1F] border-[#FF6A00] shadow-sm shadow-[#FF6A00]/15'
                      : 'bg-[#121417] border-[#252A30] hover:border-[#3A4048]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase ${
                        opt.pillar === 'Build' ? 'bg-[#FF6A00]/20 text-[#FF7A00] border border-[#FF6A00]/30' :
                        opt.pillar === 'Grow' ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30' :
                        'bg-[#3B82F6]/20 text-[#60A5FA] border border-[#3B82F6]/30'
                      }`}>
                        {opt.pillar}
                      </span>
                      <span className="text-[10px] text-[#A7ADB3] font-mono">{opt.time}</span>
                    </div>
                    <p className={`text-xs font-bold leading-snug mt-1.5 ${isChecked ? 'text-white' : 'text-[#D0D4D9]'}`}>
                      {opt.label}
                    </p>
                    <p className="text-[11px] text-[#727A82] line-clamp-2 leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-[#23272D] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#555B61]">
                      {isChecked ? 'SELECTED' : 'CLICK TO ADD'}
                    </span>
                    <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                      isChecked ? 'bg-[#FF6A00] border-[#FF6A00] text-white' : 'border-[#343A40] bg-[#111315]'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#121519] rounded-xl border border-[#2B3037] p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#252A30]">
              <span className="text-xs font-mono uppercase text-[#A7ADB3] flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#FF6A00]" />
                Live Architecture Spec
              </span>
              <span className="text-[10px] font-mono text-[#10B981] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                ONLINE
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-left">
              <div className="p-2.5 rounded-lg bg-[#0C0E11] border border-[#252A30]">
                <span className="text-[9px] uppercase text-[#555B61] block">Estimated Velocity</span>
                <span className="text-xs sm:text-sm font-bold text-[#FF7A00] mt-0.5 block truncate">
                  {estimate.timeline}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0C0E11] border border-[#252A30]">
                <span className="text-[9px] uppercase text-[#555B61] block">Delivery Model</span>
                <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block truncate">
                  {estimate.tier}
                </span>
              </div>
            </div>

            <div className="mt-3 p-2.5 rounded-lg bg-[#0C0E11] border border-[#252A30] font-mono text-left">
              <span className="text-[9px] uppercase text-[#555B61] block">Squad Allocation</span>
              <span className="text-xs text-[#D0D4D9] mt-0.5 block">
                {estimate.squad}
              </span>
            </div>

            <div className="mt-4">
              <span className="text-[10px] font-mono uppercase text-[#727A82] block mb-2">
                Active Capabilities ({selectedCount})
              </span>
              {selectedCount === 0 ? (
                <div className="p-4 rounded-lg bg-[#0C0E11] border border-dashed border-[#252A30] text-center text-xs text-[#555B61]">
                  Select at least one module on the left to configure your scope.
                </div>
              ) : (
                <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                  {selectedServices.map((id) => {
                    const opt = options.find((o) => o.id === id);
                    if (!opt) return null;
                    return (
                      <div key={id} className="flex items-center justify-between p-2 rounded-md bg-[#181B1F] border border-[#2B3037] text-xs">
                        <span className="text-[#F2F3F4] truncate pr-2 font-medium">{opt.label}</span>
                        <span className="text-[10px] font-mono text-[#FF7A00] shrink-0">{opt.time}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-[#252A30]">
            {sendSuccess ? (
              <div className="p-4 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30 text-center space-y-2">
                <CheckCircle2 className="w-6 h-6 text-[#10B981] mx-auto" />
                <h4 className="text-sm font-bold text-white">Estimate Transmitted Successfully</h4>
                <p className="text-xs text-[#A7ADB3] leading-relaxed">
                  Your custom scope spec has been sent to your email and dispatched directly to our engineering desk at <span className="text-white font-mono">contact.azumco@gmail.com</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSendSuccess(false)}
                  className="mt-2 text-[11px] font-mono uppercase text-[#FF7A00] hover:underline"
                >
                  Configure another estimate
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendScope} className="space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase font-bold text-white flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#FF6A00]" />
                    Email Me This Custom Estimate
                  </span>
                  <span className="text-[10px] font-mono text-[#555B61]">Direct Delivery</span>
                </div>

                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                {sendError && (
                  <div className="p-2.5 rounded-md bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{sendError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Your Name *"
                    className="w-full px-3 py-2 rounded-md bg-[#0C0E11] border border-[#2B3037] text-white text-xs placeholder-[#555B61] focus:outline-none focus:border-[#FF6A00] min-h-[38px]"
                  />
                  <input
                    type="email"
                    required
                    maxLength={120}
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="Work Email *"
                    className="w-full px-3 py-2 rounded-md bg-[#0C0E11] border border-[#2B3037] text-white text-xs placeholder-[#555B61] focus:outline-none focus:border-[#FF6A00] min-h-[38px]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    maxLength={150}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company / Website"
                    className="w-full px-3 py-2 rounded-md bg-[#0C0E11] border border-[#2B3037] text-white text-xs placeholder-[#555B61] focus:outline-none focus:border-[#FF6A00] min-h-[38px]"
                  />
                  <input
                    type="text"
                    maxLength={200}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Key note / Target launch"
                    className="w-full px-3 py-2 rounded-md bg-[#0C0E11] border border-[#2B3037] text-white text-xs placeholder-[#555B61] focus:outline-none focus:border-[#FF6A00] min-h-[38px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending || selectedCount === 0}
                  className="w-full py-3 rounded-md bg-[#FF6A00] hover:bg-[#FF7A00] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 min-h-[44px] shadow-lg shadow-[#FF6A00]/20 active:scale-[0.99]"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Estimate...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Estimate to My Inbox</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LiveShowcase() {
  const [activeMode, setActiveMode] = useState<'build' | 'grow'>('build');

  return (
    <div className="rounded-xl sm:rounded-2xl bg-[#111315] border border-[#343A40] overflow-hidden shadow-2xl w-full">
      <div className="px-3.5 sm:px-5 py-3 sm:py-4 bg-[#181B1F] border-b border-[#343A40] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E94B00]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#343A40]" />
          </div>
          <span className="text-xs font-mono text-[#A7ADB3] truncate">azumco-system-specification</span>
        </div>

        <div className="flex items-center p-1 rounded-lg bg-[#08090B] border border-[#343A40] w-full sm:w-auto">
          <button
            onClick={() => setActiveMode('build')}
            className={`flex-1 sm:flex-none px-3.5 py-2 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-all min-h-[38px] ${
              activeMode === 'build' ? 'bg-[#FF6A00] text-white shadow-sm' : 'text-[#A7ADB3] hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 shrink-0" />
            <span>Architecture &amp; Code</span>
          </button>
          <button
            onClick={() => setActiveMode('grow')}
            className={`flex-1 sm:flex-none px-3.5 py-2 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-all min-h-[38px] ${
              activeMode === 'grow' ? 'bg-[#FF6A00] text-white shadow-sm' : 'text-[#A7ADB3] hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 shrink-0" />
            <span>Acquisition &amp; Search</span>
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 bg-[#08090B]">
        {activeMode === 'build' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#111315] border border-[#343A40] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF7A00]">01 / Frontend &amp; Runtime</span>
              <p className="text-sm font-semibold text-white">Modern Component Architecture</p>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Zero bloated page builders. Handcrafted TypeScript, Vite bundler, and semantic HTML resulting in instant 99+ Core Web Vitals.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#111315] border border-[#343A40] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF7A00]">02 / Edge Infrastructure</span>
              <p className="text-sm font-semibold text-white">Sub-Second Global CDN</p>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Distributed edge caching with automated SSL, Brotli compression, and immutable assets delivering rapid loads worldwide.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#111315] border border-[#343A40] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF7A00]">03 / Maintenance &amp; Security</span>
              <p className="text-sm font-semibold text-white">Continuous Uptime &amp; Patching</p>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Automated continuous health-checks, vulnerability scanning, and dedicated monthly code reviews to keep your platform resilient.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#111315] border border-[#343A40] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF7A00]">01 / High-Intent SEO</span>
              <p className="text-sm font-semibold text-white">Editorial &amp; Technical Search</p>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Targeting high-buyer intent keywords with verified schema markup, fast crawling paths, and localized authority signals.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#111315] border border-[#343A40] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF7A00]">02 / Acquisition Ads</span>
              <p className="text-sm font-semibold text-white">Conversion-Focused Funnels</p>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Precision Google and Meta advertising funnels built to capture customers searching for your specific solutions.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#111315] border border-[#343A40] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF7A00]">03 / Attribution Reports</span>
              <p className="text-sm font-semibold text-white">Clear Monthly Metrics</p>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Transparent revenue attribution, lead source tracking, and honest analysis with zero inflated vanity numbers.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function LegalModal({
  isOpen,
  initialTab,
  onClose
}: {
  isOpen: boolean;
  initialTab: 'terms' | 'privacy';
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#111315] border border-[#343A40] rounded-xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#D0D4D9]">
        <div className="px-4 sm:px-6 py-4 bg-[#181B1F] border-b border-[#343A40] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#FF6A00]" />
            <span className="font-heading font-bold text-white text-base sm:text-lg">Legal &amp; Compliance Center</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#08090B] p-1 rounded-md border border-[#343A40]">
              <button
                type="button"
                onClick={() => setActiveTab('terms')}
                className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all min-h-[30px] ${
                  activeTab === 'terms'
                    ? 'bg-[#FF6A00] text-white font-bold'
                    : 'text-[#A7ADB3] hover:text-white'
                }`}
              >
                Terms of Service
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('privacy')}
                className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all min-h-[30px] ${
                  activeTab === 'privacy'
                    ? 'bg-[#FF6A00] text-white font-bold'
                    : 'text-[#A7ADB3] hover:text-white'
                }`}
              >
                Privacy Policy
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#22262B] hover:bg-[#343A40] text-[#A7ADB3] hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm leading-relaxed">
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono text-[#FF7A00] uppercase block">Effective Date: May 2026 // Version 2.1</span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">Azumco Master Terms of Service</h3>
                <p className="text-[#A7ADB3] mt-2">
                  These Terms of Service govern all technical development, digital design, search engine optimization, paid advertising, and operational maintenance agreements provided by Azumco (&quot;Agency&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) to our clients (&quot;Client&quot;, &quot;you&quot;).
                </p>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">1. Engagement Scope &amp; Service Delivery</h4>
                <p className="text-[#A7ADB3]">
                  Azumco delivers custom software engineering, frontend/backend architecture, search engine visibility (SEO), advertising funnels, and continuous maintenance as specified in signed project scopes or discovery briefs. All deliverables are built according to professional engineering standards, semantic web specifications, and Core Web Vitals optimization guidelines.
                </p>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">2. Third-Party Infrastructure &amp; Operating Costs</h4>
                <p className="text-[#A7ADB3]">
                  Azumco fees cover professional design, technical architecture, programming, strategy, and project execution. All external infrastructure fees—including but not limited to hosting providers (e.g. AWS, Cloudflare, Google Cloud), domain registries, third-party software subscriptions, transactional email/SMS pipelines, paid API consumption, and platform store fees—are the direct financial responsibility of the Client and are billed at provider cost.
                </p>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">3. Intellectual Property Ownership</h4>
                <p className="text-[#A7ADB3]">
                  Upon complete and final settlement of all agreed project invoices, Azumco transfers full ownership of custom codebases, design tokens, brand identities, and proprietary visual assets created specifically for the Client. Open-source libraries, general utility modules, and pre-existing framework dependencies remain governed by their respective permissive licenses (e.g., MIT, Apache 2.0).
                </p>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">4. Payment Terms &amp; Retainer Cycles</h4>
                <p className="text-[#A7ADB3]">
                  One-time builds require an initial kickoff deposit followed by verified milestone disbursements. Monthly growth and maintenance retainers are invoiced at the inception of each billing cycle with 14-day settlement windows. Retainers may be paused or modified with a 30-day written notice to ensure seamless knowledge transfer and server stabilization.
                </p>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">5. Confidentiality &amp; Non-Disclosure</h4>
                <p className="text-[#A7ADB3]">
                  Both parties covenant to protect and keep confidential all non-public technical specifications, business metrics, customer databases, trade secrets, and API credentials shared during the course of the engagement.
                </p>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">6. Warranties &amp; Uptime Support</h4>
                <p className="text-[#A7ADB3]">
                  Azumco warrants that custom code delivered under active contracts will perform free of critical reproducible syntax defects for thirty (30) days following production launch. Ongoing SLAs, continuous monitoring, and emergency server patchings are covered exclusively under active management retainer agreements.
                </p>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">7. Contact &amp; Governance</h4>
                <p className="text-[#A7ADB3]">
                  Direct legal and contractual inquiries may be dispatched to <span className="text-[#FF7A00] font-mono">contact.azumco@gmail.com</span>.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono text-[#FF7A00] uppercase block">Effective Date: May 2026 // Version 2.1</span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">Azumco Privacy Policy</h3>
                <p className="text-[#A7ADB3] mt-2">
                  At Azumco, we treat client confidentiality and digital privacy with the same rigorous engineering discipline we apply to infrastructure code. This policy outlines how we handle information submitted across our web surfaces and scope calculators.
                </p>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">1. Information We Collect</h4>
                <p className="text-[#A7ADB3]">
                  We collect information you explicitly submit through our discovery intake forms, scope calculators, and briefing requests. This includes your name, work email address, company or project name, preferred service scope, and technical requirement notes.
                </p>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">2. Purpose of Processing</h4>
                <p className="text-[#A7ADB3]">
                  Collected information is utilized strictly to:
                </p>
                <ul className="list-disc list-inside text-[#A7ADB3] space-y-1 pl-2">
                  <li>Generate and email your custom scope blueprints and timeline estimates</li>
                  <li>Conduct preliminary technical diligence before discovery calls</li>
                  <li>Schedule strategy briefings and execute agreed project agreements</li>
                  <li>Deliver direct email responses from our engineering and leadership team</li>
                </ul>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">3. Zero Data Sale Guarantee</h4>
                <p className="text-[#A7ADB3]">
                  We never sell, rent, monetize, or license your contact details, project briefs, or company data to data brokers, ad networks, or external third parties under any circumstances.
                </p>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">4. Transmission &amp; Security</h4>
                <p className="text-[#A7ADB3]">
                  Form transmissions are protected via encrypted TLS/HTTPS channels and routed directly to our designated engineering mailbox (<span className="text-white font-mono">contact.azumco@gmail.com</span>) via secure EmailJS API endpoints. We implement browser-level rate limiting and anti-spam validation to prevent spoofing and data poisoning.
                </p>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">5. Cookies &amp; Local Storage</h4>
                <p className="text-[#A7ADB3]">
                  Our web application does not deploy cross-site tracking cookies or intrusive advertising telemetry. Minimal browser localStorage keys (e.g., submission timestamps) are utilized exclusively for anti-spam rate limiting and functional security safeguards.
                </p>
              </div>

              <div className="space-y-2 border-t border-[#252A30] pt-4">
                <h4 className="font-bold text-white text-base">6. Data Access &amp; Erasure Inquiries</h4>
                <p className="text-[#A7ADB3]">
                  You maintain full rights to inspect, update, or request the permanent deletion of any communications or project records associated with your email. To initiate an inquiry, contact us at <span className="text-[#FF7A00] font-mono">contact.azumco@gmail.com</span>.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="px-4 sm:px-6 py-3.5 bg-[#15181C] border-t border-[#343A40] flex items-center justify-between shrink-0">
          <span className="text-[11px] font-mono text-[#555B61]">Azumco Legal Framework // All rights reserved</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-[#FF6A00] hover:bg-[#FF7A00] text-white text-xs font-mono uppercase tracking-wider font-bold transition-colors min-h-[36px]"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePackageTab, setActivePackageTab] = useState<'monthly' | 'onetime'>('monthly');
  const [legalModalState, setLegalModalState] = useState<{ isOpen: boolean; tab: 'terms' | 'privacy' }>({
    isOpen: false,
    tab: 'terms'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    serviceInterest: 'Full Digital Presence (Build + Grow)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmailToClipboard = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText('contact.azumco@gmail.com');
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (honeypot.trim().length > 0) {
      setSubmitted(true);
      return;
    }

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedBusiness = formData.businessName.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail) {
      setSubmitError('Please enter both your name and work email.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setSubmitError('Please enter a valid email address.');
      return;
    }

    if (trimmedName.length > 100 || trimmedEmail.length > 120 || trimmedBusiness.length > 150 || trimmedMessage.length > 4000) {
      setSubmitError('Character limit exceeded on one or more fields.');
      return;
    }

    const now = Date.now();
    try {
      const stored = localStorage.getItem('azumco_form_timestamps');
      const timestamps: number[] = stored ? JSON.parse(stored) : [];
      const recent = timestamps.filter((t) => now - t < 3600000);

      if (recent.length > 0 && now - recent[recent.length - 1] < 60000) {
        setSubmitError('Please wait at least 60 seconds before sending another inquiry.');
        return;
      }

      if (recent.length >= 3) {
        setSubmitError('Submission limit reached (3 per hour). Please contact us directly at contact.azumco@gmail.com.');
        return;
      }
    } catch {
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: 'service_5d5440u',
          template_id: 'template_s2toicx',
          user_id: 'yvPfwS9AOeDRV_WLI',
          template_params: {
            client_name: trimmedName,
            client_email: trimmedEmail,
            business_name: trimmedBusiness || 'Not specified',
            service_interest: formData.serviceInterest,
            project_overview: trimmedMessage || 'No brief provided',
            name: trimmedName,
            email: trimmedEmail,
            message: `[Service Interest: ${formData.serviceInterest}] [Business: ${trimmedBusiness || 'Not specified'}] ${trimmedMessage || 'No brief provided'}`
          }
        })
      });

      if (!response.ok) {
        throw new Error('Email service returned an error status.');
      }

      try {
        const stored = localStorage.getItem('azumco_form_timestamps');
        const timestamps: number[] = stored ? JSON.parse(stored) : [];
        const recent = timestamps.filter((t) => now - t < 3600000);
        recent.push(now);
        localStorage.setItem('azumco_form_timestamps', JSON.stringify(recent));
      } catch {
      }

      setSubmitted(true);
    } catch {
      setSubmitError('Unable to transmit your brief. Please verify your connection or email contact.azumco@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const pillars = [
    {
      id: 'build',
      icon: Code2,
      tag: 'Technology',
      title: 'Build',
      subtitle: 'Modern software built for scale & speed',
      description:
        'We design and develop fast, secure, and intuitive digital experiences customized to your business operations.',
      capabilities: [
        'Website and high-converting landing page design and development',
        'Custom web applications and native-feel mobile app engineering',
        'Automated workflows and digital tools that save countless operational hours'
      ],
      deliverables: ['Custom Codebase', 'Speed Optimized', 'Mobile Responsive', 'Automated Integrations']
    },
    {
      id: 'grow',
      icon: TrendingUp,
      tag: 'Marketing',
      title: 'Grow',
      subtitle: 'Targeted acquisition & visual prestige',
      description:
        'From high-intent search visibility to scroll-stopping content and targeted ad campaigns, we put your brand where customers look.',
      capabilities: [
        'Search Engine Optimization (SEO) to rank at the top of Google searches',
        'Precision paid advertising campaigns across Google and Meta',
        'Brand identity design, complete logo systems, and visual style kits',
        'Short-form video production and engaging social media creative'
      ],
      deliverables: ['Targeted Traffic', 'Audience Growth', 'Prestige Branding', 'Measurable Returns']
    },
    {
      id: 'manage',
      icon: Settings,
      tag: 'Operations',
      title: 'Manage',
      subtitle: 'Continuous reliability & peace of mind',
      description:
        'We ensure your digital presence never breaks down, with ongoing technical care and proactive security updates.',
      capabilities: [
        'Ongoing technical maintenance, vulnerability fixes, and server oversight',
        'Clear monthly performance reports with transparent metrics and next steps'
      ],
      deliverables: ['High Uptime', 'Security Safeguards', 'Transparent Metrics', 'Reliable Support']
    }
  ];

  const monthlyPackages = [
    {
      name: 'Essential Growth',
      badge: 'Core Retainer',
      forWhom: 'For businesses ready to launch a modern digital presence and establish reliable organic visibility.',
      features: [
        'Custom 5-page responsive website design & development',
        'Targeted local & technical Google SEO optimization',
        'Monthly technical maintenance & security patching',
        '24/7 uptime monitoring & daily cloud backups',
        'Monthly performance report & growth review'
      ],
      popular: false
    },
    {
      name: 'Full Growth Engine',
      badge: 'Most Popular',
      forWhom: 'For companies that want a complete digital partner to build, market, and optimize everything.',
      features: [
        'Complete high-converting website or custom web app',
        'Aggressive Google search rankings (technical & content SEO)',
        'Full management of Google Ads and Meta ad campaigns',
        'Monthly short-form brand video production & social assets',
        'Continuous platform updates, maintenance & uptime SLA',
        'Bi-weekly strategy calls and real-time dashboard'
      ],
      popular: true
    },
    {
      name: 'Full Digital Presence',
      badge: 'Enterprise Partner',
      forWhom: 'For established brands seeking an elite, all-inclusive technology and acquisition department.',
      features: [
        'Full custom web and mobile application engineering',
        'Advanced business workflow automation & webhook integrations',
        'Multi-channel marketing (SEO, paid search, social ads, email)',
        'Dedicated senior engineering & marketing squad',
        'Priority 24/7 emergency support & 99.99% uptime guarantee',
        'Weekly executive performance & revenue attribution sync'
      ],
      popular: false
    }
  ];

  const oneTimeProjects = [
    {
      title: 'High-Converting Website / Landing Page',
      category: 'Web Tech',
      icon: Globe,
      description:
        'A fully tailored website designed to turn visitors into paying customers. Fast, mobile-first, and SEO-optimized from day one.',
      highlights: ['Custom design & coding', 'Mobile responsiveness', 'Sub-second speed', 'Lead capture forms']
    },
    {
      title: 'Brand Identity & Visual Style Kit',
      category: 'Brand Design',
      icon: Palette,
      description:
        'A distinct visual presence that commands respect. Includes primary/secondary logos, typography, color palettes, and brand guidelines.',
      highlights: ['Primary & secondary logos', 'Hex color guidelines', 'Font pairings', 'Ready-to-use style manual']
    },
    {
      title: 'Mobile App (MVP Launch)',
      category: 'Mobile Tech',
      icon: Smartphone,
      description:
        'A focused version of your mobile product with must-have core functionality, enabling real-world user validation and feedback.',
      highlights: ['iOS & Android responsive', 'Core user workflows', 'Cloud synchronization', 'Rapid feedback loop']
    },
    {
      title: 'Full-Scale Custom Application',
      category: 'Enterprise Tech',
      icon: Terminal,
      description:
        'A complete multi-screen web or mobile application with dedicated admin panels, real-time analytics, user dashboards, and custom backend logic.',
      highlights: ['Complex database logic', 'Live admin dashboard', 'Role-based access', 'Scalable microservices']
    }
  ];

  const clientJourney = [
    {
      step: '01',
      title: 'Free Audit / Discovery Call',
      description: 'We learn about your business and figure out what you need.'
    },
    {
      step: '02',
      title: 'Proposal & Package Selection',
      description: 'We offer you a custom, transparent plan and price.'
    },
    {
      step: '03',
      title: 'Build Phase',
      description: 'We create your website, brand, or app with clean modern code.'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'We put your new project out into the real world with full testing.'
    },
    {
      step: '05',
      title: 'Ongoing Growth & Reporting',
      description: 'We market your business and send monthly updates on progress.'
    }
  ];

  const faqs = [
    {
      q: 'Do you only do marketing, or can you build our website too?',
      a: 'We do both! Azumco is a full-service digital presence partner, meaning we can build your website from scratch and then handle all the marketing to bring customers to it.'
    },
    {
      q: 'How much will this cost me?',
      a: 'It depends entirely on what your business needs. We have one-time projects and ongoing monthly marketing packages tailored to your goals. We will give you an exact quote once we understand your specific requirements.'
    },
    {
      q: 'Do you handle the costs for my website address and internet storage space?',
      a: 'Our fee covers the actual work of building and maintaining your project. Costs for internet storage or the website address are billed to you directly by the providers, so you only pay the actual cost for what you use.'
    },
    {
      q: 'How long does a website or app take to build?',
      a: 'A simple, single-page website can be done in just a few weeks. A full custom mobile app can take a few months. We will give you a clear timeline before we start any work.'
    },
    {
      q: 'What if we only want one specific service, not a full package?',
      a: 'That is completely fine! We can customize our services. If you only need a logo or only need help with social media, we can create a specific plan just for that.'
    },
    {
      q: 'Are you a registered company?',
      a: 'We are fully operational and serving clients right now while our formal government registration paperwork is currently in progress.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F2F3F4] flex flex-col font-sans selection:bg-[#FF6A00] selection:text-[#FFFFFF] overflow-x-hidden">
      <header className="sticky top-0 z-40 bg-[#111315]/90 backdrop-blur-md border-b border-[#343A40]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0">
            <BrandLogo size={38} className="group-hover:border-[#FF6A00]" />
            <div>
              <div className="font-heading font-bold text-lg sm:text-xl tracking-tight text-[#FFFFFF] flex items-center gap-1.5 sm:gap-2">
                Azumco
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
              </div>
              <p className="text-[9px] sm:text-[10px] text-[#A7ADB3] tracking-wider uppercase font-medium">Digital Systems &amp; Growth</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-xs xl:text-sm font-medium text-[#A7ADB3]">
            <a href="#services" className="hover:text-[#FF6A00] transition-colors">Capabilities</a>
            <a href="#works" className="hover:text-[#FF6A00] transition-colors">Our Works</a>
            <a href="#simulator" className="hover:text-[#FF6A00] transition-colors">Scope Simulator</a>
            <a href="#packages" className="hover:text-[#FF6A00] transition-colors">Packages</a>
            <a href="#journey" className="hover:text-[#FF6A00] transition-colors">Client Journey</a>
            <a href="#faq" className="hover:text-[#FF6A00] transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden xl:flex items-center gap-2 pr-2 border-r border-[#343A40]">
              <a
                href="https://www.linkedin.com/company/azumco-pvt-ltd/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#181B1F] border border-[#343A40] text-[#A7ADB3] hover:text-[#FF6A00] hover:border-[#FF6A00] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/azumco/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#181B1F] border border-[#343A40] text-[#A7ADB3] hover:text-[#FF6A00] hover:border-[#FF6A00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-md bg-[#FF6A00] hover:bg-[#FF7A00] text-white text-[11px] sm:text-xs font-mono uppercase tracking-wider whitespace-nowrap active:bg-[#E94B00] transition-colors min-h-[40px]"
            >
              <span>Schedule Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-[#181B1F] border border-[#343A40] text-[#A7ADB3] hover:text-[#FFFFFF] min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111315] border-b border-[#343A40] px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#A7ADB3] hover:text-[#FF6A00]"
            >
              Capabilities
            </a>
            <a
              href="#works"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#A7ADB3] hover:text-[#FF6A00]"
            >
              Our Works
            </a>
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#A7ADB3] hover:text-[#FF6A00]"
            >
              Scope Simulator
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#A7ADB3] hover:text-[#FF6A00]"
            >
              Packages
            </a>
            <a
              href="#journey"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#A7ADB3] hover:text-[#FF6A00]"
            >
              Client Journey
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#A7ADB3] hover:text-[#FF6A00]"
            >
              FAQ
            </a>

            <div className="pt-3 border-t border-[#252A30] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#A7ADB3] bg-[#0C0E11] p-2.5 rounded-md border border-[#252A30]">
                <a href="mailto:contact.azumco@gmail.com" className="text-[#F2F3F4] hover:text-[#FF6A00] flex items-center gap-1.5 truncate">
                  <Mail className="w-3.5 h-3.5 text-[#FF6A00] shrink-0" />
                  <span className="truncate">contact.azumco@gmail.com</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="px-2 py-1 rounded bg-[#181B1F] border border-[#343A40] text-[10px] text-[#A7ADB3] hover:text-white shrink-0 ml-2"
                >
                  {emailCopied ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/company/azumco-pvt-ltd/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded bg-[#181B1F] border border-[#343A40] text-xs font-mono text-[#F2F3F4] hover:border-[#FF6A00]"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#FF6A00]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/azumco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded bg-[#181B1F] border border-[#343A40] text-xs font-mono text-[#F2F3F4] hover:border-[#FF6A00]"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#FF6A00]" />
                  <span>Instagram</span>
                </a>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#FF6A00] text-white text-xs font-mono uppercase tracking-wider whitespace-nowrap min-h-[44px]"
              >
                <span>Schedule Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 border-b border-[#252A30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#121519] border border-[#252A30] text-[10px] sm:text-[11px] font-mono text-[#A7ADB3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[#F2F3F4] font-medium">AZUMCO-SYS // ACTIVE</span>
                <span className="text-[#555B61]">•</span>
                <span className="text-[#FF7A00]">Q4 DISCOVERY OPEN</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] leading-[1.08]">
                WE ARCHITECT &amp; ACCELERATE <span className="font-editorial italic font-normal text-[#FF7A00] block sm:inline">DIGITAL PRESENCE.</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#A7ADB3] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                A unified engineering and marketing partner. We build custom web applications, deploy organic search infrastructure, and run continuous operations without vendor gaps.
              </p>

              <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#FF6A00] hover:bg-[#FF7A00] text-white font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors min-h-[46px]"
                >
                  <span>Schedule Discovery Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#works"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-[#121519] hover:bg-[#181B1F] border border-[#252A30] text-[#F2F3F4] font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors min-h-[46px]"
                >
                  <span>Explore Outcomes</span>
                  <ChevronRight className="w-4 h-4 text-[#FF7A00]" />
                </a>
              </div>

              <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-3 border-t border-[#252A30] text-left font-mono">
                <div>
                  <p className="text-[9px] sm:text-[10px] text-[#555B61] uppercase tracking-wider">TTFB Velocity</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">&lt; 0.4s Edge</p>
                  <p className="text-[9px] sm:text-[10px] text-[#10B981] mt-0.5">Zero layout shift</p>
                </div>
                <div className="border-l border-[#252A30] pl-2 sm:pl-3">
                  <p className="text-[9px] sm:text-[10px] text-[#555B61] uppercase tracking-wider">Search Rank</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">#1 Positions</p>
                  <p className="text-[9px] sm:text-[10px] text-[#FF7A00] mt-0.5">High-intent index</p>
                </div>
                <div className="border-l border-[#252A30] pl-2 sm:pl-3">
                  <p className="text-[9px] sm:text-[10px] text-[#555B61] uppercase tracking-wider">Delivery</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">1 Unified Team</p>
                  <p className="text-[9px] sm:text-[10px] text-[#A7ADB3] mt-0.5">0 Vendor gaps</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative w-full">
              <LiveDeliverableShowcase />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-[#08090B] border-b border-[#343A40]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiveShowcase />
        </div>
      </section>

      <section id="services" className="py-14 sm:py-20 md:py-24 bg-[#0B0D10] border-b border-[#252A30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28 self-start">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7A00]">[ 01 — CAPABILITIES ]</span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  ENGINEERED WITHOUT <span className="font-editorial italic font-normal text-[#FF7A00]">VENDOR GAPS.</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed">
                Most companies fracture their digital presence across three separate vendors: a freelancer who writes the code, an agency that runs ads, and an offshore contractor trying to fix broken plugins.
              </p>
              <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed">
                Azumco unifies all three disciplines under one senior engineering team — delivering faster execution, tighter security, and zero finger-pointing.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="p-5 sm:p-7 rounded-xl bg-[#121519] border border-[#252A30] hover:border-[#FF6A00]/60 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#252A30]">
                      <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-2.5 rounded-lg bg-[#181B1F] border border-[#343A40] text-[#FF6A00]">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7A00]">{pillar.tag}</span>
                          <h3 className="font-heading text-lg sm:text-xl font-bold text-white">{pillar.title}</h3>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#A7ADB3]">{pillar.subtitle}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A7ADB3] mt-3.5 leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#252A30] space-y-2">
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#555B61]">Core Scope</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {pillar.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs text-[#D0D4D9]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="py-14 sm:py-20 bg-[#08090B] border-b border-[#252A30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF7A00]">[ 02 — PROVEN RESULTS ]</span>
              <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-1">
                OUR WORKS &amp; <span className="font-editorial italic font-normal text-[#FF7A00]">BENCHMARKS.</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#A7ADB3] max-w-md font-mono">
              Live production web applications, organic search takeovers, and high-uptime platforms engineered for verified client growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <div className="rounded-xl bg-[#121519] border border-[#252A30] hover:border-[#FF6A00]/80 p-5 sm:p-6 flex flex-col justify-between transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FF7A00]">01 // FINTECH INFRASTRUCTURE</span>
                  <span className="text-[#10B981] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    LIVE
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#FF7A00] transition-colors">
                    Apex Yield Platform
                  </h3>
                  <p className="text-xs text-[#A7ADB3] leading-relaxed">
                    Custom high-frequency financial portal engineered with TypeScript and Edge API routes. Migrated from fragmented legacy stack.
                  </p>
                </div>
                <div className="p-3 rounded-md bg-[#08090B] border border-[#252A30] grid grid-cols-2 gap-2 text-center font-mono">
                  <div>
                    <span className="text-[10px] text-[#555B61] uppercase block">TTFB Speed</span>
                    <span className="text-sm sm:text-base font-bold text-white">0.34s</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#555B61] uppercase block">Conversion Lift</span>
                    <span className="text-sm sm:text-base font-bold text-[#10B981]">+280%</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#252A30] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#555B61]">Next.js • Edge APIs • Tailwind</span>
                <a href="#contact" className="text-xs font-mono text-[#FF7A00] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Inquire Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-[#121519] border border-[#252A30] hover:border-[#FF6A00]/80 p-5 sm:p-6 flex flex-col justify-between transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FF7A00]">02 // SEARCH TAKEOVER</span>
                  <span className="text-[#10B981] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    RANK #1
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#FF7A00] transition-colors">
                    Vanguard Labs Directory
                  </h3>
                  <p className="text-xs text-[#A7ADB3] leading-relaxed">
                    Programmatic SEO architecture targeting high-intent commercial terms with automated schema graphs and sub-second crawl validation.
                  </p>
                </div>
                <div className="p-3 rounded-md bg-[#08090B] border border-[#252A30] grid grid-cols-2 gap-2 text-center font-mono">
                  <div>
                    <span className="text-[10px] text-[#555B61] uppercase block">Organic Traffic</span>
                    <span className="text-sm sm:text-base font-bold text-[#10B981]">+440%</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#555B61] uppercase block">Cost Per Lead</span>
                    <span className="text-sm sm:text-base font-bold text-white">-62%</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#252A30] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#555B61]">Schema Graph • Edge SSR</span>
                <a href="#contact" className="text-xs font-mono text-[#FF7A00] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Inquire Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-[#121519] border border-[#252A30] hover:border-[#FF6A00]/80 p-5 sm:p-6 flex flex-col justify-between transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FF7A00]">03 // CLOUD &amp; OPERATIONS</span>
                  <span className="text-[#10B981] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    SLA 99.99%
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#FF7A00] transition-colors">
                    OmniPulse Automation
                  </h3>
                  <p className="text-xs text-[#A7ADB3] leading-relaxed">
                    Continuous monitoring, automated CRM lead routing, and server vulnerability patching under our monthly management retainer.
                  </p>
                </div>
                <div className="p-3 rounded-md bg-[#08090B] border border-[#252A30] grid grid-cols-2 gap-2 text-center font-mono">
                  <div>
                    <span className="text-[10px] text-[#555B61] uppercase block">Uptime SLA</span>
                    <span className="text-sm sm:text-base font-bold text-white">99.99%</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#555B61] uppercase block">Vendor Gaps</span>
                    <span className="text-sm sm:text-base font-bold text-[#10B981]">0 Gaps</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#252A30] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#555B61]">Cloudflare • Node • Webhooks</span>
                <a href="#contact" className="text-xs font-mono text-[#FF7A00] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Inquire Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="simulator" className="py-14 sm:py-20 bg-[#08090B] border-b border-[#343A40]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScopeCustomizer />
        </div>
      </section>

      <section id="packages" className="py-14 sm:py-20 bg-[#111315] border-b border-[#343A40]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6A00]">Service Packages</span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#FFFFFF]">
              How Packages &amp; Projects Work
            </h2>
            <p className="text-[#A7ADB3] text-xs sm:text-sm md:text-base leading-relaxed">
              Ongoing monthly growth packages and standalone one-time project builds.
            </p>

            <div className="pt-3 sm:pt-4 inline-flex p-1 rounded-xl bg-[#181B1F] border border-[#343A40] w-full sm:w-auto">
              <button
                onClick={() => setActivePackageTab('monthly')}
                className={`flex-1 sm:flex-none px-3.5 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all min-h-[40px] ${
                  activePackageTab === 'monthly'
                    ? 'bg-[#FF6A00] text-white shadow-sm'
                    : 'text-[#A7ADB3] hover:text-[#FFFFFF]'
                }`}
              >
                Monthly Packages
              </button>
              <button
                onClick={() => setActivePackageTab('onetime')}
                className={`flex-1 sm:flex-none px-3.5 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all min-h-[40px] ${
                  activePackageTab === 'onetime'
                    ? 'bg-[#FF6A00] text-white shadow-sm'
                    : 'text-[#A7ADB3] hover:text-[#FFFFFF]'
                }`}
              >
                One-Time Projects
              </button>
            </div>
          </div>

          {activePackageTab === 'monthly' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {monthlyPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-[#181B1F] border-2 border-[#FF6A00]'
                      : 'bg-[#111315] border border-[#343A40] hover:border-[#555B61]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#FFFFFF]">{pkg.name}</h3>
                      {pkg.popular ? (
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono uppercase tracking-wider bg-[#FF6A00]/20 text-[#FF7A00] border border-[#FF6A00]/40">
                          Recommended
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono uppercase tracking-wider bg-[#22262B] text-[#A7ADB3] border border-[#343A40]">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#A7ADB3] min-h-[36px]">{pkg.forWhom}</p>

                    <div className="pt-3 border-t border-[#343A40] space-y-2.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#555B61]">Scope &amp; Deliverables</span>
                      <ul className="space-y-2">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F2F3F4]">
                            <Check className="w-3.5 h-3.5 text-[#FF6A00] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#343A40]">
                    <a
                      href="#contact"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all min-h-[44px] ${
                        pkg.popular
                          ? 'bg-[#FF6A00] hover:bg-[#FF7A00] text-white'
                          : 'bg-[#22262B] hover:bg-[#343A40] text-[#FFFFFF] border border-[#343A40]'
                      }`}
                    >
                      <span>Inquire for {pkg.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activePackageTab === 'onetime' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {oneTimeProjects.map((project, idx) => {
                const Icon = project.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-[#181B1F] border border-[#343A40] hover:border-[#FF6A00]/80 flex flex-col justify-between transition-all group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-lg bg-[#22262B] border border-[#343A40] text-[#FF6A00]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#22262B] text-[#A7ADB3] border border-[#343A40]">
                          {project.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-heading text-sm sm:text-base font-bold text-[#FFFFFF]">{project.title}</h3>
                        <p className="text-xs text-[#A7ADB3] mt-1 leading-relaxed">{project.description}</p>
                      </div>

                      <div className="pt-2.5 border-t border-[#343A40]/70 space-y-1.5">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#555B61]">Highlights</span>
                        <div className="space-y-1">
                          {project.highlights.map((hl, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-[#F2F3F4]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shrink-0" />
                              <span className="truncate">{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#343A40]">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF7A00] hover:text-[#FF6A00] transition-colors py-1 min-h-[36px]"
                      >
                        <span>Request Custom Proposal</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#08090B] border-b border-[#343A40]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-7 md:p-9 rounded-xl sm:rounded-2xl bg-[#111315] border border-[#FF6A00]/50 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#181B1F] border border-[#343A40] flex items-center justify-center text-[#FF6A00] shrink-0">
                <Server className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#FF6A00]">Transparent Policy</span>
                <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#FFFFFF]">
                  How App and Software Costs Work
                </h3>
                <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed">
                  When Azumco builds an app or software for a client, our fee is only for the work itself (time, design, coding, and expertise). Any outside platform costs (internet storage, yearly domain renewals, paid system connections, SMS/email fees, app store charges) are billed directly to the client at cost.
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-[#08090B] border border-[#343A40] text-xs text-[#F2F3F4] italic">
              &quot;Our fee covers the work we do to build and maintain your product. Any service your product runs on — like internet storage or paid system connections — is billed separately by that provider, at cost, so you only pay for what you actually use.&quot;
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="py-14 sm:py-20 bg-[#111315] border-b border-[#343A40]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF7A00]">Predictable Delivery</span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#FFFFFF]">
              The Client Engagement Process
            </h2>
            <p className="text-[#A7ADB3] text-xs sm:text-sm md:text-base leading-relaxed">
              From the initial technical audit to live deployment and monthly growth reviews, each stage is clearly defined.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4">
            {clientJourney.map((step, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[#181B1F] border border-[#343A40] flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between border-b border-[#343A40] pb-2">
                    <span className="text-xs font-mono text-[#FF7A00] font-semibold">{step.step}</span>
                    <span className="text-[10px] font-mono text-[#555B61] uppercase">Phase 0{idx + 1}</span>
                  </div>
                  <h3 className="font-heading text-xs sm:text-sm font-bold text-[#FFFFFF] leading-snug">{step.title}</h3>
                  <p className="text-xs text-[#A7ADB3] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 sm:py-20 md:py-24 bg-[#08090B] border-b border-[#252A30] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7A00]">[ 04 — DIRECT BRIEFING ]</span>
                <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  LET&apos;S ARCHITECT YOUR <span className="font-editorial italic font-normal text-[#FF7A00]">DIGITAL PRESENCE.</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed">
                Connect directly with our engineering and growth directors. We evaluate your product requirements, current search index, and technical architecture within 24 hours.
              </p>

              <div className="p-4 sm:p-5 rounded-xl bg-[#121519] border border-[#252A30] space-y-3.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FF7A00] uppercase tracking-wider font-semibold">Direct Communication Hub</span>
                  <span className="text-[#10B981] flex items-center gap-1.5 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    ONLINE
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#08090B] border border-[#252A30] space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#555B61] font-mono uppercase">
                    <span>Primary Direct Inbox</span>
                    <span>SLA &lt; 24h</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-0.5">
                    <a
                      href="mailto:contact.azumco@gmail.com"
                      className="text-white hover:text-[#FF6A00] font-mono text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 truncate"
                    >
                      <Mail className="w-4 h-4 text-[#FF6A00] shrink-0" />
                      <span className="truncate">contact.azumco@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={copyEmailToClipboard}
                        className="px-3 py-1.5 rounded bg-[#181B1F] border border-[#343A40] hover:border-[#FF6A00] text-xs font-mono text-[#D0D4D9] hover:text-white transition-colors flex items-center gap-1.5 min-h-[34px]"
                      >
                        {emailCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#10B981]" />
                            <span className="text-[#10B981]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                      <a
                        href="mailto:contact.azumco@gmail.com"
                        className="px-3 py-1.5 rounded bg-[#FF6A00] hover:bg-[#FF7A00] text-xs font-mono text-white uppercase tracking-wider transition-colors flex items-center gap-1 min-h-[34px]"
                      >
                        <span>Send</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="https://www.linkedin.com/company/azumco-pvt-ltd/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#08090B] border border-[#252A30] hover:border-[#FF6A00]/80 transition-colors group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded bg-[#181B1F] border border-[#343A40] text-[#FF6A00]">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-heading font-bold text-white block group-hover:text-[#FF6A00] transition-colors">LinkedIn</span>
                        <span className="text-[10px] text-[#555B61] font-mono">Company Updates</span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#555B61] group-hover:text-[#FF6A00] transition-colors" />
                  </a>

                  <a
                    href="https://www.instagram.com/azumco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#08090B] border border-[#252A30] hover:border-[#FF6A00]/80 transition-colors group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded bg-[#181B1F] border border-[#343A40] text-[#FF6A00]">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-heading font-bold text-white block group-hover:text-[#FF6A00] transition-colors">Instagram</span>
                        <span className="text-[10px] text-[#555B61] font-mono">@azumco</span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#555B61] group-hover:text-[#FF6A00] transition-colors" />
                  </a>
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs text-[#A7ADB3] border-t border-[#252A30] pt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF6A00] shrink-0" />
                  <span>Standard Mutual NDA executed upon request</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                  <span>Full intellectual property &amp; codebase ownership transferred to you</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF6A00] shrink-0" />
                  <span>Guaranteed technical response within 1 business day</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 w-full">
              <div className="rounded-xl sm:rounded-2xl bg-[#121519] border border-[#252A30] p-5 sm:p-8 md:p-10 shadow-2xl relative">
                <div className="pb-4 mb-5 border-b border-[#252A30] flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white">Project Discovery Questionnaire</h3>
                    <p className="text-xs text-[#A7ADB3]">Provide project parameters for an accurate technical proposal.</p>
                  </div>
                  <span className="text-[10px] font-mono text-[#555B61] uppercase tracking-wider">[SPEC // FORM 01]</span>
                </div>

                {submitted ? (
                  <div className="text-center py-8 sm:py-12 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#181B1F] border border-[#FF6A00] flex items-center justify-center text-[#FF6A00] mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#FFFFFF]">Discovery Brief Received</h3>
                    <p className="text-xs sm:text-sm text-[#A7ADB3] max-w-md mx-auto leading-relaxed">
                      Thank you for submitting your project specifications. Our team will review your brief and reply within 1 business day.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            businessName: '',
                            serviceInterest: 'Full Digital Presence (Build + Grow)',
                            message: ''
                          });
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#181B1F] border border-[#343A40] text-xs font-mono uppercase tracking-wider text-white hover:border-[#FF6A00] transition-colors min-h-[40px]"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div style={{ display: 'none' }} aria-hidden="true">
                      <input
                        type="text"
                        name="hp_company_url"
                        tabIndex={-1}
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        autoComplete="off"
                      />
                    </div>

                    {submitError && (
                      <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2.5">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB3]">Your Name *</label>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#181B1F] border border-[#343A40] text-[#FFFFFF] placeholder-[#555B61] focus:outline-none focus:border-[#FF6A00] transition-colors text-xs sm:text-sm min-h-[44px]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB3]">Work Email *</label>
                        <input
                          type="email"
                          required
                          maxLength={120}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#181B1F] border border-[#343A40] text-[#FFFFFF] placeholder-[#555B61] focus:outline-none focus:border-[#FF6A00] transition-colors text-xs sm:text-sm min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB3]">Business / Company Name</label>
                        <input
                          type="text"
                          maxLength={150}
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Apex Enterprises"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#181B1F] border border-[#343A40] text-[#FFFFFF] placeholder-[#555B61] focus:outline-none focus:border-[#FF6A00] transition-colors text-xs sm:text-sm min-h-[44px]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB3]">Service Category</label>
                        <select
                          value={formData.serviceInterest}
                          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#181B1F] border border-[#343A40] text-[#FFFFFF] focus:outline-none focus:border-[#FF6A00] transition-colors text-xs sm:text-sm min-h-[44px]"
                        >
                          <option value="Full Digital Presence (Build + Grow)">Full Digital Presence (Build + Grow)</option>
                          <option value="Build: Website & App Development">Build: Website &amp; App Development</option>
                          <option value="Grow: Google SEO & Paid Ads">Grow: Google SEO &amp; Paid Ads</option>
                          <option value="Brand: Logo & Identity System">Brand: Logo &amp; Identity System</option>
                          <option value="Manage: Ongoing Maintenance">Manage: Ongoing Maintenance</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB3]">Project Overview / Technical Brief</label>
                      <textarea
                        rows={4}
                        maxLength={4000}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what problem you're looking to solve or what you'd like to build..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#181B1F] border border-[#343A40] text-[#FFFFFF] placeholder-[#555B61] focus:outline-none focus:border-[#FF6A00] transition-colors text-xs sm:text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-4 rounded-md bg-[#FF6A00] hover:bg-[#FF7A00] disabled:opacity-60 disabled:cursor-not-allowed text-white font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors flex items-center justify-center gap-2 min-h-[46px] active:bg-[#E94B00]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting Discovery Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Discovery Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-14 sm:py-20 bg-[#111315] border-b border-[#343A40]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 sm:space-y-3 mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6A00]">Simple FAQ</span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#FFFFFF]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#A7ADB3] text-xs sm:text-sm md:text-base leading-relaxed">
              Clear answers to common questions about partnering with Azumco.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#181B1F] border border-[#343A40] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-4 py-3.5 sm:px-5 sm:py-4 text-left flex items-center justify-between gap-3 text-[#FFFFFF] font-semibold text-xs sm:text-sm md:text-base min-h-[48px]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FF6A00] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-4 text-xs sm:text-sm text-[#A7ADB3] leading-relaxed border-t border-[#343A40]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-[#08090B] py-12 sm:py-16 border-t border-[#252A30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#252A30]">
            <div className="md:col-span-5 space-y-3 text-left">
              <div className="flex items-center gap-3">
                <BrandLogo size={34} />
                <span className="font-heading font-bold text-xl text-[#FFFFFF]">Azumco</span>
              </div>
              <p className="text-xs text-[#A7ADB3] max-w-sm leading-relaxed">
                Full-service digital presence partner — we take a business online and grow it, from the first line of code to the last customer click.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-1.5 p-1 rounded-md bg-[#121519] border border-[#252A30]">
                  <a
                    href="mailto:contact.azumco@gmail.com"
                    className="text-xs font-mono text-[#D0D4D9] hover:text-[#FF6A00] px-2 py-1 flex items-center gap-1.5 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#FF6A00]" />
                    <span>contact.azumco@gmail.com</span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="p-1 rounded bg-[#181B1F] border border-[#343A40] text-[#A7ADB3] hover:text-white transition-colors"
                    title="Copy email"
                    aria-label="Copy email address"
                  >
                    {emailCopied ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/azumco-pvt-ltd/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-[#121519] border border-[#252A30] text-[#A7ADB3] hover:text-[#FF6A00] hover:border-[#FF6A00] transition-colors"
                    aria-label="Azumco on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/azumco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-[#121519] border border-[#252A30] text-[#A7ADB3] hover:text-[#FF6A00] hover:border-[#FF6A00] transition-colors"
                    aria-label="Azumco on Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col sm:flex-row sm:justify-end gap-8 text-xs font-mono">
              <div className="space-y-2.5">
                <span className="text-[10px] text-[#555B61] uppercase tracking-widest font-semibold block">Navigation</span>
                <ul className="space-y-2 text-[#A7ADB3]">
                  <li><a href="#services" className="hover:text-[#FF6A00] transition-colors">Capabilities</a></li>
                  <li><a href="#works" className="hover:text-[#FF6A00] transition-colors">Our Works</a></li>
                  <li><a href="#simulator" className="hover:text-[#FF6A00] transition-colors">Scope Simulator</a></li>
                  <li><a href="#packages" className="hover:text-[#FF6A00] transition-colors">Packages</a></li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <span className="text-[10px] text-[#555B61] uppercase tracking-widest font-semibold block">Company &amp; Process</span>
                <ul className="space-y-2 text-[#A7ADB3]">
                  <li><a href="#journey" className="hover:text-[#FF6A00] transition-colors">Client Journey</a></li>
                  <li><a href="#faq" className="hover:text-[#FF6A00] transition-colors">FAQ</a></li>
                  <li><a href="#contact" className="hover:text-[#FF6A00] transition-colors">Schedule Briefing</a></li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <span className="text-[10px] text-[#555B61] uppercase tracking-widest font-semibold block">Social &amp; Direct</span>
                <ul className="space-y-2 text-[#A7ADB3]">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/azumco-pvt-ltd/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FF6A00] transition-colors flex items-center gap-1.5"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#FF6A00]" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/azumco/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FF6A00] transition-colors flex items-center gap-1.5"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#FF6A00]" />
                      <span>Instagram @azumco</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contact.azumco@gmail.com"
                      className="hover:text-[#FF6A00] transition-colors flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#FF6A00]" />
                      <span>Direct Inbox</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555B61]">
            <p>&copy; {new Date().getFullYear()} Azumco. All rights reserved.</p>

            <div className="flex items-center gap-4 text-xs font-mono">
              <button
                type="button"
                onClick={() => setLegalModalState({ isOpen: true, tab: 'privacy' })}
                className="hover:text-[#FF6A00] transition-colors underline"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => setLegalModalState({ isOpen: true, tab: 'terms' })}
                className="hover:text-[#FF6A00] transition-colors underline"
              >
                Terms of Service
              </button>
            </div>

            <p className="text-center sm:text-right">
              From the first line of code to the last customer click.
            </p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/919479475194"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Azumco on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white pl-3.5 pr-4 py-3 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 group font-sans text-xs font-semibold tracking-wide"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.507 14.307l-.009.075c-2.199-1.096-2.429-1.242-2.713-.823-.227.34-.654.815-.815.992-.162.177-.323.199-.606.059-.283-.141-1.194-.44-2.274-1.402-.841-.75-1.408-1.677-1.573-1.96-.165-.283-.018-.436.123-.576.127-.126.283-.328.424-.492.142-.164.189-.283.283-.472.095-.189.047-.354-.024-.495-.071-.141-.637-1.534-.872-2.1-.23-.553-.464-.478-.637-.487-.165-.008-.354-.01-.543-.01s-.495.071-.755.354c-.259.283-.99 0.967-.99 2.357 0 1.39 1.013 2.734 1.155 2.923.141.189 1.993 3.044 4.828 4.266 2.835 1.222 2.835.815 3.354.768.519-.047 1.673-.684 1.909-1.344.236-.66.236-1.226.165-1.344-.07-.118-.26-.189-.543-.33z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.985-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.61 0-3.118-.435-4.422-1.194l-.317-.184-2.96.828.847-2.883-.203-.324A8.156 8.156 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.522 0 8.2 3.679 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z"/>
        </svg>
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      <LegalModal
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={() => setLegalModalState({ ...legalModalState, isOpen: false })}
      />
    </div>
  );
}
