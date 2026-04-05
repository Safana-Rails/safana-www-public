const STARS = [
  { left: '5%',  top: '8%',  size: 2, duration: 2.1, delay: 0,    color: 'rgba(74,222,128,0.9)'  },
  { left: '12%', top: '22%', size: 1, duration: 3.4, delay: 0.7,  color: 'rgba(255,255,255,0.8)' },
  { left: '20%', top: '5%',  size: 2, duration: 2.7, delay: 1.2,  color: 'rgba(167,139,250,0.9)' },
  { left: '28%', top: '15%', size: 1, duration: 1.9, delay: 0.3,  color: 'rgba(255,255,255,0.7)' },
  { left: '35%', top: '3%',  size: 2, duration: 3.1, delay: 2.1,  color: 'rgba(74,222,128,0.8)'  },
  { left: '42%', top: '18%', size: 1, duration: 2.5, delay: 0.9,  color: 'rgba(255,255,255,0.6)' },
  { left: '50%', top: '7%',  size: 2, duration: 1.8, delay: 1.6,  color: 'rgba(167,139,250,0.9)' },
  { left: '58%', top: '12%', size: 1, duration: 3.3, delay: 0.4,  color: 'rgba(255,255,255,0.8)' },
  { left: '65%', top: '4%',  size: 2, duration: 2.2, delay: 2.4,  color: 'rgba(74,222,128,0.7)'  },
  { left: '72%', top: '20%', size: 1, duration: 2.9, delay: 1.1,  color: 'rgba(255,255,255,0.6)' },
  { left: '80%', top: '9%',  size: 2, duration: 1.7, delay: 0.6,  color: 'rgba(167,139,250,0.8)' },
  { left: '88%', top: '16%', size: 1, duration: 3.5, delay: 1.9,  color: 'rgba(255,255,255,0.7)' },
  { left: '94%', top: '6%',  size: 2, duration: 2.4, delay: 0.2,  color: 'rgba(74,222,128,0.9)'  },
  { left: '7%',  top: '78%', size: 1, duration: 2.8, delay: 1.4,  color: 'rgba(255,255,255,0.6)' },
  { left: '15%', top: '88%', size: 2, duration: 2.0, delay: 2.7,  color: 'rgba(167,139,250,0.8)' },
  { left: '23%', top: '75%', size: 1, duration: 3.2, delay: 0.5,  color: 'rgba(255,255,255,0.7)' },
  { left: '33%', top: '92%', size: 2, duration: 1.9, delay: 1.8,  color: 'rgba(74,222,128,0.8)'  },
  { left: '47%', top: '83%', size: 1, duration: 2.6, delay: 3.0,  color: 'rgba(255,255,255,0.6)' },
  { left: '55%', top: '95%', size: 2, duration: 3.0, delay: 0.8,  color: 'rgba(167,139,250,0.9)' },
  { left: '63%', top: '80%', size: 1, duration: 2.3, delay: 2.2,  color: 'rgba(255,255,255,0.7)' },
  { left: '74%', top: '90%', size: 2, duration: 1.8, delay: 1.3,  color: 'rgba(74,222,128,0.7)'  },
  { left: '84%', top: '77%', size: 1, duration: 3.4, delay: 0.1,  color: 'rgba(255,255,255,0.8)' },
  { left: '92%', top: '86%', size: 2, duration: 2.7, delay: 2.5,  color: 'rgba(167,139,250,0.8)' },
  { left: '3%',  top: '45%', size: 1, duration: 2.1, delay: 1.7,  color: 'rgba(255,255,255,0.5)' },
  { left: '97%', top: '55%', size: 1, duration: 2.9, delay: 0.3,  color: 'rgba(74,222,128,0.6)'  },
  { left: '96%', top: '35%', size: 2, duration: 3.1, delay: 1.5,  color: 'rgba(167,139,250,0.7)' },
  { left: '2%',  top: '62%', size: 1, duration: 2.4, delay: 2.9,  color: 'rgba(255,255,255,0.6)' },
];

export function TwinklingStars({ speedMultiplier = 1 }: { speedMultiplier?: number }) {
  return (
    <>
      {STARS.map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none rounded-full"
          style={{
            left: s.left, top: s.top,
            width: s.size, height: s.size,
            background: s.color,
            boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
            animation: `twinkle ${s.duration * speedMultiplier}s ease-in-out ${s.delay * speedMultiplier}s infinite`,
          }}
          aria-hidden
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1;  transform: scale(0.8); }
          50%       { opacity: 1;    transform: scale(1.4); }
        }
      `}</style>
    </>
  );
}
