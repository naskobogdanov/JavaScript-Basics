//input
var firstCase = sortLetters('HelloWorld', true);
var secondCase = sortLetters('HelloWorld', false);

//output
console.log('\'%s\'', firstCase);
console.log();
console.log('\'%s\'', secondCase);

function sortLetters(string, boolean) {

    //put letters in an array
    var letterArray = [];
    for (var i = 0; i < string.length; i++) {
        letterArray.push(string.substring(i,i +1));
    }

    //sort the array - case insensitive
    letterArray.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    //reverse if boolean === false
    if (boolean === false) {
        letterArray.reverse();
    }

    //return the array as string
    return letterArray.join("");
}