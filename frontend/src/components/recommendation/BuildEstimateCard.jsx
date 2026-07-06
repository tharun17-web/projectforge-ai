import { motion } from "framer-motion";
import { Gauge, Clock, Layers } from "lucide-react";

function BuildEstimateCard({ estimate }) {
  if (!estimate) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="surface-card rounded-2xl p-6 md:p-7"
    >
      <div className="flex items-center gap-2.5 text-cyan-400 mb-1">
        <Gauge size={19} />
        <h3 className="text-white font-bold">Build Estimate</h3>
      </div>
      <p className="text-slate-500 text-sm mb-5">
        A rough, frontend-calculated estimate — not a guarantee.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-slate-900/60 p-4">
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
            <Clock size={13} /> Estimated time
          </div>
          <p className="text-white font-bold text-lg">
            ~{estimate.estimatedDays} days
          </p>
        </div>
        <div className="rounded-xl bg-slate-900/60 p-4">
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
            <Layers size={13} /> Difficulty
          </div>
          <p className="text-white font-bold text-lg">{estimate.difficulty}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default BuildEstimateCard;
