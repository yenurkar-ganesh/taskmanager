const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `DataBase Connected 🍔\n HOST :: ${connect.connection.host} \n NAME ::  ${connect.connection.name} `
    );
  } catch (err) {
    console.log("ERR ::  Could not connect to DB 😵‍💫");
    process.exit(1);
  }
};

module.exports = connectDB;
