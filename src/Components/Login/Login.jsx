import React, { useState } from "react";
import Axios from "axios";
import style from "./Login.module.css";
function Login() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/login", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label className={style.labelki} htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          className={style.in}
          onChange={changeHandler}
          name="email"
        />{" "}
        <br />
        <label className={style.labelki} htmlFor="password">Password:</label> <br />
        <input
          type="password"
          className={style.in}
          onChange={changeHandler}
          name="password"
        />{" "}
        <br />
        <button className={style.in} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
