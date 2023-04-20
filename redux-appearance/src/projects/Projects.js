import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([{ name: "deneme" }, { name: "adad" }]);

  function handleChange(e) {
    setProjectName(e.target.value);
  }

  function handleAddProject() {
    const newProject = { name: projectName };
    setProjects([...projects, newProject]);
    setProjectName("");
  }

  return (
    <div>
      <h1>Create new Project</h1>
      <input type="text" placeholder="Enter new project name" value={projectName} onChange={handleChange} />
      <button onClick={handleAddProject}>Add project</button>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <Link to={`/projects/${project.name}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
