// Deep clone any variable type
function deepCopy(value) {
  if (Array.isArray(value)) {
    return value.map((item) => deepCopy(item));
  }
  if (value !== null && typeof value === "object") {
    const result = {};
    for (const key in value) {
      result[key] = deepCopy(value[key]);
    }
    return result;
  }
  return value;
}

const obj1 = {
  name: "mani",
  place: {
    area: "chennai",
    zip: {
      fist: "601",
      second: "204",
    },
  },
};

//Another variation using for..in loop for both array and objects

function deepClone(obj) {
  if (obj && typeof obj === "object") {
    const cloned = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      cloned[key] = deepClone(obj[key]);
    }
    return cloned;
  }
  return obj;
}

const newObj = deepClone(obj1);
obj1.place.zip.second = "601"; // will not impact new object

console.log(obj1); //obj1.place.zip.second = "601"
console.log(newObj); //newObj.place.zip.second = "204"
