import { motion } from "framer-motion";
import { ListChecks, Check } from "lucide-react";

function MissionChecklist({ checklist, progress, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="surface-card rounded-2xl p-6 md:p-7"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5 text-emerald-400">
          <ListChecks size={19} />
          <h3 className="text-white font-bold">Mission Progress</h3>
        </div>
        <span className="text-sm font-bold text-white">{progress}%</span>
      </div>
      <p className="text-slate-500 text-sm mb-4">
        Tracked locally in your browser — check off steps as you build.
      </p>

      <div className="h-2 rounded-full bg-slate-800 overflow-hidden mb-5">
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
        />
      </div>

      <ul className="space-y-2">
        {checklist.map((step) => (
          <li key={step.id}>
            <button
              onClick={() => onToggle(step.id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800/60 transition-colors text-left"
            >
              <span
                className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                  step.done
                    ? "bg-emerald-500 border-emerald-500 text-slate-950"
                    : "border-slate-600 text-transparent"
                }`}
              >
                <Check size={13} />
              </span>
              <span
                className={`text-sm ${
                  step.done ? "text-slate-500 line-through" : "text-slate-200"
                }`}
              >
                {step.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default MissionChecklist;
