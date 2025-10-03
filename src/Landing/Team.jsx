import React from 'react';
import { Code, Brain, Palette, Compass, Users, Rocket } from 'lucide-react';

function Team() {
  const members = [
    {
      name: "Tanvir",
      role: "Frontend Developer",
      icon: Code,
      bio: "Architect of the command interface — turning satellite streams into sleek, real-time dashboards.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Ayesha",
      role: "Data Scientist",
      icon: Brain,
      bio: "Decodes ocean patterns with AI — transforming raw data into predictive conservation models.",
      color: "from-purple-500 to-pink-400"
    },
    {
      name: "Rahim",
      role: "UI/UX Designer",
      icon: Palette,
      bio: "Designs intuitive mission controls — where science meets seamless human interaction.",
      color: "from-emerald-500 to-teal-400"
    },
    {
      name: "Karim",
      role: "Research Lead",
      icon: Compass,
      bio: "Guides the mission with field expertise — connecting satellite insights to real-world shark behavior.",
      color: "from-orange-500 to-red-400"
    }
  ];

  return (
    <section className="px-6 md:px-10 py-24 bg-gray-100">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-[#02427A]/10 border border-[#02427A]/30">
          <Users className="w-5 h-5 text-[#02427A]" />
          <span className="text-[#02427A] font-semibold tracking-wide">MISSION CREW</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          The Minds Behind the <span className="text-[#02427A]">Mission</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Meet the specialists guiding this mission — each bringing unique expertise to decode the ocean’s secrets and protect its guardians.
        </p>
      </div>

      {/* Crew Layout — Unique Timeline Style */}
      <div className="max-w-6xl mx-auto space-y-24">
        {members.map((member, index) => {
          const Icon = member.icon;
          const isEven = index % 2 === 0;

          return (
            <div 
              key={index} 
              className={`group flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Avatar + Icon */}
              <div className="flex-shrink-0">
                <div 
                  className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
                  <Icon className="w-12 h-12 md:w-14 md:h-14 text-white relative z-10" />
                </div>
              </div>

              {/* Bio */}
              <div className="text-center md:text-left max-w-xl space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#02427A] transition-colors">
                  {member.name}
                </h3>
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-300 shadow-sm">
                  <Icon className="w-4 h-4 text-[#02427A]" />
                  <span className="font-semibold text-gray-700">{member.role}</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {member.bio}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-24 max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-6 h-6 text-[#02427A]" />
            <h3 className="text-2xl font-bold text-gray-800">Join the Mission</h3>
          </div>
          <p className="text-gray-600 mb-6">
            We’re expanding our crew. If you’re passionate about oceans, data, or design — let’s build the future of marine conservation together.
          </p>
          <button className="group relative px-8 py-3 bg-[#02427A] text-white font-semibold rounded-full shadow hover:shadow-lg hover:bg-opacity-90 transition">
            <span className="flex items-center gap-2">
              Explore Open Roles
              <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                <span className="w-2 h-2 bg-[#02427A] rounded-full"></span>
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Team;