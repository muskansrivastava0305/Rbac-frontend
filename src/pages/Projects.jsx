import { useEffect, useState } from "react";
import API from "../api";
import {
  canCreateProject,
  canEditProject,
  canDeleteProject,
} from "../utils/permissions";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const role = localStorage.getItem("role");

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    await API.delete(`/projects/${id}`);
    fetchProjects();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      {/* ➕ CREATE */}
      {canCreateProject(role) && (
        <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">
          + Create Project
        </button>
      )}

      {/* 📋 LIST */}
      <div className="grid gap-4">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white p-4 shadow rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.description}</p>
            </div>

            {/* ⚙ ACTIONS */}
            <div className="flex gap-2">
              {canEditProject(role) && (
                <button className="px-3 py-1 bg-yellow-500 text-white rounded">
                  Edit
                </button>
              )}

              {canDeleteProject(role) && (
                <button
                  onClick={() => handleDelete(project._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
