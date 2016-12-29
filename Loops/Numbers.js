// solve(['1']);

function solve(args) {
    var numbers = [];
    for (i = 1; i <= args; i++) {
        numbers.push(i);
    }

    var output = numbers.join(" ");
    console.log(output);
}