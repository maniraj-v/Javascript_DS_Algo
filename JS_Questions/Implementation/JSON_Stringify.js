const obj = {
  name: "mani",
  age: 23,
  hobbies: ["movies", "cricket"],
};
obj.circular = obj;

const arr = ["mani", "raj"];

console.log("original conversion");
// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(arr));

JSON.myStringify = function (input) {
  const weakset = new WeakSet();

  function traverse(inputData) {
    if (typeof inputData === "string") {
      return `"${inputData}"`;
    }

    if (
      typeof inputData === "number" ||
      typeof inputData === "boolean" ||
      inputData === null
    ) {
      return String(inputData);
    }

    if (typeof inputData === "function" || typeof inputData === "undefined") {
      return undefined;
    }

    if (Array.isArray(inputData)) {
      let stringifiedArray = [];
      for (let data of inputData) {
        const value = traverse(data);
        if (value !== undefined) {
          stringifiedArray.push(value);
        }
      }
      return "[" + stringifiedArray.join(",") + "]";
    }

    if (inputData && typeof inputData === "object") {
      if (weakset.has(inputData)) {
        throw new TypeError("Object has circular reference");
      }
      weakset.add(inputData);
      let stringifiedObject = [];
      for (let key in inputData) {
        const value = traverse(inputData[key]);
        if (value !== undefined) {
          stringifiedObject.push(`"${key}":${value}`);
        }
      }
      return "{" + stringifiedObject.join(",") + "}";
    }

    return undefined;
  }
  return traverse(input);
};

console.log("custom conversion");
console.log(JSON.myStringify(obj));
console.log(JSON.myStringify(arr));
