import React, { useState, useEffect } from 'react';
import { AlertTriangle, Thermometer, Satellite, Shield, TrendingUp, Waves, Activity } from 'lucide-react';

function Problem() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAlert, setActiveAlert] = useState(0);
  const [pulseIntensity, setPulseIntensity] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const alertCycle = setInterval(() => {
      setActiveAlert(prev => (prev + 1) % 3);
    }, 3000);

    const pulseCycle = setInterval(() => {
      setPulseIntensity(prev => (prev + 1) % 3);
    }, 1500);

    return () => {
      clearInterval(alertCycle);
      clearInterval(pulseCycle);
    };
  }, []);

  const problems = [
    {
      id: 'ecosystem',
      icon: Shield,
      title: 'Ecosystem Guardian Crisis',
      description: 'Apex predators maintain critical marine biodiversity balance - their decline triggers cascading ecosystem collapse.',
      severity: 'CRITICAL',
      impact: '300M+ species affected',
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-blue-500/10 border-blue-400/30',
      glowColor: 'shadow-blue-500/25'
    },
    {
      id: 'climate',
      icon: Thermometer,
      title: 'Thermal Migration Disruption',
      description: 'Rising ocean temperatures force unprecedented shark migration patterns, disrupting feeding cycles and breeding grounds.',
      severity: 'HIGH',
      impact: '+2.3°C ocean warming',
      color: 'from-indigo-600 to-blue-500',
      bgColor: 'bg-indigo-500/10 border-indigo-400/30',
      glowColor: 'shadow-indigo-500/25'
    },
    {
      id: 'data',
      icon: Satellite,
      title: 'Data Intelligence Opportunity',
      description: 'Advanced NASA satellite systems capture real-time environmental data - unlocking predictive conservation strategies.',
      severity: 'SOLUTION',
      impact: 'Global coverage 24/7',
      color: 'from-cyan-600 to-teal-500',
      bgColor: 'bg-cyan-500/10 border-cyan-400/30',
      glowColor: 'shadow-cyan-500/25'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
      
      {/* Emergency Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-cyan-400 rounded-full ${pulseIntensity === i % 3 ? 'animate-ping' : 'animate-pulse'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Alert Header */}
      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Critical Alert Badge */}
          <div className={`inline-flex items-center gap-3 mb-8 px-6 py-4 rounded-full bg-blue-500/20 border-2 border-cyan-400/40 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <AlertTriangle className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 font-bold text-lg tracking-wider font-mono">MISSION CRITICAL ALERT</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === activeAlert ? 'bg-cyan-400' : 'bg-blue-600/40'} transition-all duration-300`} />
              ))}
            </div>
          </div>

          {/* Main Title */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                OCEAN
              </span>
              <br />
              <span className="text-white">CHALLENGE</span>
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
              <div className="text-cyan-400 font-mono text-sm tracking-wider">ECOSYSTEM ANALYSIS</div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
            
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Marine apex predators face unprecedented challenges as 
              <span className="text-blue-400 font-semibold"> climate disruption</span> accelerates.
              Advanced satellite intelligence offers our <span className="text-cyan-400 font-semibold">strategic opportunity</span> 
              for predictive conservation.
            </p>
          </div>
        </div>
      </div>

      {/* Crisis Breakdown Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16">
        <div className="space-y-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isActive = activeAlert === index;
            
            return (
              <div 
                key={problem.id}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                <div className={`relative p-8 rounded-3xl ${problem.bgColor} backdrop-blur-md border-2 hover:scale-[1.02] transition-all duration-500 ${isActive ? `shadow-2xl ${problem.glowColor} border-opacity-60` : ''}`}>
                  
                  {/* Alert Severity Badge */}
                  <div className="absolute -top-3 left-8">
                    <div className={`px-4 py-1 rounded-full text-xs font-bold font-mono tracking-wider ${
                      problem.severity === 'CRITICAL' ? 'bg-blue-600 text-white' :
                      problem.severity === 'HIGH' ? 'bg-indigo-600 text-white' :
                      'bg-cyan-600 text-white'
                    }`}>
                      {problem.severity}
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${problem.color} shadow-2xl ${problem.glowColor}`}>
                        <Icon className="w-10 h-10 text-white" />
                        {isActive && (
                          <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                          {problem.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-sm text-slate-400 font-mono mb-1">IMPACT SCALE</div>
                          <div className="text-cyan-300 font-bold">{problem.impact}</div>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 text-lg leading-relaxed mb-4">
                        {problem.description}
                      </p>

                      {/* Metric Indicators */}
                      <div className="flex items-center gap-6 mt-6">
                        {problem.id === 'ecosystem' && (
                          <>
                            <div className="flex items-center gap-2">
                              <Activity className="w-4 h-4 text-blue-400" />
                              <span className="text-sm text-slate-400 font-mono">Biodiversity Risk</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-blue-400" />
                              <span className="text-sm text-slate-400 font-mono">Cascade Effect</span>
                            </div>
                          </>
                        )}
                        
                        {problem.id === 'climate' && (
                          <>
                            <div className="flex items-center gap-2">
                              <Thermometer className="w-4 h-4 text-indigo-400" />
                              <span className="text-sm text-slate-400 font-mono">Thermal Stress</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Waves className="w-4 h-4 text-indigo-400" />
                              <span className="text-sm text-slate-400 font-mono">Migration Disruption</span>
                            </div>
                          </>
                        )}
                        
                        {problem.id === 'data' && (
                          <>
                            <div className="flex items-center gap-2">
                              <Satellite className="w-4 h-4 text-cyan-400" />
                              <span className="text-sm text-slate-400 font-mono">Real-time Coverage</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Activity className="w-4 h-4 text-cyan-400" />
                              <span className="text-sm text-slate-400 font-mono">Predictive AI</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              The Solution is in Our Data
            </h3>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              By combining NASA's advanced satellite intelligence with machine learning algorithms, 
              we can predict shark behavior patterns and create proactive conservation strategies 
              before it's too late.
            </p>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
}

export default Problem;