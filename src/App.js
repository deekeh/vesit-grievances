import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import StudentMain from "./components/StudentMain";
import StudentRegister from "./components/StudentRegister";
import StudentAddPost from "./components/StudentAddPost";
import Resolve from "./components/StudentPostResolve";
import AdminMain from "./components/AdminMain";
import AdminPostResolve from "./components/AdminPostResolve";

// Styling
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* student section */}
          <Route path="/student" exact component={StudentMain} />
          <Route path="/student/add-post" exact component={StudentAddPost} />
          <Route path="/student/resolve" exact component={Resolve} />
          <Route path="/student/register" exact component={StudentRegister} />
          {/* admin section */}
          <Route path="/admin" exact component={AdminMain} />
          <Route path="/admin/post" exact component={AdminPostResolve} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
