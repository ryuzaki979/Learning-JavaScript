let date = new Date();

let today = date.getDay();
//0-Sunday //1- MOnday

switch(today){
    case 0:
        console.log('Today is Sunday');
        break;
    case 1 :
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3 :
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5 :
        console.log('Today is Friday');
        break;
    case 6 :
        console.log('Today is Saturday');
        break;
}

//checking the availibility of a ftuit store

// let fruit = prompt('What do you want to take sir?').toLowerCase();

// switch (fruit) {
//     case 'mango':
//         console.log('Yep, Mango is available');
//         break;
//     case 'orange':
//         console.log('we are  ranout of orange');
//         break;
//     case 'kiwi' :
//         console.log('we have only two box left sir');
//         break;
//     default:
//         console.log('we dont sell '+ fruit);
//         break;

// };

let a = 3;
let b = 4;

let calc = prompt('plus/minus/multiply/divition?');

switch(calc){
    case 'plus':
        console.log(a+b);
        break;
    case 'minus':
        console.log(a-b);
        break;
    case 'multiply':
        console.log(a*b);
        break;
    case 'divition':
        console.log(a/b);
        break;
    default:
        console.log( 'We dont have that Option');
        break;
};

