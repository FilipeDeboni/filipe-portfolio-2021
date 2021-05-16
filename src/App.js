import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
// import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
// import Projects from "./components/Projects";
// import Project1 from "./components/Project1";
// import Project2 from "./components/Project2";
// import Project3 from "./components/Project3";

function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Home} />

      {/* <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Projects} />
        <Route path="/petfriendly" component={Project3} />
        <Route path="/clover" component={Project2} />
        <Route path="/portfolio" component={Project1} />
      </BrowserRouter> */}
    </div>
  );
}

export default App;