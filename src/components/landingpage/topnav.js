import React, { Component } from 'react';

class TopNav extends Component {
  render() {
    return (
      <nav className="topnav">
        <div className="nav-buttons">
          <a href="something" className="logo">
            ScheduleMaker
          </a>
          <span className="login-register">
          <a href="something">
            Login
          </a>
          <a href="something">
            Register
          </a>
          </span>
        </div>
        <a href="something" className="demo">
          View Demo
        </a>
      </nav>
    );
  }
}

export default TopNav;