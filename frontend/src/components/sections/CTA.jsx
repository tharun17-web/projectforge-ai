import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden surface-card p-12 md:p-16 text-center glow-indigo"
      >
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Stop guessing what to build next.
          </h2>
          <p className="mt-5 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Create your profile and get your first AI-generated engineering
            blueprint in minutes.
          </p>
          <div className="mt-9 flex justify-center gap-4 flex-wrap">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-950/40"
            >
              Get Started Free
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold transition-colors"
            >
              I already have an account
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;
