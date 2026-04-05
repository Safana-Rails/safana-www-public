export function GraphLines() {
  const lines = [
    { y: 75,  points: '0,75 8,70 16,78 24,60 32,65 40,50 48,55 56,40 64,45 72,30 80,35 88,20 96,25 104,10 112,15 120,5',  duration: 25, delay: 0,   opacity: 0.025 },
    { y: 55,  points: '0,55 8,60 16,50 24,65 32,45 40,60 48,40 56,55 64,35 72,50 80,30 88,45 96,25 104,40 112,20 120,35', duration: 32, delay: 5,   opacity: 0.018 },
    { y: 85,  points: '0,85 8,75 16,80 24,70 32,75 40,60 48,68 56,52 64,58 72,42 80,50 88,35 96,42 104,28 112,34 120,20', duration: 38, delay: 10,  opacity: 0.012 },
    { y: 40,  points: '0,40 8,45 16,35 24,50 32,30 40,48 48,25 56,42 64,20 72,38 80,15 88,32 96,10 104,28 112,8  120,22', duration: 28, delay: 3,   opacity: 0.02 },
    { y: 65,  points: '0,65 8,58 16,62 24,55 32,60 40,48 48,54 56,42 64,48 72,35 80,42 88,28 96,35 104,22 112,30 120,18', duration: 42, delay: 14,  opacity: 0.012 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 120 100"
      >
        <defs>
          <filter id="glow-green">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {lines.map((l, i) => (
          <g key={i}>
            {/* Moving line */}
            <polyline
              points={l.points}
              fill="none"
              stroke={`rgba(74,222,128,${l.opacity})`}
              strokeWidth="0.25"
              filter="url(#glow-green)"
              style={{ animation: `graph-slide ${l.duration}s linear ${l.delay}s infinite` }}
            />
            {/* Faint area fill under the line */}
            <polyline
              points={`0,100 ${l.points} 120,100`}
              fill={`rgba(74,222,128,${l.opacity * 0.12})`}
              stroke="none"
              style={{ animation: `graph-slide ${l.duration}s linear ${l.delay}s infinite` }}
            />
          </g>
        ))}
      </svg>

      <style>{`
        @keyframes graph-slide {
          0%   { transform: translateX(-10%); opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(10%);  opacity: 0; }
        }
      `}</style>
    </div>
  );
}
