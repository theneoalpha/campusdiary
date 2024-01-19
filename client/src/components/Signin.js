import React, { useState } from "react";
import Navbar from "./Navbar";
import "../components/assets/contact.css";
import Footer from "./Footer";

export default function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    // Make a POST request to the signin endpoint
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.status === 200) {
      // Successful signin
      console.log("Signin successful");
      // Redirect to the dashboard or another page
    } else {
      // Failed signin
      console.log("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />

      <section className="signin">
        <div className="container mt-5">
          <h1>Sign In</h1>
          <div className="signin-content">
            <div className="signin-form">
              <form method="POST" className="signin-page-form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    value="Sign In"
                    className="submit"
                    onClick={handleSubmit}
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