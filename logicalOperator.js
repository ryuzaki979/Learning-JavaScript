//&&- logical and operator- both are true
//||- logical and operator- one of them are true
//!- logical not operator- none of them true

// t && t = t
// t && f = f
// f && t = f
// f && f = f

// t || t = t
// t || f = t
//f || t = t
//f \\ f = f


let a = 10;
let b = 27;
let c = 223;
let d = 4;

if(a>b && b>c){
    console.log(a + ' is greater than '+ b + ' and '+ b + ' is greater than ' + c);
}else {
    console.log('Atleast one of the condition is False');
}
if(a>b || b>c){
    console.log(a + ' is greater than '+ b + 'or '+ b + ' is greater than ' + c);
}else {
    console.log('Both condition is  False');
}

let check = !(a > b);
console.log(check);