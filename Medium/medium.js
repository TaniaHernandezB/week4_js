// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
var num = prompt("What number?");
var month;
if (num == 1){
    month = 'January'
} 
else if (num == 2){
    month = 'February'
} 
else if (num == 3){
    month = 'March'
} 
else if (num == 4){
    month = 'April'
} 
else if (num == 5){
    month = 'May'
} 
else if (num == 6){
    month = 'June'
} 
else if (num == 7){
    month = 'July'
} 
else if (num == 8){
    month = 'August'
} 
else if (num == 9){
    month = 'September'
} 
else if (num == 10){
    month = 'October'
} 
else if (num == 11){
    month = 'November'
}
else if (num == 12){
    month = 'December'
}else if (num > 12 || num <1 ){
    alert("Please input a valid number")
}

console.log(month)