import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  // form submitting
  const submitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/auth/register").then((res) => {
      console.log(res);
    });
    console.log("Signed up!!!");
  };

  return (
    <div className="maincon">
      <h1>Create Account</h1>

      <form onSubmit={submitForm}>
        {/* <!--First Input field with classname inputdivs and id user_name--> */}
        <div className="inputdivs">
          <input
            name="user_name"
            required
            id="user_name"
            placeholder="Name"
            type="text"
          />
        </div>

        {/* <!--Second Input field with classname inputdivs and id email--> */}
        <div className="inputdivs">
          <input
            type="email"
            name="email"
            required
            id="email"
            placeholder="Your Email"
          />
        </div>

        {/* <!--Third Input field with classname inputdivs and id password--> */}
        <div className="inputdivs">
          <input
            name="password"
            required
            id="password"
            placeholder="Password"
            type="password"
          />
        </div>

        {/* <!--First Input field with classname inputdivs and id confirm_password--> */}
        <div className="inputdivs">
          <input
            name="cpassword"
            required
            id="confirm_password"
            placeholder="Confirm Password"
            type="password"
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
};

export default Signup;
