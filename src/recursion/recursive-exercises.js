/* eslint-disable no-restricted-syntax */

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

// function capitalizeFirst(arr) {
//   const resArr = [];

//   function helper(inputArr) {
//     if (inputArr.length === 0) return;
//     resArr.push(inputArr[0].charAt(0).toUpperCase() + inputArr[0].slice(1));

//     helper(inputArr.slice(1));
//   }

//   helper(arr);

//   return resArr;
// }

// capitalizeFirst(['car', 'taco', 'banana']);
// console.log(
//   "capitalizeFirst(['car','taco','banana'])",
//   capitalizeFirst(['car', 'taco', 'banana'])
// );

// ----------------------------------------------------------------

// function nestedEvenSum(obj) {
//   let res = 0;

//   function helper(inputObj) {
//     const values = Object.values(inputObj);

//     for (let i = 0; i < values.length; i++) {
//       if (typeof values[i] !== 'object') {
//         if (values[i] % 2 === 0) res += values[i];
//       } else {
//         helper(values[i]);
//       }
//     }
//   }

//   helper(obj);

//   return res;
// }

// const obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: 'yup',
//     },
//   },
// };

// const obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: 'car' },
// };

// nestedEvenSum(obj1);
// console.log('nestedEvenSum(obj1)', nestedEvenSum(obj1));
// nestedEvenSum(obj2);
// console.log('nestedEvenSum(obj2)', nestedEvenSum(obj2));

// -------------------------------------------------------------

// function capitalizeWords(words) {
//   const resArr = [];

//   function helper(inputArr) {
//     if (!inputArr.length) return;

//     resArr.push(inputArr[0].toUpperCase());

//     helper(inputArr.slice(1));
//   }

//   helper(words);

//   return resArr;
// }

// const words = ['i', 'am', 'learning', 'recursion'];
// capitalizeWords(words);
// console.log('capitalizedWords(words)', capitalizeWords(words));

// -------------------------------------------------------------

// function stringifyNumbers(inObject) {
//   if (typeof inObject !== 'object' || inObject === null) {
//     // Return the value if inObject is not an object
//     return typeof inObject === 'number' ? inObject.toString() : inObject;
//   }

//   // Create an array or object to hold the values
//   const outObject = Array.isArray(inObject) ? [] : {};

//   for (const key in inObject) {
//     // Looping over objects with a for in loop will include properties that are inherited through the prototype chain.
//     // This behavior can lead to unexpected items in your for loop.
//     if (Object.prototype.hasOwnProperty.call(inObject, key)) {
//       const value = inObject[key];

//       // Recursively (deep) copy for nested objects, including arrays
//       outObject[key] = stringifyNumbers(value);
//     }
//   }

//   return outObject;
// }

function stringifyNumbers(inObject) {
  // Create an array or object to hold the values
  const outObject = Array.isArray(inObject) ? [] : {};

  for (const key in inObject) {
    // Looping over objects with a for in loop will include properties that are inherited through the prototype chain.
    // This behavior can lead to unexpected items in your for loop.
    if (Object.prototype.hasOwnProperty.call(inObject, key)) {
      const value = inObject[key];
      if (typeof value === 'number') {
        // if value is number, then do .toString() before passing to outObject
        outObject[key] = value.toString();
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        // if value is another obj, do stringifyNumbers recursively
        outObject[key] = stringifyNumbers(value);
      } else {
        // if value is array or string, then just pass value to outObject
        outObject[key] = value;
      }
    }
  }

  return outObject;
}

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

stringifyNumbers(obj);
console.log('stringifyNumbers(obj)', stringifyNumbers(obj));

// ------------------------------

// function collectStrings(obj) {
//   const resArr = [];

//   function helper(inObject) {
//     const values = Object.values(inObject);

//     for (let i = 0; i < values.length; i++) {
//       if (typeof values[i] === 'string') {
//         resArr.push(values[i]);
//       } else {
//         helper(values[i]);
//       }
//     }
//   }

//   helper(obj);

//   return resArr;
// }

// const obj = {
//   stuff: 'foo',
//   data: {
//     val: {
//       thing: {
//         info: 'bar',
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: 'baz',
//           },
//         },
//       },
//     },
//   },
// };

// collectStrings(obj);
// console.log('collectStrings(obj)', collectStrings(obj));
