"use strict";

var salary;
var taxes;
var monthlyTaxes;


salary = 6000
taxes = .23;


monthlyTaxes= salary * taxes;
monthlyTaxes = Math.round(monthlyTaxes * 100) / 100;

console.log("Taxes taken out for the month: "+monthlyTaxes);