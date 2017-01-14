function solve(args) {
    function reverseString(s) {
        var o = '';
        for (var i = s.length - 1; i >= 0; i--)
            o += s[i];
        return o;
    }

    console.log(reverseString(args[0]));
}

solve(["string"]);