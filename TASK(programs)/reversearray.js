// "reversing an array"
let array = ["hi", "iam", "vishnu", 1, 2, 3];
let reversearray = [];
for (let i = array.length; i > 0; i--) {
  reversearray.push(array[i - 1]);
}
console.log(reversearray);
