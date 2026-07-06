import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Hammer, Mail, Lock, User, ArrowRight, CheckCircle2 } from "lucide-react";

import { register } from "../../services/authService";
import Button from "../../components/ui/Button";

const perks = [
  "Personalized AI project recommendations",
  "Full engineering blueprints in seconds",
  "Resume bullets & interview prep, built in",
];

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await register(formData);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Left: visual panel */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 border-r border-slate-800 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative surface-card rounded-3xl p-10 max-w-md mx-10 glow-cyan"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
            From Idea → Interview
          </p>
          <h2 className="mt-4 text-2xl font-bold text-white leading-snug">
            Your workspace for building portfolio-worthy software.
          </h2>
          <ul className="mt-6 space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{perk}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Right: form */}
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

          <h1 className="text-3xl font-bold text-white">Create your account</h1>
          <p className="text-slate-400 mt-2">
            Start your journey with ProjectForge AI.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
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
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>

          <p className="mt-8 text-center text-slate-400 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Register;
