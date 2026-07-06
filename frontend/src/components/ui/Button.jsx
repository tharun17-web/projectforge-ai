import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const variants = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-950/40",
  accent:
    "bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-lg shadow-cyan-950/30",
  secondary:
    "bg-slate-800/80 text-white border border-slate-700 hover:border-slate-600 hover:bg-slate-800",
  outline:
    "border border-slate-700 text-slate-200 hover:border-indigo-500 hover:text-white bg-transparent",
  ghost: "text-slate-300 hover:text-white hover:bg-slate-800/60",
  danger: "bg-rose-600 text-white hover:bg-rose-500",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-5 py-3 text-sm rounded-xl gap-2",
  lg: "px-7 py-3.5 text-base rounded-xl gap-2.5",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      type = "button",
      icon: Icon,
      iconPosition = "left",
      loading = false,
      disabled = false,
      className = "",
      as: Component = motion.button,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        type={Component === motion.button ? type : undefined}
        disabled={disabled || loading}
        whileTap={{ scale: 0.97 }}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.15 }}
        className={`inline-flex items-center justify-center font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {loading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          Icon && iconPosition === "left" && <Icon size={16} />
        )}
        {children}
        {!loading && Icon && iconPosition === "right" && <Icon size={16} />}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
