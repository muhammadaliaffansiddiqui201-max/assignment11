// 1. Power Function
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

// 2. Leap Year
function isLeapYear(year) {
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}

// 3. Triangle Area
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}
function triangleArea(a, b, c) {
    let s = calculateS(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// 4. Average & Percentage
function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
function percentage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 300) * 100;
}
function mainFunction() {
    console.log("Average:", average(70, 80, 90));
    console.log("Percentage:", percentage(70, 80, 90));
}

// 5. Custom indexOf
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1;
}

// 6. Delete Vowels
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, "");
}

// 7. Two Vowels Together
function countVowelPairs(text) {
    let count = 0;
    for (let i = 0; i < text.length - 1; i++) {
        switch (text[i] + text[i + 1]) {
            case "ea":
            case "ui":
            case "ae":
            case "io":
                count++;
        }
    }
    return count;
}

// 8. Distance Conversion
function meters(km) { return km * 1000; }
function feet(km) { return km * 3280.84; }
function inches(km) { return km * 39370.1; }
function cm(km) { return km * 100000; }

// 9. Overtime Pay
function overtimePay(hours) {
    if (hours > 40) {
        return (hours - 40) * 12;
    }
    return 0;
}

// 10. Currency Notes
function currencyNotes(amount) {
    let hundreds = amount;
    let fifties = hundreds * 2;
    let tens = hundreds * 10;
    return { hundreds, fifties, tens };
}

// DOM FUNCTIONS
function showAlert() {
    alert("Link Clicked!");
}

function imgAlert() {
    alert("Image Clicked!");
}

function deleteRow(id) {
    document.getElementById(id).remove();
}

function changeImg(img) {
    img.src = "https://via.placeholder.com/150/0000FF";
}

function resetImg(img) {
    img.src = "https://via.placeholder.com/150";
}

let count = 0;
function increase() {
    count++;
    document.getElementById("counter").innerText = count;
}
function decrease() {
    count--;
    document.getElementById("counter").innerText = count;
}
