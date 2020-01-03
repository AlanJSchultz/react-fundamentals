//jshint esversion:6

const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics'},
    { name: 'Kenn', specialty: 'Norse Mythology'},
    { name: 'Paul', specialty: 'Tuvan throat singing'},
    { name: 'Aaron', specialty: 'Entomology'},
    { name: 'Carolyn', specialty: 'Kung Fu'},
];

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    instructor_names.push(instructors[i].name);
}
console.log(instructor_names); // [ 'Quincy', 'Kenn', 'Paul', 'Aaron', 'Carolyn' ]

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames); // [ 'Quincy', 'Kenn', 'Paul', 'Aaron', 'Carolyn' ]

// Exact same thing, different parameter name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNames); // [ 'Quincy', 'Kenn', 'Paul', 'Aaron', 'Carolyn' ]

// Fix the code in next line!
// const instructorInfo = `${instructor.map(instructor => ${instructor.name}: ${instructors.specialty}`)}`;
// console.log(instructorInfo);


var kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30}
];
console.log(kvArray);
/*
[ { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 } ]
*/


var reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
});
/*
{ '1': 10 }
{ '2': 20 }
{ '3': 30 }
*/

