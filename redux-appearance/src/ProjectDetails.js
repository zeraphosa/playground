import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { projectName } = useParams();
  return (
    <div>
      <h1>{projectName}</h1>
      <p>This is the details page for {projectName}.</p>
    </div>
  );
}
