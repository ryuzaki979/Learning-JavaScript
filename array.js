let array = ['julie', 3, 'santo'];

console.log(array);

console.log(typeof(array));
console.log(array[3]);
let length = 0;
while(true){
    if(array[length]==undefined){
        break;
    }
    else{
        length++;
    }
}
console.log(length);
console.log(array.length);
let arr = [1,2,3,4,5];
console.log(arr[4]);
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.push(6);
console.log(arr);
arr.shift();
console.log(arr);
arr[2]= 10;
console.log(arr);
let array2= Array();
console.log(array2);