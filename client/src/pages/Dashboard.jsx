import { useEffect, useState } from "react";
import { getProjects } from "../api/projectApi";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#111214] p-10 text-white">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-10 text-5xl font-bold text-[#d29f22]">
          Dashboard
        </h1>

        <div className="rounded-3xl border border-[#d29f22]/20 bg-[#252628]/40 p-8 backdrop-blur-xl">

          <div className="mb-8 flex items-center justify-between">

            <h2 className="text-2xl font-semibold">
              Projects
            </h2>

            <button className="rounded-xl bg-[#d29f22] px-5 py-3 font-semibold text-black">
              + Add Project
            </button>

          </div>

          {projects.map((project) => (

            <div
              key={project._id}
              className="mb-4 flex items-center justify-between rounded-2xl border border-[#d29f22]/15 p-5"
            >

              <div>

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400">
                  {project.category}
                </p>

              </div>

              <div className="flex gap-3">

                <button className="rounded-lg border border-[#d29f22] px-4 py-2">
                  Edit
                </button>

                <button className="rounded-lg bg-red-600 px-4 py-2">
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;