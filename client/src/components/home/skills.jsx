import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiFastapi,
} from "react-icons/si";
import "../../styles/animations.css";

const skills = [
  {
    icon: <FaReact className="text-3xl text-cyan-400" />,
    position: "top-[8%] left-[12%]",
    delay: "1s",
    duration: "3.2s",
  },
  {
    icon: <FaNodeJs className="text-3xl text-green-500" />,
    position: "top-[12%] right-[14%]",
    delay: "2s",
    duration: "5.2s",
  },
  {
    icon: <SiExpress className="text-3xl text-white" />,
    position: "top-[36%] left-[20%]",
    delay: "3s",
    duration: "6.2s",
  },
  {
    icon: <SiMongodb className="text-3xl text-green-500" />,
    position: "top-[34%] right-[18%]",
    delay: "2s",
    duration: "2.2s",
  },
  {
    icon: <SiJavascript className="text-3xl text-yellow-400" />,
    position: "top-[62%] left-[10%]",
    delay: "6s",
    duration: "4.2s",
  },
  {
    icon: <FaPython className="text-3xl text-blue-400" />,
    position: "top-[68%] left-[42%]",
    delay: "1s",
    duration: "5.2s",
  },
  {
    icon: <SiTailwindcss className="text-3xl text-cyan-400" />,
    position: "top-[60%] right-[12%]",
    delay: "0s",
    duration: "6.2s",
  },
  {
    icon: <SiFastapi className="text-3xl text-emerald-400" />,
    position: "bottom-[10%] left-[24%]",
    delay: "0s",
    duration: "4.2s",
  },
  {
    icon: <FaGitAlt className="text-3xl text-orange-500" />,
    position: "bottom-[10%] right-[22%]",
    delay: "0s",
    duration: "4.2s",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-7xl px-10 lg:px-16">
        <div className="ml-32 lg:ml-40 grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d29f22]">
              Skills
            </p>
            <h2 className="text-5xl font-bold text-white">
              Technologies
              <br />
              I work with.
            </h2>
            <div className="h-[2px] w-24 rounded-full bg-[#d29f22]" />
            <p className="text-lg leading-9 text-gray-400">
              A collection of technologies I use to build
              scalable, modern and reliable applications.
            </p>
          </div>

          {/* Right */}
          <div className="relative h-[520px] overflow-hidden rounded-[36px] border border-[#d29f22]/20 bg-[#252628]/45 backdrop-blur-xl">
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d29f22]/5 blur-[120px]" />

            {/* Decorative Lines */}
            <div className="absolute left-8 top-8 h-px w-24 bg-[#d29f22]/30" />
            <div className="absolute right-8 bottom-8 h-px w-24 bg-[#d29f22]/30" />
            <div className="absolute left-8 top-8 h-24 w-px bg-[#d29f22]/30" />
            <div className="absolute bottom-8 right-8 h-24 w-px bg-[#d29f22]/30" />

            {/* Skill Bubbles */}
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`absolute ${skill.position} float
                flex h-16 w-16 items-center justify-center
                rounded-full border border-[#d29f22]/25
                bg-[#19171b]/70
                shadow-lg
                backdrop-blur-xl
                transition-all duration-300
                hover:scale-110`}
              >
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;