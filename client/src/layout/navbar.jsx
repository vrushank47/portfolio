import { useState } from "react";
const Navbar = () => {
    const [menuOpen , setMenuOpen]=useState(false);
    return (
        
            <nav className="w-full bg-slate-950 text-slate-100 shadow-sm">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
    <a href="#home" className="text-xl font-semibold tracking-tight">
      Vrushank
    </a>

    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-medium text-slate-100 md:hidden"
      onClick={() => setMenuOpen((prev) => !prev)}
      aria-expanded={menuOpen}
      aria-label="Toggle navigation"
    >
      <span>{menuOpen ? 'Close' : 'Menu'}</span>
    </button>

    <div
      className={`absolute inset-x-0 top-full z-20 mt-2 rounded-b-2xl bg-slate-950/95 px-4 py-4 shadow-xl backdrop-blur-sm transition-transform duration-200 md:static md:mt-0 md:flex md:items-center md:bg-transparent md:px-0 md:py-0 md:shadow-none ${
        menuOpen ? 'translate-y-0' : 'hidden md:block'
      }`}
    >
      <a
        href="#home"
        className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800 md:mx-2 md:inline-block"
      >
        Home
      </a>
      <a
        href="#about"
        className="mt-2 block rounded-lg px-3 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800 md:mx-2 md:mt-0 md:inline-block"
      >
        About
      </a>
      <a
        href="#projects"
        className="mt-2 block rounded-lg px-3 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800 md:mx-2 md:mt-0 md:inline-block"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="mt-2 block rounded-lg px-3 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800 md:mx-2 md:mt-0 md:inline-block"
      >
        Contact
      </a>
      <a
        href="#resume"
        className="mt-4 inline-flex w-full justify-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:mt-0 md:ml-4 md:w-auto"
      >
        Resume
      </a>
    </div>
  </div>
</nav>

       
    )
}

export default Navbar;