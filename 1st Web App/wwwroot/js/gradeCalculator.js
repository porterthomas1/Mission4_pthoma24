// Without JQuery:

/*
document.getElementById("calcGrade").addEventListener("click", function () {
    alert("Assignments: " + document.getElementById("percentAssignments").value +
        ", Group Projects: " + document.getElementById("percentProjects").value +
        ", Quizzes: " + document.getElementById("percentQuizzes").value +
        ", Midterm Exam: " + document.getElementById("percentMidterm").value +
        ", Final Exam: " + document.getElementById("percentFinal").value +
        ", INTEX: " + document.getElementById("percentIntex").value);
})*/


// With JQuery:

// Convert each value passed from the html file into type "int", multiply it by its respective grade weight, and add them all together
$("#calcGrade").click(function () {
    numericGrade = (parseInt($("#percentAssignments").val()) * 0.5 +
                    parseInt($("#percentProjects").val()) * 0.1 +
                    parseInt($("#percentQuizzes").val())*0.1 +
                    parseInt($("#percentMidterm").val())*0.1 +
                    parseInt($("#percentFinal").val())*0.1 +
                    parseInt($("#percentIntex").val()) * 0.1);

    // Deterimine letter grade based on final grade calculated above
    if (numericGrade >= 94) {
        letterGrade = "A"
    }
    else if (numericGrade >= 90) {
        letterGrade = "A-"
    }
    else if (numericGrade >= 87) {
        letterGrade = "B+"
    }
    else if (numericGrade >= 84) {
        letterGrade = "B"
    }
    else if (numericGrade >= 80) {
        letterGrade = "B-"
    }
    else if (numericGrade >= 77) {
        letterGrade = "C+"
    }
    else if (numericGrade >= 74) {
        letterGrade = "C"
    }
    else if (numericGrade >= 70) {
        letterGrade = "C-"
    }
    else if (numericGrade >= 67) {
        letterGrade = "D+"
    }
    else if (numericGrade >= 64) {
        letterGrade = "D"
    }
    else if (numericGrade >= 60) {
        letterGrade = "D-"
    }
    else {
        letterGrade = "E"
    }

    // Return the final letter grade back to the html file
    $("#letterGrade").html(letterGrade);
})
