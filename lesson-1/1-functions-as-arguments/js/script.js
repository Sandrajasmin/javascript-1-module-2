// These are often called callbacks. It is very common
// to pass functions as arguments to other ***
// functions and have the receiving function execute them.

// normal way to create functions


//1. create two function one is normal function and the other is
// a function which calls itself

function showMeMessage() {
    console.log("Hello one");
}

showMeMessage(); // this will work

//IIFE instantly 
(function doSomething() {
    console.log("heisannsveisan")
})();


// 2.HOISTING

// a. call a function the create it 

showMeMessage(); //this will work

function showMeMessage() {
    console.log("Hello one");
}

//b. Call an anonymous function the creat it

doSomething(); // Error this doesn't work

const doSomething = function () {
    //do some stuff
    console.log("hello i am a anonymous function");
}


function logTheArgument(someFunction) {
    console.log(someFunction);
}

logTheArgument(function() {
    console.log("LiL JaS");
})

function logTheType(someArgument) { //has one parameter
    console.log(someArgument);
}

logTheType("Lil JaS");
console.log(98989898);

const obj = {};

logTheType(obj); //object

const someArray = [];

logTheType(someArray); //object

//creat a function whit argument

function justFunction (){
    console.log("hello i am a fucking function");
}

logTheType(justFunction); //function

//

const justAFuckingFunction = function() {
    console.log("hello i am a fucking function");
}

logTheType(justAFuckingFunction)

