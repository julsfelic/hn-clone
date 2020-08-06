import React from "react";
import { NavLink } from "react-router-dom";

import { ThemeConsumer } from "../contexts/theme";

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="row space-between">
          <ul className="row nav">
            <li>
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeStyle={{ color: "rgb(187, 46, 31)" }}
              >
                Top
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/new"
                className="nav-link"
                activeStyle={{ color: "rgb(187, 46, 31)" }}
              >
                New
              </NavLink>
            </li>
          </ul>
          <button
            className="btn-clear"
            style={{ fontSize: "30px" }}
            onClick={toggleTheme}
          >
            {theme === "light" ? "🔦" : "💡"}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
