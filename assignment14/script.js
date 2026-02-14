var a=prompt("What is your city?");
if(a==="Karachi")
{alert("Welcome to the city of light");}
else{
    alert("Welocme!")
}

var b=prompt("What is your gender ?");
if(b==="male"){
    alert("Welcome Sir!");
}
else if(b==="female"){
    alert("Welcome Mam!");
}
else{
    alert("oops");
}

var c=prompt("Enter ka color of traffic signal");
if(c==="Red"){
    alert("must stop!");
}
else if(c==="Yellow"){
    alert("Ready to move!");
}
else if(c==="Green"){
    alert("Move ON!");
}
else{
    alert("oops");
}

var fuel = prompt("Enter remaining fuel in litres:");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
else{
    alert("Your fuel is remaining")
}


var a = 4;
if (++a === 5) {
    alert("(5a) given condition for variable a is true");
}


var b = 82;
if (b++ === 83) {
    alert("(5b) given condition for variable b is true");
}


var c = 12;
if (c++ === 13) {
    alert("(5c) condition 1 is true");
}
if (c === 13) {
    alert("(5c) condition 2 is true");
}
if (++c < 14) {
    alert("(5c) condition 3 is true");
}
if (c === 14) {
    alert("(5c) condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("(5d) The cost equals");
}

if (true) {
    alert("(5e) True");
}
if (false) {
    alert("(5e) False");
}


if ("car" < "cat") {
    alert("(5f) car is smaller than cat");
}



var sub1 = +prompt("Q6: Enter marks of Subject 1:");
var sub2 = +prompt("Enter marks of Subject 2:");
var sub3 = +prompt("Enter marks of Subject 3:");
var totalMarks = +prompt("Enter total marks (e.g., 300):");

var obtained = sub1 + sub2 + sub3;
var percentage = (obtained / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}





var secret = 7; 
var guess = +prompt("Q7: Guess the secret number (1-10):");

if (guess === secret) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secret) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}



var num = +prompt("Q8: Enter a number to check divisibility by 3:");
if (num % 3 === 0) {
    alert("Number is divisible by 3");
} else {
    alert("Number is not divisible by 3");
}



var num2 = +prompt("Q9: Enter a number to check even or odd:");
if (num2 % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}



var T = +prompt("Q10: Enter temperature:");
if (T > 40) {
    alert("It is too hot outside.");
} else if (T > 30) {
    alert("The Weather today is Normal.");
} else if (T > 20) {
    alert("Today’s Weather is cool.");
} else if (T > 10) {
    alert("OMG! Today’s weather is so Cool.");
}


var num1 = +prompt("Q11: Enter first number:");
var num3 = +prompt("Enter second number:");
var op = prompt("Enter operation (+, -, *, /, %):");
var result;

if (op === "+") {
    result = num1 + num3;
} else if (op === "-") {
    result = num1 - num3;
} else if (op === "*") {
    result = num1 * num3;
} else if (op === "/") {
    result = num1 / num3;
} else if (op === "%") {
    result = num1 % num3;
} else {
    result = "Invalid operator!";
}

alert("Result: " + result);