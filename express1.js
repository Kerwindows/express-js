const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({ extened: false }));
// app.use(bodyParser.json());

//In express update 4.16+
// the package: npm install body-parser is no longer needed
// it now includes the same functionality inside of Express.
// Instead of adding these lines in the code:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("req.headers", req.headers);
  //Using req.header to retrieve the header data in a GET route.
  // In express update 4.16+ it now is req.headers.
  // req.header will only return the function declaration.
  res.send("getting root");
});

app.listen(3000);
