import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import ScrollTopArrow from "./components/ScrollTopArrow";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboutme" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
        </Wrapper>
        <ScrollTopArrow />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
