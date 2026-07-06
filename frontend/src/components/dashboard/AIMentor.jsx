import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

/**
 * Frontend-only "AI Mentor" — contextual tips derived from the dashboard's
 * existing profile data. No new backend calls; purely local heuristics.
 */
function buildTips(dashboard) {
  const tips = [];

  if (!dashboard) return tips;

  if (!dashboard.recommendationsGenerated) {
    tips.push(
      "You haven't generated a project yet — start with one that matches your current experience level so you can finish it end-to-end."
    );
  } else if (dashboard.recommendationsGenerated < 3) {
    tips.push(
      "You're early in your project history. Try finishing your current project's roadmap before generating a new one — depth beats breadth for portfolios."
    );
  } else {
    tips.push(
      "You've built a solid project history. Consider picking your strongest project and polishing it further with tests and documentation."
    );
  }

  if (dashboard.careerGoal === "Placement") {
    tips.push(
      "For placement prep, prioritize projects with clear APIs and database design — these come up often in technical interviews."
    );
  } else if (dashboard.careerGoal === "Freelancing") {
    tips.push(
      "Freelance clients care about delivery speed. Use the roadmap to timebox each milestone realistically."
    );
  } else if (dashboard.careerGoal === "Hackathon") {
    tips.push(
      "For hackathons, scope down — pick 2-3 core features from your roadmap and build those first."
    );
  }

  if (dashboard.availableDays && dashboard.availableDays < 14) {
    tips.push(
      "With limited days available, focus on the first few roadmap milestones rather than the entire project."
    );
  }

  return tips.slice(0, 3);
}

function AIMentor({ dashboard }) {
  const tips = buildTips(dashboard);
  if (!tips.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="surface-card rounded-2xl p-8"
    >
      <div className="flex items-center gap-2.5 text-cyan-400">
        <BrainCircuit size={20} />
        <h2 className="text-xl font-bold text-white">AI Mentor</h2>
      </div>
      <p className="mt-1 text-slate-500 text-sm">
        Tips based on your profile and progress
      </p>

      <ul className="mt-5 space-y-4">
        {tips.map((tip, i) => (
          <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
            <span className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              {i + 1}
            </span>
            {tip}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default AIMentor;
