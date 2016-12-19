// solve(['5.5', '4.5']);

function solve(args) {
    var x = args[0],
        y = args[1];
    if (y > x) {
        console.log(x + ' ' + y);
    } else {
        console.log(y + ' ' + x);
    }
}