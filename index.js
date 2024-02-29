// creating restful apis

// get , post ,  put , delete

const express = require("express"); // express import
const app = express(); // calling express
const bodyParser = require("body-parser"); // import body-parser

app.use(bodyParser.json());
app.get("/naveen", function (req, res) {
  res.send("Naveen");
});

app.post("/getSum", function (req, res) {
  console.log("req.body", req.body);
  res.send(req.body);
});

app.listen(5000, function () {
  console.log("Port Running on 5000");
});
