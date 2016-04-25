"use strict";

var express = require("express");
var router = express.Router();
var Grades = require("../models/gradeTracker");

router.route("/")
    .get(function (request, response) {
      Grades.getGrades(function (error, gradeData) {
         if (error) {
             return response.status(400).send(error);
         }
          console.log(gradeData)
         response.render("../views/home", {
             grades : gradeData
         });
      });
    })
    .post(function (request, response) {
        console.log(request.body);
       Grades.addGrade(request.body, function (error) {
           if (error) {
               return response.status(400).send(error);
           }
           response.send();
       });
    })
    .delete(function (request, response) {
        var gradeName = request.body.name;
        Grades.deleteGrade(gradeName, function (error) {
            if (error) {
                return response.status(400).send(error);
            }
            response.send("Received")
        });
    });

router.route("/:gradeID")
    .post(function (request, response) {
        console.log(request.body);

        response.send(request.body);
    });




module.exports = router;