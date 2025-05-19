import { useNavigate } from "react-router-dom";
import "./Target.css";
import React, { useState } from "react";
import fineass from "./Group 1.png";

function BasicExample() {
  const navigate = useNavigate();

  // State to store user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle sign-up click
  const handleSignUpClick = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response Data:", data); // Debug the response

      if (response.ok) {
        console.log(data.message);
        alert(data.message); // Show success message
        navigate("/next"); // Navigate to the next page
      } else {
        console.error(data.message);
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // if (!formData.name || !formData.email || !formData.password) {
  //   alert("All fields are required");
  //   return;
  // }

  return (
    <div className="body">
      <div className="container2">
        <div className="text-box">
          <div className="header">
            <div className="text">
              <h4>Kortext</h4>
              <h2>Get Started</h2>
              <p>
                Already have an account? <span>Sign in</span>
              </p>
            </div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <h6>Name</h6>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <h6>Email</h6>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <h6>Password</h6>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="submit-container">
            <div
              className="submit"
              onClick={handleSignUpClick}
              style={{ cursor: "pointer" }}
            >
              Sign Up
            </div>
          </div>

          <div className="forgot-password">
            Forgot Password? <span>Click Here!</span>
          </div>
        </div>

        <div className="image">
          <img src={fineass} alt="back" />
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
