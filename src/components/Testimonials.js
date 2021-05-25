import React from "react";

function Home() {
  return (
    <section className="container window-card"> 
      <div className="testimonials" id="testimonials">
          <h2 className="title">Testimonials</h2>
          <div className="testimonials-content">
          <div class="card col-sm-12 col-lg-6 col-xl-4">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
}

export default Home;