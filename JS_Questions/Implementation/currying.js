// Currying - transforming function with mutiple args into function accepting args one by one
// Benefit: Partial Application
function multiply(x, y) {
  return x * y;
}

function curriedMultiply(x) {
  return function (y) {
    return x * y;
  };
}

console.log(multiply(2, 4));
console.log(curriedMultiply(2)(4));

// Partial Application
const multiplyBy5 = curriedMultiply(5);

console.log(multiplyBy5(2));
