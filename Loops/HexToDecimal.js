// solve(['4ED528CBB4']);

function solve(args) {
    var hex = String(args);
    var decimal = 0;
    for (power = hex.length - 1, i = 0; i < hex.length; i++, power--) {
        var number;
        switch (hex.charAt(i)) {
            case 'A':
                number = 10;
                break;
            case 'B':
                number = 11;
                break;
            case 'C':
                number = 12;
                break;
            case 'D':
                number = 13;
                break;
            case 'E':
                number = 14;
                break;
            case 'F':
                number = 15;
                break;
            default:
                number = Number(hex.charAt(i));
                break;
        }

        decimal += number * Math.pow(16, power);
    }

    console.log(decimal)
}