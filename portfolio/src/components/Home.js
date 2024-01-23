import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState, useRef } from "react";
import "../styles/Home.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Info from "./Info";
import Carousel from "./Carousel";

import img1 from "../img/ben-griffiths-4wxWBy8Jo1I-unsplash.jpg";
import img2 from "../img/souvik-banerjee--WPrNEM_6dg-unsplash.jpg";
import img3 from "../img/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//
function Home() {
  // https://www.react-spring.dev/docs/components/parallax
  // useRef hook för parallax scrollTo.
  const parallaxRef = useRef();

  // state för APi-data - default null.
  const [info, setInfo] = useState(null);

  // state för API-data Projekt
  const [projectData, setProjectData] = useState(null);

  //const [projectsData, setProjectsData] = useState(null);

  /*
  const handleProjectData = (data) => {
    setProjectsData(data);
    console.log("Data från Projects:", data);
    console.log(data);
  }*/

  useEffect(() => {
    // async-funktion
    const fetchData = async () => {
      try {
        // fetch URL, och inväntar svar.
        const response = await fetch(
          "https://mocki.io/v1/3dd13742-deb9-4e84-8811-99f5988a9692"
        );
        console.log(response.ok);

        // Om svar inte är ok(false) - throw error
        if (!response.ok) {
          throw Error("ERROR");
        }
        // annars omvandla response till JSON och lagra som data.
        const data = await response.json();
        // uppdatera state med omMig-data.
        const omMigJSON = data.omMig;
        const projektJSON = data.projekt;

        console.log(omMigJSON);
        // setInfo till updaterat state.
        setInfo(omMigJSON);
        // setProjectData uppdatera med data.
        setProjectData(projektJSON);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    // Anropa fetch-funktionen.
    fetchData();
  }, []);

  // https://www.react-spring.dev/docs/components/parallax

  return (
    <Parallax className="parallax-container" pages={4} ref={parallaxRef}>
      {/* Parallax-layer 1. */}
      <ParallaxLayer
        title="hero-img"
        className="parallax bg-img-hero"
        offset={0}
      >
        <Navbar />
        <div className="hero-section-home">
          <h1 className="hero-title">Välkommen</h1>
          <p className="hero-text">Det här är min enkla Portfolio.</p>
        </div>
      </ParallaxLayer>
      {/* Parallax-layer 2. */}
      <ParallaxLayer className="parallax" offset={1} />

      {/* Parallax-layer 3. */}
      <ParallaxLayer
        className="hero-text-para"
        offset={0.48}
        speed={0.5}
        style={{}}
      >
        {/* HEADER HERO-TOP */}
        <h1 className="hero-header">Om mig</h1>
      </ParallaxLayer>

      {/* Parallax-layer 4. */}
      <ParallaxLayer
        className="scroll-div-top parallax"
        offset={0.55}
        speed={0.3}
        onClick={() => parallaxRef.current.scrollTo(1.1)}
        style={{
          height: "30px",
        }}
      >
        {/* FONT ICON  */}
        <i>
          <FontAwesomeIcon icon="fa-chevron-down" />
        </i>
      </ParallaxLayer>

      {/* Parallax-layer 5. */}
      <ParallaxLayer
        className="bg-img-balls parallax"
        offset={1.3}
        speed={1.5}
      ></ParallaxLayer>

      {/* Parallax-layer 6. */}
      <ParallaxLayer className="parallax" offset={1.15} speed={0.3}>
        {/* HEADER MAIN-HOME. */}
        <h1 className="main-header">Om mig och min resa</h1>
      </ParallaxLayer>

      {/* Parallax-layer 7. */}
      <ParallaxLayer offset={1.2} speed={0.5}>
        <main className="main-section-home parallax">
          {/* infoList - skicka props 
          <Projects projectsData={handleProjectData}/>*/}
          {info && <Info info={info} />}
          {/* renderar carousel-komponent och skickar props */}
          <Carousel images={[img1, img2, img3]} projects={projectData} />
        </main>
      </ParallaxLayer>

      {/* Parallax-layer 8. */}
      <ParallaxLayer
        className="scroll-div-bottom parallax"
        offset={3.81}
        speed={0.7}
        onClick={() => parallaxRef.current.scrollTo(0)}
        style={{
          zIndex: 1,
          height: "40px",
        }}
      >
        {/* HEADER END-HOME. */}
        <i>
          <FontAwesomeIcon className="icon-up" icon="fa-chevron-up" />
        </i>
      </ParallaxLayer>

      {/* Parallax-layer 9. */}
      <ParallaxLayer className="parallax" offset={3.05} speed={0.5}>
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}

export default Home;
