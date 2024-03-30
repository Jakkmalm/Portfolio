import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Projects.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import data from "../jsonData/data.json";

function Projects() {
  // states för project och project som visas
  const [projects, setProjects] = useState(data.projekt);

  const [projectDisplayed, setProjectDesplayed] = useState(null);

  /*
  useEffect(() => {
    // async-funktion
    const fetchData = async () => {
      try {
        // fetch URL, och inväntar svar.
        const response = await fetch(
          "https://mocki.io/v1/3dd13742-deb9-4e84-8811-99f5988a9692"
        );

        // Om svar inte är ok - throw error
        if (!response.ok) {
          throw Error("ERROR");
        }
        // annars omvandla response till JSON och lagra som data.
        const data = await response.json();
        // uppdatera state med projekt-data.
        const projectData = data.projekt;

        console.log(projectData);
        // setProjects till updaterat state (projectData).
        setProjects(projectData);
        // skicka data till home.js;
      } catch (error) {
        console.error("Error fetching", error);
      }
    };
    // Anropa fetch-funktionen.
    fetchData();
  }, []);
  */
  const handleProjectClick = (project) => {
    setProjectDesplayed(project);
  };

  return (
    <div className="project-component">
      <Navbar />
      <div>
        <h1 className="project-title">Mina projekt</h1>
      </div>
      <div className="project-container">
        {projects &&
          // mapar igenom projects
          projects.map((projects) => (
            <div
              className={`projects ${
                // ändrar css klass beroende på om projectDisplayed === projects annars tom.
                projectDisplayed === projects ? "active" : ""
              }`}
              key={projects.id}
            >
              {" "}
              {/* kör funktion vid klick */}
              <h2 onClick={() => handleProjectClick(projects)}>
                {projects.projektNamn}
              </h2>
              {projectDisplayed === projects && (
                <>
                  <p>{projects.beskrivning}</p>
                  <button>
                    <a target="_blank" href={projects.url}>
                      Länk
                      <i
                        className="fa-ex-link"
                        target="_blank"
                        href={projects.url}
                      >
                        <FontAwesomeIcon icon="fa-external-link" />
                      </i>
                    </a>
                  </button>
                </>
              )}
            </div>
          ))}
      </div>
      <Footer style={{}} />
    </div>
  );
}

export default Projects;
