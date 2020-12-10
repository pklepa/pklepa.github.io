import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Navbar, Logo } from "./components/Navbar";

import Home from "./views/Home";
import Temp from "./views/Temp";
import Contact from "./views/Contact";

function Routes() {
  const location = useLocation();

  return (
    <>
      <Navbar>
        <Logo>
          <h1>pk</h1>
        </Logo>
        <ul>
          <Link to="/">Home</Link>
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
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default Routes;
