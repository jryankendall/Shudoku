/* $("#get-puzzle-btn").on("click", function(event) {
    console.log(event);
    todaysPuzzle( results => {
        console.log(results);
    })
}) */

var linebreaksArr = [10, 19, 28, 37, 46, 55, 64, 73, 82];

$("#get-puzzle-btn").on("click", function(event) {
    console.log(event);
    $("#example-puzzle-list").html(examplePuzzleString + "<br>" + examplePuzzleArr + "<br>" + examplePuzzleSolution);
    for (let i = 1; i <= puzzleHeight*puzzleWidth; i++) {
        if (linebreaksArr.indexOf(i) >= 0) {
            $(".puzzle-container-area").append("<br>");
        }
        if (examplePuzzleArr[i] === ".") {
            $(".puzzle-container-area").append("_ ")
        } else {
            $(".puzzle-container-area").append(examplePuzzleArr[i] + " ");
        }
    }
});