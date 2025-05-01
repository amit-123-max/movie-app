import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  const handleWelcomeRedirect = () => {
    navigate("/welcome");
  };

  return (
    <div className="login-background">
      <div className="form-box">
        <h1 className="title">{isSignup ? "Sign Up" : "Sign In"}</h1>
        <div className="underline" style={{ transform: isSignup ? "translateX(0)" : "translateX(35px)" }}></div>
        <form>
          <div className="input-group">
            {isSignup && (
              <div className="input-field namefield">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="Name" />
              </div>
            )}
            <div className="input-field">
              <i className="fa-solid fa-at"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-key"></i>
              <input type="password" placeholder="Password" />
            </div>
            <p>
              <span className="text">
                {isSignup ? "Password Suggestions" : "Lost Password"}
              </span>{" "}
              <a href="#">Click here!</a>
            </p>
          </div>

          <div className="pratibha">
            <button type="button" onClick={handleWelcomeRedirect}>
              WELCOME TO BINGE WATCH
            </button>
          </div>

          <div className="btn-field">
            <button type="button" className={!isSignup ? "disable" : ""} onClick={() => setIsSignup(true)}>
              Sign up
            </button>
            <button type="button" className={isSignup ? "disable" : ""} onClick={() => setIsSignup(false)}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
