import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const audiences = [
  {
    title: "College Students & Freshers",
    points: [
      "Build a portfolio without guessing what to build",
      "Learn through structured, guided roadmaps",
    ],
  },
  {
    title: "Placement Candidates",
    points: [
      "Projects tailored to your target role",
      "Interview prep generated from your own stack",
    ],
  },
  {
    title: "Self-Taught Developers",
    points: [
      "A mentor-style structure to follow",
      "Clear architecture instead of tutorial hell",
    ],
  },
  {
    title: "Hackathon Teams & Builders",
    points: [
      "Fast, scoped project blueprints",
      "Database and API design ready to implement",
    ],
  },
];

function Benefits() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Benefits"
          icon={CheckCircle2}
          title="Built for how you actually learn to engineer"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {audiences.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="surface-card rounded-2xl p-8"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-400">
                    <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
