// Basic Programming examples. Feel free to change or add more examples to this file.

// Data Types
// Strings
'cat'
'dog'
'hampster'

//Numbers
1
100
2.5
0.75

1 + 1;
4 - 2;
2 * 6;
6 / 3;
5 % 4;


// Booleans
true
false


// Logical Operators (Students should be able to predict the output based on the discussion about logical operators)
1 === 1;
1 === 2;
'cat' === 'dog';
'dog' === 'dog';

2 >= 1;
3 <= 3;

'Yankees' > 'Mets';
'Giants' > 'Jets';

1 === 2 && 1 === 10;
true && true;
true && false;
true || false;
false || false;
(true && false) || (true && true);

// Variables
var myCat = 'RiRi';
var myNumber = 100;
typeof(myCat);
typeof(myNumber);


// If Statements
var theBronx = true;

if ( theBronx === true) {
  console.log('Boogie Down Bronx in the house!');
} else {
  console.log("It's all good, baby baby!");
}


// Arrays
var myGear = ['sneakers', 't-shirts', 'jacket'];
myGear[0]; // 'sneaker'
myGear[1]; // 't-shirt'
myGear[2]; // 'jacket'
myGear.length // 3
myGear.push('jeans'); // jeans wil be added to the end of the array
myGear.pop();
myGear; // ['sneakers', 't-shirt', 'jacket'];


// Loops
myGear = ['sneakers' , 't-shirts', 'jacket'];

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

for (var i = 0; i < myGear; i++) {
  console.log(myGear[i]);
}

myGear.forEach(function(item){
	console.log(item);
});


// Functions
var sayWuzup = function() {
  console.log('Wazzzuuuuup!');
}
sayWuzup(); // Wazzzuuuup!

var sayName = function(name) {
  console.log('Hello ' + name);
}
sayName('Jamal'); // Hello Jamal

var add = function(num1, num2) {
  return num1 + num2;
}
add(1, 2); // 3


// Objects
var team = { name: 'Heat', city: 'Miami', state: 'FL' }
team.name; // 'Heat'
team.city; // 'Miami'
team.state; // 'FL'

var playerOne = { first: 'Lebron', last: 'James', age: 30, number: 6 }
playerOne.first; // 'Lebron'
playerOne.last; // 'James'
playerOne.age; // 30
playerOne.number; // 6
playerOne.rings = 2;

// Exercise - students should get together in groups and build a simple program using what they learned.
