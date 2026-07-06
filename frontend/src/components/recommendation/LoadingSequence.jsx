import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Layers, Blocks, Map, Sparkles, Check } from "lucide-react";

const steps = [
  { icon: Search, label: "Analyzing your profile" },
  { icon: Blocks, label: "Selecting a project domain" },
  { icon: Layers, label: "Designing the architecture" },
  { icon: Map, label: "Preparing the roadmap" },
  { icon: Sparkles, label: "Finalizing recommendation" },
];

function LoadingSequence() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (activeStep >= steps.length - 1) return;
    const t = setTimeout(() => setActiveStep((s) => s + 1), 900);
    return () => clearTimeout(t);
  }, [activeStep]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="surface-card rounded-3xl p-10 max-w-xl mx-auto"
    >
      <div className="flex items-center gap-2.5 justify-center text-indigo-400 mb-8">
        <Sparkles size={20} className="animate-pulse-dot" />
        <span className="font-semibold">AI is building your blueprint</span>
      </div>

      <div className="space-y-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const state =
            i < activeStep ? "done" : i === activeStep ? "active" : "pending";

          return (
            <div key={step.label} className="flex items-center gap-4">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                  state === "done"
                    ? "bg-emerald-500/15 text-emerald-400"
                    : state === "active"
                    ? "bg-indigo-500/15 text-indigo-400"
                    : "bg-slate-800 text-slate-600"
                }`}
              >
                <AnimatePresence mode="wait">
                  {state === "done" ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <Check size={16} />
                    </motion.span>
                  ) : (
                    <Icon
                      size={16}
                      className={state === "active" ? "animate-pulse-dot" : ""}
                    />
                  )}
                </AnimatePresence>
              </div>
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  state === "pending" ? "text-slate-600" : "text-slate-200"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default LoadingSequence;
