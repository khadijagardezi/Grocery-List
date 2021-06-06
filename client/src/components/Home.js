import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Grocery App</h1>

      {/* Buttons */}
      <Link to="/Signup">
        <button className="btn">Sign Up</button>
      </Link>
      <Link to="/Login">
        <button className="btn">Login</button>
      </Link>
    </div>
  );
};

export default Home;
