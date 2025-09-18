function Team() {
  const members = [
    { name: "Tanvir", role: "Frontend Developer" },
    { name: "Ayesha", role: "Data Scientist" },
    { name: "Rahim", role: "UI/UX Designer" },
    { name: "Karim", role: "Research Lead" },
  ];

  return (
    <section className="px-10 py-16 bg-gray-100">
      <h3 className="text-3xl font-bold text-blue-800 mb-6">👨‍🚀 Team Members</h3>
      <div className="grid md:grid-cols-4 gap-6">
        {members.map((m, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition text-center">
            <div className="w-20 h-20 mx-auto bg-blue-200 rounded-full mb-4"></div>
            <h4 className="font-semibold">{m.name}</h4>
            <p className="text-gray-600">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
