// function comparator(a, b) {
//   return a - b;
// }

// const arr = [23, 45, 6, 12, 13];

// console.log(arr.sort(comparator));

/* 
function numberCompare(num1, num2) {
  return num1 - num2;
}

let res1 = [6, 4, 15, 10].sort(numberCompare);
// [ 4, 6, 10, 15 ]

console.log(res1);

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

let res2 = ['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(
  compareByLen
);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]

console.log(res2);
*/

// ----------------------------------------------------------------

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

/* // bubble sort

function bubbleSort(arr) {
  let lastUnsortedIndex = arr.length - 1;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < lastUnsortedIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        swapES2015(arr, i, i + 1);
        swapped = true;
      }
      // console.log(arr, swapped);
    }
    lastUnsortedIndex--;
  } while (swapped);

  return arr;
}

console.log('bubblesort', bubbleSort([23, 45, 6, 12, 13])); */

// ----------------------------------------------------------------

// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);
// // expected result: "12345"

// ----------------------------------------------------------------

function badBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // swap
        swapES5(arr, j, j + 1);
      }
    }
  }

  return arr;
}

console.log('bubblesort', badBubbleSort([23, 45, 6, 12, 13]));
