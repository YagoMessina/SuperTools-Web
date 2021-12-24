import React, { useState } from "react";
import "./Login.css";
import logo from "../../img/logo.png";
import WaveTop from "./WaveTop";
import WaveBottom from "./WaveBottom";

const Login = (props) => {
  const [username, setUsername] = useState("");

  const submit = () => {
    props.setUser(username);
  };

  return (
    <>
      <WaveTop />
      <div className="login-form">
        <img src={logo} />
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
      <WaveBottom />
    </>
  );
};

export default Login;
