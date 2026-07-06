import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, ArrowRight } from "lucide-react";

import { getHistory } from "../../services/recommendationService";
import { getMissionChecklist, missionProgress } from "../../utils/localWorkspace";

function LearningProgress() {
  const [project, setProject] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    getHistory()
      .then((res) => {
        const latest = res.data?.[0];
        if (latest) {
          setProject(latest);
          const checklist = getMissionChecklist(latest.projectTitle);
          setProgress(missionProgress(checklist));
        }
      })
      .catch(() => {});
  }, []);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="surface-card rounded-2xl p-8"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-emerald-400">
          <Target size={20} />
          <h2 className="text-xl font-bold text-white">Learning Progress</h2>
        </div>
        <span className="text-2xl font-bold text-white">{progress}%</span>
      </div>

      <p className="mt-1 text-slate-500 text-sm truncate">
        {project.projectTitle}
      </p>

      <div className="mt-5 h-2 rounded-full bg-slate-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
        />
      </div>

      <Link
        to="/recommendation"
        className="inline-flex items-center gap-1.5 mt-5 text-emerald-400 hover:text-emerald-300 font-semibold text-sm"
      >
        Continue mission <ArrowRight size={15} />
      </Link>
    </motion.div>
  );
}

export default LearningProgress;
