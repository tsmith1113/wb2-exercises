"use strict";

let departmentCode = 2;
let departmentName;
switch (departmentCode) {
 case 1:
    departmentName = "Marketing";
 break;
 case 5:
    departmentName = "Human Resources";
 break;
 case 10:
    departmentName = "Accounting";
 break;
 case 12:
    departmentName = "Legal";
 break;
 case 18:
    departmentName = "IT";
 break;
 case 20:
    departmentName = "Customer Relations";
 break;
 default:
    departmentName = "Unknown";
}

console.log(departmentName);