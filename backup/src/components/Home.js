import { Parallax, ParallaxLayer } from "@react-spring/parallax";
//import Projects from "./Projects";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import InfoList from "./InfoList";

// aboutMe, header, text
function Home() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch("https://mocki.io/v1/c2998deb-3d64-4c28-9c26-3f8a7e8669d6")
      .then((response) => {
        if (!response.ok) {
          throw new Error("ERROR");
        }
        return response.json();
      })
      .then((data) => {
        const omMigData = data.omMig;

        console.log(omMigData);
        setInfo(omMigData);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  // https://www.react-spring.dev/docs/components/parallax
  return (
    <Parallax pages={3.3}>
      {/* Parallax-layer 1. */}
      <ParallaxLayer
        className="parallax bg-img-hero"
        alt="moon"
        offset={0}
        speed={1}
        factor={1}
      >
        <div className="hero-section-home">
          {/*<Navbar /> */}
          <h2>HERO-SECTION-HOME</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            fugiat ut veritatis totam doloribus sed commodi illo corrupti
            aperiam eos unde, quas doloremque at officiis quod explicabo non
            vero? Consequatur?
          </p>
        </div>
      </ParallaxLayer>
      {/* Parallax-layer 2. */}
      <ParallaxLayer
        className="parallax"
        offset={1}
        speed={0.5}
        factor={1}
      ></ParallaxLayer>
      {/* Parallax-layer 3. */}
      <ParallaxLayer
        className="hero-text-para"
        offset={0.5}
        speed={0.5}
        factor={0.5}
      >
        {/* HEADER HERO-TOP */}
        <h1>VÄLKOMMEN!</h1>
      </ParallaxLayer>
      {/* Parallax-layer 4. */}
      <ParallaxLayer offset={1} speed={0.5}></ParallaxLayer>
      {/* Parallax-layer 5. */}
      <ParallaxLayer offset={1.1}>
        <main className="main-section-home main-bg-img">
          {/* HEADER MAIN-HOME. */}
          <h1>Om mig och min resa</h1>
          {info && <InfoList info={info} />}
        </main>
      </ParallaxLayer>
      {/* Parallax-layer 6. FOOTER IMAGE */}
      <ParallaxLayer
        className="bg-img-two"
        offset={2.5}
        speed={0.5}
        factor={1}
      ></ParallaxLayer>
      {/* Parallax-layer 7. */}
      <ParallaxLayer offset={2.4} speed={0}>
        {/* HEADER END-HOME. */}
        <h1>SLUT</h1>
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}

export default Home;
