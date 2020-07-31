import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PostList from "./components/PostList";
import User from "./components/User";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <nav className="row space-between">
            <ul className="row nav">
              <li>
                <Link to="/" className="nav-link">
                  Top
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
