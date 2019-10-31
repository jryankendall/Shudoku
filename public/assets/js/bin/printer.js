$("#get-puzzle-btn").on("click", function(event) {
    console.log(event);
    todaysPuzzle( results => {
        console.log(results);
    })
})