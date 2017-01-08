function solve(args) {
    let numbers = args[0].split(' '),
        result = getMax(getMax(+numbers[0], +numbers[1]), +numbers[2]);

    function getMax(param1, param2) {
        if (param1 > param2)
            return param1;
        else return param2;
    }

    console.log(result);
}