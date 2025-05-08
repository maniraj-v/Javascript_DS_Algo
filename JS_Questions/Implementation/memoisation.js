function memoise(func) {
  const cache = new Map();
  return function (...args) {
    const stringifiedArgs = JSON.stringify(args);
    if (cache.has(stringifiedArgs)) {
      console.log("from cache");
      return cache.get(stringifiedArgs);
    }
    const result = func.apply(this, args);
    console.log("from func exec");
    cache.set(stringifiedArgs, result);
    return result;
  };
}

function add(x, y, z) {
  return x * y * z;
}

const memoisedAdd = memoise(add);

console.log(memoisedAdd(1, 2, 3));
console.log(memoisedAdd(1, 2, 3));
console.log(memoisedAdd(1, 2, 4));
