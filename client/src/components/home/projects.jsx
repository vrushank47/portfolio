import ProjectCard from "./projectcard";
import { useEffect, useState } from "react";
import { getProjects } from "../../api/projectApi";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
      
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  fetchProjects();
}, []);
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-16">

        <div className="lg:ml-40">

          {/* Heading */}

          <div className="mb-12 lg:mb-20">

            <p className="text-sm uppercase tracking-[0.35em] text-[#d29f22]">
              Projects
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Featured Work
            </h2>

            <div className="mt-6 h-[2px] w-24 bg-[#d29f22]" />

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
              A selection of projects demonstrating backend development,
              scalable architecture and modern web technologies.
            </p>

          </div>

          {/* Featured */}

          {projects.length > 0 && (
  <ProjectCard
    project={projects[0]}
    featured
  />
)}

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