// const data = [...Array(10)].map((_, i) => i + 1);
// const data1 = [...Array(10)].fill(1);

// console.log(data, data1);

function merge(arrA, arrB) {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      mergedArr.push(arrA[i]);
      i += 1;
    } else {
      mergedArr.push(arrB[j]);
      j += 1;
    }
  }

  while (i < arrA.length) {
    mergedArr.push(arrA[i]);
    i += 1;
  }

  while (j < arrB.length) {
    mergedArr.push(arrB[j]);
    j += 1;
  }

  return mergedArr;
}

// const arrB = [1, 3, 4, 5, 9, 123, 224];
// const arrA = [2, 6, 7, 8, 11, 25, 233, 2343, 34343];

// console.log(merge(arrA, arrB));
// console.log(arrA[8] > 2);
// console.log([].length);

// ------------------------------

// function split(arr) {
//   const splitArr = [];

//   function helper(inputArr) {
//     if (inputArr.length === 0 || inputArr.length === 1) {
//       splitArr.push(inputArr);
//       return;
//     }

//     const hlength = Math.floor(inputArr.length / 2);

//     const arrA = inputArr.slice(0, hlength);
//     const arrB = inputArr.slice(hlength);

//     helper(arrA);
//     helper(arrB);
//   }

//   helper(arr);

//   return splitArr;
// }

// -------------------------------

// function mergeSort(arr) {
//   const splitArr = split(arr);

//   function helper(inputArr) {
//     if (inputArr.length === 1) return inputArr[0];

//     const sortedArr = [];

//     let i = 0;

//     while (i < inputArr.length) {
//       if (!inputArr[i + 1]) {
//         sortedArr.push(inputArr[i]);
//       } else {
//         sortedArr.push(merge(inputArr[i], inputArr[i + 1]));
//       }
//       i += 2;
//     }

//     // console.log(sortedArr);
//     return helper(sortedArr);
//   }

//   return helper(splitArr);
// }

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

const someArr = [2, 6, 233, 7, 8, 11, 34343, 25, 2343];

console.log('mergeSort(someArr)', mergeSort(someArr));

// big-O of merge sort
// time-complexity (best): O(n logn)
// time-complexity (average): O(n logn)
// time-complexity (worst): O(n logn)
// space-complexity: O(n)
