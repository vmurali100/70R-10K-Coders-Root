// "sorting of array"
Array = [5, 2, 7, 4, 1, 6, 3,10, 8, 9];
function sortarray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) 
    {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
console.log(sortarray(Array));
