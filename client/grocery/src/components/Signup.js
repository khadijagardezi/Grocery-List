import React, { Component } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      city: "",
      password: "",
    };
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changePassword = this.changePassword.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  changeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  changeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  changePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  // form submitting
  submitForm = (e) => {
    e.preventDefault();
    const registered = {
      name: this.state.name,
      email: this.state.email,
      city: this.state.city,
      password: this.state.password,
    };
    axios
      .post("http://localhost:3001/auth/register", registered)
      .then((res) => {
        console.log(res.data);
      });
    console.log("Signed up!!!");
    window.location = "/";
  };
  render() {
    return (
      <div className="maincon">
        <h1>Create Account</h1>

        <form onSubmit={this.submitForm}>
          <div className="inputdivs">
            <input
              id="user_name"
              placeholder="Name"
              type="text"
              onChange={this.changeName}
              value={this.state.name}
              required
            />
          </div>

          <div className="inputdivs">
            <input
              type="email"
              required
              id="email"
              placeholder="Your Email"
              onChange={this.changeEmail}
              value={this.state.email}
            />
          </div>

          <div className="inputdivs">
            <input
              id="city"
              placeholder="City"
              type="text"
              onChange={this.changeCity}
              value={this.state.city}
            />
          </div>

          <div className="inputdivs">
            <input
              required
              id="password"
              placeholder="Password"
              type="password"
              onChange={this.changePassword}
              value={this.state.password}
            />
          </div>

          {/* <!-- Adding Sign Up button --> */}
          <div className="inputdivs">
            <input type="submit" id="submitbtn" value="Sign Up" />
          </div>
        </form>
        {/* <!-- Link back to login page in case account already present --> */}
        <p>
          Already have an account?<Link to="/Login">Login Here</Link>
        </p>
      </div>
    );
  }
}

export default Signup;
