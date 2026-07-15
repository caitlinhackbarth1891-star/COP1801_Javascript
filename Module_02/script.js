// Ask the user to enter their first name
let Fname = prompt("What is your first name?");

// Store the value of Pi in a constant
const piValue = 3.1415926;

// Ask the user to enter their favorite number
let myFavNum = Number(prompt("What is your favorite number?"));

// Calculate the area of a circle using the favorite number as the radius
let myArea = piValue * myFavNum * myFavNum;

// Display all variables and descriptions on the webpage
document.getElementById("output").innerHTML =
"<p>Hello " + Fname + "!</p>" +
"<p>First Name (Fname): " + Fname + "</p>" +
"<p>Favorite Number (myFavNum): " + myFavNum + "</p>" +
"<p>Value of Pi (piValue): " + piValue + "</p>" +
"<p>Circle Area (myArea): " + myArea.toFixed(2) + "</p>";