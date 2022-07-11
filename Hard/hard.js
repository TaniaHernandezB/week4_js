// Tom info
var tHeight = 9;
var tMass = 8;
// Jerry info
var jHeight = 10;
var jMass = 45;

// BMI = mass / height ^2 = mass / (height * height)
function bmi(num1, num2){
    return (num1/ (num2*num2))
}

var tomBMI = bmi(tMass, tHeight);
var jerryBMI = bmi(jMass, jHeight);
var final = Boolean(tomBMI>jerryBMI);
console.log(`Is Tom's BMI higher than Jerry's? ${final}`)
// Is Tom's BMI higher than Jerry's?

