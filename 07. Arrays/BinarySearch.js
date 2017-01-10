function solve(args) {
    var length = +args[0],
        numbers = args.slice(1, args.length - 1),
        value = +args[args.length - 1],
        index = -1,
        low = 0,
        high = length - 1,
        mid;

    while (low <= high) {
        mid = parseInt((high + low) / 2);

        if (numbers[mid] > value) {
            high = mid - 1;
        } else if (numbers[mid] < value) {
            low = mid + 1;
        } else {
            index = mid;
            break;
        }
    }

    console.log(index);
}

solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);