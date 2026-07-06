import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Hammer, Mail, Lock, ArrowRight, AlertCircle } from "lucide-react";

import { login as loginApi } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { logActivity } from "../../utils/localWorkspace";
import Button from "../../components/ui/Button";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await loginApi(formData);
      login(response.data.token);
      logActivity("login", "Logged in", formData.email);
      toast.success("Welcome back!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Left: form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Link to="/" className="flex items-center gap-2.5 mb-12">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
              <Hammer size={18} className="text-slate-950" />
            </span>
            <span className="text-xl font-bold text-white">
              ProjectForge<span className="text-cyan-400"> AI</span>
            </span>
          </Link>

          <h1 className="text-3xl font-bold text-white">Welcome back</h1>
          <p className="text-slate-400 mt-2">
            Login to continue building in your workspace.
          </p>

          {error && (
            <div className="mt-6 flex items-center gap-2 text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-3 text-sm">
              <AlertCircle size={16} className="shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={loading}
              icon={ArrowRight}
              iconPosition="right"
              className="w-full justify-center"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <p className="mt-8 text-center text-slate-400 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              Create one
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right: visual panel */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 border-l border-slate-800 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative surface-card rounded-3xl p-10 max-w-md mx-10 glow-indigo"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
            AI Software Architect
          </p>
          <h2 className="mt-4 text-2xl font-bold text-white leading-snug">
            Every login picks up right where your engineering workspace left
            off.
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Your recommendations, mission progress, and profile are all
            waiting for you.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
