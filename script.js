let counter = 0;

let counterEl = document.querySelector("h5.counter");
let incEl = document.querySelector("a.inc");
let resetEl = document.querySelector("a.reset");
let decEl = document.querySelector("a.dec");

decEl.addEventListener("click", function(){
    counterEl.style.color = "red";
    counterEl.textContent = counter;
    counter--;
})

incEl.addEventListener("click", function(){
    counterEl.style.color = "green";
    counterEl.textContent = counter;
    counter++;
})

resetEl.addEventListener("click", function(){
    counter = 0;
    counterEl.style.color = "black";
    counterEl.textContent = counter;
})