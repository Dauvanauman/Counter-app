let plusButton = document.querySelector(".plus-btn");
let MinusButton = document.querySelector(".minus-btn");
let Count = document.querySelector(".count")  ;
let inputField = document.querySelector(".input-value");
let reset_button = document.querySelector(".reset-button");


plusButton.addEventListener("click", ()=>{
 
    let countvalue = parseInt(Count.innerText);
    let inputfieldeValue = parseInt(inputField.value)
    Count.textContent  = countvalue +  inputfieldeValue
 

 
})

MinusButton.addEventListener("click", ()=>{
    let countvalue = parseInt(Count.innerText);
    let inputfieldeValue = parseInt(inputField.value)
    Count.textContent  = countvalue -  inputfieldeValue
 
})

reset_button.addEventListener("click", ()=>{
    Count.textContent = 0;
})