import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="app">

      <Sidebar setActive={setActive} active={active} />

      <div className="main">
        {active === "home" && <Home />}
        {active === "resume" && <Resume />}
        {active === "skills" && <Skills />}
        {active === "contact" && <Contact />}
        {active === "projects" && <Projects />}
      </div>

    </div>
  );
}

export default App;