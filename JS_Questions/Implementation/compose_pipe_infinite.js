const addBy2 = (val) => val + 2;
const multiplyBy5 = (val) => val * 5;
const divideBy3 = (val) => val / 3;

// Combine functions and exec right to left (reduceRight)
function compose(f, g) {
  return function (...args) {
    // Dont use f(g), we handle it in reduceRight
    return g(f(...args));
  };
}

function composeAll(...functions) {
  return functions.reduceRight(compose);
}
const composedCalc = composeAll(addBy2, multiplyBy5, divideBy3);
console.log(composedCalc(10));

// Combine functions and exec left to right
function pipe(f, g) {
  return function (...args) {
    return g(f(...args));
  };
}
function pipeAll(...functions) {
  return functions.reduce(pipe);
}
const pipedCalc = pipeAll(addBy2, multiplyBy5, divideBy3);
console.log(pipedCalc(10));

// Directly infinite without compose and composeAll

function composeAllDirect(...funcs) {
  return function (x) {
    return funcs.reduceRight((acc, fn) => fn(acc), x);
  };
}
