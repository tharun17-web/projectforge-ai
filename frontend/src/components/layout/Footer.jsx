function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            ProjectForge
          </h2>

          <p className="text-slate-400 mt-2">
            Build the Right Project, Not Just Another Project.
          </p>
        </div>

        <p className="text-slate-500 mt-6 md:mt-0">
          © 2026 ProjectForge. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;