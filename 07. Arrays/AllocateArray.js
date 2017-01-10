function solve(args) {
    var N = Number(args),
        array = [N];

    for (var i = 0; i < N; i += 1) {
        array[i] = i * 5;
        console.log(array[i]);
    }

}

solve(['5']);