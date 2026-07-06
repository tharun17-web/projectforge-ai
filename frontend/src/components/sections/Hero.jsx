import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GitBranch, FileCode2, Rocket } from "lucide-react";
import Badge from "../ui/Badge";

const journeySteps = [
  { icon: Sparkles, label: "Idea" },
  { icon: GitBranch, label: "Blueprint" },
  { icon: FileCode2, label: "Build" },
  { icon: Rocket, label: "Interview" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-20 pb-28 px-6">
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge icon={Sparkles} tone="indigo">
            AI Software Engineering Workspace
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white"
        >
          Build the <span className="text-gradient">right project</span>,
          <br className="hidden sm:block" />
          not just another project.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          ProjectForge AI turns your skills and goals into a complete
          engineering blueprint — architecture, roadmap, APIs, database
          design, and the guidance to actually ship it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-950/40"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold transition-colors"
          >
            Explore Features
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-20 flex items-center justify-center gap-2 sm:gap-4"
        >
          {journeySteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center gap-2 sm:gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-2xl surface-card flex items-center justify-center text-cyan-400 animate-float-slow" style={{ animationDelay: `${i * 0.3}s` }}>
                    <Icon size={20} />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {step.label}
                  </span>
                </div>
                {i < journeySteps.length - 1 && (
                  <ArrowRight size={16} className="text-slate-700 mb-5" />
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
