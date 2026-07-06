import { motion } from "framer-motion";
import { Target, Compass, Layers } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const pillars = [
  {
    icon: Target,
    title: "Purposeful, not random",
    description:
      "Every recommendation is grounded in your actual skills, interests, and career goal — not a generic project list.",
  },
  {
    icon: Compass,
    title: "A mentor, not a chatbot",
    description:
      "ProjectForge behaves like a senior engineer guiding a junior developer — direct, structured, and practical.",
  },
  {
    icon: Layers,
    title: "End-to-end, not partial",
    description:
      "From idea to blueprint to build to resume to interview — one connected workspace instead of scattered tools.",
  },
];

function ProductVision() {
  return (
    <section id="vision" className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Product Vision"
          icon={Target}
          title="An engineering workspace, not a project generator"
          description="ProjectForge AI was rebuilt around one idea: software engineers grow through structured, guided practice — not by picking a random idea off a list."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="surface-card rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductVision;
