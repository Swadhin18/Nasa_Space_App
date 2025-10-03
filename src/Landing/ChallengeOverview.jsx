import React from 'react';
import { Waves, Satellite, Target, Zap } from 'lucide-react';

export default function ChallengeOverview() {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-8">
      {/* Title & Subtitle */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          SHARK CHALLENGE
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Harness NASA satellite data to decode shark behavior and transform marine conservation.
        </p>
      </div>

      {/* 3 Clean Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="group p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <Waves className="w-10 h-10 text-[#02427A] mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Ocean Ecosystem</h3>
          <p className="text-gray-600 leading-relaxed">
            Explore Earth's most powerful habitat where apex predators shape marine biodiversity.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <Target className="w-10 h-10 text-[#02427A] mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Prediction</h3>
          <p className="text-gray-600 leading-relaxed">
            Mathematical frameworks using SWOT & PACE data to predict foraging patterns.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <Zap className="w-10 h-10 text-[#02427A] mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Tagging</h3>
          <p className="text-gray-600 leading-relaxed">
            Revolutionary real-time tracking technology for behavioral analysis.
          </p>
        </div>
      </div>

      {/* Optional CTA Button (if needed) */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-[#02427A] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors duration-300">
          Begin Mission
        </button>
      </div>
    </div>
  );
}