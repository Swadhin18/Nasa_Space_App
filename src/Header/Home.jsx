import React, { useState, useEffect } from 'react';
import { ChevronDown, Satellite, Waves, Target, Zap, Play, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Since we can't import the actual image, we'll use a placeholder that represents the shark theme
  const bgImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='oceanGrad' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%23082f49'/%3E%3Cstop offset='50%25' stop-color='%23164e63'/%3E%3Cstop offset='100%25' stop-color='%23083344'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23oceanGrad)'/%3E%3Cpath d='M0,400 Q480,300 960,400 T1920,400 L1920,1080 L0,1080 Z' fill='%23164e63' opacity='0.3'/%3E%3Cpath d='M0,600 Q600,500 1200,600 T2400,600 L2400,1080 L0,1080 Z' fill='%230c4a6e' opacity='0.5'/%3E%3C/svg%3E";

  const slides = [
    {
      title: "FRONT2SPACE",
      subtitle: "Ocean Intelligence Mission",
      description: "Pioneering the future of marine conservation through advanced satellite technology"
    },
    {
      title: "SHARK TRACKING",
      subtitle: "AI-Powered Ecosystem",
      description: "Revolutionary real-time behavioral analysis and prediction systems"
    },
    {
      title: "NASA INTEGRATION",
      subtitle: "SWOT × PACE × Intelligence",
      description: "Cutting-edge satellite data fusion for unprecedented ocean insights"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(slideInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Dynamic Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px) scale(1.1)`
        }}
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-transparent to-slate-900/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-cyan-900/30" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-16 h-16 border border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
          <Satellite className="w-6 h-6 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 border border-blue-400/20 rounded-lg rotate-45 animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-8 h-8 border border-cyan-300/40 rounded-full animate-bounce" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
        
        {/* Mission Badge */}
        <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 font-mono text-sm tracking-wider">MISSION ACTIVE</span>
            <Waves className="w-4 h-4 text-cyan-400" />
          </div>
        </div>

        {/* Hero Text with Slide Animation */}
        <div className="mb-12 max-w-4xl">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </span>
            </h1>
            
            <div className="relative h-16 overflow-hidden">
              <div 
                className="absolute inset-0 transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="h-16 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl text-white font-bold mb-2">
                      {slide.subtitle}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-20 overflow-hidden mt-4">
              <div 
                className="absolute inset-0 transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="h-20 flex items-center justify-center">
                    <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 mb-16 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              <Play className="w-5 h-5" />
              Launch Mission
            </span>
          </button>
          
          <button className="group px-8 py-4 border-2 border-cyan-400/50 rounded-full text-cyan-300 font-semibold text-lg backdrop-blur-sm hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-3">
              Explore Data
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Mission Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: Satellite, label: 'Satellites', value: '2', desc: 'SWOT & PACE' },
            { icon: Target, label: 'Species', value: '500+', desc: 'Tracked' },
            { icon: Waves, label: 'Ocean', value: '71%', desc: 'Coverage' },
            { icon: Zap, label: 'Real-time', value: '24/7', desc: 'Analysis' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm mb-3 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-300">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-cyan-300 font-semibold text-sm">{stat.label}</div>
                <div className="text-slate-400 text-xs font-mono">{stat.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-3 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col items-center text-cyan-300">
          <span className="text-sm font-mono mb-2 tracking-wider">EXPLORE MISSION</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
}