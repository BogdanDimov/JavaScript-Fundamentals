function solve(args) {
    var thirdDigit = Math.floor((args / 100) % 10);
    if (thirdDigit === 7) {
        console.log('true');
    } else {
        console.log('false ' + thirdDigit);
    }
}