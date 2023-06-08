import React, { useContext } from "react";
import { Navbar } from "react-materialize";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

export default function () {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <Navbar
      style={{
        backgroundColor: theme.background,
        color: theme.contentTextColor,
      }}
    >
      <NavLink>Hoang Duc</NavLink>
    </Navbar>
  );
}
