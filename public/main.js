
var operations = {
    openAddGradeModal : function () {
        $("#addGrade").click(function () {
            $("#gradeModal").modal("show")
        })
    },

    submitGrade : function () {
        $("#submitGrade").click(function () {
            var $name = $("#gradeName").val();
            var $score = $("#newScore").val();
            var $total = $("#gradeTotal").val();
            var $letterGrade = $("#letterGrade").val();
            var gradeData = {
                name : $name,
                score : $score,
                total : $total,
                grade : $letterGrade
            };
            $.ajax({
                url : "/api/gradeTracker",
                data : gradeData,
                method : "POST",
                success : function () {
                    var $tr = $("<tr>");
                    var $tdName = $("<td>").text(gradeData.name);
                    var $tdScore = $("<td>").text(gradeData.score);
                    var $tdTotal = $("<td>").text(gradeData.total);
                    var $tdGrade = $("<td>").text(gradeData.grade);
                    var toAppend = [$tdName, $tdScore, $tdTotal, $tdTotal];
                    $tr.append(toAppend);
                    $("#gradeTable").append($tdGrade);
                    $("#gradeModal").modal("hide");
                    
                }
            })
        })
    },

    openDeleteGradeModal : function () {
        $("#deleteGradeButton").click(function () {
            console.log("working")
           $("#deleteGradeModal").modal("show");
        });
    },
    
    confirmDelete : function () {
        $("#confirmDeleteGrade").click(function () {
            $toDelete = $("#gradeToDeleteInput").val();
            var deleteData = {
                name: $toDelete
            };
            $.ajax({
                url : "/api/gradeTracker",
                data : deleteData,
                method : "DELETE",
                success : function () {
                    $("#deleteGradeModal").modal("hide");
                }
            })
        });
    }
};



var initialize = function () {
    operations.openAddGradeModal();
    operations.submitGrade();
    operations.openDeleteGradeModal();
    operations.confirmDelete();
};

$(document).ready(initialize);