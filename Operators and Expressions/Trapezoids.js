function solve(args) {
    var a = +args[0],
        b = +args[1],
        h = +args[2],
        result = (a + b) * (h / 2);
    console.log(result.toFixed(7));
}