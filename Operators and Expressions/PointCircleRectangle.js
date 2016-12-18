function solve(args) {
    var x = args[0],
        y = args[1],
        result1 = 'inside circle ',
        result2 = 'inside rectangle';

    if ((x - 1) * (x - 1) + (y - 1) * (y - 1) > 1.5 * 1.5) {
        result1 = 'outside circle ';
    }

    if (x < -1.0 || x > 5.0 || y > 1.0 || y < -1.0) {
        result2 = 'outside rectangle';
    }

    console.log(result1 + result2);
}