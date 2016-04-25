"use strict";

var sqlite3 = require("sqlite3").verbose();
var path = require("path");
var DBpathToGradeTracker = path.join(__dirname, "../data/grades.db");
var db = new sqlite3.Database(DBpathToGradeTracker);


module.exports = db;
