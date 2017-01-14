function solve(args) {
    var heights = args[0].split(" ").map(Number),
        peaksIndexes = [],
        pockets = [],
        sumOfPockets = 0;

    for (var index = 1; index < heights.length - 1; index++) {
        if (heights[index] > heights[index + 1] &&
            heights[index] > heights[index - 1]) {
            peaksIndexes.push(index);
        }
    }

    for (var index = 1; index < heights.length - 1; index++) {
        if ((peaksIndexes.indexOf(index - 1) > -1) &&
            (peaksIndexes.indexOf(index + 1) > -1)) {
            sumOfPockets += heights[index];
        }
    }

    console.log(sumOfPockets);
}

solve(["53 20 1 30 2 40 3 10 1"]);