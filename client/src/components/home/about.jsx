const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center"
    >
      <div className="mx-auto w-full max-w-7xl px-10 lg:px-16">
        <div className="ml-32 lg:ml-40 grid gap-20 lg:grid-cols-[1fr_0.9fr] items-center">

          {/* Left Side */}
          <div className="space-y-8">

            <p className="text-sm uppercase tracking-[0.35em] text-[#d29f22]">
              About Me
            </p>

            <h2 className="text-5xl font-bold text-white leading-tight">
              Crafting modern web experiences with clean architecture.
            </h2>

            <div className="h-[2px] w-24 rounded-full bg-[#d29f22]" />

            <p className="text-lg leading-9 text-gray-400">
              I'm a Computer Engineering student passionate about
              building scalable web applications and backend systems.
              I enjoy turning ideas into polished digital experiences
              using the MERN stack while continuously exploring modern
              development practices.
            </p>

          </div>

          {/* Right Side */}
          <div className="space-y-6">

            <div className="rounded-[24px] border border-[#d29f22]/25 bg-[#252628]/40 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d29f22]">
                Education
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                B.E. Computer Engineering
              </h3>

              <p className="mt-2 text-gray-400">
                Final Year Student
              </p>
            </div>

            <div className="rounded-[24px] border border-[#d29f22]/25 bg-[#252628]/40 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d29f22]">
                Current Focus
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                MERN Stack Development
              </h3>

              <p className="mt-2 text-gray-400">
                React • Node.js • Express • MongoDB • FastAPI
              </p>
            </div>

            <div className="rounded-[24px] border border-[#d29f22]/25 bg-[#252628]/40 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d29f22]">
                Status
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                Open for Internships
              </h3>

              <p className="mt-2 text-gray-400">
                Looking for Backend and Full Stack opportunities.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;