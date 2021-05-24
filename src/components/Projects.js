import React from "react";
import { Link } from "react-router-dom";
import ImgProject1 from "../images/netflix.png"

function Home() {
  return (
    <section className="window-card">
    <div className="container">
      <div className="projects" id="projects">    
        <h2 className="title white">Projects</h2>
        <div className="projects-content">
   
      
              <div className="project-card">
                <Link to="/netflix" >
                  <img src={ImgProject1} className="box-4"></img>
                </Link>
                
                <div className="project-info">
                  <div className="project-title">Title</div>
                  <div className="project-description">description</div>
                  <div className="project-tags">Tags</div>
                </div>
              </div>

                




              <Link to="/portfolio2020" className="box-3"></Link>
              <Link to="/petfriendly" className="box-2"></Link>
              <Link to="/clover" className="box-1"></Link>
 


        </div>
      </div>
    </div>
    
  </section>
  );
}

export default Home;