// JavaScript gives us several different
// statements and methods for repeating a process
// over and over or looping through arrays and nested objects.

// Common to all of them is we first specify under what conditions
// the loop or iteration should run in the statement declaration.
// e.g i <= 10 or i < 10 or i < arr.length (Number of elements in the array)

// And then we specify what should happen at each iteration in the
// body of the statement.
//
// Let's look at some of the most common
// and useful iteration statements for arrays and objects.


// I've set up an array called stuff that has some items
// in it and a nested object called nested objects.

// example we will do : We want to loop throw the array and the nested object
// and display them on the browser as we used to do

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const nestedObjects = {
    item01: {
        name: "piggy",
        type: "toy",
        weight: 30,
    },
    item02: {
        name: "headlamp",
        type: "equipment",
        weight: 120,
    },
    item03: {
        name: "pen",
        type: "tool",
        weight: 30,
    },
    item04: {
        name: "pencil",
        type: "tool",
        weight: 30,
    },
    item05: {
        name: "eraser",
        type: "tool",
        weight: 40,
    },
    item06: {
        name: "water bottle",
        type: "equipment",
        weight: 1300,
    },
};

// what about objects, does modern javascript give us something 
//new we can use. YES it is 

//for... in loop and objects 

// looping on an object

const nestedObjects = {
    item01: {
        name: "piggy",
        type: "toy",
        weight: 30,
    },
    item02: {
        name: "headlamp",
        type: "equipment",
        weight: 120,
    },
    item03: {
        name: "pen",
        type: "tool",
        weight: 30,
    },
    item04: {
        name: "pencil",
        type: "tool",
        weight: 30,
    },
    item05: {
        name: "eraser",
        type: "tool",
        weight: 40,
    },
    item06: {
        name: "water bottle",
        type: "equipment",
        weight: 1300,
    },
};

for(let singleObject in nestedObjects){
    let listItem = document.createElement("li");
    listItem.innerHTML = `Name: ${nestedObjects[singleObject].name}`;
    stuffList.append(listItem);
}

article.append(stuffList);

//1
//a. select the article 
//b. create a tag using JavaScript
//c. loop on the array
//d. create another tag li
//e. add the items in the array on the inner html of this tag
//f. add al the new tags in the parent tag. ul
//add everything in the article tag

const article = document.querySelector("article");

let stuffList = document.createElement("ul");

for (let i = 0; i < stuffList.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = stuff[i];
    stuffList.append(listItem);
}

//item of array or For of MODERN JAVASCRIPT
// Keep iterating though the array so far if you have items inside

for(const item of stuff){
    console.log(item);
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    stuffList.append(listItem);
}

article.append(stuffList);

//forEach

stuff.forEach(() => {
    //do stuff here
});

stuff.forEach(function (){
    //do stuff here
});

article.append(stuffList);


//TASK
stuff.forEach( (item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    stuffList.append(listItem);
});

stuff.forEach( (item) => {

});