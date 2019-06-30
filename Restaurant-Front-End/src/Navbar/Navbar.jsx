import React, { Component } from "react";
import Logo from "./Logo";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

class navbar extends Component {
  state = {};
  render() {
    return (
      <nav id="navbar">
        <Logo />

        <ul>
          <NavLink
            id="link"
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </NavLink>

          <Link
            id="link"
            activeClass="active"
            to="what"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            What
          </Link>
          <Link
            id="link"
            activeClass="active"
            to="who"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Who
          </Link>

          <Link
            id="link"
            activeClass="active"
            to="order2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Order
          </Link>

          <NavLink id="link" activeClass="active" to="/admin">
            Admin
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default navbar;
