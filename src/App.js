import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project1 from "./components/Project1-clover";
import Project2 from "./components/Project2-petfriendly";
import Project3 from "./components/Project3-Portfolio2020";
import Project4 from "./components/Project4-netflix";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Projects} />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={Testimonials} />
        <Route exact path="/" component={Contact} />
        <Route exact path="/" component={Footer} />
        <Route path="/netflix" component={Project4} /> */}
        <Route path="/portfolio2020" component={Project3} /> */}
        <Route path="/petfriendly" component={Project2} /> */}
        <Route path="/clover" component={Project1} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;