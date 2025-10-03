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

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
          <p className="font-bold mb-2">{`${label} 2024`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
              {entry.name}: <span className="font-semibold">{entry.value}</span>
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
      color: '#10b981',
      borderColor: 'border-emerald-200'
    },
    { 
      id: 'temperature', 
      icon: Thermometer, 
      title: 'Sea Temperature', 
      value: '30', 
      unit: '°C', 
      change: '+8%',
      color: '#f97316',
      borderColor: 'border-orange-200'
    },
    { 
      id: 'activity', 
      icon: Activity, 
      title: 'Shark Activity', 
      value: '95', 
      unit: '%', 
      change: '+23%',
      color: '#02427A',
      borderColor: 'border-blue-200'
    }
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-8">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            DATA VISUALIZATIONS
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Advanced <span className="font-semibold text-[#02427A]">PACE & SWOT satellite systems</span> capture 
            real-time environmental data, revealing the intricate relationship between 
            <span className="font-semibold text-green-600"> chlorophyll concentrations</span>, 
            <span className="font-semibold text-orange-600"> sea surface temperatures</span>, and 
            <span className="font-semibold text-[#02427A]"> apex predator behavior patterns</span>.
          </p>
        </div>

        {/* Metrics Dashboard */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div 
                key={metric.id}
                className={`p-6 rounded-xl border ${metric.borderColor} hover:shadow-md transition-all duration-300 cursor-pointer ${
                  activeMetric === metric.id || activeMetric === 'all' ? 'shadow-lg border-[#02427A]' : ''
                }`}
                onClick={() => setActiveMetric(activeMetric === metric.id ? 'all' : metric.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl`} style={{ backgroundColor: metric.color }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{metric.title}</h3>
                      <p className="text-gray-500 text-sm">Current Reading</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      {metric.change}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
                  <span className="text-gray-500 text-sm">{metric.unit}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1 flex items-center gap-2">
                <Eye className="w-6 h-6 text-[#02427A]" />
                Environmental Correlation Analysis
              </h3>
              <p className="text-gray-600">Multi-parameter tracking across foraging seasons</p>
            </div>
            
            <div className="flex gap-2">
              {['all', 'chlorophyll', 'temperature', 'activity'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveMetric(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeMetric === filter
                      ? 'bg-[#02427A] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter === 'all' ? 'All Metrics' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Chart Container */}
          <div className="h-96 border border-gray-200 rounded-xl p-4 bg-gray-50">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fill: '#4b5563', fontSize: 12 }}
                />
                <YAxis 
                  yAxisId="left" 
                  tick={{ fill: '#10b981', fontSize: 11 }}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  tick={{ fill: '#f97316', fontSize: 11 }}
                />
                
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: '10px', color: '#374151', fontSize: '12px' }} />
                
                {(activeMetric === 'all' || activeMetric === 'chlorophyll') && (
                  <Line 
                    yAxisId="left" 
                    type="monotone" 
                    dataKey="chlorophyll" 
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ fill: '#10b981', r: 5 }}
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
                    dot={{ fill: '#f97316', r: 5 }}
                    name="Temperature (°C)"
                  />
                )}
                
                {(activeMetric === 'all' || activeMetric === 'activity') && (
                  <Line 
                    yAxisId="left" 
                    type="monotone" 
                    dataKey="sharkActivity" 
                    stroke="#02427A"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ fill: '#02427A', r: 5 }}
                    name="Shark Activity (%)"
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights Panel */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#02427A]" />
              Key Correlations
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Peak chlorophyll concentrations in June correlate with 95% shark activity rates, 
              indicating optimal foraging conditions during warmer months.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-orange-600" />
              Thermal Insights
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Temperature increases of 5°C from January to June drive ecosystem changes, 
              creating predictable patterns in apex predator distribution.
            </p>
          </div>
        </div>
      </div>
     <div className="flex justify-center mt-8">
  <a
  href="/learn-more"
  style={{ backgroundColor: "#02427A" }}
  className="px-6 py-3 bg-[#024075] hover:bg-[#023663] text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
>
  Learn More
</a>

</div>

    </section>
  );
}

export default DataVisualization;