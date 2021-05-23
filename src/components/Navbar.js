import React from "react";
import "../App.css";

// para a nova navbar
// import { useHistory} from "react-router-dom";
// let history = useHistory();
// onClick={() => history.goBack()}

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="max-width">
          <div className="logo"><a href="#home">Filipe Deboni</a></div>
            <ul className="menu">
              <li><a href="#home" className="menu-btn">Home</a></li>
              <li><a href="#projects" className="menu-btn">Projects</a></li>
              <li><a href="#about" className="menu-btn">About</a></li>
              <li><a href="#testimonials" className="menu-btn">Testimonials</a></li>
              <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
            <div className="menu-btn">
              <i className="fas fa-bars"></i>
            </div>
      </div>
    </nav>
  );
}

export default Navbar;




