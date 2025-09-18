import React, { useState, useEffect } from 'react';
import { Waves, Satellite, Target, Zap } from 'lucide-react';

export default function ChallengeOverview() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeParticle, setActiveParticle] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveParticle(prev => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Waves */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-950/40"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(37, 99, 235, 0.2)" />
              <stop offset="100%" stopColor="rgba(29, 78, 216, 0.1)" />
            </linearGradient>
          </defs>
          <path 
            d="M0,300 Q250,250 500,300 T1000,300 L1000,1000 L0,1000 Z" 
            fill="url(#waveGradient)"
            className="animate-pulse"
          />
          <path 
            d="M0,400 Q300,350 600,400 T1200,400 L1200,1000 L0,1000 Z" 
            fill="rgba(59, 130, 246, 0.1)"
            className="animate-pulse delay-1000"
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full transition-all duration-2000 ${
              activeParticle === i 
                ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50 scale-150' 
                : 'bg-blue-400/30'
            }`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 30}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
            <Satellite className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold tracking-wider">NASA MISSION DATA</span>
            <Waves className="w-5 h-5 text-cyan-400" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent leading-tight">
            SHARK
            <br />
            <span className="text-5xl md:text-6xl">CHALLENGE</span>
          </h1>
          
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"></div>
        </div>

        {/* Mission Cards */}
        <div className={`grid md:grid-cols-3 gap-6 max-w-5xl w-full mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Ocean Habitat Card */}
          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/20 backdrop-blur-md hover:scale-105 transition-all duration-500 hover:border-cyan-400/50">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <Waves className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-3">Ocean Ecosystem</h3>
              <p className="text-blue-200 leading-relaxed">Explore Earth's most powerful habitat where apex predators shape marine biodiversity.</p>
            </div>
          </div>

          {/* Prediction Card */}
          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-purple-500/20 backdrop-blur-md hover:scale-105 transition-all duration-500 hover:border-cyan-400/50">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <Target className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-3">AI Prediction</h3>
              <p className="text-purple-200 leading-relaxed">Mathematical frameworks using SWOT & PACE data to predict foraging patterns.</p>
            </div>
          </div>

          {/* Innovation Card */}
          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-pink-500/20 backdrop-blur-md hover:scale-105 transition-all duration-500 hover:border-cyan-400/50">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <Zap className="w-10 h-10 text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-3">Smart Tagging</h3>
              <p className="text-pink-200 leading-relaxed">Revolutionary real-time tracking technology for behavioral analysis.</p>
            </div>
          </div>
        </div>

        {/* Main Description */}
        <div className={`max-w-4xl text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 font-light">
            Dive into the depths of ocean science where cutting-edge satellite technology meets 
            <span className="font-semibold text-cyan-300"> apex predator research</span>. 
            Create intelligent systems that decode shark behavior patterns and revolutionize 
            <span className="font-semibold text-cyan-300"> marine conservation</span> through data-driven innovation.
          </p>
          
          {/* CTA Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Begin Mission
              <Waves className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Bottom Accent */}
        <div className={`mt-16 flex items-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
          <div className="text-cyan-400 text-sm font-mono tracking-wider">SWOT × PACE × AI</div>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
        </div>
      </div>

      {/* Subtle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
}