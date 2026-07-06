import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Sparkles, LogIn, UserCog, CheckSquare } from "lucide-react";

import { getActivity, timeAgo } from "../../utils/localWorkspace";

const icons = {
  login: LogIn,
  generate: Sparkles,
  profile: UserCog,
  mission: CheckSquare,
};

function RecentActivity() {
  const [activity] = useState(() => getActivity());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="surface-card rounded-2xl p-8"
    >
      <div className="flex items-center gap-2.5 text-slate-300">
        <Activity size={20} />
        <h2 className="text-xl font-bold text-white">Recent Activity</h2>
      </div>

      {activity.length === 0 ? (
        <p className="mt-4 text-slate-500 text-sm">
          Your recent actions in ProjectForge will show up here.
        </p>
      ) : (
        <ul className="mt-5 space-y-4">
          {activity.slice(0, 6).map((item) => {
            const Icon = icons[item.type] || Activity;
            return (
              <li key={item.id} className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                  <Icon size={15} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-slate-200 truncate">{item.title}</p>
                  {item.meta && (
                    <p className="text-xs text-slate-500 truncate">{item.meta}</p>
                  )}
                </div>
                <span className="ml-auto text-xs text-slate-600 shrink-0">
                  {timeAgo(item.timestamp)}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </motion.div>
  );
}

export default RecentActivity;
