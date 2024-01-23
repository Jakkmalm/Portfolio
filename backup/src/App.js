import "./App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Navbar from "./components/Navbar";


// https://www.react-spring.dev/docs/components/parallax
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:project" element={<ProjectDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
