let str= 'julie'
let length = 0;

while(true){
    if(str.charAt(length)==''){
        break
    }else{
        length++
    }
}
console.log(length)
console.log(str.length);

let love = "i Love You";
let loveLength= 0;
while(true){
    if(love.charAt(loveLength)==''){
        break;
    }else{
        loveLength++;
    }
}
let fuck = 'Fuck you'
let fuckLength =0;
while(true){
    if(fuck.charAt(fuckLength)===''){
        break;
    }
    else{
        fuckLength++;
    }
}
console.log('The Length of '+ fuck+ ' is ' + fuckLength);