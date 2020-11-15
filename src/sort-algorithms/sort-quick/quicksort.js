const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function pivot(arr, start = 0, end = arr.length - 1) {
  // We are assuming the pivot is always the first element
  const pivotElement = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotElement > arr[i]) {
      // eslint-disable-next-line no-plusplus
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left > right) return;
  const pivotIndex = pivot(arr, left, right); // 3
  // left
  quickSort(arr, left, pivotIndex - 1);
  // right
  quickSort(arr, pivotIndex + 1, right);

  // eslint-disable-next-line consistent-return
  return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
