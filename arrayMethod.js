let arr = [1,3,5,7,9];
let sarray= [2,4,6,8,10]
//console.log(arr.join('|'));
// arr.fill(0)
// console.log(arr);

let newArray = arr.concat(sarray);
console.log(newArray);

console.log(Array.isArray(arr));
var newArray2 = Array.from(arr);
console.log(newArray2);