// solve(['-1.1', '-0.5', '-0.1']);

function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        first = a,
        second = b,
        third = c;

    if (a > b && a > c) {
        if (c > b) {
            second = c;
            third = b;
        }
    } else if (b > a && b > c) {
        first = b;

        if (a > c) {
            second = a;
            third = c;
        } else {
            second = c;
            third = a;
        }
    } else {
        first = c;

        if (a > b) {
            second = a;
            third = b;
        } else {
            second = b;
            third = a;
        }
    }

    console.log(first + ' ' + second + ' ' + third);
}