function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        document.getElementById("result").innerHTML = "Please enter all values";
        return;
    }

    height = height / 100;
    let bmi = (weight / (height * height)).toFixed(2);

    let category = "";
    let tips = "";

    if (bmi < 18.5) {
        category = "Underweight";
        tips = "You should eat more nutritious food and gain weight gradually.";
    } else if (bmi < 25) {
        category = "Normal";
        tips = "Great! Maintain your healthy lifestyle.";
    } else if (bmi < 30) {
        category = "Overweight";
        tips = "You should exercise regularly, reduce sugary & oily food, and maintain a balanced diet.";
    } else {
        category = "Obese";
        tips = "Consult a doctor or dietitian. Focus on controlled diet and regular exercise.";
    }

    document.getElementById("result").innerHTML =
        "Your BMI is " + bmi + "<br>Category: " + category +
        "<br><b>Tips:</b> " + tips;
}

