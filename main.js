// let number1 = Math.round(Math.random() * 10) + 1;
// let number2 = Math.round(Math.random() * 10)+1;
// let userAnswer = prompt("Add " + number1 + " and " + number2 + " together!");

// if (userAnswer == number1 + number2){
//     alert("You are correct!");
// } else{
//     alert("Try again!")
// }

// Step 2: Ask user for area of circle.
// let userRadius = prompt("Give a radius");
// if (userRadius < 0) {
//   alert("The radius must not be a negative number");
// }
// let area = Math.PI * Math.pow(userRadius, 2);
// alert("The area of the circle is " + area);

let weight=prompt("Enter weight in lbs");
let height=prompt("Enter height inches");
let bmi =weight/Math.pow(height,2); 
if (bmi<18.5){
    alert("BMI: "+bmi+ " Underweight")
} else if (bmi>=18.5 && bmi<=24.9){
    alert("BMI: "+bmi+ " Normal" )
} else if (bmi>=25 && bmi<=29.9){
    alert("BMI:" +bmi+ "Overweight")
} else { 
    alert("BMI: "+bmi+ " Obese")
}


