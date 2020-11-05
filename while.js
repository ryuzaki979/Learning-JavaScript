//only condition true or fals

let i = 1;
while(i<=10){
    console.log(i+' Julie')
    i++;
}

let isRunning = true;

// console.log(random);
while(isRunning){
    let random = Math.floor(Math.random()*10+1);
    if (random===7){
        console.log( "You are lucky to get 7");
        isRunning= false;
    }
    else{
        console.log( 'you got number '+ random);
    }
}

let love= true;
while(love){
    lovePercentage = Math.floor(Math.random()*100+1);
    if(lovePercentage>=75){
        console.log('you passed your Love exam. you have got '+ lovePercentage + ' %.');
         love= false;
    }else{
        console.log('you failed the test. you have got '+ lovePercentage + ' %.');
    }
};
