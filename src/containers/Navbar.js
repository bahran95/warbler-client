import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <div>
        {this.props.currentUser.isAuthenticated ? (
          <nav className="navbar navbar-expand navbar-light">
            <div className="container-fluid">
                <ul className="nav navbar-nav ml-auto my-3">
                  <li >
                    <Link
                      to={`/users/${this.props.currentUser.user.id}/messages/new`}
                      className="btn btn-primary"
                    >
                      New Message
                    </Link>
                  </li>
                  <li >
                    <a onClick={this.logout} className="btn btn-outline-primary">Log out</a>
                  </li>
                </ul>
              </div>
            </nav>
          ) : (
            <nav className="navbar navbar-expand navbar-dark bg-dark  d-none">
              <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                    <Link to="/signin">Log in</Link>
                  </li>
                </ul>
            </div>
          </nav>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Navbar);
