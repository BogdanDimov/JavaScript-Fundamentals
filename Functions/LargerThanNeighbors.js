function solve(args) {
    let length = +args[0],
        numbers = args[1].split(' ').map(Number);

    console.log(countHowManyLargerThanNeighbors());

    function countHowManyLargerThanNeighbors() {
        let counter = 0;
        for (i = 1; i < length - 1; i += 1) {
            if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
                counter++;
            }
        }

        return counter;
    }
}

solve(['6', '-26 -25 -28 31 2 27']);