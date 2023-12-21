const { dotenv } = require("dotenv");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4200;

// dotenv.Config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World THis is TASK MANAGER");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
