"use client";
import { FaShieldAlt, FaUserShield, FaCamera, FaBolt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16 bg-black">
      {/* Creative animated background: layered gradients, animated waves, sparkles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layered animated gradients */}
        <div className="absolute inset-0 w-full h-full animate-gradient-x bg-gradient-to-tr from-blue-900 via-purple-900 to-blue-700 opacity-90" style={{backgroundSize:'200% 200%'}} />
        <div className="absolute inset-0 w-full h-full animate-gradient-y bg-gradient-to-b from-transparent via-blue-800/40 to-purple-900/80 opacity-80" style={{backgroundSize:'200% 200%'}} />
        {/* Animated SVG waves */}
        <svg className="absolute bottom-0 left-0 w-full h-40 md:h-56 opacity-60" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#waveGradient)" fillOpacity="1">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,160L60,170C120,180,240,200,360,192C480,184,600,136,720,128C840,120,960,152,1080,181.3C1200,211,1320,229,1380,234.7L1440,240L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
              M0,180L60,160C120,140,240,100,360,112C480,124,600,188,720,208C840,228,960,204,1080,170.7C1200,137,1320,91,1380,68L1440,45L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
              M0,160L60,170C120,180,240,200,360,192C480,184,600,136,720,128C840,120,960,152,1080,181.3C1200,211,1320,229,1380,234.7L1440,240L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </path>
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
        {/* Sparkle particles */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {[...Array(24)].map((_, i) => (
            <span
              key={i}
              className={`absolute rounded-full pointer-events-none animate-sparkle${i % 3 + 1}`}
              style={{
                width: `${6 + (i % 4) * 2}px`,
                height: `${6 + (i % 4) * 2}px`,
                left: `${Math.random() * 98}%`,
                top: `${Math.random() * 95}%`,
                background: `radial-gradient(circle, #fff 0%, #60a5fa 60%, transparent 100%)`,
                opacity: 0.7 + Math.random() * 0.3,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
      {/* Floating shield logo with glow */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 z-10">
        <FaShieldAlt className="text-blue-400 text-[120px] drop-shadow-2xl animate-bounce animate-glow" />
      </div>
      {/* Main card */}
      <div className="relative z-20 bg-black/70 backdrop-blur-2xl rounded-3xl shadow-2xl px-10 py-14 flex flex-col items-center max-w-2xl mx-auto border border-blue-500/30 animate-section-in">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x mb-6 drop-shadow-xl animate-fade-in">
          Welcome to ShieldSnap
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 text-center animate-fade-in">
          <span className="font-bold text-blue-400">India’s #1 Security Partner</span> <br />
          Experience next-level protection for your home, business, and community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full">
          <div className="flex flex-col items-center">
            <FaUserShield className="text-blue-400 text-3xl mb-2 animate-bounce animate-glow" />
            <span className="text-base text-gray-100 font-semibold">On-Site Guards</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCamera className="text-pink-400 text-3xl mb-2 animate-pulse animate-glow" />
            <span className="text-base text-gray-100 font-semibold">Smart Surveillance</span>
          </div>
          <div className="flex flex-col items-center">
            <FaBolt className="text-green-400 text-3xl mb-2 animate-spin-slow animate-glow" />
            <span className="text-base text-gray-100 font-semibold">Rapid Response</span>
          </div>
        </div>
        <a href="#contact" className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-700 to-purple-500 text-white font-bold shadow-xl hover:scale-105 transition-all animate-pulse text-lg animate-glow">
          Get Your Free Quote
        </a>
      </div>
    </section>
  );
}