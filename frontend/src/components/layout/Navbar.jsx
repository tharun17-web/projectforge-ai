import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-slate-900 text-white px-8 py-4 flex justify-between items-center">

      <Link
        to="/"
        className="text-2xl font-bold text-cyan-400"
      >
        ProjectForge
      </Link>

      <div className="flex gap-6 items-center">

        <Link
          to="/login"
          className="hover:text-cyan-400 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg transition"
        >
          Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;