/* 	Check for solved cells 	 
Show Possibles
1: Hidden Singles
2: Naked Pairs/Triples
3: Hidden Pairs/Triples	 
4: Naked/Hidden Quads	 
5: Pointing Pairs	 
6: Box/Line Reduction */

//URL: http://www.sudokuwiki.org/feed/fetchSudokuDAILYtxt.asp?accid=9002


function NewArray() {
    for (let i = 1; i <= 9; i++) {
        this[i] = ["X"];
        for (let j = 1; j <= 9; j++) {
            this[i].push("");
        };
    };
};

function findDupes(item, index, arr) {
    return arr.indexOf(item) != index;
}

var puzzleColumns = new NewArray();
var puzzleRows = new NewArray();
const uniqueNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function buildArrays(pzlString) {
    var inputString = pzlString.replace(/[.]/gi, "0");
    for (let row = 1; row <= 9; row++) {
        for (let column = 1; column <= 9; column++) {
            puzzleColumns[column][row] = parseInt(inputString.charAt((row-1)*9+column));            
            puzzleRows[column][row] = parseInt(inputString.charAt((column-1)*9+row));
        }
    }
    console.log(puzzleColumns);
    console.log(puzzleRows);
    
}

buildArrays("s..1......6....9..35.2.6.84..7.8.....9.32.56.4.....3.7..69.3.5.22..9....8......4..");
checkRow(1, console.log);

function seedCells() {
    let puzzleSize = puzzleWidth * puzzleHeight;
    for (let i = 0; i < puzzleSize; i++) {
        cellArray.push(0);
    }
    console.log(cellArray);
}

function getCellValue(cellX, cellY, cb) {
    let cellNum = cellX * cellY;
    return cb(cellArray[cellNum]);
}

function checkForSolved() {

}

function findPossibles() {

}

function checkRow(xVal, cb) {
    var selectedRow = puzzleRows[xVal];
    if (selectedRow.indexOf(0) >= 0) {
        console.log("Empty box(es) found.");
        cb(false);
    } else if (selectedRow.filter(findDupes).length > 0) {
        console.log("Duplicates found.");
        cb(false);        
    } else {
        cb(true);
    }
}

//Test stuff, remove later V
/* seedCells();
getCellValue(6, 9, function(val) {
    console.log(val);
})
console.log(examplePuzzleArr); */

//