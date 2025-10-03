import React from 'react';
import { Compass, Satellite, Users, Target, Brain, Rocket } from 'lucide-react';

function Objectives() {
  const objectives = [
    {
      icon: Compass,
      name: "Decode Migration Highways",
      description: "Map corridors using SST, chlorophyll, and current data to predict movement.",
      stat: "92% ACC",
      phase: "PHASE 1"
    },
    {
      icon: Satellite,
      name: "Fuse NASA Feeds",
      description: "Integrate PACE, SWOT, MODIS into unified analysis pipeline.",
      stat: "5TB/DAY",
      phase: "PHASE 2"
    },
    {
      icon: Users,
      name: "Global Conservation Network",
      description: "Deploy open dashboards for scientists, rangers, and policymakers.",
      stat: "37 COUNTRIES",
      phase: "PHASE 3"
    },
    {
      icon: Target,
      name: "Predict Risk Zones",
      description: "Forecast high-activity areas to reduce human-shark conflict.",
      stat: "80% ↓ INCIDENTS",
      phase: "PHASE 4"
    },
    {
      icon: Brain,
      name: "Self-Learning AI Models",
      description: "Models evolve with new tagging and satellite data for higher accuracy.",
      stat: "v2.1 ACTIVE",
      phase: "ONGOING"
    },
    {
      icon: Rocket,
      name: "Open Science Release",
      description: "Launch APIs, SDKs, and educational modules for global researchers.",
      stat: "50K+ DEV",
      phase: "Q3 2025"
    }
  ];

  return (
    <section className="px-6 md:px-10 py-20 bg-gray-100 font-sans">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-14">
        <div className="flex items-center gap-4 mb-2">
          <Target className="w-7 h-7 text-[#02427A]" />
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">MISSION COMMAND LOG</h2>
        </div>
        <p className="text-gray-600 max-w-3xl">
          Operational objectives driving the future of predictive marine conservation.
        </p>
      </div>

      {/* Objective Wall */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {objectives.map((o, i) => {
          const Icon = o.icon;
          return (
            <div key={i} className="group space-y-2">
              {/* Title + Stat Row */}
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-[#02427A] group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#02427A] transition-colors">
                  {o.name}
                </h3>
                <span className="ml-auto text-xs font-bold text-[#02427A] font-mono">
                  {o.stat}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed pl-8">
                {o.description}
              </p>

              {/* Phase Tag */}
              <div className="pl-8">
                <span className="text-xs font-mono text-gray-500 bg-gray-200 px-2 py-0.5 rounded">
                  {o.phase}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Status */}
      <div className="mt-20 pt-6 border-t border-gray-300 max-w-6xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="font-mono text-gray-600">MISSION STATUS: ACTIVE</span>
          </div>
          <div className="text-gray-500 font-mono">
            Next milestone: Model v3.0 deployment
          </div>
        </div>
      </div>
    </section>
  );
}

export default Objectives;