const express = require('express');
const app = express();
const configRoutes = require("./routes");
const path = require('path');
require('dotenv').config();
const cors = require("cors");


app.use(express.static(path.join(__dirname, "./client/build")));

app.use(cors());
app.use(express.json());

configRoutes(app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log("The Server is running on port " + PORT);
});