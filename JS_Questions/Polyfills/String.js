// split

const str = "apple";

// Important concepts of indexOf
// 'apple'.indexOf('')
// 0
// 'apple'.indexOf('', 1)
// 1
// 'apple'.indexOf('le')
// 3
// 'apple'.indexOf('ap', 4)
// -1

String.prototype.mySplit = function (separator) {
  const str = String(this);
  const result = [];

  // If separator is undefined, return entire string in array
  if (separator === undefined) return [str];

  let start = 0;
  let index;

  while ((index = str.indexOf(separator, start)) !== -1) {
    result.push(str.slice(start, index));
    start = index + separator.length;
  }

  result.push(str.slice(start));

  return result;
};

console.log(str.mySplit("a"));
