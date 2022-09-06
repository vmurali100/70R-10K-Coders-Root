// "count number of vowels in a string"
var string = prompt("enter a string")
var vowels = /[aeiou]/gi;
var char = string.match(vowels)
console.log(char+ " ")
console.log(char.length)