import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";

// https://www.react-spring.dev/docs/components/parallax
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:project" element={<ProjectDetails />}></Route>

        {/* SÅ LÄNGE, REROUTE om fel url */}
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
