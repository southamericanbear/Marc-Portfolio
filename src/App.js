import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route className="full-height" path="/" exact component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/works" component={Work} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
