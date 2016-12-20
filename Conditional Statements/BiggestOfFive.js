function solve(args) {
    for (var i = 0; i < args.length; i++) {
        args[i] = parseFloat(args[i]);
    }

    console.log(Math.max.apply(Math, args));
}