import React from "react";
import Navbar from "./Navbar";
// import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <Navbar />
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Filipe Deboni</div>
            <div className="text-3">and I'm a <span class="typing">Full Stack Developer</span> </div>
          </div>
        </div>
    </section>
  );
}

export default Home;