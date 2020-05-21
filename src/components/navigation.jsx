import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navigation extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log("user in props: ", props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      brand: "LopezSarmiento",
      user: props.user,
    };
  }

  toggleNavbar() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const { user } = this.props;
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse justify-content-end"
      : "collapse navbar-collapse justify-content-end show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>
        <button
          onClick={this.toggleNavbar}
          className={classTwo}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={classOne} id="navbarNav">
          <div className="navbar-nav">
            <NavLink
              onClick={this.toggleNavbar}
              className="nav-item nav-link"
              to="/movies"
            >
              Movies
            </NavLink>
            <NavLink
              onClick={this.toggleNavbar}
              className="nav-item nav-link"
              to="/customers"
            >
              Customers
            </NavLink>
            <NavLink
              onClick={this.toggleNavbar}
              className="nav-item nav-link"
              to="/rentals"
            >
              Rentals
            </NavLink>
            {!user && (
              <React.Fragment>
                <NavLink
                  onClick={this.toggleNavbar}
                  className="nav-item nav-link"
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  onClick={this.toggleNavbar}
                  className="nav-item nav-link"
                  to="/register"
                >
                  Register
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <NavLink
                  onClick={this.toggleNavbar}
                  className="nav-item nav-link"
                  to="/profile"
                >
                  {user.name}
                </NavLink>
                <NavLink
                  onClick={this.toggleNavbar}
                  className="nav-item nav-link"
                  to="/logout"
                >
                  Logout
                </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
