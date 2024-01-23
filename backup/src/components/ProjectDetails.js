import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function ProjectDetails() {
  // useParams-hook för att hämta parameter från url
  // Destructure - för att använda och skriva ut
  const { project } = useParams();

  return (
    <div className="project-details">
        <Navbar/>
      <h1>Project Details {project}</h1>
    </div>
  );
}

export default ProjectDetails;
