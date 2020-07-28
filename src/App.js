import React from "react";
import { fetchTopPosts } from "./api/hackerNews";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <nav className="row space-between">
          <ul className="row nav">
            <li>
              <a className="nav-link">Top</a>
            </li>
          </ul>
        </nav>
      </header>
      {console.log(fetchTopPosts())}
    </div>
  );
}

export default App;
