import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

const introduction = {
  name: "Wisdom Mpamugo",
  role: "Backend Developer in Training",
  about:
    "I’m a passionate web developer who loves building modern, user-focused applications.",
  message: "Excited to build my first API",
};

app.get("/", (req, res) => {
  res.json(introduction);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
