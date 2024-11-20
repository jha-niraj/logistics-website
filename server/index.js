const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3002;

const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/api/v1", userRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}---`);
})