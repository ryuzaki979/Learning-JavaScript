//when there is more than 2 possibilites then you have to use esle if

let a = 20;
let b = 20;
//---------logic-------//
//1st- a>b
//2nd- a<b
//3rd- a=b 

if (a>b){
    console.log(a + " is greater than " + a);
}
else if(a<b){
    console.log(b + " is greater than  " + a);
}
else{
    console.log("They are equal");
}

n = 1;
if(n===0){
    console.log( n + " is zero");
}else if(n%2===0){
    console.log(n+ ' is Even');
}else{
    console.log(n+ ' is Odd');
}