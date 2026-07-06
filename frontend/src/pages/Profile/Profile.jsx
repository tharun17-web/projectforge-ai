import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { UserRound, Sparkles, Calendar, Gauge } from "lucide-react";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import Button from "../../components/ui/Button";

import { getProfile, updateProfile } from "../../services/profileService";
import { logActivity } from "../../utils/localWorkspace";
import { goals } from "../../data/goals";

function ProfileSkeleton() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />
      <div className="flex-1">
        <div className="h-20 border-b border-slate-800" />
        <main className="p-8 max-w-3xl animate-pulse space-y-4">
          <div className="h-32 rounded-2xl bg-slate-900" />
          <div className="h-96 rounded-2xl bg-slate-900" />
        </main>
      </div>
    </div>
  );
}

function fieldsFilled(formData) {
  const fields = [
    "fullName",
    "experienceLevel",
    "careerGoal",
    "availableDays",
    "preferredDifficulty",
  ];
  const filled = fields.filter((f) => {
    const v = formData[f];
    return v !== undefined && v !== null && String(v).trim() !== "";
  });
  return Math.round((filled.length / fields.length) * 100);
}

function Profile() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    experienceLevel: "Beginner",
    careerGoal: "Placement",
    availableDays: 30,
    preferredDifficulty: "Medium",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const response = await getProfile();
      setFormData(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      await updateProfile(formData);
      logActivity("profile", "Updated profile", formData.careerGoal);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const completion = useMemo(() => fieldsFilled(formData), [formData]);

  if (loading) return <ProfileSkeleton />;

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Topbar />

        <main className="p-6 md:p-8 max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="surface-card rounded-2xl p-7"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-slate-950 text-xl shrink-0">
                  {(formData.fullName || "?").charAt(0).toUpperCase()}
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">
                    {formData.fullName || "Complete your profile"}
                  </h1>
                  <p className="text-slate-500 text-sm mt-0.5">
                    Personalize your recommendations
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-slate-500">Profile completion</p>
                <p className="text-2xl font-bold text-white">{completion}%</p>
              </div>
            </div>

            <div className="mt-5 h-2 rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                animate={{ width: `${completion}%` }}
                transition={{ duration: 0.5 }}
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="surface-card rounded-2xl p-7 space-y-6"
          >
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                <UserRound size={15} /> Full name
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                  <Gauge size={15} /> Experience level
                </label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white outline-none focus:border-indigo-500 transition-colors"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <p className="text-xs text-slate-500 mt-1.5">
                  Helps calibrate project complexity.
                </p>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                  <Sparkles size={15} /> Career goal
                </label>
                <select
                  name="careerGoal"
                  value={formData.careerGoal}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white outline-none focus:border-indigo-500 transition-colors"
                >
                  {(goals?.length
                    ? goals
                    : ["Placement", "Portfolio", "Hackathon", "Freelancing", "Startup"]
                  ).map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
                <p className="text-xs text-slate-500 mt-1.5">
                  Shapes which projects get recommended.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                  <Calendar size={15} /> Available days
                </label>
                <input
                  name="availableDays"
                  type="number"
                  min="1"
                  value={formData.availableDays}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white outline-none focus:border-indigo-500 transition-colors"
                />
                <p className="text-xs text-slate-500 mt-1.5">
                  Used for roadmap pacing and build estimates.
                </p>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                  <Gauge size={15} /> Preferred difficulty
                </label>
                <select
                  name="preferredDifficulty"
                  value={formData.preferredDifficulty}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white outline-none focus:border-indigo-500 transition-colors"
                >
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={saving}
              className="w-full justify-center"
            >
              {saving ? "Saving..." : "Save Profile"}
            </Button>
          </motion.form>
        </main>
      </div>
    </div>
  );
}

export default Profile;
