let number1 = Math.round(Math.random() * 10) + 1;
let number2 = Math.round(Math.random() * 10)+1;
let userAnswer = prompt("Add " + number1 + " and " + number2 + " together!");

if (userAnswer == number1 + number2){
    alert("You are correct!");
} else{
    alert("Try again!")
}