import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  Sparkles,
  FileStack,
  BookOpen,
  Map,
  Link2,
  Database,
} from "lucide-react";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import Button from "../../components/ui/Button";

import LoadingSequence from "../../components/recommendation/LoadingSequence";
import BlueprintSection from "../../components/recommendation/BlueprintSection";
import MissionChecklist from "../../components/recommendation/MissionChecklist";
import ResumeAssistant from "../../components/recommendation/ResumeAssistant";
import InterviewPrep from "../../components/recommendation/InterviewPrep";
import BuildEstimateCard from "../../components/recommendation/BuildEstimateCard";

import { generateRecommendation } from "../../services/recommendationService";
import { getDashboard } from "../../services/dashboardService";
import {
  getMissionChecklist,
  toggleMissionStep,
  missionProgress,
  logActivity,
} from "../../utils/localWorkspace";
import { estimateBuild } from "../../utils/estimate";

function Recommendation() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [checklist, setChecklist] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getDashboard()
      .then((res) => setProfile(res.data))
      .catch(() => {});
  }, []);

  const handleGenerate = async () => {
    setLoading(true);

    try {
      const response = await generateRecommendation();
      setProject(response.data);
      const list = getMissionChecklist(response.data.projectTitle);
      setChecklist(list);
      logActivity("generate", "Generated a new project", response.data.projectTitle);
      toast.success("Project generated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate recommendation.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStep = (stepId) => {
    const next = toggleMissionStep(project.projectTitle, stepId);
    setChecklist(next);
  };

  const estimate = project ? estimateBuild(project, profile) : null;
  const progress = missionProgress(checklist);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Topbar />

        <main className="p-6 md:p-8 max-w-6xl mx-auto">
          {!project && !loading && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
                <Sparkles size={28} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Generate your next engineering blueprint
              </h1>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto leading-relaxed">
                ProjectForge will analyze your profile and generate a complete
                blueprint — architecture, tech stack, roadmap, APIs, and
                database design.
              </p>
              <Button
                onClick={handleGenerate}
                variant="primary"
                size="lg"
                icon={Sparkles}
                className="mt-8"
              >
                Generate AI Project
              </Button>
            </div>
          )}

          <AnimatePresence mode="wait">
            {loading && (
              <motion.div key="loading" exit={{ opacity: 0 }} className="py-10">
                <LoadingSequence />
              </motion.div>
            )}
          </AnimatePresence>

          {project && !loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h1 className="text-2xl font-bold text-white">
                  Your Engineering Blueprint
                </h1>
                <Button
                  onClick={handleGenerate}
                  variant="secondary"
                  size="sm"
                  icon={Sparkles}
                >
                  Generate Another
                </Button>
              </div>

              <BlueprintSection icon={FileStack} title="Overview & Problem Statement">
                <h2 className="text-2xl font-bold text-white mb-3">
                  {project.projectTitle}
                </h2>
                {project.description}
              </BlueprintSection>

              <div className="grid md:grid-cols-2 gap-6">
                <BlueprintSection icon={FileStack} title="Tech Stack" delay={0.05}>
                  {project.techStack}
                </BlueprintSection>
                <BlueprintSection icon={BookOpen} title="Learning Topics" delay={0.1}>
                  {project.learningTopics}
                </BlueprintSection>
              </div>

              <BlueprintSection icon={Map} title="Roadmap" delay={0.15}>
                {project.roadmap}
              </BlueprintSection>

              <div className="grid md:grid-cols-2 gap-6">
                <BlueprintSection icon={Link2} title="API Design" delay={0.2}>
                  {project.apiList}
                </BlueprintSection>
                <BlueprintSection icon={Database} title="Database Design" delay={0.25}>
                  {project.databaseDesign}
                </BlueprintSection>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <MissionChecklist
                  checklist={checklist}
                  progress={progress}
                  onToggle={handleToggleStep}
                />
                <BuildEstimateCard estimate={estimate} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <ResumeAssistant project={project} />
                <InterviewPrep project={project} />
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Recommendation;
