function solve(args) {
    var firstWord = args[0],
        secondWord = args[1];

    if (Array.isArray(firstWord)) {
        firstWord = firstWord.join('');
    }

    if (Array.isArray(secondWord)) {
        secondWord = secondWord.join('');
    }

    if (firstWord > secondWord) {
        console.log('>');
    } else if (firstWord < secondWord) {
        console.log('<');
    } else {
        console.log('=');
    }
}

solve(['foods', 'food']);