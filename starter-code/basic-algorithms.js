// Names and Input
var driver1 = 'Adrian';
var driver2 = prompt("Who is the navigator?")
console.log("The drivers name is " + driver1);
console.log("The drivers name is " + driver2)

//Conditionals
if (driver1.length > driver2.length) {
  console.log('The Driver has the longest name, it has ' + driver1.length + ' characters');
} else if (driver1.length < driver2.length) {
  console.log('Yo, navigator got the longest name, it has ' + driver2.length + ' characters');
} else {
  console.log('wow, you both got equally long names ' + driver1.length + ' characters!!')
}

var driver1 = 'Adrian';
console.log(driver1.toUpperCase().split('').join(' '));
var driver1 = 'Adrian';
console.log(driver1.split('').reverse().join(''));

var driver1 = 'Adrian';
var driver2 = 'Denise';

if (driver1 < driver2) {
  console.log(driver1)
} else {
  console.log(driver2)
}

// Lorem ipsum generator