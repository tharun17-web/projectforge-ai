import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Hammer, ArrowRight } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5 group">
  <img
  src="/logo/logo.png"
  alt="ProjectForge AI Logo"
  className="w-9 h-9 object-contain"
/>

  <span className="text-xl font-bold text-white tracking-tight">
    ProjectForge<span className="text-cyan-400"> AI</span>
  </span>
</Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#vision" className="text-slate-400 hover:text-white transition-colors">
            Vision
          </a>
          <a href="#features" className="text-slate-400 hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">
            How it works
          </a>
          <a href="#journey" className="text-slate-400 hover:text-white transition-colors">
            Journey
          </a>
        </div>

        <div className="flex gap-3 items-center">
          <Link
            to="/login"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-950/40 hover:shadow-indigo-900/50"
          >
            Get Started
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
