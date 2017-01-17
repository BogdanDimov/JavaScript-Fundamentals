function solve(args) {
    var obj = JSON.parse(args[0]);
    var text = args[1];

    for (var prop in obj) {
        var regex = new RegExp("#{" + prop + "}", "g");
        text = text.replace(regex, obj[prop]);
    }

    console.log(text);
}

solve([
    '{ "name": "John" }',
    "Hello, there! Are you #{name}?"
]);