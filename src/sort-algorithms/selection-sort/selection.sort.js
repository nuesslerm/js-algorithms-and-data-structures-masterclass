// ES5
// function swapES5(arr, idx1, idx2) {
//   const temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// ES2015
// const swapES2015 = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

// -------------------------------------------------------------------

/* function selectionSort(arr) {
  let minIndex;

  for (
    let firstUnsortedIndex = 0;
    firstUnsortedIndex < arr.length;
    firstUnsortedIndex++
  ) {
    minIndex = firstUnsortedIndex;
    for (let j = firstUnsortedIndex; j < arr.length; j++) {
      if (arr[j] < arr[minIndex] {
        minIndex = j;
      }
    }

    if (minIndex !== firstUnsortedIndex) swapES5(arr, firstUnsortedIndex, minIndex);
  }

  return arr;
}

console.log('bubblesort', selectionSort([23, 45, 6, 13, -3, 88])); */

// ---------------------------------------------------------------

function selectionSort(arr) {
  const swapES2015 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (
    let firstUnsortedIndex = 0;
    firstUnsortedIndex < arr.length;
    firstUnsortedIndex++
  ) {
    let minIndex = firstUnsortedIndex;
    for (let j = firstUnsortedIndex + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    console.log(firstUnsortedIndex, minIndex);
    if (minIndex !== firstUnsortedIndex)
      swapES2015(arr, firstUnsortedIndex, minIndex);
  }

  return arr;
}

console.log('selectionSort', selectionSort([23, 45, 6, 13, -3, 88]));
