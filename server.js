const express = require("express");
require("dotenv").config();

const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

connectDB();

app.get("/", (req, res) => {
    res.send("API running");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});