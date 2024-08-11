// map, filter, reduce, flat

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
