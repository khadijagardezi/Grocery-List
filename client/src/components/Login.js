import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Login = () => {
  // form submitting
  const submitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/auth/login").then((res) => {
      console.log(res);
    });
    console.log("Logged in!!!");
  };

  return (
    <div className="maincon">
      <h1>Login Page</h1>

      <form onSubmit={submitForm}>
        <div className="inputdivs">
          <input
            type="email"
            name="email"
            required
            id="email"
            placeholder="Your Email"
          />
        </div>

        <div className="inputdivs">
          <input
            type="password"
            name="password"
            required
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="inputdivs">
          <input type="submit" value="Login" id="submitbtn" />
        </div>
      </form>

      {/* <!-- Link to Sign page in case of new account --> */}
      <p>
        Don't have an Account?<Link to="/Signup">SignUp Here</Link>
      </p>
    </div>
  );
};

export default Login;
