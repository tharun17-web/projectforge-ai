const features = [
  {
    title: "AI Project Recommendations",
    description:
      "Get personalized software project ideas based on your skills, interests, and career goals.",
    icon: "🤖",
  },
  {
    title: "Complete Project Blueprint",
    description:
      "Generate architecture, APIs, database schema, timelines, and folder structures instantly.",
    icon: "📋",
  },
  {
    title: "AI Mentor",
    description:
      "Ask technical questions, improve your architecture, and get coding guidance anytime.",
    icon: "🧠",
  },
];

function Features() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white">
          Everything You Need
        </h2>

        <p className="text-center text-slate-400 mt-4 max-w-2xl mx-auto">
          ProjectForge helps developers go from an idea to a production-ready
          project with AI assistance.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;