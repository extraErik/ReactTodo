// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Guy', 'Adam'];
// var groupB = ['Anthony'];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Anthony', 97];
var personTwo = ['Mortimer', 12];
// Hi Anthony, you are 97
var greet = function(name, age) {
    return 'Hi ' + name + ', you are ' + age;
};
console.log(greet(...person));
console.log(greet(...personTwo));

var names = ['Evan', 'Meghan'];
var final = ['Erik', ...names];
final.forEach(function(name){
    console.log(name);
})
