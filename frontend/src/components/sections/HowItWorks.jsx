const steps = [
  {
    number: "01",
    title: "Tell us about yourself",
    description:
      "Choose your skills, interests, experience, and career goals.",
  },
  {
    number: "02",
    title: "AI analyzes your profile",
    description:
      "ProjectForge matches your profile with the best software project ideas.",
  },
  {
    number: "03",
    title: "Start building",
    description:
      "Receive a complete blueprint with roadmap, APIs, database, and timeline.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-950 rounded-2xl p-8 border border-slate-800"
            >
              <h3 className="text-cyan-400 text-5xl font-bold">
                {step.number}
              </h3>

              <h4 className="text-2xl text-white mt-6 font-semibold">
                {step.title}
              </h4>

              <p className="text-slate-400 mt-4 leading-7">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;