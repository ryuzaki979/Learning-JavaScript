// let array = [1,2,3,4,5,6,7,8,9,10]

// for (i = 0; i< (array.length/2);i++){
//     let temp = array[i];
//     console.log(array[i]);
//     array[i]= array[array.length-1-i];
//     array[array.length-1-i] = temp;
    
// }
// console.log(array);
let arr= [0,25,50,75,100];
for (i=0; i<(arr.length/2);i++){
    console.log('i is '+ arr[i]);
    let temp = arr[i];
    console.log(temp);
    let revFirst= arr[i]= arr[arr.length-1-i];
    console.log('revFirst is ' + revFirst);
   let revLast= arr[arr.length-1-i]= temp;
   console.log('revLast is '+ revLast);
   console.log(arr);
}

console.log('simple thing is '+ arr.reverse());