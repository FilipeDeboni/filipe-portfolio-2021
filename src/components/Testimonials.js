import React from "react";
import Rafael from "../images/testimonials/RafaelOlini.jpeg"
import Marcelo from "../images/testimonials/MarceloCastro.jpeg"
import Leticia from "../images/testimonials/LetíciaFerracin.jpeg"
import Sylvio from "../images/testimonials/SylvioCamargo.jpeg"

function Home() {
  return (
    <section className="container window-card"> 
      <div className="testimonials" id="testimonials">
        <h2 className="title">Testimonials</h2>
        <div className="testimonials-content">
          <div className="row">
            <div className="col-12">

              <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">

                    {/* Card 3: Rafael Olini */}
                    <div className="col-md-11 col-lg-5">
                        <div className="single-box">
                          <div className="card-img-box">
                            <img src={Rafael} alt="Rafael Olini" className="card-img"></img>
                          </div>
                          <a className="card-name-box"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/rafaelolinimaciel/">
                            <h5 className="card-title">Rafael Olini</h5>
                            <i className="fab fa-linkedin"></i>
                          </a>
                          <h6 className="card-subtitle mb-2 text-muted">Portfolio & Planning Manager at Essilor</h6>
                          <h6 className="card-subtitle mb-4 text-muted">(Immediate Superior for 3 years)</h6>
                          <p className="card-text mb-3">"I've worked for several years with Filipe and he has a very good background in strategic planning and his ownership is very striking and an always present skill in his work. In fact, he was my right hand in all the initiatives that we had to do in our former company. When I think of him, the three words that come to my mind are committed, loyal and flexible."</p>
                        </div>
                      </div>

                      {/* Card 3: Marcelo de Castro */}
                      <div className="col-md-11 col-lg-5">
                        <div className="single-box">
                          <div className="card-img-box">
                            <img src={Marcelo} alt="Marcelo de Castro" className="card-img"></img>
                          </div>
                          <a className="card-name-box"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/macastr/">
                            <h5 className="card-title">Marcelo de Castro</h5>
                            <i className="fab fa-linkedin"></i>
                          </a>
                          <h6 className="card-subtitle mb-2 text-muted">Product and Innovation Manager at Pearson</h6>
                          <h6 className="card-subtitle mb-4 text-muted">(worked on the same team for 3,5 years)</h6>
                          <p className="card-text mb-3">"He was the guy to organize and control, things that he is really good at, besides that at the time he studied UX, Programming and is a Psychologist. The guy is awesome and will bring a lot of value to the team wherever he works, he really focuses on the client and understands how he interacts with the services. He is very engaged, responsible and trustworthy."</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">

                      {/* Card 3: Letícia Ferracin */}
                      <div className="col-md-11 col-lg-5">
                        <div className="single-box">
                          <div className="card-img-box">
                            <img src={Leticia} alt="Letícia Ferracin" className="card-img"></img>
                          </div>
                          <a className="card-name-box"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/leticialanzaferracin/">
                            <h5 className="card-title">Letícia Ferracin</h5>
                            <i className="fab fa-linkedin"></i>
                          </a>
                          <h6 className="card-subtitle mb-2 text-muted">Technology Manager at CI&T</h6>
                          <h6 className="card-subtitle mb-4 text-muted">(worked on the same team for 3 years)</h6>
                          <p className="card-text mb-3">"Filipe is a great professional and a very engaged person with processes, creation and results. Personally, he has a very positive energy, is very kind and polite. Words that describes him is committed, critical thinking and very engaged."</p>
                        </div>
                      </div>

                      {/* Card 4: Sylvio Camargo */}
                      <div className="col-md-11 col-lg-5">
                        <div className="single-box">
                          <div className="card-img-box">
                            <img src={Sylvio} alt="Sylvio Camargo" className="card-img"></img>
                          </div>
                          <a className="card-name-box"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/camargosylvio/">
                            <h5 className="card-title">Sylvio Camargo</h5>
                            <i className="fab fa-linkedin"></i>
                          </a>
                          <h6 className="card-subtitle mb-2 text-muted">Squad Leader at CI&T</h6>
                          <h6 className="card-subtitle mb-4 text-muted">(worked on the same team for 3,5 years)</h6>
                          <p className="card-text mb-3">"A very organized professional who knows what to do, when to do and helps the team to reach the final goal, even if it requires something other than their role. He will help you with everything you need, you can go to him that he knows everything and saves you. I would describe him as organized, focused and trustworthy."</p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                  <span className="fas fa-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                  <span className="fas fa-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;