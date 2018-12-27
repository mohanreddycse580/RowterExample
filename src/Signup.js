import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      name: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="login">
        <div>
          <h4>Registeration</h4>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.onChange}
          />
          <br />
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.onChange}
          />
          <br />
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
            className="button"
            value="Sign Up"
            onClick={this.signup}
          />
          <br />
          <a href="/login">Login</a>
        </div>
      </div>
    );
  }
}

export default Signup;
