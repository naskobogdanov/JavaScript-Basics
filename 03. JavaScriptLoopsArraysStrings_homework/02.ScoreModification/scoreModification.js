//declare the variables
var arr = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];
var scoreArr = [];

//push only valid score numbers to a new array [0 < x < 400]
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] <= 400) {
        scoreArr.push(arr[i]);
    }
}

//scale them downwards -20%
for (var i = 0; i < scoreArr.length; i++) {
    scoreArr[i] -= 20/100 * scoreArr[i];
}

//sort in ascending order
function sortNumber(a,b){
    return a - b;
}
scoreArr.sort(sortNumber);

//print the array
console.log(scoreArr);