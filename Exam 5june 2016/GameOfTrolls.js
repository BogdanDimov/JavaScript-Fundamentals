function solve(args) {
    var dimensions = args[0].split(" ").map(Number),
        rows = dimensions[0],
        cols = dimensions[1],
        startCoords = args[1].split(";"),
        startWboup = startCoords[0].split(" ").map(Number),
        startNbslbub = startCoords[1].split(" ").map(Number),
        startLsjtujzbo = startCoords[2].split(" ").map(Number),
        commands = args.slice(2),
        WboupCurrentRow = startWboup[0],
        WboupCurrentCol = startWboup[1],
        NbslbubCurrentRow = startNbslbub[0],
        NbslbubCurrentCol = startNbslbub[1],
        LsjtujzboCurrentRow = startLsjtujzbo[0],
        LsjtujzboCurrentCol = startLsjtujzbo[1],
        trapsRows = [],
        trapsCols = [],
        NbslbubTrapped = false,
        WboupTrapped = false;

    for (i = 0; i < commands.length; i += 1) {
        var command = commands[i].split(" ");

        if (command[0] != "lay") {
            var unit = command[1],
                direction = command[2];

            switch (unit) {
                case "Wboup":
                    if (WboupTrapped === false) {
                        if (direction === "d")
                            if (WboupCurrentRow + 1 <= rows - 1) {
                                WboupCurrentRow += 1;
                            }

                        if (direction === "u") {
                            if (WboupCurrentRow - 1 >= 0)
                                WboupCurrentRow -= 1;
                        }

                        if (direction === "l") {
                            if (WboupCurrentCol - 1 >= 0)
                                WboupCurrentCol -= 1;
                        }

                        if (direction === "r") {
                            if (WboupCurrentCol + 1 <= cols - 1)
                                WboupCurrentCol += 1;
                        }
                        break;
                    }

                case "Nbslbub":
                    if (NbslbubTrapped === false) {
                        if (direction === "d") {
                            if (NbslbubCurrentRow + 1 <= rows - 1)
                                NbslbubCurrentRow += 1;
                        }

                        if (direction === "u") {
                            if (NbslbubCurrentRow - 1 >= 0)
                                NbslbubCurrentRow -= 1;
                        }

                        if (direction === "l") {
                            if (NbslbubCurrentCol - 1 >= 0)
                                NbslbubCurrentCol -= 1;
                        }

                        if (direction === "r") {
                            if (NbslbubCurrentCol + 1 <= cols - 1)
                                NbslbubCurrentCol += 1;
                        }
                        break;
                    }

                case "Lsjtujzbo":
                    if (direction === "d") {
                        if (LsjtujzboCurrentRow + 1 <= rows - 1)
                            LsjtujzboCurrentRow += 1;
                    }

                    if (direction === "u") {
                        if (LsjtujzboCurrentRow - 1 >= 0)
                            LsjtujzboCurrentRow -= 1;
                    }

                    if (direction === "l") {
                        if (LsjtujzboCurrentCol - 1 >= 0)
                            LsjtujzboCurrentCol -= 1;
                    }

                    if (direction === "r") {
                        if (LsjtujzboCurrentCol + 1 <= cols - 1)
                            LsjtujzboCurrentCol += 1;
                    }
                    break;
            }

            if (Math.abs(LsjtujzboCurrentCol - NbslbubCurrentCol) <= 1 && Math.abs(LsjtujzboCurrentRow - NbslbubCurrentRow) <= 1 ||
                Math.abs(LsjtujzboCurrentCol - WboupCurrentCol) <= 1 && Math.abs(LsjtujzboCurrentRow - WboupCurrentRow) <= 1) {
                console.log(`The trolls caught Lsjtujzbo at ${LsjtujzboCurrentRow} ${LsjtujzboCurrentCol}`);
                break;
            }

            if (trapsCols.indexOf(NbslbubCurrentCol) && trapsRows.indexOf(NbslbubCurrentRow)) {
                NbslbubTrapped = true;

            } else if (trapsCols.indexOf(WboupCurrentCol) && trapsRows.indexOf(WboupCurrentRow)) {
                WboupTrapped = true;
            }

            if (((trapsCols.indexOf(NbslbubCurrentCol) != -1) && (trapsRows.indexOf(NbslbubCurrentRow) != -1) &&
                    (trapsCols.indexOf(WboupCurrentCol) != -1) && (trapsRows.indexOf(WboupCurrentRow) != -1) &&
                    (NbslbubCurrentCol != WboupCurrentCol) && (NbslbubCurrentRow != WboupCurrentRow)) ||
                (LsjtujzboCurrentCol === cols - 1 && LsjtujzboCurrentRow === rows - 1)) {
                console.log(`Lsjtujzbo is saved! ${WboupCurrentRow} ${WboupCurrentCol} ${NbslbubCurrentRow} ${NbslbubCurrentCol}`);
                break;
            }
        } else {
            trapsCols.push(LsjtujzboCurrentCol);
            trapsRows.push(LsjtujzboCurrentRow);
        }
    }
}

solve([
    '7 7',
    '0 1;0 2;3 3',
    'mv Lsjtujzbo l',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup l',
    'mv Wboup l',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub d',
    'mv Lsjtujzbo d',
    'mv Lsjtujzbo l',
    'mv Lsjtujzbo l',
    'mv Nbslbub l',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup r',
    'mv Lsjtujzbo d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r'
]);