import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Loading from "./components/Loading";

import "./App.css";

import { ThemeProvider } from "./contexts/theme";

const TopPosts = React.lazy(() => import("./components/TopPosts"));
const User = React.lazy(() => import("./components/User"));
const NewPosts = React.lazy(() => import("./components/NewPosts"));
const Post = React.lazy(() => import("./components/Post"));

class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light"
      }));
    }
  };

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <header>
                <Nav />
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
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
