let obj1 = {
    a: 10,
    b: 20
}
let obj2 = {
    a: 10,
    b: 20
}
console.log(obj1===obj2);
//compare memory location. both have different memory location
if(obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true);
}
console.log('Normal obj1 is '+ obj1);
console.log('JSON Obj is '+ JSON.stringify(obj1));
//easy method is JSON.stringify
console.log(JSON.stringify(obj1)===JSON.stringify(obj2));