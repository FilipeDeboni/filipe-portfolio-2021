import React from "react";
import "../App.css";

// para a nova navbar
// import { useHistory} from "react-router-dom";
// let history = useHistory();
// onClick={() => history.goBack()}

function Navbar(props) {
  return (
    <nav class="navbar">
      <div class="max-width">
        {/* <container> */}
          <div class="logo"><a href="#home">Filipe Deboni</a></div>
            <ul class="menu">
              <li><a href="#home" class="menu-btn">Home</a></li>
              <li><a href="#projects" class="menu-btn">Projects</a></li>
              <li><a href="#about" class="menu-btn">About</a></li>
              <li><a href="#contact" class="menu-btn">Contact</a></li>
            </ul>
            <div class="menu-btn">
              <i class="fas fa-bars"></i>
            </div>
        {/* </container> */}
      </div>
    </nav>
  );
}

export default Navbar;




