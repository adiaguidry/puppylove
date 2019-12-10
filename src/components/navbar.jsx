import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
        <h1 className="my-0 mr-md-auto">
          <Link className="navbar-brand title" to="/">
            <i className="fa fa-paw" />
            Puppy Love
          </Link>
        </h1>
        <nav className="my-2 my-md-0 mr-md-3">
          <NavLink to="/puppies" className="p-2 text-dark">
            Puppies
          </NavLink>
          <NavLink to="/blog" className="p-2 text-dark">
            Blog
          </NavLink>
          <NavLink to="/store" className="p-2 text-dark">
            Store
          </NavLink>
        </nav>
        <Link to="/signup" className="btn btn-outline-primary">
          Sign up
        </Link>
      </div>
    );
  }
}

export default Nav;
