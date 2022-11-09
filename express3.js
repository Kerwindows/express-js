const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

//serve html file
app.use(express.static(__dirname + "/public"));

app.listen(3000);
