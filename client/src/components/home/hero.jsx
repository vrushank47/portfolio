import profile from "../../assets/images/profile.png";
const Hero = () => {
    const techStack = [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "python",
            "FastAPI",
            "Java",
            "Django",
            ];
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">    <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-20 md:flex-row">
        
        {/* Left Side */}
        <div className="max-w-2xl">
          <p className="mb-4 text-cyan-400">
            👋 Hi, I'm Vrushank
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Full Stack <br />
            <span className="text-cyan-400">Developer</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Building modern, scalable web applications with the MERN stack,
            focusing on clean design, performance, and great user experiences.<br/>
            <a href="https://x.com/Vrushank736">twitter</a>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
             {techStack.map((tech) => (
                    <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                    {tech}
                    </span>
                ))}

          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex h-96 w-96 items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400 bg-slate-900 text-slate-400">
            
            <img src={profile} alt="Vrushank" className="h-full w-full rounded-full object-cover" />
            
            </div>
           
          </div>
        </div>

      
    </section>
  );
};

export default Hero;