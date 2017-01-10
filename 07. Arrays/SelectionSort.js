function solve(args) {
  let len = +args.shift(),
      numbers = args.map(Number),
      smallestNumber = Number.MAX_VALUE,
      position = 0;      

      for (let i = 0; i < len; i += 1) {
          for (let j = i; j < len; j += 1) {
              if (numbers[j] < smallestNumber) {
                smallestNumber = numbers[j];
                position = j;                
              }
          }
          numbers.splice(position, 1);
          numbers.unshift(smallestNumber);          
          smallestNumber = Number.MAX_VALUE;
      }
      numbers.reverse();
      console.log(numbers.join('\n'));
}