function Register() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800">

        <h1 className="text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="text-slate-400 mt-2">
          Start your journey with ProjectForge
        </p>

        <form className="mt-8 space-y-5">

          <input
            placeholder="Full Name"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
          />

          <input
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
          />

          <button
            className="w-full bg-cyan-500 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
          >
            Register
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;