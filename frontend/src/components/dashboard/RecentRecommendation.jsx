import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

import { getHistory } from "../../services/recommendationService";
import Button from "../ui/Button";

function RecentRecommendation() {
  const [latest, setLatest] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getHistory()
      .then((res) => {
        if (res.data?.length > 0) setLatest(res.data[0]);
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded) return null;

  if (!latest) {
    return (
      <div className="surface-card rounded-2xl p-8">
        <h2 className="text-xl font-bold text-white">Latest Recommendation</h2>
        <p className="mt-3 text-slate-400">
          You haven't generated any projects yet.
        </p>
        <Button as={Link} to="/recommendation" variant="primary" className="mt-6">
          Generate First Project
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="surface-card rounded-2xl p-8"
    >
      <div className="flex items-center gap-2.5 text-indigo-400">
        <Sparkles size={20} />
        <h2 className="text-xl font-bold text-white">Latest Recommendation</h2>
      </div>

      <h3 className="mt-5 text-2xl font-bold text-white">
        {latest.projectTitle}
      </h3>

      <p className="mt-3 text-slate-400 leading-relaxed line-clamp-3">
        {latest.description}
      </p>

      <Link
        to="/history"
        className="inline-flex items-center gap-1.5 mt-6 text-indigo-400 hover:text-indigo-300 font-semibold text-sm"
      >
        View All <ArrowRight size={15} />
      </Link>
    </motion.div>
  );
}

export default RecentRecommendation;
