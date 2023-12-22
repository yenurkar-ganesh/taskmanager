
const express = require("express");
const connectDB = require("./DB/connectDB.js");
const app = express();
const PORT = process.env.PORT || 4200;
// const { router } = require("./routes/task.route");

require("dotenv").config()
app.use(express.json());

// ROUTES
app.use("/api/v1/tasks", require("./routes/task.route.js"));

// MONGO_DB_CONNECTION
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

// console.log("No Error, All Good 👋");
