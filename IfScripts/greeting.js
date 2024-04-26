"use strict";



let time = 3;
let greeting;

if(time < 10){
   greeting = "Good Morning!";
}
else if(time >= 10 && 10 <= 16.59){
   greeting =  "Good Day!";
}
else if(time >= 17){
   greeting = "Good Evening";
}

console.log(greeting);