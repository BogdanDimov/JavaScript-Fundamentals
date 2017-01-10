function solve(args) {
    var n = +args[0],
        maxSeq = 1,
        currSeq = 1;

    for (i = 1; i < n; i += 1) {
        if (args[i + 1] > args[i]) {
            currSeq++;
        } else {
            if (currSeq > maxSeq) {
                maxSeq = currSeq;
            }
            // reset the current count
            currSeq = 1;
        }
    }

    console.log(maxSeq);
}

solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);