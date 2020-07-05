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
