import React, { Component } from "react";

const Navbar = (props) =>{
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Cart
        <span className="badge badge-pill badge-secondary">{props.items}</span>
      </a>
    </nav>
  );
}

export default Navbar;
