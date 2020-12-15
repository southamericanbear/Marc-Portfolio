import React from "react";
import "./App.css";
import Home from "./pages/home";
import Skills from "./pages/skills";
import Work from "./pages/work";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/works" component={Work} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
