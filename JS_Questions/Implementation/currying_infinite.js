function multiply(x, y, z) {
  return x * y * z;
}

function curry(fn) {
  return function curried(...args) {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return curried.bind(null, ...args);
    }
  };
}

const curriedMultipy = curry(multiply);

console.log(curriedMultipy(2)(4)(5));

// Another variation - curriedMultipy(2)(4)(5)()
// just small change return fn.bind instead of returning result

function curryVariation2(fn) {
  return function curried(...args) {
    if (fn.length === args.length) {
      return fn.bind(null, ...args);
    } else {
      return curried.bind(null, ...args);
    }
  };
}
