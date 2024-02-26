import React from "react";
import "../css/login.css";
import { app_context } from "./Header";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const { setusername, setlogin } = useContext(app_context);

  function handle_submit() {
    setlogin(true);
    const user = document.querySelector("#username_input");
    let value = user.value;
    setusername(value);
    navigate("/");
  }

  return (
    <div className="login_page">
      <div className="login">
        <div className="sign_in">Sign in</div>
        <div className="login1">
          <label htmlFor="name">User Name</label>
          <input
            id="username_input"
            type="text"
            name="name"
            placeholder="User Name"
          />
        </div>
        <div className="login2">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button onClick={handle_submit}>Submit</button>
        <div className="forgot">
          <h6>Forgot </h6>
          <h5>password?</h5>
        </div>
      </div>
    </div>
  );
};
