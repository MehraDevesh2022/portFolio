import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import About from "./components/about/AboutInfo";
import Footer from "./components/footer/Footer";
import ParticleBackground from "./components/background/ParticleBackground";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ParticleBackground className="particle"></ParticleBackground>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
