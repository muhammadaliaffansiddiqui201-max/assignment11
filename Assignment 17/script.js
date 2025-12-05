
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello " + fullName);

enableModel = prompt("Enter your favorite mobile phone model:");
document.write("Length of input: " + enableModel.length + "<br>");

let word = "Pakistani";
document.write("Index of 'n': " + word.indexOf("n") + "<br>");

let text = "Hello World";
document.write("Last index of 'l': " + text.lastIndexOf("l") + "<br>");

document.write("Character at 3rd index of 'Pakistani': " + word.charAt(3) + "<br>");

let first2 = prompt("Enter first name again:");
let last2 = prompt("Enter last name again:");
let full2 = first2.concat(" ", last2);
alert("Hello " + full2);

let city = "Hyderabad";
document.write(city.replace("Hyder", "Islam") + "<br>");

let message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message.replace(/and/g, "&") + "<br>");
let str = "472";
document.write("Value: " + Number(str) + " Type: number<br>");
let inputUpper = prompt("Enter text to convert to uppercase:");
document.write(inputUpper.toUpperCase() + "<br>");

let inputTitle = prompt("Enter text for title case:");
let title = inputTitle.slice(0,1).toUpperCase() + inputTitle.slice(1).toLowerCase();
document.write(title + "<br>");


let num = 35.36;
document.write(num.toString().replace(".", "") + "<br>");


let username = prompt("Enter a username:");
let invalidChars = [33, 44, 46, 64];
for (let i = 0; i < username.length; i++) {
    if (invalidChars.includes(username.charCodeAt(i))) {
        alert("Invalid username! Contains special characters.");
        break;
    }
}

let A = ["cake", "apple pie", "cookie", "chips", "patties"]; 
let searchItem = prompt("Search item:").toLowerCase();
if (A.includes(searchItem)) {
    alert(searchItem + " is available");
} else {
    alert("Not available");
}


let password = prompt("Enter password:");
if (
    password.length < 6 ||
    !isNaN(password[0]) ||
    !(/[A-Za-z]/.test(password)) ||
    !(/[0-9]/.test(password))
) {
    alert("Invalid password! Follow rules.");
} else {
    alert("Password accepted.");
}


let university = "University of Karachi";
let arr = university.split(" ");
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}


let textLast = prompt("Enter text:");
document.write("Last character: " + textLast.charAt(textLast.length - 1) + "<br>");

let sentence = "The quick brown fox jumps over the lazy dog";
let count = sentence.toLowerCase().match(/the/g).length;
document.write("Occurrences of 'the': " + count);
