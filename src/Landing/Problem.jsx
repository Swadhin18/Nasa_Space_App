import React from 'react';
import { Shield, Thermometer, Satellite } from 'lucide-react';

function Problem() {
  const problems = [
    {
      id: 'ecosystem',
      icon: Shield,
      title: 'Ecosystem Guardian Crisis',
      description: 'Apex predators maintain critical marine biodiversity balance - their decline triggers cascading ecosystem collapse.',
      impact: '300M+ species affected'
    },
    {
      id: 'climate',
      icon: Thermometer,
      title: 'Thermal Migration Disruption',
      description: 'Rising ocean temperatures force unprecedented shark migration patterns, disrupting feeding cycles and breeding grounds.',
      impact: '+2.3°C ocean warming'
    },
    {
      id: 'data',
      icon: Satellite,
      title: 'Data Intelligence Opportunity',
      description: 'Advanced NASA satellite systems capture real-time environmental data - unlocking predictive conservation strategies.',
      impact: 'Global coverage 24/7'
    }
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-8">
      
      {/* Title & Subtitle */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          OCEAN CHALLENGE
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Marine apex predators face unprecedented challenges as 
          <span className="font-semibold text-[#02427A]"> climate disruption</span> accelerates.
          Advanced satellite intelligence offers our <span className="font-semibold text-[#02427A]">strategic opportunity</span> 
          for predictive conservation.
        </p>
      </div>

      {/* Clean Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {problems.map((problem) => {
          const Icon = problem.icon;
          return (
            <div 
              key={problem.id}
              className="p-8 rounded-xl bg-white border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#02427A] mb-6">
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {problem.description}
              </p>

              {/* Impact */}
              <div>
                <div className="text-xs text-gray-500 font-mono mb-1">IMPACT</div>
                <div className="font-semibold text-[#02427A]">{problem.impact}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Optional CTA (if needed) */}
      <div className="text-center mt-16 max-w-3xl mx-auto">
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            The Solution is in Our Data
          </h3>
          <p className="text-gray-600 leading-relaxed">
            By combining NASA's advanced satellite intelligence with machine learning algorithms, 
            we can predict shark behavior patterns and create proactive conservation strategies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Problem;