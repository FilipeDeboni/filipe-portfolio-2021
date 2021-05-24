import React from "react";

function Home() {
  return (
    <section className="window">
      <div className="container">
        <div className="about" id="about">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <div className="text">Skills</div>
              <div className="skills">
                <div>
                  <i className="fab fa-react"></i>
                  <p>React.JS</p>  
                </div>
                <div>
                  <i className="fab fa-vuejs"></i>
                  <p>Vue.JS</p>  
                </div>
                <div>
                  <i className="fab fa-js-square"></i>
                  <p>JavaScript</p>  
                </div>
                <div>
                  <i className="fab fa-html5"></i>
                  <p>HTML</p>  
                </div>
                <div>
                  <i className="fab fa-css3-alt"></i>
                  <p>CSS</p>  
                </div>
                <div>
                  <i className="fab fa-bootstrap"></i>
                  <p>Bootstrap</p>  
                </div>
                <div>
                  <i className="fab fa-node-js"></i>
                  <p>Node.JS</p>  
                </div>
                <div>
                  <i className="fas fa-server"></i>
                  <p>MongoDB</p>  
                </div>
                <div>
                  <i className="fab fa-github-square"></i>
                  <p>
                    <span>Git & </span>
                    <span>GitHub</span>
                  </p>  
                </div>
                <div>
                  <i className="fas fa-undo-alt"></i>
                  <p>SCRUM</p>  
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">
                <p>I'm Filipe Deboni <br></br>and I'm a <span className="typing-2">Full Stack Developer</span></p>
              </div>
              <p>I’m a Front-End Developer with experience in the Technology field, with postgraduate education in Interaction Design and currently studying graduation in Analysis and Development of Systems and already finished on 2020 the Ironhack Web Development Bootcamp.</p>
              <p>As a good INTJ and Type 5 personality type, I’m an avid knowledge seeker, analytical, assertive, versatile, curious and creative. On the other hand, things I'm not so good at are to deal with people who put emotions over rationality and when I'm focused I can seem to be in my own world. My bachelor in Psychology helped me a lot with that points, also to think strategically and to relate better with people.</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1NSc93_2qwbCgQffopYgDMV2z5DHaMCCR/view?usp=sharing">
                Download Resume
              </a>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;