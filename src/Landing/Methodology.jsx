function Methodology() {
  return (
    <section className="px-10 py-16 bg-white">
      <h3 className="text-3xl font-bold text-blue-800 mb-6">🔬 Methodology / Approach</h3>
      <div className="grid md:grid-cols-4 gap-6">
        {["Data Fetch (NASA API)", "Processing & Filtering", "AI/ML Modeling", "Visualization & Website"].map((step, i) => (
          <div key={i} className="p-6 bg-gray-100 rounded-lg shadow hover:bg-blue-50 transition">
            {step}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Methodology;
