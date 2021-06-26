import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ResumePage from "./pages/Resume";
import SkillForm from "./components/Forms/SkillsForm";
import Landing from "./components/Dashboard/Landing";
import Login from "./pages/Login";
import PrivateRoute from "./utils/PrivateRoutes";
// import Home from "./pages/Home";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          exact
          path="/resume"
          render={(props) => <ResumePage {...props} />}
        />

        <PrivateRoute exact path="/resumedata" component={SkillForm} />

        <PrivateRoute exact path="/dashboard" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
