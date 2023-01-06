const array = [1, 2, 3, 4, 5];

function removeItemFromArray(array, item) {
  let i = 0;
  while (i < array.length) {
    if (array[i] === item) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
  return array;
}

console.log(removeItemFromArray(array, 2));
