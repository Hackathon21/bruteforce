import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import ResumePage from "./pages/Resume";
import SkillForm from "./components/Forms/SkillsForm";
import Landing from "./components/Dashboard/Landing";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/resume">
          <ResumePage />
        </Route>
        <Route exact path="/check">
          <Landing />
        </Route>
        <Route exact path="/resumedata">
          <SkillForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
