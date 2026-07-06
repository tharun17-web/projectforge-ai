import { motion } from "framer-motion";

function Card({
  children,
  className = "",
  hover = false,
  delay = 0,
  as: Component = motion.div,
  ...props
}) {
  return (
    <Component
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -6 } : undefined}
      className={`surface-card rounded-2xl transition-colors duration-300 ${
        hover ? "hover:border-indigo-500/50" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Card;
