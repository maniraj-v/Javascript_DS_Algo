## Object hasOwn vs hasOwnProperty

```js
const obj = {
    hasOwnProperty: 'not a method',
    name: 'Alice'
};
console.log(Object.hasOwn(obj, 'name')); // true
console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('toString')); // false (inherited from Object.prototype)
```

## Global isNaN vs Number isNaN

isNaN() first tries to convert the value to a number, and then checks if that value is NaN. If the value cannot be converted into a number, it returns true, even if the original value wasn't NaN.

Number.isNaN() checks if the value is exactly NaN and does not perform any type coercion. It will return true only if the value is already NaN, and false for any other value, even if it can't be coerced into a number.

```js
console.log(isNaN('123a'));          // true
console.log(Number.isNaN('123a'));   // false, because '123a' is not NaN

console.log(isNaN(NaN));            // true, because the value is NaN
console.log(Number.isNaN(NaN));     // true, because the value is NaN

console.log(isNaN(undefined));      // true, because undefined coerces to NaN
console.log(Number.isNaN(undefined)); // false, because undefined is not NaN

```

## What would be the output of the following code snippet if we execute it as it is.
```js
let number;
for (var i = 0; i < 5; i++) {
  number = i;
  setTimeout(function() {
    console.log(number);
  }, 1000);
}
```

## What would be the output of the following code snippet if we execute it as it is.
```js
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}
```

## What would be the output of the following code snippet if we execute it as it is.
```js
const first = 2 in [1, 2];
const second = '2' in [0, 1, 2];

console.log(first, second);
```

## What would be the output of the following code snippet if we execute it as it is.
```js
function sayName() {
  setTimeout(() => {
    console.log(this.name);
  }, 1000);
}
sayName.call({
  name: 'Yomesh'
});

```
Answer - Arrow function dont have 'this' , depends on parent scope for it. 
Arrow function 'this' depends on where function is declared
Normal function 'this' depends on where function is invoked
Note: We are passing an arrow function to the setTimeout. Arrow functions retains the scope of their definition. Hence, when the arrow function will be called then context will be same as sayName function.
