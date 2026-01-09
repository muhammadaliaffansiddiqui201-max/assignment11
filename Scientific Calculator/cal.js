let display = document.getElementById("display");
let isDegree = true; // default DEG mode

/* Add value */
function appendValue(value) {
    if (display.value === "0") display.value = value;
    else display.value += value;
}

/* Clear */
function clearDisplay() {
    display.value = "0";
}

/* Delete whole word / number */
function deleteWord() {
    let value = display.value;

    // remove last number or operator
    value = value.replace(/[\d.]+$|[+\-*/()]$/, "");
    
    display.value = value === "" ? "0" : value;
}

/* Calculation */
function calculate() {
    display.value = eval(display.value);
}

/* +/- */
function toggleSign() {
    display.value = display.value * -1;
}

/* Square */
function square() {
    display.value = Math.pow(display.value, 2);
}

/* Square root */
function squareRoot() {
    display.value = Math.sqrt(display.value);
}

/* DEG / RAD toggle */
function toggleMode() {
    isDegree = !isDegree;
    document.querySelector(".mode").innerText = isDegree ? "DEG" : "RAD";
}

/* Convert if degree */
function toRadian(value) {
    return isDegree ? value * Math.PI / 180 : value;
}

/* Trigonometry */
function sin() {
    display.value = Math.sin(toRadian(display.value));
}

function cos() {
    display.value = Math.cos(toRadian(display.value));
}

function tan() {
    display.value = Math.tan(toRadian(display.value));
}

/* Logs */
function log() {
    display.value = Math.log10(display.value);
}

function ln() {
    display.value = Math.log(display.value);
}

/* Exponential */
function exp() {
    display.value = Math.exp(display.value);
}
