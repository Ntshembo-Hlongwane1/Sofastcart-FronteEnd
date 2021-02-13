import { useState } from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import axios from 'axios';
import {useHistory} from 'react-router-dom'

// Components
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";

// Page breadcrumb
const pageRoute = [{ title: "Account", link: "/account" }];

const Account = () => {
  const [showforgotPassword, setShowForgotPassword] = useState(false);

  const [username_login, setUsernameLogin] = useState("");
  const [password_login, setPasswordLogin] = useState("");

  const [username_signup, setUsernameSignUp] = useState("");
  const [email_signup, setEmailSignup] = useState("");
  const [password_signup, setPasswordSignup] = useState("")

  const history = useHistory()

  const handleLoginChange = (e)=>{
    switch(e.target.id){
      case "username_login":
        setUsernameLogin(e.target.value);
        break;
      case "password_login":
        setPasswordLogin(e.target.value);
        break
      default:
        break;
    }
  }

  const handleSignupChange = (e)=>{
    switch(e.target.id){
      case "username_signup":
        setUsernameSignUp(e.target.value);
        break;
      case "password_signup":
        setPasswordSignup(e.target.value);
        break
      case "email_signup":
        setEmailSignup(e.target.value)
      default:
        break;
    }
  }

  const LoginUser = (e)=>{
    const url ="https://sofast-cart-api.herokuapp.com/api/user-signin"
    e.preventDefault();
    const form_data = new FormData();
    form_data.append('username', username_login);
    form_data.append('password', password_login);

    axios.post(url, form_data).then(res=>{
      localStorage.setItem('token', res.data.authToken);
      history.push('/')
    }).catch(err=>{
      alert(err.response.data.msg)
    })

  }

  const SignupUser = (e)=>{
    e.preventDefault();
    const url = "https://sofast-cart-api.herokuapp.com/api/user-signup";

    const form_data = new FormData();
    form_data.append('email', email_signup);
    form_data.append('password', password_signup);
    form_data.append('verifiedPassword', password_signup);
    form_data.append('username', username_signup)
    axios.post(url, form_data).then(res=>{
      localStorage.setItem('token', res.data.authToken);
      history.push('/')
    }).catch(err=>{
      alert(err.response.data.msg)
    })

  }

  return (
    <div className="account">
      <Breadcrumb route={pageRoute} />
      <div className="customer_container row">
        <div className="col-1-2">
          {!showforgotPassword ? (
            <form className="account__form">
              <h3 className="account__form-header">Login</h3>
              <p>Welcome back Sigin in to your account</p>
              <div className="form-control">
                <label htmlFor="username_login">Username</label>
                <input onChange={handleLoginChange} id="username_login" type="text" required  />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  required
                  id="password_login"
                  autoComplete="true"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="account__forgotpassword">
                <Link to="/">Return to Store</Link>
                <button onClick={() => setShowForgotPassword(true)}>
                  Forgotten Password?
                </button>
              </div>
              <button onClick={LoginUser} type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          ) : (
            <form className="account__form">
              <h3 className="account__form-header">Reset Password</h3>
              <p>We will send you an email to reset your password</p>
              <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input type="email" required id="email" />
              </div>
              <div className="account__forgotpassword-buttons">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button
                  onClick={() => setShowForgotPassword(false)}
                  className="btn btn-light"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="col-1-2 form-divider">
          <form className="account__form">
            <h3 className="account__form-header">Create New Account</h3>
            <p>Create your own Account</p>
            <div className="form-control">
              <label htmlFor="name">Username</label>
              <input onChange={handleSignupChange} id="username_signup" type="text" required  />
            </div>
            <div className="form-control">
              <label htmlFor="register-email">Email Address</label>
              <input type="email" required id="email_signup"  onChange={handleSignupChange}/>
            </div>
            <div className="form-control">
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                required
                id="password_signup"
                autoComplete="true"
                onChange={handleSignupChange}
              />
            </div>
            <button onClick={SignupUser} type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
          <div className="account__subtext">
            <h4>Sign up today and you'll be able to:</h4>
            <p>
              <i className="fas fa-check"></i>
              <span>Speed your way through the checkout</span>
            </p>
            <p>
              <i className="fas fa-check"></i>
              <span>Track your orders easily</span>
            </p>
            <p>
              <i className="fas fa-check"></i>
              <span>Keep a record all your purchases</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
