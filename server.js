const express = require('express');
const app = express();
const configRoutes = require("./routes");
require('dotenv').config();
const cors = require("cors");

app.use(cors());
app.use(express.json());

configRoutes(app);


app.listen(process.env.PORT, ()=> {
    console.log("The Server is running on port 4000");
});