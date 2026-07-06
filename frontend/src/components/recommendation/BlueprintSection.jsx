import { motion } from "framer-motion";

function BlueprintSection({ icon: Icon, title, children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`surface-card rounded-2xl p-6 md:p-7 ${className}`}
    >
      <div className="flex items-center gap-2.5 text-indigo-400 mb-4">
        {Icon && <Icon size={19} />}
        <h3 className="text-white font-bold">{title}</h3>
      </div>
      <div className="text-slate-300 leading-7 whitespace-pre-line text-[15px]">
        {children}
      </div>
    </motion.div>
  );
}

export default BlueprintSection;
