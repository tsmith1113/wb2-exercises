"use strict";

let a = 10;
let b = 8;
let c = 1000000000;
let smallestMessage;
let biggestMessage;

if (a < b && a < c) {
    smallestMessage = "a is the smallest number";
}

if (a > b && a > c) {
    biggestMessage = "a is the biggest number";
}

if (b < a && b < c) {
    smallestMessage = "b is the smallest number";
}

if (b > a && b > c) {
    biggestMessage = "b is the largest number";
}

if (c < a && c < b) {
    smallestMessage = "c is the smallest number";
}

if (c > a && c > b) {
    biggestMessage = "c is the biggest number";
}

console.log(smallestMessage);
console.log(biggestMessage)