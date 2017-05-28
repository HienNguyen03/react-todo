// function add (a, b) {
//   return a + b;
// }
//
// var array1 = [1, 2];
// console.log(add(...array1));
//
// var array2 = [3, 4];
// var array3 = [...array1, ...array2, 5];
// console.log(array3);

var person1 = ['Hien', 25];
var person2 = ['Lily', 25];
function greet (name, age) {
  return 'Hello ' + name + ', age ' + age;
}

console.log(greet(...person1));
console.log(greet(...person2));

var name = ['Lily', 'Hien'];
var persons = ['Alex', ...name];

persons.forEach(function (value) {
  console.log( 'Hi ' + value);
});
