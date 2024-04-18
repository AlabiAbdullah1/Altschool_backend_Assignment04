const express = require("express");
const logger = require("./logger");
const authorRoute = require("./authorRoute");

const app = express();
app.use(express.json());
app.use(logger);

app.use("/authors", authorRoute);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
