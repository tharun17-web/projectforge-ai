import { motion } from "framer-motion";
import { FolderKanban, Brain, Target, CalendarDays } from "lucide-react";

function StatCards({ dashboard }) {
  if (!dashboard) return null;

  const stats = [
    {
      title: "Projects Generated",
      value: dashboard.recommendationsGenerated,
      icon: FolderKanban,
      tone: "text-indigo-400 bg-indigo-500/10",
    },
    {
      title: "Experience",
      value: dashboard.experienceLevel,
      icon: Brain,
      tone: "text-cyan-400 bg-cyan-500/10",
    },
    {
      title: "Career Goal",
      value: dashboard.careerGoal,
      icon: Target,
      tone: "text-emerald-400 bg-emerald-500/10",
    },
    {
      title: "Available Days",
      value: `${dashboard.availableDays} Days`,
      icon: CalendarDays,
      tone: "text-amber-400 bg-amber-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="surface-card rounded-2xl p-6"
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-slate-500 text-sm">{stat.title}</p>
                <h2 className="mt-2 text-2xl font-bold text-white truncate">
                  {stat.value}
                </h2>
              </div>
              <div className={`rounded-xl p-3 shrink-0 ${stat.tone}`}>
                <Icon size={22} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default StatCards;
