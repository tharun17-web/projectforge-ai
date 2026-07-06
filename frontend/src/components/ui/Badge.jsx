const tones = {
  indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  rose: "bg-rose-500/10 text-rose-300 border-rose-500/20",
  slate: "bg-slate-800 text-slate-300 border-slate-700",
};

function Badge({ children, tone = "indigo", icon: Icon, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${tones[tone]} ${className}`}
    >
      {Icon && <Icon size={13} />}
      {children}
    </span>
  );
}

export default Badge;
