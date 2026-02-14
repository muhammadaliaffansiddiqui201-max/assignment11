function showDateTime() {
  var now = new Date();
  document.write(now);
}
showDateTime();

function greetUser(firstName, lastName) {
  document.write("Hello " + firstName + " " + lastName);
}
greetUser("Ali", "Khan");

function addNumbers(num1, num2) {
  return num1 + num2;
}

var result = addNumbers(5, 10);
document.write(result);

function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "Invalid Operator";
  }
}

document.write(calculator(10, 5, "+"));

function square(num) {
  return num * num;
}

document.write(square(4));

function factorial(num) {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

document.write(factorial(5));

function counting(start, end) {
  for (var i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}

counting(1, 10);

function calculateHypotenuse(base, perpendicular) {
  
  function calculateSquare(x) {
    return x * x;
  }

  var hypotenuse = Math.sqrt(
    calculateSquare(base) + calculateSquare(perpendicular)
  );

  document.write(hypotenuse);
}

calculateHypotenuse(3, 4);

function area(width, height) {
  return width * height;
}

document.write(area(5, 10));

var w = 7;
var h = 4;

document.write(area(w, h));

function palindrome(word) {
  var reverse = word.split("").reverse().join("");
  if (word === reverse) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}

document.write(palindrome("madam"));

function capitalize(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] =
      words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

document.write(capitalize("the quick brown fox"));

function longestWord(str) {
  var words = str.split(" ");
  var longest = "";

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

document.write(longestWord("Web Development Tutorial"));

function countLetter(str, letter) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

document.write(countLetter("JSResourceS.com", "o"));

function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  document.write("The circumference is " + circumference + "<br>");
}

function calcArea(radius) {
  var area = Math.PI * radius * radius;
  document.write("The area is " + area);
}

calcCircumference(5);
calcArea(5);
