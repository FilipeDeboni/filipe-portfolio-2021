import React from "react";

function Home() {
  return (
<section class="about" id="about">
    <div class="max-width">
      <h2 class="title">About me</h2>
      <div class="about-content">
        <div class="column left">
          <div class="text">Skills</div>
          <div class="skills">
            <div>
              <i class="fab fa-react"></i>
              <p>React.JS</p>  
            </div>
            <div>
              <i class="fab fa-vuejs"></i>
              <p>Vue.JS</p>  
            </div>
            <div>
              <i class="fab fa-js-square"></i>
              <p>JavaScript</p>  
            </div>
            <div>
              <i class="fab fa-html5"></i>
              <p>HTML</p>  
            </div>
            <div>
              <i class="fab fa-css3-alt"></i>
              <p>CSS</p>  
            </div>
            <div>
              <i class="fab fa-bootstrap"></i>
              <p>Bootstrap</p>  
            </div>
            <div>
              <i class="fab fa-node-js"></i>
              <p>Node.JS</p>  
            </div>
            <div>
              <i class="fas fa-server"></i>
              <p>MongoDB</p>  
            </div>
            <div>
              <i class="fab fa-github-square"></i>
              <p>
                <span>Git & </span>
                <span>GitHub</span>
              </p>  
            </div>
            <div>
              <i class="fas fa-undo-alt"></i>
              <p>SCRUM</p>  
            </div>
          </div>
        </div>
        <div class="column right">
          <div class="text">
            <p>I'm Filipe Deboni <br></br>and I'm a <span class="typing-2"></span></p>
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
  </section>
  );
}

export default Home;