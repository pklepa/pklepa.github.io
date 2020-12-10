import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Navbar, Logo } from "./components/Navbar";

import Home from "./views/Home";
import Temp from "./views/Temp";
import Contact from "./views/Contact";
import About from "./views/About";

function Routes() {
  const location = useLocation();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <Navbar>
        <Logo to="/">
          <div>
            <h1>pk</h1>
          </div>
        </Logo>
        <ul>
          {isDesktop && <Link to="/">Home</Link>}
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </Navbar>

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/temp">
            <Temp />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default Routes;
