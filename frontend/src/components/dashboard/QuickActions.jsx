import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, History, UserRound } from "lucide-react";

const actions = [
  {
    title: "Generate Project",
    subtitle: "Create a new AI-powered software project",
    icon: Sparkles,
    to: "/recommendation",
    tone: "bg-indigo-500/10 text-indigo-400",
  },
  {
    title: "Recommendation History",
    subtitle: "View your previously generated projects",
    icon: History,
    to: "/history",
    tone: "bg-cyan-500/10 text-cyan-400",
  },
  {
    title: "Profile",
    subtitle: "Update your learning preferences",
    icon: UserRound,
    to: "/profile",
    tone: "bg-emerald-500/10 text-emerald-400",
  },
];

function QuickActions() {
  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-5">Quick Actions</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -6 }}
            >
              <Link
                to={action.to}
                className="block rounded-2xl surface-card p-6 hover:border-indigo-500/50 transition-colors duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${action.tone}`}>
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{action.title}</h3>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                  {action.subtitle}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;
