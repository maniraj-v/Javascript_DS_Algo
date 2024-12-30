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
