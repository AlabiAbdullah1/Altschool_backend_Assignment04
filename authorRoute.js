const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    authorName: " ALabi Abdullahi",
    Description: "This is the read Operation",
  });
});

router.post("/create", (req, res) => {
  res.json({ author: "Abdul", bookTitle: "Agony of motherhod" });
});

router.patch("/patch", (req, res) => {
  res.json({ Description: "This will update using this endpoint" });
});

router.delete("/delete", (req, res) => {
  res.json({ Description: "This will delete using this endpoint!" });
});

module.exports = router;
