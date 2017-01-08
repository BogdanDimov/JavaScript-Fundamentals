function solve(args) {
  sayHello(args);

  function sayHello(params) {
    console.log(`Hello, ${params}!`);
  }
}

// test
solve("Atanas");