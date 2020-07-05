export const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  if (arr[right] === val) return right;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === val) return mid;

    if (arr[mid] > val) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

export const binarySearchAlt = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start <= end) {
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  // console.log(start, mid, end);

  if (arr[mid] === val) return mid;
  return -1;
};

export const binarySearchShort = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start <= end) {
    if (val < arr[mid]) end = mid - 1;
    else start = mid + 1;

    mid = Math.floor((start + end) / 2);
  }

  // if (arr[mid] === val) return mid;
  // return -1;
  return arr[mid] === val ? mid : -1;
};
