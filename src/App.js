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
      </BrowserRouter>
    </div>
  );
}

export default App;