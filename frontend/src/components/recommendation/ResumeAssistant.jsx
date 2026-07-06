import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Copy, Check } from "lucide-react";

function buildBullets(project) {
  if (!project) return [];
  const stack = String(project.techStack || "")
    .split(/[,\n•-]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 5)
    .join(", ");

  const bullets = [];

  if (project.projectTitle) {
    bullets.push(
      `Designed and built "${project.projectTitle}"${
        stack ? `, using ${stack}` : ""
      }.`
    );
  }
  if (project.description) {
    const firstSentence = project.description.split(/(?<=[.!?])\s/)[0];
    bullets.push(`${firstSentence}`.trim());
  }
  if (project.apiList) {
    bullets.push("Designed and implemented RESTful API endpoints for core application features.");
  }
  if (project.databaseDesign) {
    bullets.push("Modeled and implemented the database schema to support application data flows.");
  }
  if (project.roadmap) {
    bullets.push("Planned and executed the project across a structured, milestone-based roadmap.");
  }

  return bullets;
}

function ResumeAssistant({ project }) {
  const bullets = useMemo(() => buildBullets(project), [project]);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = bullets.map((b) => `• ${b}`).join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  if (!bullets.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="surface-card rounded-2xl p-6 md:p-7"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2.5 text-amber-400">
          <FileText size={19} />
          <h3 className="text-white font-bold">Resume Assistant</h3>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? "Copied" : "Copy all"}
        </button>
      </div>
      <p className="text-slate-500 text-sm mb-4">
        Bullet points formatted from this project — edit freely before adding
        to your resume.
      </p>

      <ul className="space-y-3">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
            <span className="leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ResumeAssistant;
