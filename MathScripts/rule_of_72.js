"use strict";
//define our kown values.
var savingsAccountWorth = 1000;

var interestRate ;
var numberOfYears;

//calculate the known values

var newWorth;
newWorth = savingsAccountWorth * 2;

numberOfYears = 10;

interestRate = 72 / numberOfYears;



//display the result
var message = "At a " +interestRate+ " intrest rate, your savings accout"
+ " will be worth $" + newWorth.toFixed(2) + " in " + numberOfYears.toFixed(1) + " years."


console.log(message);