import React, { useContext } from "react";
import { Icon, Navbar } from "react-materialize";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
export default function () {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <Navbar
      className="menu"
      alignLinks="right"
      brand={
        <span className="brand-logo">
          <Link to="/">
            <img src="asset/images/logo.png"></img>
          </Link>
        </span>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      style={{
        backgroundColor: theme.background,
        color: theme.contentTextColor,
      }}
      // style={{ backgroundColor: "black" }}
    >
      <NavLink to={""}>
        <Icon left>home</Icon>Movie
      </NavLink>
      <NavLink to={""}>Series</NavLink>
      <NavLink to={""}>About us</NavLink>
      <div style={{ position: "relative" }}>
        <a
          className="switch-mode"
          href="#"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: "none",
          }}
          data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? "Dark" : "Light"} mode
        </a>
      </div>
    </Navbar>
  );
}
