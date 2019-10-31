var puzzleWidth = 9;
var puzzleHeight = 9;
var cellArray = [];
var examplePuzzleString = "t..1......6....9..35.2.6.84..7.8.....9.32.56.4.....3.7..69.3.5.22..9....8......4..";
var examplePuzzleArr = examplePuzzleString.split("");

const queryUrl = "http://www.sudokuwiki.org/feed/fetchSudokuDAILYtxt.asp?accid=9002";


//Fetches today's puzzle
function todaysPuzzle(cb) {
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then( response => cb(response));
}