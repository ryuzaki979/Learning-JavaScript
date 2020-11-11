let obj={
    name:'julie',
    age: 23,
    height: 170
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

let obj2 = Object.assign({},obj);
obj.name ='syeda';

console.log(obj);
console.log(obj2);
