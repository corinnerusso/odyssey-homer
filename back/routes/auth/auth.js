const express = require("express");
const router = express.Router();
const connection = require("../helpers/db.js");

router.post("/signup", function(req, res, next) {
  const formData = req.body;

  connection.query("Insert INTO users SET ?", formData, function(
    error,
    results,
    fields
  ) {
    res.send(`ok for ${formData.name}`);
    if (error) {
      res.status(500).end("Erreur");
    }

    res.end();
  });
});

module.exports = router;
