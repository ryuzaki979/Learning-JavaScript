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