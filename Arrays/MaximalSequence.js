function solve(args) {
    var n = +args[0],
        numbers = args.slice(1),
        maxSeq = 1,
        currSeq = 1;

    for (i = 1; i < n; i += 1) {
        if (numbers[i] === numbers[i - 1]) {
            currSeq++;
        } else {
            currSeq = 1;
        }
        if (currSeq > maxSeq) {
            maxSeq = currSeq;
        }
    }

    console.log(maxSeq);
}

solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);