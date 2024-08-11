// Deep clone any variable type
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

const newObj = deepClone(obj1);
obj1.place.zip.second = "601"; // will not impact new object

console.log(obj1); //obj1.place.zip.second = "601"
console.log(newObj); //newObj.place.zip.second = "204"
