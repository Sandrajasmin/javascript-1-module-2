// The setInterval method is similar to
// setTimeout but it executes a function at
// a certain interval until it is cleared.
/*
setInterval(function(){
    console.log("hello i am here at Noroff");
}, 2000);

*/

let count = 0;
const IntervalId = setInterval(function () {
    console.log("here");
    count = count + 1;
    console.log(count);
    if (count === 5) {
        clearInterval(intervalId);
    }

}, 1000);

//wont work

// Example question 

// I want to add li to the ul with class

// .container li with values from 1 to 10 every 2 seconds

// Example Question

// I want to add li to the ul with class
// .container li with values from 1 to 10 every 2 seconds

// 1. Select the .container ul

const container = document.querySelector(".container");

// 2. declare a count variable

let counter = 0;

// 3. setInterval Method

const setIntervalId = setInterval(function () {
    //counter++;
    counter = counter + 1;
    const listItem = document.createElement("li");
    listItem.innerHTML = counter;
    container.append(listItem);
    if (count === 10) {
        clearInterval(intervalId);
    }
}, 2000);

// 4. you need to put the time you want this interval to keep running
// 5. do the increment
// 6. Create the li
// 7. add to the innerHTML of this li the count.
// 8. use append  use apend to add the li to the ul

// OR >> container.innerHTML += <li>${countSecond}</li>;

// 9.  YOU NEED TO assign the setInterval to a variable
// 10.  you need to check if the count is > than 10 then you clear
// the interval

