const About = () => {
  return (
     
<section className="relative min-h-screen overflow-hidden bg-slate-950 text-white"> 
   <div className="absolute inset-0 -z-10">
  <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
  <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
</div>
<div className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16">
      {/* Background Glow */}
  <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

  <div className="relative mx-auto max-w-7xl">

    <div className="flex items-center gap-3">
  <div className="h-[2px] w-12 bg-cyan-400"></div>
  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
    About Me
  </span>
</div>

    <h2 className="mt-4 text-5xl font-bold">
      Passionate About Building
      <span className="text-cyan-400"> Modern Web Experiences.</span>
    </h2>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
      I'm a Full Stack Developer passionate about building clean,
      scalable, and user-focused web applications. I enjoy transforming
      ideas into real products while continuously improving my skills in
      modern web development.
    </p>

    <div className="mt-16 grid gap-10 lg:grid-cols-2">

      {/* Left */}
      <div className="space-y-6 text-lg leading-7 text-slate-300">

        <p>
          I primarily work with the MERN stack and enjoy creating
          responsive applications with a strong focus on performance,
          maintainability, and user experience.
        </p>

        <p>
          Currently, I'm pursuing my B.E. while building real-world
          projects, solving DSA problems, and documenting my learning
          journey through GitHub and X.
        </p>

        <p>
          Every project I build is an opportunity to learn something new
          and improve as a developer.
        </p>

      </div>

      {/* Right */}
      <div className="grid grid-cols-2 gap-6">

        <div className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/70
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                ">
          <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
          <p className="mt-3 text-slate-400">Projects Built</p>
        </div>

        <div className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/70
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                ">
          <h3 className="text-4xl font-bold text-cyan-400">MERN</h3>
          <p className="mt-3 text-slate-400">Primary Stack</p>
        </div>

        <div className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/70
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                ">
          <h3 className="text-4xl font-bold text-cyan-400">DSA</h3>
          <p className="mt-3 text-slate-400">Problem Solving</p>
        </div>

        <div className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900/70
                  p-8
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                  ">
          <h3 className="text-4xl font-bold text-cyan-400">2027</h3>
          <p className="mt-3 text-slate-400">Graduating</p>
        </div>

      </div>

    </div>

  </div>
  </div>

</section>
    
  );
};

export default About;