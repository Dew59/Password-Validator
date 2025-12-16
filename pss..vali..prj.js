let input = document.getElementById("inputfield");
let eyespan = document.getElementById("eyespan");
let policydiv = document.getElementById("policydiv");

let lenght = document.getElementById("lenght");
let number = document.getElementById("number");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let symbol = document.getElementById("symbol");
console.log(lenght);

eyespan.addEventListener("click", eyespans);
function eyespans() {
    if (input.type === "password") {
        input.type = "text"
        eyespan.style.color = "maroon"
    } else {
        input.type = "password"
        eyespan.style.color = "black"
    }
};

input.addEventListener("click", policyDisplay);
function policyDisplay() {
    policydiv.style.display = "block"
};

input.addEventListener("keyup", policies);
function policies(params) {
    let password = input.value;
    if (password.length >= 8) {
        lenght.classList.add("valid");
    } else {
        lenght.classList.remove("valid")
    }

    let numbers = /[0-9]/g
    if (password.match(numbers)) {
       number.classList.add("valid");
    } else {
       number.classList.remove("valid") 
    }
    let lowercases = /[a-z]/g
    if (password.match(lowercases)) {
       lowercase.classList.add("valid");
    } else {
       lowercase.classList.remove("valid") 
    }
    let uppercases = /[A-Z]/g
    if (password.match(uppercases)) {
       uppercase.classList.add("valid");
    } else {
       uppercase.classList.remove("valid") 
    }
    let symbols = /[!@#$%^&?><*]/g
    if (password.match(symbols)) {
       symbol.classList.add("valid");
    } else {
       symbol.classList.remove("valid") 
    }
}