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
                    <div className="project-description d-lg-block">sdfg dgsdgfsdfg sd gsdf gsdf gsd gsdf gsdfg ergdgds rgsd sdf gsdf gdsf gsdf gsd </div>
                  </div>

                  <div className="project-info-btns">
                    <button type="button" class="btn btn-secondary">Website</button>
                  <button type="button" class="btn btn-secondary">GitHub</button>
                  </div>
                </div>
              </div>




                {/* Modal Project 4 */}
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                </div>
                




              {/* Project 3 */}
              <div className="project-card col-xs-12 col-sm-11 col-lg-9 col-xl-7" data-toggle="modal" data-target="#exampleModalCenter">
                <img src={ImgProject3} className="project-img"></img>
                <div className="project-info">
                  <div className="project-info-text">
                    <div className="project-title">Portfolio 2020</div>
                    <div className="project-description d-lg-block">sdfg dgsdgfsdfg sd gsdf gsdf gsd gsdf gsdfg ergdgds rgsd sdf gsdf gdsf gsdf gsd </div>
                  </div>

                  <div className="project-info-btns">
                    <button type="button" class="btn btn-secondary">Website</button>
                  <button type="button" class="btn btn-secondary">GitHub</button>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card col-xs-12 col-sm-11 col-lg-9 col-xl-7" data-toggle="modal" data-target="#exampleModalCenter">
                <img src={ImgProject2} className="project-img"></img>
                <div className="project-info">
                  <div className="project-info-text">
                    <div className="project-title">Pet Friend.ly</div>
                    <div className="project-description d-lg-block">sdfg dgsdgfsdfg sd gsdf gsdf gsd gsdf gsdfg ergdgds rgsd sdf gsdf gdsf gsdf gsd </div>
                  </div>

                  <div className="project-info-btns">
                    <button type="button" class="btn btn-secondary">Website</button>
                  <button type="button" class="btn btn-secondary">GitHub</button>
                  </div>
                </div>
              </div>

              {/* Project 1 */}
              <div className="project-card col-xs-12 col-sm-11 col-lg-9 col-xl-7" data-toggle="modal" data-target="#exampleModalCenter">
                <img src={ImgProject1} className="project-img"></img>
                <div className="project-info">
                  <div className="project-info-text">
                    <div className="project-title">Clover: Personal Budget</div>
                    <div className="project-description d-lg-block">sdfg dgsdgfsdfg sd gsdf gsdf gsd gsdf gsdfg ergdgds rgsd sdf gsdf gdsf gsdf gsd </div>
                  </div>

                  <div className="project-info-btns">
                    <button type="button" class="btn btn-secondary">Website</button>
                  <button type="button" class="btn btn-secondary">GitHub</button>
                  </div>
                </div>
              </div>


              {/* <Link to="/portfolio2020" className="box-3"></Link>
              <Link to="/petfriendly" className="box-2"></Link>
              <Link to="/clover" className="box-1"></Link> */}
 


        </div>
      </div>
    </div>
    
  </section>
  );
}

export default Home;