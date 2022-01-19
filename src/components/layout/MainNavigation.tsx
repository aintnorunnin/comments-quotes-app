import React from "react";
import { NavLink } from "react-router-dom";
import css from "./MainNavigation.module.css";

const MainHeaderNavigation = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={css.active} to="/quotes">
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={css.active} to="/newQuote">
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeaderNavigation;
