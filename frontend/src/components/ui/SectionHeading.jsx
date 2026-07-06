import { motion } from "framer-motion";
import Badge from "./Badge";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  icon,
}) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col max-w-2xl ${alignment}`}
    >
      {eyebrow && (
        <Badge icon={icon} tone="indigo" className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-slate-400 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
