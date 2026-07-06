import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, FolderGit2, Sparkles } from "lucide-react";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import Button from "../../components/ui/Button";
import ProjectCard from "../../components/history/ProjectCard";
import ProjectDetailModal from "../../components/history/ProjectDetailModal";

import { getHistory } from "../../services/recommendationService";

const FILTERS = ["All", "React", "Spring Boot", "Node.js", "Python", "AI/ML"];

function matchesFilter(item, filter) {
  if (filter === "All") return true;
  const haystack = `${item.techStack || ""}`.toLowerCase();
  if (filter === "AI/ML") {
    return /ai|machine learning|ml|tensorflow|pytorch/.test(haystack);
  }
  return haystack.includes(filter.toLowerCase());
}

function HistorySkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-pulse">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-44 rounded-2xl bg-slate-900" />
      ))}
    </div>
  );
}

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getHistory()
      .then((res) => setHistory(res.data || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return history.filter((item) => {
      const matchesQuery =
        !query ||
        item.projectTitle?.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase());
      return matchesQuery && matchesFilter(item, filter);
    });
  }, [history, query, filter]);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Topbar />

        <main className="p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">
                Portfolio Timeline
              </h1>
              <p className="text-slate-500 mt-1">
                Every project ProjectForge has generated for you.
              </p>
            </div>

            <div className="relative w-full md:w-72">
              <Search
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 transition-colors text-sm"
              />
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === f
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {loading ? (
            <HistorySkeleton />
          ) : filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="surface-card rounded-3xl p-16 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
                <FolderGit2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-white">
                {history.length === 0
                  ? "No projects yet"
                  : "No projects match your search"}
              </h3>
              <p className="mt-2 text-slate-400 max-w-sm mx-auto">
                {history.length === 0
                  ? "Generate your first AI-powered project to start building your portfolio timeline."
                  : "Try a different search term or filter."}
              </p>
              {history.length === 0 && (
                <Button
                  as={Link}
                  to="/recommendation"
                  variant="primary"
                  icon={Sparkles}
                  className="mt-6"
                >
                  Generate a Project
                </Button>
              )}
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((item, index) => (
                <ProjectCard
                  key={item.id ?? index}
                  item={item}
                  index={index}
                  onSelect={setSelected}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      <ProjectDetailModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default History;
