function solve(args) {
    var s1 = args[0],
        s2 = args[1];

    String.prototype.strcmp = function (s) {
        if (this < s) return -1;
        if (this > s) return 1;
        return 0;
    }

    switch (s1.strcmp(s2)) {
        case -1:
            console.log('<');
            break;
        case 0:
            console.log('=');
            break;
        case 1:
            console.log('>');
            break;
    }
}

solve(['foods', 'food']);