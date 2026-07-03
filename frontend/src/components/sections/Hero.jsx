import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="min-h-[90vh] bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          🚀 AI Powered Software Engineering Platform
        </span>

        <h1 className="mt-8 text-6xl md:text-7xl font-extrabold leading-tight">
          Build the
          <span className="text-cyan-400"> Right Project</span>
          <br />
          Not Just Another Project.
        </h1>

        <p className="mt-8 text-xl text-slate-400 max-w-3xl mx-auto leading-8">
          ProjectForge analyzes your skills, interests, experience, and career
          goals to generate personalized software projects complete with
          architecture, roadmap, APIs, database design, and development plan.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">
  <Link
    to="/register"
    className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
  >
    Get Started
  </Link>

  <Link
    to="/dashboard"
    className="px-8 py-4 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
  >
    Explore Features
  </Link>
</div>
      </div>
    </section>
  );
}

export default Hero;