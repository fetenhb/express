const express = require("express");

const app = express();

const logger = require("./middleware/logger");

app.use(logger);

const port = 5000;

app.listen(port, logger, () => {
  console.log(`the server is running on port ${port}`);
});

// app.get("/", (req, res) => {
//   console.log(req);
//   res.send("home page");
// });

// app.get("/contact", (req, res) => {
//   console.log("url", req.url);
//   res.send("contact page");
// });
app.use(express.static(__dirname + "/public"));
