export function PurpleBar({ className = 'h-48' }: { className?: string }) {
  return (
    <div
      className={`relative ${className} w-full overflow-hidden`}
      style={{
        background: 'linear-gradient(135deg, #1e0a3c, #3b0764, #4c1d95, #2e1065, #581c87, #3b0764)',
        backgroundSize: '300% 300%',
        animation: 'purple-bar-gradient 8s ease infinite',
      }}
      aria-hidden
    >
      {/* Large orb — drifts right */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.45), transparent 70%)',
          filter: 'blur(18px)',
          animation: 'drift-right 18s ease-in-out infinite',
        }}
      />

      {/* Medium orb — drifts left */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(216,180,254,0.35), transparent 70%)',
          filter: 'blur(14px)',
          animation: 'drift-left 13s ease-in-out infinite',
          animationDelay: '-4s',
        }}
      />

      {/* Small orb — drifts right, slower */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '40%',
          width: 55,
          height: 55,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,132,252,0.4), transparent 70%)',
          filter: 'blur(10px)',
          animation: 'drift-right 22s ease-in-out infinite',
          animationDelay: '-9s',
        }}
      />

      {/* Diamond 1 — spinning */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '22%',
          width: 22,
          height: 22,
          background: 'rgba(192,132,252,0.55)',
          transform: 'rotate(45deg)',
          animation: 'spin-slow 9s linear infinite',
          boxShadow: '0 0 10px rgba(167,139,250,0.6)',
        }}
      />

      {/* Diamond 2 — spinning reverse, bigger */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '65%',
          width: 32,
          height: 32,
          background: 'rgba(139,92,246,0.4)',
          transform: 'rotate(45deg)',
          animation: 'spin-slow-reverse 14s linear infinite',
          boxShadow: '0 0 14px rgba(139,92,246,0.5)',
        }}
      />

      {/* Diamond 3 — small, fast */}
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '82%',
          width: 14,
          height: 14,
          background: 'rgba(216,180,254,0.7)',
          transform: 'rotate(45deg)',
          animation: 'spin-slow 5s linear infinite',
          boxShadow: '0 0 8px rgba(216,180,254,0.8)',
        }}
      />

      {/* Diamond 4 — outline style */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '48%',
          width: 18,
          height: 18,
          border: '2px solid rgba(192,132,252,0.6)',
          transform: 'rotate(45deg)',
          animation: 'spin-slow-reverse 11s linear infinite',
        }}
      />

      {/* Thin horizontal line — pulsing */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          width: '80%',
          height: 1,
          background: 'linear-gradient(to right, transparent, rgba(167,139,250,0.4), rgba(216,180,254,0.6), rgba(167,139,250,0.4), transparent)',
          animation: 'pulse-scale 4s ease-in-out infinite',
        }}
      />

      {/* Short accent line */}
      <div
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '30%',
          width: '40%',
          height: 1,
          background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.5), transparent)',
          animation: 'pulse-scale 6s ease-in-out infinite',
          animationDelay: '-2s',
        }}
      />
    </div>
  );
}
