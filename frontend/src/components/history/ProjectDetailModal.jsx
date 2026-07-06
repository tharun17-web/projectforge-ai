import { motion, AnimatePresence } from "framer-motion";
import { X, FileStack, BookOpen, Map, Link2, Database } from "lucide-react";
import BlueprintSection from "../recommendation/BlueprintSection";

function ProjectDetailModal({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center p-4 md:p-10 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl surface-card rounded-3xl p-6 md:p-8 space-y-5 my-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-bold text-white">
                {item.projectTitle}
              </h2>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-slate-300 leading-7">{item.description}</p>

            {item.techStack && (
              <BlueprintSection icon={FileStack} title="Tech Stack">
                {item.techStack}
              </BlueprintSection>
            )}
            {item.learningTopics && (
              <BlueprintSection icon={BookOpen} title="Learning Topics">
                {item.learningTopics}
              </BlueprintSection>
            )}
            {item.roadmap && (
              <BlueprintSection icon={Map} title="Roadmap">
                {item.roadmap}
              </BlueprintSection>
            )}
            {item.apiList && (
              <BlueprintSection icon={Link2} title="API Design">
                {item.apiList}
              </BlueprintSection>
            )}
            {item.databaseDesign && (
              <BlueprintSection icon={Database} title="Database Design">
                {item.databaseDesign}
              </BlueprintSection>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectDetailModal;
