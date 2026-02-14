
alert("First Name: Ahmed");
alert("Last Name: Khan");
alert("Email: ahmedkhan@example.com");
alert("Phone Number: 0300-1234567");
alert("Password: myPassword123");


alert("You're learning JavaScript!");


alert("Welcome to my JavaScript practice file!");


var studentName;


var courseName;
courseName = "Web Development";


var teamName = "Code Masters";
alert("Team Name: " + teamName);


var bestMan = "Charlie";
bestMan = "David";


var caseQty;


caseQty = 144;
var num = 9;
var total = num + 5;
alert("Total: " + total);



var firstName = "Ali", lastName = "Raza", age = 25;


var myName, _user, $price, user1, camelCase;

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var sum = num1 + num2;
alert("The sum of " + num1 + " and " + num2 + " is " + sum);
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

document.write("<h3>Results:</h3>");
document.write("Sum: " + sum + "<br>");
document.write("Subtraction: " + difference + "<br>");
document.write("Multiplication: " + product + "<br>");
document.write("Division: " + division + "<br>");
document.write("Modulus: " + modulus + "<br>");

var num;
document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num = num + 7;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<br>");
var tableNum = +prompt("Enter a number to print its multiplication table:");
document.write("<h3>Table of " + tableNum + "</h3>");
for (var i = 1; i <= 10; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
// Celsius to Fahrenheit
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// Fahrenheit to Celsius
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C<br>");
var priceItem1 = 650;
var priceItem2 = 100;
var qtyItem1 = 3;
var qtyItem2 = 7;
var shippingCharges = 100;

var totalCost = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharges;

document.write("<h3>Shopping Cart</h3>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + qtyItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + qtyItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost + " PKR<br>");
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h3>Marks Sheet</h3>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");
var dollars = 10;
var riyals = 25;
var totalPKR = (dollars * 104.80) + (riyals * 28);

document.write("<h3>Currency in PKR</h3>");
document.write("Total Currency in PKR: " + totalPKR + "<br>");
var dollars = 10;
var riyals = 25;
var totalPKR = (dollars * 104.80) + (riyals * 28);

document.write("<h3>Currency in PKR</h3>");
document.write("Total Currency in PKR: " + totalPKR + "<br>");
var currentYear = 2025;
var birthYear = 2002;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h3>Age Calculator</h3>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old.<br>");
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h3>The Geometrizer</h3>");
document.write("Radius of circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br>");
var snack = "Chocolate Chip";
var currentAge = 15;
var maxAge = 65;
var perDay = 3;

var totalNeeded = (maxAge - currentAge) * 365 * perDay;

document.write("<h3>The Lifetime Supply Calculator</h3>");
document.write("Favorite Snack: " + snack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + perDay + "<br>");
document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge + ".<br>");
var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br>");
var userName = prompt("Enter your name:");
alert("Hello " + userName + "! Welcome to JavaScript practice.");
var num = +prompt("Enter a number for multiplication table:", 5);

document.write("<h3>Multiplication Table of " + num + "</h3>");
for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
// a) Get subject names
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

// b) Total marks per subject
var totalMarksPerSubject = 100;

// c & d) Get obtained marks
var obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");
var obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
var obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");

// e) Calculate totals
var totalObtained = obtained1 + obtained2 + obtained3;
var totalMarks = totalMarksPerSubject * 3;
var percentage = (totalObtained / totalMarks) * 100;

// Display as a table
document.write("<h3>Marks Sheet</h3>");
document.write("<table border='1' cellspacing='0' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + obtained1 + "</td><td>" + (obtained1 / 100 * 100) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + obtained2 + "</td><td>" + (obtained2 / 100 * 100) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + obtained3 + "</td><td>" + (obtained3 / 100 * 100) + "%</td></tr>");
document.write("<tr><th></th><th>" + totalMarks + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");
