// The setTimeout method is used to execute a
// function after a specified period of time.

setTimeout(function(){
    console.log("hello SandyPandy you fucking awwwwsome");
}, 5000); //seconds 

//1. select the class .loader

const loading = document.querySelector(".loader");

//2. use setTimeout

setTimeout(function(){
    loading.innerHTML = "finished downloading";
}, 5000);

//3. Change the inner.Html of the loading

const newHtml = document.querySelector(".loader");
newHtml.innerText = "Updated text";

console.log(newHtml);


