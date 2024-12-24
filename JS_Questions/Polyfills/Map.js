const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

// Important concept - Map iteration
// 1.Iteration using Map forEach method
// note: first value, then key
map.forEach((value, key) => {
    console.log(key, value);  // Logs: a 1, b 2, c 3
});

// 2.Iteration by converting to Array and then use forEach using Array.from(map) or spread operator [...map]
Array.from(map).forEach(([key, value]) => {
    console.log(key, value);  // Logs: a 1, b 2, c 3
});
