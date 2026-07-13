const ProjectCard = ({ project, featured = false }) => {

    if (!project) return null;
  return (
    <div
      className={`group overflow-hidden rounded-[30px] border border-[#d29f22]/20 bg-[#252628]/45 backdrop-blur-xl transition-all duration-300 hover:border-[#d29f22]/50 ${
        featured
  ? "grid grid-cols-1 lg:grid-cols-2"
  : ""
      }`}
    >
      {/* Project Image */}
                <div
            className={`relative overflow-hidden ${
                featured
                  ? "h-[220px] sm:h-[260px] lg:h-[280px]"
                  : "h-[180px]"
            } bg-gradient-to-br from-[#1f2022] to-[#2b2d31]`}
            >

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#d29f22]/10 blur-3xl" />

            {/* Decorative Lines */}
            <div className="absolute left-8 top-8 h-px w-24 bg-[#d29f22]/40" />
            <div className="absolute right-8 bottom-8 h-px w-20 bg-[#d29f22]/40" />

            <div className="absolute left-8 top-8 h-20 w-px bg-[#d29f22]/40" />
            <div className="absolute right-8 bottom-8 h-20 w-px bg-[#d29f22]/40" />

            {/* Project Title */}
            <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d29f22]">
                PROJECT
                </p>

                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                {project.title}
                </h3>
            </div>

            </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6">

        <div>

          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#d29f22]">
            {project.category}
          </p>

          <h3 className="text-3xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-4 leading-7 text-gray-400">
            {project.description}
          </p>

          {/* Tech Stack */}

          <div className="mt-6 flex flex-wrap gap-2">

            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#d29f22]/25 px-3 py-1.5 text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#d29f22] px-5 py-2.5 text-[#d29f22] transition hover:bg-[#d29f22] hover:text-black"
            >
                GitHub
            </a>


         
          
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;