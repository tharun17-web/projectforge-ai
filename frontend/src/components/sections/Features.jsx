import { motion } from "framer-motion";
import {
  Sparkles,
  FileStack,
  BrainCircuit,
  FileText,
  MessageSquareCode,
  Gauge,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: Sparkles,
    title: "AI Project Recommendations",
    description:
      "Personalized software project ideas based on your skills, interests, and career goals.",
  },
  {
    icon: FileStack,
    title: "Complete Engineering Blueprint",
    description:
      "Architecture, tech stack, APIs, database schema, and a week-by-week roadmap — generated instantly.",
  },
  {
    icon: BrainCircuit,
    title: "AI Mentor",
    description:
      "Contextual tips derived from your profile and current recommendation, right on your dashboard.",
  },
  {
    icon: FileText,
    title: "Resume Assistant",
    description:
      "Turn your generated project into polished, copy-ready resume bullet points in one click.",
  },
  {
    icon: MessageSquareCode,
    title: "Interview Preparation",
    description:
      "Guidance and likely interview questions generated from your project's own tech stack.",
  },
  {
    icon: Gauge,
    title: "Build Estimate",
    description:
      "A frontend-calculated estimate of difficulty and duration, so you can plan your available time.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-slate-900/40 py-24 px-6 border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Feature Highlights"
          icon={Sparkles}
          title="Everything you need to go from idea to interview"
          description="ProjectForge helps you go from a blank page to a portfolio-ready project — with AI assistance at every step."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="surface-card rounded-2xl p-8 hover:border-indigo-500/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
