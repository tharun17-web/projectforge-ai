function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Build the
          <span className="text-cyan-400"> Right Project</span>,
          <br />
          Not Just Another Project.
        </h1>

        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          ProjectForge uses AI to recommend personalized software projects
          based on your skills, interests, experience, and career goals.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition">
            Get Started
          </button>

          <button className="border border-slate-600 hover:border-cyan-400 px-6 py-3 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;