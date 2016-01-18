//predefined array
var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

//output
var output = findYoungestPerson(people);
console.log(output);


function findYoungestPerson(array) {
    //sort people by age
    people.sort(function (a, b) {
        return a.age-b.age
    })

    //break if hasSmartphone === true and return first and last name
    for (var i = 0; i < people.length; i++) {
        if (people[i].hasSmartphone === true) {
            var stringOutput = "The youngest person is " + people[i].firstname + " " + people[i].lastname;
            return (stringOutput);
            break;
        }
    }
}