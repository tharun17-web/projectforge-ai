function Navbar() {
  return (
    <nav className="w-full bg-slate-900 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-cyan-400">
        ProjectForge
      </h1>

      <div className="flex gap-6">
        <button className="hover:text-cyan-400 transition">
          Login
        </button>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;