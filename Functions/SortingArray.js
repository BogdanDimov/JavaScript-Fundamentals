function solve(args) {
    var size = +args[0],
        numbers = args[1].split(' ').map(Number);

    // Write a method that returns the maximal element in a portion of array of integers starting at given index.
    function max(numbers, startIndex) {
        var max = numbers[startIndex];

        for (i = startIndex + 1; i < numbers.length; i += 1) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }

        return max;
    }

    // Using it write another method that sorts an array in ascending / descending order. 
    function sortDescending(numbers, size) {
        var currentIndex = 0;

        while (currentIndex != size - 1) {

            // get the index of max element starting from currentIndex
            var indexOfMax = numbers.indexOf(max(numbers, currentIndex), currentIndex),
                temp = numbers[currentIndex];

            // swap max element with current element
            numbers[currentIndex] = numbers[indexOfMax];
            numbers[indexOfMax] = temp;

            currentIndex++;
        }

        return numbers;
    }

    function sortAscending(numbers, size) {
        return sortDescending(numbers, size).reverse();
    }

    console.log(sortAscending(numbers, size).join(' '));
}

// test
solve(['10', '36 10 1 34 28 38 38 27 30 20']);