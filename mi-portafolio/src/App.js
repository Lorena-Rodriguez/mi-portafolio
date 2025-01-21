import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Projects from "./components/projects";
import Stacks from "./components/stacks";
import Experience from "./components/experience";
import Education from "./components/education";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Stacks />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
