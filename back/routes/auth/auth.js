const router = require("express-router");
const express = require("express");

router.post("/signup", function(req, res, next) {
  res.send("I am in POST signup");
});

module.exports = router;
