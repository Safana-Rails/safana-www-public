import React from 'react';

const PARTICLE_POSITIONS = [
  { left: '8%',  top: '15%', size: 2, duration: 7,  delay: 0   },
  { left: '18%', top: '72%', size: 3, duration: 9,  delay: 1.5 },
  { left: '30%', top: '40%', size: 2, duration: 11, delay: 3   },
  { left: '55%', top: '20%', size: 3, duration: 8,  delay: 0.8 },
  { left: '70%', top: '65%', size: 2, duration: 10, delay: 2.2 },
  { left: '82%', top: '30%', size: 4, duration: 13, delay: 4   },
  { left: '90%', top: '80%', size: 2, duration: 7,  delay: 1   },
  { left: '45%', top: '88%', size: 3, duration: 9,  delay: 3.5 },
  { left: '12%', top: '50%', size: 2, duration: 12, delay: 2   },
  { left: '65%', top: '10%', size: 2, duration: 8,  delay: 0.3 },
  { left: '3%',  top: '85%', size: 2, duration: 10, delay: 5   },
  { left: '93%', top: '45%', size: 3, duration: 11, delay: 2.7 },
  { left: '38%', top: '5%',  size: 2, duration: 9,  delay: 1.2 },
  { left: '75%', top: '93%', size: 2, duration: 14, delay: 3.8 },
];

interface Colors {
  primary: string;   // e.g. 'rgba(248,113,113,1)'  — alpha stripped and reapplied per use
  secondary: string;
}

const RED_ORANGE: Colors = {
  primary:   'rgba(248,113,113,',
  secondary: 'rgba(251,146,60,',
};

const BLUE_CYAN: Colors = {
  primary:   'rgba(96,165,250,',
  secondary: 'rgba(34,211,238,',
};

const GREEN_PURPLE: Colors = {
  primary:   'rgba(74,222,128,',
  secondary: 'rgba(167,139,250,',
};

export const COLOR_SCHEMES = { 'red-orange': RED_ORANGE, 'blue-cyan': BLUE_CYAN, 'green-purple': GREEN_PURPLE };

function CornerBracket({ corner, color }: { corner: 'tl' | 'tr' | 'bl' | 'br'; color: string }) {
  const size = 40;
  const w = 2;
  const pos: React.CSSProperties =
    corner === 'tl' ? { top: 32, left: 32 } :
    corner === 'tr' ? { top: 32, right: 32 } :
    corner === 'bl' ? { bottom: 32, left: 32 } :
                      { bottom: 32, right: 32 };
  const rotate =
    corner === 'tl' ? 0 :
    corner === 'tr' ? 90 :
    corner === 'bl' ? 270 : 180;

  return (
    <div
      className="absolute pointer-events-none"
      style={{ ...pos, animation: 'ambient-bracket-in 2s ease-out forwards', opacity: 0 }}
      aria-hidden
    >
      <svg width={size} height={size} style={{ transform: `rotate(${rotate}deg)`, display: 'block' }}>
        <polyline
          points={`${size},${w / 2} ${w / 2},${w / 2} ${w / 2},${size}`}
          fill="none"
          stroke={`${color}0.4)`}
          strokeWidth={w}
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
}

interface AmbientAnimationsProps {
  colorScheme?: 'red-orange' | 'blue-cyan' | 'green-purple';
  scanVDuration?: number;
  scanHDuration?: number;
}

export function AmbientAnimations({
  colorScheme = 'red-orange',
  scanVDuration = 10,
  scanHDuration = 16,
}: AmbientAnimationsProps) {
  const c = COLOR_SCHEMES[colorScheme];
  const p = c.primary;
  const s = c.secondary;

  const particleColors = [
    `${p}0.35)`, `${s}0.35)`, `${p}0.3)`,  `${s}0.25)`,
    `${p}0.35)`, `${s}0.3)`,  `${p}0.3)`,  `${s}0.25)`,
    `${p}0.2)`,  `${p}0.3)`,  `${s}0.3)`,  `${p}0.25)`,
    `${s}0.25)`, `${s}0.2)`,
  ];

  return (
    <>
      {/* Glow — top left */}
      <div className="absolute pointer-events-none" style={{ top: '-10%', left: '-10%', width: '55%', height: '55%', borderRadius: '50%', background: `radial-gradient(circle, ${p}0.12) 0%, transparent 70%)`, animation: 'ambient-pulse 6s ease-in-out infinite' }} aria-hidden />

      {/* Glow — bottom right */}
      <div className="absolute pointer-events-none" style={{ bottom: '-15%', right: '-10%', width: '60%', height: '60%', borderRadius: '50%', background: `radial-gradient(circle, ${s}0.08) 0%, transparent 70%)`, animation: 'ambient-pulse 8s ease-in-out infinite reverse' }} aria-hidden />

      {/* Glow — center breathe */}
      <div className="absolute pointer-events-none" style={{ top: '50%', left: '50%', width: '40%', height: '40%', transform: 'translate(-50%, -50%)', borderRadius: '50%', background: `radial-gradient(circle, ${p}0.05) 0%, transparent 65%)`, animation: 'ambient-pulse 12s ease-in-out 2s infinite' }} aria-hidden />

      {/* Large spinning ring */}
      <div className="absolute pointer-events-none" style={{ top: '50%', left: '50%', width: '80%', height: '80%', transform: 'translate(-50%, -50%)', borderRadius: '50%', border: `1px solid ${p}0.08)`, animation: 'ambient-spin 40s linear infinite' }} aria-hidden />

      {/* Medium counter-spinning ring */}
      <div className="absolute pointer-events-none" style={{ top: '50%', left: '50%', width: '55%', height: '55%', transform: 'translate(-50%, -50%)', borderRadius: '50%', border: `1px solid ${s}0.07)`, animation: 'ambient-spin 28s linear infinite reverse' }} aria-hidden />

      {/* Particles */}
      {PARTICLE_POSITIONS.map((pt, i) => (
        <div key={i} className="absolute pointer-events-none rounded-full" style={{ left: pt.left, top: pt.top, width: pt.size, height: pt.size, background: particleColors[i], animation: `ambient-float ${pt.duration}s ease-in-out ${pt.delay}s infinite` }} aria-hidden />
      ))}

      {/* Horizontal scan line */}
      <div className="absolute left-0 right-0 pointer-events-none" style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${p}0.3), transparent)`, animation: `ambient-scan-v ${scanVDuration}s linear infinite` }} aria-hidden />

      {/* Vertical scan line */}
      <div className="absolute top-0 bottom-0 pointer-events-none" style={{ width: '1px', background: `linear-gradient(180deg, transparent, ${s}0.2), transparent)`, animation: `ambient-scan-h ${scanHDuration}s linear 4s infinite` }} aria-hidden />

      {/* Corner brackets */}
      <CornerBracket corner="tl" color={p} />
      <CornerBracket corner="tr" color={p} />
      <CornerBracket corner="bl" color={p} />
      <CornerBracket corner="br" color={p} />

      {/* Edge vignette pulse */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, transparent 55%, ${p}0.06) 100%)`, animation: 'ambient-vignette 5s ease-in-out infinite' }} aria-hidden />

      <style>{`
        @keyframes ambient-pulse {
          0%, 100% { transform: scale(1);    opacity: 1; }
          50%       { transform: scale(1.15); opacity: 0.55; }
        }
        @keyframes ambient-float {
          0%, 100% { transform: translateY(0px);   opacity: 0.4; }
          50%       { transform: translateY(-20px); opacity: 0.85; }
        }
        @keyframes ambient-scan-v {
          0%   { top: -2%; }
          100% { top: 102%; }
        }
        @keyframes ambient-scan-h {
          0%   { left: -2%; }
          100% { left: 102%; }
        }
        @keyframes ambient-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes ambient-bracket-in {
          0%   { opacity: 0; transform: scale(0.6); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes ambient-vignette {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1.0; }
        }
      `}</style>
    </>
  );
}
