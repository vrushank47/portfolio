import ProjectCard from "./projectcard";

const projects = [
  {
    title: "DevMatch v2",
    category: "Featured Project",

    description:
      "A backend-first developer networking platform built with FastAPI. Features secure JWT authentication, developer profile management, skill-based search, MongoDB integration and a clean REST API following scalable project architecture.",

    tech: [
      "FastAPI",
      "Python",
      "MongoDB",
      "JWT",
      "Bcrypt",
      "REST API",
    ],

    github: "https://github.com/vrushank47/devmatchv2",
    demo: "",
  },

  {
    title: "Meal Finder",

    category: "Frontend Project",

    description:
      "A responsive React application that helps users discover meals through an external API. Users can search recipes, explore meal details and enjoy a clean, modern interface built with reusable components.",

    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
    ],

    github: "https://github.com/vrushank47/meal-finder",
    demo: "",
  },

  {
    title: "Random Password Generator",

    category: "Utility",

    description:
      "A lightweight password generator capable of creating strong and random passwords with a simple, user-friendly interface. Built as a utility project to practice JavaScript fundamentals.",

    tech: [
      "Python",

    ],

    github: "https://github.com/vrushank47/random-password-generator",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-10 lg:px-16">

        <div className="ml-32 lg:ml-40">

          {/* Heading */}

          <div className="mb-20">

            <p className="text-sm uppercase tracking-[0.35em] text-[#d29f22]">
              Projects
            </p>

            <h2 className="mt-4 text-5xl font-bold text-white">
              Featured Work
            </h2>

            <div className="mt-6 h-[2px] w-24 bg-[#d29f22]" />

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              A selection of projects demonstrating backend development,
              scalable architecture and modern web technologies.
            </p>

          </div>

          {/* Featured */}

          <ProjectCard
            project={projects[0]}
            featured
          />

          {/* Other Projects */}

          <div className="mt-8  grid gap-6 lg:grid-cols-2">

            {projects.slice(1).map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;