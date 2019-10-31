/* 	Check for solved cells 	 
Show Possibles
1: Hidden Singles
2: Naked Pairs/Triples
3: Hidden Pairs/Triples	 
4: Naked/Hidden Quads	 
5: Pointing Pairs	 
6: Box/Line Reduction */

//URL: http://www.sudokuwiki.org/feed/fetchSudokuDAILYtxt.asp?accid=9002


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

//Test stuff, remove later V
seedCells();
getCellValue(6, 9, function(val) {
    console.log(val);
})
console.log(examplePuzzleArr);

//