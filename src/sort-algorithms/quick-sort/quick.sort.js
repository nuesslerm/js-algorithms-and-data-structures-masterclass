// quick sort

function swap(arr, firstIndex, secondIndex) {
  const temp = arr[firstIndex];

  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  // const pivotStartIndex = 0;
  let pivotIndex = 0;
  // swap(arr, 0, pivotStartIndex);

  for (let i = startIndex; i <= endIndex; i++) {
    if (arr[i] < arr[0]) {
      pivotIndex += 1;
      swap(arr, i, pivotIndex);
    }
  }
  swap(arr, 0, pivotIndex);

  return pivotIndex;
}

console.log(pivot([14, 6, 4, 8, 12, 2, 15, 22]));

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   console.log('start: %s, end: %s', left, right);
//   if (left < right) return;
//   const pivotIndex = pivot(arr, left, right);

//   quickSort(arr, left, pivotIndex - 1);
//   quickSort(arr, pivotIndex + 1, right);

//   return arr;
// }

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
