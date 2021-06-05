import React from "react";

const Signup = () => {
  // form submitting
  const submitForm = (e) => {
    e.preventDefault();

    axios.post("http://localhose:3001/auth/register").then(res) => {
      console.log(res);
    }

    console.log("Sign up!!!");
  };

  return (
    <div>
      <h1>Signup Page</h1>

      <form onSubmit={submitForm}>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="City" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default Signup;
