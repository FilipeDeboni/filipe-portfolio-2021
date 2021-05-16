import React from "react";

function Home() {
  return (
<section class="contact" id="contact">
    <div class="max-width">
      <h2 class="title">Contact me</h2>
      <div class="contact-content">
        <div class="column left">
          <div class="text">Get in touch</div>
          <p class="row">If you want to get in touch or just say hi, feel free to reach me out through any platform bellow and let's talk.</p>
          <div class="row">
            <a href="mailto:deboni.filipe@gmail.com">
              <i class="far fa-envelope-open"></i>
            </a>
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/filipedeboni/">
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/FilipeDeboni">
              <i class="fab fa-github"></i>
            </a>
          </div>

        </div>
        <div class="column right">
          <div class="text">Message me</div>
          <form action="#">
            <div class="fields">
              <div class="field name">
                <input type="text" placeholder="Name" required/>
              </div>
              <div class="field email">
                <input type="email" placeholder="E-mail" required/>
              </div>
              
            </div>
            <div class="field">
              <input type="text" placeholder="Subject"/>
            </div>
            <div class="field textarea">
              <textarea id="" cols="30" rows="10" placeholder="Message" required></textarea>
            </div>
            <dib class="button">
              <button type="submit">Send message</button>
            </dib>
            
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Home;