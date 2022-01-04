import React, { useState } from "react";
import "./Login.css";
import logo from "../../img/logo.png";
import WaveTop from "./WaveTop";
import WaveBottom from "./WaveBottom";
import { saveJwt } from "../../util/Jwt";
import axios from "axios";

const Login = (props) => {
  const [username, setUsername] = useState("");

  const submit = () => {
    props.setUser(username);
    saveJwt(username);

    axios
      .post("https://localhost:3000/auth", username)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="login-form">
        <img src={logo} alt="logo" />
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
