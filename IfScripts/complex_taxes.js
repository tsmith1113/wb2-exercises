"use strict";

var payRate = 10;
var hoursWorked = 45;
var grosspayweekly;
var grosspyannual;
var stat = "single";
var tax;
var taxRatePercent;
var weeklyTaxWithholding;
var netpayWeekly;

grosspayweekly = payRate + hoursWorked;
grosspyannual = grosspayweekly * 52;

if(stat == "single")
if( grosspyannual < 12000){
    taxRatePercent = 0.05;
}

else if(grosspyannual < 25000){
    taxRatePercent = 0.1;
}
else if(grosspyannual < 25000){
    taxRatePercent = 0.15;
}
else{
    taxRatePercent = 0.2;
}

else if(stat == "joint"){

}
else{
    console.log("ERROR INVALID FILING STATUS")
}

// if(annual < 12000 && stat == "single"){
//     taxRatePercent = 0.05
// }

// else if (annual >= 12000 && 12000<= && stat == "single"){
//     taxRatePercent = 0.1
// }

// else if (annual >= 25000 && 25000<= && stat == "single"){
//     taxRatePercent = 0.15
// }
// else if (annual >= 75000 && stat == "single"){
//     taxRatePercent =  0.2
// }

// else if(annual < 12000 && stat == "joint"){
//     taxRatePercent = 0;
// }
// else if(annual >= 12000 && 12000<=24999 && stat == "joint"){
//     taxRatePercent = 
// }
// else if(annual >= 25000 && 25000<=74999 && stat == "joint"){
//     taxRatePercent = 0.11
// }
// else if(annual >= 75000 && stat == "joint"){
//     taxRatePercent = 0.2
// }

weeklyTaxWithholding = grossPay * taxRatePercent;
netpayWeekly = grosspayweekly - weeklyTaxWithholding;

console.log(grosspyannual);
console.log(taxRatePercent);

console.log(netpayWeekly);
