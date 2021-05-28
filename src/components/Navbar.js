import React from "react";
import "../App.css";

// para a nova navbar
// import { useHistory} from "react-router-dom";
// let history = useHistory();
// onClick={() => history.goBack()}

// function Navbar(props) {

function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars" style={{ color: "var(--white)"}}></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>


  // return (
  //   <nav classNameName="navbar">
  //     <div classNameName="max-width">
  //         <div className="logo"><a href="#home">Filipe Deboni</a></div>
  //           <ul className="menu">
  //             <li><a href="#home" className="menu-btn">Home</a></li>
  //             <li><a href="#projects" className="menu-btn">Projects</a></li>
  //             <li><a href="#about" className="menu-btn">About</a></li>
  //             <li><a href="#testimonials" className="menu-btn">Testimonials</a></li>
  //             <li><a href="#contact" className="menu-btn">Contact</a></li>
  //           </ul>
  //           <div className="menu-btn">
  //             <i className="fas fa-bars"></i>
  //           </div>
  //     </div>
  //   </nav>
  );
}

export default Navbar;




