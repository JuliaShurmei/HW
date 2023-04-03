import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as themeConf from '../../ThemeManager/theme';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../ThemeManager';
import theme from "styled-theming";

const styles = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "15%",
    justifyContent: "space-around",
    margin: "0 auto",
    background: "#FF7F50",
  };

  const Button = styled.button`
background: ${themeConf.buttonBackgroundColor};
border: none;
border-radius: 0.3em;
box-shadow: none;
color: ${themeConf.buttonTextColor};
cursor: pointer;
font-size: 1em;
padding: 0.5em 1em;
transition: all .5s ease;
`;
  
export const Header = () => {


  return (
    <div style={styles}>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link-class" : "")}
        to="/"
      > Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link-class" : "")}
        to="/login"
      > Login
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link-class" : "")}
        to="/posts"
      > Posts
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link-class" : "")}
        to="/favorites"
      > Favotites
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link-class" : "")}
        to="/about"
      > About
      </NavLink>
      
    </div>
  );
};