import React from 'react';
import { Compass, Satellite, Globe, Users, TrendingUp, Zap } from 'lucide-react';

function Objectives() {
  const objectives = [
    {
      icon: Compass,
      title: "Decode Migration Patterns",
      description: "Map and predict shark movement corridors using environmental triggers and behavioral data.",
      stat: "500+ tracked routes",
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: Satellite,
      title: "Fuse NASA Satellite Data",
      description: "Integrate SWOT & PACE datasets to correlate ocean conditions with predator behavior in real-time.",
      stat: "98% global coverage",
      color: "from-indigo-600 to-blue-500"
    },
    {
      icon: Globe,
      title: "Drive Global Conservation",
      description: "Turn insights into actionable strategies that protect marine ecosystems and engage global communities.",
      stat: "37 countries involved",
      color: "from-teal-600 to-cyan-500"
    }
  ];

  return (
    <section className="px-6 md:px-10 py-20 bg-white">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Where Data Meets <span className="text-[#02427A]">Purpose</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We’re not just analyzing sharks — we’re building a global intelligence system to protect ocean health, 
          powered by NASA satellites and driven by predictive AI.
        </p>
      </div>

      {/* Objectives Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {objectives.map((objective, index) => {
          const Icon = objective.icon;
          return (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              {/* Icon Circle */}
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${objective.color} mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#02427A] transition-colors">
                {objective.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {objective.description}
              </p>

              {/* Stat / Impact */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-sm font-mono text-gray-500">IMPACT</span>
                <span className="font-bold text-[#02427A]">{objective.stat}</span>
              </div>

              {/* Decorative Corner Element (optional) */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#02427A]/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          );
        })}
      </div>

      {/* Optional Footer CTA */}
      <div className="text-center mt-16 max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-[#02427A]/5 to-blue-50 rounded-2xl p-8 border border-[#02427A]/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-[#02427A]" />
            <h3 className="text-2xl font-bold text-gray-800">Scaling Impact Through Tech</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Each objective feeds into a unified mission: creating an AI-powered early warning system for marine conservation — 
            because protecting sharks means protecting the entire ocean.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Objectives;