var multiArray = [ [], [], [] ];
console.log(multiArray);
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

console.log(matrix);

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

var number = +prompt("Enter a number for multiplication table:");
var length = +prompt("Enter table length:");

for (var i = 1; i <= length; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// a. Counting
console.log("Counting:");
for (var i = 1; i <= 15; i++) {
  console.log(i);
}

// b. Reverse Counting
console.log("Reverse Counting:");
for (var i = 10; i >= 1; i--) {
  console.log(i);
}

// c. Even
console.log("Even Numbers:");
for (var i = 0; i <= 20; i += 2) {
  console.log(i);
}

// d. Odd
console.log("Odd Numbers:");
for (var i = 1; i <= 19; i += 2) {
  console.log(i);
}

// e. Series "k"
console.log("Series:");
for (var i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("What do you want to order?").toLowerCase();

var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    found = true;
    alert(userInput + " is available at index " + i);
    break;
  }
}

if (!found) {
  alert("Sorry, " + userInput + " is not available!");
}

var largest = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

console.log("Largest number is: " + largest);

var A = [24, 53, 78, 91, 12];
var smallest = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}

console.log("Smallest number is: " + smallest);

for (var i = 5; i <= 100; i += 5) {
  console.log(i);
}