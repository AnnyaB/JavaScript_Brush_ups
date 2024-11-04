
// Array of scores
var scores = [
    97, 29, 35, 22, 66, 0, 51, 75, 31, 32,
    71, 78, 47, 37, 54, 8, 1, 57, 80, 71,
    91, 67, 35, 46, 80, 52, 0, 5, 38, 10,
    80, 20, 78, 40, 15, 100, 25, 64, 2, 67,
    84, 33, 84, 91, 18, 55, 50, 10, 57
];

// Cut score
var cutScore = 40;

// Loop through the scores array
for (var i = 0; i < scores.length; i++) {
    // Check if the score meets or exceeds the cut score
    if (scores[i] >= cutScore) {
        console.log("Score " + scores[i] + " is a pass.<br>");
    } else {
        console.log("Score " + scores[i] + " is a fail.<br>");
    }
}
