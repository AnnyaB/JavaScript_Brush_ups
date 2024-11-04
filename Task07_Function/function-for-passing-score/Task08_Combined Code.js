// Array of scores
var scores = [
    97, 29, 35, 22, 66, 0, 51, 75, 31, 32, 71,
    78, 47, 37, 54, 8, 1, 57, 80, 71, 91, 67,
    35, 46, 80, 52, 0, 5, 38, 10, 80, 20, 78,
    40, 15, 100, 25, 64, 2, 67, 84, 33, 84,
    91, 18, 55, 50, 10, 57
];

// Function to determine the classification of the score
function DoesScorePass(score) {
    var passingScore = 40;

    if (score >= passingScore) {
        if (score >= 70) {
            return "in the first class range";
        } else if (score >= 60) {
            return "in the upper second class range";
        } else if (score >= 50) {
            return "in the lower second class range";
        } else {
            return "in the third class range";
        }
    } else {
        if (score >= 20) {
            return "is a failing grade (referral)";
        } else {
            return "is a failing grade";
        }
    }
}

// Loop through the scores array
for (var i = 0; i < scores.length; i++) {
    var score = scores[i];  // Get the current score
    var classification = DoesScorePass(score); // Classify the score
    console.log(score + " " + classification + "<br>"); // Output the message
}
