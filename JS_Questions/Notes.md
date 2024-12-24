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
