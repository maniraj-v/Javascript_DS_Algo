// keys, values, entries

/* *********************************************************************** */
/* Keys (should print only own properties, not inherited ones)
/* *********************************************************************** */
const obj = {
  name: "mani",
  place: "chennai",
};

// Adding inherited properties
obj.__proto__.b = 2;
Object.prototype.c = 3;

Object.myKeys = function (object) {
  var keys = [];
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
};

console.log(Object.keys(obj));
console.log(Object.myKeys(obj));
