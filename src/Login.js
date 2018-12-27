import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="login">
        <div>
          <h4>Login</h4>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.onChange}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.onChange}
          />
          <br />
          <input
            type="submit"
            className="button success"
            value="Login"
            onClick={this.login}
          />
          <br />
          <a href="/signup">Registration</a>
        </div>
      </div>
    );
  }
}

export default Login;
