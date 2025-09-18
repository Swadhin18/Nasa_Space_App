import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Activity, Thermometer, Droplets, Satellite, TrendingUp, Eye } from 'lucide-react';

const data = [
  { month: "Jan", chlorophyll: 2.1, temperature: 25, sharkActivity: 35 },
  { month: "Feb", chlorophyll: 2.3, temperature: 26, sharkActivity: 42 },
  { month: "Mar", chlorophyll: 2.5, temperature: 27, sharkActivity: 58 },
  { month: "Apr", chlorophyll: 3.0, temperature: 28, sharkActivity: 73 },
  { month: "May", chlorophyll: 3.8, temperature: 29, sharkActivity: 89 },
  { month: "Jun", chlorophyll: 4.2, temperature: 30, sharkActivity: 95 },
];

function DataVisualization() {
  const [activeMetric, setActiveMetric] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    const phaseTimer = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 3);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(phaseTimer);
    };
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800/95 backdrop-blur-md border border-cyan-400/30 rounded-lg p-4 shadow-2xl">
          <p className="text-cyan-300 font-bold mb-2">{`${label} 2024`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-white text-sm flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
              {entry.name}: <span className="font-semibold text-cyan-200">{entry.value}</span>
              {entry.name === 'temperature' && '°C'}
              {entry.name === 'chlorophyll' && ' mg/m³'}
              {entry.name === 'sharkActivity' && '%'}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const metrics = [
    { 
      id: 'chlorophyll', 
      icon: Droplets, 
      title: 'Chlorophyll', 
      value: '4.2', 
      unit: 'mg/m³', 
      change: '+15%',
      color: 'from-emerald-500 to-teal-400',
      bgColor: 'bg-emerald-500/10 border-emerald-400/20'
    },
    { 
      id: 'temperature', 
      icon: Thermometer, 
      title: 'Sea Temperature', 
      value: '30', 
      unit: '°C', 
      change: '+8%',
      color: 'from-orange-500 to-red-400',
      bgColor: 'bg-orange-500/10 border-orange-400/20'
    },
    { 
      id: 'activity', 
      icon: Activity, 
      title: 'Shark Activity', 
      value: '95', 
      unit: '%', 
      change: '+23%',
      color: 'from-cyan-500 to-blue-400',
      bgColor: 'bg-cyan-500/10 border-cyan-400/20'
    }
  ];

  if (isLoading) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
            <Satellite className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-cyan-400 animate-pulse" />
          </div>
          <p className="text-cyan-300 font-mono">Analyzing satellite data streams...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-slate-800/50 border border-cyan-400/30 backdrop-blur-sm">
            <Satellite className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 font-mono text-sm tracking-wider">SATELLITE DATA STREAM</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            OCEAN INTELLIGENCE
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Advanced <span className="text-cyan-400 font-semibold">PACE & SWOT satellite systems</span> capture 
            real-time environmental data, revealing the intricate relationship between 
            <span className="text-emerald-400 font-semibold"> chlorophyll concentrations</span>, 
            <span className="text-orange-400 font-semibold"> sea surface temperatures</span>, and 
            <span className="text-cyan-400 font-semibold"> apex predator behavior patterns</span>.
          </p>
        </div>

        {/* Metrics Dashboard */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={metric.id}
                className={`group relative p-6 rounded-2xl ${metric.bgColor} backdrop-blur-md border hover:scale-105 transition-all duration-500 cursor-pointer ${
                  activeMetric === metric.id || activeMetric === 'all' ? 'shadow-2xl' : ''
                }`}
                onClick={() => setActiveMetric(activeMetric === metric.id ? 'all' : metric.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.color} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{metric.title}</h3>
                      <p className="text-slate-400 text-sm font-mono">Current Reading</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      {metric.change}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-white">{metric.value}</span>
                  <span className="text-slate-400 font-mono mb-1">{metric.unit}</span>
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Advanced Chart Section */}
        <div className="relative">
          <div className="bg-slate-800/30 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            
            {/* Chart Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <Eye className="w-7 h-7 text-cyan-400" />
                  Environmental Correlation Analysis
                </h3>
                <p className="text-slate-400">Multi-parameter tracking across foraging seasons</p>
              </div>
              
              <div className="flex gap-2">
                {['all', 'chlorophyll', 'temperature', 'activity'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveMetric(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeMetric === filter
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                    }`}
                  >
                    {filter === 'all' ? 'All Metrics' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart Container */}
            <div className="relative h-96 bg-slate-900/50 rounded-2xl p-6 border border-slate-600/30">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <defs>
                    <linearGradient id="chlorophyllGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="temperatureGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="activityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 12, fontFamily: 'monospace' }}
                  />
                  <YAxis 
                    yAxisId="left" 
                    orientation="left" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#10b981', fontSize: 11, fontFamily: 'monospace' }}
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#f97316', fontSize: 11, fontFamily: 'monospace' }}
                  />
                  
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    wrapperStyle={{ 
                      paddingTop: '20px', 
                      color: '#e5e7eb',
                      fontFamily: 'monospace',
                      fontSize: '12px'
                    }} 
                  />
                  
                  {(activeMetric === 'all' || activeMetric === 'chlorophyll') && (
                    <Line 
                      yAxisId="left" 
                      type="monotone" 
                      dataKey="chlorophyll" 
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: '#10b981', strokeWidth: 2, fill: '#065f46' }}
                      name="Chlorophyll (mg/m³)"
                    />
                  )}
                  
                  {(activeMetric === 'all' || activeMetric === 'temperature') && (
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="temperature" 
                      stroke="#f97316"
                      strokeWidth={3}
                      dot={{ fill: '#f97316', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: '#f97316', strokeWidth: 2, fill: '#9a3412' }}
                      name="Temperature (°C)"
                    />
                  )}
                  
                  {(activeMetric === 'all' || activeMetric === 'activity') && (
                    <Line 
                      yAxisId="left" 
                      type="monotone" 
                      dataKey="sharkActivity" 
                      stroke="#06b6d4"
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      dot={{ fill: '#06b6d4', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: '#06b6d4', strokeWidth: 2, fill: '#0e7490' }}
                      name="Shark Activity (%)"
                    />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Insights Panel */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-xl p-6 border border-cyan-400/20">
                <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Key Correlations
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Peak chlorophyll concentrations in June correlate with 95% shark activity rates, 
                  indicating optimal foraging conditions during warmer months.
                </p>
              </div>
              
              <div className="bg-slate-900/50 rounded-xl p-6 border border-orange-400/20">
                <h4 className="text-orange-400 font-bold mb-3 flex items-center gap-2">
                  <Thermometer className="w-5 h-5" />
                  Thermal Insights
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Temperature increases of 5°C from January to June drive ecosystem changes, 
                  creating predictable patterns in apex predator distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataVisualization;