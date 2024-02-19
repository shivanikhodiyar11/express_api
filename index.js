require("./db.config");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/User.Route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.listen(8000, () => console.log("Server is running on port number 5000."));
