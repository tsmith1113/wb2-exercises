"use strict";

window.onload = init;


function init(){
    const helloBtnElement = document.getElementById("helloBtn");
    helloBtnElement.onclick = onHelloClicked;
}


function onHelloClicked(){
alert('Hi there!');

}