// function reverse(str) {
//   let res = '';

//   function helper(input) {
//     if (input.length === 0) return;

//     res += input[input.length - 1];
//     console.log(input.slice(0, -1));
//     helper(input.slice(0, -1));
//   }

//   helper(str);

//   return res;
// }

// console.log(reverse('awesome'));

// -------------------------------

// function isPalindrome(str) {
//   let res = '';

//   function helper(input) {
//     if (input.length === 0) return;

//     res += input[input.length - 1];
//     console.log(input.slice(0, -1));
//     helper(input.slice(0, -1));
//   }

//   helper(str);

//   return res === str;
// }

// console.log(isPalindrome('awesome'));

// -------------------------------

// function someRecursive(arr, callback) {
//   if (!arr.length) return false;
//   if (callback(arr[0]) === true) return true;

//   return someRecursive(arr.slice(1), callback);
// }

// const isOdd = (val) => val % 2 !== 0;

// console.log(someRecursive([1, 2, 3, 4], isOdd));
// console.log(someRecursive([2, 4], isOdd));
// console.log(someRecursive([1, 2, 3], isOdd));

// someRecursive([1, 2, 3, 4], isOdd);
// console.log(
//   'someRecursive([1, 2, 3, 4], isOdd)',
//   someRecursive([1, 2, 3, 4], isOdd)
// );
// someRecursive([4, 6, 8, 9], isOdd);
// console.log(
//   'someRecursive([4, 6, 8, 9], isOdd)',
//   someRecursive([4, 6, 8, 9], isOdd)
// );
// someRecursive([4, 6, 8], isOdd);
// console.log('someRecursive([4, 6, 8], isOdd)', someRecursive([4, 6, 8], isOdd));
// someRecursive([4, 6, 8], (val) => val > 10);
// console.log(
//   'someRecursive([4, 6, 8], (val) => val > 10)',
//   someRecursive([4, 6, 8], (val) => val > 10)
// );

// -------------------------------

// function flatten(arr) {
//   const result = [];

//   function helper(inputArr) {
//     if (!inputArr.length) return;

//     if (typeof inputArr[0] !== 'object') {
//       result.push(inputArr[0]);
//     } else {
//       helper(inputArr[0]);
//     }

//     helper(inputArr.slice(1));
//   }

//   helper(arr);

//   return result;
// }

// function flatten(oldArr) {
//   let newArr = [];
//   for (let i = 0; i < oldArr.length; i++) {
//     if (Array.isArray(oldArr[i])) {
//       newArr = newArr.concat(flatten(oldArr[i]));
//     } else {
//       newArr.push(oldArr[i]);
//     }
//   }
//   return newArr;
// }

// flatten([1, 2, 3, [4, 5]]);
// console.log('flatten([1, 2, 3, [4, 5]]);', flatten([1, 2, 3, [4, 5]]));
// flatten([1, [2, [3, 4], [[5]]]]);
// console.log(
//   'flatten([1, [2, [3, 4], [[5]]]]);',
//   flatten([1, [2, [3, 4], [[5]]]])
// );
// flatten([[1], [2], [3]]);
// console.log('flatten([[1], [2], [3]]);', flatten([[1], [2], [3]]));
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
// console.log(
//   'flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);',
//   flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])
// );

// console.log(Array.isArray([1]));
// console.log(Array.isArray(1));

// ------------------------------
