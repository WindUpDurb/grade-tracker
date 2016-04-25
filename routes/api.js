"use strict";

var express = require("express");
var router = express.Router();


router.use("/gradeTracker", require("./gradeTracker"));



module.exports = router;