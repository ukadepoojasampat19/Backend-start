const express =  require("express");
require("dotenv").config();
const connectDB =  require("./src/config/db");
const app = express();

connectDB();
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("API running ");
});

const PORT = process.env.PORT;

app.listen(PORT, () =>{
 console.log(`server running on port ${PORT}`);
});