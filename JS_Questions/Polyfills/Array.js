// map, filter, reduce, flat

/* *********************************************************************** */
/* isArray
/* *********************************************************************** */

Array.isArrayChecker = function(arg){
return Object.prototype.toString.call(arg) === '[object Array]';
}

console.log(Array.isArrayChecker('aa'))
/* *********************************************************************** */
/* Note: to detect any datatype using Object proto method
/* Object.prototype.toString.call({}) --> '[object Object]'
/* Object.prototype.toString.call(function(){}) --> '[object Function]'
/* *********************************************************************** */
/* Flat
/* *********************************************************************** */
const arrToBeFlat = [1, 2, 3, , [4, 5, [[[6]]]]];

Array.prototype.myFlat = function flatArray(level = 1) {
  const arr = this;
  const result = [];
  arr.forEach((element) => {
    if (Array.isArray(element) && level > 0) {
      result.push(...flatArray.call(element, level - 1));
    } else {
      result.push(element);
    }
  });
  return result;
};

console.log("flat", arrToBeFlat.flat(2));
console.log("myflat", arrToBeFlat.myFlat(2));

/* *********************************************************************** */
/* Map
/* *********************************************************************** */
const numbers = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callBack) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callBack(arr[i], i, arr));
  }
  return result;
};

console.log(
  "map",
  numbers.map((ele) => ele * 2)
);
console.log(
  "myMap",
  numbers.myMap((ele) => ele * 2)
);

/* *********************************************************************** */
/* Filter
/* *********************************************************************** */

Array.prototype.myFilter = function (callBack) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(
  "filter",
  numbers.filter((ele) => ele % 2 === 0)
);
console.log(
  "myFilter",
  numbers.myFilter((ele) => ele % 2 === 0)
);

/* *********************************************************************** */
/* Reduce
/* *********************************************************************** */

Array.prototype.myReduce = function (callBack, intialValue) {
  const arr = this;
  let accumulator = intialValue;
  let startIndex = 0;
  if (intialValue === undefined) {
    startIndex = 1;
    accumulator = arr[0];
  }
  for (let i = startIndex; i < arr.length; i++) {
    total = callBack(accumulator, arr[i], i, arr);
  }
  return total;
};

console.log(
  "reduce",
  numbers.reduce((accm, curr) => {
    return accm + curr;
  }, 0)
);
console.log(
  "myReduce",
  numbers.myReduce((accm, curr) => {
    return accm + curr;
  }, 10)
);
