function solve(args) {
    let text = args[0],
        currentTag = '',
        tags = [],
        inTag = false,
        result = [];

    for (var i = 0; i < text.length; i++) {
        if (text[i] == '<') {
            inTag = true;
        } else if (text[i] === '>' && inTag) {
            inTag = false;
            currentTag += text[i];
            tags.push(currentTag);
            currentTag = '';
        } else if (!inTag) {
            if (tags.length === 0) {
                result.push(text[i]);
            } else if (tags[tags.length - 1].indexOf('upcase') !== -1) {
                result.push(text[i].toUpperCase());
            } else if (tags[tags.length - 1].indexOf('lowcase') !== -1) {
                result.push(text[i].toLowerCase());
            } else {
                result.push(text[i]);
            }

        }

        if (inTag || text[i] === '>') {
            currentTag += text[i];
        }

        if (tags.length !== 0 && tags[tags.length - 1].indexOf('</') !== -1) {
            tags.pop();
            tags.pop();
        }
    }

    console.log(result.join(''));
}

// function solve(args) {
//     var str = args[0]
//         .replace(/<upcase>(.*?)<\/upcase>/gi, function () {
//             return arguments[1].toUpperCase();
//         })
//         .replace(/<lowcase>(.*?)<\/lowcase>/gi, function () {
//             return arguments[1].toLowerCase();
//         })
//         .replace(/<orgcase>(.*?)<\/orgcase>/gi, function () {
//             return arguments[1];
//         })

//     console.log(str);
// }

solve(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.']);