"ust strict";

var db = require("../config/db");

db.run(`CREATE TABLE IF NOT EXISTS grades (
        name TEXT,
        score INTEGER,
        total INTEGER,
        grade TEXT,
        runningTotal INTEGER
)`);

exports.getGrades = function (callback) {
    db.all(`SELECT * FROM grades`, callback)

};

exports.addGrade = function (gradeData, callback) {
    db.run(`INSERT INTO grades (name, score, total, grade, runningTotal)
    VALUES (?, ?, ?, ?, ?)`,
    gradeData.name, gradeData.score, gradeData.total, gradeData.grade, gradeData.runningTotal, callback
    );
};

exports.deleteGrade = function (gradeName, callback ) {
    db.run(`DELETE FROM grades WHERE NAME = "${gradeName}"`, callback);
};
