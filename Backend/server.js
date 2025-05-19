const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Registration route
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  // In-memory storage for registered users
  const users = [];

  // Check if the user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Add the new user to the in-memory storage
  users.push({ name, email, password });
  console.log("Registered Users:", users);

  res.status(201).json({ message: "User registered successfully" });
});

// Client-side registration function
async function registerUser(formData) {
  const response = await fetch("http://localhost:5000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return response.json();
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
