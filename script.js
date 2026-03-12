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
function calculateCalories(){

let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;
let age = document.getElementById("age").value;
let gender = document.getElementById("gender").value;
let activity = document.getElementById("activity").value;

let bmr;

if(gender === "male"){
bmr = 10*weight + 6.25*height - 5*age + 5;
}
else{
bmr = 10*weight + 6.25*height - 5*age - 161;
}

let calories = bmr * activity;

document.getElementById("caloriesResult").innerHTML =
"Your daily calorie need: " + Math.round(calories) + " kcal";

}


