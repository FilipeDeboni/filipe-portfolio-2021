import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="window-card">
    <div className="projects" id="projects">
      <div className="max-width">
        <h2 className="title white">Projects</h2>
        <div className="projects-content">
          <div className="carousel white">
    
            <Link to="/netflix" className="box-4"></Link>
            <Link to="/portfolio2020" className="box-3"></Link>
            <Link to="/petfriendly" className="box-2"></Link>
            <Link to="/clover" className="box-1"></Link>

          </div>
        </div>
      </div>
    </div>
    
  </section>
  );
}

export default Home;