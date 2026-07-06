import { useMemo } from "react";
import { motion } from "framer-motion";
import { MessageSquareCode } from "lucide-react";

function buildQuestions(project) {
  if (!project) return [];

  const stackItems = String(project.techStack || "")
    .split(/[,\n•-]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4);

  const questions = [
    "Walk me through the overall architecture of this project.",
    "What was the most challenging part of building this, and how did you solve it?",
  ];

  stackItems.forEach((tech) => {
    questions.push(`Why did you choose ${tech}, and what tradeoffs did it involve?`);
  });

  if (project.databaseDesign) {
    questions.push("How is your database schema designed, and why?");
  }
  if (project.apiList) {
    questions.push("How did you design and secure your API endpoints?");
  }

  return questions.slice(0, 6);
}

function InterviewPrep({ project }) {
  const questions = useMemo(() => buildQuestions(project), [project]);
  if (!questions.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="surface-card rounded-2xl p-6 md:p-7"
    >
      <div className="flex items-center gap-2.5 text-rose-400 mb-1">
        <MessageSquareCode size={19} />
        <h3 className="text-white font-bold">Interview Preparation</h3>
      </div>
      <p className="text-slate-500 text-sm mb-4">
        Likely questions generated from this project's own tech stack.
      </p>

      <ul className="space-y-3">
        {questions.map((q, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-slate-300 bg-slate-900/60 rounded-xl px-4 py-3"
          >
            <span className="text-rose-400 font-bold shrink-0">Q{i + 1}.</span>
            <span className="leading-relaxed">{q}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default InterviewPrep;
