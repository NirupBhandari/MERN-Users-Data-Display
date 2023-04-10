require("dotenv").config();
const express = require("express");
const app = express();

const connectDatabase = require("./db/connect");
const users_route = require("./routes/users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api/users", users_route);

const start = async () => {
  try {
    console.log("Connected 1 ");
    await connectDatabase(process.env.MONGODB_URL);
    console.log("connected 2");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on PORT number: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
