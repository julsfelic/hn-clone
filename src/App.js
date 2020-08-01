import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Loading from "./components/Loading";

import "./App.css";

const PostList = React.lazy(() => import("./components/PostList"));
const User = React.lazy(() => import("./components/User"));

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
          <Suspense fallback={<Loading />}>
            <Route exact path="/">
              <PostList />
            </Route>
            <Route path="/user" component={User} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
