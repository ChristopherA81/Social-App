import './register.css';
import {useRef} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

export default function Register () {
  const username = useRef ();
  const email = useRef ();
  const password = useRef ();
  const passwordRepeat = useRef ();
  const navigate = useNavigate()

  const handleClick = async e => {
    e.preventDefault ();

    if(passwordRepeat.current.value !== password.current.value) {
        passwordRepeat.current.setCustomValidity("Passwords don't match")
    } else {
        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
        }

        try {
            await axios.post("/auth/register", user);
            navigate.push("/login");

        } catch(err) {
            console.log(err);
        }
        
    }



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
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
            />
            <input
              placeholder="Repeat Password"
              required
              ref={passwordRepeat}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>

    </div>
  );
}
