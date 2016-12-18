function solve(args) {
    var x = args[0],
        y = args[1],
        distance = Math.sqrt(x * x + y * y);

    console.log((distance <= 2 ? 'yes ' : 'no ') + distance.toFixed(2));
}