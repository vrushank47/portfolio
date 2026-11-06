import HeroImage from "./heroimage";

const Hero = () => {
  return (
    <section id="home" className="flex min-h-screen items-center py-16 lg:py-8">
      <div className="mx-auto w-full max-w-[1480px] px-6 sm:px-8 lg:pl-60 lg:pr-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-5">
          {/* Left Content — container query so the headline always fits its column */}
          <div className="text-center [container-type:inline-size] lg:text-left">
            <div className="space-y-8">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-[#d29f22]/40 bg-[#1b1a20]/70 px-5 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#d29f22] shadow-[0_0_10px_rgba(210,159,34,0.8)]"></span>
                <span className="text-[13px] uppercase tracking-[0.22em] text-gray-200 sm:text-[15px]">
                  Available for Internships
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-bold uppercase leading-[0.95] text-[min(13cqw,4.5rem)] lg:text-[min(17cqw,7rem)]">
                <span className="text-white">Full</span>{" "}
                <span className="text-white lg:block">Stack</span>{" "}
                <span className="block text-[#d29f22] lg:mt-[0.12em]">Developer</span>
              </h1>

              {/* Decorative Line */}
              <div className="mx-auto h-[2px] w-36 rounded-full bg-[#d29f22] shadow-[0_0_12px_rgba(210,159,34,0.5)] lg:mx-0" />

              {/* Description */}
              <p className="mx-auto max-w-[31rem] text-base font-light leading-8 text-gray-400 sm:text-lg lg:mx-0 lg:text-xl lg:leading-[1.95]">
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
    </section>
  );
};

export default Hero;