import {useRef} from 'react';
import './login.css';

export default function Login () {
  const email = useRef ();
  const password = useRef ();

  const handleClick = e => {
    e.preventDefault ();
    console.log (email);
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Chris App</h3>
          <span className="loginDesc">
            Login Here
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">Log In </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
