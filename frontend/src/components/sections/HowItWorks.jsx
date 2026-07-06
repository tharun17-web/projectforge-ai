import { motion } from "framer-motion";
import { UserCog, BrainCog, Rocket } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: UserCog,
    title: "Tell us about yourself",
    description:
      "Share your skills, interests, experience level, and career goal.",
  },
  {
    number: "02",
    icon: BrainCog,
    title: "AI analyzes your profile",
    description:
      "ProjectForge matches your profile against real-world project patterns.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start building",
    description:
      "Receive a full blueprint — roadmap, APIs, database design, and timeline.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="How It Works"
          icon={Rocket}
          title="Three steps from idea to blueprint"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative surface-card rounded-2xl p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-bold text-slate-800">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Icon size={20} />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
