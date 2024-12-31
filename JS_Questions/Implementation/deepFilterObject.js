const input = {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  }
};

const callback = element => element >= 0;
const filtered = filter(input, callback);
// { a: 1, b: { c: 2, h: { i: 5, j: 6 } } }
console.log(filtered);


// Solution

function filter(collection, callback) {
  const result = {}
  for (const key in collection) {
    const value = collection[key]
    if (value !== null && typeof value === 'object') {
      const recursiveResult = filter(value, callback)
      if (Object.keys(recursiveResult).length > 0) {
        result[key] = recursiveResult
      }
    } else {
      if (callback(value)) {
        result[key] = value
      }
    }
  }
  return result
}
