function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if (height == "" || weight == "") {
        document.getElementById("result").innerHTML = "Please enter values";
        return;
    }

    height = height / 100;
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    var msg = "";

    if (bmi < 18.5) {
        msg = "Underweight";
    } else if (bmi < 25) {
        msg = "Normal";
    } else if (bmi < 30) {
        msg = "Overweight";
    } else {
        msg = "Obese";
    }

    document.getElementById("result").innerHTML =
        "BMI = " + bmi + "<br>Status: " + msg;
}
