//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

const { table } = require("console");

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
element1 = ['hydrogen', 'H', 1.008]
element2 = ['helium', 'He', 4.003]
element26 = ['iron', 'Fe', 55.85]

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let arrTable = [];
arrTable.push(element1);
arrTable.push(element2);
arrTable.push(element26);

console.log(arrTable);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(arrTable[1], arrTable[1][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(arrTable[0][2], arrTable[1][0], arrTable[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

console.log("Part 5 here");
let dimensialArr = [['green','red','blue'],[1,2,3],[2.22,3.33,6.66]];
console.log(dimensialArr);
console.log(dimensialArr[0][1],dimensialArr[1][1],dimensialArr[2][2]);