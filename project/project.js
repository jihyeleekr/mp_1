let first_num = document.getElementById("first-number").value;
let first = Number(first_num);
let second_num = document.getElementById("second-number").value;
let second = Number(second_num);
// Addition Button Function
function addition(){
    let first_num = document.getElementById("first-number").value;
    let first = Number(first_num);
    let second_num = document.getElementById("second-number").value;
    let second = Number(second_num);

    const output = first + second;
    let outputElement = document.getElementById("output");

    if (output < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }

    outputElement.innerHTML = output;
}

//Subtraction Button Function
function subtraction(){
    let first_num = document.getElementById("first-number").value;
    let first = Number(first_num);
    let second_num = document.getElementById("second-number").value;
    let second = Number(second_num);

    const output = first - second;
    let outputElement = document.getElementById("output");

    if (output < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }

    outputElement.innerHTML = output;
}

//Multiplication Button Function
function multiplication(){
    let first_num = document.getElementById("first-number").value;
    let first = Number(first_num);
    let second_num = document.getElementById("second-number").value;
    let second = Number(second_num);

    const output = first * second;
    let outputElement = document.getElementById("output");

    if (output < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }

    outputElement.innerHTML = output;
}

//Division Button Function
function division(){
    let first_num = document.getElementById("first-number").value;
    let first = Number(first_num);
    let second_num = document.getElementById("second-number").value;
    let second = Number(second_num);

    const output = first / second;
    let outputElement = document.getElementById("output");

    if (output < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }

    outputElement.innerHTML = output;
}

//Exponential Button Function
function exponential(){
    let first_num = document.getElementById("first-number").value;
    let first = Number(first_num);
    let second_num = document.getElementById("second-number").value;
    let second = Number(second_num);

    let output = 1;

    if (second === 0) {
        output = 1;
    } else if (second > 0) {
        for (let i = 0; i < second; i++) {
            output *= first;
        }
    } else {
        for (let i = 0; i < (second  * (-1)); i++) {
            output *= first;
        }
        output = 1 / output;
    }

    let outputElement = document.getElementById("output");


    if (output < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }

    outputElement.innerHTML = output;
}

//Clear Function
function clear_function(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";

}