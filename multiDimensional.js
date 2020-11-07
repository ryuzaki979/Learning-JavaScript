let multiArr = [
    [78,71,80,90],
    [80,75,90,86],
    [71,75,79,80]
]
// console.log(multiArr[0]);
// console.log(multiArr[1]);
// console.log(multiArr[2]);
// console.log(multiArr[1][0]);
// console.log(multiArr[2][1]);

for(i= 0; i<multiArr.length; i++){
    console.log(multiArr[i]);
    for(j=0;j<multiArr[i].length;j++){
        console.log(multiArr[i][j]);
    }
}
