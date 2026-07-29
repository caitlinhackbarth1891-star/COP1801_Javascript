// Prompt the user for service amount
let serviceAmount = parseFloat(prompt("Enter the dollar amount of the service ($5 - $500):"));

// Prompt the user for service quality
let serviceQuality = prompt("Enter the service quality (great, ok, or poor):").toLowerCase();


// Function to validate service quality
function validateServiceQuality(quality) {

    if (quality === "great" || quality === "ok" || quality === "poor") {
        return true;
    }

    return false;

}


// Function to validate service amount
function validateServiceAmount(amount) {

    if (amount >= 5 && amount <= 500) {
        return true;
    }

    return false;

}


// Function to calculate tip
function calculateTip(amount, quality) {

    let tipRate = 0;

    if (quality === "great") {
        tipRate = 0.20;
    }
    else if (quality === "ok") {
        tipRate = 0.15;
    }
    else {
        tipRate = 0.10;
    }

    return amount * tipRate;

}


// Validate service quality
if (!validateServiceQuality(serviceQuality)) {

    document.getElementById("output").innerHTML =
        "Error: Invalid service quality entered. Please reload the page.";

}
else if (!validateServiceAmount(serviceAmount)) {

    document.getElementById("output").innerHTML =
        "Error: Service amount must be between $5.00 and $500.00.";

}
else {

    let tip = calculateTip(serviceAmount, serviceQuality);

    document.getElementById("output").innerHTML =
        `For a $${serviceAmount.toFixed(2)} bill with <strong>${serviceQuality}</strong> service, the recommended tip is <strong>$${tip.toFixed(2)}</strong>.`;

}