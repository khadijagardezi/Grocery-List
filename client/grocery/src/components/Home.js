import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <h1>Grocery App</h1>

      {/* Buttons */}
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default home;
