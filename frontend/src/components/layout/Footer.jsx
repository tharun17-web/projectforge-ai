import { Link } from "react-router-dom";
import { Hammer } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Engineering Journey", href: "#journey" },
    ],
  },
  {
    title: "Workspace",
    links: [
      { label: "AI Generator", href: "/register" },
      { label: "Dashboard", href: "/register" },
      { label: "History", href: "/register" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Login", href: "/login" },
      { label: "Get Started", href: "/register" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
              <Hammer size={18} className="text-slate-950" />
            </span>
            <span className="text-xl font-bold text-white">
              ProjectForge<span className="text-cyan-400"> AI</span>
            </span>
          </Link>
          <p className="text-slate-400 mt-4 max-w-xs leading-relaxed">
            From Idea → Blueprint → Build → Resume → Interview. Your AI
            software engineering workspace.
          </p>
          <div className="flex gap-3 mt-6">
           {[FaGithub, FaTwitter, FaLinkedin].map((Icon, i) => (
              <span
                key={i}
                className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-semibold text-sm mb-4">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} ProjectForge AI. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built for engineers, by engineers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
