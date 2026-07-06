import { motion } from "framer-motion";
import { Lightbulb, FileStack, Hammer, FileText, MessagesSquare } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const journey = [
  { icon: Lightbulb, title: "Idea", description: "Get a project matched to your profile and goals." },
  { icon: FileStack, title: "Blueprint", description: "Receive architecture, APIs, and a database design." },
  { icon: Hammer, title: "Build", description: "Follow a roadmap and track progress step by step." },
  { icon: FileText, title: "Resume", description: "Convert your finished project into resume bullet points." },
  { icon: MessagesSquare, title: "Interview", description: "Prepare with guidance based on your own tech stack." },
];

function EngineeringJourney() {
  return (
    <section id="journey" className="bg-slate-900/40 py-24 px-6 border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Engineering Journey"
          icon={Hammer}
          title="From idea to blueprint to build to resume to interview"
          description="One continuous workspace that follows your project all the way to a job-ready outcome."
        />

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          <div className="grid md:grid-cols-5 gap-8">
            {journey.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative w-16 h-16 rounded-2xl surface-card flex items-center justify-center text-indigo-400 z-10">
                    <Icon size={24} />
                  </div>
                  <h4 className="mt-5 text-white font-semibold">{step.title}</h4>
                  <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngineeringJourney;
