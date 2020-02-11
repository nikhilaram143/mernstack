const express = require("express");
const app = express();
const connectDB = require("./config/db");

// connectDb

connectDB();

// init middleware
app.use(express.json({ extendable: false }));

app.get("/", (req, res) => {
  res.send({ abc: "sairam" });
});

// Define Routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
