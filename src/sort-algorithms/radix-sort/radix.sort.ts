// radix sort helpers

function getDigit(num: number, place: number): number {
  const bigMod: number = num % 10 ** (place + 1);
  const smallMod: number = num % 10 ** place;
  return (bigMod - smallMod) / 10 ** place;
}

function getDigit2(num: number, place: number): number {
  return Math.floor(Math.abs(num) / 10 ** place) % 10;
}

function digitCount(num: number): number {
  return num.toString().length;
}

function digitCount2(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums: number[]): number {
  let max = digitCount2(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (digitCount2(nums[i]) > max) max = digitCount2(nums[i]);
  }
  return max;
}

function mostDigits2(nums: number[]): number {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(digitCount2(nums[i]), max);
  }
  return max;
}

// radix sort

interface arrayMap {
  [key: number]: number[];
}

// function radixSort(nums: number[]): number[] {
//   const buckets: arrayMap = {
//     0: [],
//     1: [],
//     2: [],
//     3: [],
//     4: [],
//     5: [],
//     6: [],
//     7: [],
//     8: [],
//     9: [],
//   };
//   const iterations: number = mostDigits2(nums);

//   let clonedNums: number[] = [...nums];
//   for (let i = 0; i < iterations; i++) {
//     const clonedBuckets: arrayMap = JSON.parse(JSON.stringify(buckets));
//     for (let num of clonedNums) {
//       clonedBuckets[getDigit2(num, i)].push(num);
//     }
//     clonedNums = Object.values(clonedBuckets).reduce((acc, bucketContent) => {
//       return acc.concat(bucketContent);
//     }, []);
//   }
//   return clonedNums;
// }

// function radixSort(nums: number[]): number[] {
//   const iterations: number = mostDigits2(nums);

//   function helper(helperNums, i) {
//     if (i === iterations) return helperNums;

//     const buckets: arrayMap = {
//       0: [],
//       1: [],
//       2: [],
//       3: [],
//       4: [],
//       5: [],
//       6: [],
//       7: [],
//       8: [],
//       9: [],
//     };

//     for (let num of helperNums) {
//       buckets[getDigit2(num, i)].push(num);
//     }
//     helperNums = Object.values(buckets).reduce((acc, bucketContent) => {
//       return acc.concat(bucketContent);
//     }, []);
//     return helper(helperNums, i + 1);
//   }
//   const result = helper(nums, 0);

//   return result;
// }

// function radixSort(nums: number[]): number[] {
//   const iterations: number = mostDigits2(nums);

//   for (let i = 0; i < iterations; i++) {
//     // const buckets: number[][] = Array.from({ length: 10 }, () => []);
//     // const buckets: number[][] = [...new Array(10)].fill([]); <- doesn't work because buckets[0].push(el) will push element el to every array element, not just 0
//     const buckets: number[][] = [...new Array(10)].map(() => []);

//     for (let num of nums) {
//       const currDigit = getDigit2(num, i);
//       buckets[currDigit].push(num);
//     }

//     // nums = [].concat(...buckets);
//     nums = buckets.reduce(
//       (acc: number[], curr: number[]) => acc.concat(curr),
//       [] as number[]
//     );
//   }
//   return nums;
// }

function radixSort(nums: number[]): number[] {
  const iterations: number = mostDigits2(nums);

  for (let i = 0; i < iterations; i++) {
    const buckets: number[][] = [...new Array(10)].map(() => []);
    for (let num of nums) {
      const currDigit = getDigit2(num, i);
      buckets[currDigit].push(num);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

console.log('radixSort', radixSort([32123, 12, 12123, 131, 13]));
