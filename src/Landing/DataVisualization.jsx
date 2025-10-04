import React, { useEffect, useState } from "react";
import { getVisualizationData } from "../api/sharkHabitat";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const DataVisualization = () => {
  const [metrics, setMetrics] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVisualizationData();
      if (data) {
        setMetrics(data.metrics || []);
        setChartData(data.chartData || []);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-10 bg-white min-h-screen">
      {/* ---------- Section Header ---------- */}
      <h1 className="text-5xl font-bold text-center text-gray-600 mb-4">DATA VISUALIZATIONS</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Advanced PACE & SWOT satellite systems capture real-time environmental data, revealing the
        intricate relationship between <span className="text-emerald-600">chlorophyll concentrations</span>,
        <span className="text-orange-500"> sea surface temperatures</span>, and
        <span className="text-blue-700"> apex predator behavior patterns.</span>
      </p>

      {/* ---------- Metrics Cards ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        {metrics.map((m) => (
          <div
            key={m.id}
            className={`p-6 rounded-2xl border ${m.borderColor} shadow-sm flex flex-col items-center justify-center hover:shadow-md transition`}
          >
            <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
            <p className="text-4xl font-bold" style={{ color: m.color }}>
              {m.value} {m.unit}
            </p>
            <p className="text-sm mt-2 text-green-600 font-medium">{m.change}</p>
            <p className="text-gray-500 text-sm mt-1">Current Reading</p>
          </div>
        ))}
      </div>

      {/* ---------- Line Chart Section ---------- */}
      <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl text-gray-600 font-semibold mb-2">🌊 Environmental Correlation Analysis</h2>
        <p className="text-gray-500 mb-6">
          Multi-parameter tracking across foraging seasons
        </p>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="chlorophyll"
              stroke="#10b981"
              strokeWidth={3}
              name="Chlorophyll (mg/m³)"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="sharkActivity"
              stroke="#02427A"
              strokeWidth={3}
              name="Shark Activity (%)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="temperature"
              stroke="#f97316"
              strokeWidth={3}
              name="Sea Temperature (°C)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ---------- Extra Insights Section ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">📈 Key Correlations</h3>
          <p className="text-gray-600 text-sm">
            Peak chlorophyll composition in June correlates with 95% shark activity rates,
            indicating optimal foraging conditions during warmer months.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">🌡️ Thermal Insights</h3>
          <p className="text-gray-600 text-sm">
            Temperature increases of 5°C from January to June drive ecosystem changes,
            creating predictable patterns in apex predator distribution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;

