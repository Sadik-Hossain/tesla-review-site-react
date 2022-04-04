import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/home"
        style={({ isActive }) => ({
          color: isActive ? "white" : "black",
          background: isActive && "black",
          padding: "20px",
          textDecoration: "none",
          borderBottomStyle: "solid",
          borderBottomColor: isActive && "white",
        })}
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "white" : "black",
          background: isActive && "black",
          padding: "20px",
          textDecoration: "none",
          borderBottomStyle: "solid",
          borderBottomColor: isActive && "white",
        })}
        to="/reviews"
      >
        Reviews
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "white" : "black",
          background: isActive && "black",
          padding: "20px",
          textDecoration: "none",
          borderBottomStyle: "solid",
          borderBottomColor: isActive && "white",
        })}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "white" : "black",
          background: isActive && "black",
          padding: "20px",
          textDecoration: "none",
          borderBottomStyle: "solid",
          borderBottomColor: isActive && "white",
        })}
        to="/blogs"
      >
        Blogs
      </NavLink>
    </nav>
  );
};

export default Header;
