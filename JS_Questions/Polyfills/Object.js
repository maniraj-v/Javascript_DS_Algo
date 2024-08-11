// assign, create, keys, values, entries
/* *********************************************************************** */
// Object.assign()
// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
/* *********************************************************************** */
const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const source2 = { d: 10, c: 8 };

Object.myAssign = function (target, ...sources) {
  sources.forEach((source) => {
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  });
  return target;
};

Object.myAssign(target, source1, source2);
console.log(target);
/* *********************************************************************** */
// Object.create()
// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
/* *********************************************************************** */
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}!`);
  },
};

Object.myCreate = function (obj) {
  function F() {}
  F.prototype = obj;
  return new F();
};

const employee = Object.myCreate(person);
employee.name = "Jane";
employee.position = "Developer";

console.log(employee.name); // Output: Jane
console.log(employee.age); // Output: 30 (inherited from person)
employee.greet(); // Output: Hello, my name is Jane!

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
