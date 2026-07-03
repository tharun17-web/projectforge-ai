import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen p-6">

      <h1 className="text-3xl font-bold text-cyan-400">
        ProjectForge
      </h1>

      <nav className="mt-10 space-y-3">

        <Link
          to="/dashboard"
          className="block p-3 rounded-lg hover:bg-slate-800"
        >
          Dashboard
        </Link>

        <Link
          to="/recommendation"
          className="block p-3 rounded-lg hover:bg-slate-800"
        >
          Recommendations
        </Link>

        <Link
          to="/profile"
          className="block p-3 rounded-lg hover:bg-slate-800"
        >
          Profile
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;