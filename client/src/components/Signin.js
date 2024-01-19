import React, { useState } from "react";
import Navbar from "./Navbar";
import contact from "../images/boy.svg";
import "../components/assets/contact.css";
import Footer from "./Footer";

export default function SignIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    // ...
  };

  return (
    <>
      <Navbar />

      <section className="contact">
        <div className="container mt-5">
          <h1>Sign In</h1>
          <div className="contact-content">
            <img src={contact} alt="Contact" />
            <div className="contact-form">
              <form method="POST" className="contactpage-form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    value="Sign In"
                    className="submit"
                    onClick={handleSignIn}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}