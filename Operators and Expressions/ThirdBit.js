function solve(args) {
    var mask = 1 << 3;
    console.log((args & mask) >> 3);
}