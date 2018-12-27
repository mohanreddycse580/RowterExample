import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div className="homepage">
        <h2>Welcome Page</h2>
        <a href="/login" className="button">
          Login
        </a>
        <a href="/signup" className="button success">
          <span>Register</span>
        </a>
      </div>
    );
  }
}

export default Welcome;
