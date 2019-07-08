const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) =>
  res.send("Aditya testing basic server setup.. Hello world!")
);
app.listen(port, () => console.log(`Server running on port ${port}`));
