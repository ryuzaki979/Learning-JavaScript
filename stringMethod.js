//concat
let a ="Julie"
let b = "    is my   neighbour   "

let c = a.concat(' ',b);
console.log(c);
let d = c.substr(0,5);
console.log(d);

console.log(c.charAt(0));
console.log(c.endsWith('r'));
console.log(c.toUpperCase());
console.log(c.toLowerCase());
console.log(b);
console.log(b.trim());
let julie = d.split('');
for(i=0;i<julie.length; i++){
    console.log(julie[i]);
}