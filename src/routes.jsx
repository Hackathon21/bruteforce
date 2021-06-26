import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import ResumePage from "./pages/Resume";
import SkillForm from "./components/Forms/SkillsForm";
import Landing from "./components/Dashboard/Landing";
import Login from "./pages/Login";
import Grades from "./pages/Grades";

import Assignment from "./pages/Assignment";
import Jobs from "./pages/Jobs";
import Course from "./pages/Course";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route
          exact
          path="/resume"
          // component={<ResumePage />}
          render={(props) => <ResumePage {...props} />}
        />
        
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/assignment">
          <Assignment />
        </Route>
        <Route exact path="/course">
          <Course />
        </Route>
        <Route exact path="/check">
          <Landing />
        </Route>
        <Route exact path="/resumedata">
          <SkillForm />
        </Route>
        <Route exact path="/dashboard">
          <Landing />
        </Route>
        <Route exact path="/grades">
          <Grades />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
