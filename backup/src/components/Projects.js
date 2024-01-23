//import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Projects() {
  const [projects] = useState([
    { title: "HEJ", body: "HEJSANHEJSAn", id: 1}
  ]);
  
  useEffect(() => {
    // GET resource "projekt"
    fetch("https://mocki.io/v1/c2998deb-3d64-4c28-9c26-3f8a7e8669d6")
      .then((response) => {
        // json-svar till js-objekt
        return response.json();
      })
      .then((data) => {
        console.log(data);
        //setProjects(data);
      });
  }, []);

  return (
    <div className="project-container">
      <Navbar />
      {projects.map((project) => 
        <div className="projects" key={project.id}>
            <h1>{project.title}</h1>
        </div>
      )}
    </div>
  );
}

export default Projects;
