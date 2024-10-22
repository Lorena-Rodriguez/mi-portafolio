import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Projects from "./components/projects";


function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Projects/>
    </div>
  );
}

export default App;
