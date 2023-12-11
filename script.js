
function Calculate() {
    // Get height and weight values from input fields
    var height = parseFloat(document.getElementById("h_input").value);
    var weight = parseFloat(document.getElementById("w_input").value);

    // Calculate BMI
    var result = weight / ((height / 100) ** 2);

    // Display BMI result rounded to 2 decimal places
    document.getElementById("bmi-output").innerHTML = result.toFixed(2);

    // Determine BMI status
    var status = "";

    if (result < 18.5) {
        status = "Underweight";
    } else if (result < 25) {
        status = "Healthy";
    } else if (result < 30) {
        status = "Overweight";
    } else {
        status = "Obesity";
    }

    // Display BMI status
    document.getElementById("bmi-status").innerHTML = status;
}

function LengthConverter(valNum) {
    // Convert a value from one unit to another (example: feet to cm)
    var convertedValue = valNum / 0.032808;

    // Display the converted value rounded to 2 decimal places
    document.getElementById("outputcm").innerHTML = convertedValue.toFixed(2);
}

