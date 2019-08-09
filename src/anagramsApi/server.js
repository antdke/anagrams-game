const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.send("Hello Express");
});
app.listen(port);

console.log("anagrams RESTful API server started on: " + port);
