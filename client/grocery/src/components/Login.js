import React from "react";

const Login = () => {
  // form submitting
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Logged in!!!");
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={submitForm}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
