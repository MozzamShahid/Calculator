
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let sumEl = document.getElementById("Sum-el")

function show(){
document.getElementById("num1") = num1
document.getElementById("num2") = num2
document.getElementById("num1").innerHTML = num1
document.getElementById("num2").innerHTML = num2
}

function sum(){
    let results = num1 + num2
    sumEl.textContent = "Total: " + results
}

function subtract(){
    let results = num1 - num2
    sumEl.textContent = "Total: " + results
}

function divide(){
    let results = num1 / num2
    sumEl.textContent = "Total: " + results
}

function multiply(){
    let results = num1 * num2
    sumEl.textContent = "Total: " + results
}