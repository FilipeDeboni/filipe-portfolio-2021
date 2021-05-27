import React from "react";

function Home() {
  return (
    <section className="container window">
      <div className="contact" id="contact">
          <h2 className="title">Contact me</h2>
            <div className="contact-content">
              <div className="column left">
                <div className="subtitle">Get in touch</div>
                <p className="text">If you want to get in touch or just say hi, feel free to reach me out through any platform bellow and let's talk.</p>
                <div className="row">
                  <a href="mailto:deboni.filipe@gmail.com">
                    <i className="far fa-envelope-open"></i>
                  </a>
                  <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/filipedeboni/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/FilipeDeboni">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              
              <div className="column right">
                <div className="subtitle">Message me</div>
                <form action="#">
                  <div className="fields">
                    <div className="field name">
                      <input type="text" placeholder="Name" required/>
                    </div>
                    <div className="field email">
                      <input type="email" placeholder="E-mail" required/>
                    </div>
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Subject"/>
                  </div>
                  <div className="field textarea">
                    <textarea id="" cols="30" rows="10" placeholder="Message" required></textarea>
                  </div>
                  <div className="button">
                    <button type="submit">Send message</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
    </section>
  );
}

export default Home;