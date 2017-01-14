function solve(args) {
    Array.prototype.removeElement = function (elementToRemove) {
        var index;
        do {
            index = this.indexOf(elementToRemove);
            this.splice(index, 1);
        } while (index > -1);

        return this;
    }

    console.log(args.removeElement(args[0]).join("\n"));
}

solve(['1', '2', '3', '2', '1', '2', '3', '2']);