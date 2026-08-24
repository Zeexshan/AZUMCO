import React, { useState, useEffect, useRef } from 'react';
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
  Play
} from 'lucide-react';

// 3D Canvas Geometry & Particle Matrix Component (Rock-Solid, High-Contrast 3D Core)
function Hero3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.parentElement?.clientWidth || 450;
    let height = canvas.parentElement?.clientHeight || 450;

    canvas.width = width;
    canvas.height = height;

    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;
    let isInteracting = false;
    let lastTouchX = 0;
    let lastTouchY = 0;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        if (cr.width > 0 && cr.height > 0) {
          width = canvas.width = cr.width;
          height = canvas.height = cr.height;
        }
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetRotY = (x / Math.max(100, width)) * 1.5;
      targetRotX = (-y / Math.max(100, height)) * 1.5;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isInteracting = true;
        lastTouchX = e.touches[0].clientX;
        lastTouchY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isInteracting || e.touches.length === 0) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastTouchX;
      const deltaY = touch.clientY - lastTouchY;
      lastTouchX = touch.clientX;
      lastTouchY = touch.clientY;

      targetRotY += (deltaX / Math.max(100, width)) * 2;
      targetRotX -= (deltaY / Math.max(100, height)) * 2;
    };

    const handleTouchEnd = () => {
      isInteracting = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // 3D Icosahedron Vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const baseVertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ];

    const edges = [
      [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
      [1, 5], [1, 9], [1, 8], [1, 7],
      [2, 11], [2, 10], [2, 6], [2, 3], [2, 4],
      [3, 4], [3, 9], [3, 8], [3, 6],
      [4, 5], [4, 9], [4, 11],
      [5, 9], [5, 11],
      [6, 7], [6, 8], [6, 10],
      [7, 8], [7, 10],
      [8, 9],
      [10, 11]
    ];

    // Background floating data particles
    const particles = Array.from({ length: 30 }, () => ({
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400,
      z: (Math.random() - 0.5) * 300,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? '#FF6A00' : '#FF7A00'
    }));

    let angle = 0;

    const render = () => {
      angle += 0.009;
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scaleDimension = Math.min(width, height) || 300;

      // Draw subtle ambient glow
      const glowGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.max(50, scaleDimension * 0.42));
      glowGrad.addColorStop(0, 'rgba(255, 106, 0, 0.18)');
      glowGrad.addColorStop(0.6, 'rgba(200, 61, 0, 0.04)');
      glowGrad.addColorStop(1, 'rgba(8, 9, 11, 0)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Render floating particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -width / 2) p.x = width / 2;
        if (p.x > width / 2) p.x = -width / 2;
        if (p.y < -height / 2) p.y = height / 2;
        if (p.y > height / 2) p.y = -height / 2;

        const fov = 350;
        const scale = fov / (fov + p.z);
        const px = cx + p.x * scale;
        const py = cy + p.y * scale;

        ctx.beginPath();
        ctx.arc(px, py, Math.max(1, p.size * scale), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.2, 0.6 * scale);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // 3D rotation calculations
      const totalRotY = angle + rotY;
      const totalRotX = Math.sin(angle * 0.5) * 0.18 + rotX;

      const cosY = Math.cos(totalRotY);
      const sinY = Math.sin(totalRotY);
      const cosX = Math.cos(totalRotX);
      const sinX = Math.sin(totalRotX);

      const coreRadius = scaleDimension * 0.3;
      const rawVertices = baseVertices.map(([x, y, z]) => {
        const len = Math.sqrt(x * x + y * y + z * z);
        return [(x / len) * coreRadius, (y / len) * coreRadius, (z / len) * coreRadius];
      });

      // Project 3D vertices to 2D
      const projected = rawVertices.map(([vx, vy, vz]) => {
        const x1 = vx * cosY + vz * sinY;
        const z1 = -vx * sinY + vz * cosY;
        const y2 = vy * cosX - z1 * sinX;
        const z2 = vy * sinX + z1 * cosX;

        const fov = 380;
        const scale = fov / (fov + z2);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          z: z2,
          scale
        };
      });

      // Render 3D Edges
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        if (!p1 || !p2) return;
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.25, Math.min(1, (avgZ + 160) / 320));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(255, 106, 0, ${alpha * 0.9})`;
        ctx.lineWidth = Math.max(1, 1.8 * ((p1.scale + p2.scale) / 2));
        ctx.stroke();
      });

      // Render Glowing Nodes
      projected.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1.5, 4.5 * p.scale), 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, 2.2 * p.scale), 0, Math.PI * 2);
        ctx.fillStyle = '#FF6A00';
        ctx.fill();
      });

      // Inner pulsating core
      const innerRadius = Math.max(12, scaleDimension * 0.08 * (1 + Math.sin(angle * 3) * 0.1));
      const innerGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, innerRadius);
      innerGrad.addColorStop(0, '#FFFFFF');
      innerGrad.addColorStop(0.35, '#FF7A00');
      innerGrad.addColorStop(0.75, '#E94B00');
      innerGrad.addColorStop(1, 'rgba(200, 61, 0, 0)');
      ctx.beginPath();
      ctx.arc(cx, cy, innerRadius, 0, Math.PI * 2);
      ctx.fillStyle = innerGrad;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[250px] sm:h-[380px] lg:h-[480px] flex items-center justify-center select-none overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing touch-none block" />
      {/* Interactive Helper Overlay */}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-[#111315]/90 border border-[#343A40] text-[10px] sm:text-[11px] font-mono text-[#A7ADB3] flex items-center gap-1.5 backdrop-blur-sm pointer-events-none whitespace-nowrap shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-ping" />
        <span>Interactive 3D Engine • Move / Drag to Spin</span>
      </div>
    </div>
  );
}

// Interactive Scope & Roadmap Generator Component
function ScopeCustomizer() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'web_dev',
    'google_seo',
    'maintenance'
  ]);

  const presets = [
    { name: 'Fast Launch MVP', ids: ['web_dev', 'google_seo'] },
    { name: 'Full Growth Retainer', ids: ['web_dev', 'google_seo', 'paid_ads', 'maintenance'] },
    { name: 'Custom App + Ops', ids: ['custom_app', 'automation', 'maintenance'] }
  ];

  const options = [
    { id: 'web_dev', label: 'Custom Website / Landing Page', pillar: 'Build', time: '2–3 Weeks' },
    { id: 'custom_app', label: 'Web / Mobile Application', pillar: 'Build', time: '6–10 Weeks' },
    { id: 'automation', label: 'Business Process Automation', pillar: 'Build', time: '1–2 Weeks' },
    { id: 'google_seo', label: 'Google Search Ranking (SEO)', pillar: 'Grow', time: 'Ongoing' },
    { id: 'paid_ads', label: 'Targeted Paid Ads (Google/Meta)', pillar: 'Grow', time: 'Immediate' },
    { id: 'brand_design', label: 'Logo & Visual Identity System', pillar: 'Grow', time: '1–2 Weeks' },
    { id: 'social_video', label: 'Short-Form Video Production', pillar: 'Grow', time: 'Monthly' },
    { id: 'maintenance', label: 'Uptime, Security & Tech Retainer', pillar: 'Manage', time: 'Monthly' }
  ];

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedCount = selectedServices.length;

  return (
    <div className="rounded-xl sm:rounded-2xl bg-[#111315] border border-[#343A40] p-4 sm:p-6 lg:p-8 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-[#343A40]">
        <div>
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00]" />
            <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#FFFFFF]">Interactive Scope Simulator</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#A7ADB3] mt-1">
            Select the digital capabilities your business requires to preview your unified delivery blueprint.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="px-3 py-1 rounded-lg sm:rounded-xl bg-[#181B1F] border border-[#C83D00] text-xs font-semibold text-[#FF7A00] shrink-0">
            {selectedCount} Selected Modules
          </div>
        </div>
      </div>

      {/* Preset Quick Selectors */}
      <div className="pt-3 pb-1 flex flex-wrap items-center gap-2">
        <span className="text-[11px] text-[#555B61] font-mono uppercase">Quick Presets:</span>
        {presets.map((preset) => (
          <button
            key={preset.name}
            type="button"
            onClick={() => setSelectedServices(preset.ids)}
            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#181B1F] hover:bg-[#22262B] border border-[#343A40] text-[#F2F3F4] transition-colors"
          >
            {preset.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 pt-4 sm:pt-6">
        {/* Checkbox Selector Column */}
        <div className="lg:col-span-7 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#555B61] block mb-2">
            Choose Your Capabilities
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {options.map((opt) => {
              const isChecked = selectedServices.includes(opt.id);
              return (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => toggleService(opt.id)}
                  className={`p-3 rounded-lg sm:rounded-xl border text-left flex items-center justify-between gap-2.5 transition-all duration-150 min-h-[48px] active:scale-[0.99] ${
                    isChecked
                      ? 'bg-[#181B1F] border-[#FF6A00] shadow-sm shadow-[#FF6A00]/10'
                      : 'bg-[#08090B] border-[#343A40] hover:border-[#555B61]'
                  }`}
                >
                  <div className="space-y-0.5 flex-1 min-w-0 pr-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${
                        opt.pillar === 'Build' ? 'bg-[#FF6A00]/20 text-[#FF7A00]' :
                        opt.pillar === 'Grow' ? 'bg-[#FF7A00]/20 text-[#FF6A00]' : 'bg-[#C83D00]/20 text-[#FF7A00]'
                      }`}>
                        {opt.pillar}
                      </span>
                      <span className="text-[11px] text-[#555B61] font-mono">{opt.time}</span>
                    </div>
                    <p className={`text-xs font-semibold leading-tight truncate ${isChecked ? 'text-[#FFFFFF]' : 'text-[#A7ADB3]'}`}>
                      {opt.label}
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                    isChecked ? 'bg-[#FF6A00] border-[#FF6A00] text-white' : 'border-[#343A40] bg-[#111315]'
                  }`}>
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Visual Scope Blueprint Output */}
        <div className="lg:col-span-5 bg-[#181B1F] rounded-xl border border-[#343A40] p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#343A40]">
              <span className="text-xs font-mono uppercase text-[#A7ADB3] flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#FF6A00]" />
                Generated Architecture Blueprint
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#FF6A00]">LIVE SYNC</span>
            </div>

            <div className="mt-3 sm:mt-4 space-y-2">
              {selectedCount === 0 ? (
                <div className="text-center py-6 sm:py-8 text-xs text-[#555B61]">
                  Select at least one module on the left to generate your scope blueprint.
                </div>
              ) : (
                <div className="space-y-1.5 max-h-[180px] sm:max-h-[220px] overflow-y-auto pr-1">
                  {selectedServices.map((srvId) => {
                    const matched = options.find((o) => o.id === srvId);
                    if (!matched) return null;
                    return (
                      <div key={srvId} className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-[#22262B] border border-[#343A40] gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00] shrink-0" />
                          <span className="text-xs font-medium text-[#F2F3F4] truncate">{matched.label}</span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-mono text-[#A7ADB3] shrink-0">{matched.time}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#343A40] space-y-2.5">
            <div className="p-2.5 sm:p-3 rounded-lg bg-[#08090B] border border-[#343A40] flex items-center justify-between">
              <span className="text-xs text-[#A7ADB3]">Estimated Discovery Alignment</span>
              <span className="text-xs font-bold text-[#FF7A00]">1 Unified Partner</span>
            </div>
            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#FF6A00] hover:bg-[#FF7A00] text-white text-xs font-bold transition-all shadow-md shadow-[#FF6A00]/20 min-h-[44px]"
            >
              <span>Lock In This Custom Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Live Interactive Dual-View Showcase (Technology Terminal vs. Growth Radar)
function LiveShowcase() {
  const [activeMode, setActiveMode] = useState<'build' | 'grow'>('build');

  return (
    <div className="rounded-xl sm:rounded-2xl bg-[#111315] border border-[#343A40] overflow-hidden shadow-2xl">
      {/* Top Bar with Mode Switcher */}
      <div className="px-4 sm:px-5 py-3 sm:py-4 bg-[#181B1F] border-b border-[#343A40] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E94B00]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#343A40]" />
          </div>
          <span className="text-xs font-mono text-[#A7ADB3] truncate">azumco-core-orchestrator.ts</span>
        </div>

        <div className="flex items-center p-1 rounded-lg bg-[#08090B] border border-[#343A40] w-full sm:w-auto">
          <button
            onClick={() => setActiveMode('build')}
            className={`flex-1 sm:flex-none px-3 py-2 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-all min-h-[38px] ${
              activeMode === 'build' ? 'bg-[#FF6A00] text-white shadow-sm' : 'text-[#A7ADB3] hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 shrink-0" />
            <span>Build (Engineering)</span>
          </button>
          <button
            onClick={() => setActiveMode('grow')}
            className={`flex-1 sm:flex-none px-3 py-2 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-all min-h-[38px] ${
              activeMode === 'grow' ? 'bg-[#FF6A00] text-white shadow-sm' : 'text-[#A7ADB3] hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 shrink-0" />
            <span>Grow (Acquisition)</span>
          </button>
        </div>
      </div>

      {/* Interactive Display Area */}
      <div className="p-4 sm:p-6 lg:p-8 bg-[#08090B] overflow-x-auto">
        {activeMode === 'build' ? (
          <div className="font-mono text-xs sm:text-sm space-y-2 text-[#A7ADB3] leading-relaxed">
            <div className="text-[#555B61]">// Azumco Engineering Stack: Modular & High-Performance</div>
            <div>
              <span className="text-[#FF7A00]">import</span> &#123; <span className="text-[#FFFFFF]">createPresenceEngine</span>, <span className="text-[#FFFFFF]">deployInfrastructure</span> &#125; <span className="text-[#FF7A00]">from</span> <span className="text-[#FF6A00]">'@azumco/core'</span>;
            </div>
            <div className="pt-2">
              <span className="text-[#FF7A00]">const</span> <span className="text-[#FFFFFF]">clientPipeline</span> = <span className="text-[#FF6A00]">createPresenceEngine</span>(&#123;
            </div>
            <div className="pl-4">
              architecture: <span className="text-[#FF6A00]">'NextGen Single-Vendor Unified'</span>,
            </div>
            <div className="pl-4">
              loadSpeedScore: <span className="text-[#FFFFFF]">99.8</span>,
            </div>
            <div className="pl-4">
              responsiveMobileFirst: <span className="text-[#FF7A00]">true</span>,
            </div>
            <div className="pl-4">
              automatedFunnels: [<span className="text-[#FF6A00]">'Google Search'</span>, <span className="text-[#FF6A00]">'Paid Ads'</span>, <span className="text-[#FF6A00]">'CRM Sync'</span>]
            </div>
            <div>&#125;);</div>
            <div className="pt-2 text-[#FF7A00]">
              <span className="text-[#555B61]">// Status:</span> ✓ Build verified & ready for instant customer traffic
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#111315] border border-[#343A40] space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#555B61]">Search Visibility</span>
              <div className="text-2xl font-bold font-heading text-[#FFFFFF] flex items-center gap-2">
                #1 Page Rank
                <TrendingUp className="w-4 h-4 text-[#FF6A00]" />
              </div>
              <p className="text-xs text-[#A7ADB3]">High-intent Google local queries optimized</p>
            </div>

            <div className="p-4 rounded-xl bg-[#111315] border border-[#343A40] space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#555B61]">Ad Campaign ROAS</span>
              <div className="text-2xl font-bold font-heading text-[#FFFFFF] flex items-center gap-2">
                Targeted ROI
                <Zap className="w-4 h-4 text-[#FF7A00]" />
              </div>
              <p className="text-xs text-[#A7ADB3]">Cross-platform Meta & Google Ads conversion funnels</p>
            </div>

            <div className="p-4 rounded-xl bg-[#111315] border border-[#343A40] space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#555B61]">Reporting Frequency</span>
              <div className="text-2xl font-bold font-heading text-[#FFFFFF] flex items-center gap-2">
                Monthly Direct
                <Activity className="w-4 h-4 text-[#FF6A00]" />
              </div>
              <p className="text-xs text-[#A7ADB3]">Transparent traffic and revenue breakdown</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePackageTab, setActivePackageTab] = useState<'monthly' | 'onetime'>('monthly');

  // Interactive Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    serviceInterest: 'Full Digital Presence (Build + Grow)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
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
        'Search Engine Optimization (SEO) to rank when clients search on Google',
        'Multi-channel social media management and proactive audience engagement',
        'High-ROI paid advertising campaigns across Google, Instagram, and Facebook',
        'Distinctive logo design, brand color systems, and comprehensive style guides',
        'High-retention short-form video editing and social content production'
      ],
      deliverables: ['Google Search Ranking', 'High-ROAS Ads', 'Brand Identity Kit', 'Engaging Social Assets']
    },
    {
      id: 'manage',
      icon: Settings,
      tag: 'Ongoing',
      title: 'Manage',
      subtitle: 'Continuous optimization & transparency',
      description:
        'We don’t just hand over code and disappear. We maintain, secure, and refine your digital assets with clear monthly reporting.',
      capabilities: [
        'Proactive monthly software maintenance, security patches, and server uptime monitoring',
        'Continuous performance tuning and feature improvements based on real user analytics',
        'Executive monthly reporting detailing traffic trends, marketing numbers, and growth metrics'
      ],
      deliverables: ['99.9% Uptime Support', 'Monthly Executive Reports', 'Continuous Updates', 'Direct Engineering Access']
    }
  ];

  const monthlyPackages = [
    {
      name: 'Starter',
      badge: 'Local Businesses',
      forWhom: 'Ideal for local businesses taking their first steps to dominate online.',
      features: [
        '1–2 Dedicated social media channels managed',
        'Targeted local Google search ranking & optimization',
        '2–4 Custom edited short-form videos per month',
        'Monthly transparent progress and metrics report',
        'Continuous uptime and technical health check'
      ],
      popular: false
    },
    {
      name: 'Growth',
      badge: 'Fastest Scaling',
      forWhom: 'For businesses ready to accelerate customer acquisition and outpace competitors.',
      features: [
        'Everything included in the Starter tier',
        'Targeted paid advertising setup on Google, Instagram & Facebook',
        'Expanded multi-platform social media reach & scheduling',
        'Higher volume video content production & creative hooks',
        'Ongoing iterative website enhancements & conversion tweaks',
        'Bi-weekly performance reviews'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      badge: 'Scale & Automation',
      forWhom: 'For established brands and digital-first businesses needing dedicated power.',
      features: [
        'Full multi-disciplinary engineering & growth team on demand',
        'Omnichannel acquisition strategy & high-budget ad management',
        'Custom workflow automation tools to reduce operational manual work',
        'Comprehensive deep-dive analytics, attribution, & ROI reporting',
        'Priority 24/7 emergency support & rapid feature rollouts'
      ],
      popular: false
    }
  ];

  const oneTimeProjects = [
    {
      title: 'Simple One-Page Website',
      category: 'Web Presence',
      icon: Globe,
      description:
        'A sleek single-page showcase optimized for mobile phones and rapid conversions. Perfect for launching a quick, credible online footprint.',
      highlights: ['Mobile-first layout', 'Fast load speeds', 'Contact & lead capture', 'Core SEO basics']
    },
    {
      title: 'Full Business Website',
      category: 'Web Application',
      icon: Layers,
      description:
        'A comprehensive 5–10 page custom architecture designed to establish authority, rank on Google, and allow easy updates by your team.',
      highlights: ['5–10 Custom pages', 'Content management ready', 'Advanced SEO structure', 'Lead funnels']
    },
    {
      title: 'Online Store & E-Commerce',
      category: 'Commerce',
      icon: ShoppingBag,
      description:
        'A seamless commerce platform where customers can effortlessly browse products, manage carts, and checkout with secure payments.',
      highlights: ['Product catalog system', 'Secure payment gateway', 'Inventory management', 'Customer order tracking']
    },
    {
      title: 'Logo & Brand Identity System',
      category: 'Design & Identity',
      icon: Palette,
      description:
        'A memorable visual identity suite including vector logos, curated brand colors, typography rules, and an accessible style guide.',
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
      a: 'Our fee covers the actual work of building and maintaining your project. Costs for the internet storage or the website address are billed to you directly by the providers, so you only pay the actual cost for what you use.'
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
    <div className="min-h-screen bg-[#08090B] text-[#F2F3F4] flex flex-col font-sans selection:bg-[#FF6A00] selection:text-[#FFFFFF]">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-[#111315]/90 backdrop-blur-md border-b border-[#343A40]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo with Image Asset */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 rounded-xl bg-[#181B1F] border border-[#343A40] flex items-center justify-center p-1.5 overflow-hidden group-hover:border-[#FF6A00] transition-colors">
              <img
                src="/assets/LOGO.png"
                alt="Azumco Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-heading font-bold text-xl tracking-tight text-[#FFFFFF] flex items-center gap-2">
                Azumco
                <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
              </div>
              <p className="text-[10px] text-[#A7ADB3] tracking-wider uppercase font-medium">Digital Presence Partner</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A7ADB3]">
            <a href="#services" className="hover:text-[#FF6A00] transition-colors">Services</a>
            <a href="#simulator" className="hover:text-[#FF6A00] transition-colors">Scope Simulator</a>
            <a href="#packages" className="hover:text-[#FF6A00] transition-colors">Packages</a>
            <a href="#journey" className="hover:text-[#FF6A00] transition-colors">Client Journey</a>
            <a href="#faq" className="hover:text-[#FF6A00] transition-colors">FAQ</a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF6A00] hover:bg-[#FF7A00] text-white text-sm font-semibold shadow-md shadow-[#FF6A00]/25 active:bg-[#E94B00] transition-all duration-150"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#181B1F] border border-[#343A40] text-[#A7ADB3] hover:text-[#FFFFFF]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#111315] border-b border-[#343A40] px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#A7ADB3] hover:text-[#FF6A00]"
            >
              Services
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
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FF6A00] text-white text-sm font-semibold"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with 3D Core Interaction */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 md:pt-20 md:pb-28 border-b border-[#343A40]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#181B1F] border border-[#C83D00]/50 text-[11px] sm:text-xs font-semibold text-[#FF7A00]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>Full-Service Digital Presence Partner</span>
              </div>

              {/* Main Hero Heading */}
              <h1 className="font-heading text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] leading-[1.18] sm:leading-[1.12]">
                From the first line of code to the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-[#FF6A00] to-[#E94B00]">
                  last customer click.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-sm sm:text-base lg:text-lg text-[#A7ADB3] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Most agencies only do marketing, or they only build technology. Azumco does both under one roof so you don't have to juggle five different vendors.
              </p>

              {/* CTA Group */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#FF7A00] hover:from-[#FF7A00] hover:to-[#FF6A00] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#FF6A00]/25 transition-all min-h-[46px] active:scale-[0.98]"
                >
                  <span>Book Free Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#simulator"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#181B1F] hover:bg-[#22262B] border border-[#343A40] text-[#F2F3F4] font-medium text-sm sm:text-base transition-colors min-h-[46px]"
                >
                  <Sliders className="w-4 h-4 text-[#FF7A00]" />
                  <span>Interactive Scope Tool</span>
                </a>
              </div>

              {/* Pitch Banner */}
              <div className="pt-2 sm:pt-4 p-3 sm:p-4 rounded-xl bg-[#111315] border border-[#343A40] text-xs text-[#A7ADB3] flex items-start sm:items-center gap-2.5 text-left">
                <div className="w-2 h-2 rounded-full bg-[#FF6A00] shrink-0 mt-1 sm:mt-0" />
                <span>
                  <strong className="text-[#FFFFFF]">Our Promise:</strong> “We don’t hand you a website and disappear. We build it, market it, and keep improving it.”
                </span>
              </div>
            </div>

            {/* Right Column: 3D Interactive WebGL / HTML5 Model */}
            <div className="lg:col-span-5 relative w-full">
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#181B1F] to-[#111315] border border-[#343A40] p-2 sm:p-3 shadow-2xl relative overflow-hidden">
                <Hero3DCanvas />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Live Dual-View Technology Showcase */}
      <section className="py-8 sm:py-12 bg-[#08090B] border-b border-[#343A40]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiveShowcase />
        </div>
      </section>

      {/* Three Pillars Section */}
      <section id="services" className="py-14 sm:py-20 bg-[#111315] border-b border-[#343A40]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6A00]">What Azumco Actually Sells</span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#FFFFFF]">
              Technology, Marketing, and Ongoing Management
            </h2>
            <p className="text-[#A7ADB3] text-sm sm:text-base leading-relaxed">
              We offer services across three unified categories so your business never experiences vendor gaps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="rounded-xl sm:rounded-2xl bg-[#181B1F] border border-[#343A40] p-5 sm:p-7 flex flex-col justify-between hover:border-[#FF6A00] transition-all duration-200 group"
                >
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#22262B] border border-[#343A40] flex items-center justify-center text-[#FF6A00] group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#22262B] border border-[#343A40] text-[#FF7A00]">
                        {pillar.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#FFFFFF]">{pillar.title}</h3>
                      <p className="text-xs sm:text-sm font-medium text-[#FF7A00] mt-0.5">{pillar.subtitle}</p>
                      <p className="text-xs sm:text-sm text-[#A7ADB3] mt-2.5 sm:mt-3 leading-relaxed">{pillar.description}</p>
                    </div>

                    <div className="pt-3 border-t border-[#343A40]/60 space-y-2.5 sm:space-y-3">
                      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#555B61]">Core Services</span>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {pillar.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#F2F3F4]">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-[#343A40]/60">
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#111315] border border-[#343A40] text-[10px] sm:text-[11px] text-[#A7ADB3] font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive Scope Simulator Section */}
      <section id="simulator" className="py-14 sm:py-20 bg-[#08090B] border-b border-[#343A40]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScopeCustomizer />
        </div>
      </section>

      {/* Packages & Solutions Section (ZERO PRICES) */}
      <section id="packages" className="py-14 sm:py-20 bg-[#111315] border-b border-[#343A40]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6A00]">Service Packages</span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#FFFFFF]">
              How Packages & Projects Work
            </h2>
            <p className="text-[#A7ADB3] text-sm sm:text-base leading-relaxed">
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

          {/* Monthly Service Packages */}
          {activePackageTab === 'monthly' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {monthlyPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl sm:rounded-2xl p-5 sm:p-7 flex flex-col justify-between relative transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-[#181B1F] border-2 border-[#FF6A00] shadow-xl shadow-[#FF6A00]/10'
                      : 'bg-[#111315] border border-[#343A40] hover:border-[#C83D00]'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#FF6A00] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
                      Recommended for Growth
                    </div>
                  )}

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#FFFFFF]">{pkg.name}</h3>
                      <span className="px-2 py-0.5 rounded-md text-[11px] sm:text-xs font-semibold bg-[#22262B] text-[#FF7A00] border border-[#343A40] shrink-0">
                        {pkg.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A7ADB3] min-h-[36px]">{pkg.forWhom}</p>

                    <div className="pt-3 sm:pt-4 border-t border-[#343A40] space-y-2.5 sm:space-y-3">
                      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#555B61]">What's Included</span>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#F2F3F4]">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#343A40]">
                    <a
                      href="#contact"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[44px] ${
                        pkg.popular
                          ? 'bg-[#FF6A00] hover:bg-[#FF7A00] text-white shadow-md'
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

          {/* One-Time Projects View */}
          {activePackageTab === 'onetime' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {oneTimeProjects.map((project, idx) => {
                const Icon = project.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#181B1F] border border-[#343A40] hover:border-[#C83D00] flex flex-col justify-between transition-all group"
                  >
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-2 sm:p-2.5 rounded-xl bg-[#22262B] border border-[#343A40] text-[#FF6A00]">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-[#22262B] text-[#A7ADB3] border border-[#343A40]">
                          {project.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-heading text-base sm:text-lg font-bold text-[#FFFFFF]">{project.title}</h3>
                        <p className="text-xs sm:text-sm text-[#A7ADB3] mt-1.5 leading-relaxed">{project.description}</p>
                      </div>

                      <div className="pt-2.5 sm:pt-3 border-t border-[#343A40]/70 space-y-2">
                        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#555B61]">Highlights</span>
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          {project.highlights.map((hl, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#F2F3F4]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shrink-0" />
                              <span className="truncate">{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#343A40]">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF7A00] hover:text-[#FF6A00] transition-colors py-1"
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

      {/* Very Important: How App & Software Costs Work */}
      <section className="py-12 sm:py-16 bg-[#08090B] border-b border-[#343A40]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl bg-[#111315] border border-[#C83D00]/60 relative overflow-hidden">
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#181B1F] border border-[#343A40] flex items-center justify-center text-[#FF6A00] shrink-0">
                <Server className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FF6A00]">Transparent Policy</span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#FFFFFF]">
                  How App and Software Costs Work
                </h3>
                <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed">
                  When Azumco builds an app or software for a client, our fee is only for the work itself (time, design, coding, and expertise). Any outside platform costs (internet storage, yearly domain renewals, paid system connections, SMS/email fees, app store charges) are billed directly to the client at cost.
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-[#08090B] border border-[#343A40] text-xs sm:text-sm text-[#F2F3F4] italic">
              “Our fee covers the work we do to build and maintain your product. Any service your product runs on — like internet storage or paid system connections — is billed separately by that provider, at cost, so you only pay for what you actually use.”
            </div>

          </div>
        </div>
      </section>

      {/* Client Journey / 5-Step Process */}
      <section id="journey" className="py-14 sm:py-20 bg-[#111315] border-b border-[#343A40]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6A00]">The 5-Step Process</span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#FFFFFF]">
              How a Client Journey Looks
            </h2>
            <p className="text-[#A7ADB3] text-sm sm:text-base leading-relaxed">
              When we start talking to a new client, our process follows a simple, straight line so they know exactly what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {clientJourney.map((step, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#181B1F] border border-[#343A40] flex flex-col justify-between hover:border-[#FF6A00] transition-colors"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#FF6A00]/40 tracking-wider">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-[#FFFFFF] leading-snug">{step.title}</h3>
                  <p className="text-xs text-[#A7ADB3] leading-relaxed">{step.description}</p>
                </div>
                <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#343A40]/50 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#555B61]">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF6A00]" />
                  <span>Step {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Discovery / Contact Form */}
      <section id="contact" className="py-14 sm:py-20 bg-[#08090B] border-b border-[#343A40]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 sm:space-y-3 mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6A00]">Get In Touch</span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#FFFFFF]">
              Start with a Free Audit / Discovery Call
            </h2>
            <p className="text-[#A7ADB3] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              We'll learn about your business and figure out exactly what you need.
            </p>
          </div>

          <div className="p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl bg-[#111315] border border-[#343A40] shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#181B1F] border border-[#FF6A00] text-[#FF6A00] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#FFFFFF]">Thank you, {formData.name}!</h3>
                <p className="text-[#A7ADB3] max-w-md mx-auto text-sm leading-relaxed">
                  We have received your discovery inquiry. Our team will review your business details and reach out within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', businessName: '', serviceInterest: 'Full Digital Presence (Build + Grow)', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-[#22262B] border border-[#343A40] text-sm text-[#F2F3F4] hover:bg-[#343A40]"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB3]">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#181B1F] border border-[#343A40] text-[#FFFFFF] placeholder-[#555B61] focus:outline-none focus:border-[#FF6A00] transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB3]">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#181B1F] border border-[#343A40] text-[#FFFFFF] placeholder-[#555B61] focus:outline-none focus:border-[#FF6A00] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB3]">Business / Company Name</label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Apex Enterprises"
                      className="w-full px-4 py-3 rounded-xl bg-[#181B1F] border border-[#343A40] text-[#FFFFFF] placeholder-[#555B61] focus:outline-none focus:border-[#FF6A00] transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB3]">Service Category</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181B1F] border border-[#343A40] text-[#FFFFFF] focus:outline-none focus:border-[#FF6A00] transition-colors text-sm"
                    >
                      <option value="Full Digital Presence (Build + Grow)">Full Digital Presence (Build + Grow)</option>
                      <option value="Build: Website & App Development">Build: Website & App Development</option>
                      <option value="Grow: Google SEO & Paid Ads">Grow: Google SEO & Paid Ads</option>
                      <option value="Brand: Logo & Identity System">Brand: Logo & Identity System</option>
                      <option value="Manage: Ongoing Maintenance">Manage: Ongoing Maintenance</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB3]">Project Overview / What You Need</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what problem you're looking to solve or what you'd like to build..."
                    className="w-full px-4 py-3 rounded-xl bg-[#181B1F] border border-[#343A40] text-[#FFFFFF] placeholder-[#555B61] focus:outline-none focus:border-[#FF6A00] transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#FF7A00] hover:from-[#FF7A00] hover:to-[#FF6A00] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF6A00]/25 transition-all flex items-center justify-center gap-2 min-h-[48px] active:scale-[0.98]"
                >
                  <span>Submit Discovery Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-14 sm:py-20 bg-[#111315] border-b border-[#343A40]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 sm:space-y-3 mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6A00]">Simple FAQ</span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#FFFFFF]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#A7ADB3] text-sm sm:text-base leading-relaxed">
              Clear answers to common questions about partnering with Azumco.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#181B1F] border border-[#343A40] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-4 py-3.5 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-3 text-[#FFFFFF] font-semibold text-sm sm:text-base min-h-[48px]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-6 sm:pb-5 text-xs sm:text-sm text-[#A7ADB3] leading-relaxed border-t border-[#343A40]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#08090B] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#343A40]">
            
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#181B1F] border border-[#343A40] flex items-center justify-center p-1 overflow-hidden">
                  <img
                    src="/assets/LOGO.png"
                    alt="Azumco Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-heading font-bold text-xl text-[#FFFFFF]">Azumco</span>
              </div>
              <p className="text-xs text-[#A7ADB3] max-w-sm">
                Full-service digital presence partner — we take a business online and grow it, from the first line of code to the last customer click.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-[#A7ADB3]">
              <a href="#services" className="hover:text-[#FF6A00] transition-colors">Services</a>
              <a href="#simulator" className="hover:text-[#FF6A00] transition-colors">Scope Simulator</a>
              <a href="#packages" className="hover:text-[#FF6A00] transition-colors">Packages</a>
              <a href="#journey" className="hover:text-[#FF6A00] transition-colors">Client Journey</a>
              <a href="#faq" className="hover:text-[#FF6A00] transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-[#FF6A00] transition-colors">Contact</a>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555B61]">
            <p>© {new Date().getFullYear()} Azumco. All rights reserved.</p>
            <p className="text-center sm:text-right">
              From the first line of code to the last customer click.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
