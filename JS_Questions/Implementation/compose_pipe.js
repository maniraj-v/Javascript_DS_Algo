const addBy2 = (val) => val + 2;
const multiplyBy5 = (val) => val * 5;

// Combine functions and exec right to left
function compose(f, g) {
  return function (...args) {
    return f(g(...args));
  };
}
const composedCalc = compose(addBy2, multiplyBy5);
console.log(composedCalc(10));

// Combine functions and exec left to right
function pipe(f, g) {
  return function (...args) {
    return g(f(...args));
  };
}
const pipeCalc = pipe(addBy2, multiplyBy5);
console.log(pipeCalc(10));
