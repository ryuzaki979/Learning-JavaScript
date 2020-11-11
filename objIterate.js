
let obj={
    name:'julie',
    age: 23,
    height: 170
}

console.log('name' in obj);
console.log('ame' in obj);
for(let i in obj){
    console.log(i + ' is ' + obj[i]);
}

