import SingleMovie from "./SingleMovie";
import Home from "./Home";
import { Switch, Route, useLocation } from "react-router-dom";
import React from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter presenceAffectsLayout>
      <Switch location={location} key={location.key}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies/:id" children={<SingleMovie />} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
