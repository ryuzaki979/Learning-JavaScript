let arr = [1,2,3,4,5,6,7,8]
//insert 9 to index 3
// arr[3] = 9;
// console.log(arr);//remove 4 and add 9
// let pushArr= arr.push(9);
// console.log(pushArr);
// let unshiftArr= arr.unshift(9);
// console.log(unshiftArr);
let spilceArr = arr.splice(3,0,99);
console.log('spilceArr is '+ spilceArr);

arr[3]= null;
arr.pop();
arr.shift()
arr.splice(4,1);
console.log(arr);