import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

function Dashboard() {
  return (
    <div className="flex bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="p-8">

          <h1 className="text-4xl font-bold">
            Welcome to ProjectForge 🚀
          </h1>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;