var age = Number(38);
var maxAge = Number(118);
var food = 'chocolate';
var foodPerDay = Number(0.5);
var foodAmount = calcSupply(age, maxAge, food, foodPerDay);
printSupply(foodAmount, food, maxAge);

var age = Number(20);
var maxAge = Number(87);
var food = 'fruits';
var foodPerDay = Number(2);
var foodAmount = calcSupply(age, maxAge, food, foodPerDay);
printSupply(foodAmount, food, maxAge);

var age = Number(16);
var maxAge = Number(102);
var food = 'nuts';
var foodPerDay = Number(1.1);
var foodAmount = calcSupply(age, maxAge, food, foodPerDay);
printSupply(foodAmount, food, maxAge);

function calcSupply(age, maxAge, food, foodPerDay){
    var foodAmount = (maxAge - age) * 365 * foodPerDay;
    return foodAmount;
}

function printSupply(foodAmount, food, maxAge) {
    console.log("%skg of %s would be enough until I am %s years old.", foodAmount, food, maxAge)
}