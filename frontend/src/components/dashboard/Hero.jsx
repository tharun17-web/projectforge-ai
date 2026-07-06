import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl surface-card p-8 md:p-10"
    >
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="relative">
        <Badge icon={Sparkles} tone="indigo">
          AI Software Architect
        </Badge>

        <h1 className="mt-6 text-3xl md:text-4xl font-bold text-white leading-tight max-w-2xl">
          Build portfolio-worthy software projects with AI.
        </h1>

        <p className="mt-4 max-w-xl text-slate-400 leading-relaxed">
          Generate complete software project ideas with architecture,
          roadmap, APIs, database design, and learning resources tailored to
          your profile.
        </p>

        <div className="mt-8 flex gap-3 flex-wrap">
          <Button as={Link} to="/recommendation" variant="primary" size="lg">
            Generate Project
          </Button>
          <Button as={Link} to="/history" variant="secondary" size="lg">
            View History
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
