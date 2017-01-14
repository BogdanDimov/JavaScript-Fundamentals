function solve(args) {
    var pattern = args[0],
        string = args[1],
        re = new RegExp(pattern, "gi");

    console.log(string.match(re).length);

}

solve([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);