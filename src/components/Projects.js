import React from "react";
import { Link } from "react-router-dom";
import ImgProject4 from "../images/netflix.png"
import ImgProject3 from "../images/portfolio-2020.png"
import ImgProject2 from "../images/pet-friendly.png"
import ImgProject1 from "../images/clover.png"

function Home() {
  return (
    <section className="window-card">
    <div className="container">
      <div className="projects" id="projects">    
        <h2 className="title white">Projects</h2>
        <div className="projects-content">
   
      
              {/* <div className="project-card">
                <Link to="/netflix" >
                  <img src={ImgProject1} className="box-4"></img>
                </Link>
                <div className="project-info">
                  <div className="project-title">Title</div>
                  <div className="project-description">description</div>
                  <div className="project-tags">Tags</div>
                </div>
              </div> */}

              {/* Project 4 */}
              <div className="project-card col-xs-12 col-sm-11 col-lg-9 col-xl-7" data-toggle="modal" data-target="#exampleModalCenter">
                <img src={ImgProject4} className="project-img"></img>
                <div className="project-info">
                  <div className="project-info-text">
                    <div className="project-title">Netflix</div>
                    <div className="project-description d-lg-block">
                      <p>The Netflix mainpage clone that I developed to practice Front-End Skills.
                      It was very fun to work with that, mostly with the list scroll feature and the API from TheMovieDB.com, 
                      that has movies from all studios.
                      </p>
                    </div>
                    <div className="project-tags" style={{ color:"gray"}}>
                      Tags: React, JavaScript, API, responsivity.
                    </div>
                  </div>

                  <div className="project-info-btns">
                    <a type="button"  target="_blank"
                      rel="noopener noreferrer"
                      href="https://filipedeboni-netflix-react.herokuapp.com/"
                      class="btn btn-secondary"
                      >Website
                    </a>
                    <a type="button"  target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/FilipeDeboni/netflix-react"
                      class="btn btn-secondary"
                      >GitHub
                    </a>
                  </div>
                </div>
              </div>

                {/* <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        ...
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div> */}
               
              {/* Project 3 */}
              <div className="project-card col-xs-12 col-sm-11 col-lg-9 col-xl-7" data-toggle="modal" data-target="#exampleModalCenter">
                <img src={ImgProject3} className="project-img"></img>
                <div className="project-info">
                  <div className="project-info-text">
                    <div className="project-title">Portfolio 2020</div>
                    <div className="project-description d-lg-block">
                      <p>I developed an old version of my Portfolio in 2019/2020 to gather my projects in a more visual way. 
                      Much of that design I did in an experimental way to practice technical skills.</p>
                    </div>
                    <div className="project-tags" style={{ color:"gray"}}>
                      Tags: React, JavaScript, API, Single Page Application (SPA), responsivity.
                    </div>
                  </div>

                  <div className="project-info-btns">
                    <a type="button"  target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/FilipeDeboni/filipe-portfolio"
                      class="btn btn-secondary"
                      >GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card col-xs-12 col-sm-11 col-lg-9 col-xl-7" data-toggle="modal" data-target="#exampleModalCenter">
                <img src={ImgProject2} className="project-img"></img>
                <div className="project-info">
                  <div className="project-info-text">
                    <div className="project-title">Pet Friend.ly</div>
                    <div className="project-description d-lg-block">
                      <p>Social network with a specific feature for pet adoption developed in just one week during my 2019's Bootcamp.
                      It was developed in a team of two and I was responsible for the Front-End.</p>
                    </div>
                    <div className="project-tags" style={{ color:"gray"}}>
                      Tags: React, JavaScript, Bootstrap, MongoDB, responsivity.
                    </div>                  
                  </div>

                  <div className="project-info-btns">
                    <a type="button"  target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/FilipeDeboni/ironhack-project-3-petfriendly-front"
                      class="btn btn-secondary"
                      >GitHub
                    </a>                  
                  </div>
                </div>
              </div>

              {/* Project 1 */}
              <div className="project-card col-xs-12 col-sm-11 col-lg-9 col-xl-7" data-toggle="modal" data-target="#exampleModalCenter">
                <img src={ImgProject1} className="project-img"></img>
                <div className="project-info">
                  <div className="project-info-text">
                    <div className="project-title">Clover: Personal Budget</div>
                    <div className="project-description d-lg-block">
                      <p>Personal finance control website using the 50/30/20 budget rule and customizable categories.
                      It was developed in a team of two and I was responsible for the Front-End.</p>
                    </div>
                    <div className="project-tags" style={{ color:"gray"}}>
                      Tags: JavaScript, Bootstrap, Handlebars, MongoDB, responsivity.
                    </div>                  
                  </div>

                  <div className="project-info-btns">
                    <a type="button"  target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/FilipeDeboni/Ironhack-Project-2-Clover-Finance/tree/filipe"
                      class="btn btn-secondary"
                      >GitHub
                    </a>                  
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
    
  </section>
  );
}

export default Home;