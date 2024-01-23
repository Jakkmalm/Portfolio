import "../styles/Carousel.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


// Destrucutre props-objektet - images, projects
function Carousel({ images, projects }) {
  // Skapa states för carouselIndex och carouselProject
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselProject, setCarouselProject] = useState(null);

  /*
  const handleSentData = (data) => {
    console.log(data)
  };*/

  console.log("Data från home.js ", projects);

  // hook - kollar om projekt finns.
  // därefter setCarouselProject till det projekt (ur project array) som har position carouselIndex - för att rätt projekt ska få rätt bild
  useEffect(() => {
    if (projects && projects.length > 0) {
      setCarouselProject(projects[carouselIndex]);
    }
  }, [carouselIndex, projects]);


  // funktion för att bläddra bild från images array.
  // använder carouselIndex och ökar med 1 - max images.length.
  const nextImg = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // använder carouselIndex och minskar med 1 - max images.length.
  const prevImg = () => {
    setCarouselIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-component">
      <FontAwesomeIcon
        onClick={prevImg}
        icon="fa-chevron-left"
        className="svg-left"
      ></FontAwesomeIcon>
      <div className="carousel-slider">
        <div className="carousel-content">
          <img
            alt="carousel-img"
            className="carousel-img"
            src={images[carouselIndex]} // Visa bild från image.array utifrån aktuellt carouselIndex
          ></img>
          <div className="carousel-text">
            {/* kollar att carouselProject "finns" för att sedan skriva ut från projektdata */ }
            <h1>{carouselProject && carouselProject.projektNamn}</h1> 
            <p>{carouselProject && carouselProject.beskrivning}</p>

            <Link to="/projects">
              <button>Läs mer</button>
            </Link>
          </div>
        </div>
      </div>
      <FontAwesomeIcon
        onClick={nextImg}
        icon="fa-chevron-right"
        className="svg-right"
      ></FontAwesomeIcon>
    </div>
  );
}

export default Carousel;
