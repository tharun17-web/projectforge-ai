import { motion } from "framer-motion";
import { FolderGit2, ChevronRight } from "lucide-react";

function ProjectCard({ item, index, onSelect }) {
  return (
    <motion.button
      onClick={() => onSelect(item)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 9) * 0.05 }}
      whileHover={{ y: -5 }}
      className="text-left surface-card rounded-2xl p-6 hover:border-indigo-500/50 transition-colors duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
          <FolderGit2 size={18} />
        </div>
        <ChevronRight size={18} className="text-slate-600 mt-2 shrink-0" />
      </div>

      <h3 className="mt-5 text-lg font-bold text-white line-clamp-2">
        {item.projectTitle}
      </h3>

      <p className="mt-2.5 text-slate-400 text-sm leading-relaxed line-clamp-3">
        {item.description}
      </p>
    </motion.button>
  );
}

export default ProjectCard;
