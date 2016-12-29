// solve(['2', '-1', '4']);

function solve(args) {
    var min = max = sum = parseFloat(args[0]),
        avg = 0;

    for (i = 1; i < args.length; i++) {
        var current = parseFloat(args[i]);
        if (current < min) {
            min = current;
        } else if (current > max) {
            max = current;
        }

        sum += current;
    }

    avg = sum / args.length;
    console.log("min=" + min.toFixed(2));
    console.log("max=" + max.toFixed(2));
    console.log("sum=" + sum.toFixed(2));
    console.log("avg=" + avg.toFixed(2));
}