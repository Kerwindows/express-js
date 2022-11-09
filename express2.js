const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

//serve a parameter
app.get("/:id", (req, res) => {
  console.log(req.params);
  res.status(200).send(req.params);
  res.status(404).send("not found");
});

app.listen(3000);
