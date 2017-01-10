function solve(args) {
    var n = +args,
        divider,
        maxPrime = 2;

    for (i = n; i >= 2; i -= 1) {
        var isPrime = true;
        for (divider = 2; divider * divider <= n; divider += 1) {
            if (i % divider === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            maxPrime = i;
            break;
        }
    }

    console.log(maxPrime);
}

solve(['26']);