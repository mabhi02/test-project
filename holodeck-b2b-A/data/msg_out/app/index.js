const express = require("express");
var fs = require("fs");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");

  fs.rename("../ex-mmd-push.accepted", "../ex-mmd-push.mmd", function (err) {
    if (err) throw err;
    console.log("File Renamed.");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
