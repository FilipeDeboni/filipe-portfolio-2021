import React from "react";
import Navbar from "./Navbar";
// import "./Home.css";

function Home() {
  return (
    <div className="">
      <Navbar />
      <section class="home" id="home">
        <div class="max-width">
          <div class="home-content">
            <div class="text-1">Hello, my name is</div>
            <div class="text-2">Filipe Deboni</div>
            <div class="text-3">and I'm a <span class="typing"></span> </div>
          </div>
        </div>
    </section>
    </div>
  );
}

export default Home;