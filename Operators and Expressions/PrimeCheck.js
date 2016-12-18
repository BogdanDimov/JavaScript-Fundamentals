function solve(args) {
    for (i = 2; i <= Math.sqrt(args); i += 1)
        if (args % i === 0) return false;
    return args > 1;
}