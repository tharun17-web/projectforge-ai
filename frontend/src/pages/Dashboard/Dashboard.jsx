import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

import Hero from "../../components/dashboard/Hero";
import StatCards from "../../components/dashboard/StatCards";
import RecentRecommendation from "../../components/dashboard/RecentRecommendation";
import QuickActions from "../../components/dashboard/QuickActions";
import AIMentor from "../../components/dashboard/AIMentor";
import LearningProgress from "../../components/dashboard/LearningProgress";
import RecentActivity from "../../components/dashboard/RecentActivity";

import { getDashboard } from "../../services/dashboardService";

function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />
      <div className="flex-1">
        <div className="h-20 border-b border-slate-800" />
        <main className="p-6 md:p-8 space-y-6 animate-pulse">
          <div className="h-52 rounded-3xl bg-slate-900" />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-28 rounded-2xl bg-slate-900" />
            ))}
          </div>
          <div className="h-40 rounded-2xl bg-slate-900" />
        </main>
      </div>
    </div>
  );
}

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await getDashboard();
        setDashboard(response.data);
        toast.success("Dashboard loaded!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) return <DashboardSkeleton />;

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Topbar />

        <main className="p-6 md:p-8 space-y-6">
          <Hero />

          <StatCards dashboard={dashboard} />

          <div className="grid lg:grid-cols-2 gap-6">
            <RecentRecommendation />
            <LearningProgress />
          </div>

          <QuickActions />

          <div className="grid lg:grid-cols-2 gap-6">
            <AIMentor dashboard={dashboard} />
            <RecentActivity />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
