console.log('Hello');

//Declare an add function
function add(number1, number2) {
    return number1 + number2;
}

//Declare a function that takes a function as an argument
function doMath(operation, number1, number2) {
    return operation(number1, number2);
}

//Pass a function into another.
let sum = doMath(add, 1, 2);
console.log(sum);

// Array Filter Function slide 6&7

// let students = [
//    { name: 'John Lennon', average: 90 },
//    { name: 'Ringo Starr', average: 58 },
//    { name: 'Paul McCartney', average: 82 }
// ];

// let passingStudents = students.filter(function(student) {
//    return student.average > 60;
// });

// passingStudents === [
//    { name: 'John Lennon', average: 90 },
//    { name: 'Paul McCartney', average: 82 }
// ];

// console.log(passingStudents);

// Find Function slide 8 -- finds only 1 result -- the 1st result

// let students = [
//    { name: 'John Lennon', average: 90 },
//    { name: 'Ringo Starr', average: 58 },
//    { name: 'Paul McCartney', average: 82 }
// ];

// let passingStudents = students.find(function(student) {
//     return student.average > 50;
// });

// passingStudents === [
//    { name: 'John Lennon', average: 90 }
// ];

// console.log(passingStudents);

// Map Array Function

// let students = [
//   { firstName: 'Cam', lastName: 'Newton' },
//    { firstName: 'Ted', lastName: 'Ginn' },
//    { firstName: 'Greg', lastName: 'Olsen' }
// ]

//let fullNames = students.map(function(student) {
//   return `${student.firstName} ${student.lastName}`;
// })

// fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let randomNumber = numbers.map(function(number) {
//    return (Math.random() * number).toFixed(2);
// });

// console.log("Our random numbers are: ");
// console.log(randomNumber);

// REDUCE ARRAY FUNCTION

let students = [
    { name: 'Cam Newton', assignmentsCompleted: 6 },
    { name: 'Ted Ginn', assignmentsCompleted: 10 },
    { name: 'Greg Olsen', assignmentsCompleted: 8 }
]

let totalAssignments = students.reduce(function(sum, current) {
    return sum + current.assignmentsCompleted;
}, 0);

console.log(totalAssignments); // totalAssignments === 24;

// reduce will return 1 sum based on all that is input