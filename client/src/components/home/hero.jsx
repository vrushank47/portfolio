import HeroImage from "./heroimage";
import vrushankPhoto from "../../assets/images/vrushank.jpeg";


const Hero = () => {
return (
<section id="home" className="min-h-screen flex items-center">
<div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-16">
<div className="ml-0 lg:ml-40">
<div className="grid items-center gap-10 lg:gap-20 lg:grid-cols-2">
{/* Left Content */}
<div className="text-center lg:text-left">
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
<h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-none text-white">
                    FULL STACK
</h1>
<h1 className="mt-3 text-4xl sm:text-5xl lg:text-8xl font-bold leading-none text-[#d29f22]">
                    DEVELOPER
</h1>
</div>

{/* Decorative Line */}
<div className="mx-auto lg:mx-0 h-[2px] w-32 rounded-full bg-[#d29f22]" />

{/* Description */}
<p className="mx-auto lg:mx-0 max-w-xl text-base sm:text-lg leading-7 sm:leading-9 text-gray-400">
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