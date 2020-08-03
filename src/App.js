import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Loading from "./components/Loading";

import "./App.css";

const TopPosts = React.lazy(() => import("./components/TopPosts"));
const User = React.lazy(() => import("./components/User"));
const NewPosts = React.lazy(() => import("./components/NewPosts"));
const Post = React.lazy(() => import("./components/Post"));

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <nav className="row space-between">
            <ul className="row nav">
              <li>
                <NavLink
                  exact
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Top
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/new"
                  className="nav-link"
                  activeClassName="active"
                >
                  New
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Suspense fallback={<Loading />}>
            <Route exact path="/">
              <TopPosts />
            </Route>
            <Route path="/user" component={User} />
            <Route path="/new">
              <NewPosts />
            </Route>
            <Route path="/post" component={Post} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
