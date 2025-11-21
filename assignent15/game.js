var a=[]
console.log(a);
 
var b=Array()
console.log(b);
var studentName=["Ali","Murtaza","Azan","Suhaib"]
console.log(studentName);

var numberArray=[23,56,70,100]
console.log(numberArray);

var boleansArray=[true,false,true,false]
console.log(boleansArray);

var mixedArray=["ali",5,true,"pakistan"]
console.log(mixedArray);

var educationArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
console.log(educationArray);
document.write("<h3>Qualifications in Pakistan:</h3>");

document.write("<ul>");
for(var i = 0; i < educationArray.length; i++){
    document.write("<li>" + educationArray[i] + "</li>");
}
document.write("</ul>");

document.write("<h3> player scores</h3>");
var playerNames = ["Ali", "Virat", "Babar"];
var playerScores = [450, 480, 490];
var totalScores = 500;

for(var i = 0; i < playerNames.length; i++){
    var percentage = (playerScores[i] / totalScores) * 100;
    document.write("Score of " + playerNames[i] + " is " +playerScores[i] + 
                   ". Percentage: " + percentage + "%<br>");
}


var colors = ["Red", "Blue", "Green"];
console.log(colors);
var addStart = prompt("Which color do you want to add at the beginning?");
colors.unshift(addStart);
console.log(colors);
var addEnd = prompt("Which color do you want to add at the end?");
colors.push(addEnd);
console.log(colors);
colors.unshift("Purple", "Pink");
colors.shift();
console.log(colors);
colors.pop();
console.log(colors);
var index = prompt("At which index do you want to add a color?");
var newColor = prompt("Enter color name:");
colors.splice(index, 0, newColor);
console.log(colors);
var delIndex = prompt("At which index do you want to delete color(s)?");
var delCount = prompt("How many colors you want to delete?");
colors.splice(delIndex, delCount);
console.log(colors);

document.write("<h2>Sort Scores</h2>");

var scores = [320, 230, 480, 120];
document.write("Scores of Students: " + scores + "<br>");

scores.sort();
document.write("Ordered Scores of Students: " + scores + "<br><br>");

document.write("<h2> Cities Array</h2>");

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2,5);

document.write("Cities List: " + cities + "<br>");
document.write("Selected Cities List: " + selectedCities + "<br><br>");

document.write("<h2> Array into String</h2>");

var arr = ["This", " is", " my", " cat"];
document.write("Array: " + arr + "<br>");

var sentence = arr.join("");
document.write("String: " + sentence +"<br>");

var queue=[];
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

document.write("<h3>FIFO Output:</h3>");
document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>");

var stack = [];
stack.push("Keyboard");
stack.push("Mouse");
stack.push("Printer");
stack.push("Monitor");
document.write("<h3>LIFO Output:</h3>");

document.write(stack.pop() + "<br>");
document.write(stack.pop() + "<br>");
document.write(stack.pop() + "<br>");
document.write(stack.pop() + "<br>");



var phoneBrands = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h3>Select a Phone Brand:</h3>");

document.write("<select>");

for(var i = 0; i < phoneBrands.length; i++){
    document.write("<option>" + phoneBrands[i] + "</option>");
}

document.write("</select>");
