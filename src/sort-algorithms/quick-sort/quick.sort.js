// This function swaps the position of two elements in the array
function swap(arr, firstIndex, secondIndex) {
  const temp = arr[firstIndex]; 
  arr[firstIndex] = arr[secondIndex]; 
  arr[secondIndex] = temp; 
}

// This function chooses a pivot for the quicksort algorithm and rearranges all the 
// elements around the pivot. All the elements less than the pivot come before, and 
// all greater come after it
function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  let pivotIndex = startIndex; // We're using the first element as our pivot
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < arr[startIndex]) { // If an element is less than our pivot
      pivotIndex++; 
      swap(arr, i, pivotIndex); // Swap it with the element at pivotIndex
    }
  }
  swap(arr, startIndex, pivotIndex); // Swap the starting element with the pivotIndex
  return pivotIndex; // Return the pivotIndex
}

// The quickSort function
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) { // If there is more than one element to sort
    let pivotIndex = pivot(arr, left, right); // Get pivotIndex from pivot function
    // Recursively apply quickSort to both sides of the pivot
    quickSort(arr, left, pivotIndex - 1); // Sorts left side (elements less than pivot)
    quickSort(arr, pivotIndex + 1, right); // Sorts right side (elements greater than pivot)
  }
  return arr; // Return the sorted array
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
