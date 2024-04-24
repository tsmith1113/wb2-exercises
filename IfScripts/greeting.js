"use strict";


var morning = "Good Morning!";
var day = "Good Day!";
var evening = "Good Evening";
var time = 15;


if(time < 10){
   console.log(morning);
}
else if(time >= 10 && 10 <= 16.59){
    console.log(day);
}
else if(time >= 17){
    console.log(evening);
}
