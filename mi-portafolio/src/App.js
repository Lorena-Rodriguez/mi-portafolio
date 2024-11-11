import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Projects from "./components/projects";
import Stacks from "./components/stacks";


function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Projects/>
      <Stacks/>
    </div>
  );
}

export default App;
