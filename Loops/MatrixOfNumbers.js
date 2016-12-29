// solve(['4']);

function solve(args) {
    var row = [];
    for (i = 0, times = value = 1; value < args * 2; i++, value++) {
        row[i] = value;
        if (i === args - 1) {
            console.log(row.join(" "));
            i = -1;
            value = times;
            times++;
        }
    }
}