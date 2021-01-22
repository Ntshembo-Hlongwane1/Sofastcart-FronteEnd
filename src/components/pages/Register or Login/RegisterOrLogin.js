import { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterOrLogin.css";

// Components
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";

// Page breadcrumb
const pageRoute = [{ title: "Register or Login", link: "/register-or-login" }];

const RegisterOrLogin = () => {
  const [showforgotPassword, setShowForgotPassword] = useState(false);
  return (
    <div className="register-or-login">
      <Breadcrumb route={pageRoute} />
      <div className="customer_container row">
        <div className="col-1-2">
          {!showforgotPassword ? (
            <form className="register-or-login__form">
              <h3 className="register-or-login__form-header">Login</h3>
              <p>Welcome back Sigin in to your account</p>
              <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input type="email" required id="email" />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  required
                  id="password"
                  autoComplete="true"
                />
              </div>
              <div className="register-or-login__forgotpassword">
                <Link to="/">Return to Store</Link>
                <button onClick={() => setShowForgotPassword(true)}>
                  Forgotten Password?
                </button>
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          ) : (
            <form className="register-or-login__form">
              <h3 className="register-or-login__form-header">Reset Password</h3>
              <p>We will send you an email to reset your password</p>
              <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input type="email" required id="email" />
              </div>
              <div className="register-or-login__forgotpassword-buttons">
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
          <form className="register-or-login__form">
            <h3 className="register-or-login__form-header">
              Create New Account
            </h3>
            <p>Create your own Account</p>
            <div className="form-control">
              <label htmlFor="name">First Name</label>
              <input type="text" required id="name" />
            </div>
            <div className="form-control">
              <label htmlFor="surname">Last Name</label>
              <input type="text" required id="surname" />
            </div>
            <div className="form-control">
              <label htmlFor="register-email">Email Address</label>
              <input type="email" required id="register-email" />
            </div>
            <div className="form-control">
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                required
                id="register-password"
                autoComplete="true"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
          <div className="register-or-login__subtext">
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

export default RegisterOrLogin;
