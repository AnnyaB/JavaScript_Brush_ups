function DoesScorePass(score) {
    var passingScore = 40;

    // Check if the score is passing or failing
    if (score >= passingScore) {
        // Classify the passing score
        if (score >= 70) {
            return "First class";
        } else if (score >= 60) {
            return "Upper Second Class";
        } else if (score >= 50) {
            return "Lower Second Class";
        } else {
            return "Third class";
        }
    } else {
        // Check for referral or fail
        if (score >= 20) {
            return "Referral";
        } else {
            return "Fail";
        }
    }
}

// Test the function with different scores
var classification1 = DoesScorePass(34);
console.log("Score: 34 - Classification: " + classification1 + "<br>");

var classification2 = DoesScorePass(75);
console.log("Score: 75 - Classification: " + classification2 + "<br>");

var classification3 = DoesScorePass(55);
console.log("Score: 55 - Classification: " + classification3 + "<br>");

var classification4 = DoesScorePass(18);
console.log("Score: 18 - Classification: " + classification4 + "<br>");

var classification5 = DoesScorePass(45);
console.log("Score: 45 - Classification: " + classification5 + "<br>");
