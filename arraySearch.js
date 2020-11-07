let arr = [2,7,2,6,8,4,55,9,89,27];

let find = 2;
let isFound= false;
for(i=0; i<arr.length;i++){
    if(arr[i]===find){
        console.log('we found 10 at '+ i + ' index');
        isFound= true;
        break;
    }
}
if(!isFound){
    console.log("we didn't found "+ find);
}