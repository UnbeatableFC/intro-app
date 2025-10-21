// server.js
import express from "express";
const app = express();

// Define your port
const PORT = process.env.PORT || 3000;

// Define your introduction data
const introduction = {
  name: "Wisdom Mpamugo",
  role: "Backend Developer in Training",
  about: "I’m a passionate web developer who loves building modern, user-focused applications.",
 message: "Excited to build my first API"
};

// Route that returns JSON
app.get("/", (req, res) => {
  res.json(introduction);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
