import React, { useState } from "react";
import Axios from "axios";

function Login() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("/login", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input type="text" onChange={changeHandler} name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={changeHandler} name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
