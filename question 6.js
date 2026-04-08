let f = parseInt(prompt("enter a"));
let g = parseInt(prompt("enter b"));
let y = parseInt(prompt("enter c"));

let score = (3 * f) + (1 * g) - (2 * y);

if (score < 0) {
    score = 0;
}

if (f + g + y > 50) {
    score = score - 10;
}

let result = "fail";
if (score >= 60) {
    result = "pass";
}

alert(score + ", " + result);