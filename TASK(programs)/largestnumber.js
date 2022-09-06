// "find the second largest number in an array"
array = [8, 20.4, 50, 62, 89, 88, 92, 95, 96];
console.log(array);
largestnumber = array[0];
secondlargestnumber = array[0];

for (i = 0; i < array.length; i++) {
  if (array[i] > largestnumber) {
    secondlargestnumber = largestnumber;
    largestnumber = array[i];
  } else if (array[i] > secondlargestnumber) {
    secondlargestnumber = array[i];
  }
}
console.log(secondlargestnumber);
