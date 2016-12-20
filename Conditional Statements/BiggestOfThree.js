// solve(['-0.1', '-0.5', '-1.1']);

function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        max = a;
    if (b > a && b > c) {
        max = b;
    } else if (c > a && c > b) {
        max = c;
    }

    console.log(max);
}