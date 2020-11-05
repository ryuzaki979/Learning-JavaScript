// 1
// 1 2
// 1 2 3
// 1 2 3 4 5
let n= 10;
for(let i= 1; i<=n; i++){
    let result = '';
    for(j=1; j<=i; j++){
        result+= j+ ' ';
    }
    console.log(result);
}
// *****
// *****
// *****
// *****

let n1= 10
for (let i=1; i<=n1; i++){
    let result = '';
    for(let j=1; j<=n1; j++){
        result+= '* ';
    }
    console.log(result);
}