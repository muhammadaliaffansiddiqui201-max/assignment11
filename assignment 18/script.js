alert("Welcome to JavaScript!");

var userName = prompt("Enter your name:");
alert("Your name is: " + userName);

var favColor = prompt("Enter your favorite color:");
alert("Your favorite color is: " + favColor);


var firstName = "Ali";
var lastName = "Siddiqui";
alert(firstName + " " + lastName);

var city = "Karachi";
alert("You live in " + city);

var hobby = "Cricket";
alert("Your hobby is: " + hobby);


var num1 = 5;
var num2 = 10;
alert("Sum: " + (num1 + num2));

var marks = 60;
alert(marks >= 50 ? "Pass" : "Fail");

var age = 20;
if (age > 18) alert("You are above 18");


var myName = "Ali";
var user_age = 25;
var $city = "Lahore";
alert("Legal variable names created");

alert("Examples of illegal names: 123name, var, my-name");

var vars = ["myName", "user_age", "$city"]; 
alert(vars);


var a = 8, b = 3;
alert("Sum: " + (a + b) + ", Difference: " + (a - b));

alert("Product: " + (a * b) + ", Quotient: " + (a / b) + ", Remainder: " + (a % b));

var x = 10;
x++;
alert("Incremented: " + x);


var n = 5;
alert(++n);
alert(--n);

var y = 10;
y += 5;
y -= 2;
alert(y);

var z = 4;
z *= 3;
z /= 2;
alert(z);


var r = (2 + 3) * 4;
alert(r);

var u = 5, v = 2, w = 3;
alert(u + v * w - 2);

var calc = ((5 + 3) * (2 + 2));
alert(calc);

alert(firstName + " " + lastName);

alert("Hello from " + city);

alert("My name is " + firstName + " and I like " + hobby + " a lot!");


var c = prompt("Favorite color?");
alert("Your favorite color is " + c);


var a2 = prompt("Enter age:");
alert("Your age is: " + a2);


var fruit = prompt("Favorite fruit?");
alert(fruit);


var num = 15;
if (num > 10) alert("Number is greater than 10");

var m2 = 55;
if (m2 >= 50) alert("Pass");

var age2 = 16;
if (age2 < 18) alert("Minor");


alert(5 > 3);

var n1 = 10, n2 = 10;
alert(n1 == n2 ? "Numbers are equal" : "Numbers are not equal");
alert(n1 <= n2);


var marks3 = 85;
if (marks3 >= 90) alert("A");
else if (marks3 >= 70) alert("B");
else alert("C");

var age3 = 10;
if (age3 < 12) alert("Child");
else if (age3 < 18) alert("Teen");
else alert("Adult");

var temp = 30;
if (temp > 35) alert("Hot");
else if (temp > 20) alert("Warm");
else alert("Cold");


var num3 = 8;
if (num3 > 0 && num3 % 2 === 0) alert("Positive and Even");

var mk = 80;
if (mk >= 50 && mk <= 100) alert("Valid Marks");

var num4 = 15;
if (num4 % 3 === 0 && num4 % 5 === 0) alert("Divisible by 3 and 5");


var age4 = 18;
var hasID = true;
if (age4 >= 18) {
  if (hasID) alert("Allowed");
  else alert("Not Allowed");
}

var num5 = 6;
if (num5 > 0) {
  if (num5 % 2 === 0) alert("Positive Even");
}

var marks4 = 60;
var extraCredit = true;
if (marks4 >= 50) {
  if (extraCredit) alert("Passed with Extra Credit");
}


var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
alert(fruits);

var numbers = [10, 20, 30, 40];
alert(numbers[0] + " & " + numbers[numbers.length - 1]);

var colors = ["Red", "Blue", "Green"];
alert(colors);

fruits.push("Pineapple");
alert(fruits);

fruits.pop();
alert(fruits);

fruits.unshift("Strawberry");
fruits.shift();
alert(fruits);


var arr = [1, 2, 3, 4];
arr.splice(1, 0, 9);
alert(arr);

arr.splice(2, 1);
alert(arr);

alert(arr.slice(1, 3));


for (let i = 1; i <= 5; i++) alert(i);

for (let i = 0; i < fruits.length; i++) alert(fruits[i]);

for (let i = 1; i <= 10; i++) if (i % 2 !== 0) alert(i);


var arr2 = [5, 10, -3, 8];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < 0) break;
  alert(arr2[i]);
}

var arr3 = [2, 7, 9, 12];
var flag = false;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) flag = true;
}
alert(flag);

var arr4 = [20, 40, 60, 30];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > 50) {
    alert("Stopped at " + arr4[i]);
    break;
  }
}

for (let i = 1; i <= 3; i++){
for (let j = 1; j <= 10; j++) alert(i + " x " + j + " = " + (i*j));
}


var matrix = [[1,2],[3,4],[5,6]];
for (let i=0;i<matrix.length;i++){
for (let j=0;j<matrix[i].length;j++) alert(matrix[i][j]);
}


var a1=[1,2], a2=[3,4];
for (let i of a1){ for (let j of a2){ alert(i+j); }}
var a1=[1,2], a2=[3,4];
for (let i of a1){ for (let j of a2){ alert(i+j); }}


var text = "javascript";
alert(text.toUpperCase());
alert(text.toLowerCase());
alert(text.charAt(0).toUpperCase() + text.slice(1));


var str = "HelloWorld";
alert(str.length);
alert(str.slice(0,3));
alert(str.slice(-3));


alert(str.indexOf("World"));
alert(str.lastIndexOf("l"));
alert(str.includes("Hello"));


alert(str.charAt(2));
alert(str.charAt(str.length - 1));
alert(str.charAt(Math.floor(str.length / 2)));



var txt = "I love JavaScript and JavaScript loves me";
alert(txt.replace("JavaScript", "JS"));
alert(txt.replaceAll("a", "@"));
alert(txt.replace("me", "you"));
