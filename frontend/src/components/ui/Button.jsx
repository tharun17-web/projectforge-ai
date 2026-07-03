function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-cyan-500 hover:bg-cyan-600 text-white",

    secondary:
      "border border-slate-700 hover:border-cyan-400 text-white",

    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;