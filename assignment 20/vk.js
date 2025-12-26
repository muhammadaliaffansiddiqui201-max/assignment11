function print(text) {
  document.body.innerHTML += text + "<br><br>";
}

function showDatetime(){
    var today = new Date();
   document.write(today + "<br><br>");
}
showDatetime();



function greetUser(firstName,lastName){
  var fullName = firstName +" "+ lastName;
   document.write("Hi  " + fullName + "<br><br>");

}
greetUser("Ali", "Affan");

function addNumber(){
    var num1=+prompt("enter number");
    var num2=+prompt("enter number");
    var sum= num1 + num2;
     document.write("Ans = " + sum  + "<br><br>");
}
 addNumber()

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
    return "Invalid operator";
  }
}

document.write("Ans = " + calculator(40, 5, "/") + "<br><br>");

function square(num){
    return num * num
}
document.write("Ans = " + square(4) + "<br><br>");


function factorial(num) {
  var result = 1;

  for (var i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}

document.write("Ans =" + factorial(5) + "<br><br>");


function showCounting() {
  for (var i = 1; i <= 10; i++) {
    document.write( i + "<br>" );
  }
}

showCounting();

function calculateHypotenuse(base, perpendicular) {

  function calculateSquare(num) {
    return num * num;
  }

  var hypotenuse = Math.sqrt(
    calculateSquare(base) + calculateSquare(perpendicular)
  );

  return hypotenuse;
}

document.write( "<br><br>" + "Ans =" + calculateHypotenuse(3, 4)  + "<br><br>");


function area(width, height) {
  return width * height;
}

document.write("Ans =" + area(5, 10)   + "<br><br>");

function isPalindrome(str) {
  var reversed = str.split("").reverse().join("");
  return str === reversed;
}

document.write("Ans =" +  isPalindrome("madam")   + "<br><br>");

function capitalizeWords(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] =
      words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

document.write("Ans =" + capitalizeWords("the quick brown fox") + "<br><br>");

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

document.write("Ans =" + longestWord("Web Development Tutorial") + "<br><br>");


function countLetter(str, letter) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }

  return count;
}

document.write("Ans =" + countLetter("JSResourceS.com", "o") + "<br><br>");


function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  document.write("Ans =" + "The circumference is " + circumference + "<br>");
}

function calcArea(radius) {
  var area = Math.PI * radius * radius;
  document.write("The area is " + area);
}

calcCircumference(5);
calcArea(5);
