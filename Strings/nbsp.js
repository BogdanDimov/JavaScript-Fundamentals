function solve(args) {
    var re = /\s/g;

    console.log(args[0].replace(re, "&nbsp;"));
}

solve(['This text contains 4 spaces!!']);