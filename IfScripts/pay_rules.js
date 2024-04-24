"use strict";

var payRate = 25.00;
var hoursWorked = 40;
var grossPay;


grossPay = 0;

if(hoursWorked <= 40){

grossPay = (payRate *  hoursWorked);
}

else{
    var overTimeHours = hoursWorked - 40;
    var overTimeRate = payRate * 1.5;
    var basePay = 40 * payRate;
    var overTimepay = overTimeHours * overTimeRate;
    

    grossPay = basePay + overTimepay;
}

console.log(grossPay);

