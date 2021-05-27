import React from "react";
import Navbar from "./Navbar";
import HomeImg from "../images/home.svg"

function Home() {
  return (
    <div>
    <Navbar />
    <section className="home" id="home">
        <div className="container">
          <div className="home-content">
            <div className="home-text">
              <div className="text-1">Hello, my name is</div>
              <div className="text-2">Filipe Deboni</div>
              <div className="text-3">and I'm a <span class="typing">Full Stack Developer</span> </div>
            </div>
            <div className="img-box">
            <div className="home-img"></div>
            </div>
          </div>
        </div>
    </section>
    </div>

  );
}

export default Home;