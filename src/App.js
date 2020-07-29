import React from "react";
import PostList from "./components/PostList";

import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <nav className="row space-between">
          <ul className="row nav">
            <li>
              <a href="/" className="nav-link">
                Top
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <PostList />
    </div>
  );
}

export default App;
