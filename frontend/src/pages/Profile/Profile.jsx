import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

function Profile() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          <h1 className="text-4xl font-bold">Complete Your Profile</h1>

          <p className="mt-2 text-slate-400">
            Help us personalize your project recommendations.
          </p>

          <form className="mt-10 space-y-5 max-w-3xl">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
            />

            <select className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <select className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700">
              <option>Placement</option>
              <option>Portfolio</option>
              <option>Hackathon</option>
              <option>Freelancing</option>
              <option>Startup</option>
            </select>

            <input
              type="number"
              placeholder="Available Time (Days)"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
            />

            <select className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 p-4 rounded-xl font-semibold"
            >
              Continue
            </button>

          </form>
        </main>
      </div>
    </div>
  );
}

export default Profile;