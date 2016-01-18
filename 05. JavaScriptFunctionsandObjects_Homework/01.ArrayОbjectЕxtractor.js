//input array
var input = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
];

//new array for the output
var outputArray = [];

//ann only elements which constructor === Object to the outputArray
for (var i = 0; i < input.length; i++) {
    if (input[i].constructor === Object) {
        outputArray.push(input[i]);
    }
}

//print the output
console.log(outputArray);
