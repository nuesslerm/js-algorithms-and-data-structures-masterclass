// helper method recursion

// const collectOdds = (nums) => {
//   const resArr = [];

//   const pushToResArr = (arr) => {
//     if (arr.length === 0) return;

//     /**
//      * var somevar = new String('somestring') console.log(typeof somevar) // object
//      * string type checking ->
//      * if (typeof myVar === 'string' || myVar instanceof String)
//      * // it's a string
//      * else
//      * // it's something else
//      */
//     if (arr[0] % 2 === 1 /* && typeof arr[0] === 'number' */) {
//       resArr.push(arr[0]);
//     }

//     pushToResArr(arr.slice(1));
//   };

//   pushToResArr(nums);

//   return resArr;
// };

// console.log(typeof ('23434' % 2));
// console.log(typeof '23434');

// console.log(
//   collectOdds([
//     2,
//     34,
//     '23',
//     'sdfdfdf',
//     '35sdf',
//     341,
//     '345',
//     '624',
//     34,
//     64,
//     634,
//     63456,
//     345,
//     745,
//     23,
//     '456',
//     457,
//     4,
//     56,
//     24,
//     634,
//     6,
//     457,
//     46,
//     45,
//     7455,
//     645,
//     64,
//     7,
//     456,
//     45,
//     6,
//     457,
//     457,
//     35,
//   ])
// );

// ----------------------------------------------------------------

function collectOddValues(arr) {
  const result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
