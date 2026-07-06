import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { getDashboard } from "../../services/dashboardService";

const titles = {
  "/dashboard": ["Mission Control", "Your engineering workspace overview"],
  "/recommendation": ["AI Generator", "Generate your next engineering blueprint"],
  "/history": ["Portfolio Timeline", "Every project you've built with ProjectForge"],
  "/profile": ["Profile & Settings", "Personalize your recommendations"],
};

function Topbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getDashboard()
      .then((res) => setUser(res.data))
      .catch(() => {});
  }, []);

  const [title, subtitle] = titles[location.pathname] || [
    "ProjectForge",
    "",
  ];

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "AI Generator", path: "/recommendation" },
    { name: "History", path: "/history" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="h-20 flex items-center justify-between px-6 md:px-8">
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="hidden md:block">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-slate-500 text-sm">{subtitle}</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-white text-sm font-medium leading-tight">
              {user?.fullName || user?.email}
            </p>
            <p className="text-slate-500 text-xs">
              {user?.experienceLevel || "—"}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-slate-950">
            {(user?.fullName || user?.email || "?").charAt(0).toUpperCase()}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-3 space-y-1">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium ${
                location.pathname === item.path
                  ? "bg-indigo-600/15 text-white"
                  : "text-slate-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={logout}
            className="flex items-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-medium text-rose-400"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Topbar;
