import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Sparkles,
  History,
  UserRound,
  LogOut,
  Hammer,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "AI Generator", path: "/recommendation", icon: Sparkles },
    { name: "History", path: "/history", icon: History },
    { name: "Profile", path: "/profile", icon: UserRound },
  ];

  return (
    <aside className="hidden md:flex w-64 shrink-0 bg-slate-950 border-r border-slate-800 min-h-screen flex-col sticky top-0 h-screen">
      <Link to="/dashboard" className="flex items-center gap-2.5 px-6 py-6">
        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
          <Hammer size={16} className="text-slate-950" />
        </span>
        <span className="text-lg font-bold text-white tracking-tight">
          ProjectForge
        </span>
      </Link>

      <nav className="flex-1 px-4 mt-2 space-y-1">
        {menu.map((item) => {
          const active = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link key={item.path} to={item.path} className="relative block">
              {active && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-indigo-600/15 border border-indigo-500/30 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <div
                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? "text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                <Icon size={18} className={active ? "text-cyan-400" : ""} />
                {item.name}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
