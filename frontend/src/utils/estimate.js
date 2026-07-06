/**
 * Frontend-only heuristics for a "Build Estimate". These are approximations
 * derived from the recommendation's own text fields (tech stack + roadmap
 * length) — never invented backend data. Always presented as an estimate.
 */

export function estimateBuild(project, profile) {
  if (!project) return null;

  const techStackText = String(project.techStack || "");
  const roadmapText = String(project.roadmap || "");
  const stackItems = techStackText
    .split(/[,\n•-]/)
    .map((s) => s.trim())
    .filter(Boolean);

  const roadmapLines = roadmapText
    .split(/\n/)
    .map((s) => s.trim())
    .filter(Boolean);

  const complexityScore = stackItems.length * 1.1 + roadmapLines.length * 1.4;

  let difficulty = "Moderate";
  if (complexityScore < 12) difficulty = "Beginner-Friendly";
  else if (complexityScore > 26) difficulty = "Challenging";

  const experienceMultiplier =
    profile?.experienceLevel === "Advanced"
      ? 0.75
      : profile?.experienceLevel === "Intermediate"
      ? 1
      : 1.35;

  const baseDays = Math.max(5, Math.round(complexityScore * 0.9));
  const estimatedDays = Math.round(baseDays * experienceMultiplier);

  return {
    difficulty,
    estimatedDays,
    stackItemCount: stackItems.length || null,
    milestoneCount: roadmapLines.length || null,
  };
}
