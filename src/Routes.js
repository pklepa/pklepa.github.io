import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Home from "./views/Home";
import Temp from "./views/Temp";
import Contact from "./views/Contact";

import { AnimatePresence } from "framer-motion";

function Routes() {
  const location = useLocation();

  return (
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
  );
}

export default Routes;
