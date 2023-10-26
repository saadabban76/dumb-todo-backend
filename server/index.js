const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!

app.get('/', (req, res) => {
  res.send("hello there! this is my first backend deployment on aws server dfsdfdsffffffffffffffffffffff :) \n testing !!!");
});

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wgmqb0q.mongodb.net/`,
  { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" }
);

// working
app.listen(3000, () => console.log("Server running on port 3000"));
