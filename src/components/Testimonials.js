import React from "react";
import Img1 from "../images/portfolio-2020.png"

function Home() {
  return (
    <section className="container window-card"> 
      <div className="testimonials" id="testimonials">
          <h2 className="title">Testimonials</h2>
          <div className="testimonials-content">


          {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="..." alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div> */}




            <div className="card">
              <div className="card-body">
                <a className="card-person-box"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/filipedeboni/">
                  <img src={Img1} className="card-img"></img>
                  <h5 className="card-title">Marcelo Castro</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Technology Specialist</h6>
                </a>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>




            <div className="card">
              <div className="card-body">
                <a className="card-person-box"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/filipedeboni/">
                  <img src={Img1} className="card-img"></img>
                  <h5 className="card-title">Marcelo Castro</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Technology Specialist</h6>
                </a>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}

export default Home;