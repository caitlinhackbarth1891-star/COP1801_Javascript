// Create a variable to hold all webpage output
let output = "";

// -----------------------------
// Part 1 - For Loop
// -----------------------------
output += "<h2>Odd and Even Numbers</h2>";

for (let count = 0; count <= 10; count++) {

    if (count % 2 === 0) {
        output += "Count " + count + " is even<br>";
    } else {
        output += "Count " + count + " is odd<br>";
    }

}

// -----------------------------
// Part 2 - Do While Loop
// -----------------------------
let myNum;

// Ask the user for a number between 5 and 20
do {
    myNum = Number(prompt("Enter a number between 5 and 20:"));
} while (myNum < 5 || myNum > 20 || isNaN(myNum));

output += "<h2>Do While Loop</h2>";

let loopCounter = 1;

// Display the loop counter until it equals myNum
do {
    output += loopCounter + "<br>";
    loopCounter++;
} while (loopCounter <= myNum);

// -----------------------------
// Part 3 - Array
// -----------------------------
const subjects = [
    "Accounting",
    "Algebra",
    "Programming",
    "Art",
    "Data Analytics"
];

output += "<h2>Subjects Using forEach()</h2>";

// Display the array using forEach()
subjects.forEach(function(subject) {
    output += subject + "<br>";
});

// -----------------------------
// Part 4 - Display Subjects with Commas
// -----------------------------
output += "<h2>Subjects Separated by Commas</h2>";

output += subjects.join(", ");

// -----------------------------
// Display everything on the webpage
// -----------------------------
document.getElementById("output").innerHTML = output;