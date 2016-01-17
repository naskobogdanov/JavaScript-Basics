//Person constructor
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

//Crating persons in people array
var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Liberty", 57),
    new Person("Jon", "Skeet", 38)
];

//Input
groupBy('firstName');
console.log()
groupBy('lastName');
console.log();
groupBy('age');

//Groups people elements by criteria
function groupBy(criteria) {
    if (criteria === 'firstName') {
        people.sort(function (a, b) {
            var nameA = a.firstName.toLowerCase(), nameB = b.firstName.toLowerCase();
            sortByName(nameA, nameB);
        })
    }

    if (criteria === 'lastName') {
        people.sort(function (a, b) {
            var nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase();
            sortByName(nameA, nameB);
        })
    }

    if (criteria === 'age') {
        people.sort(function (a, b) {
            return a.age-b.age
        })
    }

    print(criteria);

    function sortByName(nameA, nameB) {
        if (nameA < nameB) { //sort string ascending
            return -1
        }
        if (nameA > nameB) {
            return 1
        }
        return 0; //default return value (no sorting)
    }
}


//Prints the result after grouping
 function print(criteria) {

     var strings = [];
     var counter = 0;

     for (var i = 0; i < people.length; i++) {
         if (criteria === "firstName") {
             var currentItem = people[i].firstName;
             var previousItem = i > 0 ? people[i - 1].firstName : '';
         }
         if (criteria === "lastName") {
             var currentItem = people[i].lastName;
             var previousItem = i > 0 ? people[i - 1].lastName : '';
         }
         if (criteria === "age") {
             var currentItem = people[i].age;
             var previousItem = i > 0 ? people[i - 1].age : '' ;
         }

         strings[counter] = "Group " + currentItem +" : [" + people[i].firstName + " " + people[i].lastName + " (age " + people[i].age + ")]";

         if (i > 0 && currentItem === previousItem) {
             strings[counter - 1] = strings[counter -1].toString().substring(0, strings[counter - 1].length - 1)
                 + ", " + people[i].firstName + " " + people[i].lastName + " (age " + people[i].age + ")]";
             counter--;
         }
         counter++;
     }

     for (var i = 0; i < strings.length; i++) {
         console.log(strings[i]);
     }
 }