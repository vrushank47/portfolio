import HeroImage from "./heroimage";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-7xl px-10 lg:px-16">
        <div className="ml-32 lg:ml-40">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <div className="space-y-8">
                {/* Availability Badge */}
                <div className="inline-flex items-center gap-3 rounded-full border border-[#d29f22]/40 bg-[#252628]/60 px-5 py-2 backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-[#d29f22]"></span>
                  <span className="text-sm tracking-[0.2em] uppercase text-gray-300">
                    Available for Internships
                  </span>
                </div>

                {/* Heading */}
                <div>
                  <h1 className="text-6xl font-bold leading-none text-white lg:text-8xl">
                    FULL STACK
                  </h1>
                  <h1 className="mt-3 text-6xl font-bold leading-none text-[#d29f22] lg:text-8xl">
                    DEVELOPER
                  </h1>
                </div>

                {/* Decorative Line */}
                <div className="h-[2px] w-32 rounded-full bg-[#d29f22]" />

                {/* Description */}
                <p className="max-w-xl text-lg leading-9 text-gray-400">
                  I build scalable web applications with clean architecture,
                  modern technologies and thoughtful user experiences.
                  Passionate about creating software that's both beautiful
                  and reliable.
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;