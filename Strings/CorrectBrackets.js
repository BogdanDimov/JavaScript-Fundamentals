function solve(args) {
    if (args[0].match(/\(/g).length === args[0].match(/\)/g).length) {
        console.log("Correct");

    } else {
        console.log("Incorrect");
    }
}