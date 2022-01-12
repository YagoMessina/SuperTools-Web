import React, { useState } from "react";
import "./Login.css";
import logo from "../../img/logo.png";
import WaveTop from "./WaveTop";
import WaveBottom from "./WaveBottom";
import { saveJwt } from "../../util/Jwt";
import { doPost } from "../../util/Http";
import Path from "../../util/Path";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    doPost(
      "/auth/login",
      {
        username: username,
        password: password,
      },
      (response) => {
        saveJwt(response.data.token);
      },
      (error) => console.log(error)
    );
  };

  return (
    <>
      <WaveTop />
      <div className="login-form">
        <img src={logo} alt="logo" />
        <form onSubmit={login}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
      <WaveBottom />
    </>
  );
};

export default Login;
