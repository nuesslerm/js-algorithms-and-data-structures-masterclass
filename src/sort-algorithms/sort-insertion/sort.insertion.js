// ES5
function swapES5(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swapES2015 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// -------------------------------------------------------------------

/* function insertionSort(arr) {
  for (
    let lastUnsortedIndex = 0;
    lastUnsortedIndex < arr.length;
    lastUnsortedIndex++
  ) {
    for (let i = lastUnsortedIndex; i >= 0; i--) {
      if (i === 0) swapES2015(arr, i, lastUnsortedIndex);
      if (arr[lastUnsortedIndex] > arr[i]) {
        swapES2015(arr, i + 1, lastUnsortedIndex);
        break;
      }
    }
  }

  return arr;
} */

// console.log('insertionSort', insertionSort([23, 45, 6, 13, -3, 88]));

//----------------------------------------------------------------------

/* function insertionSort(arr) {
  for (
    let lastUnsortedIndex = 1;
    lastUnsortedIndex < arr.length;
    lastUnsortedIndex++
  ) {
    for (let i = lastUnsortedIndex; i > 0; i--) {
      if (arr[i - 1] > arr[i]) {
        swapES2015(arr, i - 1, i);
      } else {
        break;
      }
    }
  }

  return arr;
}

console.log('insertionSort', insertionSort([23, 45, 6, 13, -3, 88])); */

// ----------------------------------------------------------------------

/* function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let lastUnsortedIndex = i;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        lastUnsortedIndex = j;
      }
    }
    if (lastUnsortedIndex !== i) {
      swapES2015(arr, i, lastUnsortedIndex);
    }
  }

  return arr;
}

console.log('insertionSort', insertionSort([23, 45, 6, 13, -3, 88])); */

// ----------------------------------------------------------------------------------------

/* function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    for (var j = i - 1; j >= 0 /* && arr[j] > currentVal /; j--) {
      if (arr[j] > currentVal) {
        arr[j + 1] = arr[j];
      } else {
        // can't break out of a for loop like this
        break;
      }
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log('insertionSort', insertionSort([23, 45, 6, 13, -3, 88])); */

// --------------------------------------------------------------

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log('insertionSort', insertionSort([23, 45, 6, 13, -3, 88]));
