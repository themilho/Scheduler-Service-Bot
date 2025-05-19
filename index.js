require ("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json())

app.listen(process.env.PORT || 3000, async () => {
    console.log("app running on port", process.env.PORT || 3000);    
})

