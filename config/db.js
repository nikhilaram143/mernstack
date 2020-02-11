const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURL");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("mongo connect");
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
