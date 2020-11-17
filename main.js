// let number1 = Math.round(Math.random() * 10) + 1;
// let number2 = Math.round(Math.random() * 10)+1;
// let userAnswer = prompt("Add " + number1 + " and " + number2 + " together!");

// if (userAnswer == number1 + number2){
//     alert("You are correct!");
// } else{
//     alert("Try again!")
// }

// Step 2: Ask user for area of circle.
let userRadius = prompt("Give a radius");
if (userRadius < 0) {
  alert("The radius must not be a negative number");
}
let area = Math.PI * Math.pow(userRadius, 2);
alert("The area of the circle is " + area);
