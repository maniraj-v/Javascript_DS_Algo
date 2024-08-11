// Prototypal inheritance in JavaScript

/* *********************************************************************** */
// Basic example using regular objects
/* *********************************************************************** */
Object.prototype.b = 2;

var obj1 = { a: 1 };
var obj2 = { d: 4 };

console.log(obj1.b); // 2
console.log(obj2.b); // 2

obj2.__proto__.c = 3;

console.log(obj1.c); // 3
console.log(obj2.c); // 3

/* *********************************************************************** */
// Classic example using constructor function (before ES6 classes)
/* *********************************************************************** */
// Animal (Parent/Prototype)
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

Animal.prototype.sleep = function () {
  console.log(`${this.name} is sleeping.`);
};

// Dog (Child)
function Dog(name, breed) {
  Animal.call(this, name); // Call Animal constructor
  this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific method
Dog.prototype.bark = function () {
  console.log(`${this.name} is barking.`);
};

// Create a Dog instance
var myDog = new Dog("Max", "Golden Retriever");

// Access inherited methods
myDog.eat(); // Max is eating.
myDog.sleep(); // Max is sleeping.

// Access Dog-specific method
myDog.bark(); // Max is barking.

/*
In this example:

1. Animal is the parent/prototype, with properties and methods.
2. Dog is the child, which inherits from Animal using Object.create().
3. Dog also has its own properties and methods.

Key points:

- Animal.call(this, name) ensures the Animal constructor is called for Dog instances.
- Dog.prototype = Object.create(Animal.prototype) sets up inheritance.
- Dog.prototype.constructor = Dog corrects the constructor property.

This demonstrates prototypal inheritance, where Dog inherits properties and methods from Animal, and can also add its own.

*/
