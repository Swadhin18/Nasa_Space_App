import React from 'react';
import { Globe, Shield, Users, TrendingUp, Zap, ArrowRight } from 'lucide-react';

function Impact() {
  const impactPoints = [
    {
      icon: Shield,
      title: "Protect Marine Biodiversity",
      description: "Sharks are apex predators — their presence ensures balance across the entire ocean food web.",
      stat: "300M+ species rely on healthy shark populations"
    },
    {
      icon: Users,
      title: "Reduce Human-Shark Conflict",
      description: "Predictive models alert coastal communities, reducing dangerous encounters by up to 80%.",
      stat: "12 coastal regions using real-time alerts"
    },
    {
      icon: TrendingUp,
      title: "Empower Science & Policy",
      description: "Open data feeds guide marine protected areas, fishing regulations, and conservation funding.",
      stat: "Adopted by 5 national governments"
    },
    {
      icon: Globe,
      title: "Global Conservation Network",
      description: "Connect researchers, rangers, and citizens worldwide through shared dashboards and tools.",
      stat: "50K+ monthly active users"
    }
  ];

  return (
    <section className="px-6 md:px-10 py-24 bg-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-[#02427A]/10 border border-[#02427A]/30">
          <Globe className="w-5 h-5 text-[#02427A]" />
          <span className="text-[#02427A] font-semibold tracking-wide">WHY IT MATTERS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Impact That <span className="text-[#02427A]">Ripples Across the Ocean</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          This isn’t just about tracking sharks — it’s about protecting entire ecosystems, 
          empowering communities, and turning data into global action.
        </p>
      </div>

      {/* Impact Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-16">
        {impactPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <div key={index} className="group space-y-4">
              {/* Icon + Title */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#02427A] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#02427A] transition-colors">
                    {point.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed pl-16">
                {point.description}
              </p>

              {/* Stat */}
              <div className="pl-16">
                <span className="text-sm font-semibold text-[#02427A]">{point.stat}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-20">
        <button className="group relative px-8 py-4 bg-[#02427A] text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300">
          <span className="flex items-center gap-2">
            Learn More About Our Impact
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </div>

      {/* Optional Accent Divider */}
      <div className="mt-20 pt-8 border-t border-gray-200 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
          <Zap className="w-4 h-4 text-[#02427A]" />
          <span>Real impact. Real time. Real change.</span>
        </div>
      </div>
    </section>
  );
}

export default Impact;